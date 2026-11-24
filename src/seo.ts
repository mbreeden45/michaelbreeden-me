import { experience } from './data/experience'
import { faq } from './data/faq'
import { offers } from './data/offers'
import { badges, customerProjects, personalProjects } from './data/projects'
import {
  EMAIL,
  EMPLOYER,
  GITHUB,
  JOB_TITLE,
  LINKEDIN,
  LOCATION,
  SITE_NAME,
  SITE_URL,
  TAGLINE,
} from './data/site'

export interface Route {
  path: string
  title: string
  description: string
  ogType: 'website' | 'article'
  jsonLd: object[]
}

const PERSON_ID = `${SITE_URL}/#person`
const OG_IMAGE = `${SITE_URL}/og-image.png`

const person = {
  '@type': 'Person',
  '@id': PERSON_ID,
  name: SITE_NAME,
  alternateName: 'Michael C. Breeden',
  url: `${SITE_URL}/`,
  image: OG_IMAGE,
  jobTitle: 'Solution Architect',
  worksFor: { '@type': 'Organization', name: EMPLOYER },
  homeLocation: { '@type': 'Place', name: LOCATION },
  description: 'Solution Architect at Slack who builds integrations and MCP tools for enterprise customers.',
  knowsAbout: [
    'Slack',
    'Slackbot',
    'Salesforce',
    'Model Context Protocol (MCP)',
    'Slack app development',
    'Enterprise integrations',
    'Agentforce',
    'Tableau Next',
  ],
  sameAs: [LINKEDIN, GITHUB],
}

const trim = (s: string, n: number) => (s.length <= n ? s : `${s.slice(0, n - 1).replace(/\s+\S*$/, '')}…`)

function breadcrumb(items: { name: string; path: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: `${SITE_URL}${it.path}`,
    })),
  }
}

export function getRoutes(): Route[] {
  const home: Route = {
    path: '/',
    title: `${SITE_NAME} — Slack Solution Architect | MCP & Salesforce Integrations`,
    description: TAGLINE,
    ogType: 'website',
    jsonLd: [
      person,
      { '@type': 'WebSite', '@id': `${SITE_URL}/#website`, url: `${SITE_URL}/`, name: SITE_NAME, publisher: { '@id': PERSON_ID } },
      {
        '@type': 'FAQPage',
        mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
      },
    ],
  }

  const work: Route = {
    path: '/work',
    title: `Work: Slackbot, MCP and Salesforce Integration Projects | ${SITE_NAME}`,
    description:
      'Proofs of concept built from customer calls: Slackbot skills, MCP servers, Slack–Salesforce integrations and a Tableau Next brief. Customer details are redacted.',
    ogType: 'website',
    jsonLd: [
      breadcrumb([{ name: 'Home', path: '/' }, { name: 'Work', path: '/work' }]),
      {
        '@type': 'CollectionPage',
        name: 'Work',
        url: `${SITE_URL}/work`,
        mainEntity: {
          '@type': 'ItemList',
          itemListElement: customerProjects.map((p, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            name: p.title,
            url: `${SITE_URL}/work/${p.slug}`,
          })),
        },
      },
    ],
  }

  const projects: Route[] = customerProjects.map((p) => ({
    path: `/work/${p.slug}`,
    title: `${p.title} | ${SITE_NAME}`,
    description: trim(`${p.why} ${p.built}`, 158),
    ogType: 'article',
    jsonLd: [
      breadcrumb([{ name: 'Home', path: '/' }, { name: 'Work', path: '/work' }, { name: p.title, path: `/work/${p.slug}` }]),
      {
        '@type': 'CreativeWork',
        '@id': `${SITE_URL}/work/${p.slug}#project`,
        name: p.title,
        url: `${SITE_URL}/work/${p.slug}`,
        description: p.why,
        creator: { '@id': PERSON_ID },
        keywords: p.stack.join(', '),
      },
    ],
  }))

  return [home, work, ...projects]
}

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')

/** The route-specific <head> tags, injected at build time in place of <!--seo-->. */
export function renderHead(route: Route): string {
  const url = route.path === '/' ? `${SITE_URL}/` : `${SITE_URL}${route.path}`
  const t = esc(route.title)
  const d = esc(route.description)
  const ld = JSON.stringify({ '@context': 'https://schema.org', '@graph': route.jsonLd }).replace(/</g, '\\u003c')
  return [
    `<title>${t}</title>`,
    `<meta name="description" content="${d}" />`,
    `<link rel="canonical" href="${url}" />`,
    `<meta name="author" content="${SITE_NAME}" />`,
    `<meta property="og:type" content="${route.ogType}" />`,
    `<meta property="og:site_name" content="${SITE_NAME}" />`,
    `<meta property="og:title" content="${t}" />`,
    `<meta property="og:description" content="${d}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:image" content="${OG_IMAGE}" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta property="og:image:alt" content="${SITE_NAME}: I go from customer call to a working demo the same day." />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${t}" />`,
    `<meta name="twitter:description" content="${d}" />`,
    `<meta name="twitter:image" content="${OG_IMAGE}" />`,
    `<script type="application/ld+json">${ld}</script>`,
  ].join('\n    ')
}

export function sitemapXml(lastmod: string): string {
  const day = lastmod.slice(0, 10)
  const prio = (p: string) => (p === '/' ? '1.0' : p === '/work' ? '0.8' : '0.7')
  const urls = getRoutes()
    .map((r) => {
      const loc = r.path === '/' ? `${SITE_URL}/` : `${SITE_URL}${r.path}`
      return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${day}</lastmod>\n    <priority>${prio(r.path)}</priority>\n  </url>`
    })
    .join('\n')
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`
}

export function llmsTxt(lastmod: string): string {
  const lines: string[] = []
  lines.push(`# ${SITE_NAME}`)
  lines.push('')
  lines.push(`> ${TAGLINE}`)
  lines.push('')
  lines.push(`Canonical URL: ${SITE_URL}/`)
  lines.push(`Last updated: ${lastmod.slice(0, 10)}`)
  lines.push('')
  lines.push('## Summary')
  lines.push('')
  lines.push(
    `${SITE_NAME} is a ${JOB_TITLE} at ${EMPLOYER}, based in ${LOCATION}. Michael builds Slackbot skills, MCP servers and Slack–Salesforce integrations for enterprise customers and internal Salesforce teams, and has 10+ years of customer-facing delivery, enablement and adoption experience. Customer names are not shared on this site.`,
  )
  lines.push('')
  lines.push('## Roles')
  lines.push('')
  for (const e of experience) {
    for (const r of e.roles) lines.push(`- ${r.title}, ${e.company}: ${r.dates}`)
  }
  lines.push('')
  lines.push('## Projects')
  lines.push('')
  for (const p of customerProjects) {
    lines.push(`- [${p.title}](${SITE_URL}/work/${p.slug}): ${p.why}`)
  }
  lines.push('')
  lines.push('## Personal builds')
  lines.push('')
  for (const p of personalProjects) lines.push(`- [${p.title}](${p.demoUrl}): ${p.description}`)
  lines.push('')
  lines.push('## What Michael can help with')
  lines.push('')
  for (const o of offers) lines.push(`- ${o.title}: ${o.body} (${o.evidence})`)
  lines.push('')
  lines.push('## Certifications')
  lines.push('')
  for (const b of badges) lines.push(`- ${b}`)
  lines.push('')
  lines.push('## Common questions')
  lines.push('')
  for (const f of faq) {
    lines.push(`### ${f.q}`)
    lines.push('')
    lines.push(f.a)
    lines.push('')
  }
  lines.push('## Machine-readable brief')
  lines.push('')
  lines.push(`- [brief.md](${SITE_URL}/brief.md): the full written brief the site agent answers from`)
  lines.push('')
  lines.push('## Contact')
  lines.push('')
  lines.push(`- Email: ${EMAIL}`)
  lines.push(`- LinkedIn: ${LINKEDIN}`)
  lines.push(`- GitHub: ${GITHUB}`)
  lines.push('')
  return lines.join('\n')
}
