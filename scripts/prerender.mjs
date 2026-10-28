// Injects the server-rendered App into dist/index.html so crawlers and link
// unfurlers see real content without running JavaScript.
import { readFileSync, writeFileSync, rmSync } from 'node:fs'
import { pathToFileURL } from 'node:url'
import { resolve } from 'node:path'

const ssrDir = resolve('dist-ssr')
const { render } = await import(pathToFileURL(resolve(ssrDir, 'entry-server.js')).href)

const htmlPath = resolve('dist/index.html')
const template = readFileSync(htmlPath, 'utf8')
const marker = '<div id="root"></div>'
if (!template.includes(marker)) throw new Error(`prerender: "${marker}" not found in dist/index.html`)

writeFileSync(htmlPath, template.replace(marker, `<div id="root">${render()}</div>`))
rmSync(ssrDir, { recursive: true, force: true })
console.log('prerendered dist/index.html')
