export interface Role {
  title: string
  dates: string
  bullets: string[]
}

export interface ExperienceEntry {
  company: string
  location: string
  dates: string
  roles: Role[]
}

export const experience: ExperienceEntry[] = [
  {
    company: 'Slack',
    location: 'Los Angeles, CA',
    dates: '5 yrs 10 mos',
    roles: [
      {
        title: 'Solution Design Architect',
        dates: 'Feb 2024 – Present',
        bullets: [
          "Solution Design Architect leading Salesforce's own internal migration off Chatter onto Slack as its primary collaboration platform — the largest and most complex Salesforce Channels rollout undertaken",
          'Built a Slack ↔ Salesforce case-management integration with bidirectional case/thread sync for one of the most valuable technology companies in the world; now leading it through enterprise security review toward production',
          'Designed an internal Slack analytics tool for a longstanding enterprise partner, then extended it into an MCP server so the same analysis runs conversationally through Slackbot',
          "Built a fully working live-trivia Slack app for Salesforce's Sports Marketing team at a marquee motorsport activation, with real-time scoring and anti-cheat safeguards — now moving through the account team's production rollout process",
        ],
      },
      {
        title: 'Learning Architect',
        dates: 'Aug 2022 – Feb 2024',
        bullets: [
          'Highest-utilized Learning Architect at Slack; advised 11 of the top 100 global companies by market cap',
          'Delivered customized training to 25,000+ Slack users while leading the team in utilization for FY23 and FY24',
          'Sole team member concurrently certified as Salesforce Administrator, Trailhead Double-Star Ranger, Slack Launch Consultant, and GovSlack Consultant — while completing an MBA',
        ],
      },
      {
        title: 'Senior Learning Consultant',
        dates: 'Oct 2021 – Aug 2022',
        bullets: [
          "Promoted from Enterprise Learning Consultant; delivered enterprise learning and adoption consulting as part of Slack's Specialized Services org, building the foundation for later solution architecture work",
        ],
      },
      {
        title: 'Enterprise Learning Consultant',
        dates: 'Dec 2020 – Oct 2021',
        bullets: [
          "Delivered enterprise learning and adoption consulting as part of Slack's Specialized Services org",
        ],
      },
    ],
  },
  {
    company: 'Shift4 (formerly Appetize)',
    location: 'Greater Los Angeles Area',
    dates: 'Oct 2019 – Dec 2020',
    roles: [
      {
        title: 'Director of Client Education',
        dates: 'Oct 2019 – Dec 2020',
        bullets: [
          'Evaluated, purchased, and launched a Learning Management System with all-new content within the first 90 days',
          'Built a 3-day new hire training program blending in-person, virtual, and self-paced learning',
          'Managed thousands of users across Appetize Academy, comprising 50+ hours of content and a certification program',
        ],
      },
    ],
  },
  {
    company: 'Autodesk Construction Solutions / PlanGrid',
    location: 'Greater Los Angeles Area',
    dates: 'Oct 2017 – Oct 2019',
    roles: [
      {
        title: 'Professional Services Manager',
        dates: 'Oct 2017 – Jun 2019',
        bullets: [
          'Delivered training and consulting to 3,000+ users with a 97% effective/highly-effective rating',
          'Designed and built the PlanGrid Certified Trainer program for 300+ certified trainers',
          'Awarded Professional Services Manager of the Year (FY2019); led the Southwest region to a 66% YoY increase in services bookings',
        ],
      },
    ],
  },
  {
    company: 'Bluebeam, Inc.',
    location: 'Pasadena, CA',
    dates: 'May 2016 – Oct 2017',
    roles: [
      {
        title: 'Software Trainer – Specialist',
        dates: 'May 2016 – Oct 2017',
        bullets: [
          'Delivered customized software training, onsite and virtual, for AEC-industry end users across the U.S. and Canada',
        ],
      },
    ],
  },
]
