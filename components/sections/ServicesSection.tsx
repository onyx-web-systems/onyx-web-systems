"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { staggerContainer, staggerItem, viewportConfig } from "@/lib/motion";

const SERVICES = [
  {
    number: "01",
    title: "High-Performance Website Design",
    description: "Visually sharp, strategically structured websites that establish authority and drive immediate credibility from the first impression.",
    outcomes: ["Premium visual execution","Brand-aligned aesthetics","Mobile-first architecture"],
  },
  {
    number: "02",
    title: "Conversion-Focused User Experience",
    description: "Every element engineered with intent — guiding visitors through a clear path toward your offer, contact, or transaction.",
    outcomes: ["Friction-free navigation","Strategic CTA placement","Persuasive content hierarchy"],
  },
  {
    number: "03",
    title: "Automation + CRM Integration",
    description: "Connect your website directly to your pipeline. Leads captured, tagged, and nurtured automatically without manual intervention.",
    outcomes: ["CRM pipeline sync","Automated follow-up","Lead scoring + tagging"],
  },
  {
    number: "04",
    title: "AI-Powered Engagement Systems",
    description: "Deploy intelligent tools that qualify prospects, answer questions, and initiate conversations 24/7 — before your team is notified.",
    outcomes: ["AI chat + qualification","Smart lead routing","24/7 prospect engagement"],
  },
];

export const ServicesSection = () => (
  <section id="services" className="relative section bg-raised section-sep overflow-hidden">
    <div className="absolute top-0 inset-x-0 h-px"
      style={{ background: "linear-gradient(to right, transparent, rgba(255,255,255,0.06), transparent)" }}
      aria-hidden="true" />
    <div className="absolute top-1/2 -translate-y-1/2 -right-40 w-96 h-96 rounded-full blur-3xl pointer-events-none"
      style={{ background: "radial-gradient(ellipse, rgba(32,160,32,0.04), transparent)" }} aria-hidden="true" />

    <div className="container-site">
      <motion.div
        className="flex flex-col gap-4 mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewportConfig}
        transition={{ duration: 0.65, ease: [0.16,1,0.3,1] }}
      >
        <p className="eyebrow">What We Build</p>
        <h2 className="heading-xl max-w-lg">What We Actually Build</h2>
        <p className="body-base max-w-md">
          Not templates. Not off-the-shelf themes. Purpose-built systems
          engineered around your business goals and conversion targets.
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
        variants={staggerContainer(0.09, 0.1)}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
      >
        {SERVICES.map((s) => (
          <motion.div key={s.number} variants={staggerItem}
            className={cn(
              "group relative flex flex-col gap-5 p-7 rounded-2xl",
              "border border-white/[0.09] bg-[#1E1E1E] shadow-[0_1px_3px_rgba(0,0,0,0.4),0_4px_12px_rgba(0,0,0,0.25)]",
              "hover:border-[rgba(32,160,32,0.18)] hover:-translate-y-1",
              "transition-all duration-300 overflow-hidden"
            )}
          >
            <div className="absolute top-0 right-0 w-40 h-40 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{ background: "radial-gradient(ellipse, rgba(32,160,32,0.07), transparent)" }} aria-hidden="true" />

            <span className="font-mono text-[10px] font-medium tracking-widest text-[#20A020]">{s.number}</span>

            <h3 className="heading-md">{s.title}</h3>

            <p className="body-sm flex-1">{s.description}</p>

            <ul className="flex flex-col gap-2 pt-4 border-t border-white/[0.05]">
              {s.outcomes.map((o) => (
                <li key={o} className="flex items-center gap-2 text-xs text-[#9A9A9A]">
                  <span className="w-1 h-1 rounded-full flex-shrink-0 bg-[#20A020]" />
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
