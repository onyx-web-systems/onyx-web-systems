"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Logo } from "@/components/ui/Logo";
import { LinkButton } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

/* ─── Nav Structure ──────────────────────────────────────────────────────────── */

const NAV_LINKS = [
  { label: "Home",       href: "/" },
  { label: "Services",   href: "/#services" },
  { label: "Pricing",    href: "/#pricing" },
  { label: "Free Audit", href: "/audit" },
  { label: "Contact",    href: "/contact" },
] as const;

/* ─── Header ─────────────────────────────────────────────────────────────────── */

export const Header = () => {
  const [scrolled,   setScrolled]   = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-all duration-500",
          scrolled
            ? "py-3 bg-[#0A0A0A]/85 backdrop-blur-xl border-b border-white/[0.06] shadow-[0_1px_0_0_rgba(255,255,255,0.03)]"
            : "py-5 bg-transparent"
        )}
      >
        <div className="container-site flex items-center justify-between gap-8">
          <Logo size="md" onClick={closeMobile} />

          <nav className="hidden lg:flex items-center gap-1" aria-label="Primary navigation">
            {NAV_LINKS.map((link) => (
              <DesktopNavLink key={link.href} href={link.href}>
                {link.label}
              </DesktopNavLink>
            ))}
          </nav>

          <div className="hidden lg:block flex-shrink-0">
            <LinkButton href="/audit" variant="primary" size="sm">
              Get a Free Audit
            </LinkButton>
          </div>

          <MenuToggle
            open={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
            className="lg:hidden"
          />
        </div>
      </header>

      <MobileDrawer open={mobileOpen} onClose={closeMobile} />
    </>
  );
};

/* ─── Desktop Nav Link ───────────────────────────────────────────────────────── */

const DesktopNavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link
    href={href}
    className="relative px-4 py-2 rounded-md text-sm font-medium text-[#9A9A9A] hover:text-white transition-colors duration-200 group"
  >
    {children}
    <span
      className="absolute bottom-1 left-4 right-4 h-px bg-[#20A020] scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100"
      aria-hidden="true"
    />
  </Link>
);

/* ─── Hamburger Toggle ───────────────────────────────────────────────────────── */

const MenuToggle = ({ open, onClick, className }: { open: boolean; onClick: () => void; className?: string }) => (
  <button
    type="button"
    onClick={onClick}
    aria-label={open ? "Close navigation menu" : "Open navigation menu"}
    aria-expanded={open}
    aria-controls="mobile-nav"
    className={cn(
      "relative flex flex-col justify-center items-center w-10 h-10 rounded-lg -mr-2",
      "text-[#9A9A9A] hover:text-white transition-colors duration-200",
      className
    )}
  >
    <span className={cn("absolute block w-5 h-px bg-current transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]", open ? "rotate-45" : "-translate-y-[5px]")} />
    <span className={cn("absolute block w-5 h-px bg-current transition-all duration-200", open ? "opacity-0 scale-x-0" : "opacity-100")} />
    <span className={cn("absolute block w-5 h-px bg-current transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]", open ? "-rotate-45" : "translate-y-[5px]")} />
  </button>
);

/* ─── Mobile Drawer ──────────────────────────────────────────────────────────── */

const MobileDrawer = ({ open, onClose }: { open: boolean; onClose: () => void }) => (
  <AnimatePresence>
    {open && (
      <>
        <motion.div
          key="backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
          aria-hidden="true"
        />

        <motion.nav
          key="drawer"
          id="mobile-nav"
          role="dialog"
          aria-label="Mobile navigation"
          aria-modal="true"
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
          className="fixed top-0 right-0 bottom-0 z-50 w-[min(320px,90vw)] bg-[#111111] border-l border-white/[0.06] flex flex-col overflow-y-auto lg:hidden"
        >
          {/* Top bar */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-white/[0.06]">
            <Logo size="sm" onClick={onClose} />
            <button
              type="button"
              onClick={onClose}
              aria-label="Close navigation menu"
              className="flex items-center justify-center w-8 h-8 rounded-md text-[#6B6B6B] hover:text-white transition-colors duration-200"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 3L13 13M13 3L3 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          {/* Links */}
          <ul className="flex flex-col flex-1 px-4 py-6 gap-1" role="list">
            {NAV_LINKS.map((link, i) => (
              <motion.li
                key={link.href}
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.055 + 0.12, duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link
                  href={link.href}
                  onClick={onClose}
                  className="flex items-center justify-between px-4 py-3.5 rounded-lg text-[0.9375rem] font-medium text-[#C8C8C8] hover:text-white hover:bg-white/[0.04] transition-all duration-200 group"
                >
                  {link.label}
                  <svg
                    width="14" height="14" viewBox="0 0 14 14" fill="none"
                    className="text-[#3D3D3D] transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-[#20A020]"
                    aria-hidden="true"
                  >
                    <path d="M3 7H11M11 7L7.5 3.5M11 7L7.5 10.5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </motion.li>
            ))}
          </ul>

          {/* CTA */}
          <div className="px-6 pb-8 pt-4 border-t border-white/[0.06]">
            <LinkButton href="/audit" variant="primary" className="w-full justify-center" onClick={onClose}>
              Get a Free Audit
            </LinkButton>
            <p className="mt-4 text-center text-xs text-[#6B6B6B]">
              Free. No commitment. Results guaranteed.
            </p>
          </div>
        </motion.nav>
      </>
    )}
  </AnimatePresence>
);
