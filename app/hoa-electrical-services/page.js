import ServiceLandingPage from "../components/ServiceLandingPage";
import { servicePages } from "../data/services";

export const metadata = servicePages.hoa.seo;

export default function HOAPage() {
  return <ServiceLandingPage data={servicePages.hoa} />;
}
