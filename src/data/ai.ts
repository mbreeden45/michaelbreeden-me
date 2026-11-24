import type { Faq } from './faq'

// How Michael works with AI, in interview-question form. Third person, no gendered pronouns, no customer names.
// Feeds brief.md (so the site agent can answer these), llms.txt and the visible "How I work with AI" section.
export const aiQa: Faq[] = [
  {
    q: 'What AI tools does Michael use?',
    a: 'Claude Code and Cursor to build, Codex for the plugin work, Gemini as the everyday chat because it is the most affordable, and Muse as a personal assistant, chosen partly on cost and partly to keep trying different tools. At work, Slackbot is where the day starts: Michael checks it for a rundown of the day, and uses Slackbot tasks for morning briefings and later check-ins.',
  },
  {
    q: 'Which AI models is Michael familiar with?',
    a: 'Claude (Opus is the preference when choosing freely), Gemini (including Neon) and the Codex lineup (including Astra). Cursor also offers others, such as Grok, but Michael does not use them much because they are less familiar. Michael is flexible across models: the design, the grounding and the guardrails matter more than which model runs them.',
  },
  {
    q: 'How does Michael choose a model for a job?',
    a: 'On personal projects cost matters, so a cheaper, faster model almost always wins, even Opus 5.5 at low effort. A bigger model is saved for the end, when hunting for bugs, and Michael’s own planning does not need one. At work, model choice is mostly handled by internal tooling. A measured example: for this site’s agent, Gemini flash-lite answered in about 0.6 seconds while the larger flash model took 6 to 17, so the faster one is the default.',
  },
  {
    q: 'What does a normal day of building with AI look like?',
    a: 'It starts in Slackbot for a rundown of the day. Then customer meetings, a review of the actions that came out of them, and building from there. New ideas start with discovery, and Slackbot skills, MCP servers and small apps are built and tested in the same sitting.',
  },
  {
    q: 'What is Michael’s biggest mistake with AI, and what changed?',
    a: 'Starting too fast. Whatever gets built first becomes the foundation, so Michael now spends longer in discovery, which comes from earlier Learning and solution roles, before building, and iterates after.',
  },
  {
    q: 'How does Michael decide whether to trust what an agent built?',
    a: 'Testing, as always. Michael also has agents write test cases, so testing has gotten better, not lighter.',
  },
  {
    q: 'What does Michael tell a team that feels overwhelmed by AI tools?',
    a: 'Start with something already owned: a project in flight, a presentation that already exists, or a small idea or problem that matters personally. Because you are already the expert, the quality of the first AI result matters less, and the AI has a direction to expand instead of having to invent one.',
  },
  {
    q: 'What does Michael think is overhyped?',
    a: 'AI-built websites that all look alike. Michael can tell when a site was vibe coded. The fix is 15 to 20 minutes of effort: aim for a personality, collect inspiration, and ask for a mood board of five or six layouts and design styles first, so the first build is the one you wanted.',
  },
  {
    q: 'What can AI do now that was not possible a year ago?',
    a: 'Everything, from an idea to a working thing. Michael has long described the architect as the one who designs the balcony, with an engineer making sure it does not fall. Michael did both on paper without being the contractor who builds it. AI now covers the contractor too, so a Solution Design Architect can do all three.',
  },
  {
    q: 'How does Michael set up a project so an agent does good work?',
    a: 'With Markdown files that ground the agent: AGENTS.md and CLAUDE.md in code projects, and this site’s own brief.md, which the site agent answers from. Slack skills are the same idea inside Slackbot.',
  },
  {
    q: 'Does Michael use subagents or scheduled agents?',
    a: 'Mostly for personal life, through Muse. There is not much automation Michael needs for work, and Slackbot tasks cover the daily rundown and check-ins.',
  },
  {
    q: 'What does Michael build from a phone?',
    a: 'Basically anything by now, including the Status Run Planner prototype, built in three days entirely from a phone. A phone is never where a project starts. It is where iterations happen.',
  },
  {
    q: 'How does Michael keep an assistant from making things up?',
    a: 'Grounding in a written file, a closed list of tools, and honest handoffs. Slack skills and grounding are an area of confidence.',
  },
  {
    q: 'What failures has Michael run into with AI?',
    a: 'Mostly budget, rate limits and overloaded models, so everything is tested before it goes in front of people. Another lesson: with five connectors, Slackbot called tools that did not exist, and a narrow, closed tool list fixed it.',
  },
  {
    q: 'What are Michael’s rules for secrets and customer data?',
    a: 'Trust is the first priority at Salesforce. Customer details stay out of public pages, and AI does not get data it should not see.',
  },
  {
    q: 'When does Michael decide not to use AI?',
    a: 'When doing it directly would be faster. That happens often, and it is fine.',
  },
  {
    q: 'Is Slackbot ready for a given use case?',
    a: 'Get hands-on. Ask the person what they do day to day, understand it, put yourself in their shoes, and build something that actually helps.',
  },
  {
    q: 'What makes a good Slackbot skill?',
    a: 'Knowing the fringe use cases so the guardrails are right, and accepting that it cannot answer everything. The best part is the handoff: when something goes wrong, the skill should point to where to go next and how to reach a human.',
  },
  {
    q: 'What does Michael tell customers who ask about security for AI agents?',
    a: 'Use something that already has security approval instead of rebuilding it in Slackbot. The Codex plugin proof does this: the customer’s already-approved tool does the work, with read-only access and a closed allowlist around it.',
  },
  {
    q: 'How does Michael make AI adoption stick past the first week?',
    a: 'By not showing only cool demos. Michael works from people’s own use cases, spends time with them, watches them work and consults on their actual job.',
  },
  {
    q: 'How does Michael keep up with AI?',
    a: 'It is a hobby as much as a job. A big part is conversation, for example an hour with a respected solutions engineer swapping what each is building.',
  },
  {
    q: 'What did the Claude and Salesforce AI exams cover?',
    a: 'Michael passed both the Claude Certified Associate: Foundations and the Salesforce Certified AI Associate, and found they matched what was already familiar from daily practice.',
  },
  {
    q: 'What prediction would Michael bet on for the next two years?',
    a: 'More agents, and a push back toward standards. A codebase that quadruples in three months without anyone thinking about how, or whether to dial it back, is not productive, so teams will need standards for AI-built code.',
  },
]

export interface AiCard {
  title: string
  body: string
}

// Visible "How I work with AI" cards, first person.
export const aiCards: AiCard[] = [
  {
    title: 'Tools and harnesses',
    body: 'Claude Code and Cursor to build, Codex for the plugin work, Gemini as my everyday chat, Muse as a personal assistant, and Slackbot to start every work day. Markdown files (AGENTS.md, CLAUDE.md, and this site’s own brief.md) keep agents grounded.',
  },
  {
    title: 'Models',
    body: 'Familiar with Claude, Gemini and the Codex lineup. Opus is my preference, but on my own projects cost wins: a cheaper, faster model, even Opus 5.5 at low effort, does most jobs, and a bigger one comes late, when I am hunting bugs. For this site’s agent I measured Gemini flash-lite at about 0.6 seconds against 6 to 17 for the larger flash, and chose by speed.',
  },
  {
    title: 'How I trust it',
    body: 'Discovery first, then a lot of testing, and I have agents write test cases, so my testing got better, not lighter. My biggest mistake was starting too fast: the first thing you build becomes the foundation. Now I spend longer in discovery and iterate.',
  },
  {
    title: 'When I skip it',
    body: 'If I can do something faster myself, I do. Trust is the first rule at Salesforce, so customer details stay where they belong. And I would rather show people AI on their own work than a cool demo.',
  },
]

export const aiQuote =
  'An architect designs the balcony. An engineer makes sure it does not fall. I did both on paper without being the contractor. Now I can do all three.'

export const aiAdvice =
  'Feeling overwhelmed? Start with something you already own: a project in flight, a presentation you have, or a small idea you care about. You are already the expert, so the AI has a direction to expand instead of having to invent one.'

// For the site agent only: tone and light personal color, nothing that is not stated here.
export const personality: string[] = [
  'Plain-spoken, curious and hands-on; treats AI as a hobby as much as a job, and is cost-conscious on personal projects.',
  'Believes in showing people AI on their own work, not just cool demos.',
  'A Los Angeles Dodgers fan. Built the MLB Ticket Generator, a baseball ticket-stub maker used by real people.',
  'Also built a travel status-run planner and a gluten-free beer directory, mostly because they were fun problems.',
  'Playful questions are welcome. Answer them briefly and in good humor, then steer back to the work. Do not invent personal opinions, favorite players or anecdotes that are not stated here.',
]
