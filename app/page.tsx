import type { Metadata } from "next";
import { HeroSection }           from "@/components/sections/HeroSection";
import { ProblemSection }        from "@/components/sections/ProblemSection";
import { ServicesSection }       from "@/components/sections/ServicesSection";
import { ProcessSection }        from "@/components/sections/ProcessSection";
import { PricingPreviewSection } from "@/components/sections/PricingPreviewSection";
import { WhyOnyxSection }        from "@/components/sections/WhyOnyxSection";
import { FinalCTASection }       from "@/components/sections/FinalCTASection";

export const metadata: Metadata = {
  title: "Onyx Web Systems | High-Performance Websites Built to Convert",
  description:
    "Onyx Web Systems builds high-performance websites engineered to attract, convert, and automate client acquisition for serious businesses.",
  alternates: { canonical: "https://onyxwebsystems.com" },
  openGraph: {
    url:   "https://onyxwebsystems.com",
    title: "Onyx Web Systems | High-Performance Websites Built to Convert",
    description:
      "Not a website. A revenue system. We build high-performance digital infrastructure for serious businesses.",
  },
};

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
