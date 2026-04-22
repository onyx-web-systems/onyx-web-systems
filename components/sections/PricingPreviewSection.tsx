"use client";

import { motion } from "framer-motion";
import { LinkButton } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { staggerContainer, staggerItem, viewportConfig } from "@/lib/motion";

const TIERS = [
  {
    name: "Foundation",
    tagline: "Clean. Credible. Online.",
    description: "For small businesses on a tight budget who need a professional web presence fast.",
    features: [
      "Simple site (3–5 pages)",
      "Template-based or light customization",
      "Mobile responsive",
      "Contact form",
    ],
    featured: false,
    cta: "Learn More",
  },
  {
    name: "Growth",
    tagline: "Custom. Fast. Built to Convert.",
    description: "A sharp, high-performance website built for credibility, clarity, and conversion readiness.",
    features: [
      "Fully custom 5–8 page design",
      "Mobile-first development",
      "Conversion-optimized structure",
      "Contact + lead capture forms",
      "Core Web Vitals optimization",
      "30-day post-launch support",
    ],
    featured: true,
    cta: "Get Started",
  },
  {
    name: "Premium",
    tagline: "Design. Performance. Automation.",
    description: "Our most balanced system for businesses that need design, performance, lead flow, and automation.",
    features: [
      "Everything in Growth",
      "CRM + pipeline integration",
      "Automated email sequences",
      "AI chat + lead qualification",
      "Landing page (up to 2)",
      "60-day post-launch support",
    ],
    featured: false,
    cta: "Learn More",
  },
  {
    name: "Enterprise",
    tagline: "Your Complete Digital Growth Engine.",
    description: "A complete digital growth system for brands ready to scale with authority.",
    features: [
      "Everything in Premium",
      "Full funnel architecture",
      "Multi-channel automation",
      "AI-powered engagement layer",
      "Custom integrations",
      "Monthly strategy reviews",
      "Retainers + long-term contracts",
    ],
    featured: false,
    cta: "Learn More",
  },
];

export const PricingPreviewSection = () => (
  <section id="pricing" className="relative section bg-base section-sep overflow-hidden">
    <div className="absolute top-0 inset-x-0 h-px"
      style={{ background: "linear-gradient(to right, transparent, rgba(255,255,255,0.06), transparent)" }}
      aria-hidden="true" />

    <div className="container-site">
      <motion.div
        className="flex flex-col items-center text-center gap-4 mb-14 max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewportConfig}
        transition={{ duration: 0.65, ease: [0.16,1,0.3,1] }}
      >
        <p className="eyebrow">Pricing</p>
        <h2 className="heading-xl">Choose the Right System</h2>
        <p className="body-base max-w-sm">
          Every system is custom-built. Pricing is based on scope — book a call to
          get a tailored quote.
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-10"
        variants={staggerContainer(0.09, 0.1)}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
      >
        {TIERS.map((tier) => (
          <motion.div key={tier.name} variants={staggerItem}
            className={cn(
              "relative flex flex-col gap-5 p-6 rounded-2xl transition-all duration-300",
              tier.featured
                ? "border-2 xl:-translate-y-3 shadow-2xl"
                : "border border-white/[0.09] bg-[#181818] shadow-[0_1px_3px_rgba(0,0,0,0.35),0_4px_12px_rgba(0,0,0,0.2)] hover:border-white/[0.14]"
            )}
            style={tier.featured ? {
              borderColor: "#20A020",
              backgroundColor: "#1D1D1D",
              boxShadow: "0 0 48px rgba(32,160,32,0.1), 0 24px 60px rgba(0,0,0,0.45)",
            } : {}}
          >
            {tier.featured && (
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                <span className="text-[10px] font-bold tracking-widest uppercase px-3.5 py-1.5 rounded-full whitespace-nowrap"
                  style={{ backgroundColor: "#20A020", color: "#0F0F0F" }}>
                  Most Popular
                </span>
              </div>
            )}

            <div className="flex flex-col gap-2 pb-5 border-b border-white/[0.06]">
              <span className="card-title">{tier.name}</span>
              <span className="text-[11px] font-semibold uppercase tracking-wider"
                style={{ color: tier.featured ? "#20A020" : "#6B6B6B" }}>
                {tier.tagline}
              </span>
              <p className="body-sm mt-1">{tier.description}</p>
            </div>

            <ul className="flex flex-col gap-2.5 flex-1">
              {tier.features.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm text-[#9A9A9A]">
                  <svg className="flex-shrink-0 mt-0.5" width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <circle cx="7" cy="7" r="7" fill={tier.featured ? "rgba(32,160,32,0.18)" : "rgba(32,160,32,0.1)"} />
                    <path d="M4 7L6 9L10 5" stroke="#20A020" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {f}
                </li>
              ))}
            </ul>

            <LinkButton href="/contact" variant={tier.featured ? "primary" : "secondary"} className="w-full justify-center">
              {tier.cta}
            </LinkButton>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="flex justify-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={viewportConfig}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <LinkButton href="/pricing" variant="secondary">View Full Pricing</LinkButton>
      </motion.div>
    </div>
  </section>
);
