/**
 * Shared page layout patterns for Onyx Web Systems.
 *
 * Usage:
 *   <PageLayout>...</PageLayout>                        full page with header offset
 *   <PageHero eyebrow="..." headline="..." sub="..." /> standard inner-page hero
 *   <ContentSection>...</ContentSection>                standard padded content block
 */

import { cn } from "@/lib/utils";

/* ─── Page Layout ────────────────────────────────────────────────────────────── */
/*
 * Wraps all inner page content.
 * Accounts for the fixed header height via pt-[88px] (header ~72px + 16px air).
 * The homepage is excluded — its HeroSection manages its own top padding.
 */

export const PageLayout = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div className={cn("pt-[88px]", className)}>
    {children}
  </div>
);

/* ─── Page Hero ──────────────────────────────────────────────────────────────── */
/*
 * Standard hero for inner pages (Services, Contact, Audit, etc.)
 * Smaller and more restrained than the homepage Hero block.
 */

export const PageHero = ({
  eyebrow,
  headline,
  sub,
  align = "center",
  className,
}: {
  eyebrow?: string;
  headline: string;
  sub?: string;
  align?: "left" | "center";
  className?: string;
}) => (
  <section
    className={cn(
      "relative py-20 md:py-28 overflow-hidden border-b border-white/[0.06]",
      className
    )}
  >
    {/* Subtle top glow */}
    <div
      className="absolute top-0 inset-x-0 pointer-events-none"
      aria-hidden="true"
      style={{
        height: "1px",
        background: "linear-gradient(to right, transparent, rgba(32,160,32,0.3), transparent)",
      }}
    />

    <div
      className={cn(
        "container-site flex flex-col gap-5",
        align === "center" && "items-center text-center"
      )}
    >
      {eyebrow && (
        <p className="eyebrow">{eyebrow}</p>
      )}

      <h1
        className="headline-lg text-white text-balance max-w-3xl"
        style={{ maxWidth: align === "center" ? "700px" : undefined }}
      >
        {headline}
      </h1>

      {sub && (
        <p
          className="body-lg text-balance"
          style={{ maxWidth: align === "center" ? "560px" : "600px" }}
        >
          {sub}
        </p>
      )}
    </div>
  </section>
);

/* ─── Content Section ────────────────────────────────────────────────────────── */
/*
 * Standard padded section for page body content.
 */

export const ContentSection = ({
  children,
  className,
  size = "base",
  background = "default",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "base" | "lg";
  background?: "default" | "surface" | "transparent";
  id?: string;
}) => {
  const padding = {
    sm:   "py-14 md:py-20",
    base: "py-20 md:py-28",
    lg:   "py-28 md:py-36",
  }[size];

  const bg = {
    default:     "bg-[#0A0A0A]",
    surface:     "bg-[#111111]",
    transparent: "bg-transparent",
  }[background];

  return (
    <section
      id={id}
      className={cn("relative overflow-hidden", padding, bg, className)}
    >
      <div className="container-site">
        {children}
      </div>
    </section>
  );
};

/* ─── Two Column Layout ──────────────────────────────────────────────────────── */
/*
 * Utility for two-column content: text left, visual right (or reversed).
 */

export const TwoColumn = ({
  children,
  reverse = false,
  className,
  gap = "base",
}: {
  children: React.ReactNode;
  reverse?: boolean;
  className?: string;
  gap?: "sm" | "base" | "lg";
}) => {
  const gapClass = {
    sm:   "gap-10 lg:gap-14",
    base: "gap-14 lg:gap-20",
    lg:   "gap-16 lg:gap-28",
  }[gap];

  return (
    <div
      className={cn(
        "grid grid-cols-1 lg:grid-cols-2 items-center",
        gapClass,
        reverse && "lg:[&>*:first-child]:order-last",
        className
      )}
    >
      {children}
    </div>
  );
};

