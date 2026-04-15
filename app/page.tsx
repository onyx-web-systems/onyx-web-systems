import { HeroSection }          from "@/components/sections/HeroSection";
import { ProblemSection }       from "@/components/sections/ProblemSection";
import { ServicesSection }      from "@/components/sections/ServicesSection";
import { ProcessSection }       from "@/components/sections/ProcessSection";
import { PricingPreviewSection } from "@/components/sections/PricingPreviewSection";
import { WhyOnyxSection }       from "@/components/sections/WhyOnyxSection";
import { FinalCTASection }      from "@/components/sections/FinalCTASection";

/**
 * Onyx Web Systems — Homepage
 * Block 3 complete: all 7 sections live.
 */
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <ServicesSection />
      <ProcessSection />
      <PricingPreviewSection />
      <WhyOnyxSection />
      <FinalCTASection />
    </>
  );
}
