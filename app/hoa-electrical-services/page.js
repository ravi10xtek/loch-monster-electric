import { buildPageMetadata } from '../lib/cms'
import ServiceLandingPage from "../components/ServiceLandingPage";
import { servicePages } from "../data/services";

export async function generateMetadata() {
  return buildPageMetadata('hoa-electrical-services', {
    title: 'HOA Electrical Services | Loch Monster Electric',
    description: 'HOA & property management electrical services in the Twin Cities. Common areas, EV charging, emergency repairs & annual inspections. Call 763-292-1191.',
  })
}

export default function HOAPage() {
  return <ServiceLandingPage data={servicePages.hoa} />;
}
