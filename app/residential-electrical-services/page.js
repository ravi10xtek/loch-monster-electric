import { buildPageMetadata } from '../lib/cms'
import ServiceLandingPage from "../components/ServiceLandingPage";
import { servicePages } from "../data/services";

export async function generateMetadata() {
  return buildPageMetadata('residential-electrical-services', {
    title: 'Residential Electrical Services | Loch Monster Electric',
    description: 'Licensed residential electricians serving the Twin Cities metro. Panel upgrades, EV chargers, repairs, rewiring & more. Call 763-292-1191.',
  })
}

export default function ResidentialPage() {
  return <ServiceLandingPage data={servicePages.residential} />;
}
