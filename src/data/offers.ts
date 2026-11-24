export interface Offer {
  title: string
  body: string
  evidence: string
}

// "What I can help with": capabilities with a checkable proof point each.
export const offers: Offer[] = [
  {
    title: 'Slackbot skills and MCP proofs',
    body: 'Working proofs that connect Slackbot to a customer’s own tools and data, built fast enough to test an idea in a day.',
    evidence: 'Five recent proofs of concept; three built from first call to working demo the same day.',
  },
  {
    title: 'Connected systems design',
    body: 'Slack-first designs that bring Salesforce data and analytics into the conversation, with the limits found before anything is built.',
    evidence: 'A Slackbot + Tableau Next pre-call brief and a Slack–Salesforce case sync.',
  },
  {
    title: 'Enablement and adoption',
    body: 'Training, cutover plans and launch playbooks that get a workspace used, not just launched.',
    evidence: 'Highest-utilized Learning Architect at Slack in FY23 and FY24; 25,000+ users trained.',
  },
  {
    title: 'Product feedback loop',
    body: 'Turning what each engagement teaches into clear product gaps, evidence and reusable patterns.',
    evidence: 'Gaps raised with Product and Platform from live customer work.',
  },
]
