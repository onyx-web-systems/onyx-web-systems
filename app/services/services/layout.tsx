"use client";

import { motion } from "framer-motion";
import { LinkButton } from "@/components/ui/Button";
import { PageLayout, PageHero } from "@/components/layout/PageLayout";
import { cn } from "@/lib/utils";
import { staggerContainer, staggerItem, viewportConfig } from "@/lib/motion";

/* ─── Service Data ───────────────────────────────────────────────────────────── */

const SERVICES = [
  {
    number: "01",
    title: "Website Design & Development",
    description:
      "Custom-built websites engineered for performance, credibility, and conversion. Every layout decision is made with your business goals in mind — not aesthetic trends.",
    supports: ["Brand authority", "Mobile-first UX", "Core Web Vitals", "Scalable architecture"],
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="2" y="4" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.25" />
        <path d="M2 8h18" stroke="currentColor" strokeWidth="1.25" />
        <path d="M6 6h.01M8.5 6h.01M11 6h.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M6 12l2.5 2L6 16M11 16h5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Conversion Strategy",
    description:
      "We map your entire visitor journey and restructure pages around a single goal: turning traffic into action. Copy, layout, and flow are all aligned to your conversion target.",
    supports: ["Funnel architecture", "CTA hierarchy", "Messaging clarity", "Offer positioning"],
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M4 17L8.5 11L12 14L16 8L20 5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="20" cy="5" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Landing Pages",
    description:
      "High-converting standalone pages built for campaigns, offers, and lead generation. Stripped of distraction, focused entirely on a single call to action.",
    supports: ["Ad campaign alignment", "A/B test ready", "Fast load times", "Lead form integration"],
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="4" y="2" width="14" height="18" rx="2" stroke="currentColor" strokeWidth="1.25" />
        <path d="M8 7h6M8 11h6M8 15h4" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Automation & CRM Integration",
    description:
      "Connect your website directly to your sales pipeline. Leads are captured, qualified, tagged, and routed automatically — so your team focuses on closing, not chasing.",
    supports: ["CRM sync", "Email sequences", "Lead tagging", "Pipeline automation"],
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="5" cy="11" r="2.5" stroke="currentColor" strokeWidth="1.25" />
        <circle cx="17" cy="5" r="2.5" stroke="currentColor" strokeWidth="1.25" />
        <circle cx="17" cy="17" r="2.5" stroke="currentColor" strokeWidth="1.25" />
        <path d="M7.5 11h4l3-4.5M11.5 11l3 4.5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    number: "05",
    title: "AI Chatbot Systems",
    description:
      "Deploy intelligent chat systems that qualify leads, answer common questions, and initiate booking flows — 24 hours a day, before your team is ever involved.",
    supports: ["Lead qualification", "FAQ automation", "Booking integration", "Handoff to CRM"],
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="3" y="5" width="16" height="11" rx="2" stroke="currentColor" strokeWidth="1.25" />
        <path d="M7 17l-2 2M15 17l2 2" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
        <path d="M8 10h.01M11 10h.01M14 10h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    number: "06",
    title: "SEO Infrastructure",
    description:
      "Technical SEO built into the foundation of every site. Fast load times, clean architecture, structured data, and on-page optimization that compounds over time.",
    supports: ["Core Web Vitals", "Structured data", "On-page SEO", "Site architecture"],
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.25" />
        <path d="M15.5 15.5L20 20" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
        <path d="M10 6v4l3 3" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
      </svg>
    ),
  },
];

/* ─── Flow Steps ─────────────────────────────────────────────────────────────── */

const FLOW = [
  { label: "Traffic",      sub: "Paid, organic, referral" },
  { label: "Website",      sub: "Authority + clarity"     },
  { label: "Lead Capture", sub: "Forms, chat, offers"     },
  { label: "Automation",   sub: "CRM, email, nurture"     },
  { label: "Conversion",   sub: "Booked, bought, signed"  },
];

/* ─── Page ───────────────────────────────────────────────────────────────────── */

export default function ServicesPage() {
  return (
    <PageLayout>

      {/* ── Section 1: Hero ── */}
      <PageHero
        eyebrow="Services"
        headline="High-Performance Web Systems for Serious Businesses"
        sub="Every service we offer is designed to improve clarity, conversion, and growth."
        align="center"
      />

      {/* ── Section 2: Services Grid ── */}
      <section className="relative section bg-base section-sep overflow-hidden">

        <div className="absolute top-0 inset-x-0 h-px"
          style={{ background: "linear-gradient(to right, transparent, rgba(255,255,255,0.06), transparent)" }}
          aria-hidden="true" />

        <div className="container-site">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
            variants={staggerContainer(0.08, 0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            {SERVICES.map((s) => (
              <motion.div
                key={s.number}
                variants={staggerItem}
                className={cn(
                  "group relative flex flex-col gap-5 p-7 rounded-2xl",
                  "border bg-[#181818] shadow-[0_1px_3px_rgba(0,0,0,0.35),0_4px_12px_rgba(0,0,0,0.2)]",
                  "hover:border-[rgba(32,160,32,0.2)] hover:-translate-y-1",
                  "transition-all duration-300 overflow-hidden"
                )}
              >
                {/* Hover glow */}
                <div className="absolute top-0 right-0 w-40 h-40 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: "radial-gradient(ellipse, rgba(32,160,32,0.07), transparent)" }}
                  aria-hidden="true" />

                {/* Top row */}
                <div className="flex items-start justify-between">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg text-[#6B6B6B] group-hover:text-[#20A020] transition-colors duration-300"
                    style={{ backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}>
                    {s.icon}
                  </div>
                  <span className="font-mono text-[10px] font-medium tracking-widest text-[#3D3D3D]">
                    {s.number}
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-col gap-2.5 flex-1">
                  <h3 className="font-sans font-semibold text-white text-base tracking-tight leading-snug">
                    {s.title}
                  </h3>
                  <p className="text-[#6B6B6B] text-sm leading-relaxed">
                    {s.description}
                  </p>
                </div>

                {/* Supports list */}
                <div className="pt-4 border-t border-white/[0.05]">
                  <p className="text-[10px] font-semibold uppercase tracking-widest text-[#3D3D3D] mb-3">
                    Supports
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {s.supports.map((tag) => (
                      <span key={tag}
                        className="text-[11px] font-medium px-2.5 py-1 rounded-md"
                        style={{
                          backgroundColor: "rgba(255,255,255,0.03)",
                          border: "1px solid rgba(255,255,255,0.06)",
                          color: "#9A9A9A",
                        }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom accent on hover */}
                <div className="absolute bottom-0 inset-x-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: "linear-gradient(to right, transparent, rgba(32,160,32,0.35), transparent)" }}
                  aria-hidden="true" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Section 3: Systems Thinking ── */}
      <section className="relative section bg-raised section-sep overflow-hidden">

        <div className="absolute top-0 inset-x-0 h-px"
          style={{ background: "linear-gradient(to right, transparent, rgba(32,160,32,0.2), transparent)" }}
          aria-hidden="true" />

        {/* Center glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full blur-3xl pointer-events-none opacity-[0.04]"
          style={{ backgroundColor: "#20A020" }} aria-hidden="true" />

        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

            {/* Left — Copy */}
            <motion.div
              className="lg:col-span-4 flex flex-col gap-6"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportConfig}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="eyebrow">Systems Thinking</p>
              <h2 className="font-display text-white text-balance"
                style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", letterSpacing: "-0.03em", lineHeight: "1.1" }}>
                The Website Is Only One Part of the System.
              </h2>
              <p className="text-[#6B6B6B] text-sm leading-relaxed">
                Your site should not operate in isolation. It should support lead capture,
                follow-up, trust-building, booking flow, and long-term scalability — all
                working together as a single revenue engine.
              </p>
              <div className="w-10 h-px" style={{ backgroundColor: "#20A020" }} />
            </motion.div>

            {/* Right — Flow diagram */}
            <motion.div
              className="lg:col-span-8"
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewportConfig}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            >
              {/* Desktop: horizontal flow */}
              <div className="hidden md:flex items-center justify-between gap-2">
                {FLOW.map((step, i) => (
                  <div key={step.label} className="flex items-center flex-1">
                    {/* Node */}
                    <motion.div
                      className="flex-1 flex flex-col items-center gap-3 group"
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={viewportConfig}
                      transition={{ duration: 0.5, delay: i * 0.1 + 0.2 }}
                    >
                      {/* Circle */}
                      <div className={cn(
                        "flex items-center justify-center w-12 h-12 rounded-full border-2 transition-all duration-300",
                        i === 4
                          ? "border-[#20A020] bg-[rgba(32,160,32,0.1)]"
                          : "border-white/[0.1] bg-[#1E1E1E]"
                      )}>
                        <span className="text-[10px] font-bold font-mono"
                          style={{ color: i === 4 ? "#20A020" : "#6B6B6B" }}>
                          0{i + 1}
                        </span>
                      </div>

                      {/* Label */}
                      <div className="flex flex-col items-center gap-0.5">
                        <span className="text-xs font-semibold text-white text-center whitespace-nowrap">
                          {step.label}
                        </span>
                        <span className="text-[10px] text-[#6B6B6B] text-center whitespace-nowrap">
                          {step.sub}
                        </span>
                      </div>
                    </motion.div>

                    {/* Arrow connector */}
                    {i < FLOW.length - 1 && (
                      <motion.div
                        className="flex-shrink-0 flex items-center justify-center pb-8"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={viewportConfig}
                        transition={{ duration: 0.4, delay: i * 0.1 + 0.4 }}
                      >
                        <svg width="20" height="12" viewBox="0 0 20 12" fill="none">
                          <path d="M0 6h16M12 2l4 4-4 4" stroke="rgba(32,160,32,0.4)" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </motion.div>
                    )}
                  </div>
                ))}
              </div>

              {/* Mobile: vertical flow */}
              <div className="flex md:hidden flex-col gap-0">
                {FLOW.map((step, i) => (
                  <div key={step.label} className="flex items-start gap-4">
                    <div className="flex flex-col items-center">
                      <div className={cn(
                        "flex items-center justify-center w-10 h-10 rounded-full border-2 flex-shrink-0",
                        i === 4 ? "border-[#20A020] bg-[rgba(32,160,32,0.1)]" : "border-white/[0.1] bg-[#1E1E1E]"
                      )}>
                        <span className="text-[10px] font-bold font-mono" style={{ color: i === 4 ? "#20A020" : "#6B6B6B" }}>
                          0{i + 1}
                        </span>
                      </div>
                      {i < FLOW.length - 1 && (
                        <div className="w-px h-8 mt-1" style={{ backgroundColor: "rgba(32,160,32,0.2)" }} />
                      )}
                    </div>
                    <div className="pt-2 pb-6">
                      <p className="text-sm font-semibold text-white">{step.label}</p>
                      <p className="text-xs text-[#6B6B6B] mt-0.5">{step.sub}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* System summary card */}
              <motion.div
                className="mt-10 p-6 rounded-xl border"
                style={{ backgroundColor: "rgba(32,160,32,0.04)", borderColor: "rgba(32,160,32,0.15)" }}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportConfig}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <p className="text-sm text-[#9A9A9A] leading-relaxed">
                  <span className="text-white font-medium">Every Onyx project</span> is built with
                  this full system in mind — not just the visual layer. We engineer the connection
                  between each stage so nothing falls through the gaps.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Section 4: CTA ── */}
      <section className="relative section bg-base section-sep overflow-hidden">

        <div className="absolute top-0 inset-x-0 h-px"
          style={{ background: "linear-gradient(to right, transparent, rgba(32,160,32,0.25), transparent)" }}
          aria-hidden="true" />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full blur-3xl pointer-events-none"
          style={{ background: "radial-gradient(ellipse, rgba(32,160,32,0.05), transparent)" }}
          aria-hidden="true" />

        <div className="container-site">
          <div className="max-w-2xl mx-auto flex flex-col items-center text-center gap-8">

            <motion.div
              className="flex flex-col items-center gap-5"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportConfig}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="eyebrow">Get Started</p>
              <h2 className="font-display text-white text-balance"
                style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)", letterSpacing: "-0.035em", lineHeight: "1.08" }}>
                Need More Than Just Design?
              </h2>
              <p className="text-[#6B6B6B]" style={{ fontSize: "1rem", lineHeight: "1.75", maxWidth: "440px" }}>
                Let's build the system behind the website.
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
                Get Your Free Audit
              </LinkButton>
              <LinkButton href="/contact" variant="secondary" size="lg">
                Talk to Us
              </LinkButton>
            </motion.div>
          </div>
        </div>
      </section>

    </PageLayout>
  );
}
