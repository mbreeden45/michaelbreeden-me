import { useRef, useState, type FormEvent } from 'react'
import { EMAIL } from '../data/site'
import SectionHeading from './SectionHeading'
import TornDivider from './TornDivider'

interface Msg {
  role: 'user' | 'assistant'
  content: string
}

const SUGGESTIONS = [
  'What has Michael built with Slackbot and MCP?',
  'How does Michael keep AI answers grounded?',
  'What does Michael do on a customer engagement?',
  'How do I contact Michael?',
]

const MAX_CHARS = 500

export default function AskMichael() {
  const [messages, setMessages] = useState<Msg[]>([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const endRef = useRef<HTMLDivElement>(null)

  async function ask(text: string) {
    const question = text.trim().slice(0, MAX_CHARS)
    if (!question || loading) return
    const next: Msg[] = [...messages, { role: 'user', content: question }]
    setMessages(next)
    setInput('')
    setError('')
    setLoading(true)
    const ctrl = new AbortController()
    const timer = setTimeout(() => ctrl.abort(), 45_000)
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: next }),
        signal: ctrl.signal,
      })
      const data = (await res.json().catch(() => ({}))) as { reply?: string; error?: string }
      if (res.ok && data.reply) {
        setMessages([...next, { role: 'assistant', content: data.reply }])
      } else if (res.status === 503 || data.error === 'not_configured') {
        setError(`The agent is not switched on yet. Email me instead: ${EMAIL}`)
      } else if (res.status === 429) {
        setError(`That is a lot of questions at once. Give it a few minutes, or email me: ${EMAIL}`)
      } else if (res.status === 400) {
        setError('That conversation got too long. Clear it and ask again.')
      } else {
        setError(`Something went wrong. Try again, or email me: ${EMAIL}`)
      }
    } catch {
      setError(`Something went wrong. Try again, or email me: ${EMAIL}`)
    } finally {
      clearTimeout(timer)
      setLoading(false)
      setTimeout(() => endRef.current?.scrollIntoView({ block: 'nearest', behavior: 'smooth' }), 50)
    }
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault()
    void ask(input)
  }

  return (
    <section id="ask" className="pt-4">
      <TornDivider />
      <div className="mx-auto max-w-4xl px-6 pt-8 pb-16">
        <SectionHeading
          index="08"
          title="Ask the agent"
          subtitle="It answers only from a written brief, says so when it does not know, and never names customers. It is an AI and can be wrong."
        />

        <div className="border-2 border-[var(--color-ink)] bg-[var(--color-paper)] p-4 shadow-[4px_4px_0_var(--color-ink)] dark:border-[#3a3a3a] dark:bg-[#1a1a1a] dark:shadow-[4px_4px_0_#000]">
          {messages.length === 0 ? (
            <div className="flex flex-wrap gap-2">
              {SUGGESTIONS.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => void ask(s)}
                  disabled={loading}
                  className="border border-[var(--color-ink)] px-2.5 py-1.5 text-left text-xs font-bold transition hover:bg-[var(--color-ink)] hover:text-[var(--color-paper)] disabled:opacity-50 dark:border-[#3a3a3a] dark:text-[#ececec] dark:hover:bg-[#ececec] dark:hover:text-[var(--color-ink)]"
                >
                  {s}
                </button>
              ))}
            </div>
          ) : (
            <div className="max-h-[28rem] space-y-3 overflow-y-auto pr-1" aria-live="polite">
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`whitespace-pre-wrap border-l-4 px-3 py-2 text-sm leading-relaxed ${
                    m.role === 'user'
                      ? 'border-[var(--color-hot)] font-bold'
                      : 'border-[var(--color-ink)] text-[var(--color-ink-soft)] dark:border-[#3a3a3a] dark:text-[#c9c9c9]'
                  }`}
                >
                  {m.content}
                </div>
              ))}
              {loading && <p className="px-3 font-mono text-xs text-[var(--color-ink-soft)] dark:text-[#8a8a8a]">Thinking…</p>}
              <div ref={endRef} />
            </div>
          )}

          {error && (
            <p role="alert" className="mt-3 text-sm font-bold text-[var(--color-hot)]">
              {error}
            </p>
          )}

          <form onSubmit={onSubmit} className="mt-4 flex flex-col gap-2 sm:flex-row">
            <label className="sr-only" htmlFor="ask-input">
              Ask a question about Michael&apos;s work
            </label>
            <input
              id="ask-input"
              value={input}
              onChange={(e) => setInput(e.target.value.slice(0, MAX_CHARS))}
              placeholder="Ask about the projects, the approach, or how to get in touch"
              autoComplete="off"
              className="min-w-0 flex-1 border-2 border-[var(--color-ink)] bg-transparent px-3 py-2 text-base outline-none focus:border-[var(--color-hot)] dark:border-[#3a3a3a] dark:text-[#ececec]"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="border-2 border-[var(--color-ink)] bg-[var(--color-ink)] px-4 py-2 text-sm font-bold uppercase tracking-wide text-[var(--color-paper)] disabled:opacity-50 dark:border-[#ececec] dark:bg-[#ececec] dark:text-[var(--color-ink)]"
            >
              Ask
            </button>
            {messages.length > 0 && (
              <button
                type="button"
                onClick={() => {
                  setMessages([])
                  setError('')
                }}
                className="px-2 py-2 text-xs font-bold uppercase tracking-wide underline decoration-2 underline-offset-4 hover:text-[var(--color-hot)] dark:text-[#ececec]"
              >
                Clear
              </button>
            )}
          </form>
        </div>
        <p className="mt-3 text-xs text-[var(--color-ink-soft)] dark:text-[#8a8a8a]">
          The brief is generated from the same files that render this site, so the two cannot disagree.{' '}
          <a href="/brief.md" className="font-bold underline underline-offset-2 hover:text-[var(--color-hot)]">
            Read exactly what it knows
          </a>
          .
        </p>
      </div>
    </section>
  )
}
