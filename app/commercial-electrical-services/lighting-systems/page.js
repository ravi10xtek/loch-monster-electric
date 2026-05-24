import { buildPageMetadata, getCategoryHub, getPageSEO } from '../../lib/cms'
import CategoryHubPage from "../../components/CategoryHubPage";
import { categoryHubs } from "../../data/categoryHubs";
import JsonLd from "../../components/JsonLd";

export async function generateMetadata() {
  return buildPageMetadata('commercial-electrical-services/lighting-systems', {
    title: 'Commercial Lighting Systems | Loch Monster Electric',
    description: 'Commercial lighting installation, parking lot lighting & LED retrofits in the Twin Cities. Call 763-292-1191.',
  })
}

export default async function LightingSystemsPage() {
  const [hub, seo] = await Promise.all([
    getCategoryHub('lighting-systems'),
    getPageSEO('commercial-electrical-services/lighting-systems'),
  ])
  const data = hub ?? categoryHubs['lighting-systems']
  return (
    <>
      {seo?.schemaMarkup && <JsonLd schema={seo.schemaMarkup} />}
      <CategoryHubPage data={data} />
    </>
  );
}
