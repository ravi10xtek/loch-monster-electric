// ─── CMS-ready structure ──────────────────────────────────────────────────────
// Each post maps 1:1 to a future Supabase `posts` table row.
// When Supabase is connected, replace this static export with:
//   const { data } = await supabase.from('posts').select('*').order('date', { ascending: false })
// Fields: slug, title, excerpt, date, readTime, tags, coverGradient, featured, toc, body (HTML)

export const ALL_TAGS = [
  'guides', 'warnings', 'safety', 'upgrades', 'compliance', 'products', 'insurance',
]

export const posts = [
  {
    slug: 'why-are-my-lights-flickering-causes-dangers-and-fixes-for-minnesota-wisconsin-homes',
    title: 'Why Are My Lights Flickering? Causes, Dangers, and Fixes for Minnesota & Wisconsin Homes',
    excerpt: "Flickering lights aren't just a nuisance — they're often an early sign of electrical issues. Learn what causes light flicker in Minnesota and Wisconsin homes, from loose bulbs to wiring or panel problems, and when to call a licensed electrician.",
    date: '2025-10-23',
    readTime: '8 min read',
    tags: ['safety', 'guides'],
    coverGradient: 'linear-gradient(135deg,#2a1d10 0%,#5a3618 50%,#1f1408 100%)',
    featured: true,
    toc: [
      'Why Are My Lights Flickering In My House?',
      'Loose Or Faulty Light Bulbs',
      'When Flickering Lights Point To Bigger Electrical Problems',
      'When To Call An Electrician For Flickering Lights',
      "Don't Ignore The Flicker — Call Loch Monster Electric",
    ],
    body: `
<p>Step into your living room in St. Paul, Hudson, or Baldwin, flip on a light switch — and instead of steady light, you see a faint flicker. Maybe it's the lamp in the corner, the kitchen overhead, or a whole circuit that pulses every few seconds. You've seen it before. Maybe you've even gotten used to it. But flickering lights aren't normal, and in Minnesota homes — where we run furnaces, baseboard heaters, and high-draw appliances all winter — they're often the first sign that something in your electrical system needs attention.</p>

<h2>Why Are My Lights Flickering In My House?</h2>
<p>Flickering lights fall into two broad categories: harmless and fixable yourself, or a symptom of something more serious. Knowing which you're dealing with starts with understanding the most common causes.</p>

<h2>Loose Or Faulty Light Bulbs</h2>
<p>Loose or faulty bulbs are one of the most common — and least dangerous — causes of flickering. In many cases, it's as simple as a bulb that needs a half-turn to seat correctly in the socket. LED bulbs on dimmer switches not rated for LED loads are another frequent culprit — the dimmer can't regulate the current properly, causing the flicker you see.</p>

<div class="jp-diy-box">
  <p class="jp-diy-label">Homeowner Fix (Step-By-Step):</p>
  <ol>
    <li><strong>Turn Off The Power</strong> to the fixture in question at the breaker.</li>
    <li>Wait for the bulb to cool completely before touching it.</li>
    <li>Gently twist the bulb clockwise until it snugs firmly into the socket.</li>
    <li>If it continues to flicker, replace the bulb before calling an electrician.</li>
    <li>Inspect the socket for burn marks. If you see scorching, stop — call us.</li>
  </ol>
</div>

<h2>When Flickering Lights Point To Bigger Electrical Problems</h2>
<p>If tightening the bulb doesn't fix it, the problem is likely upstream. Loose wiring connections — at the fixture, the switch, the outlet, or inside the breaker panel — are one of the leading causes of house fires in Minnesota. They cause arcing: tiny electrical sparks that generate heat inside your walls without any visible warning.</p>
<p>Other culprits include voltage fluctuations from large appliances cycling on and off (furnaces, refrigerators, A/C units), failing breakers that don't hold load properly, or an overloaded circuit where too many devices share a single 15-amp breaker.</p>

<h2>When To Call An Electrician For Flickering Lights</h2>
<p>Call us — don't wait — if you notice any of the following: flickering happens throughout multiple rooms at the same time, lights dim or brighten noticeably when an appliance kicks on, you hear buzzing or crackling near switches or outlets, or you see any discoloration around faceplates. These are signs of active wiring problems, not quirks to live with.</p>

<h2>Don't Ignore The Flicker — Call Loch Monster Electric</h2>
<p>Loch Monster Electric serves homeowners across the Twin Cities metro — from Shoreview and White Bear Lake to Bloomington and Eden Prairie. If your lights are flickering and you're not sure why, give us a call at 763-292-1191. We'll diagnose the cause, explain what we found in plain language, and fix it right the first time.</p>

<h2>Frequently Asked Questions About Flickering Lights</h2>
<div class="jp-faq">
  <div class="acc-item">
    <button class="acc-btn">What Electrical Services Affect Flicker?</button>
    <div class="acc-body"><p>Loose connections, failing breakers, overloaded circuits, and incompatible dimmer switches are the most common electrical causes of light flicker in residential homes.</p></div>
  </div>
  <div class="acc-item">
    <button class="acc-btn">Why Are My Lights Flickering?</button>
    <div class="acc-body"><p>The most likely causes are a loose bulb, a loose wiring connection, a dimmer incompatibility, or a circuit that's drawing more load than the breaker can comfortably handle.</p></div>
  </div>
  <div class="acc-item">
    <button class="acc-btn">Do I Need My Electrical Panel Upgraded?</button>
    <div class="acc-body"><p>If flickering is widespread and happens when appliances cycle on, your panel may not have enough capacity for your home's current load. A licensed electrician can run a load calculation to find out.</p></div>
  </div>
  <div class="acc-item">
    <button class="acc-btn">Why Are My Lights Flickering After Electrical Service?</button>
    <div class="acc-body"><p>If flickering starts after recent electrical work, a connection may not have been fully tightened. Call the electrician who did the work — or call us for a second opinion.</p></div>
  </div>
</div>

<h2>Glossary Of Electrical Terms</h2>
<div class="jp-glossary">
  <div class="jp-glossary-term">
    <strong>Arcing</strong>
    <p>An electrical discharge between two conductors. A sign of a loose or damaged connection that can cause fires inside walls.</p>
  </div>
  <div class="jp-glossary-term">
    <strong>Circuit Breaker</strong>
    <p>A safety device that interrupts electrical flow when a circuit is overloaded or short-circuited to prevent damage or fire.</p>
  </div>
  <div class="jp-glossary-term">
    <strong>Breaker Circuit Breaker</strong>
    <p>A resettable switch that protects a circuit from damage caused by overcurrent, overload, or short circuit.</p>
  </div>
  <div class="jp-glossary-term">
    <strong>Circuit Overload</strong>
    <p>When the total load on a circuit exceeds its rated capacity, causing the breaker to trip or wiring to overheat.</p>
  </div>
</div>
`,
  },
  {
    slug: 'panel-upgrades-when-your-home-needs-more-power',
    title: 'Panel Upgrades: When Your Home Is Asking for More Power',
    excerpt: "Older panels weren't built for modern loads — EVs, heat pumps, induction ranges, hot tubs. We'll walk through how to spot the signs your panel is at its limit and what a clean, code-compliant upgrade looks like.",
    date: '2025-10-15',
    readTime: '6 min read',
    tags: ['upgrades', 'warnings'],
    coverGradient: 'linear-gradient(135deg,#1a2230 0%,#2c3e55 50%,#d77a3c 100%)',
    featured: false,
    toc: [
      'Signs Your Panel Is At Its Limit',
      'What a 200-Amp Upgrade Looks Like',
      'How Long Does a Panel Upgrade Take?',
      'Cost of a Panel Upgrade in Minnesota',
    ],
    body: `
<p>Your electrical panel is the central nervous system of your home. When it's undersized or aging, every circuit in your house feels it — tripping breakers, warm outlets, appliances that won't run at full capacity. In the Twin Cities, where we're adding EV chargers, heat pumps, and induction ranges to homes that were wired for far less, panel upgrades have become one of our most common service calls.</p>

<h2>Signs Your Panel Is At Its Limit</h2>
<p>Breakers that trip frequently, lights that dim when the furnace kicks on, a panel that runs warm to the touch, or a fuse box rather than a breaker panel are all signs that your electrical service needs attention. Homes built before 1990 with original 100-amp service are especially likely candidates.</p>

<h2>What a 200-Amp Upgrade Looks Like</h2>
<p>A full panel upgrade involves pulling the utility meter, replacing the service entrance cable if needed, installing a new 200-amp (or higher) panel with arc-fault and ground-fault breakers per current Minnesota code, and labeling every circuit. The utility company coordinates the power shutoff. Most jobs take one day.</p>

<h2>How Long Does a Panel Upgrade Take?</h2>
<p>Most residential panel replacements take 4–8 hours for the electrical work itself. Add time for the utility company to disconnect and reconnect power — typically 1–3 hours depending on your utility's schedule. We coordinate all of that on your behalf.</p>

<h2>Cost of a Panel Upgrade in Minnesota</h2>
<p>Panel upgrades in the Twin Cities typically run $1,800–$4,500 depending on amperage, the condition of the existing service entrance, and whether any sub-panels or wiring updates are needed. We provide written estimates before any work starts.</p>
`,
  },
  {
    slug: 'ev-charger-installation-at-home-what-you-actually-need',
    title: 'EV Charger Installation at Home: What You Actually Need',
    excerpt: "Level 2 charging changes how you live with an electric vehicle. Here's the real-world breakdown of circuits, panels, permits, and pricing for installing a home EV charger in the Twin Cities metro.",
    date: '2025-10-08',
    readTime: '5 min read',
    tags: ['upgrades', 'guides'],
    coverGradient: 'linear-gradient(135deg,#c8c8c8 0%,#8e8e8e 50%,#4a4a4a 100%)',
    featured: false,
    toc: [
      'Level 1 vs Level 2 Charging',
      'What Circuit Does an EV Charger Need?',
      'Do You Need a Permit?',
      'Cost of EV Charger Installation in Minnesota',
    ],
    body: `
<p>Buying an EV is the easy part. Figuring out how to charge it at home — reliably, overnight, without tripping a breaker — is where homeowners in the Twin Cities start calling us. Here's what you actually need to know before scheduling an install.</p>

<h2>Level 1 vs Level 2 Charging</h2>
<p>Level 1 charging uses a standard 120V outlet and adds about 4–5 miles of range per hour. For most drivers who commute 30–40 miles a day, Level 1 is too slow — you'd plug in at 6pm and barely recover what you used. Level 2 charging uses 240V and adds 20–30 miles per hour, fully charging most EVs overnight.</p>

<h2>What Circuit Does an EV Charger Need?</h2>
<p>Most Level 2 chargers require a dedicated 240V, 50-amp circuit with a NEMA 14-50 outlet or hardwired connection. The run from your panel to the garage, the condition of your panel, and whether you need a sub-panel all affect the scope and cost of the job.</p>

<h2>Do You Need a Permit?</h2>
<p>Yes — in all Minnesota municipalities we serve, a permit is required for new 240V circuit installation. We handle permit pulling and inspection scheduling on your behalf as part of every EV charger install.</p>

<h2>Cost of EV Charger Installation in Minnesota</h2>
<p>A straightforward EV charger install in the Twin Cities runs $400–$900 for labor and materials if your panel has capacity. Add $800–$2,000 if the panel needs upgrading. We'll scope it accurately before we start.</p>
`,
  },
  {
    slug: 'electrical-safety-checklist-mn-homeowners',
    title: 'Electrical Safety Checklist Every MN Homeowner Should Know',
    excerpt: "Outdated outlets, missing GFCIs, scorched switches — small things that quietly become big problems. Use this homeowner-friendly checklist to spot what needs attention before it turns into an emergency call.",
    date: '2025-09-30',
    readTime: '4 min read',
    tags: ['safety', 'compliance'],
    coverGradient: 'linear-gradient(135deg,#20283a 0%,#3a4d70 50%,#c66a35 100%)',
    featured: false,
    toc: [
      'Inside the Panel',
      'Outlets and Switches',
      'GFCI and AFCI Protection',
      'When to Schedule an Inspection',
    ],
    body: `
<p>Most electrical problems don't announce themselves dramatically. They build quietly — a breaker that trips a little too often, an outlet that stopped working last year, a switch plate that runs slightly warm. This checklist covers the most common things we flag during inspections on Twin Cities homes.</p>

<h2>Inside the Panel</h2>
<p>Check that your breaker panel is labeled, that no breakers are in a permanently-tripped position, and that there's no visible rust or burn marks inside. Double-tapped breakers (two wires on one breaker terminal) are a code violation in most configurations and a common fire risk in older homes.</p>

<h2>Outlets and Switches</h2>
<p>Any outlet or switch with a cover plate that's warm, discolored, or cracked needs immediate attention. Two-prong ungrounded outlets are a safety issue and limit your ability to use modern appliances safely. We can replace them with grounded receptacles or GFCI-protected outlets.</p>

<h2>GFCI and AFCI Protection</h2>
<p>Every kitchen, bathroom, garage, basement, and outdoor outlet in Minnesota homes built after 2002 is required to have GFCI protection. AFCI protection is required on all bedroom circuits. If your home doesn't have these — and many older homes don't — it's worth adding them.</p>

<h2>When to Schedule an Inspection</h2>
<p>We recommend a full electrical inspection every 10 years for homes under 40 years old, every 5 years for older homes, and any time you're buying or selling. Inspections typically run 2–3 hours and include a written report of any deficiencies found.</p>
`,
  },
  {
    slug: 'smart-home-wiring-what-to-plan-before-drywall',
    title: 'Smart Home Wiring: What to Plan Before the Drywall Goes Up',
    excerpt: "A little planning during a remodel saves a lot of patching later. Here's what to wire for — from smart switches to networked lighting — so your home is ready for whatever you add next.",
    date: '2025-09-22',
    readTime: '5 min read',
    tags: ['guides', 'products'],
    coverGradient: 'linear-gradient(135deg,#0e1c2e 0%,#1a3454 50%,#ed8b3f 100%)',
    featured: false,
    toc: [
      'Smart Switch Wiring Requirements',
      'Low-Voltage and Data Runs',
      'Lighting Zones and Scene Control',
      'What to Ask Your Electrician Before Closing Walls',
    ],
    body: `
<p>The best time to plan smart home wiring is before the drywall goes up — not after. Whether you're doing a full remodel or just opening a wall for another reason, adding the right infrastructure now costs a fraction of what it costs to retrofit later. Here's what we walk through with homeowners in the Twin Cities before we close any walls.</p>

<h2>Smart Switch Wiring Requirements</h2>
<p>Most smart switches require a neutral wire at the switch location — something many older homes don't have. If you're upgrading to smart switches as part of a remodel, we run neutral wires to every switch box that needs one. It's a small add-on that makes the difference between a smooth install and a costly workaround later.</p>

<h2>Low-Voltage and Data Runs</h2>
<p>Ethernet runs to every room — even if you don't think you'll use wired connections — are worth doing while walls are open. Wi-Fi improves every year, but a hard-wired connection to a TV, gaming console, or home office setup will always be faster and more reliable. We coordinate low-voltage rough-in alongside our electrical work.</p>

<h2>Lighting Zones and Scene Control</h2>
<p>Planning lighting zones before walls close lets you design how your home is lit — separate control for accent lights, task lights, and overhead fixtures — rather than putting everything on one switch. We discuss zone layout with homeowners before we run wire so the system you end up with matches how you actually use each room.</p>

<h2>What to Ask Your Electrician Before Closing Walls</h2>
<p>Ask about dedicated circuits for home office equipment, in-wall speaker wire runs, low-voltage conduit for future flexibility, and USB outlet locations in bedrooms and kitchens. These are easy to add during rough-in and expensive to add later.</p>
`,
  },
]

export function getPostBySlug(slug) {
  return posts.find(p => p.slug === slug)
}

export function getRelatedPosts(slug, tags, limit = 3) {
  return posts
    .filter(p => p.slug !== slug && p.tags.some(t => tags.includes(t)))
    .slice(0, limit)
}
