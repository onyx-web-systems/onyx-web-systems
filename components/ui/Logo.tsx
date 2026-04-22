import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
}

/* Display widths — increased for maximum visibility */
const sizeMap = {
  sm: { displayW: 56,  displayH: 56 },
  md: { displayW: 80,  displayH: 80 },
  lg: { displayW: 100, displayH: 100 },
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
      {/*
        Logo image.
        The PNG has a black background — we use a slight brightness boost
        and drop-shadow so it reads clearly against dark headers.
        For best results, replace /public/logo.png with a transparent-bg version.
      */}
      <Image
        src="/logo.png"
        alt="Onyx Web Systems"
        width={displayW * 2}
        height={displayH * 2}
        priority
        quality={100}
        className="object-contain flex-shrink-0 rounded-lg"
        style={{
          width: displayW,
          height: displayH,
          filter: "brightness(1.15) drop-shadow(0 2px 8px rgba(0,0,0,0.6))",
        }}
      />

      {/* Wordmark */}
      <span className="flex flex-col leading-none select-none">
        <span
          className="font-sans font-bold text-white tracking-tight"
          style={{
            fontSize: size === "sm" ? "1.125rem" : size === "md" ? "1.375rem" : "1.625rem",
            letterSpacing: "-0.01em",
          }}
        >
          ONYX
        </span>
        <span
          className="font-sans font-semibold uppercase"
          style={{
            fontSize: size === "sm" ? "0.5625rem" : size === "md" ? "0.625rem" : "0.6875rem",
            letterSpacing: "0.2em",
            color: "#C0C0C0",
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
