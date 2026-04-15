"use client";

import { motion } from "framer-motion";
import { viewportConfig } from "@/lib/motion";
import { cn } from "@/lib/utils";

const STEPS = [
  {
    number: "01",
    title: "Audit",
    description: "Identify friction, weak points, and missed revenue opportunities across your current digital presence.",
  },
  {
    number: "02",
    title: "Strategy",
    description: "Map the structure, offers, and conversion flow that will drive measurable outcomes for your business.",
  },
  {
    number: "03",
    title: "Design",
    description: "Create a premium interface precisely aligned with your brand, audience, and conversion goals.",
  },
  {
    number: "04",
    title: "Build",
    description: "Develop a high-performance, mobile-first web system engineered for speed, reliability, and scale.",
  },
  {
    number: "05",
    title: "Launch",
    description: "Deploy, refine, and position your system for scale — with ongoing support and performance monitoring.",
  },
];

export const ProcessSection = () => (
  <section id="process" className="relative py-24 md:py-32 bg-[#0A0A0A] overflow-hidden">

    {/* Top border */}
    <div className="absolute top-0 inset-x-0 h-px"
      style={{ background: "linear-gradient(to right, transparent, rgba(255,255,255,0.06), transparent)" }}
      aria-hidden="true" />

    <div className="container-site">

      {/* Header */}
      <motion.div
        className="flex flex-col gap-5 mb-20 max-w-xl"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewportConfig}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <p className="eyebrow">How It Works</p>
        <h2 className="font-display text-white"
          style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", letterSpacing: "-0.03em", lineHeight: "1.1" }}>
          A Systemized Build Process
        </h2>
        <p className="text-[#6B6B6B]" style={{ fontSize: "0.9375rem", lineHeight: "1.7" }}>
          Every project follows the same disciplined framework — no improvisation,
          no missed steps, no surprises.
        </p>
      </motion.div>

      {/* Steps — horizontal timeline on desktop */}
      <div className="relative">

        {/* Connecting line (desktop) */}
        <div className="hidden lg:block absolute top-[2.25rem] left-0 right-0 h-px"
          style={{ background: "linear-gradient(to right, transparent, rgba(32,160,32,0.2) 10%, rgba(32,160,32,0.2) 90%, transparent)" }}
          aria-hidden="true" />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-6">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportConfig}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
              className="flex flex-col gap-4 lg:items-start relative group"
            >
              {/* Step dot + number */}
              <div className="flex lg:flex-col items-center lg:items-start gap-4">
                {/* Circle */}
                <div className={cn(
                  "relative flex items-center justify-center w-[2.75rem] h-[2.75rem] rounded-full flex-shrink-0",
                  "border-2 bg-[#0A0A0A]",
                  "transition-all duration-300",
                  "group-hover:border-[#20A020]"
                )}
                  style={{ borderColor: "rgba(255,255,255,0.12)" }}>
                  <span className="font-mono text-xs font-semibold text-[#6B6B6B] group-hover:text-[#20A020] transition-colors duration-300">
                    {step.number}
                  </span>
                  {/* Active dot */}
                  <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ boxShadow: "0 0 16px rgba(32,160,32,0.3)" }} aria-hidden="true" />
                </div>

                {/* Mobile: title next to circle */}
                <h3 className="lg:hidden font-display text-white font-normal text-xl"
                  style={{ letterSpacing: "-0.02em" }}>
                  {step.title}
                </h3>
              </div>

              {/* Desktop: title below circle */}
              <h3 className="hidden lg:block font-display text-white font-normal"
                style={{ fontSize: "1.25rem", letterSpacing: "-0.02em" }}>
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-[#6B6B6B] text-sm leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
