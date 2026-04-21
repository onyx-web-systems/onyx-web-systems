"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { LinkButton } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export const HeroSection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "16%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.65], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-[100dvh] flex flex-col overflow-hidden bg-deep">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px]"
          style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(32,160,32,0.08) 0%, transparent 65%)" }} />
        <div className="absolute inset-0 bg-grid" />
        <div className="absolute bottom-0 inset-x-0 h-52 bg-gradient-to-t from-black to-transparent" />
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black to-transparent" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black to-transparent" />
        {/* Top accent */}
        <div className="absolute top-0 inset-x-0 h-px"
          style={{ background: "linear-gradient(to right, transparent, rgba(32,160,32,0.45), transparent)" }} />
      </div>

      {/* Content */}
      <motion.div style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 flex-1 flex items-center pt-24 pb-0">
        <div className="container-site w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-16 items-center">

            {/* Left */}
            <div className="flex flex-col gap-7">
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, ease: [0.16,1,0.3,1], delay: 0.05 }}
                className="w-fit"
              >
                <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full"
                  style={{ border: "1px solid rgba(32,160,32,0.3)", backgroundColor: "rgba(32,160,32,0.07)" }}>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#20A020] animate-pulse flex-shrink-0" />
                  <span className="text-[10.5px] font-semibold tracking-[0.14em] uppercase text-[#9A9A9A]">
                    High-Performance Web Agency
                  </span>
                </div>
              </motion.div>

              <motion.h1 className="display-xl text-balance"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, ease: [0.16,1,0.3,1], delay: 0.15 }}>
                Not a Website.{" "}
                <span className="block text-gradient-accent">A Revenue System.</span>
              </motion.h1>

              <motion.p className="body-lg max-w-lg"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, ease: [0.16,1,0.3,1], delay: 0.28 }}>
                Onyx Web Systems builds high-performance websites engineered to
                attract, convert, and automate client acquisition.
              </motion.p>

              <motion.div className="flex flex-col sm:flex-row items-start sm:items-center gap-3"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.16,1,0.3,1], delay: 0.4 }}>
                <LinkButton href="/audit" variant="primary" size="lg">
                  Get Your Free Website Audit
                </LinkButton>
                <LinkButton href="/#services" variant="secondary" size="lg">
                  Explore Services
                </LinkButton>
              </motion.div>

              <motion.div className="flex flex-wrap items-center gap-x-5 gap-y-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.58 }}>
                {["No templates", "No guesswork", "Results-first"].map((t) => (
                  <span key={t} className="flex items-center gap-1.5 text-xs text-[#6B6B6B] font-medium">
                    <CheckMark />{t}
                  </span>
                ))}
              </motion.div>
            </div>

            {/* Right */}
            <motion.div className="hidden lg:flex items-center justify-center"
              initial={{ opacity: 0, x: 28 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.85, ease: [0.16,1,0.3,1], delay: 0.32 }}>
              <SystemsPanel />
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Stats bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.75 }}
        className="relative z-10 mt-auto"
        style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
        <div className="container-site">
          <div className="grid grid-cols-2 lg:grid-cols-4"
            style={{ borderColor: "rgba(255,255,255,0.07)" }}>
            {[
              { value: "3×",   label: "Average Lead Increase" },
              { value: "98",   label: "PageSpeed Score" },
              { value: "14d",  label: "Average Build Time" },
              { value: "100%", label: "Client Satisfaction" },
            ].map((s, i) => (
              <div key={s.label}
                className={cn("flex flex-col items-center justify-center py-6 px-4 gap-1.5",
                  i > 0 && "border-l")}
                style={{ borderColor: "rgba(255,255,255,0.07)" }}>
                <span className="stat-value">{s.value}</span>
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

const SystemsPanel = () => (
  <div className="relative w-full max-w-[460px]">
    <div className="absolute inset-0 rounded-2xl blur-3xl opacity-[0.12]"
      style={{ background: "radial-gradient(ellipse, #20A020, transparent 70%)" }} aria-hidden="true" />
    <div className="relative rounded-2xl overflow-hidden"
      style={{ backgroundColor: "#0F0F0F", border: "1px solid rgba(255,255,255,0.1)" }}>
      <div className="flex items-center justify-between px-5 py-3"
        style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            {["#FF5F57","#FEBC2E","#28C840"].map((c) => (
              <div key={c} className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: c }} />
            ))}
          </div>
          <span className="text-[10px] font-mono ml-2 tracking-wider" style={{ color: "#404040" }}>onyx.system</span>
        </div>
        <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full tracking-wider"
          style={{ backgroundColor: "rgba(32,160,32,0.13)", color: "#20A020" }}>
          ● LIVE
        </span>
      </div>
      <div className="flex items-center justify-center py-7"
        style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="relative">
          <div className="absolute inset-0 blur-2xl opacity-25 scale-150"
            style={{ background: "radial-gradient(ellipse, #20A020, transparent)" }} aria-hidden="true" />
          <Image src="/logo.png" alt="Onyx Web Systems" width={90} height={90}
            className="relative z-10 object-contain"
            style={{ filter: "drop-shadow(0 0 18px rgba(32,160,32,0.3))" }} />
        </div>
      </div>
      <div className="p-5 flex flex-col gap-4">
        {[
          { label: "Conversion Rate", value: "+340%", bar: 85 },
          { label: "Page Speed",      value: "98/100", bar: 98 },
          { label: "Lead Flow",       value: "Active",  bar: 72, accent: true },
          { label: "Automation",      value: "Running", bar: 60, accent: true },
        ].map((m, i) => (
          <motion.div key={m.label}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.55 + i * 0.08, duration: 0.45, ease: [0.16,1,0.3,1] }}
            className="flex flex-col gap-1.5">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-medium" style={{ color: "#6E6E6E" }}>{m.label}</span>
              <span className="text-[11px] font-semibold" style={{ color: m.accent ? "#20A020" : "#ECECEC" }}>
                {m.value}
              </span>
            </div>
            <div className="h-[3px] rounded-full" style={{ backgroundColor: "rgba(255,255,255,0.06)" }}>
              <motion.div className="h-full rounded-full"
                style={{ backgroundColor: m.accent ? "#20A020" : "rgba(32,160,32,0.65)" }}
                initial={{ width: 0 }}
                animate={{ width: `${m.bar}%` }}
                transition={{ delay: 0.75 + i * 0.1, duration: 0.75, ease: [0.16,1,0.3,1] }} />
            </div>
          </motion.div>
        ))}
      </div>
      <div className="flex flex-wrap gap-1.5 px-5 pb-5">
        {["Next.js","Framer Motion","CRM","AI","Analytics"].map((tag) => (
          <span key={tag} className="text-[10px] font-medium px-2.5 py-1 rounded-md"
            style={{ backgroundColor: "rgba(255,255,255,0.05)", color: "#6E6E6E", border: "1px solid rgba(255,255,255,0.08)" }}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const CheckMark = () => (
  <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
    <circle cx="6.5" cy="6.5" r="6.5" fill="#20A020" fillOpacity="0.14" />
    <path d="M4 6.5L5.8 8.5L9 5" stroke="#20A020" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
