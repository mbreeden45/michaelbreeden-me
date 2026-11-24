// Exercises api/chat.ts against a local mock of the Anthropic API (no key, no network, no cost):
//   npm run test:agent
import assert from 'node:assert/strict'
import { createServer } from 'node:http'
import type { AddressInfo } from 'node:net'

interface Seen {
  headers: Record<string, string | string[] | undefined>
  body: Record<string, unknown>
}
let seen: Seen | undefined

const mock = createServer((req, res) => {
  let raw = ''
  req.on('data', (c) => (raw += c))
  req.on('end', () => {
    const body = JSON.parse(raw || '{}') as { messages?: { content: string }[] }
    seen = { headers: req.headers, body }
    const last = body.messages?.at(-1)?.content ?? ''
    const reply = (status: number, payload: unknown) => {
      res.writeHead(status, { 'Content-Type': 'application/json' })
      res.end(JSON.stringify(payload))
    }
    if (last.includes('[ratelimit]')) return reply(429, { type: 'error', error: { type: 'rate_limit_error', message: 'slow down' } })
    if (last.includes('[boom]')) return reply(500, { type: 'error', error: { type: 'api_error', message: 'secret upstream detail' } })
    const msg = (text: string, stop = 'end_turn') => ({
      id: 'msg_test', type: 'message', role: 'assistant', model: 'claude-opus-5-5',
      content: stop === 'refusal' ? [] : [{ type: 'text', text }],
      stop_reason: stop, stop_details: stop === 'refusal' ? { type: 'refusal', category: null, explanation: 'x' } : null,
      stop_sequence: null, usage: { input_tokens: 10, output_tokens: 10 },
    })
    if (last.includes('[refuse]')) return reply(200, msg('', 'refusal'))
    if (last.includes('[banned]')) return reply(200, msg('That was built for NVIDIA.'))
    if (last.includes('[empty]')) return reply(200, msg('   '))
    reply(200, msg('Michael has built five proofs of concept.'))
  })
})
await new Promise<void>((r) => mock.listen(0, '127.0.0.1', r))
const port = (mock.address() as AddressInfo).port

process.env.ANTHROPIC_BASE_URL = `http://127.0.0.1:${port}`
process.env.ANTHROPIC_API_KEY = 'test-key'
delete process.env.SITE_AGENT_MODEL

const { default: handler } = await import('../api/chat.ts')
const { buildBrief } = await import('../src/data/brief.ts')

let n = 0
async function call(opts: { method?: string; origin?: string; ip?: string; body?: unknown; raw?: string }) {
  const headers: Record<string, string> = { 'content-type': 'application/json', 'x-forwarded-for': opts.ip ?? '1.1.1.1' }
  if (opts.origin) headers.origin = opts.origin
  const res = await handler.fetch(
    new Request('https://www.michaelbreeden.me/api/chat', {
      method: opts.method ?? 'POST',
      headers,
      body: opts.method === 'GET' ? undefined : (opts.raw ?? JSON.stringify(opts.body ?? {})),
    }),
  )
  return { status: res.status, data: (await res.json()) as { reply?: string; error?: string } }
}
const ask = (q: string, ip = '2.2.2.2') => call({ ip, body: { messages: [{ role: 'user', content: q }] } })
const check = (name: string, fn: () => void | Promise<void>) =>
  Promise.resolve(fn()).then(() => console.log(`PASS ${++n}. ${name}`))

await check('GET is rejected with 405', async () => assert.equal((await call({ method: 'GET' })).status, 405))
await check('a foreign Origin is rejected with 403', async () =>
  assert.equal((await call({ origin: 'https://evil.example', body: { messages: [{ role: 'user', content: 'hi' }] } })).status, 403))
await check('the site origin is accepted', async () =>
  assert.equal((await call({ origin: 'https://www.michaelbreeden.me', ip: '3.3.3.3', body: { messages: [{ role: 'user', content: 'hi' }] } })).status, 200))
await check('invalid JSON and bad shapes return 400', async () => {
  assert.equal((await call({ raw: '{nope' })).status, 400)
  assert.equal((await call({ body: { messages: [] } })).status, 400)
  assert.equal((await call({ body: { messages: [{ role: 'assistant', content: 'x' }] } })).status, 400)
  assert.equal((await call({ body: { messages: [{ role: 'user', content: 'a' }, { role: 'user', content: 'b' }] } })).status, 400)
  assert.equal((await call({ body: { messages: [{ role: 'user', content: 'x'.repeat(601) }] } })).status, 400)
  assert.equal((await call({ body: { messages: [{ role: 'user', content: 5 }] } })).status, 400)
})
await check('a normal question returns a reply', async () => {
  const r = await ask('What has Michael built?')
  assert.equal(r.status, 200)
  assert.equal(r.data.reply, 'Michael has built five proofs of concept.')
})
await check('the request uses the right model, fallback, effort and brief', () => {
  const b = seen!.body as { model: string; fallbacks: unknown; output_config: { effort: string }; system: { text: string; cache_control?: unknown }[]; messages: unknown[]; thinking?: unknown; temperature?: unknown }
  assert.equal(b.model, 'claude-opus-5-5')
  assert.equal(b.fallbacks, 'default')
  assert.equal(b.output_config.effort, 'low')
  assert.ok(String(seen!.headers['anthropic-beta']).includes('server-side-fallback-2026-07-01'))
  assert.equal(b.thinking, undefined)
  assert.equal(b.temperature, undefined)
  assert.ok(b.system[0].text.includes('<BRIEF>') && b.system[0].text.includes('slack-salesforce-case-sync'))
  assert.ok(b.system[0].cache_control)
  assert.equal(b.messages.length, 1)
})
await check('the brief never contains a banned customer or program name', () => {
  const banned = /\b(nvidia|oracle|pfizer|assetmark|gaf|disney|directv|amazon|aws|nwcd|f1|formula\s*1|ricciardo|grand\s*prix|las\s*vegas|org62)\b/i
  assert.ok(!banned.test(buildBrief()), `brief leaks: ${buildBrief().match(banned)?.[0]}`)
})
await check('a refusal becomes a friendly reply', async () => {
  const r = await ask('[refuse]')
  assert.equal(r.status, 200)
  assert.match(r.data.reply!, /can't help with that one/)
})
await check('a reply naming a customer is replaced', async () => {
  const r = await ask('[banned]')
  assert.equal(r.status, 200)
  assert.ok(!/nvidia/i.test(r.data.reply!))
  assert.match(r.data.reply!, /not shared on this site/)
})
await check('an empty model reply is a 502', async () => assert.equal((await ask('[empty]')).status, 502))
await check('upstream 429 maps to 429', async () => assert.equal((await ask('[ratelimit]')).status, 429))
await check('upstream 500 maps to 502 without leaking detail', async () => {
  const r = await ask('[boom]')
  assert.equal(r.status, 502)
  assert.ok(!JSON.stringify(r.data).includes('secret'))
})
await check('a client is rate limited after 12 requests in the window', async () => {
  const codes: number[] = []
  for (let i = 0; i < 14; i++) codes.push((await ask('hello', '9.9.9.9')).status)
  assert.deepEqual(codes.slice(0, 12).every((c) => c === 200), true)
  assert.equal(codes[12], 429)
})
await check('a missing API key returns 503 not_configured', async () => {
  const key = process.env.ANTHROPIC_API_KEY
  delete process.env.ANTHROPIC_API_KEY
  const r = await ask('hello', '4.4.4.4')
  process.env.ANTHROPIC_API_KEY = key
  assert.equal(r.status, 503)
  assert.equal(r.data.error, 'not_configured')
})

console.log(`\nAll ${n} agent checks passed.`)
mock.close()
