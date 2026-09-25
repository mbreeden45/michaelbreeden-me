import { skills } from '../data/projects'
import SectionHeading from './SectionHeading'
import TornDivider from './TornDivider'

export default function Skills() {
  return (
    <section id="skills" className="pt-4">
      <TornDivider />
      <div className="mx-auto max-w-4xl px-6 pt-8 pb-16">
        <SectionHeading
          index="05"
          title="Technical skills"
          subtitle="Demonstrated through shipped applications, not just training."
        />
        <div className="flex flex-wrap gap-2">
          {skills.map((s, i) => (
            <span
              key={s}
              className="border-2 border-[var(--color-ink)] px-3 py-1.5 text-sm font-bold dark:border-[#3a3a3a] dark:text-[#ececec]"
              style={{ transform: `rotate(${i % 2 === 0 ? -1 : 1}deg)` }}
            >
              {s}
            </span>
          ))}
        </div>
        <p className="mt-6 max-w-xl text-sm text-[var(--color-ink-soft)] dark:text-[#c9c9c9]">
          Delivery: 10+ years of enterprise customer-facing delivery, program management,
          and adoption strategy across Fortune 500 accounts.
        </p>
      </div>
    </section>
  )
}
