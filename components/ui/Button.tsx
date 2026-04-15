"use client";

import { forwardRef } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import type { ButtonProps, LinkButtonProps } from "@/types";

/* ─── Variant Styles ─────────────────────────────────────────────────────────── */

const variantStyles = {
  primary:   "btn-primary",
  secondary: "btn-secondary",
  ghost:     "btn-ghost",
} as const;

const sizeStyles = {
  sm:  "px-4 py-2.5 text-xs rounded-md",
  md:  "",   // default — handled by btn-* classes
  lg:  "btn-lg",
} as const;

/* ─── Button ─────────────────────────────────────────────────────────────────── */

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      loading = false,
      disabled = false,
      children,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        disabled={disabled || loading}
        className={cn(
          variantStyles[variant],
          size !== "md" && sizeStyles[size],
          (disabled || loading) && "opacity-50 cursor-not-allowed pointer-events-none",
          className
        )}
        {...props}
      >
        {loading ? (
          <>
            <LoadingSpinner />
            <span>Loading…</span>
          </>
        ) : (
          children
        )}
      </button>
    );
  }
);

Button.displayName = "Button";

/* ─── LinkButton ─────────────────────────────────────────────────────────────── */

export const LinkButton = ({
  variant = "primary",
  size = "md",
  href,
  external = false,
  children,
  className,
  ...props
}: LinkButtonProps) => {
  const classes = cn(
    variantStyles[variant],
    size !== "md" && sizeStyles[size],
    className
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...props}>
      {children}
    </Link>
  );
};

/* ─── Arrow Button ───────────────────────────────────────────────────────────── */

export const ArrowButton = ({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) => (
  <Link href={href} className={cn("btn-ghost group", className)}>
    {children}
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      className="transition-transform duration-200 ease-premium group-hover:translate-x-0.5"
      aria-hidden="true"
    >
      <path
        d="M3 8H13M13 8L9 4M13 8L9 12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </Link>
);

/* ─── Loading Spinner ────────────────────────────────────────────────────────── */

const LoadingSpinner = () => (
  <svg
    className="animate-spin h-4 w-4"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
    />
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
    />
  </svg>
);
