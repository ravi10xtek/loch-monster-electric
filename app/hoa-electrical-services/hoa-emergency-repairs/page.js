import CategoryHubPage from "../../components/CategoryHubPage";
import { categoryHubs } from "../../data/categoryHubs";

export const metadata = {
  title: categoryHubs['hoa-emergency-repairs'].seo.title,
  description: categoryHubs['hoa-emergency-repairs'].seo.description,
};

export default function HoaEmergencyRepairsPage() {
  return <CategoryHubPage data={categoryHubs['hoa-emergency-repairs']} />;
}
