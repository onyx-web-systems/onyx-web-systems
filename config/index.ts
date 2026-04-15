import type { NavLink, Stat } from "@/types";

/* ─── Site Configuration ─────────────────────────────────────────────────────── */

export const siteConfig = {
  name: "Onyx Web Systems",
  tagline: "Built to Convert. Engineered to Scale.",
  description:
    "Onyx Web Systems builds high-performance websites engineered to attract, convert, and automate client acquisition.",
  url: "https://onyxwebsystems.com",
  ogImage: "/og-image.jpg",

  contact: {
    email: "hello@onyxwebsystems.com",
    calendly: "https://calendly.com/onyxwebsystems",
  },

  social: {
    twitter: "https://twitter.com/onyxwebsystems",
    linkedin: "https://linkedin.com/company/onyxwebsystems",
    instagram: "https://instagram.com/onyxwebsystems",
  },
} as const;

/* ─── Navigation ─────────────────────────────────────────────────────────────── */

export const navLinks: NavLink[] = [
  { label: "Services",    href: "/#services" },
  { label: "Work",        href: "/#work" },
  { label: "Process",     href: "/#process" },
  { label: "About",       href: "/about" },
  { label: "Contact",     href: "/contact" },
];

export const footerLinks = {
  company: [
    { label: "About",      href: "/about" },
    { label: "Work",       href: "/#work" },
    { label: "Process",    href: "/#process" },
    { label: "Contact",    href: "/contact" },
  ],
  services: [
    { label: "Web Design",       href: "/#services" },
    { label: "Development",      href: "/#services" },
    { label: "Performance",      href: "/#services" },
    { label: "Conversion CRO",   href: "/#services" },
  ],
  legal: [
    { label: "Privacy Policy",   href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
} as const;

/* ─── Brand Stats ─────────────────────────────────────────────────────────────── */

export const brandStats: Stat[] = [
  { value: "3×",   label: "Average Lead Increase",  description: "vs. previous site" },
  { value: "98",   label: "PageSpeed Score",        description: "Lighthouse performance" },
  { value: "14d",  label: "Average Build Time",     description: "Concept to live" },
  { value: "100%", label: "Client Satisfaction",    description: "Across all projects" },
];

/* ─── Brand Messaging ─────────────────────────────────────────────────────────── */

export const brandMessages = [
  "Not a website. A revenue system.",
  "Built to convert. Engineered to scale.",
  "No templates. No guesswork. Just performance.",
  "High-performance digital infrastructure for serious businesses.",
] as const;

