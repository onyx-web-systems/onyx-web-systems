"use client";

import { motion } from "framer-motion";
import { LinkButton } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { staggerContainer, staggerItem, viewportConfig } from "@/lib/motion";

const TIERS = [
  {
    name: "Foundation System",
    tagline: "Sharp. Credible. Ready to Convert.",
    description: "For businesses that need a sharp, credible, conversion-ready web presence that builds trust and drives action.",
    features: [
      "Custom 5–8 page design",
      "Conversion-optimized structure",
      "Mobile-first development",
      "Contact + lead capture forms",
      "Performance optimization",
    ],
    cta: "Learn More",
    featured: false,
  },
  {
    name: "Growth System",
    tagline: "Design. Performance. Automation.",
    description: "For businesses ready to combine design, performance, automation, and lead flow into one cohesive revenue system.",
    features: [
      "Everything in Foundation",
      "CRM + pipeline integration",
      "Automated email sequences",
      "AI chat + lead qualification",
      "Analytics + conversion tracking",
    ],
    cta: "Get Started",
    featured: true,
  },
  {
    name: "Authority System",
    tagline: "Your Complete Digital Growth Engine.",
    description: "For businesses that want a complete digital growth engine — built, managed, and optimized for scale.",
    features: [
      "Everything in Growth",
      "Full funnel architecture",
      "Multi-channel automation",
      "Monthly performance reviews",
      "Priority support + refinement",
    ],
    cta: "Learn More",
    featured: false,
  },
];

export const PricingPreviewSection = () => (
  <section id="pricing" className="relative py-24 md:py-32 overflow-hidden"
    style={{ backgroundColor: "#0D0D0D" }}>

    {/* Top accent */}
    <div className="absolute top-0 inset-x-0 h-px"
      style={{ background: "linear-gradient(to right, transparent, rgba(32,160,32,0.25), transparent)" }}
      aria-hidden="true" />

    <div className="container-site">

      {/* Header */}
      <motion.div
        className="flex flex-col items-center text-center gap-5 mb-16 max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewportConfig}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <p className="eyebrow">Pricing</p>
        <h2 className="font-display text-white text-balance"
          style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", letterSpacing: "-0.03em", lineHeight: "1.1" }}>
          Choose the Right System
        </h2>
        <p className="text-[#6B6B6B]" style={{ fontSize: "0.9375rem", lineHeight: "1.7", maxWidth: "480px" }}>
          Every system is custom-built. No templates. No shortcuts. Pricing is based
          on scope — book a call to get a tailored quote.
        </p>
      </motion.div>

      {/* Cards */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10"
        variants={staggerContainer(0.1, 0.15)}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
      >
        {TIERS.map((tier) => (
          <motion.div
            key={tier.name}
            variants={staggerItem}
            className={cn(
              "relative flex flex-col gap-6 p-8 rounded-2xl",
              "transition-all duration-300",
              tier.featured
                ? "border-2 bg-[#111111] -translate-y-2 shadow-2xl"
                : "border border-white/[0.06] bg-[#111111] hover:border-white/[0.12] hover:-translate-y-0.5"
            )}
            style={tier.featured ? {
              borderColor: "#20A020",
              boxShadow: "0 0 48px rgba(32,160,32,0.12), 0 24px 64px rgba(0,0,0,0.5)",
            } : {}}
          >
            {/* Featured badge */}
            {tier.featured && (
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                <span className="text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full"
                  style={{ backgroundColor: "#20A020", color: "#0A0A0A" }}>
                  Most Popular
                </span>
              </div>
            )}

            {/* Tier info */}
            <div className="flex flex-col gap-2">
              <h3 className="font-sans font-semibold text-white text-lg tracking-tight">
                {tier.name}
              </h3>
              <p className="text-xs font-medium tracking-wide uppercase"
                style={{ color: tier.featured ? "#20A020" : "#6B6B6B" }}>
                {tier.tagline}
              </p>
            </div>

            {/* Description */}
            <p className="text-[#6B6B6B] text-sm leading-relaxed border-b pb-6"
              style={{ borderColor: "rgba(255,255,255,0.06)" }}>
              {tier.description}
            </p>

            {/* Features */}
            <ul className="flex flex-col gap-3 flex-1">
              {tier.features.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm text-[#9A9A9A]">
                  <svg className="flex-shrink-0 mt-0.5" width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <circle cx="7" cy="7" r="7" fill="#20A020" fillOpacity={tier.featured ? "0.2" : "0.1"} />
                    <path d="M4.5 7L6.2 8.8L9.5 5.5" stroke="#20A020" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {f}
                </li>
              ))}
            </ul>

            {/* CTA */}
            <LinkButton
              href="/contact"
              variant={tier.featured ? "primary" : "secondary"}
              className="w-full justify-center mt-2"
            >
              {tier.cta}
            </LinkButton>
          </motion.div>
        ))}
      </motion.div>

      {/* View full pricing CTA */}
      <motion.div
        className="flex justify-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={viewportConfig}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <LinkButton href="/pricing" variant="secondary">
          View Full Pricing
        </LinkButton>
      </motion.div>
    </div>
  </section>
);
