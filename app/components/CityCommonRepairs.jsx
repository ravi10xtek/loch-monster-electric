import JsonLd from './JsonLd'

// Site-wide fallback if a city has no commonRepairs set in the CMS
const FALLBACK_REPAIRS = [
  {
    label: 'Electrical Panel Upgrade',
    href: '/residential-electrical-services/electrical-upgrades/electrical-panel-upgrade',
    cityContext: 'The single most common upgrade we do — older panels can\'t handle modern appliance loads.',
  },
  {
    label: 'GFCI & AFCI Installation',
    href: '/residential-electrical-services/safety-compliance/gfci-afci-installation',
    cityContext: 'Required by code in kitchens, bathrooms, and outdoor outlets — and a frequent retrofit in older homes.',
  },
  {
    label: 'Outlet & Switch Repair',
    href: '/residential-electrical-services/electrical-repairs/outlet-switch-repair',
    cityContext: 'Dead outlets, loose switches, and scorched faceplates — fixed before they become a fire hazard.',
  },
  {
    label: 'EV Charger Installation',
    href: '/residential-electrical-services/installations/ev-charger-installation',
    cityContext: 'Level 2 chargers installed clean — sized to your panel and your vehicle.',
  },
  {
    label: 'Surge Protection',
    href: '/residential-electrical-services/electrical-upgrades/surge-protection',
    cityContext: 'Whole-home surge protection that defends every circuit from storm and grid spikes.',
  },
]

export default function CityCommonRepairs({ city }) {
  const repairs = city.commonRepairs?.length ? city.commonRepairs : FALLBACK_REPAIRS
  const cityName = city.name

  // ItemList JSON-LD for SERP rich results
  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: `Most Common Electrical Repairs in ${cityName}`,
    itemListElement: repairs.map((r, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: r.label,
      url: `https://lochmonsterelectric.com${r.href}`,
    })),
  }

  return (
    <section className="ccr-section">
      <JsonLd schema={itemListSchema} />
      <div className="wrap">
        <p className="eyebrow-center">Most Common Electrical Repairs</p>
        <h2 className="center-heading ccr-heading">
          WHAT WE FIX MOST OFTEN IN{' '}
          <span className="text-orange">{cityName.toUpperCase()}</span>
        </h2>
        <p className="ccr-sub">
          Based on the calls we get from {cityName} homeowners. Tap any repair to see how we approach it.
        </p>

        <ol className="ccr-grid">
          {repairs.map((r, i) => (
            <li key={`${r.href}-${i}`} className="ccr-card">
              <a href={r.href} className="ccr-card-link">
                <span className="ccr-num">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="ccr-card-title">{r.label}</h3>
                <p className="ccr-card-context">{r.cityContext}</p>
                <span className="ccr-card-cta">LEARN MORE &rarr;</span>
              </a>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
