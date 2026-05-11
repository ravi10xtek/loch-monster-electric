import CategoryHubPage from "../../components/CategoryHubPage";
import { categoryHubs } from "../../data/categoryHubs";

export const metadata = {
  title: categoryHubs['hoa-ev-charging'].seo.title,
  description: categoryHubs['hoa-ev-charging'].seo.description,
};

export default function HoaEvChargingPage() {
  return <CategoryHubPage data={categoryHubs['hoa-ev-charging']} />;
}
