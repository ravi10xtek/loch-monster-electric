import { buildPageMetadata, getCategoryHub } from '../../lib/cms'
import CategoryHubPage from "../../components/CategoryHubPage";
import { categoryHubs } from "../../data/categoryHubs";

export async function generateMetadata() {
  return buildPageMetadata('residential-electrical-services/electrical-repairs', {
    title: 'Electrical Repairs | Loch Monster Electric',
    description: 'Fast, reliable electrical repairs in the Twin Cities. Outlets, breakers, wiring, emergency repairs—we diagnose and fix it right. Call 763-292-1191.',
  })
}

export default async function ElectricalRepairsPage() {
  const data = await getCategoryHub('electrical-repairs') ?? categoryHubs['electrical-repairs']
  return <CategoryHubPage data={data} />;
}
