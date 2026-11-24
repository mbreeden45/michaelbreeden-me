import { faq } from '../data/faq'
import SectionHeading from './SectionHeading'
import TornDivider from './TornDivider'

export default function Faq() {
  return (
    <section id="faq" className="pt-4">
      <TornDivider />
      <div className="mx-auto max-w-4xl px-6 pt-8 pb-16">
        <SectionHeading index="08" title="Common questions" subtitle="The questions people actually ask, answered plainly." />
        <div className="grid gap-3">
          {faq.map((f) => (
            <details
              key={f.q}
              className="group border-2 border-[var(--color-ink)] bg-[var(--color-paper)] p-4 dark:border-[#3a3a3a] dark:bg-[#1a1a1a]"
            >
              <summary className="cursor-pointer list-none font-display text-sm">
                <span className="mr-2 text-[var(--color-hot)] group-open:hidden" aria-hidden>+</span>
                <span className="mr-2 hidden text-[var(--color-hot)] group-open:inline" aria-hidden>−</span>
                <h3 className="inline text-sm">{f.q}</h3>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-[var(--color-ink-soft)] dark:text-[#c9c9c9]">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
