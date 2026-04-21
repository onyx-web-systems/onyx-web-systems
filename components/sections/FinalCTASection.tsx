"use client";

import { motion } from "framer-motion";
import { LinkButton } from "@/components/ui/Button";
import { viewportConfig } from "@/lib/motion";

export const FinalCTASection = () => (
  <section className="relative section bg-deep section-sep-accent overflow-hidden">
    <div className="absolute top-0 inset-x-0 h-px"
      style={{ background: "linear-gradient(to right, transparent, rgba(32,160,32,0.3), transparent)" }}
      aria-hidden="true" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[380px] rounded-full blur-3xl pointer-events-none"
      style={{ background: "radial-gradient(ellipse, rgba(32,160,32,0.05) 0%, transparent 70%)" }} aria-hidden="true" />
    <div className="absolute inset-0 bg-grid opacity-100 pointer-events-none" aria-hidden="true" />

    <div className="container-site relative z-10">
      <div className="max-w-3xl mx-auto flex flex-col items-center text-center gap-8">

        <motion.div
          className="flex flex-col items-center gap-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
          transition={{ duration: 0.65, ease: [0.16,1,0.3,1] }}
        >
          <p className="eyebrow">Free Website Audit</p>
          <h2 className="display-lg text-balance">
            Stop Guessing. Start Building a Site That Performs.
          </h2>
          <p className="body-lg text-balance" style={{ maxWidth: "500px" }}>
            Get a clear view of what is slowing your site down, what is costing
            you leads, and what to fix first.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row items-center gap-3"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <LinkButton href="/audit" variant="primary" size="lg">
            Get Your Free Website Audit
          </LinkButton>
          <p className="text-xs text-[#6B6B6B] font-medium">
            Free. No commitment. 48-hour turnaround.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-wrap items-center justify-center gap-x-7 gap-y-2.5 pt-5 border-t border-white/[0.06] w-full"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewportConfig}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {["No credit card required","No sales pressure","Actionable insights only"].map((t) => (
            <span key={t} className="flex items-center gap-2 text-xs text-[#6B6B6B]">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <circle cx="6" cy="6" r="6" fill="#20A020" fillOpacity="0.14"/>
                <path d="M3.5 6L5.2 7.8L8.5 4.5" stroke="#20A020" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              {t}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);
