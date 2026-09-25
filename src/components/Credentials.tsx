import { badges, stats, statsNote } from '../data/projects'
import StatTile from './StatTile'
import SectionHeading from './SectionHeading'
import TornDivider from './TornDivider'

export default function Credentials() {
  return (
    <section id="credentials" className="pt-4">
      <TornDivider />
      <div className="mx-auto max-w-4xl px-6 pt-8 pb-16">
        <SectionHeading
          index="04"
          title="Platform credentials"
          subtitle="Trailhead and certification history on the Salesforce platform."
        />
        <div className="grid grid-cols-2 gap-3.5 sm:grid-cols-3 md:grid-cols-5">
          {stats.map((s, i) => (
            <StatTile key={s.label} stat={s} index={i} />
          ))}
        </div>
        <p className="mt-3 text-xs text-[var(--color-ink-soft)]/70 dark:text-[#8a8a8a]">{statsNote}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {badges.map((b, i) => (
            <span
              key={b}
              className="border-2 border-[var(--color-ink)] bg-[var(--color-paper)] px-3 py-1.5 text-sm font-bold dark:border-[#3a3a3a] dark:bg-[#1a1a1a] dark:text-[#ececec]"
              style={{ transform: `rotate(${i % 2 === 0 ? -1 : 1}deg)` }}
            >
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
