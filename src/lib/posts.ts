export type PostSection = { h?: string; p: string[] };

export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string;
  dateLabel: string;
  image: string;
  imageAlt: string;
  intro: string;
  sections: PostSection[];
  relatedServices: string[]; // service slugs
};

export const POSTS: Post[] = [
  {
    slug: "ac-repair-miami-what-to-know",
    title: "AC Repair in Miami: What Every Homeowner Should Know Before Calling",
    description:
      "How to tell if your AC needs repair, what it should cost in Miami, and how to avoid the games some companies play. From the Skyline HVAC crew.",
    date: "2026-09-24",
    dateLabel: "September 24, 2026",
    image: "/jobs/job-05.jpg",
    imageAlt: "Skyline HVAC technician-installed condenser after an AC repair in Miami",
    intro:
      "In Miami, air conditioning isn't a luxury — it's the difference between living in your house and surviving it. When the AC starts struggling, most homeowners wait too long, call too late, and end up paying more. Here's what our techs wish every Miami homeowner knew before the system gives out.",
    sections: [
      {
        h: "The warning signs Miami homeowners ignore",
        p: [
          "Your AC rarely dies without warning. Weeks before a breakdown, it usually tells you: the house takes longer to cool down in the afternoon, the air from the vents feels weaker or less cold, the outdoor unit starts making a new noise, or your FPL bill jumps without explanation. In our climate, where systems run nearly year-round, these signs show up faster and escalate faster than anywhere else in the country.",
          "The most common calls we get across Miami-Dade and Broward: refrigerant leaks (the system cools less and less each week), failing capacitors (the unit hums but won't start), clogged drain lines (water around the air handler — Miami humidity is brutal on drains), and dirty coils choking airflow. Caught early, most of these are quick, inexpensive fixes. Ignored, they take the compressor with them — and that's the most expensive part in the system.",
        ],
      },
      {
        h: "What AC repair should cost — and how to spot the games",
        p: [
          "Every honest repair starts with a diagnosis, not a sales pitch. You should get a clear explanation of what failed, what it takes to fix it, and a flat price in writing before any work starts. If a tech quotes you a price that changes once the panel is open, or pushes a full system replacement before explaining what actually broke, get a second opinion.",
          "At Skyline HVAC, the diagnostic is currently free for all new customers, and the quote we give you is the price you pay — in writing, before we touch a wrench. That's not a marketing trick; it's just how repair should work.",
        ],
      },
      {
        h: "Repair or replace? The honest math",
        p: [
          "A good rule: if the repair costs less than a third of a new system and your unit is under 10 years old, repair it. If the compressor is gone on a 12-year-old unit that runs on phased-out refrigerant, replacement usually saves you money within a couple of summers through lower power bills alone. An honest company will show you both numbers and let you decide — not decide for you.",
        ],
      },
      {
        h: "Why speed matters in South Florida",
        p: [
          "A house in Kendall or Pembroke Pines can hit 90 degrees indoors within hours of an AC failure in August — dangerous for kids, seniors, and pets, and rough on everything from your walls to your pets' water bowls. That's why Skyline runs 24/7 emergency AC repair across Miami-Dade, Broward, and Palm Beach with fully stocked trucks: most repairs are done on the first visit, because waiting two days for a part in this heat isn't an option.",
        ],
      },
    ],
    relatedServices: ["ac-repair", "ac-diagnosis", "ac-maintenance"],
  },
  {
    slug: "ac-installation-miami-guide",
    title: "AC Installation in Miami: The Complete 2026 Guide",
    description:
      "Choosing the right AC system for a Miami home — sizing, SEER2 ratings, permits, cost ranges, and why installation quality matters more than the brand.",
    date: "2026-09-24",
    dateLabel: "September 24, 2026",
    image: "/jobs/job-01.jpg",
    imageAlt: "Skyline HVAC lifting a new condenser for a second-story installation in Miami",
    intro:
      "A new air conditioner is one of the biggest investments a Miami homeowner makes — and the industry's dirty secret is that the installation matters more than the equipment. The best system on the market, installed carelessly, will cool unevenly, drink electricity, and die young. Here's what a proper AC installation in Miami looks like in 2026.",
    sections: [
      {
        h: "Sizing: where most installations go wrong",
        p: [
          "Bigger is not better. An oversized system cools the air fast but shuts off before it dehumidifies — and in Miami, humidity is half the battle. The result is a house that feels cold and clammy at the same time, with mold risk climbing in the closets. A proper installation starts with a load calculation: square footage, insulation, window exposure, ceiling height, and how the sun hits your house. At Skyline, we size every system to your actual home — never a guess based on 'what was there before.'",
        ],
      },
      {
        h: "SEER2, refrigerants, and what actually saves you money",
        p: [
          "Florida requires a minimum SEER2 rating of 15.2 for new installations, but in a climate where the AC runs 320+ days a year, stepping up in efficiency pays back faster here than almost anywhere in America. Modern systems also use the newer R-32 and R-454B refrigerants — if you're replacing a system running on old R-410A or ancient R-22, a new installation future-proofs you against rising refrigerant costs.",
          "We install and service every major brand — Daikin, Ruud, Bryant, Amana, Goodman, Carrier, Rheem — and we'll tell you honestly which one fits your budget and your house, because we're not locked into selling any single line.",
        ],
      },
      {
        h: "Permits and code: not optional in South Florida",
        p: [
          "Every AC installation in Miami-Dade, Broward, and Palm Beach requires a permit and inspection — hurricane tie-down straps, proper electrical disconnects, code-compliant drain lines. Companies that skip permits are saving themselves time at your expense: unpermitted work can void insurance claims and bite you at resale. Skyline handles the permit, the inspection, and the paperwork on every install. License CAC1824633 — it's on the door of every van.",
        ],
      },
      {
        h: "What installation day looks like with Skyline",
        p: [
          "Most residential installations are done in a single day: old system out and hauled away, new pad and lines set, system installed to factory spec, refrigerant charged by weight and verified by pressure, airflow balanced, thermostat configured, and the whole thing commissioned with documented numbers — not 'feels cold to me.' You get the permit closed, the warranty registered, and financing options if you want to spread the cost. One crew, one day, cold air by dinner.",
        ],
      },
    ],
    relatedServices: ["ac-installation", "condenser-replacement", "duct-repair-replacement"],
  },
  {
    slug: "honest-top-rated-ac-company-miami-broward",
    title: "Why Choosing an Honest, Top-Rated AC Company in Miami & Broward Matters",
    description:
      "The AC industry has a trust problem. Here's how South Florida homeowners can spot an honest, top-rated AC company — and the red flags to run from.",
    date: "2026-09-23",
    dateLabel: "September 23, 2026",
    image: "/media/hero-miami.jpg",
    imageAlt: "Miami skyline — Skyline HVAC service area",
    intro:
      "Ask any Miami homeowner about AC companies and you'll hear a story: the tech who 'found' a $2,000 problem that didn't exist, the quote that doubled once the truck was in the driveway, the company that disappeared after the deposit. The AC industry has a trust problem — and in a city where nobody can go without cooling, some companies treat that desperation as a pricing strategy. Here's how to protect yourself.",
    sections: [
      {
        h: "The red flags of a dishonest AC company",
        p: [
          "Watch for these: a diagnosis that immediately becomes a replacement pitch. Prices quoted by phone that change on site. Pressure to 'sign today' for a discount that expires when the tech leaves. No license number on the truck, the invoice, or the website. Cash-only demands. And the classic — refusing to show you the failed part or explain what actually broke.",
          "In Florida, every legitimate AC contractor carries a state license you can verify in seconds on the DBPR website. If a company won't give you their license number, that's not a company — that's a guy with a van.",
        ],
      },
      {
        h: "What 'top-rated' actually means",
        p: [
          "Stars are a starting point, not the whole story. Read the one-star reviews of any company you're considering — how a business responds to problems tells you more than a hundred five-star ratings. Look for reviews that mention the same tech behaviors over months: showing up on time, explaining before charging, cleaning up after the job. Consistency is what separates a top-rated company from a company with good marketing.",
        ],
      },
      {
        h: "The Skyline standard",
        p: [
          "We built Skyline HVAC on a simple bet: that in a market full of games, being straight with people is a competitive advantage. That means Florida state certification (CAC1824633) on every job, licensed, bonded and insured. Flat, upfront quotes in writing before a panel comes off — the price we say is the price you pay. A free diagnostic for all new customers, so you know exactly what's wrong before you spend a dollar. And 24/7 emergency response across Miami-Dade, Broward, and Palm Beach, because the 2 AM breakdown is exactly when honesty matters most.",
          "We're a locally owned family business — not a franchise, not a private-equity rollup, not a call center routing you to whoever bought your ZIP code this month. The van you see in your neighborhood is ours, the techs are ours, and the reputation on the line is ours.",
        ],
      },
      {
        h: "One question that filters out the bad ones",
        p: [
          "Before you book any AC company in Miami or Broward, ask this: 'Will you give me a written, flat-rate quote after diagnosis, before any work begins?' An honest company says yes instantly — it's how they already operate. A dishonest one starts explaining why that's complicated. That thirty-second question will save you thousands over the life of your home.",
        ],
      },
    ],
    relatedServices: ["ac-diagnosis", "ac-repair", "ac-installation"],
  },
];

export const getPost = (slug: string) => POSTS.find((p) => p.slug === slug);
