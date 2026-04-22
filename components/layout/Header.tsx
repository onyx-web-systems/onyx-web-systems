"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Logo } from "@/components/ui/Logo";
import { LinkButton } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

/* ─── Nav Structure ──────────────────────────────────────────────────────────── */

const NAV_LINKS = [
  { label: "Home",       href: "/" },
  { label: "Services",   href: "/services" },
  { label: "Pricing",    href: "/pricing" },
  { label: "Free Audit", href: "/audit" },
] as const;

const WORK_DROPDOWN = {
  label: "Work",
  sections: [
    {
      title: "Expertise",
      items: [
        { label: "Fitness Clubs",        href: "/work/expertise#fitness-clubs" },
        { label: "Cycling Club",         href: "/work/expertise#cycling-club" },
        { label: "Entertainment",        href: "/work/expertise#entertainment" },
        { label: "Nonprofits & Social",  href: "/work/expertise#nonprofits" },
      ],
    },
    {
      title: "Clients",
      items: [
        { label: "BBA Fitness",  href: "https://www.bodiesbyakeem.com/",          external: true },
        { label: "AANGCC",       href: "https://www.allassnogascyclingclub.com/",  external: true },
      ],
    },
    {
      title: "Join Our Team",
      items: [
        { label: "We're Hiring", href: "/work/join-our-team", note: "Creative thinkers & problem solvers" },
      ],
    },
  ],
};

/* ─── Header ─────────────────────────────────────────────────────────────────── */

export const Header = () => {
  const [scrolled,    setScrolled]    = useState(false);
  const [mobileOpen,  setMobileOpen]  = useState(false);
  const [workOpen,    setWorkOpen]    = useState(false);
  const [mobileWork,  setMobileWork]  = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  useEffect(() => { setMobileOpen(false); setWorkOpen(false); }, [pathname]);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setWorkOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const closeMobile = () => { setMobileOpen(false); setMobileWork(false); };

  return (
    <>
      <header className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500",
        scrolled
          ? "py-3 bg-[#141414]/98 backdrop-blur-2xl border-b border-white/[0.1]"
          : "py-4 bg-transparent"
      )}>
        <div className="container-site flex items-center justify-between gap-6">

          <Logo size="lg" onClick={closeMobile} />

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-0.5" aria-label="Primary navigation">

            {/* Standard links */}
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href ||
                (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <Link key={link.href} href={link.href}
                  className={cn(
                    "relative px-3.5 py-2 rounded-lg text-sm font-medium transition-colors duration-200 group",
                    isActive ? "text-white" : "text-[#9A9A9A] hover:text-white"
                  )}
                >
                  {link.label}
                  <span className={cn(
                    "absolute bottom-1 left-3.5 right-3.5 h-px rounded-full transition-all duration-300 bg-[#20A020]",
                    isActive ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100"
                  )} style={{ transformOrigin: "left" }} aria-hidden="true" />
                </Link>
              );
            })}

            {/* Work dropdown */}
            <div ref={dropdownRef} className="relative">
              <button
                type="button"
                onClick={() => setWorkOpen((v) => !v)}
                className={cn(
                  "relative flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-medium transition-colors duration-200 group",
                  workOpen ? "text-white" : "text-[#9A9A9A] hover:text-white"
                )}
                aria-expanded={workOpen}
                aria-haspopup="true"
              >
                Work
                <svg
                  width="12" height="12" viewBox="0 0 12 12" fill="none"
                  className={cn("transition-transform duration-200", workOpen && "rotate-180")}
                >
                  <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              {/* Dropdown panel */}
              <AnimatePresence>
                {workOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.97 }}
                    transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute top-full left-0 mt-2 w-[520px] rounded-2xl overflow-hidden"
                    style={{
                      backgroundColor: "#1A1A1A",
                      border: "1px solid rgba(255,255,255,0.1)",
                      boxShadow: "0 16px 48px rgba(0,0,0,0.6), 0 4px 16px rgba(0,0,0,0.4)",
                    }}
                  >
                    <div className="grid grid-cols-3 gap-0 divide-x divide-white/[0.07]">
                      {WORK_DROPDOWN.sections.map((section) => (
                        <div key={section.title} className="p-5 flex flex-col gap-3">
                          <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#20A020]">
                            {section.title}
                          </p>
                          <ul className="flex flex-col gap-1">
                            {section.items.map((item) => (
                              <li key={item.label}>
                                {'external' in item && item.external ? (
                                  <a
                                    href={item.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={() => setWorkOpen(false)}
                                    className="flex flex-col gap-0.5 px-2.5 py-2 rounded-lg hover:bg-white/[0.05] transition-colors duration-150 group"
                                  >
                                    <span className="text-sm font-medium text-[#C8C8C8] group-hover:text-white transition-colors duration-150">
                                      {item.label}
                                    </span>
                                    <span className="text-[10px] text-[#20A020] font-medium">↗ Visit site</span>
                                  </a>
                                ) : (
                                  <Link
                                    href={item.href}
                                    onClick={() => setWorkOpen(false)}
                                    className="flex flex-col gap-0.5 px-2.5 py-2 rounded-lg hover:bg-white/[0.05] transition-colors duration-150 group"
                                  >
                                    <span className="text-sm font-medium text-[#C8C8C8] group-hover:text-white transition-colors duration-150">
                                      {item.label}
                                    </span>
                                    {'note' in item && item.note && (
                                      <span className="text-[10px] text-[#6B6B6B] leading-tight">{item.note}</span>
                                    )}
                                  </Link>
                                )}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Contact — last item */}
            <Link href="/contact"
              className={cn(
                "relative px-3.5 py-2 rounded-lg text-sm font-medium transition-colors duration-200 group",
                pathname === "/contact" ? "text-white" : "text-[#9A9A9A] hover:text-white"
              )}
            >
              Contact
              <span className={cn(
                "absolute bottom-1 left-3.5 right-3.5 h-px rounded-full transition-all duration-300 bg-[#20A020]",
                pathname === "/contact" ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100"
              )} style={{ transformOrigin: "left" }} aria-hidden="true" />
            </Link>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block flex-shrink-0">
            <LinkButton href="/contact" variant="primary" size="sm">
              Let's Talk
            </LinkButton>
          </div>

          {/* Mobile toggle */}
          <button type="button" onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            className="lg:hidden flex flex-col justify-center items-center w-10 h-10 -mr-2 text-[#9A9A9A] hover:text-white transition-colors duration-200"
          >
            <span className={cn("block w-[18px] h-px bg-current transition-all duration-300",
              mobileOpen ? "rotate-45 translate-y-px" : "-translate-y-[4px]")} />
            <span className={cn("block w-[18px] h-px bg-current transition-all duration-200",
              mobileOpen ? "opacity-0" : "opacity-100")} />
            <span className={cn("block w-[18px] h-px bg-current transition-all duration-300",
              mobileOpen ? "-rotate-45 -translate-y-px" : "translate-y-[4px]")} />
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div key="backdrop"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              transition={{ duration: 0.22 }}
              onClick={closeMobile}
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
              aria-hidden="true" />

            <motion.nav key="drawer"
              id="mobile-nav" role="dialog" aria-label="Mobile navigation" aria-modal="true"
              initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="fixed top-0 right-0 bottom-0 z-50 w-[min(320px,90vw)] bg-[#141414] border-l border-white/[0.08] flex flex-col lg:hidden overflow-y-auto"
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-white/[0.07]">
                <Logo size="sm" onClick={closeMobile} />
                <button type="button" onClick={closeMobile} aria-label="Close menu"
                  className="flex items-center justify-center w-8 h-8 rounded-lg text-[#6B6B6B] hover:text-white transition-colors duration-200">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2 2L12 12M12 2L2 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </button>
              </div>

              {/* Links */}
              <ul className="flex flex-col px-3 py-4 gap-0.5" role="list">
                {NAV_LINKS.map((link, i) => {
                  const isActive = pathname === link.href ||
                    (link.href !== "/" && pathname.startsWith(link.href));
                  return (
                    <motion.li key={link.href}
                      initial={{ opacity: 0, x: 12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 + 0.1, duration: 0.28, ease: [0.16,1,0.3,1] }}
                    >
                      <Link href={link.href} onClick={closeMobile}
                        className={cn(
                          "flex items-center justify-between px-3.5 py-3 rounded-xl text-sm font-medium transition-all duration-200",
                          isActive ? "text-white bg-white/[0.06]" : "text-[#C8C8C8] hover:text-white hover:bg-white/[0.04]"
                        )}
                      >
                        {link.label}
                        <svg width="13" height="13" viewBox="0 0 13 13" fill="none"
                          className={cn("transition-colors duration-200", isActive ? "text-[#20A020]" : "text-[#3D3D3D]")}>
                          <path d="M2.5 6.5H10.5M10.5 6.5L7 3M10.5 6.5L7 10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </Link>
                    </motion.li>
                  );
                })}

                {/* Work accordion */}
                <motion.li
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: NAV_LINKS.length * 0.05 + 0.1, duration: 0.28, ease: [0.16,1,0.3,1] }}
                >
                  <button
                    type="button"
                    onClick={() => setMobileWork((v) => !v)}
                    className="w-full flex items-center justify-between px-3.5 py-3 rounded-xl text-sm font-medium text-[#C8C8C8] hover:text-white hover:bg-white/[0.04] transition-all duration-200"
                  >
                    Work
                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none"
                      className={cn("text-[#3D3D3D] transition-transform duration-200", mobileWork && "rotate-90")}>
                      <path d="M2.5 6.5H10.5M10.5 6.5L7 3M10.5 6.5L7 10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>

                  <AnimatePresence>
                    {mobileWork && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        {WORK_DROPDOWN.sections.map((section) => (
                          <div key={section.title} className="px-3 pt-2 pb-1">
                            <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#20A020] px-2.5 mb-1">
                              {section.title}
                            </p>
                            {section.items.map((item) => (
                              'external' in item && item.external ? (
                                <a key={item.label}
                                  href={item.href}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  onClick={closeMobile}
                                  className="flex items-center justify-between px-2.5 py-2 rounded-lg text-sm text-[#9A9A9A] hover:text-white hover:bg-white/[0.04] transition-all duration-200"
                                >
                                  {item.label}
                                  <span className="text-[10px] text-[#20A020]">↗</span>
                                </a>
                              ) : (
                                <Link key={item.label}
                                  href={item.href}
                                  onClick={closeMobile}
                                  className="flex px-2.5 py-2 rounded-lg text-sm text-[#9A9A9A] hover:text-white hover:bg-white/[0.04] transition-all duration-200"
                                >
                                  {item.label}
                                </Link>
                              )
                            ))}
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.li>

                {/* Contact — last */}
                <motion.li
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: (NAV_LINKS.length + 1) * 0.05 + 0.1, duration: 0.28, ease: [0.16,1,0.3,1] }}
                >
                  <Link href="/contact" onClick={closeMobile}
                    className={cn(
                      "flex items-center justify-between px-3.5 py-3 rounded-xl text-sm font-medium transition-all duration-200",
                      pathname === "/contact" ? "text-white bg-white/[0.06]" : "text-[#C8C8C8] hover:text-white hover:bg-white/[0.04]"
                    )}
                  >
                    Contact
                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none"
                      className={cn("transition-colors duration-200", pathname === "/contact" ? "text-[#20A020]" : "text-[#3D3D3D]")}>
                      <path d="M2.5 6.5H10.5M10.5 6.5L7 3M10.5 6.5L7 10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Link>
                </motion.li>
              </ul>

              {/* Drawer CTA */}
              <div className="mt-auto px-5 pb-7 pt-4 border-t border-white/[0.07]">
                <LinkButton href="/contact" variant="primary" className="w-full justify-center" onClick={closeMobile}>
                  Let's Talk
                </LinkButton>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
