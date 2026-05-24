import { buildPageMetadata, getPageSEO, getGlobal } from '../lib/cms'
import JsonLd from '../components/JsonLd'
import HomeInteractions from '../ui/home-interactions'
import AboutHero from '../components/AboutHero'
import AboutStory from '../components/AboutStory'
import OrangeBanner from '../components/OrangeBanner'
import ServiceAreas from '../components/ServiceAreas'
import Expect from '../components/Expect'
import WhyChooseUs from '../components/WhyChooseUs'

export async function generateMetadata() {
  return buildPageMetadata('about-us', {
    title: 'About Us | Loch Monster Electric',
    description: 'From pipes to power — same crew, same heart. Learn the story behind Loch Monster Electric and why Twin Cities homeowners trust us with their electrical work.',
  })
}

const SOCIAL = [
  {
    label: 'Facebook',
    href: 'https://facebook.com/lochmonsterelectric',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22" aria-hidden="true">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: 'X',
    href: 'https://x.com/lochmonsterelec',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: 'https://instagram.com/lochmonsterelectric',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="22" height="22" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: 'TikTok',
    href: 'https://tiktok.com/@lochmonsterelectric',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22" aria-hidden="true">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.28 6.28 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34l-.01-8.83a8.18 8.18 0 0 0 4.78 1.52V4.56a4.85 4.85 0 0 1-1-.13z" />
      </svg>
    ),
  },
]

export default async function AboutPage() {
  const [seo, aboutData] = await Promise.all([
    getPageSEO('about-us'),
    getGlobal('about-page'),
  ])
  return (
    <>
      {seo?.schemaMarkup && <JsonLd schema={seo.schemaMarkup} />}
      <HomeInteractions />

      {/* 1 — Hero */}
      <AboutHero data={aboutData} />

      {/* 2 — Story split */}
      <AboutStory data={aboutData} />

      {/* 3 — Orange banner */}
      <OrangeBanner />

      {/* 4 — Where We Work */}
      <ServiceAreas />

      {/* 5 — What you can expect */}
      <Expect />

      {/* 6 — Why choose us / reviews */}
      <WhyChooseUs />

      {/* 7 — Stay connected */}
      <section className="about-social">
        <div className="wrap">
          <div className="about-social-header">
            <p className="about-social-title">Stay Connected</p>
            <div className="about-social-links">
              {SOCIAL.map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="about-social-icon"
                  aria-label={s.label}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="about-social-grid">
          {[
            'linear-gradient(135deg,#2a2a2a,#111)',
            'linear-gradient(135deg,#1e2a1e,#0f1f0f)',
            'linear-gradient(135deg,#1a1a2e,#0d0d1a)',
            'linear-gradient(135deg,#2e1e1a,#1a0d0a)',
            'linear-gradient(135deg,#1e1e2a,#0d0d1a)',
          ].map((bg, i) => (
            <div key={i} className="about-social-tile" style={{ background: bg }} />
          ))}
        </div>
      </section>
    </>
  )
}
