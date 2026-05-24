import { buildPageMetadata, getPageSEO } from '../lib/cms'
import JsonLd from '../components/JsonLd'
import HomeInteractions from '../ui/home-interactions'
import SmartBreadcrumb from '../ui/smart-breadcrumb'
import Pricing from '../components/Pricing'
import Expect from '../components/Expect'
import Services from '../components/Services'
import WhyChooseUs from '../components/WhyChooseUs'
import OrangeBanner from '../components/OrangeBanner'
import FAQ from '../components/FAQ'

export async function generateMetadata() {
  return buildPageMetadata('pricing-estimates', {
    title: 'Pricing & Estimates | Loch Monster Electric',
    description: 'Transparent electrical pricing for the Twin Cities metro. Time & materials, project estimates, and no hidden fees. Call Loch Monster Electric: 763-292-1191.',
  })
}

const TIERS = [
  {
    id: 'time-materials',
    label: 'Time & Materials',
    gradient: 'linear-gradient(160deg,#1a1a1a,#2e2e2e)',
    eyebrow: 'For Most Jobs',
    heading: 'TIME & ',
    headingOrange: 'MATERIALS',
    body: 'This is how we price the majority of our work—repairs, small installs, troubleshooting, and general service calls.',
    payFor: 'You Pay For:',
    bullets: [
      'The actual time our licensed electrician spends on-site',
      'The real cost of materials used to complete your job',
      'A flat service charge (charged once per invoice—whether we fix one thing or five)',
    ],
    notes: [
      "We're happy to give good-faith estimates over the phone based on what you describe. We'll walk you through what to expect in labor time, ballpark material costs, and the service charge.",
      "There's no \"We'll See When We Get There\" approach. If we can give you a reasonable range, we will—and if something changes mid-job, we'll update you before we move forward.",
    ],
  },
  {
    id: 'larger-projects',
    label: 'Larger Projects',
    gradient: 'linear-gradient(160deg,#1a2a1a,#2e3e2e)',
    eyebrow: '$1,200+',
    heading: 'LARGER ',
    headingOrange: 'PROJECTS',
    body: 'When the job is a larger-scale operation—whole-home rewiring, panel replacements, new construction rough-in—we offer a clear written estimate before any work begins.',
    payFor: "What's Included:",
    bullets: [
      'Detailed written estimate before any work starts',
      'Milestone-based billing so you pay as we progress',
      'Clearly defined scope, timeline, and deliverables',
      'Free on-site walk-through and consultation included',
      'Best for panel replacements, whole-home rewires, and new builds',
    ],
    notes: [
      "We're happy to give good-faith estimates over the phone. If we need to see the job in person first, we'll tell you upfront—no surprise scope changes.",
    ],
  },
  {
    id: 'follow-up-visits',
    label: 'Follow-Up Visits',
    gradient: 'linear-gradient(160deg,#1a1a2a,#1a2a3a)',
    eyebrow: 'We Are At Your Door Step',
    heading: 'FOLLOW-UP ',
    headingOrange: 'VISITS',
    body: 'This is how we price return visits for existing customers—faster, cheaper, and handled by the same crew who already knows your home.',
    payFor: 'What You Get:',
    bullets: [
      'Priority scheduling for existing customers',
      'Reduced diagnosis time—we already know your home',
      'Same crew that handled the original work returns',
      'No need to re-explain the project from scratch',
      'Discounted return-visit rate for past clients',
    ],
    notes: [
      "Thanks to our approach, if we can give you a transparent range, we will. And if something changes mid-job, we'll call—well before we charge you for it.",
    ],
  },
  {
    id: 'handle-cleanup',
    label: 'Handle The Cleanup',
    gradient: 'linear-gradient(160deg,#2a1a1a,#3a2a1a)',
    eyebrow: 'Handle The Cleanup.',
    heading: 'WANT TO SAVE ON ',
    headingOrange: 'THE FINAL INVOICE?',
    body: 'When the job wraps up, debris removal is optional. Take it on yourself and we reflect the savings directly on your invoice.',
    payFor: 'How It Works:',
    bullets: [
      'You handle debris removal after the job wraps up',
      'Reduced labor cost reflected directly on your invoice',
      'Same quality electrical work—lower total bill',
      'Optional add-on available on any pricing tier',
      'Discuss it with your electrician before work starts',
    ],
    notes: [
      "We'll walk you through exactly what 'cleanup' means for your specific job so there are no surprises on either end.",
    ],
  },
]

export default async function PricingPage() {
  const seo = await getPageSEO('pricing-estimates')
  return (
    <>
      {seo?.schemaMarkup && <JsonLd schema={seo.schemaMarkup} />}
      <HomeInteractions />
      <main>

        {/* ── Hero ──────────────────────────────────────────── */}
        <section className="hero" id="home">
          <div className="hero-bg"></div>
          <SmartBreadcrumb />
          <div className="hero-inner">
            <div className="hero-left">
              <p className="hero-eyebrow">Pricing &amp; Estimates</p>
              <h1>
                <span className="hero-title-line">PRICING &amp;</span>
                <span className="hero-title-line"><span className="text-orange">ESTIMATES</span></span>
              </h1>
              <p className="hero-tagline">Honest Work. Clear Costs. No Surprises.</p>
              <p className="hero-body">
                We don't want customers on your doorstep at 7am yelling about their invoice. We'll show you exactly what we plan to charge before we start, and if something changes on-site, we call you first—every time.
              </p>
            </div>
            <div className="hero-form-wrap">
              <div className="hero-form-header">
                <strong>Phone Is Usually The Fastest Way To Reach You,</strong> But We&apos;re Happy To Follow Up However Works Best.
              </div>
              <form className="hero-form" action="#" method="post">
                <div className="form-row-2">
                  <input type="text" placeholder="First &amp; Last name *" required />
                  <input type="tel" placeholder="Phone number *" required />
                </div>
                <input type="email" placeholder="Email*" required />
                <button type="submit" className="btn-orange-full">NEXT</button>
              </form>
            </div>
          </div>
        </section>

        {/* ── 4-card pricing overview ──────────────────────── */}
        <Pricing />

        {/* ── Detailed tier sections — hub-alt layout ──────── */}
        <section className="hub-services-section pricing-tiers">
          <div className="hub-alt-grid">
            {TIERS.map((tier, i) => {
              const imgCell = (
                <div
                  key={`${tier.id}-img`}
                  className="hub-alt-img"
                  style={{ background: tier.gradient }}
                >
                  <span className="hub-alt-label">{tier.label}</span>
                </div>
              )

              const contentCell = (
                <div key={`${tier.id}-content`} className="hub-alt-content" id={tier.id}>
                  <p className="pt-eyebrow">{tier.eyebrow}</p>
                  <h2>
                    {tier.heading}
                    <span className="text-orange">{tier.headingOrange}</span>
                  </h2>
                  <p>{tier.body}</p>
                  {tier.payFor && <p className="pt-pay-for">{tier.payFor}</p>}
                  <ul className="pt-bullets">
                    {tier.bullets.map((b, j) => <li key={j}>{b}</li>)}
                  </ul>
                  {tier.notes.map((note, j) => (
                    <p key={j} className="pt-note-line">{note}</p>
                  ))}
                  <div className="hub-alt-actions">
                    <a href="/contact-us" className="btn-dark-sm">START NOW</a>
                  </div>
                </div>
              )

              // Even rows: content LEFT, image RIGHT
              // Odd rows:  image LEFT, content RIGHT
              return i % 2 === 0
                ? [contentCell, imgCell]
                : [imgCell, contentCell]
            })}
          </div>
        </section>

        {/* ── Standard shared sections ─────────────────────── */}
        <Expect dark />
        <Services />
        <WhyChooseUs />
        <FAQ tag="pricing" />
        <OrangeBanner />

      </main>
    </>
  )
}
