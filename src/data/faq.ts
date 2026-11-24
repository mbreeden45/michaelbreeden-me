import { EMAIL, LINKEDIN } from './site'

export interface Faq {
  q: string
  a: string
}

// Rendered on the home page, emitted as FAQPage JSON-LD, listed in llms.txt and fed to the site agent.
export const faq: Faq[] = [
  {
    q: 'Who is Michael Breeden?',
    a: 'Michael Breeden is a Solution Design Architect on Slack’s professional services team at Salesforce, based in Los Angeles. Michael builds Slackbot skills, MCP servers and Slack–Salesforce integrations, with 10+ years of customer-facing delivery, enablement and adoption work.',
  },
  {
    q: 'What has Michael built with Slackbot and MCP?',
    a: 'Five recent proofs of concept: a Slackbot-to-customer-plugin proof over MCP, a conversational analytics MCP server, a Slack–Salesforce case sync, a Slackbot + Tableau Next pre-call brief, and a live-event trivia app. Three of them went from first call to working demo the same day.',
  },
  {
    q: 'What is MCP, and why does it matter for Slackbot?',
    a: 'MCP (Model Context Protocol) is an open standard that lets AI assistants call tools and read data in other systems. Michael uses it so Slackbot can reach a customer’s own plugin, analytics or Tableau Next data instead of only answering from what it already knows.',
  },
  {
    q: 'What is a Slackbot skill?',
    a: 'A skill is a set of instructions that tells Slackbot how to complete a specific task, such as confirming an account, querying data and building a canvas. Michael pairs skills with MCP servers so Slackbot can act on a customer’s own tools.',
  },
  {
    q: 'How does Michael approach guardrails for AI?',
    a: 'Michael grounds answers in a known source, says when it cannot answer, verifies results, and hands off to a person. The Gluten-Free Beer Index sommelier only recommends listed beers, quotes the test evidence and never calls a beer safe. In the Slackbot plugin proof, Codex runs read-only against a closed allowlist of ten actions, and out-of-scope requests are rejected and logged.',
  },
  {
    q: 'What is Customer Zero?',
    a: 'Customer Zero is Salesforce’s practice of being its own first customer. Michael is the Slack SME and Solution Design Architect on Salesforce’s own move off Chatter onto Slack.',
  },
  {
    q: 'What certifications does Michael hold?',
    a: 'Salesforce Certified Administrator, Salesforce Certified Slack Consultant, Salesforce Certified AI Associate (2025), Claude Certified Associate: Foundations (Anthropic, 2026) and Agentblazer Innovator (2026). Michael is a Trailhead Four-Star Ranger, and the Agentforce Specialist exam is in progress.',
  },
  {
    q: 'How can I contact Michael?',
    a: `Email ${EMAIL} or message Michael on LinkedIn (${LINKEDIN}).`,
  },
]
