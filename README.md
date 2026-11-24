# michaelbreeden.me

Personal portfolio site for Michael Breeden — Solution Architect at Slack (Salesforce), building integrations and MCP tools for enterprise customers.

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

The build also pre-renders the page into `dist/index.html` (`src/entry-server.tsx` + `scripts/prerender.mjs`) so crawlers and link previews see real content without running JavaScript. Outputs a static site to `dist/`, ready to deploy to any static host (Hostinger, Vercel, Netlify, GitHub Pages, etc.).

## Site agent

`api/chat.ts` is a Vercel Function that answers questions about the work using Gemini, grounded only in `/brief.md`. The brief is generated at build time from the same data files that render the site (`src/data/brief.ts`), so the agent and the pages cannot disagree. It has an origin check, per-client rate limit, daily cap, input limits, a banned-name filter on replies, and model fallback on 5xx (never on 429), mirroring the Gluten-Free Beer Index sommelier.

| Variable | Purpose |
|---|---|
| `GEMINI_API_KEY` | Switches the agent on. Without it the section tells visitors the agent is off and shows the email. |
| `GEMINI_MODEL` | Optional primary model (defaults to `gemini-3.5-flash-lite`, with fallbacks). |
| `AGENT_DAILY_CAP` | Optional per-instance daily request cap (default 400). |

`GET /api/chat` is a health check (key configured, brief readable). `npm run test:agent` runs the function against a local mock of Gemini with no key or network.

## Editing content

Project cards, Trailhead stats, certifications, and skills all live in [`src/data/projects.ts`](src/data/projects.ts) — edit that file to update content without touching component code.

## TODO

### Client-work project cards — next steps per project

These three cards can't link to a live demo or repo (customer work), so each now shows a
redacted architecture diagram instead (`src/components/ArchDiagram.tsx`, wired up via the
`diagram` field on each project in `src/data/projects.ts`). The diagrams are intentionally
generic — no client names, real data, or actual screens. To make them (or the written
descriptions) more specific and impressive without crossing that line, go back to whichever
session built each project and ask it to summarize the following, then bring the answers back
here so they can be worked in:

- **Slack ↔ Salesforce Case Sync**
  - Any interesting technical decisions worth naming (retry/error handling, conflict
    resolution when both sides edit at once, which Salesforce objects/fields are touched)
  - Whether a fully redacted demo (dummy data, no client branding) could realistically be
    recorded and hosted
  - Current status of the security/admin approval process, so the copy stays accurate
- **Conversational Slack Analytics**
  - What categories of questions the dashboard/MCP server actually answers (generic
    capability names, not real query examples with client data)
  - The MCP tool list at a high level, to expand the diagram beyond "Engine"
  - Anything about the test coverage or documentation worth a specific callout
- **Live Event Engagement App (trivia)**
  - How the anti-cheat timing safeguard actually works, described generically (the
    technique, not client-specific implementation detail)
  - The scoring logic at a high level
  - Current rollout status, so the copy stays accurate

### Other deferred items

- **About/story section**: consider adding a fuller narrative About section beyond the hero blurb — deferred for now.
- Trailhead badge/point/trail counts in `src/data/projects.ts` (`stats`) are maintained by hand — no auto-sync (Salesforce has no public API for this; the public Trailblazer profile undercounts due to employee-gated badges).
