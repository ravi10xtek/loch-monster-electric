import { buildPageMetadata } from '../../lib/cms'
import CategoryHubPage from "../../components/CategoryHubPage";
import { categoryHubs } from "../../data/categoryHubs";

export async function generateMetadata() {
  return buildPageMetadata('commercial-electrical-services/compliance-infrastructure', {
    title: 'Commercial Compliance & Infrastructure | Loch Monster Electric',
    description: 'Code corrections, tenant build-outs & generator installation in the Twin Cities. Call 763-292-1191.',
  })
}

export default function ComplianceInfrastructurePage() {
  return <CategoryHubPage data={categoryHubs['compliance-infrastructure']} />;
}
