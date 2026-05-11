import { buildPageMetadata } from '../../lib/cms'
import CategoryHubPage from "../../components/CategoryHubPage";
import { categoryHubs } from "../../data/categoryHubs";

export async function generateMetadata() {
  return buildPageMetadata('commercial-electrical-services/power-distribution', {
    title: 'Commercial Power & Distribution | Loch Monster Electric',
    description: 'Commercial panel upgrades, three-phase power & load calculations in the Twin Cities. Call 763-292-1191.',
  })
}

export default function PowerDistributionPage() {
  return <CategoryHubPage data={categoryHubs['power-distribution']} />;
}
