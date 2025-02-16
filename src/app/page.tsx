import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import SocialsSection from "./components/SocialsSection";
import PricingSection from "./components/PricingSection";
import CtaSection from "./components/CtaSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeatureSection />
      <SocialsSection />
      <PricingSection />
      <CtaSection />
    </div>
  );
}
