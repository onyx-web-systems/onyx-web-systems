"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { fadeIn, viewportConfig } from "@/lib/motion";
import type { SectionProps } from "@/types";

interface SectionWrapperProps extends SectionProps {
  size?: "sm" | "base" | "lg" | "xl";
  animate?: boolean;
  background?: "default" | "surface" | "surface-2" | "transparent";
}

const sizeClasses = {
  sm:   "section-sm",
  base: "section",
  lg:   "section-lg",
  xl:   "section-xl",
} as const;

const bgClasses = {
  default:     "bg-onyx-950",
  surface:     "bg-onyx-900",
  "surface-2": "bg-onyx-800",
  transparent: "bg-transparent",
} as const;

export const Section = ({
  id,
  className,
  children,
  size = "base",
  animate = false,
  background = "default",
}: SectionWrapperProps) => {
  const classes = cn(
    sizeClasses[size],
    bgClasses[background],
    "relative overflow-hidden",
    className
  );

  if (animate) {
    return (
      <motion.section
        id={id}
        className={classes}
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
      >
        {children}
      </motion.section>
    );
  }

  return (
    <section id={id} className={classes}>
      {children}
    </section>
  );
};

/* ─── Container ──────────────────────────────────────────────────────────────── */

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  width?: "default" | "narrow" | "wide";
}

const containerWidths = {
  default: "container-site",
  narrow:  "container-narrow",
  wide:    "container-wide",
} as const;

export const Container = ({
  children,
  className,
  width = "default",
}: ContainerProps) => (
  <div className={cn(containerWidths[width], className)}>
    {children}
  </div>
);

/* ─── Eyebrow ────────────────────────────────────────────────────────────────── */

export const Eyebrow = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <p className={cn("eyebrow", className)}>{children}</p>
);

/* ─── Section Header ─────────────────────────────────────────────────────────── */

export const SectionHeader = ({
  eyebrow,
  headline,
  subheadline,
  align = "left",
  className,
}: {
  eyebrow?: string;
  headline: React.ReactNode;
  subheadline?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
}) => (
  <div
    className={cn(
      "space-y-5",
      align === "center" && "text-center items-center flex flex-col",
      className
    )}
  >
    {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
    <h2 className="headline-lg text-balance">{headline}</h2>
    {subheadline && (
      <p
        className={cn(
          "body-lg max-w-prose-tight",
          align === "center" && "mx-auto"
        )}
      >
        {subheadline}
      </p>
    )}
  </div>
);

/* ─── Divider ────────────────────────────────────────────────────────────────── */

export const Divider = ({
  accent = false,
  className,
}: {
  accent?: boolean;
  className?: string;
}) => (
  <div className={cn(accent ? "divider-accent" : "divider", className)} />
);
