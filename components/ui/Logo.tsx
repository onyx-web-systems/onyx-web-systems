import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

/* ─── Logo ───────────────────────────────────────────────────────────────────── */
/*
 * Logo usage rules:
 *  - Used in: header (left), footer (brand column), hero mark only
 *  - Minimum clear space: equal to the height of the "O" in ONYX on all sides
 *  - Never distort, rotate, recolor, or add effects outside these definitions
 *  - Always use /public/logo.png (retina: rendered at 2x, displayed at 1x)
 *  - On dark backgrounds only — logo has a dark ground; no light bg usage
 *  - Do not repeat the logo in body copy, cards, or decorative contexts
 *
 * TO REPLACE WITH A TRANSPARENT-BG VERSION:
 *  1. Place new file at /public/logo.png (or logo.svg for vector crispness)
 *  2. If SVG: update src below to "/logo.svg"
 *  3. Adjust width values in sizeMap if aspect ratio differs
 */

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
}

/* Display widths (px) — rendered at 2× for retina sharpness */
const sizeMap = {
  sm: { displayW: 36,  displayH: 36 },
  md: { displayW: 48,  displayH: 48 },
  lg: { displayW: 64,  displayH: 64 },
} as const;

export const Logo = ({
  className,
  size = "md",
  href = "/",
  onClick,
}: LogoProps) => {
  const { displayW, displayH } = sizeMap[size];

  const mark = (
    <span className={cn("flex items-center gap-3", className)}>
      {/* Logo image — 2× source for retina crispness */}
      <Image
        src="/logo.png"
        alt="Onyx Web Systems"
        width={displayW * 2}
        height={displayH * 2}
        priority
        quality={100}
        className="object-contain flex-shrink-0"
        style={{ width: displayW, height: displayH }}
      />

      {/* Wordmark — always shown alongside the mark */}
      <span className="flex flex-col leading-none select-none">
        <span
          className="font-sans font-semibold text-white tracking-tight"
          style={{
            fontSize: size === "sm" ? "0.9375rem" : size === "md" ? "1.0625rem" : "1.25rem",
            letterSpacing: "-0.01em",
          }}
        >
          ONYX
        </span>
        <span
          className="font-sans font-medium text-[#6B6B6B] uppercase"
          style={{
            fontSize: size === "sm" ? "0.4375rem" : size === "md" ? "0.5rem" : "0.5625rem",
            letterSpacing: "0.18em",
          }}
        >
          Web Systems
        </span>
      </span>
    </span>
  );

  if (href) {
    return (
      <Link
        href={href}
        onClick={onClick}
        className="inline-flex items-center rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#20A020] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0A]"
        aria-label="Onyx Web Systems — Return to homepage"
      >
        {mark}
      </Link>
    );
  }

  return <span className="inline-flex items-center">{mark}</span>;
};
