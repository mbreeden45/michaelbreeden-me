import type { DiagramKey } from '../components/ArchDiagram'

export interface CustomerProject {
  slug: string
  tag: string
  title: string
  need: string
  built: string
  why: string
  timeLabel: string
  buildTime: string
  status: string
  stack: string[]
  diagram: DiagramKey
  /** Step-by-step description for the project's own page. */
  howItWorks: string[]
  /** What was learned, what is still open, and what is deliberately not claimed. */
  notes: string[]
}

export interface PersonalProject {
  title: string
  description: string
  stack: string[]
  demoUrl: string
}

// Ordered by relevance to deployment / forward-deployed work.
export const customerProjects: CustomerProject[] = [
  {
    slug: 'slackbot-codex-plugin-mcp',
    tag: 'Agentic / MCP · Proof of concept',
    title: 'Slackbot ↔ Codex Plugin via MCP',
    need: 'A major enterprise software company had built a Codex plugin and wanted it usable from Slack.',
    built:
      'A minimal stand-in plugin, an MCP server, and a Slackbot skill. Slackbot reaches the plugin and runs allowlisted terminal actions; the skill makes it try instead of declining, checks the problem is resolved, and hands off to a human ticket if not.',
    why: "Proves Slackbot can reach the customer's own plugin over MCP and act on it, the exact blocker they were hitting.",
    timeLabel: 'Call to demo',
    buildTime: 'Same day',
    status: 'Active sales cycle',
    stack: ['Node.js', 'MCP (stdio + HTTP)', 'Slackbot skill', 'Bash'],
    diagram: 'desktopControl',
    howItWorks: [
      'A minimal stand-in plugin mimics the customer\'s Codex plugin, so the proof runs without touching their code.',
      'An MCP server (stdio and HTTP) exposes a short allowlist of terminal actions, for example Finder and Focus controls on a Mac.',
      'A Slackbot skill tells Slackbot to try the action instead of declining, check that the problem is resolved, and hand off to a human ticket if it is not.',
      'The model chooses which tool to call, but only allowlisted actions can ever run.',
    ],
    notes: [
      'Both the plugin and a small Slack app using MCP worked in the demo, with no measurable latency difference compared with using Codex directly.',
      'It is a demo run locally, not a production deployment, and there are no usage or adoption numbers.',
    ],
  },
  {
    slug: 'slackbot-tableau-next-pre-call-brief',
    tag: 'Agentic / MCP · Proof of concept',
    title: 'Slackbot + Tableau Next Pre-Call Brief',
    need: "A manufacturer's field sales reps wanted a customer brief before every meeting without hunting through dashboards and records: account performance, product mix, and open pipeline in one place.",
    built:
      'A Slackbot skill that confirms the account in Salesforce, matches contacts to that account to prevent duplicates, queries Tableau Next over MCP, and builds a standard canvas, plus a Workflow Builder form that hands Slackbot structured inputs. Tested on real Salesforce data; found exact-name matching, empty-result, and canvas-size limits and designed around each.',
    why: 'Shows how a Slack-first brief can draw on Salesforce and Tableau Next in one pass, and which limits to plan for before a build.',
    timeLabel: 'Stage',
    buildTime: 'Proof of concept',
    status: 'Discovery',
    stack: ['Slackbot skill', 'Workflow Builder', 'Canvas', 'Tableau Next (MCP)', 'Salesforce'],
    diagram: 'preCallBrief',
    howItWorks: [
      'With the customer\'s sales operations, enablement and CRM leads, I scoped three workflows: the pre-call brief, a customer-facing deck, and mobile data capture.',
      'A Workflow Builder form passes structured inputs to Slackbot, so the brief generates without back-and-forth.',
      'A Slackbot skill confirms the account in Salesforce and matches contacts to that account\'s contact records so duplicates are not created.',
      'The skill queries Tableau Next semantic models through MCP and builds a standardized canvas with a contents list.',
      'For handoff, a build-approach document covers entry criteria, risks and tracking options, and I answered the customer\'s admin questions on Slackbot permissions by Salesforce object.',
    ],
    notes: [
      'Testing against real Salesforce data surfaced exact-name matching, empty-result and canvas-size limits; each was designed around.',
      'Tableau dashboards did not yet embed in a canvas from a workflow, and the underlying data model was still being built.',
      'It is a proof of concept in discovery: no production launch, adoption data or measured business result is claimed.',
    ],
  },
  {
    slug: 'conversational-slack-analytics-mcp',
    tag: 'Agentic / MCP',
    title: 'Conversational Slack Analytics',
    need: "Users wanted channel analytics quickly and in natural language. The customer didn't want to grant analytics roles to everyone who asks, and Slack's built-in analytics only show above certain thresholds, such as channels over 50 people.",
    built:
      'A custom Slack app with a live dashboard, extended into an MCP server so Slackbot answers the same questions conversationally. Tested and documented.',
    why: 'Anyone can ask in plain language, with no analytics role to hand out and no built-in size threshold in the way.',
    timeLabel: 'Call to demo',
    buildTime: 'Same day',
    status: 'Active sales cycle',
    stack: ['Node.js', 'MCP', 'Slack Bolt SDK'],
    diagram: 'analytics',
    howItWorks: [
      'A custom Slack app with slash commands and a live dashboard reads channel activity through one engine.',
      'The same engine is exposed as an MCP server, so Slackbot answers the same analytics questions in plain language.',
      'Nobody needs an analytics role, and answers are not held back by the size thresholds in built-in analytics, such as channels over 50 people.',
    ],
    notes: [
      'Built and demoed the same day, with automated tests and documented scope.',
      'It is a proof of concept, so there are no usage or adoption figures to report yet.',
    ],
  },
  {
    slug: 'slack-salesforce-case-sync',
    tag: 'Enterprise Integration',
    title: 'Slack ↔ Salesforce Case Sync',
    need: "One of the most valuable technology companies in the world wanted its customers to open Cases and use Case Comments in a Slack Connect channel, where they already work. Case Comments live in a custom object, so the out-of-the-box integration doesn't work, and Salesforce Channels don't work with Slack Connect.",
    built:
      'Showed what works out of the box first, then built only what was missing: a bidirectional integration that syncs Slack threads to Salesforce Cases and back in real time.',
    why: 'Fills a gap no out-of-the-box option covers, so customers can work their cases in Slack Connect.',
    timeLabel: 'Build time',
    buildTime: 'Same day, after ~4 weeks of discovery',
    status: 'Security and legal review',
    stack: ['Node.js', 'Slack Bolt', 'jsforce'],
    diagram: 'caseSync',
    howItWorks: [
      'I showed the customer what works out of the box first, then built only what was missing.',
      'A sync service links a Slack Connect thread to a Salesforce Case in both directions, in real time (Node.js, Slack Bolt, jsforce).',
      'Case Comments live in a custom object, which is why the out-of-the-box integration does not cover this need.',
      'A privacy gate keeps internal notes out of the customer-facing channel.',
    ],
    notes: [
      'Discovery took about four weeks; the build itself took a day.',
      'The work is now in security and legal review. No production launch or customer results are claimed.',
    ],
  },
  {
    slug: 'live-event-trivia-slack-app',
    tag: 'Live Event Tech',
    title: 'Live Event Engagement App',
    need: "An internal team needed live trivia for a live event, with Slack involved. Building it as a Slack app was my idea, from a single 30-minute call.",
    built:
      'A real-time trivia app built to survive failures during a live show: state saved on every change, fair scoring from one server clock, operator controls, 15 automated failure drills, and a documented paper fallback. About 6,900 lines of JavaScript.',
    why: 'Turned a passing comment on one call into an app that ran a live event, with a written paper backup in case it could not.',
    timeLabel: 'Call to demo',
    buildTime: 'Same day',
    status: 'Used at a live event',
    stack: ['Node.js', 'Slack Bolt', 'Block Kit', 'Redis'],
    diagram: 'trivia',
    howItWorks: [
      'Players answer in Slack through Block Kit messages, and a trivia engine scores them in real time with a live leaderboard.',
      'Built to survive failures during a live show: state is saved to Redis on every change, so a restart in the middle of a question resumes the same run, paused, with answers and scores intact. A Redis outage fails fast and is reported, and the app will not start without Redis, so it cannot quietly run without saved state. A single-worker lease stops a second copy of the app from splitting button taps, and rapid repeat taps on "Next" advance the question only once.',
      'Fairness by design: everyone\'s clock starts when the question posts, and both timestamps come from the app\'s own clock, so there is no clock-skew error between the server and Slack. Pause time is excluded from scores, ties on score and time share a place, and only correct or incorrect is shown publicly while choices stay private.',
      'Operator tooling: one control message in a private channel updates in place and shows the exact state. Missed DMs can be retried for only the players who did not get them, a question can be voided, a player can be forfeited with an explicit incorrect result, and a practice round runs before the real one.',
      'Testing and documentation: 15 automated failure drills, all passing, run as part of the project\'s check script, plus 27 scenario walkthroughs with 49 screenshots that show each branch of the contest and what the operator does. A UAT plan covers the real devices and venue network, and a decision log and risk assessment record the choices and open risks.',
      'A manual fallback kit: a printed question packet, a sealed answer key, score sheets, an incident log, and a written rule for when to switch to paper.',
    ],
    notes: [
      'Three iterations with the team before the event, built from a single 30-minute call.',
      'The contest was hosted live by a high-profile guest host, using the app.',
      'The failure drills were automated and ran offline; real-device and venue-network behavior had its own UAT plan, and no uptime or performance results are claimed.',
      'No attendance or engagement numbers are claimed.',
    ],
  },
]

export const personalProjects: PersonalProject[] = [
  {
    title: 'Gluten-Free Beer Index',
    description:
      "A directory of about 240 gluten-free and low-gluten beers with the home-kit test results found for each, since \"gluten-free\" beer means four different things. Includes a Gemini-powered sommelier chat grounded in the catalog: it only recommends listed beers, quotes the test evidence, and never calls a beer \"safe.\" Built in a day with Claude.",
    stack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Gemini API'],
    demoUrl: 'https://gf-beer.michaelbreeden.me',
  },
  {
    title: 'MLB Ticket Generator',
    description:
      'Renders and exports customizable, print-accurate MLB ticket stubs from live MLB Stats API data. In real use by real people.',
    stack: ['React', 'TypeScript'],
    demoUrl: 'https://tickets.michaelbreeden.me',
  },
  {
    title: 'Status Run Planner',
    description:
      "Plans the fastest or cheapest way to close a United MileagePlus status gap before a deadline. Starts from the goal, not a destination, and says so when a gap can't be closed. A deployed prototype built in three days, entirely from my phone with Claude.",
    stack: ['Next.js', 'React', 'TypeScript', 'MapLibre'],
    demoUrl: 'https://mileage.michaelbreeden.me',
  },
  {
    title: 'Agentforce Certification Trainer',
    description:
      'Study app with 364 exam-style questions and progress tracking, built to learn Agentforce concepts hands-on instead of just reading about them.',
    stack: ['React', 'TypeScript'],
    demoUrl: 'https://agentforce.michaelbreeden.me/',
  },
]

export interface Stat {
  num: string
  label: string
}

export const stats: Stat[] = [
  { num: '525', label: 'Trailhead badges' },
  { num: '201,050', label: 'Trailhead points' },
  { num: '45', label: 'Trails completed' },
  { num: 'Four-Star', label: 'Ranger rank' },
  { num: 'Innovator', label: 'Agentblazer status, 2026' },
]

export const statsNote =
  "Numbers reflect my full Trailhead history and are updated by hand. My public Trailblazer profile shows a lower count — some Salesforce-internal badges aren't visible outside the company."

export const badges: string[] = [
  'Salesforce Certified Administrator',
  'Salesforce Certified Slack Consultant',
  'Salesforce Certified AI Associate (2025)',
  'Claude Certified Associate: Foundations (Anthropic, 2026)',
  'In progress: Agentforce Specialist exam (EOY 2026)',
]

export const skills: string[] = [
  'JavaScript',
  'TypeScript',
  'Node.js',
  'React',
  'Slack Bolt SDK',
  'Slack Block Kit',
  'MCP server development',
  'Salesforce API (jsforce)',
  'Salesforce Flow & Workflow Builder',
]
