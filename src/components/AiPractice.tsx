import { aiAdvice, aiCards, aiQuote } from '../data/ai'
import SectionHeading from './SectionHeading'
import TornDivider from './TornDivider'

export default function AiPractice() {
  return (
    <section id="ai" className="pt-4">
      <TornDivider />
      <div className="mx-auto max-w-4xl px-6 pt-8 pb-16">
        <SectionHeading
          index="07"
          title="How I work with AI"
          subtitle="The tools, the models, and the habits, in plain terms. The agent below can go deeper on any of it."
        />
        <ul className="grid gap-5 sm:grid-cols-2">
          {aiCards.map((c) => (
            <li
              key={c.title}
              className="border-2 border-[var(--color-ink)] bg-[var(--color-paper)] p-5 shadow-[4px_4px_0_var(--color-ink)] dark:border-[#3a3a3a] dark:bg-[#1a1a1a] dark:shadow-[4px_4px_0_#000]"
            >
              <h3 className="mb-2 font-display text-base">{c.title}</h3>
              <p className="text-sm leading-relaxed text-[var(--color-ink-soft)] dark:text-[#c9c9c9]">{c.body}</p>
            </li>
          ))}
        </ul>
        <blockquote className="mt-8 border-l-4 border-[var(--color-hot)] pl-4">
          <p className="stamp text-xl leading-snug">{aiQuote}</p>
        </blockquote>
        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-[var(--color-ink-soft)] dark:text-[#c9c9c9]">{aiAdvice}</p>
      </div>
    </section>
  )
}
