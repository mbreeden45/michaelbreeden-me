import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'
import SectionHeading from './SectionHeading'
import TornDivider from './TornDivider'

export default function Work() {
  return (
    <section id="work" className="pt-4">
      <TornDivider />
      <div className="mx-auto max-w-4xl px-6 pt-8 pb-16">
        <SectionHeading
          index="01"
          title="Builder projects"
          subtitle="Hands-on builds, not just architecture diagrams — each one shipped, demoed, or in active use."
        />
        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((p, i) => (
            <div key={p.title} className={p.diagram ? 'sm:col-span-2' : ''}>
              <ProjectCard project={p} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
