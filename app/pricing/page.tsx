"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LinkButton } from "@/components/ui/Button";
import { PageHero } from "@/components/layout/PageLayout";
import { cn } from "@/lib/utils";
import { staggerContainer, staggerItem, viewportConfig } from "@/lib/motion";

/* ─── Pricing Tiers ──────────────────────────────────────────────────────────── */

const TIERS = [
  {
    name: "Foundation",
    price: "$2,500",
    priceNote: "One-time project investment",
    description:
      "Custom built website to manage your online presence.",
    features: [
      "For small businesses / tight budgets",
      "Simple site (3–5 pages)",
      "Template-based or light customization",
    ],
    featured: false,
    cta: "Start a Conversation",
  },
  {
    name: "Growth",
    price: "$5,000",
    priceNote: "One-time project investment",
    description:
      "A sharp, high-performance website built for credibility, clarity, and conversion readiness.",
    features: [
      "Fully custom 5–8 page design",
      "Mobile-first development",
      "Conversion-optimized structure",
      "Contact + lead capture forms",
      "Core Web Vitals optimization",
      "Basic SEO infrastructure",
      "30-day post-launch support",
    ],
    featured: true,
    cta: "Get Started",
  },
  {
    name: "Premium",
    price: "$8,000–$10,000",
    priceNote: "Scope-dependent investment",
    description:
      "Our most balanced system for businesses that need design, performance, lead flow, and automation.",
    features: [
      "Everything in Growth",
      "CRM + pipeline integration",
      "Automated email sequences",
      "AI chat + lead qualification",
      "Analytics + conversion tracking",
      "Landing page (up to 2)",
      "60-day post-launch support",
    ],
    featured: false,
    cta: "Start a Conversation",
  },
  {
    name: "Enterprise",
    price: "$18,000–$25,000",
    priceNote: "Custom scoped per project",
    description:
      "A complete digital growth system for brands ready to scale with authority.",
    features: [
      "Everything in Premium",
      "Full funnel architecture",
      "Multi-channel automation",
      "AI-powered engagement layer",
      "Custom integrations",
      "Monthly strategy reviews",
      "Priority support + refinement",
      "Complex builds (apps, portals, automation)",
      "Retainers + long-term contracts",
    ],
    featured: false,
    cta: "Start a Conversation",
  },
];

/* ─── Fit Guidance ───────────────────────────────────────────────────────────── */

const FIT_CARDS = [
  {
    system: "Foundation",
    best: "You're a small business on a tight budget who needs a clean, professional online presence fast — without overcomplicating the scope.",
    signals: ["New or early-stage business", "Tight budget", "Need a credible web presence"],
  },
  {
    system: "Growth",
    best: "You're established and need a fully custom, high-performance site built for conversion — not just a pretty face.",
    signals: ["Ready to invest in quality", "Needs mobile-first design", "Wants leads to convert"],
  },
  {
    system: "Premium",
    best: "You're generating traffic but not converting it. You need design, automation, and lead flow working together as one connected engine.",
    signals: ["Traffic without conversions", "Manual follow-up process", "Ready to automate leads"],
  },
  {
    system: "Enterprise",
    best: "You're scaling and need infrastructure that supports it. Complex offers, multiple products, or multi-channel lead flow require a fully engineered growth system.",
    signals: ["High-ticket or complex offer", "Multiple revenue streams", "Requires custom integrations"],
  },
];

/* ─── FAQs ───────────────────────────────────────────────────────────────────── */

const FAQS = [
  {
    q: "Do you offer custom scopes?",
    a: "Yes. Every project is scoped individually based on your goals, complexity, and timeline. The pricing tiers above are starting points — we'll build a precise proposal after a discovery call.",
  },
  {
    q: "Do you work with businesses outside my city?",
    a: "Entirely remote and fully global. We work with clients across North America, Europe, and beyond. Our process is built for async collaboration without any drop in quality or communication.",
  },
  {
    q: "Can you improve an existing site?",
    a: "Absolutely. If your current site has strong bones but underperforms, we can audit, restructure, and rebuild specific sections — or take on a full redesign depending on the gap.",
  },
];

/* ─── Page ─────────────────────────────────────────────────────── v2 ─────── */

export default function PricingPage() {
  return (
    <div className="pt-[72px]">

      {/* ── Section 1: Hero ── */}
      <PageHero
        eyebrow="Pricing"
        headline="Investment in Performance"
        sub="We build websites as business infrastructure. Pricing reflects strategy, execution, and performance."
        align="center"
      />

      {/* ── Section 2: Pricing Cards ── */}
      <section className="relative section bg-base section-sep overflow-hidden">

        <div className="absolute top-0 inset-x-0 h-px"
          style={{ background: "linear-gradient(to right, transparent, rgba(255,255,255,0.06), transparent)" }}
          aria-hidden="true" />

        {/* Subtle center glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full blur-3xl pointer-events-none opacity-[0.04]"
          style={{ backgroundColor: "#20A020" }} aria-hidden="true" />

        <div className="container-site">

          {/* Positioning note */}
          <motion.div
            className="flex justify-center mb-14"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportConfig}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 px-5 py-3 rounded-full border"
              style={{ borderColor: "rgba(255,255,255,0.08)", backgroundColor: "rgba(255,255,255,0.02)" }}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <circle cx="7" cy="7" r="6" stroke="#20A020" strokeWidth="1.25" />
                <path d="M7 4.5v3l2 2" stroke="#20A020" strokeWidth="1.25" strokeLinecap="round" />
              </svg>
              <span className="text-xs text-[#9A9A9A] font-medium">
                All projects are custom-scoped. These are starting investment ranges.
              </span>
            </div>
          </motion.div>

          {/* Cards */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 items-start"
            variants={staggerContainer(0.08, 0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            {TIERS.map((tier) => (
              <motion.div
                key={tier.name}
                variants={staggerItem}
                className={cn(
                  "relative flex flex-col gap-6 p-6 rounded-2xl",
                  "transition-all duration-300",
                  tier.featured
                    ? "border-2 xl:-translate-y-3"
                    : "border border-white/[0.06] hover:border-white/[0.12]"
                )}
                style={tier.featured ? {
                  backgroundColor: "#1D1D1D",
                  borderColor: "#20A020",
                  boxShadow: "0 0 60px rgba(32,160,32,0.1), 0 32px 80px rgba(0,0,0,0.5)",
                } : {
                  backgroundColor: "#242424",
                }}
              >
                {/* Featured badge */}
                {tier.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="text-[10px] font-bold tracking-[0.12em] uppercase px-4 py-1.5 rounded-full whitespace-nowrap"
                      style={{ backgroundColor: "#20A020", color: "#0F0F0F" }}>
                      Most Popular
                    </span>
                  </div>
                )}

                {/* Tier name + price */}
                <div className="flex flex-col gap-3 pb-6 border-b"
                  style={{ borderColor: "rgba(255,255,255,0.06)" }}>
                  <span className="text-xs font-semibold uppercase tracking-[0.14em]"
                    style={{ color: tier.featured ? "#20A020" : "#6B6B6B" }}>
                    {tier.name}
                  </span>
                  <div className="flex flex-col gap-1">
                    <span className="font-display text-white font-normal"
                      style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)", letterSpacing: "-0.03em" }}>
                      {tier.price}
                    </span>
                    <span className="text-xs text-[#6B6B6B]">{tier.priceNote}</span>
                  </div>
                  <p className="text-sm text-[#9A9A9A] leading-relaxed mt-1">
                    {tier.description}
                  </p>
                </div>

                {/* Features */}
                <ul className="flex flex-col gap-3 flex-1">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-[#9A9A9A]">
                      <svg className="flex-shrink-0 mt-0.5" width="15" height="15" viewBox="0 0 15 15" fill="none">
                        <circle cx="7.5" cy="7.5" r="7.5"
                          fill={tier.featured ? "rgba(32,160,32,0.18)" : "rgba(32,160,32,0.1)"} />
                        <path d="M4.5 7.5L6.5 9.5L10.5 5.5" stroke="#20A020"
                          strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
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

          {/* Custom scope note */}
          <motion.p
            className="text-center text-xs text-[#3D3D3D] mt-10 font-medium"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={viewportConfig}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            All pricing is in USD. Retainer and maintenance plans available upon request.
          </motion.p>
        </div>
      </section>

      {/* ── Section 3: Fit Guidance ── */}
      <section className="relative section bg-raised section-sep overflow-hidden">

        <div className="absolute top-0 inset-x-0 h-px"
          style={{ background: "linear-gradient(to right, transparent, rgba(32,160,32,0.15), transparent)" }}
          aria-hidden="true" />

        <div className="container-site">

          <motion.div
            className="flex flex-col gap-4 mb-14 max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportConfig}
            transition={{ duration: 0.7 }}
          >
            <p className="eyebrow">Find Your Fit</p>
            <h2 className="font-display text-white"
              style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", letterSpacing: "-0.03em", lineHeight: "1.1" }}>
              Which System Is Right for You?
            </h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4"
            variants={staggerContainer(0.1, 0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            {FIT_CARDS.map((card) => (
              <motion.div
                key={card.system}
                variants={staggerItem}
                className={cn(
                  "flex flex-col gap-5 p-7 rounded-2xl",
                  "border bg-[#1E1E1E] shadow-[0_1px_3px_rgba(0,0,0,0.4),0_4px_12px_rgba(0,0,0,0.25)]",
                  "hover:border-[rgba(32,160,32,0.15)] transition-all duration-300"
                )}
              >
                <div className="flex flex-col gap-1.5">
                  <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: "#20A020" }}>
                    {card.system}
                  </span>
                  <div className="w-8 h-px mt-1" style={{ backgroundColor: "rgba(32,160,32,0.3)" }} />
                </div>

                <p className="text-sm text-[#9A9A9A] leading-relaxed flex-1">
                  {card.best}
                </p>

                <div className="flex flex-col gap-2 pt-4 border-t border-white/[0.05]">
                  {card.signals.map((s) => (
                    <span key={s} className="flex items-center gap-2 text-xs text-[#6B6B6B]">
                      <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: "#20A020" }} />
                      {s}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Section 4: FAQ Teaser ── */}
      <section className="relative section bg-raised section-sep overflow-hidden">

        <div className="absolute top-0 inset-x-0 h-px"
          style={{ background: "linear-gradient(to right, transparent, rgba(255,255,255,0.05), transparent)" }}
          aria-hidden="true" />

        <div className="container-site">
          <div className="max-w-2xl mx-auto">

            <motion.div
              className="flex flex-col gap-4 mb-12 text-center items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportConfig}
              transition={{ duration: 0.6 }}
            >
              <p className="eyebrow">FAQ</p>
              <h2 className="font-display text-white"
                style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)", letterSpacing: "-0.025em" }}>
                Common Questions
              </h2>
            </motion.div>

            <motion.div
              className="flex flex-col gap-3"
              variants={staggerContainer(0.1, 0.1)}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
            >
              {FAQS.map((faq) => (
                <FAQItem key={faq.q} question={faq.q} answer={faq.a} />
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Section 5: CTA ── */}
      <section className="relative section bg-deep section-sep-accent overflow-hidden">

        <div className="absolute top-0 inset-x-0 h-px"
          style={{ background: "linear-gradient(to right, transparent, rgba(32,160,32,0.25), transparent)" }}
          aria-hidden="true" />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[280px] rounded-full blur-3xl pointer-events-none"
          style={{ background: "radial-gradient(ellipse, rgba(32,160,32,0.05), transparent)" }}
          aria-hidden="true" />

        <div className="container-site">
          <div className="max-w-2xl mx-auto flex flex-col items-center text-center gap-8">

            <motion.div
              className="flex flex-col items-center gap-5"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportConfig}
              transition={{ duration: 0.7 }}
            >
              <p className="eyebrow">Let's Talk</p>
              <h2 className="font-display text-white text-balance"
                style={{ fontSize: "clamp(2rem, 4vw, 3rem)", letterSpacing: "-0.035em", lineHeight: "1.08" }}>
                Not Sure Which System Fits?
              </h2>
              <p className="text-[#6B6B6B]"
                style={{ fontSize: "1rem", lineHeight: "1.75", maxWidth: "400px" }}>
                Start with a free audit and get clear on the right next step.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportConfig}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row items-center gap-4"
            >
              <LinkButton href="/audit" variant="primary" size="lg">
                Get Your Free Website Audit
              </LinkButton>
              <LinkButton href="/contact" variant="secondary" size="lg">
                Talk to Us First
              </LinkButton>
            </motion.div>

            <motion.p
              className="text-xs text-[#3D3D3D] font-medium"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={viewportConfig}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Free. No commitment. Delivered within 48 hours.
            </motion.p>
          </div>
        </div>
      </section>

    </div>
  );
}

/* ─── FAQ Accordion Item ─────────────────────────────────────────────────────── */

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      variants={staggerItem}
      className={cn(
        "rounded-xl border overflow-hidden transition-all duration-300",
        open
          ? "border-[rgba(32,160,32,0.2)] bg-[#111111]"
          : "border-white/[0.06] bg-[#111111] hover:border-white/[0.1]"
      )}
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between px-6 py-5 text-left gap-4"
        aria-expanded={open}
      >
        <span className="text-sm font-medium text-white leading-snug">{question}</span>
        <div className={cn(
          "flex items-center justify-center w-6 h-6 rounded-full border flex-shrink-0 transition-all duration-300",
          open
            ? "border-[#20A020] bg-[rgba(32,160,32,0.1)] rotate-45"
            : "border-white/[0.12]"
        )}>
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <path d="M5 2V8M2 5H8" stroke={open ? "#20A020" : "#9A9A9A"} strokeWidth="1.25" strokeLinecap="round" />
          </svg>
        </div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="px-6 pb-5 text-sm text-[#6B6B6B] leading-relaxed border-t border-white/[0.05] pt-4">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
