import { buildPageMetadata, getCategoryHub } from '../../lib/cms'
import CategoryHubPage from "../../components/CategoryHubPage";
import { categoryHubs } from "../../data/categoryHubs";

export async function generateMetadata() {
  return buildPageMetadata('commercial-electrical-services/lighting-systems', {
    title: 'Commercial Lighting Systems | Loch Monster Electric',
    description: 'Commercial lighting installation, parking lot lighting & LED retrofits in the Twin Cities. Call 763-292-1191.',
  })
}

export default async function LightingSystemsPage() {
  const data = await getCategoryHub('lighting-systems') ?? categoryHubs['lighting-systems']
  return <CategoryHubPage data={data} />;
}
