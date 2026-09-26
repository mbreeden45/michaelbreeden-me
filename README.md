# michaelbreeden.me

Personal portfolio site for Michael Breeden — Solution Architect at Slack (Salesforce), building agentic AI solutions.

## Stack

- [Vite](https://vite.dev/) + React + TypeScript
- Tailwind CSS v4
- Framer Motion for scroll/entrance animation

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Outputs a static site to `dist/`, ready to deploy to any static host (Hostinger, Vercel, Netlify, GitHub Pages, etc.).

## Editing content

Project cards, Trailhead stats, certifications, and skills all live in [`src/data/projects.ts`](src/data/projects.ts) — edit that file to update content without touching component code.

## TODO

- **Project links**: Slack ↔ Salesforce Case Sync, Conversational Slack Analytics, and the Live Event Engagement App still show "Details coming soon" (`src/data/projects.ts`) — add `demoUrl`/`repoUrl` once any of these are publicly shareable.
- **About/story section**: consider adding a fuller narrative About section beyond the hero blurb — deferred for now.
- Trailhead badge/point/trail counts in `src/data/projects.ts` (`stats`) are maintained by hand — no auto-sync (Salesforce has no public API for this; the public Trailblazer profile undercounts due to employee-gated badges).
