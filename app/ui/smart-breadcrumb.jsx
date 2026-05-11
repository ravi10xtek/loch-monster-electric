'use client';
import { usePathname } from 'next/navigation';

const LABELS = {
  'residential-electrical-services': 'Residential',
  'commercial-electrical-services': 'Commercial',
  'hoa-electrical-services': 'HOA',
  'electrical-repairs': 'Electrical Repairs',
  'electrical-upgrades': 'Electrical Upgrades',
  'installations': 'Installations',
  'safety-compliance': 'Safety & Compliance',
  'commercial-repairs': 'Commercial Repairs',
  'power-distribution': 'Power & Distribution',
  'lighting-systems': 'Lighting Systems',
  'compliance-infrastructure': 'Compliance & Infrastructure',
  'hoa-common-areas': 'Common Areas',
  'hoa-emergency-repairs': 'Emergency Repairs',
  'hoa-ev-charging': 'EV Charging',
  'hoa-inspections': 'Inspections',
  'service-areas': 'Service Areas',
  'journal': 'Journal',
  'pricing-estimates': 'Pricing & Estimates',
  'about-us': 'About Us',
  'media': 'Media',
  'gallery': 'Gallery',
  'contact-us': 'Contact Us',
};

function toLabel(slug) {
  return LABELS[slug] || slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
}

export default function SmartBreadcrumb() {
  const pathname = usePathname();
  if (pathname === '/') return null;

  const segments = pathname.split('/').filter(Boolean);
  const crumbs = segments.map((seg, i) => ({
    label: toLabel(seg),
    href: '/' + segments.slice(0, i + 1).join('/'),
  }));

  return (
    <nav className="breadcrumb-nav" aria-label="breadcrumb">
      <div className="wrap">
        <ol className="breadcrumb">
          <li><a href="/">Home</a></li>
          {crumbs.map((crumb, i) =>
            i === crumbs.length - 1
              ? <li key={crumb.href} aria-current="page">{crumb.label}</li>
              : <li key={crumb.href}><a href={crumb.href}>{crumb.label}</a></li>
          )}
        </ol>
      </div>
    </nav>
  );
}
