"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { staggerContainer, staggerItem, viewportConfig } from "@/lib/motion";

const PILLARS = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M11 2L13.5 8H20L14.5 11.5L16.5 18L11 14L5.5 18L7.5 11.5L2 8H8.5L11 2Z"
          stroke="currentColor" strokeWidth="1.25" strokeLinejoin="round" />
      </svg>
    ),
    title: "Premium Execution",
    description: "Every pixel deliberate. Every interaction purposeful. We hold our work to the standard of the world's best digital products — because that is what serious businesses deserve.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="3" y="3" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.25" />
        <rect x="12" y="3" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.25" />
        <rect x="3" y="12" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.25" />
        <path d="M15.5 12v7M12 15.5h7" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
      </svg>
    ),
    title: "Strategic Structure",
    description: "We think about your business model before we touch a design tool. Structure drives conversion — and every layout decision is made with your revenue goals in mind.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M4 17L4 9M8.5 17V5M13 17V11M17.5 17V7" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
      </svg>
    ),
    title: "Built to Scale",
    description: "We build on infrastructure that grows with you. When your traffic doubles, your offer expands, or your team grows — your website is ready.",
  },
];

export const WhyOnyxSection = () => (
  <section className="relative py-24 md:py-32 bg-[#0A0A0A] overflow-hidden">

    {/* Top border */}
    <div className="absolute top-0 inset-x-0 h-px"
      style={{ background: "linear-gradient(to right, transparent, rgba(255,255,255,0.06), transparent)" }}
      aria-hidden="true" />

    {/* Center glow */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full blur-3xl pointer-events-none opacity-[0.03]"
      style={{ backgroundColor: "#20A020" }} aria-hidden="true" />

    <div className="container-site">

      {/* Header */}
      <motion.div
        className="flex flex-col items-center text-center gap-6 mb-16 max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewportConfig}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <p className="eyebrow">Why Onyx</p>
        <h2 className="font-display text-white text-balance"
          style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", letterSpacing: "-0.03em", lineHeight: "1.1" }}>
          Built for Businesses That Expect More Than Design.
        </h2>
        <p className="text-[#6B6B6B]" style={{ fontSize: "0.9375rem", lineHeight: "1.75", maxWidth: "520px" }}>
          We do not build decorative websites. We build digital infrastructure designed to
          support growth, streamline lead flow, and increase conversion performance.
        </p>
      </motion.div>

      {/* Pillars */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-5"
        variants={staggerContainer(0.12, 0.15)}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
      >
        {PILLARS.map((p) => (
          <motion.div
            key={p.title}
            variants={staggerItem}
            className={cn(
              "group relative flex flex-col gap-6 p-8 rounded-2xl",
              "border border-white/[0.06] bg-[#111111]",
              "hover:border-[rgba(32,160,32,0.2)] hover:-translate-y-1",
              "transition-all duration-300 overflow-hidden"
            )}
          >
            {/* Hover corner glow */}
            <div className="absolute top-0 left-0 w-32 h-32 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{ background: "radial-gradient(ellipse, rgba(32,160,32,0.08), transparent)" }}
              aria-hidden="true" />

            {/* Icon */}
            <div className="flex items-center justify-center w-11 h-11 rounded-xl text-[#6B6B6B] group-hover:text-[#20A020] transition-colors duration-300"
              style={{ backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}>
              {p.icon}
            </div>

            <div className="flex flex-col gap-3">
              <h3 className="font-sans font-semibold text-white text-base tracking-tight">
                {p.title}
              </h3>
              <p className="text-[#6B6B6B] text-sm leading-relaxed">
                {p.description}
              </p>
            </div>

            {/* Bottom accent line — appears on hover */}
            <div className="absolute bottom-0 inset-x-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: "linear-gradient(to right, transparent, rgba(32,160,32,0.4), transparent)" }}
              aria-hidden="true" />
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);
