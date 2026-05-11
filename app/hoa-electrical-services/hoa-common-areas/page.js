import CategoryHubPage from "../../components/CategoryHubPage";
import { categoryHubs } from "../../data/categoryHubs";

export const metadata = {
  title: categoryHubs['hoa-common-areas'].seo.title,
  description: categoryHubs['hoa-common-areas'].seo.description,
};

export default function HoaCommonAreasPage() {
  return <CategoryHubPage data={categoryHubs['hoa-common-areas']} />;
}
