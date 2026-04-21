"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { staggerContainer, staggerItem, viewportConfig } from "@/lib/motion";

/* ─── Contact Options ────────────────────────────────────────────────────────── */

const CONTACT_OPTIONS = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M3 5.5A1.5 1.5 0 014.5 4h11A1.5 1.5 0 0117 5.5v9a1.5 1.5 0 01-1.5 1.5h-11A1.5 1.5 0 013 14.5v-9z"
          stroke="currentColor" strokeWidth="1.25" />
        <path d="M3 6l7 5 7-5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
      </svg>
    ),
    label: "Email",
    value: "hello@onyxwebsystems.com",
    href: "mailto:hello@onyxwebsystems.com",
    note: "We respond within 24 hours",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.25" />
        <path d="M10 6v1.5M10 9.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"
          stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
        <path d="M10 13v1" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
      </svg>
    ),
    label: "Website",
    value: "onyxwebsystems.com",
    href: "https://onyxwebsystems.com",
    note: "You're already here",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.25" />
        <path d="M10 6v4l2.5 2.5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
      </svg>
    ),
    label: "Availability",
    value: "Mon – Fri, 9am – 6pm EST",
    href: null,
    note: "New projects reviewed weekly",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="3" y="4" width="14" height="13" rx="1.5" stroke="currentColor" strokeWidth="1.25" />
        <path d="M3 8h14M7 4V6M13 4V6" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
        <path d="M7 11h2M11 11h2M7 14h2" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
      </svg>
    ),
    label: "Book a Call",
    value: "Schedule a discovery call",
    href: "https://calendly.com/onyxwebsystems",
    note: "30-minute strategy session",
  },
];

/* ─── Project Types ──────────────────────────────────────────────────────────── */

const PROJECT_TYPES = [
  "New Website",
  "Website Redesign",
  "Landing Page",
  "CRM Integration",
  "Full Growth System",
  "Other",
];

const BUDGET_RANGES = [
  "Under $5,000",
  "$5,000 – $8,000",
  "$8,000 – $12,000",
  "$12,000+",
  "Not sure yet",
];

/* ─── Page ───────────────────────────────────────────────────────────────────── */

export default function ContactPage() {
  const formRef = useRef<HTMLElement>(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="pt-[72px]">

      {/* ── Section 1: Hero ── */}
      <section className="relative pt-32 pb-20 md:pb-28 overflow-hidden bg-base">

        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px]"
            style={{ background: "radial-gradient(ellipse at center, rgba(32,160,32,0.05) 0%, transparent 70%)" }} />
          <div className="absolute inset-0 opacity-[0.018]"
            style={{
              backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }} />
          <div className="absolute top-0 inset-x-0 h-px"
            style={{ background: "linear-gradient(to right, transparent, rgba(32,160,32,0.3), transparent)" }} />
          <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#0A0A0A] to-transparent" />
        </div>

        <div className="container-site relative z-10">
          <div className="max-w-3xl">

            <motion.p
              className="eyebrow mb-6"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              Contact
            </motion.p>

            <motion.h1
              className="font-display text-white text-balance mb-7"
              style={{ fontSize: "clamp(2.75rem, 6vw, 5.5rem)", letterSpacing: "-0.04em", lineHeight: "1.0" }}
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            >
              Let's Build Something That Performs.
            </motion.h1>

            <motion.p
              className="text-[#9A9A9A] mb-10"
              style={{ fontSize: "clamp(1rem, 1.5vw, 1.125rem)", lineHeight: "1.75", maxWidth: "520px" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            >
              Tell us about your business, your goals, and what kind of system you need.
            </motion.p>

            <motion.button
              onClick={scrollToForm}
              type="button"
              className="btn-primary btn-lg"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            >
              Start the Conversation
            </motion.button>
          </div>
        </div>
      </section>

      {/* ── Section 2: Contact Options ── */}
      <section className="relative section bg-raised section-sep overflow-hidden">

        <div className="absolute top-0 inset-x-0 h-px"
          style={{ background: "linear-gradient(to right, transparent, rgba(255,255,255,0.06), transparent)" }}
          aria-hidden="true" />

        <div className="container-site">
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
            variants={staggerContainer(0.08, 0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            {CONTACT_OPTIONS.map((option) => (
              <motion.div key={option.label} variants={staggerItem}>
                <ContactCard option={option} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Section 3: Form ── */}
      <section
        ref={formRef}
        id="contact-form"
        className="relative section bg-base section-sep overflow-hidden"
      >
        <div className="absolute top-0 inset-x-0 h-px"
          style={{ background: "linear-gradient(to right, transparent, rgba(32,160,32,0.15), transparent)" }}
          aria-hidden="true" />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full blur-3xl pointer-events-none opacity-[0.035]"
          style={{ backgroundColor: "#20A020" }} aria-hidden="true" />

        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

            {/* Left — context */}
            <motion.div
              className="lg:col-span-4 flex flex-col gap-7 lg:sticky lg:top-32"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportConfig}
              transition={{ duration: 0.7 }}
            >
              <div className="flex flex-col gap-4">
                <p className="eyebrow">Send an Inquiry</p>
                <h2 className="font-display text-white"
                  style={{ fontSize: "clamp(1.75rem, 2.5vw, 2.25rem)", letterSpacing: "-0.03em", lineHeight: "1.1" }}>
                  Tell Us About Your Project
                </h2>
                <p className="text-[#6B6B6B] text-sm leading-relaxed">
                  Share your goals and we'll come back with a clear recommendation
                  — no pressure, no pitch, just a straight conversation.
                </p>
              </div>

              <div className="w-10 h-px" style={{ backgroundColor: "#20A020" }} />

              {/* What happens next */}
              <div className="flex flex-col gap-4">
                <p className="text-xs font-semibold uppercase tracking-widest text-[#3D3D3D]">
                  What Happens Next
                </p>
                {[
                  "We review your submission within 24 hours",
                  "You'll receive a direct reply — no automated sequences",
                  "If there's a fit, we'll schedule a discovery call",
                ].map((step, i) => (
                  <div key={step} className="flex items-start gap-3">
                    <span className="flex items-center justify-center w-5 h-5 rounded-full flex-shrink-0 mt-0.5 text-[10px] font-bold font-mono"
                      style={{ backgroundColor: "rgba(32,160,32,0.12)", color: "#20A020", border: "1px solid rgba(32,160,32,0.2)" }}>
                      {i + 1}
                    </span>
                    <p className="text-xs text-[#6B6B6B] leading-relaxed">{step}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right — Form */}
            <motion.div
              className="lg:col-span-8"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportConfig}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Section 4: Closing CTA ── */}
      <section className="relative section bg-raised section-sep overflow-hidden">

        <div className="absolute top-0 inset-x-0 h-px"
          style={{ background: "linear-gradient(to right, transparent, rgba(32,160,32,0.25), transparent)" }}
          aria-hidden="true" />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[280px] rounded-full blur-3xl pointer-events-none"
          style={{ background: "radial-gradient(ellipse, rgba(32,160,32,0.05), transparent)" }}
          aria-hidden="true" />

        <div className="container-site">
          <div className="max-w-xl mx-auto flex flex-col items-center text-center gap-8">

            <motion.div
              className="flex flex-col items-center gap-5"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportConfig}
              transition={{ duration: 0.7 }}
            >
              <p className="eyebrow">Ready to Move?</p>
              <h2 className="font-display text-white text-balance"
                style={{ fontSize: "clamp(2rem, 4vw, 3rem)", letterSpacing: "-0.035em", lineHeight: "1.08" }}>
                Serious About Results?
              </h2>
              <p className="text-[#6B6B6B]" style={{ fontSize: "1rem", lineHeight: "1.75", maxWidth: "360px" }}>
                Start the conversation.
              </p>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row items-center gap-4"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportConfig}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <button
                type="button"
                onClick={scrollToForm}
                className="btn-primary btn-lg"
              >
                Send Inquiry
              </button>
              <Link href="/audit" className="btn-secondary btn-lg">
                Get a Free Audit First
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
}

/* ─── Contact Card ───────────────────────────────────────────────────────────── */

const ContactCard = ({ option }: {
  option: {
    icon: React.ReactNode;
    label: string;
    value: string;
    href: string | null;
    note: string;
  };
}) => {
  const inner = (
    <div className={cn(
      "group flex flex-col gap-4 p-6 rounded-xl h-full",
      "border bg-[#181818] shadow-[0_1px_3px_rgba(0,0,0,0.35),0_4px_12px_rgba(0,0,0,0.2)]",
      "transition-all duration-300",
      option.href && "hover:border-[rgba(32,160,32,0.2)] hover:-translate-y-0.5 cursor-pointer"
    )}>
      <div className="flex items-center justify-center w-10 h-10 rounded-lg flex-shrink-0 text-[#6B6B6B] group-hover:text-[#20A020] transition-colors duration-300"
        style={{ backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}>
        {option.icon}
      </div>
      <div className="flex flex-col gap-1.5 flex-1">
        <p className="text-[10px] font-semibold uppercase tracking-widest text-[#3D3D3D]">
          {option.label}
        </p>
        <p className="text-sm font-medium text-white leading-snug">
          {option.value}
        </p>
        <p className="text-xs text-[#6B6B6B]">{option.note}</p>
      </div>
      {option.href && (
        <div className="flex items-center gap-1 text-xs font-medium mt-auto"
          style={{ color: "#20A020" }}>
          {option.href.startsWith("mailto") ? "Send email" : option.href.includes("calendly") ? "Book a time" : "Visit site"}
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M2.5 6h7M6.5 3l3 3-3 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      )}
    </div>
  );

  if (option.href) {
    return (
      <a href={option.href}
        target={option.href.startsWith("http") ? "_blank" : undefined}
        rel={option.href.startsWith("http") ? "noopener noreferrer" : undefined}
        className="block h-full">
        {inner}
      </a>
    );
  }

  return <div className="h-full">{inner}</div>;
};

/* ─── Contact Form ───────────────────────────────────────────────────────────── */
/*
 * TO CONNECT EMAIL:
 * Same pattern as the audit form.
 * Create app/api/contact/route.ts and POST to it from handleSubmit.
 */

type FormState = "idle" | "submitting" | "success" | "error";

const ContactForm = () => {
  const [state, setState] = useState<FormState>("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    businessName: "",
    website: "",
    projectType: "",
    budget: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState("submitting");
    try {
      /*
       * ── INTEGRATION POINT ──────────────────────────────────────
       * Replace with your API call:
       * const res = await fetch("/api/contact", {
       *   method: "POST",
       *   headers: { "Content-Type": "application/json" },
       *   body: JSON.stringify(formData),
       * });
       * if (!res.ok) throw new Error("Failed");
       * ────────────────────────────────────────────────────────────
       */
      await new Promise((res) => setTimeout(res, 1200));
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
            Inquiry Sent
          </h3>
          <p className="text-[#6B6B6B] text-sm leading-relaxed" style={{ maxWidth: "320px" }}>
            Thank you, {formData.name}. We'll review your project details and reply directly to{" "}
            <span className="text-[#9A9A9A]">{formData.email}</span> within 24 hours.
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
      {/* Row 1 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <FormField label="Your Name" name="name" type="text"
          placeholder="Jane Smith" value={formData.name} onChange={handleChange} required />
        <FormField label="Email Address" name="email" type="email"
          placeholder="jane@company.com" value={formData.email} onChange={handleChange} required />
      </div>

      {/* Row 2 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <FormField label="Business Name" name="businessName" type="text"
          placeholder="Acme Inc." value={formData.businessName} onChange={handleChange} required />
        <FormField label="Current Website" name="website" type="url"
          placeholder="https://yoursite.com" value={formData.website} onChange={handleChange} />
      </div>

      {/* Row 3 — Selects */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <SelectField label="Project Type" name="projectType"
          options={PROJECT_TYPES} value={formData.projectType} onChange={handleChange} required />
        <SelectField label="Budget Range" name="budget"
          options={BUDGET_RANGES} value={formData.budget} onChange={handleChange} required />
      </div>

      {/* Message */}
      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-xs font-semibold text-[#9A9A9A] uppercase tracking-wider">
          Tell Us About Your Project <span className="text-[#20A020]">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          placeholder="What are you trying to achieve? What's not working today? Any timeline or constraints we should know about?"
          rows={5}
          className="input resize-none"
          style={{ lineHeight: "1.6" }}
        />
      </div>

      {/* Error */}
      {state === "error" && (
        <p className="text-sm text-[#9A9A9A] text-center">
          Something went wrong. Email us directly at{" "}
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
            Sending…
          </>
        ) : "Send Inquiry"}
      </button>

      <p className="text-center text-xs text-[#3D3D3D]">
        We reply to every inquiry personally within 24 hours.
      </p>
    </form>
  );
};

/* ─── Form Field ─────────────────────────────────────────────────────────────── */

const FormField = ({ label, name, type, placeholder, value, onChange, required }: {
  label: string; name: string; type: string; placeholder: string;
  value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; required?: boolean;
}) => (
  <div className="flex flex-col gap-2">
    <label htmlFor={name} className="text-xs font-semibold text-[#9A9A9A] uppercase tracking-wider">
      {label}{required && <span className="text-[#20A020] ml-1">*</span>}
    </label>
    <input id={name} name={name} type={type} placeholder={placeholder}
      value={value} onChange={onChange} required={required} className="input"
      autoComplete={name === "email" ? "email" : name === "name" ? "name" : "off"} />
  </div>
);

/* ─── Select Field ───────────────────────────────────────────────────────────── */

const SelectField = ({ label, name, options, value, onChange, required }: {
  label: string; name: string; options: string[];
  value: string; onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void; required?: boolean;
}) => (
  <div className="flex flex-col gap-2">
    <label htmlFor={name} className="text-xs font-semibold text-[#9A9A9A] uppercase tracking-wider">
      {label}{required && <span className="text-[#20A020] ml-1">*</span>}
    </label>
    <div className="relative">
      <select
        id={name} name={name} value={value} onChange={onChange} required={required}
        className={cn("input appearance-none pr-10 cursor-pointer", !value && "text-[#6B6B6B]")}
      >
        <option value="" disabled>Select an option</option>
        {options.map((o) => (
          <option key={o} value={o} className="bg-[#1A1A1A] text-white">{o}</option>
        ))}
      </select>
      <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-[#6B6B6B]">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M3 5l4 4 4-4" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  </div>
);
