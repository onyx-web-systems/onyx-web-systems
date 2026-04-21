"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { staggerContainer, staggerItem, viewportConfig } from "@/lib/motion";

const PROBLEMS = [
  {
    icon: <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M9 1.5L11 7H17L12 10.5L14 16.5L9 13L4 16.5L6 10.5L1 7H7L9 1.5Z" stroke="currentColor" strokeWidth="1.25" strokeLinejoin="round"/></svg>,
    title: "Weak Conversion Structure",
    body: "Pages attract visitors but fail to guide them toward action. No hierarchy, no compelling offer, no clear next step.",
  },
  {
    icon: <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="9" cy="9" r="7.5" stroke="currentColor" strokeWidth="1.25"/><path d="M9 5.5V9L11.5 11.5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round"/></svg>,
    title: "Slow Load Performance",
    body: "Every second of delay costs conversions. Bloated code and unoptimized assets erode trust before the page renders.",
  },
  {
    icon: <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><rect x="2" y="4" width="14" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.25"/><path d="M6 8.5h6M6 11h4" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round"/></svg>,
    title: "No Lead Capture System",
    body: "Traffic arrives and disappears. Without capture mechanisms, you're generating awareness for competitors who convert better.",
  },
  {
    icon: <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><rect x="2" y="2" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.25"/><rect x="10" y="2" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.25"/><rect x="2" y="10" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.25"/><path d="M13 10v6M10 13h6" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round"/></svg>,
    title: "No Follow-Up Automation",
    body: "Leads are captured once and forgotten. Without automated nurture, most of your pipeline goes cold before it converts.",
  },
];

export const ProblemSection = () => (
  <section className="relative section bg-base section-sep overflow-hidden">
    <div className="absolute top-0 inset-x-0 h-px"
      style={{ background: "linear-gradient(to right, transparent, rgba(255,255,255,0.06), transparent)" }}
      aria-hidden="true" />
    <div className="absolute top-1/2 -translate-y-1/2 -left-40 w-80 h-80 rounded-full blur-3xl pointer-events-none"
      style={{ background: "radial-gradient(ellipse, rgba(32,160,32,0.04), transparent)" }} aria-hidden="true" />

    <div className="container-site">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

        {/* Left */}
        <motion.div
          className="lg:col-span-4 flex flex-col gap-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
          transition={{ duration: 0.65, ease: [0.16,1,0.3,1] }}
        >
          <p className="eyebrow">The Problem</p>
          <h2 className="heading-xl text-balance">
            Most Websites Look Fine.{" "}
            <span className="text-[#6B6B6B]">They Just Don't Perform.</span>
          </h2>
          <p className="body-base">
            Too many businesses are losing leads because their website was built
            to exist, not to convert. Weak messaging, poor structure, slow
            performance, and no automation leave money on the table every day.
          </p>
          <div className="w-10 h-px mt-1" style={{ backgroundColor: "#20A020" }} />
        </motion.div>

        {/* Right */}
        <motion.div
          className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4"
          variants={staggerContainer(0.09, 0.15)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {PROBLEMS.map((p) => (
            <motion.div key={p.title} variants={staggerItem}
              className={cn(
                "group flex flex-col gap-4 p-6 rounded-2xl",
                "border border-white/[0.09] bg-[#181818] shadow-[0_1px_3px_rgba(0,0,0,0.35),0_4px_12px_rgba(0,0,0,0.2)]",
                "hover:border-[rgba(32,160,32,0.18)] hover:-translate-y-0.5",
                "transition-all duration-300 overflow-hidden"
              )}
            >
              <div className="flex items-center justify-center w-9 h-9 rounded-lg flex-shrink-0 text-[#6B6B6B] group-hover:text-[#20A020] transition-colors duration-300"
                style={{ backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}>
                {p.icon}
              </div>
              <div className="flex flex-col gap-1.5">
                <h3 className="card-title">{p.title}</h3>
                <p className="body-sm">{p.body}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);
