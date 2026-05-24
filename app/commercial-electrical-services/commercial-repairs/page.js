import { buildPageMetadata, getCategoryHub, getPageSEO } from '../../lib/cms'
import CategoryHubPage from "../../components/CategoryHubPage";
import { categoryHubs } from "../../data/categoryHubs";
import JsonLd from "../../components/JsonLd";

export async function generateMetadata() {
  return buildPageMetadata('commercial-electrical-services/commercial-repairs', {
    title: 'Commercial Electrical Repairs | Loch Monster Electric',
    description: 'Fast commercial electrical repairs in the Twin Cities. Emergency response, maintenance contracts & more. Call 763-292-1191.',
  })
}

export default async function CommercialRepairsPage() {
  const [hub, seo] = await Promise.all([
    getCategoryHub('commercial-repairs'),
    getPageSEO('commercial-electrical-services/commercial-repairs'),
  ])
  const data = hub ?? categoryHubs['commercial-repairs']
  return (
    <>
      {seo?.schemaMarkup && <JsonLd schema={seo.schemaMarkup} />}
      <CategoryHubPage data={data} />
    </>
  );
}
