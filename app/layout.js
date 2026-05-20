import "../styles.css";
import TopBar from "./components/TopBar";
import HeaderWrapper from "./components/HeaderWrapper";
import Footer from "./components/Footer";
import JsonLd from "./components/JsonLd";

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
  hasCredential: [
    { '@type': 'EducationalOccupationalCredential', credentialCategory: 'license', name: 'MN LIC: EA807591' },
    { '@type': 'EducationalOccupationalCredential', credentialCategory: 'license', name: 'WI LIC: 1443 — EC' },
  ],
}

export const metadata = {
  title: "Loch Monster Electric | Legendary Electrical Work, Done Right",
  description: "Licensed electrical contractor serving the Twin Cities metro. Residential, commercial & HOA electrical services. Call 763-292-1191.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400&family=Oswald:wght@400;500;600;700&family=Open+Sans:ital,wght@0,400;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />
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
