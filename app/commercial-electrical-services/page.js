import { buildPageMetadata } from '../lib/cms'
import ServiceLandingPage from "../components/ServiceLandingPage";
import { servicePages } from "../data/services";

export async function generateMetadata() {
  return buildPageMetadata('commercial-electrical-services', {
    title: 'Commercial Electrical Services | Loch Monster Electric',
    description: 'Commercial electricians for the Twin Cities metro. Office buildouts, panel upgrades, lighting retrofits & code compliance. Call 763-292-1191.',
  })
}

export default function CommercialPage() {
  return <ServiceLandingPage data={servicePages.commercial} />;
}
