import { motion } from 'framer-motion'
import type { CustomerProject } from '../data/projects'
import ArchDiagram from './ArchDiagram'

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div className="border border-[var(--color-ink)] px-2.5 py-1.5 dark:border-[#3a3a3a]">
      <p className="font-mono text-[10px] uppercase tracking-wide text-[var(--color-ink-soft)] dark:text-[#8a8a8a]">
        {label}
      </p>
      <p className="font-display text-xs">{value}</p>
    </div>
  )
}

export default function ProjectCard({ project, index }: { project: CustomerProject; index: number }) {
  const isRed = index % 2 === 0

  return (
    <motion.div
      initial={{ opacity: 0, y: 14, rotate: index % 2 === 0 ? -1 : 1 }}
      whileInView={{ opacity: 1, y: 0, rotate: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45 }}
      whileHover={{ rotate: index % 2 === 0 ? -0.5 : 0.5, y: -3 }}
      className="relative border-2 border-[var(--color-ink)] bg-[var(--color-paper)] p-5 shadow-[4px_4px_0_var(--color-ink)] dark:border-[#3a3a3a] dark:bg-[#1a1a1a] dark:shadow-[4px_4px_0_#000]"
    >
      <span className="ticket-notch -left-2 top-1/2 -translate-y-1/2" aria-hidden />
      <span className="ticket-notch -right-2 top-1/2 -translate-y-1/2" aria-hidden />

      <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
        <span
          className={`inline-block -rotate-1 px-2 py-1 font-display text-[11px] font-bold uppercase tracking-wide ${
            isRed
              ? 'bg-[var(--color-hot)] text-[var(--color-paper)]'
              : 'bg-[var(--color-ink)] text-[var(--color-paper)] dark:bg-[#ececec] dark:text-[var(--color-ink)]'
          }`}
        >
          {project.tag}
        </span>
        <span className="hidden font-mono text-xs text-[var(--color-ink-soft)] sm:inline dark:text-[#8a8a8a]">
          #{String(index + 1).padStart(2, '0')}
        </span>
      </div>

      <h3 className="mb-3 font-display text-lg">{project.title}</h3>

      <p className="mb-4 border-l-4 border-[var(--color-hot)] pl-3 text-sm font-bold leading-snug">
        {project.why}
      </p>

      <div className="mb-4 flex flex-wrap gap-2">
        <Fact label="Status" value={project.status} />
        <Fact label={project.timeLabel} value={project.buildTime} />
      </div>

      <div className="grid gap-5 sm:grid-cols-2 sm:items-center">
        <div className="text-sm leading-relaxed text-[var(--color-ink-soft)] dark:text-[#c9c9c9]">
          <p className="mb-2">
            <span className="font-bold text-[var(--color-ink)] dark:text-[#ececec]">Need: </span>
            {project.need}
          </p>
          <p className="mb-3">
            <span className="font-bold text-[var(--color-ink)] dark:text-[#ececec]">Built: </span>
            {project.built}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {project.stack.map((s) => (
              <span
                key={s}
                className="border border-[var(--color-ink)] px-2 py-0.5 text-xs uppercase tracking-wide dark:border-[#3a3a3a] dark:text-[#c9c9c9]"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
        <ArchDiagram name={project.diagram} />
      </div>
    </motion.div>
  )
}
