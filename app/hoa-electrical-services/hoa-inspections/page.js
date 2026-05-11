import CategoryHubPage from "../../components/CategoryHubPage";
import { categoryHubs } from "../../data/categoryHubs";

export const metadata = {
  title: categoryHubs['hoa-inspections'].seo.title,
  description: categoryHubs['hoa-inspections'].seo.description,
};

export default function HoaInspectionsPage() {
  return <CategoryHubPage data={categoryHubs['hoa-inspections']} />;
}
