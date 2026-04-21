import { cn } from "@/lib/utils";

/* ─── PageLayout ─────────────────────────────────────────────────────────────── */
export const PageLayout = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div className={cn("pt-[72px]", className)}>
    {children}
  </div>
);

/* ─── PageHero ───────────────────────────────────────────────────────────────── */
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
      "relative bg-[#0A0A0A] overflow-hidden",
      "pt-16 pb-16 md:pt-20 md:pb-20",
      className
    )}
  >
    {/* Top accent */}
    <div className="absolute top-0 inset-x-0 h-px pointer-events-none"
      style={{ background: "linear-gradient(to right, transparent, rgba(32,160,32,0.3), transparent)" }}
      aria-hidden="true" />
    {/* Bottom border */}
    <div className="absolute bottom-0 inset-x-0 h-px bg-white/[0.06]" aria-hidden="true" />
    {/* Subtle bg glow */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
      style={{ background: "radial-gradient(ellipse at center top, rgba(32,160,32,0.04) 0%, transparent 70%)" }}
      aria-hidden="true" />

    <div className={cn(
      "container-site relative z-10 flex flex-col gap-4",
      align === "center" && "items-center text-center"
    )}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h1
        className="display-lg text-balance"
        style={{ maxWidth: align === "center" ? "680px" : "760px" }}
      >
        {headline}
      </h1>
      {sub && (
        <p
          className="body-lg text-balance mt-1"
          style={{ maxWidth: align === "center" ? "520px" : "580px" }}
        >
          {sub}
        </p>
      )}
    </div>
  </section>
);

/* ─── ContentSection ─────────────────────────────────────────────────────────── */
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
  const padding = { sm: "section-sm", base: "section", lg: "section-lg" }[size];
  const bg = { default: "bg-page", surface: "bg-surface", transparent: "bg-transparent" }[background];

  return (
    <section id={id} className={cn("relative overflow-hidden", padding, bg, className)}>
      <div className="container-site">{children}</div>
    </section>
  );
};

/* ─── TwoColumn ──────────────────────────────────────────────────────────────── */
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
    base: "gap-12 lg:gap-20",
    lg:   "gap-14 lg:gap-28",
  }[gap];

  return (
    <div className={cn(
      "grid grid-cols-1 lg:grid-cols-2 items-center",
      gapClass,
      reverse && "lg:[&>*:first-child]:order-last",
      className
    )}>
      {children}
    </div>
  );
};
