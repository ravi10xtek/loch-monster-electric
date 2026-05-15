'use client'

import { useLivePreview } from '@payloadcms/live-preview-react'
import Hero from '../../../components/Hero'
import Services from '../../../components/Services'
import OrangeBanner from '../../../components/OrangeBanner'
import Expect from '../../../components/Expect'
import WhyChooseUs from '../../../components/WhyChooseUs'
import Pricing from '../../../components/Pricing'
import OurStory from '../../../components/OurStory'
import AboutHero from '../../../components/AboutHero'
import AboutStory from '../../../components/AboutStory'
import ContactHero from '../../../components/ContactHero'

const CMS_URL = process.env.NEXT_PUBLIC_CMS_URL || 'http://localhost:3001'

function PricingHero({ data }) {
  const eyebrow = data?.heroEyebrow || 'Pricing & Estimates'
  const lines = data?.heroTitleLines?.length
    ? data.heroTitleLines
    : [{ line: 'PRICING &' }, { line: 'ESTIMATES' }]
  const tagline = data?.heroTagline || 'Honest Work. Clear Costs. No Surprises.'
  const body = data?.heroBody || ''

  return (
    <section className="hero" id="home">
      <div className="hero-bg" />
      <div className="hero-inner">
        <div className="hero-left">
          <p className="hero-eyebrow">{eyebrow}</p>
          <h1>
            {lines.map((t, i) => (
              <span key={i} className="hero-title-line">
                {i === 0 ? t.line : <span className="text-orange">{t.line}</span>}
              </span>
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

  return (
    <section className="hero" id="home">
      <div className="hero-bg" />
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

export default function GlobalPreviewClient({ slug, initialData }) {
  const { data } = useLivePreview({
    initialData,
    serverURL: CMS_URL,
    depth: 2,
  })

  if (slug === 'home-page') {
    return (
      <main>
        <Hero data={data} />
        <Services data={data} />
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
    return (
      <main>
        <PricingHero data={data} />
        <Pricing heading={data?.pricingHeading} cards={data?.pricingCards} />
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

  return <p style={{ padding: '2rem', color: '#888' }}>No preview available for &ldquo;{slug}&rdquo;.</p>
}
