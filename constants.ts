import { Service, CaseStudy, BlogPost } from './types';

// BRAND ASSETS
export const BRAND = {
  name: "World's Edge Group",
  shortName: "WEG",
  founder: "Pamimo Akinjide",
  tagline: "Clear decisions. Complex realities.",
  contactEmail: "info@worldsedgegroup.com",
  bookingUrl: "#book-a-call"
};

// SERVICES
export const SERVICES: Service[] = [
  {
    id: 'impact',
    title: "Economic Impact & Storytelling",
    description: "We turn dry data into defensible narratives that secure funding and stakeholder alignment.",
    icon: 'Chart',
    bullets: [
      "Economic impact reports",
      "Corporate ranking methodologies",
      "Board-ready visualization",
      "Narrative reporting"
    ]
  },
  {
    id: 'strategy',
    title: "Strategy & Decision Briefs",
    description: "Executive-grade memos and frameworks designed for leaders who need to act quickly.",
    icon: 'Compass',
    bullets: [
      "Decision memos & One-pagers",
      "Strategic planning support",
      "Executive presentations",
      "Tradeoff analysis"
    ]
  },
  {
    id: 'analytics',
    title: "Analytics & Dashboards",
    description: "We build systems that people actually use, translating messy operations into clear signals.",
    icon: 'FileText',
    bullets: [
      "Power BI / Tableau Design",
      "KPI Development",
      "Operational Data Pipelines",
      "Program Evaluation"
    ]
  }
];

// CASE STUDIES (The "Work")
export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'community-theatre',
    title: "Community Theatre Economic Impact",
    category: "Economic Impact",
    summary: "Produced a defensible impact report for a major arts initiative, packaging results for board-level review.",
    image: "https://picsum.photos/id/452/800/600",
    timeline: "6 Weeks",
    problem: "The organization had strong anecdotal evidence of their value but lacked the rigorous economic data needed to justify a significant public funding increase request.",
    approach: "We built a custom economic model based on localized multipliers rather than generic national averages. We combined this with a 'narrative layer' - interviews with local business owners - to humanize the data.",
    deliverables: [
      "Economic Impact Model (Excel)",
      "20-Page Designed Report",
      "Board Presentation Deck"
    ],
    outcomes: [
      { label: "Target Funding", value: "TBD" },
      { label: "Stakeholder Buy-in", value: "100%" },
      { label: "Data Defensibility", value: "High" }
    ]
  },
  {
    id: 'western-ranking',
    title: "Western Canada Corporate Ranking",
    category: "Ranking Framework",
    summary: "Built a transparent scoring methodology to rank top companies across revenue and social impact.",
    image: "https://picsum.photos/id/20/800/600",
    timeline: "3 Months",
    problem: "A regional publication needed a new way to rank 'Top Companies' that went beyond simple revenue, but they struggled to weight social factors fairly without biasing the results.",
    approach: "WEG developed a composite impact framework. We normalized disparate data sets (carbon footprint, diversity stats, EBITDA) into a single rigorous score, ensuring the methodology was transparent enough to be published alongside the rankings.",
    deliverables: [
      "Scoring Algorithm",
      "Data Collection Survey Design",
      "Final Methodology Whitepaper"
    ],
    outcomes: [
      { label: "Companies Ranked", value: "100+" },
      { label: "Methodology Clarity", value: "A+" },
      { label: "Process Time", value: "-40%" }
    ]
  },
  {
    id: 'muni-dashboard',
    title: "Municipal Strategy Dashboard",
    category: "BI & Analytics",
    summary: "Translated leadership priorities into a live dashboard, allowing decision-makers to track strategic execution.",
    image: "https://picsum.photos/id/445/800/600",
    timeline: "8 Weeks",
    problem: "City leadership had a 5-year strategic plan, but progress was buried in PDF reports. They couldn't tell which initiatives were stalled until it was too late.",
    approach: "We moved them from 'reporting activities' to 'measuring outcomes.' We designed a lightweight dashboard that flagged risks in red and progress in green, stripping away 80% of the vanity metrics to focus on the KPIs that actually mattered.",
    deliverables: [
      "KPI Definition Workshop",
      "Live Dashboard (Power BI)",
      "Maintenance Playbook"
    ],
    outcomes: [
      { label: "Metrics Tracked", value: "Key" },
      { label: "Update Frequency", value: "Real-time" }
    ]
  }
];

// INSIGHTS (Blog)
export const INSIGHTS: BlogPost[] = [
  {
    id: 'data-noise',
    title: "Stop Drowning in Data",
    date: "Oct 12, 2023",
    readTime: "5 min read",
    category: "Strategy",
    excerpt: "Why more metrics often lead to worse decisions, and how to prune your dashboard using the 'So What?' test.",
    author: "Pamimo Akinjide",
    content: `
### The Illusion of Control

In the age of cheap storage and easy-to-use BI tools, most organizations suffer from "data obesity." We track everything because we can, not because we should. We build dashboards with 40 distinct charts, believing that if we can *see* everything, we can *control* everything.

The reality is the opposite. When everything is a priority, nothing is. A dashboard with 40 metrics isn't a tool; it's a panic room.

### The High Cost of Cognitive Load

Every additional metric on a dashboard taxes the cognitive load of the decision-maker. If a CEO has to spend five minutes figuring out which number matters, the dashboard has failed. 

Data is only useful if it reduces uncertainty. If a metric doesn't help you choose between Option A and Option B, it is effectively noise.

### The "So What?" Test

In our dashboard design workshops, we force executives to play a game we call "So What?". For every metric they want to include on a primary dashboard, they have to answer a simple question:

*"If this number goes down by 10% next week, what specific decision will you make?"*

If the answer is *"I'd be worried"* or *"I'd ask someone to look into it,"* that metric is not a Key Performance Indicator (KPI). It is a diagnostic metric. It belongs in the appendix, not on the executive summary.

### A Framework for Clarity

To regain control, structure your reporting into three distinct tiers:

1. **The Executive View (The "Pulse"):** 3-5 metrics that define health. These are usually lagging indicators (Revenue, Cash Flow, NPS).
2. **The Operational View (The "Lever"):** Metrics that teams can directly influence today (Sales calls made, Tickets closed, Production uptime).
3. **The Diagnostic View (The "Why"):** The deep dive data used only when a top-tier metric flashes red.

### Pruning the Garden

To clear the path, you need to be ruthless:

* **Kill the Vanity Metrics:** Likes, page views, and "total people reached" rarely correlate with impact.
* **Group by User:** A CFO needs different numbers than a Program Director. One dashboard cannot serve both.
* **Focus on Ratios:** Raw numbers (e.g., "1,000 attendees") are less useful than ratios (e.g., "Cost per attendee" or "Conversion rate").

Data is not the strategy. Data is the evidence you use to adjust the strategy. If your dashboard isn't changing your behavior, it's just wallpaper.
    `
  },
  {
    id: 'impact-truth',
    title: "The Truth About Economic Impact",
    date: "Sept 28, 2023",
    readTime: "7 min read",
    category: "Economics",
    excerpt: "Multipliers can be manipulated. Here is how to build a report that actually stands up to scrutiny.",
    author: "Pamimo Akinjide",
    content: `
### The Credibility Crisis

Economic impact reports have a reputation for inflation. You've seen the headlines: *"New stadium to bring $500M to local economy."* Six years later, the neighborhood is unchanged, and the public is cynical.

The culprit is often the abuse of the **"multiplier effect"** - the economic concept that a dollar spent by a tourist cycles through the local economy multiple times. While multipliers are real, they are fragile.

### Anatomy of an Impact Report

To understand where reports go wrong, you must understand the three buckets of impact:

1. **Direct Impact:** The money actually spent by the organization and its visitors (e.g., ticket sales, hotel rooms, dinner). This is the only "hard" number.
2. **Indirect Impact (Supply Chain):** The money the hotel spends on laundry services, or the restaurant spends on local produce.
3. **Induced Impact (The Ripple):** The money the hotel maid spends on groceries because she has a job.

### The Common Tricks

Consultants often exaggerate impact by manipulating these variables:

* **The Geography Trap:** Using a national multiplier for a local project. A dollar spent in New York City stays in NYC longer than a dollar spent in a small rural town (where it immediately leaks out to buy goods imported from elsewhere).
* **Ignoring Displacement:** If a local resident spends $50 at your festival, they *didn't* spend that $50 at the local movie theater. That is not "new" economic activity; it is displaced activity. Rigorous reports strip this out.

### Building a Defensible Narrative

At World's Edge Group, we believe that an economic impact report is only as valuable as its defensibility. If a journalist or a skeptical board member digs into your footnotes, they should find conservative assumptions, not inflation.

To build trust:
* **Show Your Math:** Publish the multipliers used and their source (e.g., StatsCan, BEA).
* **Report the "Net":** Clearly distinguish between gross spending and net new economic activity.
* **Humanize the Data:** A number is abstract. Pair the $10M impact figure with the story of the local supplier who hired two new staff members because of your contract.

A good impact report gives the banker the number they need, but gives the politician the story they can sell.
    `
  },
  {
    id: 'memo-art',
    title: "The Art of the Decision Memo",
    date: "Aug 15, 2023",
    readTime: "4 min read",
    category: "Communication",
    excerpt: "How to write for executives who don't have time to read: The Context, The Complication, and The Tradeoff.",
    author: "Pamimo Akinjide",
    content: `
### The Death of the Slide Deck

You spent three weeks building a 60-slide PowerPoint deck. You have the data, the charts, and the appendix. You walk into the executive meeting, and the CEO says, *"I only have 10 minutes. Just tell me what we need to do."*

If you can't state the tradeoff in the first paragraph, you haven't finished thinking yet.

### Why Prose Wins

Jeff Bezos famously banned PowerPoint at Amazon in favor of 6-page narrative memos. The reason was simple: **Bullet points allow for lazy thinking.** 

"We need to optimize the funnel" is a bullet point that everyone nods at but nobody understands. 
"We need to remove the email verification step because it causes a 20% drop-off, even though it will increase spam risk," is a narrative that forces a decision.

### The WEG Memo Structure

We train teams to write "Decision Memos" rather than "Update Reports." A Decision Memo has a rigid structure designed for speed and action:

**1. The Context (The "Hook")**
Why are we talking about this *now*? What triggered this decision? (e.g., "Our contract expires in 30 days," or "Competitor X just lowered prices.")

**2. The Complication (The "Why")**
Why is the status quo no longer an option? Why can't we just keep doing what we're doing?

**3. The Recommendation (The "What")**
One clear, unambiguous sentence. "We should pursue Option B." Do not hedge.

**4. The Tradeoff (The "Cost")**
This is the most important section. Every strategic choice has a cost. If you pretend there are no downsides, you lose credibility. Be explicit: *"Option B is faster, but it increases our operational risk profile by 20%."*

### Writing is Thinking

Writing a memo forces you to connect the logic in a way that slides do not. It exposes the gaps in your argument. 

Don't make your stakeholders hunt for the point. Do the hard work of synthesis before you hit send. If you respect their time, they will respect your recommendation.
    `
  }
];

export const PROOF_POINTS = [
  "Economic impact reporting for community and arts initiatives",
  "Ranking and scoring frameworks for regional business reporting",
  "Public sector dashboarding and strategic execution tracking",
  "Research-grade analysis with real-world interpretation"
];