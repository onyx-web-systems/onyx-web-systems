import type { ReactNode, HTMLAttributes, AnchorHTMLAttributes } from "react";

export interface WithChildren {
  children: ReactNode;
}

export interface WithClassName {
  className?: string;
}

export interface BaseProps extends WithChildren, WithClassName {}

export interface NavLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  loading?: boolean;
  disabled?: boolean;
  children: ReactNode;
  className?: string;
}

export interface LinkButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  href: string;
  external?: boolean;
  children: ReactNode;
  className?: string;
}

export interface Stat {
  value: string;
  label: string;
  description?: string;
}

export type AnimationVariant = "fadeUp" | "fadeIn" | "scaleIn" | "slideRight" | "slideLeft";
export interface SectionProps {
  id?: string;
  className?: string;
  children?: ReactNode;
}
