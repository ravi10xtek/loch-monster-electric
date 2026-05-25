'use client';
import { useState, useRef } from 'react';
import { allCities } from '../data/serviceAreas';

// ── Static fallbacks (used when CMS navigation is not yet configured) ────────

const STATIC_MENUS = {
  residential: {
    label: 'RESIDENTIAL',
    topHref: '/residential-electrical-services',
    hubs: [
      {
        label: 'ELECTRICAL REPAIRS',
        href: '/residential-electrical-services/electrical-repairs',
        services: [
          { label: 'Outlet & Switch Repair', href: '/residential-electrical-services/electrical-repairs/outlet-switch-repair' },
          { label: 'Circuit Breaker Repair', href: '/residential-electrical-services/electrical-repairs/circuit-breaker-repair' },
          { label: 'Emergency Electrical Repair', href: '/residential-electrical-services/electrical-repairs/emergency-electrical-repair' },
        ],
      },
      {
        label: 'ELECTRICAL UPGRADES',
        href: '/residential-electrical-services/electrical-upgrades',
        services: [
          { label: 'Electrical Panel Upgrade', href: '/residential-electrical-services/electrical-upgrades/electrical-panel-upgrade' },
          { label: 'Whole-Home Rewiring', href: '/residential-electrical-services/electrical-upgrades/whole-home-rewiring' },
          { label: 'Surge Protection', href: '/residential-electrical-services/electrical-upgrades/surge-protection' },
        ],
      },
      {
        label: 'INSTALLATIONS',
        href: '/residential-electrical-services/installations',
        services: [
          { label: 'Ceiling Fan Installation', href: '/residential-electrical-services/installations/ceiling-fan-installation' },
          { label: 'EV Charger Installation', href: '/residential-electrical-services/installations/ev-charger-installation' },
          { label: 'Smart Home Wiring', href: '/residential-electrical-services/installations/smart-home-wiring' },
        ],
      },
      {
        label: 'SAFETY & COMPLIANCE',
        href: '/residential-electrical-services/safety-compliance',
        services: [
          { label: 'GFCI / AFCI Installation', href: '/residential-electrical-services/safety-compliance/gfci-afci-installation' },
          { label: 'Electrical Inspections', href: '/residential-electrical-services/safety-compliance/electrical-inspections' },
        ],
      },
    ],
  },
  commercial: {
    label: 'COMMERCIAL',
    topHref: '/commercial-electrical-services',
    hubs: [
      {
        label: 'COMMERCIAL REPAIRS',
        href: '/commercial-electrical-services/commercial-repairs',
        services: [
          { label: 'Emergency Commercial Electrical', href: '/commercial-electrical-services/commercial-repairs/emergency-commercial-electrical' },
          { label: 'Maintenance Contracts', href: '/commercial-electrical-services/commercial-repairs/maintenance-contracts' },
        ],
      },
      {
        label: 'POWER & DISTRIBUTION',
        href: '/commercial-electrical-services/power-distribution',
        services: [
          { label: 'Commercial Panel Upgrades', href: '/commercial-electrical-services/power-distribution/commercial-panel-upgrades' },
          { label: 'Three-Phase Power', href: '/commercial-electrical-services/power-distribution/three-phase-power' },
          { label: 'Load Calculations', href: '/commercial-electrical-services/power-distribution/load-calculations' },
        ],
      },
      {
        label: 'LIGHTING SYSTEMS',
        href: '/commercial-electrical-services/lighting-systems',
        services: [
          { label: 'Commercial Lighting Installation', href: '/commercial-electrical-services/lighting-systems/commercial-lighting-installation' },
          { label: 'Parking Lot Lighting', href: '/commercial-electrical-services/lighting-systems/parking-lot-lighting' },
          { label: 'LED Retrofits', href: '/commercial-electrical-services/lighting-systems/led-retrofits' },
        ],
      },
      {
        label: 'COMPLIANCE & INFRASTRUCTURE',
        href: '/commercial-electrical-services/compliance-infrastructure',
        services: [
          { label: 'Code Violation Corrections', href: '/commercial-electrical-services/compliance-infrastructure/code-violation-corrections' },
          { label: 'Tenant Build-Outs', href: '/commercial-electrical-services/compliance-infrastructure/tenant-build-outs' },
          { label: 'Generator Installation', href: '/commercial-electrical-services/compliance-infrastructure/generator-installation' },
        ],
      },
    ],
  },
  hoa: {
    label: 'HOA',
    topHref: '/hoa-electrical-services',
    hubs: [
      {
        label: 'COMMON AREAS',
        href: '/hoa-electrical-services/hoa-common-areas',
        services: [
          { label: 'Hallway & Lobby Lighting', href: '/hoa-electrical-services/hoa-common-areas/hallway-lobby-lighting' },
          { label: 'Exterior & Parking Lighting', href: '/hoa-electrical-services/hoa-common-areas/exterior-parking-lighting' },
          { label: 'Amenity Electrical', href: '/hoa-electrical-services/hoa-common-areas/amenity-electrical' },
        ],
      },
      {
        label: 'EMERGENCY REPAIRS',
        href: '/hoa-electrical-services/hoa-emergency-repairs',
        services: [
          { label: '24/7 Emergency Response', href: '/hoa-electrical-services/hoa-emergency-repairs/247-emergency-response' },
          { label: 'Power Restoration', href: '/hoa-electrical-services/hoa-emergency-repairs/power-restoration' },
          { label: 'Storm Damage Repair', href: '/hoa-electrical-services/hoa-emergency-repairs/storm-damage-repair' },
        ],
      },
      {
        label: 'EV CHARGING',
        href: '/hoa-electrical-services/hoa-ev-charging',
        services: [
          { label: 'EV Station Installation', href: '/hoa-electrical-services/hoa-ev-charging/ev-station-installation' },
          { label: 'Load Management', href: '/hoa-electrical-services/hoa-ev-charging/load-management' },
          { label: 'Permit & Inspection', href: '/hoa-electrical-services/hoa-ev-charging/permit-inspection' },
        ],
      },
      {
        label: 'INSPECTIONS',
        href: '/hoa-electrical-services/hoa-inspections',
        services: [
          { label: 'Annual Inspections', href: '/hoa-electrical-services/hoa-inspections/annual-inspections' },
          { label: 'Code Compliance Checks', href: '/hoa-electrical-services/hoa-inspections/code-compliance-checks' },
          { label: 'Maintenance Contracts', href: '/hoa-electrical-services/hoa-inspections/hoa-maintenance-contracts' },
        ],
      },
    ],
  },
};

const STATIC_TOP_LINKS = [
  { label: 'PRICING', href: '/pricing-estimates' },
  { label: 'JOURNAL', href: '/blog' },
  { label: 'MEDIA', href: '/media' },
  { label: 'GLOSSARY', href: '/electrical-glossary' },
  { label: 'ABOUT US', href: '/about-us' },
  { label: 'CONTACT US', href: '/contact-us' },
]

const STATIC_MOBILE_LINKS = [
  { label: 'RESIDENTIAL', href: '/residential-electrical-services' },
  { label: 'COMMERCIAL', href: '/commercial-electrical-services' },
  { label: 'HOA', href: '/hoa-electrical-services' },
  { label: 'SERVICE AREAS', href: '/service-areas' },
  { label: 'PRICING', href: '/pricing-estimates' },
  { label: 'JOURNAL', href: '/blog' },
  { label: 'ABOUT US', href: '/about-us' },
  { label: 'CONTACT US', href: '/contact-us' },
]

// ── Build menus object from CMS data ─────────────────────────────────────────

function buildMenus(navigation) {
  if (!navigation?.serviceMenus?.length) return STATIC_MENUS
  const menus = {}
  for (const sm of navigation.serviceMenus) {
    if (!sm.key) continue
    menus[sm.key] = {
      topHref: sm.topHref,
      hubs: (sm.hubs || []).map(hub => ({
        label: hub.label,
        href: hub.href,
        services: (hub.services || []).map(s => ({ label: s.label, href: s.href })),
      })),
    }
  }
  return Object.keys(menus).length ? menus : STATIC_MENUS
}

// ── Components ────────────────────────────────────────────────────────────────

function MegaMenu({ menuKey, menus }) {
  const menu = menus[menuKey];

  return (
    <div className="mega-menu">
      <div className="mega-grid">
        {menu.hubs.map((hub) => (
          <div key={hub.href} className="mega-col">
            <a href={hub.href} className="mega-col-heading">{hub.label}</a>
            <div className="mega-col-links">
              {hub.services.map((s) => (
                <a key={s.href} href={s.href} className="mega-col-link">{s.label}</a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function MobileAccordion({ menuKey, label, topHref, hubs, openKey, setOpenKey }) {
  const isOpen = openKey === menuKey
  return (
    <div className="mobile-accordion">
      <div className="mobile-acc-header">
        <a href={topHref} className="mobile-acc-label">{label}</a>
        <button
          className="mobile-acc-toggle"
          onClick={() => setOpenKey(isOpen ? null : menuKey)}
          aria-expanded={isOpen}
          aria-label={`${isOpen ? 'Collapse' : 'Expand'} ${label} menu`}
        >
          {isOpen ? '−' : '+'}
        </button>
      </div>
      {isOpen && (
        <div className="mobile-acc-body">
          {hubs.map(hub => (
            <div key={hub.href} className="mobile-acc-hub">
              <a href={hub.href} className="mobile-acc-hub-link">{hub.label}</a>
              {hub.services?.map(s => (
                <a key={s.href} href={s.href} className="mobile-acc-service-link">{s.label}</a>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

function MobileServiceAreasAccordion({ openKey, setOpenKey }) {
  const isOpen = openKey === 'serviceAreas'
  return (
    <div className="mobile-accordion">
      <div className="mobile-acc-header">
        <a href="/service-areas" className="mobile-acc-label">SERVICE AREAS</a>
        <button
          className="mobile-acc-toggle"
          onClick={() => setOpenKey(isOpen ? null : 'serviceAreas')}
          aria-expanded={isOpen}
          aria-label={`${isOpen ? 'Collapse' : 'Expand'} Service Areas menu`}
        >
          {isOpen ? '−' : '+'}
        </button>
      </div>
      {isOpen && (
        <div className="mobile-acc-body">
          <div className="mobile-acc-hub">
            {allCities.map(city => (
              <a
                key={city.slug}
                href={`/service-areas/${city.slug}`}
                className="mobile-acc-service-link"
              >
                {city.name.toUpperCase()}, {city.state}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

function ServiceAreasMegaMenu({ cityImages = {} }) {
  const col1 = allCities.slice(0, 6);
  const col2 = allCities.slice(6, 12);
  const col3 = allCities.slice(12, 18);

  // Find the first city that has an image to use as the default preview
  const firstWithImage = allCities.find(c => cityImages[c.slug])?.slug || null
  const [hoveredSlug, setHoveredSlug] = useState(firstWithImage)

  const active = hoveredSlug && cityImages[hoveredSlug]
  const previewStyle = active
    ? {
        backgroundImage: `linear-gradient(160deg, rgba(0,0,0,0.25), rgba(0,0,0,0.55)), url('${active.url}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }
    : { background: 'linear-gradient(160deg,#1a1a1a,#2e2e2e)' }
  const previewLabel = active ? `${active.name}, ${active.state}` : 'Twin Cities Metro'

  return (
    <div className="mega-menu">
      <div className="mega-cities-inner">
        {[col1, col2, col3].map((col, ci) => (
          <div key={ci} className="mega-city-col">
            {col.map((city) => (
              <a
                key={city.slug}
                href={`/service-areas/${city.slug}`}
                className="mega-city-item"
                onMouseEnter={() => cityImages[city.slug] && setHoveredSlug(city.slug)}
                onFocus={() => cityImages[city.slug] && setHoveredSlug(city.slug)}
              >
                {city.name.toUpperCase()}, {city.state}
              </a>
            ))}
          </div>
        ))}
        <div className="mega-img" style={previewStyle}>
          <div className="mega-img-label">{previewLabel}</div>
        </div>
      </div>
    </div>
  );
}

export default function Header({ hubImages, navigation, cityImages = {} }) {
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(null);
  const closeTimer = useRef(null);

  const menus = buildMenus(navigation)
  const topLinks = navigation?.topLinks?.length ? navigation.topLinks : STATIC_TOP_LINKS
  const mobileLinks = navigation?.mobileLinks?.length ? navigation.mobileLinks : STATIC_MOBILE_LINKS

  function handleEnter(key) {
    clearTimeout(closeTimer.current);
    setOpenMenu(key);
  }

  function handleLeave() {
    closeTimer.current = setTimeout(() => setOpenMenu(null), 120);
  }

  return (
    <>
      <header className="site-header">
        <div className="header-inner">
          <a href="/" className="logo">
            <img src="/logo-header.png" alt="Loch Monster Electric logo" className="logo-image" />
          </a>
          <nav className="main-nav">
            {Object.keys(menus).map((key) => (
              <div
                key={key}
                className={`nav-item-wrap${openMenu === key ? ' nav-item-open' : ''}`}
                onMouseEnter={() => handleEnter(key)}
                onMouseLeave={handleLeave}
              >
                <a href={menus[key].topHref} className="nav-top-link">
                  {menus[key].label || (key === 'hoa' ? 'HOA' : key.toUpperCase())}
                </a>
                {openMenu === key && <MegaMenu menuKey={key} menus={menus} />}
              </div>
            ))}
            <div
              className={`nav-item-wrap${openMenu === 'serviceAreas' ? ' nav-item-open' : ''}`}
              onMouseEnter={() => handleEnter('serviceAreas')}
              onMouseLeave={handleLeave}
            >
              <a href="/service-areas" className="nav-top-link">SERVICE AREAS</a>
              {openMenu === 'serviceAreas' && <ServiceAreasMegaMenu cityImages={cityImages} />}
            </div>
            {topLinks.map((link) => (
              <a key={link.href} href={link.href}>{link.label}</a>
            ))}
          </nav>
          <button className="hamburger" id="hamburger">&#9776;</button>
        </div>
      </header>
      <div className="mobile-nav" id="mobileNav">
        <button className="mobile-close" id="mobileClose">&times;</button>

        {/* Service mega menus as accordions */}
        {Object.entries(menus).map(([key, menu]) => (
          <MobileAccordion
            key={key}
            menuKey={key}
            label={menu.label || key.toUpperCase()}
            topHref={menu.topHref}
            hubs={menu.hubs}
            openKey={mobileOpen}
            setOpenKey={setMobileOpen}
          />
        ))}

        {/* Service Areas accordion */}
        <MobileServiceAreasAccordion openKey={mobileOpen} setOpenKey={setMobileOpen} />

        {/* Remaining flat links (Pricing, Blog, Media, etc.) */}
        {topLinks.map((link) => (
          <a key={link.href} href={link.href}>{link.label}</a>
        ))}
      </div>
    </>
  );
}
