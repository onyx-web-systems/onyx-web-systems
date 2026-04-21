"use client";

import { motion } from "framer-motion";
import { viewportConfig } from "@/lib/motion";
import { cn } from "@/lib/utils";

const STEPS = [
  { number: "01", title: "Audit",    description: "Identify friction, weak points, and missed revenue opportunities across your current digital presence." },
  { number: "02", title: "Strategy", description: "Map the structure, offers, and conversion flow that will drive measurable outcomes for your business." },
  { number: "03", title: "Design",   description: "Create a premium interface precisely aligned with your brand, audience, and conversion goals." },
  { number: "04", title: "Build",    description: "Develop a high-performance, mobile-first web system engineered for speed, reliability, and scale." },
  { number: "05", title: "Launch",   description: "Deploy, refine, and position your system for scale — with ongoing support and performance monitoring." },
];

export const ProcessSection = () => (
  <section id="process" className="relative section bg-raised section-sep overflow-hidden">
    <div className="absolute top-0 inset-x-0 h-px"
      style={{ background: "linear-gradient(to right, transparent, rgba(255,255,255,0.06), transparent)" }}
      aria-hidden="true" />

    <div className="container-site">
      <motion.div
        className="flex flex-col gap-4 mb-14"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewportConfig}
        transition={{ duration: 0.65, ease: [0.16,1,0.3,1] }}
      >
        <p className="eyebrow">How It Works</p>
        <h2 className="heading-xl max-w-md">A Systemized Build Process</h2>
        <p className="body-base max-w-sm">
          Every project follows the same disciplined framework — no improvisation,
          no missed steps, no surprises.
        </p>
      </motion.div>

      {/* Steps */}
      <div className="relative">
        {/* Desktop connector line */}
        <div className="hidden lg:block absolute top-[1.375rem] left-0 right-0 h-px"
          style={{ background: "linear-gradient(to right, transparent 2%, rgba(32,160,32,0.18) 10%, rgba(32,160,32,0.18) 90%, transparent 98%)" }}
          aria-hidden="true" />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-6">
          {STEPS.map((step, i) => (
            <motion.div key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportConfig}
              transition={{ duration: 0.55, ease: [0.16,1,0.3,1], delay: i * 0.08 }}
              className="flex flex-col gap-4 group"
            >
              {/* Mobile: side-by-side  / Desktop: stacked */}
              <div className="flex lg:flex-col items-center lg:items-start gap-4">
                <div className={cn(
                  "flex items-center justify-center w-11 h-11 rounded-full border-2 flex-shrink-0 bg-[#111111]",
                  "transition-all duration-300 group-hover:border-[#20A020]"
                )}
                  style={{ borderColor: "rgba(255,255,255,0.1)" }}>
                  <span className="font-mono text-[11px] font-semibold text-[#6B6B6B] group-hover:text-[#20A020] transition-colors duration-300">
                    {step.number}
                  </span>
                </div>
                <h3 className="lg:hidden heading-md">{step.title}</h3>
              </div>
              <h3 className="hidden lg:block heading-md">{step.title}</h3>
              <p className="body-sm">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
