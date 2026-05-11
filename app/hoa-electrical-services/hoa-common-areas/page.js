import { buildPageMetadata } from '../../lib/cms'
import CategoryHubPage from "../../components/CategoryHubPage";
import { categoryHubs } from "../../data/categoryHubs";

export async function generateMetadata() {
  return buildPageMetadata('hoa-electrical-services/hoa-common-areas', {
    title: 'HOA Common Area Electrical | Loch Monster Electric',
    description: 'Common area lighting, amenity electrical & repairs for HOAs in the Twin Cities. Call 763-292-1191.',
  })
}

export default function HoaCommonAreasPage() {
  return <CategoryHubPage data={categoryHubs['hoa-common-areas']} />;
}
