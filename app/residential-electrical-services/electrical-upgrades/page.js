import { buildPageMetadata, getCategoryHub } from '../../lib/cms'
import CategoryHubPage from "../../components/CategoryHubPage";
import { categoryHubs } from "../../data/categoryHubs";

export async function generateMetadata() {
  return buildPageMetadata('residential-electrical-services/electrical-upgrades', {
    title: 'Electrical Upgrades | Loch Monster Electric',
    description: "Panel upgrades, rewiring & service upgrades in the Twin Cities. Modernize your home's electrical system safely and to code. Call 763-292-1191.",
  })
}

export default async function ElectricalUpgradesPage() {
  const data = await getCategoryHub('electrical-upgrades') ?? categoryHubs['electrical-upgrades']
  return <CategoryHubPage data={data} />;
}
