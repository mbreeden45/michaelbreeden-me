import type { DiagramKey } from '../components/ArchDiagram'

export interface CustomerProject {
  tag: string
  title: string
  need: string
  built: string
  builtIn: string
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
      "A minimal stand-in plugin, an MCP server, and a Slackbot skill that prove Slackbot can reach the plugin and run allowlisted terminal actions. The skill makes Slackbot try instead of declining, checks the problem is resolved, and hands off to a human ticket if not.",
    builtIn: 'Under 2 hours',
    status: 'Active sales cycle',
    stack: ['Node.js', 'MCP (stdio + HTTP)', 'Slackbot skill', 'Bash'],
    diagram: 'desktopControl',
  },
  {
    tag: 'Agentic / MCP',
    title: 'Conversational Slack Analytics',
    need: 'A longstanding enterprise partner wanted channel analytics where their team already works.',
    built:
      'A custom Slack app with a live dashboard, extended into an MCP server so Slackbot answers the same questions conversationally. Tested and documented.',
    builtIn: 'Hours',
    status: 'Active sales cycle',
    stack: ['Node.js', 'MCP', 'Slack Bolt SDK'],
    diagram: 'analytics',
  },
  {
    tag: 'Enterprise Integration',
    title: 'Slack ↔ Salesforce Case Sync',
    need: 'One of the most valuable technology companies in the world needed Slack threads and Salesforce Cases kept in step.',
    built:
      'A bidirectional case-management integration that syncs threads to Cases and back in real time.',
    builtIn: 'Hours',
    status: 'Security and legal review',
    stack: ['Node.js', 'Slack Bolt', 'jsforce'],
    diagram: 'caseSync',
  },
  {
    tag: 'Live Event Tech',
    title: 'Live Event Engagement App',
    need: "Salesforce's Sports Marketing team needed an engagement app for a marquee motorsport activation.",
    built:
      'A real-time trivia app with live scoring, anti-cheat timing safeguards, and a full decision log and risk assessment. Three iterations with the team so far.',
    builtIn: 'Hours',
    status: 'Event end of November',
    stack: ['Node.js', 'Slack Bolt', 'Block Kit'],
    diagram: 'trivia',
  },
]

export const personalProjects: PersonalProject[] = [
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
