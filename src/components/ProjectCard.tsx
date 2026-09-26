import { motion } from 'framer-motion'
import type { Project } from '../data/projects'
import ArchDiagram from './ArchDiagram'

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  const isRed = index % 2 === 0

  return (
    <motion.div
      initial={{ opacity: 0, y: 14, rotate: index % 2 === 0 ? -1 : 1 }}
      whileInView={{ opacity: 1, y: 0, rotate: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, delay: (index % 3) * 0.06 }}
      whileHover={{ rotate: index % 2 === 0 ? -0.75 : 0.75, y: -3 }}
      className="relative border-2 border-[var(--color-ink)] bg-[var(--color-paper)] p-5 shadow-[4px_4px_0_var(--color-ink)] dark:border-[#3a3a3a] dark:bg-[#1a1a1a] dark:shadow-[4px_4px_0_#000]"
    >
      {/* perforation notches */}
      <span className="ticket-notch -left-2 top-1/2 -translate-y-1/2" aria-hidden />
      <span className="ticket-notch -right-2 top-1/2 -translate-y-1/2" aria-hidden />

      <span
        className={`mb-2.5 inline-block -rotate-1 px-2 py-1 font-display text-[11px] font-bold uppercase tracking-wide ${
          isRed
            ? 'bg-[var(--color-hot)] text-[var(--color-paper)]'
            : 'bg-[var(--color-ink)] text-[var(--color-paper)] dark:bg-[#ececec] dark:text-[var(--color-ink)]'
        }`}
      >
        {project.tag}
      </span>
      <h3 className="mb-2 font-display text-base">{project.title}</h3>
      <p className="mb-3 text-sm leading-relaxed text-[var(--color-ink-soft)] dark:text-[#c9c9c9]">
        {project.description}
      </p>
      <div className="mb-4 flex flex-wrap gap-1.5">
        {project.stack.map((s) => (
          <span
            key={s}
            className="border border-[var(--color-ink)] px-2 py-0.5 text-xs uppercase tracking-wide dark:border-[#3a3a3a] dark:text-[#c9c9c9]"
          >
            {s}
          </span>
        ))}
      </div>
      {project.diagram ? <ArchDiagram name={project.diagram} /> : null}
      <div className="flex items-center justify-between border-t border-dashed border-[var(--color-ink)]/40 pt-3 text-sm font-bold dark:border-[#3a3a3a]">
        <div className="flex gap-3">
          {project.demoUrl ? (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-2 hover:text-[var(--color-hot)]"
            >
              LIVE DEMO →
            </a>
          ) : null}
          {project.repoUrl ? (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-2 hover:text-[var(--color-hot)]"
            >
              CODE →
            </a>
          ) : null}
          {!project.demoUrl && !project.repoUrl && project.diagram ? (
            <span className="font-mono text-xs font-normal uppercase text-[var(--color-ink-soft)] dark:text-[#8a8a8a]">
              Client confidential — architecture above
            </span>
          ) : null}
          {!project.demoUrl && !project.repoUrl && !project.diagram ? (
            <span className="font-mono text-xs font-normal uppercase text-[var(--color-ink-soft)] dark:text-[#8a8a8a]">
              Details coming soon
            </span>
          ) : null}
        </div>
        <span className="font-mono text-xs text-[var(--color-ink-soft)] dark:text-[#8a8a8a]">
          #{String(index + 1).padStart(2, '0')}
        </span>
      </div>
    </motion.div>
  )
}
