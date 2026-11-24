import { renderToString } from 'react-dom/server'
import App from './App.tsx'
import { buildBrief } from './data/brief.ts'
import { getRoutes, llmsTxt, renderHead, sitemapXml } from './seo.ts'

export function render(path: string) {
  return renderToString(<App path={path} />)
}

/** The agent's grounding document, published as /brief.md so anyone can read exactly what it answers from. */
export function briefMarkdown() {
  return `${buildBrief()}\n`
}

export { getRoutes, llmsTxt, renderHead, sitemapXml }
