import { buildPageMetadata, getCategoryHub } from '../../lib/cms'
import CategoryHubPage from "../../components/CategoryHubPage";
import { categoryHubs } from "../../data/categoryHubs";

export async function generateMetadata() {
  return buildPageMetadata('hoa-electrical-services/hoa-emergency-repairs', {
    title: 'HOA Emergency Electrical Repairs | Loch Monster Electric',
    description: '24/7 emergency electrical response for HOAs in the Twin Cities. Power restoration, hazard repair & storm damage. Call 763-292-1191.',
  })
}

export default async function HoaEmergencyRepairsPage() {
  const data = await getCategoryHub('hoa-emergency-repairs') ?? categoryHubs['hoa-emergency-repairs']
  return <CategoryHubPage data={data} />;
}
