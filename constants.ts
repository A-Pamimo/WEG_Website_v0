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

The reality is the opposite. When everything is a priority, nothing is. A dashboard with 40 metrics isn't a tool—it's a panic room.

### The High Cost of Cognitive Load

Every additional metric on a dashboard taxes the cognitive load of the decision-maker. If you're in a Monday morning leadership meeting and it takes five minutes to figure out which number actually matters, the dashboard has failed.

Data is only useful if it reduces uncertainty and drives action. If a metric doesn't help you choose between Option A and Option B, it is effectively noise.

I've worked with public sector leaders in Western Canada who were tracking over 60 KPIs for a single strategic plan. When we asked which ones they actually referenced before making budget decisions, the answer was three. The rest were compliance theatre.

### The "So What?" Test

In our dashboard design workshops, we force executives to play a game we call "So What?" For every metric they want to include on a primary dashboard, they have to answer a simple question:

*"If this number goes down by 10% next week, what specific decision will you make?"*

If the answer is *"I'd be worried"* or *"I'd ask someone to look into it,"* that metric is not a Key Performance Indicator. It's a diagnostic metric. It belongs in the appendix, not on the executive summary.

Real KPIs trigger specific, pre-defined responses. Diagnostic metrics trigger investigation.

### A Framework for Clarity

To regain control, structure your reporting into three distinct tiers:

1. **The Executive View (The "Pulse"):** 3-5 metrics that define organizational health. These are usually lagging indicators—Revenue, Free Cash Flow, Net Promoter Score, Employee Retention. If you're a CEO reviewing these weekly, you should be able to internalize the trend in under 90 seconds.

2. **The Operational View (The "Lever"):** Metrics that teams can directly influence today. Sales calls made, support tickets closed, production uptime, grant applications submitted. This is where your directors live.

3. **The Diagnostic View (The "Why"):** The deep-dive data used only when a top-tier metric flashes red. This layer is for analysts, not executives. It's accessed on demand, not pushed weekly.

### Pruning the Garden

To clear the path, you need to be ruthless:

* **Kill the Vanity Metrics:** Likes, page views, and "total people reached" rarely correlate with actual business impact. Track conversion, not exposure.
* **Design for the User:** A CFO needs different numbers than a Program Director. One dashboard cannot serve both. Customize by role.
* **Focus on Ratios Over Raw Counts:** Raw numbers like "1,000 attendees" tell you nothing without context. "Cost per attendee," "Revenue per FTE," and "Conversion rate" tell you whether you're efficient.

### The Bottom Line

Data is not the strategy. Data is the evidence you use to adjust the strategy. If your dashboard isn't changing behavior—if it's just something you glance at during Monday meetings and then ignore—it's wallpaper.

The best executives I've worked with in Canada don't have more data than their peers. They have less. But what they have is signal, not noise.
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

Economic impact reports have a reputation for inflation. You've seen the headlines: *"New arena to bring $500M to local economy."* Six years later, the neighborhood is unchanged, property tax revenue hasn't budged, and the public is cynical.

The culprit is often the abuse of the **multiplier effect**—the economic concept that a dollar spent by a visitor cycles through the local economy multiple times. While multipliers are real, they are fragile. And they are frequently misused to justify projects that don't deliver.

### Anatomy of an Impact Report

To understand where reports go wrong, you must understand the three buckets of economic impact:

1. **Direct Impact:** The money actually spent by the organization and its visitors—ticket sales, hotel rooms, restaurant bills. This is the only "hard" number. Everything else is estimated.

2. **Indirect Impact (Supply Chain Effect):** The money the hotel spends on laundry services, or the restaurant spends on locally sourced ingredients. This assumes the supply chain is local.

3. **Induced Impact (Income Effect):** The money the hotel housekeeper spends on groceries because she has a job. This assumes the worker wouldn't have found employment elsewhere.

Each layer adds uncertainty. By the time you reach induced impact, you're three assumptions deep.

### The Common Tricks

Consultants often exaggerate impact by manipulating these variables:

* **The Geography Trap:** Using a national or provincial multiplier for a hyper-local project. A dollar spent in downtown Toronto stays in the city longer than a dollar spent in a small northern Ontario town, where it immediately leaks out to pay for goods imported from elsewhere. If your project is local, your multiplier should be too.

* **Ignoring Displacement:** If a Calgary resident spends $50 at your festival, they *didn't* spend that $50 at the local cinema or restaurant. That is not "new" economic activity—it's displaced activity. Rigorous reports adjust for this. Most don't.

* **Double-Counting Jobs:** Claiming that a project "supports 200 jobs" without clarifying whether those are full-time equivalents, person-years, or part-time seasonal positions. There's a big difference between creating 200 permanent jobs and hosting 200 summer students for eight weeks.

### Building a Defensible Narrative

At World's Edge Group, we believe that an economic impact report is only as valuable as its defensibility. If a city councillor, journalist, or skeptical CFO digs into your footnotes, they should find conservative assumptions and transparent methodology—not inflation.

To build trust:

* **Show Your Math:** Publish the multipliers you used and cite the source. Statistics Canada publishes input-output multipliers by region and industry. Use them. If you're applying a custom multiplier, explain why in plain language.

* **Report Net Impact, Not Gross Spending:** Clearly distinguish between total spending and net new economic activity. Gross figures make headlines. Net figures make decisions.

* **Acknowledge What You Can't Measure:** If your study can't cleanly separate out displacement or substitution effects, say so. Honesty builds credibility. Overconfidence destroys it.

* **Humanize the Numbers:** A $10M impact figure is abstract. Pair it with the story of the local catering company that hired two new staff, or the Indigenous-owned supplier that secured a three-year contract. Numbers justify. Stories persuade.

### The Executive Takeaway

A good impact report gives the CFO the defensible number they need to justify the investment. But it also gives the CEO or board chair the narrative they can use to build stakeholder confidence.

If your impact report can't survive a CBC journalist's follow-up questions, it's not an asset—it's a liability.
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

You spent three weeks building a 60-slide PowerPoint deck. You have the data, the charts, the sensitivity analysis, and the appendix. You walk into the board meeting, and the Chair says, *"I only have 10 minutes. Just tell me what we need to decide."*

If you can't state the tradeoff in the first paragraph, you haven't finished thinking yet.

### Why Prose Wins

Jeff Bezos famously banned PowerPoint at Amazon in favor of six-page narrative memos. The reason was simple: **Bullet points allow for lazy thinking.**

"We need to optimize the customer funnel" is a bullet point that everyone nods at but nobody understands.

"We need to remove the email verification step because it causes a 20% drop-off, even though it will increase spam complaints by an estimated 15%" is a narrative that forces a decision.

The first is a status update. The second is a recommendation with consequences.

### The WEG Memo Structure

We train teams to write **Decision Memos** rather than **Update Reports**. A Decision Memo has a rigid structure designed for speed and action:

**1. The Context (The "Hook")**
Why are we talking about this *now*? What changed? What triggered this decision point?

Examples: "Our vendor contract expires in 45 days." Or: "Provincial funding guidelines were updated last week, and we no longer qualify under the old model."

**2. The Complication (The "Why")**
Why is the status quo no longer viable? What breaks if we do nothing?

This is where you build urgency. If there's no real complication, you don't need a decision memo—you need a project plan.

**3. The Recommendation (The "What")**
One clear, unambiguous sentence. "We should pursue Option B and defer Option C to Q3."

Do not hedge. Do not present three options and ask the executive to pick. Your job is to synthesize the analysis and make a call. Their job is to approve, reject, or challenge your logic.

**4. The Tradeoff (The "Cost")**
This is the most important section, and the one most leaders skip.

Every strategic choice has a cost—financial, operational, reputational, or temporal. If you pretend there are no downsides, you lose credibility. Be explicit:

*"Option B delivers faster, but it increases our dependency on a single vendor and raises operational risk by approximately 15%. We can mitigate this with a six-month contract review clause."*

Acknowledging tradeoffs doesn't weaken your recommendation. It strengthens it. It shows you've thought it through.

### Writing is Thinking

Writing a memo forces you to connect the logic in a way that slides do not. Slides let you gesture at an idea. Prose makes you defend it.

If you can't write a coherent two-page argument for your recommendation, you probably shouldn't be making it yet. The gaps in your reasoning become obvious the moment you try to write in full sentences.

### Respect Time, Earn Trust

The executives I work with in Canada—CEOs of mid-sized firms, municipal CAOs, ED's of nonprofits—don't have time to hunt for the point. They're managing competing priorities, tight timelines, and board scrutiny.

Do the hard work of synthesis before you hit send. Strip out the vanity metrics, the hedging language, and the "for your consideration" phrasing.

If you respect their time, they will respect your recommendation. If you waste it, they'll stop reading your memos altogether.
    `
  }
];

export const PROOF_POINTS = [
  "Economic impact reporting for community and arts initiatives",
  "Ranking and scoring frameworks for regional business reporting",
  "Public sector dashboarding and strategic execution tracking",
  "Research-grade analysis with real-world interpretation"
];