import { offers } from '../data/offers'
import SectionHeading from './SectionHeading'
import TornDivider from './TornDivider'
import { EMAIL } from '../data/site'

export default function Help() {
  return (
    <section id="help" className="pt-4">
      <TornDivider />
      <div className="mx-auto max-w-4xl px-6 pt-8 pb-16">
        <SectionHeading
          index="02"
          title="What I can help with"
          subtitle="Four things I do on engagements, each with something you can check."
        />
        <ul className="grid gap-5 sm:grid-cols-2">
          {offers.map((o) => (
            <li
              key={o.title}
              className="border-2 border-[var(--color-ink)] bg-[var(--color-paper)] p-5 shadow-[4px_4px_0_var(--color-ink)] dark:border-[#3a3a3a] dark:bg-[#1a1a1a] dark:shadow-[4px_4px_0_#000]"
            >
              <h3 className="mb-2 font-display text-base">{o.title}</h3>
              <p className="text-sm leading-relaxed text-[var(--color-ink-soft)] dark:text-[#c9c9c9]">{o.body}</p>
              <p className="mt-3 border-l-4 border-[var(--color-hot)] pl-3 text-xs font-bold leading-snug">{o.evidence}</p>
            </li>
          ))}
        </ul>
        <p className="mt-8 text-sm">
          <a
            href={`mailto:${EMAIL}`}
            className="font-bold uppercase tracking-wide underline decoration-2 underline-offset-4 hover:text-[var(--color-hot)]"
          >
            Start a conversation →
          </a>
        </p>
      </div>
    </section>
  )
}
