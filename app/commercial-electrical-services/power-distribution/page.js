import { buildPageMetadata, getCategoryHub, getPageSEO } from '../../lib/cms'
import CategoryHubPage from "../../components/CategoryHubPage";
import { categoryHubs } from "../../data/categoryHubs";
import JsonLd from "../../components/JsonLd";

export async function generateMetadata() {
  return buildPageMetadata('commercial-electrical-services/power-distribution', {
    title: 'Commercial Power & Distribution | Loch Monster Electric',
    description: 'Commercial panel upgrades, three-phase power & load calculations in the Twin Cities. Call 763-292-1191.',
  })
}

export default async function PowerDistributionPage() {
  const [hub, seo] = await Promise.all([
    getCategoryHub('power-distribution'),
    getPageSEO('commercial-electrical-services/power-distribution'),
  ])
  const data = hub ?? categoryHubs['power-distribution']
  return (
    <>
      {seo?.schemaMarkup && <JsonLd schema={seo.schemaMarkup} />}
      <CategoryHubPage data={data} />
    </>
  );
}
