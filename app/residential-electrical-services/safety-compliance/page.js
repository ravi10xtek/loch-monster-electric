import { buildPageMetadata } from '../../lib/cms'
import CategoryHubPage from "../../components/CategoryHubPage";
import { categoryHubs } from "../../data/categoryHubs";

export async function generateMetadata() {
  return buildPageMetadata('residential-electrical-services/safety-compliance', {
    title: 'Electrical Safety & Compliance | Loch Monster Electric',
    description: 'GFCI, AFCI, smoke detectors & electrical inspections in the Twin Cities. Keep your home safe and up to code. Call 763-292-1191.',
  })
}

export default function SafetyCompliancePage() {
  return <CategoryHubPage data={categoryHubs['safety-compliance']} />;
}
