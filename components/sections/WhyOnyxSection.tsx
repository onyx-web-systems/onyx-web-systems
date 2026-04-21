"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { staggerContainer, staggerItem, viewportConfig } from "@/lib/motion";

const PILLARS = [
  {
    icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 1.5L12.5 7H18.5L13.5 10.5L15.5 16.5L10 13L4.5 16.5L6.5 10.5L1.5 7H7.5L10 1.5Z" stroke="currentColor" strokeWidth="1.25" strokeLinejoin="round"/></svg>,
    title: "Premium Execution",
    description: "Every pixel deliberate. Every interaction purposeful. We hold our work to the standard of the world's best digital products — because that's what serious businesses deserve.",
  },
  {
    icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><rect x="2" y="2" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.25"/><rect x="11" y="2" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.25"/><rect x="2" y="11" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.25"/><path d="M14.5 11v7M11 14.5h7" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round"/></svg>,
    title: "Strategic Structure",
    description: "We think about your business model before we touch a design tool. Structure drives conversion — and every layout decision is made with your revenue goals in mind.",
  },
  {
    icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M3 16V9M7.5 16V5M12 16V11M16.5 16V7" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round"/></svg>,
    title: "Built to Scale",
    description: "We build on infrastructure that grows with you. When your traffic doubles, your offer expands, or your team grows — your website is ready.",
  },
];

export const WhyOnyxSection = () => (
  <section className="relative section bg-raised section-sep overflow-hidden">
    <div className="absolute top-0 inset-x-0 h-px"
      style={{ background: "linear-gradient(to right, transparent, rgba(255,255,255,0.06), transparent)" }}
      aria-hidden="true" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full blur-3xl pointer-events-none"
      style={{ background: "radial-gradient(ellipse, rgba(32,160,32,0.03), transparent)" }} aria-hidden="true" />

    <div className="container-site">
      <motion.div
        className="flex flex-col items-center text-center gap-4 mb-14 max-w-xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewportConfig}
        transition={{ duration: 0.65, ease: [0.16,1,0.3,1] }}
      >
        <p className="eyebrow">Why Onyx</p>
        <h2 className="heading-xl text-balance">
          Built for Businesses That Expect More Than Design.
        </h2>
        <p className="body-base max-w-sm">
          We do not build decorative websites. We build digital infrastructure
          designed to support growth, streamline lead flow, and increase
          conversion performance.
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-4"
        variants={staggerContainer(0.1, 0.12)}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
      >
        {PILLARS.map((p) => (
          <motion.div key={p.title} variants={staggerItem}
            className={cn(
              "group relative flex flex-col gap-5 p-7 rounded-2xl",
              "border border-white/[0.09] bg-[#1E1E1E] shadow-[0_1px_3px_rgba(0,0,0,0.4),0_4px_12px_rgba(0,0,0,0.25)]",
              "hover:border-[rgba(32,160,32,0.18)] hover:-translate-y-1",
              "transition-all duration-300 overflow-hidden"
            )}
          >
            <div className="absolute top-0 left-0 w-28 h-28 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{ background: "radial-gradient(ellipse, rgba(32,160,32,0.07), transparent)" }} aria-hidden="true" />

            <div className="flex items-center justify-center w-10 h-10 rounded-xl flex-shrink-0 text-[#6B6B6B] group-hover:text-[#20A020] transition-colors duration-300"
              style={{ backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}>
              {p.icon}
            </div>
            <div className="flex flex-col gap-2.5">
              <h3 className="card-title-lg">{p.title}</h3>
              <p className="body-sm">{p.description}</p>
            </div>
            <div className="absolute bottom-0 inset-x-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: "linear-gradient(to right, transparent, rgba(32,160,32,0.35), transparent)" }} aria-hidden="true" />
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);
