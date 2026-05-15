const serviceCards = {
  residential: [
    { color: '#2a2a2a', gradient: 'linear-gradient(160deg,#191919,#333)', label: 'ELECTRICAL REPAIRS', body: 'Fast diagnostics and reliable repairs for outlets, breakers, wiring, and more.', href: '/residential-electrical-services/electrical-repairs' },
    { color: '#1a2a1a', gradient: 'linear-gradient(160deg,#0d1f0d,#2a3a2a)', label: 'ELECTRICAL UPGRADES', body: 'Panel upgrades, rewiring, and service upgrades to power your modern home.', href: '/residential-electrical-services/electrical-upgrades' },
    { color: '#1a1a2a', gradient: 'linear-gradient(160deg,#0d0d1f,#2a2a3a)', label: 'INSTALLATIONS', body: 'EV chargers, ceiling fans, smart home devices, lighting, and new circuits.', href: '/residential-electrical-services/installations' },
    { color: '#2a1a1a', gradient: 'linear-gradient(160deg,#1f0d0d,#3a2a2a)', label: 'SAFETY & COMPLIANCE', body: 'Inspections, code corrections, GFCI/AFCI upgrades, and smoke detector systems.', href: '/residential-electrical-services/safety-compliance' },
  ],
  commercial: [
    { color: '#2a2a2a', gradient: 'linear-gradient(160deg,#191919,#333)', label: 'COMMERCIAL REPAIRS', body: 'Emergency response, diagnostics, and maintenance contracts to keep your business running.', href: '/commercial-electrical-services/commercial-repairs' },
    { color: '#1a2a1a', gradient: 'linear-gradient(160deg,#0d1f0d,#2a3a2a)', label: 'POWER & DISTRIBUTION', body: 'Panel upgrades, three-phase power, and load calculations for demanding commercial needs.', href: '/commercial-electrical-services/power-distribution' },
    { color: '#1a1a2a', gradient: 'linear-gradient(160deg,#0d0d1f,#2a2a3a)', label: 'LIGHTING SYSTEMS', body: 'Commercial lighting installs, parking lot lighting, and LED retrofits that cut energy costs.', href: '/commercial-electrical-services/lighting-systems' },
    { color: '#2a1a1a', gradient: 'linear-gradient(160deg,#1f0d0d,#3a2a2a)', label: 'COMPLIANCE & INFRASTRUCTURE', body: 'Code corrections, tenant build-outs, and generator installs for compliant, resilient buildings.', href: '/commercial-electrical-services/compliance-infrastructure' },
  ],
  hoa: [
    { color: '#2a2a2a', gradient: 'linear-gradient(160deg,#191919,#333)', label: 'COMMON AREAS', body: 'Hallway, lobby, exterior, and amenity electrical kept safe and well-lit year-round.', href: '/hoa-electrical-services/hoa-common-areas' },
    { color: '#1a2a1a', gradient: 'linear-gradient(160deg,#0d1f0d,#2a3a2a)', label: 'EMERGENCY REPAIRS', body: '24/7 response for power outages, storm damage, and urgent electrical failures.', href: '/hoa-electrical-services/hoa-emergency-repairs' },
    { color: '#1a1a2a', gradient: 'linear-gradient(160deg,#0d0d1f,#2a2a3a)', label: 'EV CHARGING', body: 'EV station installation, load management, and permit handling for your community.', href: '/hoa-electrical-services/hoa-ev-charging' },
    { color: '#2a1a1a', gradient: 'linear-gradient(160deg,#1f0d0d,#3a2a2a)', label: 'INSPECTIONS', body: 'Annual inspections, code compliance checks, and ongoing maintenance contracts.', href: '/hoa-electrical-services/hoa-inspections' },
  ],
};

const tabs = [
  {
    id: 'residential',
    label: 'RESIDENTIAL',
    heading: 'KEEPING THE LIGHTS ON —\nAND EVERYTHING ELSE.',
    body: 'From panel upgrades and rewiring to EV chargers and modern lighting, we help homeowners keep their electrical systems safe, reliable, and ready for their unique life inside.',
    cta: 'ALL RESIDENTIAL SERVICES ›',
    ctaCard: 'ALL RESIDENTIAL\nSERVICES',
    ctaHref: '/residential-electrical-services',
  },
  {
    id: 'commercial',
    label: 'COMMERCIAL',
    heading: 'COMMERCIAL ELECTRICAL SERVICES THAT KEEP YOUR BUSINESS RUNNING.',
    body: 'From office buildouts and lighting retrofits to panel upgrades and code compliance, we keep your business powered and protected.',
    cta: 'ALL COMMERCIAL SERVICES ›',
    ctaCard: 'ALL COMMERCIAL\nSERVICES',
    ctaHref: '/commercial-electrical-services',
  },
  {
    id: 'hoa',
    label: 'HOA',
    heading: 'HOA ELECTRICAL MANAGEMENT MADE SIMPLE.',
    body: 'We work with HOAs and property managers to keep common areas, amenities, and residential units safe and up to code.',
    cta: 'HOA SERVICES ›',
    ctaCard: 'ALL HOA\nSERVICES',
    ctaHref: '/hoa-electrical-services',
  },
];

function ServiceCards({ tabId, ctaCard, ctaHref }) {
  return (
    <div className="service-cards-grid service-cards-grid--home">
      {serviceCards[tabId].map((card) => (
        <a className="scard" key={card.label} href={card.href}>
          <div className="scard-img" style={{ backgroundColor: card.color }}>
            <div className="scard-img-inner" style={{ background: card.gradient }}></div>
            <div className="scard-label">{card.label}</div>
          </div>
          <div className="scard-body">{card.body}</div>
        </a>
      ))}
      <a href={ctaHref} className="services-cta-card">
        <span>{ctaCard.split('\n').map((line, i) => <span key={i}>{line}{i === 0 && <br />}</span>)}</span>
        <span className="cta-arrow">&rarr;</span>
      </a>
    </div>
  );
}

export default function Services() {
  return (
    <section className="services-section" id="residential">
      <div className="wrap">
        <p className="eyebrow-center">Our Electrical Services</p>
        <div className="tabs-row">
          {tabs.map((tab) => (
            <button key={tab.id} className={`tab${tab.id === 'residential' ? ' active' : ''}`} data-tab={tab.id}>
              {tab.label}
            </button>
          ))}
        </div>

        {tabs.map((tab) => (
          <div key={tab.id} className={`tab-pane${tab.id === 'residential' ? ' active' : ''}`} id={`tab-${tab.id}`}>
            <div className="services-intro">
              <div className="services-intro-left">
                <h2>{tab.heading.split('\n').map((line, i, arr) => (
                  <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
                ))}</h2>
                <p>{tab.body}</p>
              </div>
              <div className="services-intro-right">
                <a href="/contact-us" className="btn-orange-sm">{tab.cta}</a>
              </div>
            </div>
            <ServiceCards tabId={tab.id} ctaCard={tab.ctaCard} ctaHref={tab.ctaHref} />
          </div>
        ))}
      </div>
    </section>
  );
}
