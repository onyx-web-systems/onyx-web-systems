"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { staggerContainer, staggerItem, viewportConfig } from "@/lib/motion";

const SERVICES = [
  {
    number: "01",
    title: "High-Performance Website Design",
    description: "Visually sharp, strategically structured websites that establish authority and drive immediate credibility from the first impression.",
    outcomes: ["Premium visual execution", "Brand-aligned aesthetics", "Mobile-first architecture"],
  },
  {
    number: "02",
    title: "Conversion-Focused User Experience",
    description: "Every element engineered with intent — guiding visitors through a clear path toward your offer, contact, or transaction.",
    outcomes: ["Friction-free navigation", "Strategic CTA placement", "Persuasive content hierarchy"],
  },
  {
    number: "03",
    title: "Automation + CRM Integration",
    description: "Connect your website directly to your pipeline. Leads captured, tagged, and nurtured automatically without manual intervention.",
    outcomes: ["CRM pipeline sync", "Automated follow-up", "Lead scoring + tagging"],
  },
  {
    number: "04",
    title: "AI-Powered Engagement Systems",
    description: "Deploy intelligent engagement tools that qualify prospects, answer questions, and initiate conversations 24/7 — before your team is even notified.",
    outcomes: ["AI chat + qualification", "Smart lead routing", "24/7 prospect engagement"],
  },
];

export const ServicesSection = () => (
  <section id="services" className="relative py-24 md:py-32 overflow-hidden"
    style={{ backgroundColor: "#0D0D0D" }}>

    {/* Top border accent */}
    <div className="absolute top-0 inset-x-0 h-px"
      style={{ background: "linear-gradient(to right, transparent, rgba(32,160,32,0.25), transparent)" }}
      aria-hidden="true" />

    {/* Background right glow */}
    <div className="absolute top-1/2 -translate-y-1/2 -right-40 w-96 h-96 rounded-full blur-3xl pointer-events-none opacity-[0.04]"
      style={{ backgroundColor: "#20A020" }} aria-hidden="true" />

    <div className="container-site">

      {/* Header */}
      <motion.div
        className="flex flex-col gap-5 mb-16 max-w-xl"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewportConfig}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <p className="eyebrow">What We Build</p>
        <h2 className="font-display text-white text-balance"
          style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", letterSpacing: "-0.03em", lineHeight: "1.1" }}>
          What We Actually Build
        </h2>
        <p className="text-[#6B6B6B]" style={{ fontSize: "0.9375rem", lineHeight: "1.7" }}>
          Not templates. Not off-the-shelf themes. Purpose-built systems engineered
          around your business goals and conversion targets.
        </p>
      </motion.div>

      {/* Cards */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-5"
        variants={staggerContainer(0.1, 0.15)}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
      >
        {SERVICES.map((s) => (
          <motion.div
            key={s.number}
            variants={staggerItem}
            className={cn(
              "group relative flex flex-col gap-6 p-8 rounded-2xl",
              "border border-white/[0.06] bg-[#111111]",
              "hover:border-[rgba(32,160,32,0.2)]",
              "transition-all duration-400 hover:-translate-y-1",
              "overflow-hidden"
            )}
          >
            {/* Hover glow */}
            <div className="absolute top-0 right-0 w-48 h-48 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{ background: "radial-gradient(ellipse, rgba(32,160,32,0.08), transparent)" }}
              aria-hidden="true" />

            {/* Number */}
            <span className="font-mono text-[11px] font-medium tracking-widest"
              style={{ color: "#20A020" }}>
              {s.number}
            </span>

            {/* Title */}
            <h3 className="font-display text-white font-normal leading-tight"
              style={{ fontSize: "clamp(1.25rem, 2vw, 1.5rem)", letterSpacing: "-0.02em" }}>
              {s.title}
            </h3>

            {/* Description */}
            <p className="text-[#6B6B6B] text-sm leading-relaxed flex-1">
              {s.description}
            </p>

            {/* Outcomes */}
            <ul className="flex flex-col gap-2 pt-2 border-t border-white/[0.05]">
              {s.outcomes.map((o) => (
                <li key={o} className="flex items-center gap-2.5 text-xs text-[#9A9A9A]">
                  <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: "#20A020" }} />
                  {o}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);
