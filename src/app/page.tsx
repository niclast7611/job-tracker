import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import SocialsSection from "./components/SocialsSection";
import PricingSection from "./components/PricingSection";
import CtaSection from "./components/CtaSection";
import LandingPageNavBar from "./components/LandingPageNavBar";
import FooterSection from "./components/FooterSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <LandingPageNavBar />
      <HeroSection />
      <FeatureSection />
      <SocialsSection />
      <PricingSection />
      <CtaSection />
      <FooterSection />
    </div>
  );
}
