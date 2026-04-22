"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Logo } from "@/components/ui/Logo";
import { LinkButton } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Home",       href: "/" },
  { label: "Services",   href: "/services" },
  { label: "Pricing",    href: "/pricing" },
  { label: "Free Audit", href: "/audit" },
  { label: "Contact",    href: "/contact" },
] as const;

export const Header = () => {
  const [scrolled,   setScrolled]   = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

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

  // Close mobile nav on route change
  useEffect(() => { setMobileOpen(false); }, [pathname]);

  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      <header className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500",
        scrolled
          ? "py-3 bg-[#141414]/98 backdrop-blur-2xl border-b border-white/[0.1]"
          : "py-4 bg-transparent"
      )}>
        <div className="container-site flex items-center justify-between gap-8">

          <Logo size="lg" onClick={closeMobile} />

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-0.5" aria-label="Primary navigation">
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
                  {/* Hover / active underline */}
                  <span className={cn(
                    "absolute bottom-1 left-3.5 right-3.5 h-px rounded-full transition-all duration-300",
                    "bg-[#20A020]",
                    isActive ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100"
                  )} style={{ transformOrigin: "left" }} aria-hidden="true" />
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block flex-shrink-0">
            <LinkButton href="/audit" variant="primary" size="sm">
              Get a Free Audit
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
              transition={{ duration: 0.35, ease: [0.16,1,0.3,1] }}
              className="fixed top-0 right-0 bottom-0 z-50 w-[min(300px,88vw)] bg-[#0F0F0F] border-l border-white/[0.07] flex flex-col lg:hidden"
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-white/[0.06]">
                <Logo size="sm" onClick={closeMobile} />
                <button type="button" onClick={closeMobile} aria-label="Close menu"
                  className="flex items-center justify-center w-8 h-8 rounded-lg text-[#6B6B6B] hover:text-white transition-colors duration-200">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2 2L12 12M12 2L2 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </button>
              </div>

              {/* Links */}
              <ul className="flex flex-col flex-1 px-3 py-4 gap-0.5" role="list">
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
                          isActive
                            ? "text-white bg-white/[0.06]"
                            : "text-[#C8C8C8] hover:text-white hover:bg-white/[0.04]"
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
              </ul>

              {/* Drawer CTA */}
              <div className="px-5 pb-7 pt-3 border-t border-white/[0.06]">
                <LinkButton href="/audit" variant="primary" className="w-full justify-center" onClick={closeMobile}>
                  Get a Free Audit
                </LinkButton>
                <p className="mt-3 text-center text-[11px] text-[#3D3D3D]">
                  Free. No commitment. 48-hour turnaround.
                </p>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
