"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { PageLayout } from "@/components/layout/PageLayout";
import { cn } from "@/lib/utils";
import { staggerContainer, staggerItem, viewportConfig } from "@/lib/motion";

/* ─── What We Review ─────────────────────────────────────────────────────────── */

const REVIEW_ITEMS = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="2" y="3" width="16" height="14" rx="2" stroke="currentColor" strokeWidth="1.25" />
        <path d="M6 8h8M6 11h5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
      </svg>
    ),
    title: "Site Structure",
    description:
      "We review your page hierarchy, navigation logic, and information architecture to identify where visitors lose clarity or drop off.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M4 16L8 10l3.5 3L15 6l3 4" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="17" cy="5" r="1.5" fill="currentColor" />
      </svg>
    ),
    title: "Conversion Flow",
    description:
      "We audit your calls to action, offer clarity, and path to conversion — flagging every point where a visitor could convert but doesn't.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.25" />
        <path d="M10 6v4l3 3" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
      </svg>
    ),
    title: "Performance Issues",
    description:
      "Load speed, Core Web Vitals, image optimization, and mobile rendering are assessed against industry benchmarks for conversion-critical performance.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M4 10h3l2-6 3 12 2-6h2" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Missed Lead Opportunities",
    description:
      "We identify gaps in your lead capture — missing forms, no follow-up triggers, weak offer positioning — and quantify what they're likely costing you.",
  },
];

/* ─── Page ───────────────────────────────────────────────────────────────────── */

export default function AuditPage() {
  const formRef = useRef<HTMLElement>(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <PageLayout>

      {/* ── Section 1: Hero ── */}
      <section className="relative min-h-[80vh] flex flex-col justify-center overflow-hidden bg-[#0A0A0A] pt-16 pb-20">

        {/* Background */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px]"
            style={{ background: "radial-gradient(ellipse at center, rgba(32,160,32,0.06) 0%, transparent 70%)" }} />
          <div className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
              backgroundSize: "56px 56px",
            }} />
          <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-[#0A0A0A] to-transparent" />
          <div className="absolute top-0 inset-x-0 h-px"
            style={{ background: "linear-gradient(to right, transparent, rgba(32,160,32,0.35), transparent)" }} />
        </div>

        <div className="container-site relative z-10">
          <div className="max-w-3xl mx-auto flex flex-col items-center text-center gap-8">

            <motion.p
              className="eyebrow"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              Free Website Audit
            </motion.p>

            <motion.h1
              className="font-display text-white text-balance"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", letterSpacing: "-0.04em", lineHeight: "1.0" }}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            >
              Get a Free Website Performance Audit
            </motion.h1>

            <motion.p
              className="text-[#9A9A9A] text-balance"
              style={{ fontSize: "clamp(1rem, 1.5vw, 1.125rem)", lineHeight: "1.75", maxWidth: "520px" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            >
              Find out what is slowing your site down, weakening your conversions,
              and costing you leads.
            </motion.p>

            <motion.button
              onClick={scrollToForm}
              className="btn-primary btn-lg group"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
              type="button"
            >
              Request My Free Audit
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                className="transition-transform duration-200 group-hover:translate-y-0.5" aria-hidden="true">
                <path d="M8 3v10M3 8l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.button>

            {/* Trust row */}
            <motion.div
              className="flex flex-wrap items-center justify-center gap-x-7 gap-y-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {["No credit card required", "Delivered within 48 hours", "No sales pressure"].map((t) => (
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
        </div>
      </section>

      {/* ── Section 2: What We Review ── */}
      <section className="relative py-20 md:py-28 overflow-hidden" style={{ backgroundColor: "#0D0D0D" }}>

        <div className="absolute top-0 inset-x-0 h-px"
          style={{ background: "linear-gradient(to right, transparent, rgba(255,255,255,0.06), transparent)" }}
          aria-hidden="true" />

        <div className="container-site">
          <motion.div
            className="flex flex-col gap-4 mb-12 max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportConfig}
            transition={{ duration: 0.7 }}
          >
            <p className="eyebrow">The Audit Covers</p>
            <h2 className="font-display text-white"
              style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", letterSpacing: "-0.03em", lineHeight: "1.1" }}>
              What We'll Review
            </h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
            variants={staggerContainer(0.1, 0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            {REVIEW_ITEMS.map((item) => (
              <motion.div
                key={item.title}
                variants={staggerItem}
                className={cn(
                  "group flex flex-col gap-4 p-6 rounded-xl",
                  "border border-white/[0.06] bg-[#111111]",
                  "hover:border-[rgba(32,160,32,0.2)] hover:-translate-y-0.5",
                  "transition-all duration-300"
                )}
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-lg text-[#6B6B6B] group-hover:text-[#20A020] transition-colors duration-300 flex-shrink-0"
                  style={{ backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}>
                  {item.icon}
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-white font-semibold text-sm">{item.title}</h3>
                  <p className="text-[#6B6B6B] text-xs leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Section 3: Form ── */}
      <section
        ref={formRef}
        id="audit-form"
        className="relative py-20 md:py-28 bg-[#0A0A0A] overflow-hidden"
      >
        <div className="absolute top-0 inset-x-0 h-px"
          style={{ background: "linear-gradient(to right, transparent, rgba(32,160,32,0.2), transparent)" }}
          aria-hidden="true" />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full blur-3xl pointer-events-none opacity-[0.04]"
          style={{ backgroundColor: "#20A020" }} aria-hidden="true" />

        <div className="container-site">
          <div className="max-w-2xl mx-auto">

            <motion.div
              className="flex flex-col gap-4 mb-10 text-center items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportConfig}
              transition={{ duration: 0.7 }}
            >
              <p className="eyebrow">Get Started</p>
              <h2 className="font-display text-white"
                style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", letterSpacing: "-0.03em", lineHeight: "1.1" }}>
                Submit Your Website
              </h2>
              <p className="text-[#6B6B6B] text-sm" style={{ maxWidth: "400px", lineHeight: "1.7" }}>
                Fill in the details below and we'll get back to you within 48 hours
                with a clear, actionable review.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportConfig}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <AuditForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Section 4: Why This Matters ── */}
      <section className="relative py-20 md:py-28 overflow-hidden" style={{ backgroundColor: "#0D0D0D" }}>

        <div className="absolute top-0 inset-x-0 h-px"
          style={{ background: "linear-gradient(to right, transparent, rgba(255,255,255,0.05), transparent)" }}
          aria-hidden="true" />

        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            <motion.div
              className="lg:col-span-5 flex flex-col gap-6"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportConfig}
              transition={{ duration: 0.7 }}
            >
              <p className="eyebrow">Why It Matters</p>
              <h2 className="font-display text-white text-balance"
                style={{ fontSize: "clamp(1.75rem, 3vw, 2.75rem)", letterSpacing: "-0.03em", lineHeight: "1.1" }}>
                Most Businesses Don't Need More Traffic First.
              </h2>
              <p className="text-[#6B6B6B] leading-relaxed" style={{ fontSize: "0.9375rem" }}>
                They need a site that converts the traffic they already have.
              </p>
              <div className="w-10 h-px" style={{ backgroundColor: "#20A020" }} />
            </motion.div>

            {/* Stat cards */}
            <motion.div
              className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4"
              variants={staggerContainer(0.1, 0.15)}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
            >
              {[
                { stat: "96%", label: "of visitors leave without converting on a poorly structured site" },
                { stat: "3s",  label: "is all it takes for a slow site to lose more than half its visitors" },
                { stat: "2×",  label: "more leads on average after a conversion-focused rebuild" },
              ].map((item) => (
                <motion.div
                  key={item.stat}
                  variants={staggerItem}
                  className="flex flex-col gap-3 p-6 rounded-xl border border-white/[0.06] bg-[#111111]"
                >
                  <span className="font-display text-white font-normal"
                    style={{ fontSize: "2.5rem", letterSpacing: "-0.04em", lineHeight: "1" }}
                    aria-label={item.stat}>
                    {item.stat}
                  </span>
                  <p className="text-[#6B6B6B] text-xs leading-relaxed">{item.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Section 5: Final CTA Reinforcement ── */}
      <section className="relative py-20 md:py-28 bg-[#0A0A0A] overflow-hidden">

        <div className="absolute top-0 inset-x-0 h-px"
          style={{ background: "linear-gradient(to right, transparent, rgba(32,160,32,0.25), transparent)" }}
          aria-hidden="true" />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[280px] rounded-full blur-3xl pointer-events-none"
          style={{ background: "radial-gradient(ellipse, rgba(32,160,32,0.05), transparent)" }}
          aria-hidden="true" />

        <div className="container-site">
          <div className="max-w-xl mx-auto flex flex-col items-center text-center gap-7">

            <motion.div
              className="flex flex-col items-center gap-5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportConfig}
              transition={{ duration: 0.7 }}
            >
              <p className="eyebrow">Take the First Step</p>
              <h2 className="font-display text-white text-balance"
                style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)", letterSpacing: "-0.035em", lineHeight: "1.08" }}>
                Get Clear on What to Fix First.
              </h2>
              <p className="text-[#6B6B6B] text-sm leading-relaxed" style={{ maxWidth: "380px" }}>
                A sharper strategy starts with a clearer diagnosis.
              </p>
            </motion.div>

            <motion.button
              onClick={scrollToForm}
              className="btn-primary btn-lg"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportConfig}
              transition={{ duration: 0.6, delay: 0.2 }}
              type="button"
            >
              Request My Free Audit
            </motion.button>
          </div>
        </div>
      </section>

    </PageLayout>
  );
}

/* ─── Audit Form ─────────────────────────────────────────────────────────────── */
/*
 * Form is structured for easy backend integration.
 *
 * TO CONNECT AN EMAIL SERVICE:
 *
 * Option A — Resend (recommended):
 *   1. Install: npm install resend
 *   2. Create app/api/audit/route.ts
 *   3. POST to /api/audit with formData
 *
 * Option B — Formspree:
 *   1. Replace action="" with your Formspree endpoint
 *   2. Add method="POST" to the form element
 *
 * Option C — Any other provider:
 *   The handleSubmit function below is the integration point.
 *   Replace the console.log with your API call.
 */

type FormState = "idle" | "submitting" | "success" | "error";

const AuditForm = () => {
  const [state, setState] = useState<FormState>("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    businessName: "",
    websiteUrl: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState("submitting");

    try {
      /*
       * ── INTEGRATION POINT ──────────────────────────────────────
       * Replace this block with your email service API call.
       *
       * Example with Resend:
       * const res = await fetch("/api/audit", {
       *   method: "POST",
       *   headers: { "Content-Type": "application/json" },
       *   body: JSON.stringify(formData),
       * });
       * if (!res.ok) throw new Error("Failed");
       * ────────────────────────────────────────────────────────────
       */
      await new Promise((res) => setTimeout(res, 1200)); // ← remove when wired
      setState("success");
    } catch {
      setState("error");
    }
  };

  if (state === "success") {
    return (
      <div className="flex flex-col items-center text-center gap-5 py-16 px-8 rounded-2xl border"
        style={{ borderColor: "rgba(32,160,32,0.2)", backgroundColor: "rgba(32,160,32,0.04)" }}>
        <div className="flex items-center justify-center w-14 h-14 rounded-full"
          style={{ backgroundColor: "rgba(32,160,32,0.12)", border: "1px solid rgba(32,160,32,0.25)" }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M5 12L9.5 16.5L19 7" stroke="#20A020" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="font-display text-white text-xl" style={{ letterSpacing: "-0.02em" }}>
            Audit Request Received
          </h3>
          <p className="text-[#6B6B6B] text-sm leading-relaxed" style={{ maxWidth: "320px" }}>
            We'll review your site and send a detailed audit within 48 hours.
            Check your inbox at <span className="text-[#9A9A9A]">{formData.email}</span>.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-5 p-8 rounded-2xl border"
      style={{ borderColor: "rgba(255,255,255,0.08)", backgroundColor: "#111111" }}
      noValidate
    >
      {/* Row 1: Name + Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <FormField
          label="Your Name"
          name="name"
          type="text"
          placeholder="Jane Smith"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <FormField
          label="Email Address"
          name="email"
          type="email"
          placeholder="jane@company.com"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      {/* Row 2: Business + URL */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <FormField
          label="Business Name"
          name="businessName"
          type="text"
          placeholder="Acme Inc."
          value={formData.businessName}
          onChange={handleChange}
          required
        />
        <FormField
          label="Website URL"
          name="websiteUrl"
          type="url"
          placeholder="https://yoursite.com"
          value={formData.websiteUrl}
          onChange={handleChange}
          required
        />
      </div>

      {/* Message */}
      <div className="flex flex-col gap-2">
        <label className="text-xs font-semibold text-[#9A9A9A] uppercase tracking-wider">
          Anything specific you'd like us to focus on?{" "}
          <span className="text-[#3D3D3D] normal-case tracking-normal font-normal">Optional</span>
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="e.g. Our bounce rate is high, or we're getting traffic but no enquiries..."
          rows={4}
          className="input resize-none"
          style={{ lineHeight: "1.6" }}
        />
      </div>

      {/* Error message */}
      {state === "error" && (
        <p className="text-sm text-[#9A9A9A] text-center">
          Something went wrong. Please try again or email us directly at{" "}
          <a href="mailto:hello@onyxwebsystems.com" className="text-[#20A020]">
            hello@onyxwebsystems.com
          </a>
        </p>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={state === "submitting"}
        className={cn(
          "btn-primary btn-lg w-full justify-center mt-2",
          state === "submitting" && "opacity-70 cursor-not-allowed pointer-events-none"
        )}
      >
        {state === "submitting" ? (
          <>
            <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Submitting…
          </>
        ) : (
          "Request My Free Audit"
        )}
      </button>

      <p className="text-center text-xs text-[#3D3D3D]">
        No commitment. No credit card. We'll respond within 48 hours.
      </p>
    </form>
  );
};

/* ─── Form Field ─────────────────────────────────────────────────────────────── */

const FormField = ({
  label,
  name,
  type,
  placeholder,
  value,
  onChange,
  required,
}: {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}) => (
  <div className="flex flex-col gap-2">
    <label htmlFor={name} className="text-xs font-semibold text-[#9A9A9A] uppercase tracking-wider">
      {label}
      {required && <span className="text-[#20A020] ml-1">*</span>}
    </label>
    <input
      id={name}
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      className="input"
      autoComplete={name === "email" ? "email" : name === "name" ? "name" : "off"}
    />
  </div>
);
