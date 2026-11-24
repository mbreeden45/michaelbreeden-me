// Pre-renders every route into static HTML (so crawlers and link unfurlers see real content and
// route-specific <head> tags without running JavaScript), and writes sitemap.xml and llms.txt
// from the same data files that render the site.
import { mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { execSync } from 'node:child_process'
import { pathToFileURL } from 'node:url'
import { dirname, join, resolve } from 'node:path'

const ssrDir = resolve('dist-ssr')
const { render, getRoutes, renderHead, sitemapXml, llmsTxt, briefMarkdown } = await import(
  pathToFileURL(resolve(ssrDir, 'entry-server.js')).href
)

const template = readFileSync(resolve('dist/index.html'), 'utf8')
const marker = '<div id="root"></div>'
if (!template.includes(marker)) throw new Error(`prerender: "${marker}" not found in dist/index.html`)
if (!template.includes('<!--seo-->')) throw new Error('prerender: "<!--seo-->" not found in dist/index.html')

let lastmod
try {
  lastmod = execSync('git log -1 --format=%cI').toString().trim()
} catch {
  lastmod = new Date().toISOString()
}

for (const route of getRoutes()) {
  const html = template
    .replace(/<title>[^<]*<\/title>\s*/, '')
    .replace('<!--seo-->', renderHead(route))
    .replace(marker, `<div id="root">${render(route.path)}</div>`)
  const file = route.path === '/' ? resolve('dist/index.html') : resolve('dist', `.${route.path}`, 'index.html')
  mkdirSync(dirname(file), { recursive: true })
  writeFileSync(file, html)
  console.log(`prerendered ${route.path}`)
}

writeFileSync(join('dist', 'sitemap.xml'), sitemapXml(lastmod))
writeFileSync(join('dist', 'llms.txt'), llmsTxt(lastmod))
writeFileSync(join('dist', 'brief.md'), briefMarkdown())
rmSync(ssrDir, { recursive: true, force: true })
console.log('wrote sitemap.xml, llms.txt and brief.md')
