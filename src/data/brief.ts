import { aiQa, personality } from './ai'
import { experience } from './experience'
import { faq } from './faq'
import { offers } from './offers'
import { badges, customerProjects, personalProjects, skills, stats } from './projects'
import { EMAIL, EMPLOYER, GITHUB, JOB_TITLE, LINKEDIN, LOCATION, SITE_URL } from './site'

/**
 * The written brief the site agent answers from. It is generated from the same data files that
 * render this site, so the agent and the pages cannot disagree.
 */
export function buildBrief(): string {
  const out: string[] = []
  out.push('# ABOUT')
  out.push(`Michael Breeden is a ${JOB_TITLE} at ${EMPLOYER}, based in ${LOCATION}. Site: ${SITE_URL}. Email: ${EMAIL}. LinkedIn: ${LINKEDIN}. GitHub: ${GITHUB}.`)

  out.push('\n# EXPERIENCE')
  for (const e of experience) {
    out.push(`\n## ${e.company} (${e.location}, ${e.dates})`)
    for (const r of e.roles) {
      out.push(`- ${r.title}, ${r.dates}`)
      for (const b of r.bullets) out.push(`  * ${b}`)
    }
  }

  out.push('\n# CUSTOMER AND INTERNAL PROJECTS (customer names are not shared on this site)')
  for (const p of customerProjects) {
    out.push(`\n## ${p.title} [${p.tag}] ${SITE_URL}/work/${p.slug}`)
    out.push(`Status: ${p.status}. ${p.timeLabel}: ${p.buildTime}. Stack: ${p.stack.join(', ')}.`)
    out.push(`Need: ${p.need}`)
    out.push(`Built: ${p.built}`)
    out.push(`Why it matters: ${p.why}`)
    out.push('How it works:')
    for (const h of p.howItWorks) out.push(`- ${h}`)
    out.push('What was learned and what is not claimed:')
    for (const n of p.notes) out.push(`- ${n}`)
  }

  out.push('\n# PERSONAL BUILDS (live, public)')
  for (const p of personalProjects) {
    out.push(`- ${p.title} (${p.demoUrl}): ${p.description} Stack: ${p.stack.join(', ')}.`)
  }

  out.push('\n# WHAT MICHAEL CAN HELP WITH')
  for (const o of offers) out.push(`- ${o.title}: ${o.body} Proof: ${o.evidence}`)

  out.push('\n# CREDENTIALS')
  out.push(`Certifications and progress: ${badges.join('; ')}.`)
  out.push(`Trailhead: ${stats.map((s) => `${s.num} ${s.label}`).join('; ')}.`)
  out.push(`Skills: ${skills.join(', ')}.`)

  out.push('\n# COMMON QUESTIONS')
  for (const f of faq) out.push(`Q: ${f.q}\nA: ${f.a}`)

  out.push('\n# HOW MICHAEL USES AI (tools, models, habits and opinions, as interview questions)')
  for (const f of aiQa) out.push(`Q: ${f.q}\nA: ${f.a}`)

  out.push('\n# PERSONALITY AND TONE')
  for (const p of personality) out.push(`- ${p}`)

  return out.join('\n')
}
