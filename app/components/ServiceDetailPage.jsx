import HomeInteractions from "../ui/home-interactions";
import ServiceHero from "./ServiceHero";
import WhenDoYouNeed from "./WhenDoYouNeed";
import OrangeBanner from "./OrangeBanner";
import Expect from "./Expect";
import FAQ from "./FAQ";
import WhyChooseUs from "./WhyChooseUs";
import Services from "./Services";
import ServiceAreas from "./ServiceAreas";
import Journal from "./Journal";

export default function ServiceDetailPage({ data }) {
  return (
    <><HomeInteractions />
    <main>
      <ServiceHero hero={data.hero} />
      <WhenDoYouNeed data={data.whenDoYouNeed} />
      <OrangeBanner /><Expect dark /><FAQ /><WhyChooseUs /><Services /><ServiceAreas /><Journal />
    </main></>
  );
}
