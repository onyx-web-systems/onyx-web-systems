import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { cn } from "@/lib/utils";

/* ─── Footer Nav ─────────────────────────────────────────────────────────────── */

const FOOTER_NAV = [
  { label: "Home",       href: "/" },
  { label: "Services",   href: "/#services" },
  { label: "Pricing",    href: "/#pricing" },
  { label: "Free Audit", href: "/audit" },
  { label: "Contact",    href: "/contact" },
] as const;

const SOCIAL_LINKS = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/company/onyxwebsystems",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "X / Twitter",
    href: "https://twitter.com/onyxwebsystems",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://instagram.com/onyxwebsystems",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect width="20" height="20" x="2" y="2" rx="5" />
        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
    ),
  },
] as const;

/* ─── Footer ─────────────────────────────────────────────────────────────────── */

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden" style={{ backgroundColor: "#000000", borderTop: "1px solid rgba(255,255,255,0.09)" }}>

      {/* Subtle top accent gradient */}
      <div
        className="absolute top-0 inset-x-0 h-px pointer-events-none"
        style={{ background: "linear-gradient(to right, transparent, rgba(32,160,32,0.35), transparent)" }}
        aria-hidden="true"
      />

      {/* Main content */}
      <div className="container-site py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">

          {/* ── Brand column ───────────────────────────── */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <Logo size="md" />

            <p className="text-sm text-[#6B6B6B] leading-relaxed max-w-[320px]">
              Onyx Web Systems builds high-performance websites engineered to
              attract, convert, and automate client acquisition.
            </p>

            {/* Domain */}
            <p className="text-xs font-medium text-[#3D3D3D] tracking-wider uppercase">
              onyxwebsystems.com
            </p>

            {/* Social links */}
            <div className="flex items-center gap-3">
              {SOCIAL_LINKS.map((s) => (
                <SocialButton key={s.label} href={s.href} label={s.label}>
                  {s.icon}
                </SocialButton>
              ))}
            </div>
          </div>

          {/* Spacer on large */}
          <div className="hidden lg:block lg:col-span-1" aria-hidden="true" />

          {/* ── Nav column ─────────────────────────────── */}
          <div className="lg:col-span-3 flex flex-col gap-5">
            <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-[#3D3D3D]">
              Navigation
            </h3>
            <ul className="flex flex-col gap-3" role="list">
              {FOOTER_NAV.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#6B6B6B] hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Contact column ─────────────────────────── */}
          <div className="lg:col-span-3 flex flex-col gap-5">
            <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-[#3D3D3D]">
              Contact
            </h3>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:hello@onyxwebsystems.com"
                className="text-sm text-[#6B6B6B] hover:text-[#20A020] transition-colors duration-200"
              >
                hello@onyxwebsystems.com
              </a>
              <Link
                href="/audit"
                className={cn(
                  "inline-flex items-center gap-2",
                  "text-sm font-medium text-[#20A020]",
                  "hover:text-white transition-colors duration-200",
                  "group"
                )}
              >
                Get a Free Audit
                <svg
                  width="13" height="13" viewBox="0 0 13 13" fill="none"
                  className="transition-transform duration-200 group-hover:translate-x-0.5"
                  aria-hidden="true"
                >
                  <path d="M2.5 6.5H10.5M10.5 6.5L7 3M10.5 6.5L7 10" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ──────────────────────────────────── */}
      <div className="border-t" style={{ borderColor: "rgba(255,255,255,0.07)" }}>
        <div className="container-site py-5 flex flex-col sm:flex-row items-center justify-between gap-4">

          <p className="text-xs text-[#3D3D3D] tracking-wide">
            © {year} Onyx Web Systems. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="text-xs text-[#3D3D3D] hover:text-[#6B6B6B] transition-colors duration-200"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-xs text-[#3D3D3D] hover:text-[#6B6B6B] transition-colors duration-200"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

/* ─── Social Button ──────────────────────────────────────────────────────────── */

const SocialButton = ({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className={cn(
      "flex items-center justify-center w-8 h-8 rounded-lg",
      "bg-white/[0.03] border border-white/[0.06] text-[#6B6B6B]",
      "hover:bg-white/[0.06] hover:border-white/[0.12] hover:text-white",
      "transition-all duration-200"
    )}
  >
    {children}
  </a>
);
