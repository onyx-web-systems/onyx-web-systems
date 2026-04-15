"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { staggerContainer, staggerItem, viewportConfig } from "@/lib/motion";

const PROBLEMS = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 2L12.5 7.5H18L13.5 11L15.5 17L10 13.5L4.5 17L6.5 11L2 7.5H7.5L10 2Z"
          stroke="currentColor" strokeWidth="1.25" strokeLinejoin="round" />
      </svg>
    ),
    title: "Weak Conversion Structure",
    body: "Pages that attract visitors but fail to guide them toward action. No clear hierarchy, no compelling offer, no next step.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.25" />
        <path d="M10 6V10L13 13" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
      </svg>
    ),
    title: "Slow Load Performance",
    body: "Every second of load time costs conversions. Bloated code, unoptimized assets, and poor infrastructure erode trust before the page even renders.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="3" y="5" width="14" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.25" />
        <path d="M7 9H13M7 12H10" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
      </svg>
    ),
    title: "No Lead Capture System",
    body: "Traffic arrives and disappears. Without intentional capture mechanisms, you are generating awareness for competitors who convert better.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M4 4h5v5H4zM11 4h5v5h-5zM4 11h5v5H4zM13.5 13.5m-2 0a2 2 0 104 0 2 2 0 10-4 0"
          stroke="currentColor" strokeWidth="1.25" strokeLinejoin="round" />
      </svg>
    ),
    title: "No Follow-Up Automation",
    body: "Leads are captured once and forgotten. Without automated nurture, the majority of your pipeline goes cold before it ever converts.",
  },
];

export const ProblemSection = () => (
  <section className="relative py-24 md:py-32 bg-[#0A0A0A] overflow-hidden">

    {/* Subtle left glow */}
    <div className="absolute top-1/2 -translate-y-1/2 -left-32 w-80 h-80 rounded-full blur-3xl pointer-events-none opacity-[0.04]"
      style={{ backgroundColor: "#20A020" }} aria-hidden="true" />

    <div className="container-site">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

        {/* Left — Header */}
        <motion.div
          className="lg:col-span-4 flex flex-col gap-6"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="eyebrow">The Problem</p>
          <h2 className="font-display text-white text-balance leading-tight"
            style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", letterSpacing: "-0.03em" }}>
            Most Websites Look Fine.{" "}
            <span className="text-[#9A9A9A]">They Just Don't Perform.</span>
          </h2>
          <p className="text-[#6B6B6B] leading-relaxed" style={{ fontSize: "0.9375rem" }}>
            Too many businesses are losing leads because their website was built to exist,
            not to convert. Weak messaging, poor structure, slow performance, and no
            automation leave money on the table every day.
          </p>

          {/* Accent line */}
          <div className="w-12 h-px mt-2" style={{ backgroundColor: "#20A020" }} />
        </motion.div>

        {/* Right — Cards */}
        <motion.div
          className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4"
          variants={staggerContainer(0.1, 0.2)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {PROBLEMS.map((p) => (
            <motion.div
              key={p.title}
              variants={staggerItem}
              className={cn(
                "group relative flex flex-col gap-4 p-6 rounded-xl",
                "border border-white/[0.06] bg-[#111111]",
                "hover:border-[rgba(32,160,32,0.2)] hover:-translate-y-0.5",
                "transition-all duration-300"
              )}
            >
              {/* Icon */}
              <div className="flex items-center justify-center w-10 h-10 rounded-lg text-[#6B6B6B] group-hover:text-[#20A020] transition-colors duration-300"
                style={{ backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}>
                {p.icon}
              </div>

              <div className="flex flex-col gap-2">
                <h3 className="text-white font-semibold text-sm tracking-tight">{p.title}</h3>
                <p className="text-[#6B6B6B] text-sm leading-relaxed">{p.body}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);
