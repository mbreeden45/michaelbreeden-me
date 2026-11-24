// Exercises api/chat.ts against a local mock of the Gemini API and /brief.md (no key, no network, no cost):
//   npm run test:agent
import assert from 'node:assert/strict'
import { createServer } from 'node:http'
import type { AddressInfo } from 'node:net'

interface Call {
  model: string
  headers: Record<string, string | string[] | undefined>
  body: {
    contents: { role: string; parts: { text: string }[] }[]
    systemInstruction?: { parts: { text: string }[] }
    generationConfig?: { maxOutputTokens?: number; thinkingConfig?: { thinkingLevel?: string }; temperature?: number }
  }
}
let calls: Call[] = []
let briefOk = true
const { buildBrief } = await import('../src/data/brief.ts')

const mock = createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/brief.md') {
    if (!briefOk) {
      res.writeHead(404)
      return res.end('nope')
    }
    res.writeHead(200, { 'Content-Type': 'text/markdown' })
    return res.end(`${buildBrief()}\n`)
  }
  let raw = ''
  req.on('data', (c) => (raw += c))
  req.on('end', () => {
    const model = /models\/([^:/]+):/.exec(req.url ?? '')?.[1] ?? ''
    const body = JSON.parse(raw || '{}') as Call['body']
    calls.push({ model, headers: req.headers, body })
    const last = body.contents?.at(-1)?.parts?.[0]?.text ?? ''
    const reply = (status: number, payload: unknown) => {
      res.writeHead(status, { 'Content-Type': 'application/json' })
      res.end(JSON.stringify(payload))
    }
    const ok = (parts: object[], finishReason = 'STOP') =>
      reply(200, { candidates: [{ content: { role: 'model', parts }, finishReason, index: 0 }], usageMetadata: { promptTokenCount: 10, candidatesTokenCount: 10 } })
    if (last.includes('[ratelimit]')) return reply(429, { error: { code: 429, message: 'quota', status: 'RESOURCE_EXHAUSTED' } })
    if (last.includes('[boom]')) return reply(500, { error: { code: 500, message: 'secret upstream detail', status: 'INTERNAL' } })
    if (last.includes('[flaky]') && model === 'gemini-3.5-flash-lite') return reply(503, { error: { code: 503, message: 'overloaded', status: 'UNAVAILABLE' } })
    if (last.includes('[notfound]') && model === 'gemini-3.5-flash-lite') return reply(404, { error: { code: 404, message: 'model not found', status: 'NOT_FOUND' } })
    if (last.includes('[block]')) return reply(200, { promptFeedback: { blockReason: 'SAFETY' }, candidates: [] })
    if (last.includes('[banned]')) return ok([{ text: 'That was built for NVIDIA.' }])
    if (last.includes('[empty]')) return ok([{ text: '   ' }])
    if (last.includes('[thoughts]')) return ok([{ text: 'secret reasoning', thought: true }, { text: 'Visible answer.' }])
    ok([{ text: 'Michael has built five proofs of concept.' }])
  })
})
await new Promise<void>((r) => mock.listen(0, '127.0.0.1', r))
const port = (mock.address() as AddressInfo).port

process.env.GEMINI_BASE_URL = `http://127.0.0.1:${port}`
process.env.GEMINI_API_KEY = 'test-key'
process.env.BRIEF_URL = `http://127.0.0.1:${port}/brief.md`
delete process.env.GEMINI_MODEL

const { default: handler } = await import('../api/chat.ts')

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
const check = (name: string, fn: () => void | Promise<void>) => Promise.resolve(fn()).then(() => console.log(`PASS ${++n}. ${name}`))

await check('GET is a health check that loads the brief and reports configuration', async () => {
  const r = await call({ method: 'GET' })
  assert.equal(r.status, 200)
  const d = r.data as unknown as { ok: boolean; configured: boolean; briefChars: number; model: string }
  assert.equal(d.ok, true)
  assert.equal(d.configured, true)
  assert.ok(d.briefChars > 5000)
  assert.equal(d.model, 'gemini-3.5-flash-lite')
  assert.ok(!JSON.stringify(d).includes('test-key'))
})
await check('other methods are rejected with 405', async () => assert.equal((await call({ method: 'PUT' })).status, 405))
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
  calls = []
  const r = await ask('What has Michael built?')
  assert.equal(r.status, 200)
  assert.equal(r.data.reply, 'Michael has built five proofs of concept.')
})
await check('the request uses the default model, low thinking, a token cap and the brief', () => {
  const c = calls[0]
  assert.equal(c.model, 'gemini-3.5-flash-lite')
  assert.equal(c.headers['x-goog-api-key'], 'test-key')
  assert.equal(c.body.generationConfig?.thinkingConfig?.thinkingLevel, 'LOW')
  assert.equal(c.body.generationConfig?.maxOutputTokens, 1500)
  const sys = c.body.systemInstruction!.parts[0].text
  assert.ok(sys.includes('<BRIEF>') && sys.includes('slack-salesforce-case-sync'))
  assert.ok(sys.includes(buildBrief().slice(0, 500)), 'grounded in the fetched brief')
  assert.deepEqual(c.body.contents.map((m) => m.role), ['user'])
  assert.ok(sys.includes('PERSONALITY AND TONE') && sys.includes('Dodgers'), 'personality is in the grounding')
  assert.ok(sys.includes('Claude Code and Cursor'), 'AI practice is in the grounding')
})
await check('history is sent with Gemini roles (user/model)', async () => {
  calls = []
  const r = await call({ ip: '5.5.5.5', body: { messages: [{ role: 'user', content: 'Q1' }, { role: 'assistant', content: 'A1' }, { role: 'user', content: 'Q2' }] } })
  assert.equal(r.status, 200)
  assert.deepEqual(calls[0].body.contents.map((m) => m.role), ['user', 'model', 'user'])
})
await check('the brief never contains a banned customer or program name', () => {
  const banned = /\b(nvidia|oracle|pfizer|assetmark|gaf|disney|directv|amazon|nwcd|f1|formula\s*1|ricciardo|grand\s*prix|las\s*vegas|org62|formation\s*lap)\b/i
  assert.ok(!banned.test(buildBrief()), `brief leaks: ${buildBrief().match(banned)?.[0]}`)
})
await check('thought parts are never returned', async () => {
  const r = await ask('[thoughts]')
  assert.equal(r.data.reply, 'Visible answer.')
})
await check('a blocked prompt becomes a friendly reply', async () => {
  const r = await ask('[block]')
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
await check('a 5xx on the first model falls through to the next model', async () => {
  calls = []
  const r = await ask('[flaky]')
  assert.equal(r.status, 200)
  assert.deepEqual(calls.map((c) => c.model), ['gemini-3.5-flash-lite', 'gemini-flash-lite-latest'])
})
await check('a 404 (model unavailable to this key) falls through to the next model', async () => {
  calls = []
  const r = await ask('[notfound]')
  assert.equal(r.status, 200)
  assert.deepEqual(calls.map((c) => c.model), ['gemini-3.5-flash-lite', 'gemini-flash-lite-latest'])
})
await check('upstream 429 maps to 429 and is not retried', async () => {
  calls = []
  const r = await ask('[ratelimit]')
  assert.equal(r.status, 429)
  assert.equal(calls.length, 1)
})
await check('persistent upstream 5xx maps to 502 without leaking detail', async () => {
  const r = await ask('[boom]')
  assert.equal(r.status, 502)
  assert.ok(!JSON.stringify(r.data).includes('secret'))
})
await check('a client is rate limited after 12 requests in the window', async () => {
  const codes: number[] = []
  for (let i = 0; i < 14; i++) codes.push((await ask('hello', '9.9.9.9')).status)
  assert.equal(codes.slice(0, 12).every((c) => c === 200), true)
  assert.equal(codes[12], 429)
})
await check('an unreadable brief returns 502 without calling the model', async () => {
  const fresh = (await import('../api/chat.ts?fresh=1')).default
  briefOk = false
  calls = []
  const res = await fresh.fetch(
    new Request('https://www.michaelbreeden.me/api/chat', {
      method: 'POST',
      headers: { 'content-type': 'application/json', 'x-forwarded-for': '7.7.7.7' },
      body: JSON.stringify({ messages: [{ role: 'user', content: 'hello' }] }),
    }),
  )
  briefOk = true
  assert.equal(res.status, 502)
  assert.equal(calls.length, 0)
})
await check('a missing API key returns 503 not_configured', async () => {
  const key = process.env.GEMINI_API_KEY
  delete process.env.GEMINI_API_KEY
  const r = await ask('hello', '4.4.4.4')
  process.env.GEMINI_API_KEY = key
  assert.equal(r.status, 503)
  assert.equal(r.data.error, 'not_configured')
})

console.log(`\nAll ${n} agent checks passed.`)
mock.close()
