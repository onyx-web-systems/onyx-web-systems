"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { LinkButton } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export const HeroSection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-[100dvh] flex flex-col overflow-hidden bg-[#0A0A0A]">

      {/* ── Background ── */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Top green radial */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px]"
          style={{ background: "radial-gradient(ellipse at center, rgba(32,160,32,0.06) 0%, transparent 70%)" }} />
        {/* Grid */}
        <div className="absolute inset-0"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }} />
        {/* Bottom fade */}
        <div className="absolute bottom-0 inset-x-0 h-48 bg-gradient-to-t from-[#0A0A0A] to-transparent" />
        {/* Top accent line */}
        <div className="absolute top-0 inset-x-0 h-px"
          style={{ background: "linear-gradient(to right, transparent, rgba(32,160,32,0.4), transparent)" }} />
      </div>

      {/* ── Content ── */}
      <motion.div style={{ y, opacity }} className="relative z-10 flex-1 flex items-center pt-28 pb-16">
        <div className="container-site w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">

            {/* Left — Copy */}
            <div className="flex flex-col gap-8">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                className="inline-flex items-center gap-2.5 w-fit"
              >
                <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full border"
                  style={{ borderColor: "rgba(32,160,32,0.3)", backgroundColor: "rgba(32,160,32,0.06)" }}>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#20A020] animate-pulse" />
                  <span className="text-[11px] font-semibold tracking-[0.14em] uppercase text-[#9A9A9A]">
                    High-Performance Web Agency
                  </span>
                </div>
              </motion.div>

              {/* Headline */}
              <motion.div
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              >
                <h1 className="font-display text-white text-balance leading-[1.0]"
                  style={{ fontSize: "clamp(3rem, 6vw, 5.5rem)", letterSpacing: "-0.04em" }}>
                  Not a Website.{" "}
                  <span className="block" style={{
                    background: "linear-gradient(135deg, #20A020 0%, #3DB83D 50%, #20A020 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}>
                    A Revenue System.
                  </span>
                </h1>
              </motion.div>

              {/* Sub */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
                className="text-[#9A9A9A] leading-relaxed max-w-xl"
                style={{ fontSize: "clamp(1rem, 1.5vw, 1.125rem)" }}
              >
                Onyx Web Systems builds high-performance websites engineered to attract,
                convert, and automate client acquisition.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
                className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
              >
                <LinkButton href="/audit" variant="primary" size="lg">
                  Get Your Free Website Audit
                </LinkButton>
                <LinkButton href="/#services" variant="secondary" size="lg">
                  Explore Services
                </LinkButton>
              </motion.div>

              {/* Trust row */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="flex flex-wrap items-center gap-x-6 gap-y-2"
              >
                {["No templates", "No guesswork", "Results-first"].map((t) => (
                  <span key={t} className="flex items-center gap-1.5 text-xs text-[#6B6B6B] font-medium">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <circle cx="6" cy="6" r="6" fill="#20A020" fillOpacity="0.15" />
                      <path d="M3.5 6L5.2 7.8L8.5 4.5" stroke="#20A020" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {t}
                  </span>
                ))}
              </motion.div>
            </div>

            {/* Right — Systems Visual Panel */}
            <motion.div
              initial={{ opacity: 0, x: 32 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
              className="hidden lg:flex items-center justify-center"
            >
              <SystemsPanel />
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* ── Stats bar ── */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="relative z-10 border-t border-white/[0.06]"
      >
        <div className="container-site">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/[0.06]">
            {[
              { value: "3×",    label: "Average Lead Increase" },
              { value: "98",    label: "PageSpeed Score" },
              { value: "14d",   label: "Average Build Time" },
              { value: "100%",  label: "Client Satisfaction" },
            ].map((s) => (
              <div key={s.label} className="flex flex-col items-center justify-center py-7 px-4 gap-1 group">
                <span className="font-display text-white font-normal leading-none"
                  style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", letterSpacing: "-0.04em" }}>
                  {s.value}
                </span>
                <span className="text-[11px] font-medium tracking-widest uppercase text-[#6B6B6B]">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

/* ── Systems Visual Panel ── */
const SystemsPanel = () => (
  <div className="relative w-full max-w-[480px]">
    {/* Outer glow */}
    <div className="absolute inset-0 rounded-2xl blur-3xl opacity-20"
      style={{ background: "radial-gradient(ellipse, #20A020, transparent 70%)" }} aria-hidden="true" />

    {/* Main panel */}
    <div className="relative rounded-2xl border overflow-hidden"
      style={{ backgroundColor: "#111111", borderColor: "rgba(255,255,255,0.08)" }}>

      {/* Panel header */}
      <div className="flex items-center justify-between px-5 py-3.5 border-b" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            {["#FF5F57", "#FEBC2E", "#28C840"].map((c) => (
              <div key={c} className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: c }} />
            ))}
          </div>
          <span className="text-[11px] text-[#6B6B6B] font-mono ml-2">onyx.system</span>
        </div>
        <span className="text-[10px] font-medium px-2 py-0.5 rounded-full"
          style={{ backgroundColor: "rgba(32,160,32,0.12)", color: "#20A020" }}>
          ● LIVE
        </span>
      </div>

      {/* Logo centered */}
      <div className="flex items-center justify-center py-8 border-b" style={{ borderColor: "rgba(255,255,255,0.04)" }}>
        <div className="relative">
          <div className="absolute inset-0 blur-2xl opacity-30 scale-150"
            style={{ background: "radial-gradient(ellipse, #20A020, transparent)" }} aria-hidden="true" />
          <Image src="/logo.png" alt="Onyx Web Systems" width={100} height={100}
            className="relative z-10 object-contain"
            style={{ filter: "drop-shadow(0 0 20px rgba(32,160,32,0.3))" }} />
        </div>
      </div>

      {/* System metrics */}
      <div className="p-5 flex flex-col gap-3">
        {[
          { label: "Conversion Rate", value: "+340%", bar: 85 },
          { label: "Page Speed",      value: "98/100", bar: 98 },
          { label: "Lead Flow",       value: "Active",  bar: 72, isStatus: true },
          { label: "Automation",      value: "Running", bar: 60, isStatus: true },
        ].map((m, i) => (
          <motion.div
            key={m.label}
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 + i * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-1.5"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs text-[#6B6B6B] font-medium">{m.label}</span>
              <span className="text-xs font-semibold" style={{ color: m.isStatus ? "#20A020" : "#E8E8E8" }}>
                {m.value}
              </span>
            </div>
            <div className="h-1 rounded-full" style={{ backgroundColor: "rgba(255,255,255,0.06)" }}>
              <motion.div
                className="h-full rounded-full"
                style={{ backgroundColor: m.isStatus ? "#20A020" : "rgba(32,160,32,0.7)" }}
                initial={{ width: 0 }}
                animate={{ width: `${m.bar}%` }}
                transition={{ delay: 0.8 + i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom tags */}
      <div className="flex flex-wrap gap-2 px-5 pb-5">
        {["Next.js", "Framer Motion", "CRM", "AI", "Analytics"].map((tag) => (
          <span key={tag} className="text-[10px] font-medium px-2.5 py-1 rounded-md"
            style={{ backgroundColor: "rgba(255,255,255,0.04)", color: "#6B6B6B", border: "1px solid rgba(255,255,255,0.06)" }}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  </div>
);
