import CategoryHubPage from "../../components/CategoryHubPage";
import { categoryHubs } from "../../data/categoryHubs";

export const metadata = {
  title: categoryHubs['compliance-infrastructure'].seo.title,
  description: categoryHubs['compliance-infrastructure'].seo.description,
};

export default function ComplianceInfrastructurePage() {
  return <CategoryHubPage data={categoryHubs['compliance-infrastructure']} />;
}
