import { buildPageMetadata, getCategoryHub, getPageSEO } from '../../lib/cms'
import CategoryHubPage from "../../components/CategoryHubPage";
import { categoryHubs } from "../../data/categoryHubs";
import JsonLd from "../../components/JsonLd";

export async function generateMetadata() {
  return buildPageMetadata('residential-electrical-services/installations', {
    title: 'Electrical Installations | Loch Monster Electric',
    description: 'EV charger, ceiling fan, smart home & lighting installation in the Twin Cities. Licensed, insured, done right. Call 763-292-1191.',
  })
}

export default async function InstallationsPage() {
  const [hub, seo] = await Promise.all([
    getCategoryHub('installations'),
    getPageSEO('residential-electrical-services/installations'),
  ])
  const data = hub ?? categoryHubs['installations']
  return (
    <>
      {seo?.schemaMarkup && <JsonLd schema={seo.schemaMarkup} />}
      <CategoryHubPage data={data} />
    </>
  );
}
