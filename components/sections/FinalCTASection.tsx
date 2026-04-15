"use client";

import { motion } from "framer-motion";
import { LinkButton } from "@/components/ui/Button";
import { viewportConfig } from "@/lib/motion";

export const FinalCTASection = () => (
  <section className="relative py-24 md:py-36 overflow-hidden"
    style={{ backgroundColor: "#0D0D0D" }}>

    {/* Top border */}
    <div className="absolute top-0 inset-x-0 h-px"
      style={{ background: "linear-gradient(to right, transparent, rgba(32,160,32,0.3), transparent)" }}
      aria-hidden="true" />

    {/* Background glow — centered */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full blur-3xl pointer-events-none"
      style={{ background: "radial-gradient(ellipse, rgba(32,160,32,0.06) 0%, transparent 70%)" }}
      aria-hidden="true" />

    {/* Grid pattern */}
    <div className="absolute inset-0 pointer-events-none opacity-[0.02]"
      style={{
        backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
        backgroundSize: "48px 48px",
      }}
      aria-hidden="true" />

    <div className="container-site relative z-10">
      <div className="max-w-3xl mx-auto flex flex-col items-center text-center gap-10">

        {/* Eyebrow */}
        <motion.p
          className="eyebrow"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          Free Website Audit
        </motion.p>

        {/* Headline */}
        <motion.h2
          className="font-display text-white text-balance"
          style={{ fontSize: "clamp(2.25rem, 5vw, 4rem)", letterSpacing: "-0.04em", lineHeight: "1.05" }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        >
          Stop Guessing. Start Building a Site That Performs.
        </motion.h2>

        {/* Sub */}
        <motion.p
          className="text-[#6B6B6B] text-balance"
          style={{ fontSize: "clamp(1rem, 1.5vw, 1.125rem)", lineHeight: "1.75", maxWidth: "520px" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        >
          Get a clear view of what is slowing your site down, what is costing you leads,
          and what to fix first.
        </motion.p>

        {/* CTA */}
        <motion.div
          className="flex flex-col sm:flex-row items-center gap-4"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
        >
          <LinkButton href="/audit" variant="primary" size="lg">
            Get Your Free Website Audit
          </LinkButton>
          <p className="text-xs text-[#6B6B6B] font-medium">
            Free. No commitment. Delivered within 48 hours.
          </p>
        </motion.div>

        {/* Trust signals */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 pt-4 border-t border-white/[0.06] w-full"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewportConfig}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {[
            "No credit card required",
            "No sales pressure",
            "Actionable insights only",
          ].map((t) => (
            <span key={t} className="flex items-center gap-2 text-xs text-[#6B6B6B]">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <circle cx="6" cy="6" r="6" fill="#20A020" fillOpacity="0.15" />
                <path d="M3.5 6L5.2 7.8L8.5 4.5" stroke="#20A020" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {t}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);
