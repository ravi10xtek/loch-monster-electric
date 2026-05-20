'use client';
import { useState, useRef } from 'react';
import { allCities } from '../data/serviceAreas';

const MENUS = {
  residential: {
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

function MegaMenu({ menuKey, hubImages }) {
  const menu = MENUS[menuKey];
  const [activeHub, setActiveHub] = useState(0);
  const hub = menu.hubs[activeHub];
  // Hub slug = last path segment of its href (e.g. "electrical-repairs")
  const hubSlug = hub.href.split('/').filter(Boolean).pop();
  const hubImg = hubImages?.[hubSlug];

  return (
    <div className="mega-menu">
      <div className="mega-inner">
        <div className="mega-hubs">
          {menu.hubs.map((h, i) => (
            <a
              key={h.href}
              href={h.href}
              className={`mega-hub-item${i === activeHub ? ' active' : ''}`}
              onMouseEnter={() => setActiveHub(i)}
            >
              {h.label}
              <span className="mega-arrow">{i === activeHub ? '→' : '→'}</span>
            </a>
          ))}
        </div>
        <div className="mega-services">
          {hub.services.map((s) => (
            <a key={s.href} href={s.href} className="mega-service-item">
              {s.label}
            </a>
          ))}
        </div>
        <div
          className="mega-img"
          style={hubImg
            ? { backgroundImage: `url('${hubImg.url}')`, backgroundSize: 'cover', backgroundPosition: 'center' }
            : { background: 'linear-gradient(160deg,#1a1a1a,#2e2e2e)' }
          }
        >
          <div className="mega-img-label">{hub.label}</div>
        </div>
      </div>
    </div>
  );
}

function ServiceAreasMegaMenu() {
  const col1 = allCities.slice(0, 6);
  const col2 = allCities.slice(6, 12);
  const col3 = allCities.slice(12, 18);

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
              >
                {city.name.toUpperCase()}, {city.state}
              </a>
            ))}
          </div>
        ))}
        <div className="mega-img" style={{ background: 'linear-gradient(160deg,#1a1a1a,#2e2e2e)' }}>
          <div className="mega-img-label">Twin Cities Metro</div>
        </div>
      </div>
    </div>
  );
}

export default function Header({ hubImages }) {
  const [openMenu, setOpenMenu] = useState(null);
  const closeTimer = useRef(null);

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
            {['residential', 'commercial', 'hoa'].map((key) => (
              <div
                key={key}
                className={`nav-item-wrap${openMenu === key ? ' nav-item-open' : ''}`}
                onMouseEnter={() => handleEnter(key)}
                onMouseLeave={handleLeave}
              >
                <a href={MENUS[key].topHref} className="nav-top-link">
                  {key === 'hoa' ? 'HOA' : key.toUpperCase()}
                </a>
                {openMenu === key && <MegaMenu menuKey={key} hubImages={hubImages} />}
              </div>
            ))}
            <div
              className={`nav-item-wrap${openMenu === 'serviceAreas' ? ' nav-item-open' : ''}`}
              onMouseEnter={() => handleEnter('serviceAreas')}
              onMouseLeave={handleLeave}
            >
              <a href="/service-areas" className="nav-top-link">SERVICE AREAS</a>
              {openMenu === 'serviceAreas' && <ServiceAreasMegaMenu />}
            </div>
            <a href="/pricing-estimates">PRICING</a>
            <a href="/journal">JOURNAL</a>
            <a href="/media">MEDIA</a>
            <a href="/electrical-glossary">GLOSSARY</a>
            <a href="/about-us">ABOUT US</a>
            <a href="/contact-us">CONTACT US</a>
          </nav>
          <button className="hamburger" id="hamburger">&#9776;</button>
        </div>
      </header>
      <div className="mobile-nav" id="mobileNav">
        <button className="mobile-close" id="mobileClose">&times;</button>
        <a href="/residential-electrical-services">RESIDENTIAL</a>
        <a href="/commercial-electrical-services">COMMERCIAL</a>
        <a href="/hoa-electrical-services">HOA</a>
        <a href="/service-areas">SERVICE AREAS</a>
        <a href="/pricing-estimates">PRICING</a>
        <a href="/journal">JOURNAL</a>
        <a href="/about-us">ABOUT US</a>
        <a href="/contact-us">CONTACT US</a>
      </div>
    </>
  );
}
