import { motion } from 'framer-motion'
import type { Project } from '../data/projects'

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, delay: (index % 3) * 0.06 }}
      className="group rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
    >
      <span className="mb-2.5 inline-block rounded-md bg-[#2f5c8a]/10 px-2 py-1 text-[11px] font-bold uppercase tracking-wide text-[#2f5c8a] dark:bg-[#6f9fd6]/15 dark:text-[#6f9fd6]">
        {project.tag}
      </span>
      <h3 className="mb-2 text-base font-semibold">{project.title}</h3>
      <p className="mb-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
        {project.description}
      </p>
      <div className="mb-3 flex flex-wrap gap-1.5">
        {project.stack.map((s) => (
          <span
            key={s}
            className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-0.5 text-xs text-slate-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
          >
            {s}
          </span>
        ))}
      </div>
      <div className="flex gap-2 pt-1 text-sm font-medium">
        {project.demoUrl ? (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#2f5c8a] hover:underline dark:text-[#6f9fd6]"
          >
            Live demo →
          </a>
        ) : null}
        {project.repoUrl ? (
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#2f5c8a] hover:underline dark:text-[#6f9fd6]"
          >
            Code →
          </a>
        ) : null}
        {!project.demoUrl && !project.repoUrl ? (
          <span className="text-slate-400 dark:text-slate-500">Details coming soon</span>
        ) : null}
      </div>
    </motion.div>
  )
}
