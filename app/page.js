import HomeInteractions from "./ui/home-interactions";
import Hero from "./components/Hero";
import Services from "./components/Services";
import OrangeBanner from "./components/OrangeBanner";
import ServiceAreas from "./components/ServiceAreas";
import Expect from "./components/Expect";
import WhyChooseUs from "./components/WhyChooseUs";
import Pricing from "./components/Pricing";
import OurStory from "./components/OurStory";
import Journal from "./components/Journal";
import FAQ from "./components/FAQ";

export default function HomePage() {
  return (
    <>
      <HomeInteractions />
      <main>
        <Hero />
        <Services />
        <OrangeBanner />
        <ServiceAreas />
        <Expect />
        <WhyChooseUs />
        <Pricing />
        <OurStory />
        <Journal />
        <FAQ />
      </main>
    </>
  );
}
