'use client'

import { useLivePreview } from '@payloadcms/live-preview-react'
import Hero from '../../../components/Hero'
import OrangeBanner from '../../../components/OrangeBannerView'
import Expect from '../../../components/Expect'
import WhyChooseUs from '../../../components/WhyChooseUs'
import Pricing from '../../../components/Pricing'
import OurStory from '../../../components/OurStory'
import AboutHero from '../../../components/AboutHero'
import AboutStory from '../../../components/AboutStory'
import ContactHero from '../../../components/ContactHero'
import MediaHero from '../../../components/MediaHero'
import Header from '../../../components/Header'

const CMS_URL = process.env.NEXT_PUBLIC_CMS_URL || 'http://localhost:3001'

function PricingHero({ data }) {
  const eyebrow = data?.heroEyebrow || 'Pricing & Estimates'
  const lines = data?.heroTitleLines?.length
    ? data.heroTitleLines
    : [{ line: 'PRICING &' }, { line: 'ESTIMATES' }]
  const tagline = data?.heroTagline || 'Honest Work. Clear Costs. No Surprises.'
  const body = data?.heroBody || ''
  const bgImage = data?.heroImage?.url || null

  return (
    <section className="hero" id="home">
      <div
        className="hero-bg"
        style={bgImage ? {
          backgroundImage: `linear-gradient(90deg, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.62) 45%, rgba(0,0,0,0.68) 100%), url('${bgImage}')`,
        } : undefined}
      />
      <div className="hero-inner">
        <div className="hero-left">
          <p className="hero-eyebrow">{eyebrow}</p>
          <h1>
            {lines.map((t, i) => (
              <span key={i} className="hero-title-line"
                dangerouslySetInnerHTML={{ __html: t.line }}
              />
            ))}
          </h1>
          <p className="hero-tagline">{tagline}</p>
          <p className="hero-body">{body}</p>
        </div>
      </div>
    </section>
  )
}

function ServiceAreaHeroPreview({ data }) {
  const heading = data?.heroHeading || 'WE SERVE THE ENTIRE TWIN CITIES METRO'
  const subheading = data?.heroSubheading || ''
  const body = data?.heroBody || ''
  const bgImage = data?.heroImage?.url || null

  return (
    <section className="hero" id="home">
      <div
        className="hero-bg"
        style={bgImage ? {
          backgroundImage: `linear-gradient(90deg, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.62) 45%, rgba(0,0,0,0.68) 100%), url('${bgImage}')`,
        } : undefined}
      />
      <div className="hero-inner">
        <div className="hero-left">
          <h1 className="sa-city-title">{heading}</h1>
          {subheading && <p className="hero-tagline">{subheading}</p>}
          <p className="hero-body">{body}</p>
        </div>
      </div>
    </section>
  )
}

export default function GlobalPreviewClient({ slug, initialData, hubImages = {}, servicesSlot = null }) {
  const { data } = useLivePreview({
    initialData,
    serverURL: CMS_URL,
    depth: 2,
  })

  if (slug === 'home-page') {
    return (
      <main>
        <Hero data={data} />
        {servicesSlot}
        <OrangeBanner
          heading={data?.bannerHeading}
          body={data?.bannerBody}
          note={data?.bannerNote}
          ctaLabel={data?.bannerCtaLabel}
        />
        <Expect items={data?.expectItems} />
        <WhyChooseUs heading={data?.whyHeading} />
        <Pricing heading={data?.pricingHeading} cards={data?.pricingCards} />
        <OurStory data={data} />
      </main>
    )
  }

  if (slug === 'about-page') {
    return (
      <main>
        <AboutHero data={data} />
        <AboutStory data={data} />
        <OrangeBanner heading={data?.bannerHeading} body={data?.bannerBody} />
      </main>
    )
  }

  if (slug === 'contact-page') {
    return <ContactHero cms={data} />
  }

  if (slug === 'pricing-page') {
    const tiers = data?.tiers?.length
      ? data.tiers.map(t => ({
          id: t.id,
          label: t.label,
          gradient: t.gradient || 'linear-gradient(160deg,#1a1a1a,#2e2e2e)',
          eyebrow: t.eyebrow || '',
          heading: t.heading || '',
          headingOrange: t.headingOrange || '',
          body: t.body || '',
          payFor: t.payFor || '',
          bullets: t.bullets?.map(b => b.text).filter(Boolean) || [],
          notes: t.notes?.map(n => n.text).filter(Boolean) || [],
        }))
      : []

    return (
      <main>
        <PricingHero data={data} />
        <Pricing heading={data?.pricingHeading} cards={data?.pricingCards} />
        {tiers.length > 0 && (
          <section className="hub-services-section pricing-tiers">
            <div className="hub-alt-grid">
              {tiers.map((tier, i) => (
                <div key={tier.id} className={`hub-alt-row${i % 2 === 0 ? ' hub-alt-row--reverse' : ''}`}>
                  <div className="hub-alt-img" style={{ background: tier.gradient }}>
                    <span className="hub-alt-label">{tier.label}</span>
                  </div>
                  <div className="hub-alt-content" id={tier.id}>
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
                </div>
              ))}
            </div>
          </section>
        )}
      </main>
    )
  }

  if (slug === 'service-areas-page') {
    return (
      <main>
        <ServiceAreaHeroPreview data={data} />
        <OrangeBanner heading={data?.bannerHeading} body={data?.bannerBody} />
      </main>
    )
  }

  if (slug === 'media-page') {
    return (
      <main>
        <MediaHero data={data} />
      </main>
    )
  }

  if (slug === 'shared-sections') {
    return (
      <main>
        <Expect items={data?.expectItems} />
        <WhyChooseUs heading={data?.whyHeading} />
        <OrangeBanner
          heading={data?.orangeBannerHeading}
          body={data?.orangeBannerBody}
          note={data?.orangeBannerNote}
          ctaLabel={data?.orangeBannerCtaLabel}
        />
      </main>
    )
  }

  if (slug === 'navigation') {
    return (
      <div style={{ minHeight: '100vh', background: '#111' }}>
        <Header navigation={data} hubImages={hubImages} />
        <div style={{
          padding: '6rem 2rem 2rem',
          textAlign: 'center',
          color: '#555',
          fontSize: '0.875rem',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
        }}>
          Hover over the nav items above to preview mega menus
        </div>
      </div>
    )
  }

  if (slug === 'site-settings') {
    const phone         = data?.phone         || '763-292-1191'
    const email         = data?.email         || 'service@lochmonsterelectric.com'
    const address       = data?.address       || '7600 W 27th St # 213, St Louis Park, MN 55426'
    const hours         = data?.businessHours || 'Monday–Friday: 8:00 AM – 5:00 PM'
    const emergency     = data?.emergencyNote || 'Emergency service available 24/7'
    const licenseMN     = data?.licenseMN     || 'EA807591'
    const licenseWI     = data?.licenseWI     || '1443 — EC'
    const areaNote      = data?.serviceAreaNote || 'Licensed Minnesota & Wisconsin Electrical Contractor'
    const copyrightName = data?.copyrightName || 'Loch Monster Electric'
    return (
      <div style={{ background: '#0a0a0a', minHeight: '100vh', color: '#ccc', fontFamily: 'sans-serif', padding: '3rem 2rem' }}>
        <p style={{ color: '#555', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '2rem' }}>
          Site Settings Preview — footer contact &amp; license fields
        </p>
        <div style={{ display: 'grid', gap: '0.75rem', maxWidth: 600 }}>
          {[
            ['Phone',     phone],
            ['Email',     email],
            ['Address',   address],
            ['Hours',     hours],
            ['Emergency', emergency],
            ['MN License', licenseMN],
            ['WI License', licenseWI],
            ['Area Note', areaNote],
            ['Copyright', `© 2026 ${copyrightName}`],
          ].map(([label, value]) => (
            <div key={label} style={{ display: 'flex', gap: '1rem', borderBottom: '1px solid #1f1f1f', paddingBottom: '0.5rem' }}>
              <span style={{ color: '#f60', minWidth: 110, fontSize: '0.75rem', letterSpacing: '0.05em', textTransform: 'uppercase', paddingTop: 2 }}>{label}</span>
              <span style={{ color: '#ddd', fontSize: '0.875rem' }}>{value}</span>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return <p style={{ padding: '2rem', color: '#888' }}>No preview available for &ldquo;{slug}&rdquo;.</p>
}
