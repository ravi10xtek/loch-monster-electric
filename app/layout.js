import "../styles.css";
import { Work_Sans } from 'next/font/google'
import TopBar from "./components/TopBar";
import HeaderWrapper from "./components/HeaderWrapper";
import Footer from "./components/Footer";
import JsonLd from "./components/JsonLd";

const workSans = Work_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
  variable: '--font-work-sans',
  display: 'swap',
})

const BASE = process.env.SITE_URL || 'https://lochmonsterelectric.com'

const localBusiness = {
  '@context': 'https://schema.org',
  '@type': 'ElectricalContractor',
  name: 'Loch Monster Electric',
  url: BASE,
  telephone: '+17632921191',
  email: 'service@lochmonsterelectric.com',
  image: `${BASE}/logo-footer-mark.png`,
  address: {
    '@type': 'PostalAddress',
    streetAddress: '7600 W 27th St #213',
    addressLocality: 'St Louis Park',
    addressRegion: 'MN',
    postalCode: '55426',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 44.9551,
    longitude: -93.3493,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '17:00',
    },
  ],
  areaServed: [
    { '@type': 'State', name: 'Minnesota' },
    { '@type': 'State', name: 'Wisconsin' },
  ],
  priceRange: '$$',
  description:
    'Licensed electrical contractor serving the Twin Cities metro. Residential, commercial & HOA electrical services.',
  additionalProperty: [
    { '@type': 'PropertyValue', name: 'Minnesota Electrical License', value: 'EA807591' },
    { '@type': 'PropertyValue', name: 'Wisconsin Electrical License', value: '1443 — EC' },
  ],
  sameAs: [
    'https://share.google/bXtXI9GaooHQCDDPA',
    'https://www.yelp.com/biz/loch-monster-electric-st-louis-park-2',
    'https://www.facebook.com/lochmonsterelectric',
    'https://www.instagram.com/lochmonsterelectric/',
    'https://www.tiktok.com/@lochmonsterelectric',
  ],
}

export const metadata = {
  metadataBase: new URL(process.env.SITE_URL || 'https://lochmonsterelectric.com'),
  title: "Loch Monster Electric | Legendary Electrical Work, Done Right",
  description: "Licensed electrical contractor serving the Twin Cities metro. Residential, commercial & HOA electrical services. Call 763-292-1191.",
  openGraph: {
    siteName: 'Loch Monster Electric',
    images: [{ url: '/logo-footer-mark.png', width: 1200, height: 630, alt: 'Loch Monster Electric' }],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/logo-footer-mark.png'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={workSans.variable}>
      <head>
        <JsonLd schema={localBusiness} />
      </head>
      <body>
        <TopBar />
        <HeaderWrapper />
        {children}
        <Footer />
      </body>
    </html>
  );
}
