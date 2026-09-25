# michaelbreeden.me

Personal portfolio site for Michael Breeden — Solutions Architect at Slack (Salesforce), building agentic AI solutions.

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
