import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'

export default function Work() {
  return (
    <section id="work" className="border-t border-slate-200 py-16 dark:border-slate-800">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="text-2xl font-bold tracking-tight">Builder projects</h2>
        <p className="mb-8 mt-1.5 max-w-xl text-slate-500 dark:text-slate-400">
          Hands-on builds, not just architecture diagrams — each one shipped, demoed, or in active use.
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
