import type { DiagramKey } from '../components/ArchDiagram'

export interface CustomerProject {
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
  },
  {
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
  },
  {
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
  },
  {
    tag: 'Live Event Tech',
    title: 'Live Event Engagement App',
    need: "Two Salesforce teams run contests on different platforms across a motorsport season, and needed trivia for seven people with Slack involved. Building it as a Slack app was my idea, from a single 30-minute call.",
    built:
      'A real-time trivia app with live scoring, anti-cheat timing safeguards, and a full decision log and risk assessment. Three iterations with the team so far.',
    why: 'Turned a passing comment on one call into a working app, and a way to bring Slack into contests across the season.',
    timeLabel: 'Call to demo',
    buildTime: 'Same day',
    status: 'Event end of November',
    stack: ['Node.js', 'Slack Bolt', 'Block Kit'],
    diagram: 'trivia',
  },
]

export const personalProjects: PersonalProject[] = [
  {
    title: 'Gluten-Free Beer Index',
    description:
      "A directory of about 240 gluten-free and low-gluten beers with the home-kit test results found for each, since \"gluten-free\" beer means four different things. Includes a Gemini-powered sommelier chat grounded in the catalog: it only recommends listed beers, quotes the test evidence, and never calls a beer \"safe.\" Built in a day with Claude.",
    stack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Gemini API'],
    demoUrl: 'https://gf-beer-index.vercel.app',
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
