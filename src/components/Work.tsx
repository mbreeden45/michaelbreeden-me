import { customerProjects } from '../data/projects'
import PersonalProjects from './PersonalProjects'
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
          subtitle="Proofs of concept built for customers, most from phone call to working demo the same day. Customer details are redacted."
        />
        <div className="grid gap-6">
          {customerProjects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
        <PersonalProjects />
      </div>
    </section>
  )
}
