import { useState } from 'react'
import { motion } from 'framer-motion'
import { experience } from '../data/experience'
import SectionHeading from './SectionHeading'
import TornDivider from './TornDivider'

function RoleBlock({
  role,
  isFirstRole,
}: {
  role: (typeof experience)[number]['roles'][number]
  isFirstRole: boolean
}) {
  const [expanded, setExpanded] = useState(isFirstRole)
  const visibleBullets = expanded ? role.bullets : role.bullets.slice(0, 1)

  return (
    <div className="mb-3 last:mb-0">
      <div className="flex flex-wrap items-baseline justify-between gap-x-3">
        <h4 className="font-display text-sm">{role.title}</h4>
        <span className="font-mono text-xs text-[var(--color-ink-soft)] dark:text-[#8a8270]">
          {role.dates}
        </span>
      </div>
      <ul className="mt-1.5 list-disc space-y-1 pl-4 text-sm leading-relaxed text-[var(--color-ink-soft)] dark:text-[#c9c2b2]">
        {visibleBullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>
      {role.bullets.length > 1 ? (
        <button
          type="button"
          onClick={() => setExpanded((e) => !e)}
          className="mt-1.5 text-xs font-bold uppercase tracking-wide text-[var(--color-hot)] hover:underline"
        >
          {expanded ? 'Show less' : `Show ${role.bullets.length - 1} more`}
        </button>
      ) : null}
    </div>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="pt-4">
      <TornDivider />
      <div className="mx-auto max-w-4xl px-6 pt-8 pb-16">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-3">
          <SectionHeading
            index="02"
            title="Experience"
            subtitle="10+ years of enterprise delivery, from technical training through solution architecture."
          />
          <a
            href="/Michael-Breeden-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-[var(--color-ink)] px-4 py-2 text-xs font-bold uppercase tracking-wide transition hover:bg-[var(--color-ink)] hover:text-[var(--color-paper)] dark:border-[#e8e2d3] dark:text-[#e8e2d3] dark:hover:bg-[#e8e2d3] dark:hover:text-[var(--color-ink)]"
          >
            Résumé (PDF)
          </a>
        </div>

        <div className="space-y-6">
          {experience.map((entry, i) => (
            <motion.div
              key={entry.company}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: (i % 4) * 0.05 }}
              className="relative border-l-2 border-[var(--color-ink)] pl-5 dark:border-[#3a352a]"
            >
              <div className="absolute -left-[7px] top-1.5 h-3 w-3 border-2 border-[var(--color-ink)] bg-[var(--color-hot)] dark:border-[#e8e2d3]" />
              <div className="mb-2 flex flex-wrap items-baseline justify-between gap-x-3">
                <h3 className="font-display text-base">{entry.company}</h3>
                <span className="font-mono text-xs text-[var(--color-ink-soft)] dark:text-[#8a8270]">
                  {entry.location} · {entry.dates}
                </span>
              </div>
              <div className="border-2 border-[var(--color-ink)] bg-[var(--color-paper)] p-4 dark:border-[#3a352a] dark:bg-[#1f1b14]">
                {entry.roles.map((role, ri) => (
                  <div key={role.title}>
                    {ri > 0 ? (
                      <hr className="my-3 border-dashed border-[var(--color-ink)]/30 dark:border-[#45402f]" />
                    ) : null}
                    <RoleBlock role={role} isFirstRole={i === 0 && ri === 0} />
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
