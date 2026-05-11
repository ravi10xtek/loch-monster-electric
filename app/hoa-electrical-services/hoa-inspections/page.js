import { buildPageMetadata } from '../../lib/cms'
import CategoryHubPage from "../../components/CategoryHubPage";
import { categoryHubs } from "../../data/categoryHubs";

export async function generateMetadata() {
  return buildPageMetadata('hoa-electrical-services/hoa-inspections', {
    title: 'HOA Electrical Inspections & Maintenance | Loch Monster Electric',
    description: 'Annual electrical inspections, code compliance & maintenance contracts for HOAs in the Twin Cities. Call 763-292-1191.',
  })
}

export default function HoaInspectionsPage() {
  return <CategoryHubPage data={categoryHubs['hoa-inspections']} />;
}
