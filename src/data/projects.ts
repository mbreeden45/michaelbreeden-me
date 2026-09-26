import type { DiagramKey } from '../components/ArchDiagram'

export interface Project {
  tag: string
  title: string
  description: string
  stack: string[]
  demoUrl?: string
  repoUrl?: string
  diagram?: DiagramKey
}

export const projects: Project[] = [
  {
    tag: 'Enterprise Integration',
    title: 'Slack ↔ Salesforce Case Sync',
    description:
      "Built a bidirectional case-management integration for one of the most valuable technology companies in the world — Slack threads sync to Salesforce Cases and back in real time. Now moving through the customer's security and admin approval process toward production.",
    stack: ['Node.js', 'Slack Bolt', 'jsforce'],
    diagram: 'caseSync',
  },
  {
    tag: 'Agentic / MCP',
    title: 'Conversational Slack Analytics',
    description:
      'Designed a custom Slack app with a live channel-analytics dashboard, then extended it into an MCP (Model Context Protocol) server so Slackbot answers the same questions conversationally — built for a longstanding enterprise partner, tested and documented.',
    stack: ['Node.js', 'MCP', 'Slack Bolt SDK'],
    diagram: 'analytics',
  },
  {
    tag: 'Live Event Tech',
    title: 'Live Event Engagement App',
    description:
      "Built a fully working real-time trivia app for a marquee motorsport activation — live scoring, anti-cheat timing safeguards, and a complete decision log and risk assessment. The build works end to end; it now moves through Creative Technology's production rollout process.",
    stack: ['Node.js', 'Slack Bolt', 'Block Kit'],
    diagram: 'trivia',
  },
  {
    tag: 'Personal Project',
    title: 'Agentforce Certification Trainer',
    description:
      'Self-built study app with 364 exam-style questions and progress tracking, built to master Agentforce platform concepts hands-on rather than just reading about them.',
    stack: ['React', 'TypeScript'],
    demoUrl: 'https://agentforce.michaelbreeden.me/',
  },
  {
    tag: 'Personal Project',
    title: 'MLB Ticket Generator',
    description:
      'A client-side app that renders and exports customizable, print-accurate MLB ticket stubs, pulled live from the MLB Stats API.',
    stack: ['React', 'TypeScript'],
    demoUrl: 'https://tickets.michaelbreeden.me',
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
