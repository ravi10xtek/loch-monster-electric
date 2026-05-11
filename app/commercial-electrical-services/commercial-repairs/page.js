import CategoryHubPage from "../../components/CategoryHubPage";
import { categoryHubs } from "../../data/categoryHubs";

export const metadata = {
  title: categoryHubs['commercial-repairs'].seo.title,
  description: categoryHubs['commercial-repairs'].seo.description,
};

export default function CommercialRepairsPage() {
  return <CategoryHubPage data={categoryHubs['commercial-repairs']} />;
}
