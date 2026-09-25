import { useState } from 'react'
import { motion } from 'framer-motion'
import { experience } from '../data/experience'

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
        <h4 className="text-sm font-semibold">{role.title}</h4>
        <span className="text-xs text-slate-500 dark:text-slate-400">{role.dates}</span>
      </div>
      <ul className="mt-1.5 list-disc space-y-1 pl-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
        {visibleBullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>
      {role.bullets.length > 1 ? (
        <button
          type="button"
          onClick={() => setExpanded((e) => !e)}
          className="mt-1.5 text-xs font-semibold text-[#2f5c8a] hover:underline dark:text-[#6f9fd6]"
        >
          {expanded ? 'Show less' : `Show ${role.bullets.length - 1} more`}
        </button>
      ) : null}
    </div>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="border-t border-slate-200 py-16 dark:border-slate-800">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Experience</h2>
            <p className="mt-1.5 max-w-xl text-slate-500 dark:text-slate-400">
              10+ years of enterprise delivery, from technical training through solution architecture.
            </p>
          </div>
          <a
            href="/Michael-Breeden-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-800 transition hover:border-slate-300 dark:border-slate-700 dark:text-slate-100 dark:hover:border-slate-600"
          >
            Download résumé (PDF)
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
              className="relative border-l border-slate-200 pl-5 dark:border-slate-800"
            >
              <div className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-[#2f5c8a] dark:bg-[#6f9fd6]" />
              <div className="mb-2 flex flex-wrap items-baseline justify-between gap-x-3">
                <h3 className="text-base font-bold">{entry.company}</h3>
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  {entry.location} · {entry.dates}
                </span>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
                {entry.roles.map((role, ri) => (
                  <div key={role.title}>
                    {ri > 0 ? (
                      <hr className="my-3 border-slate-100 dark:border-slate-800" />
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
