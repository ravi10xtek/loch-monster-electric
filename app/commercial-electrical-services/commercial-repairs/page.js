import { buildPageMetadata, getCategoryHub } from '../../lib/cms'
import CategoryHubPage from "../../components/CategoryHubPage";
import { categoryHubs } from "../../data/categoryHubs";

export async function generateMetadata() {
  return buildPageMetadata('commercial-electrical-services/commercial-repairs', {
    title: 'Commercial Electrical Repairs | Loch Monster Electric',
    description: 'Fast commercial electrical repairs in the Twin Cities. Emergency response, maintenance contracts & more. Call 763-292-1191.',
  })
}

export default async function CommercialRepairsPage() {
  const data = await getCategoryHub('commercial-repairs') ?? categoryHubs['commercial-repairs']
  return <CategoryHubPage data={data} />;
}
