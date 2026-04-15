import type { Variants, Transition } from "framer-motion";

/* ─── Easing Curves ──────────────────────────────────────────────────────────── */

export const ease = {
  premium:    [0.16, 1, 0.3, 1] as const,
  premiumIn:  [0.7, 0, 1, 0.6] as const,
  premiumOut: [0.16, 1, 0.3, 1] as const,
  smooth:     [0.76, 0, 0.24, 1] as const,
  snappy:     [0.4, 0, 0.2, 1] as const,
} as const;

/* ─── Shared Transitions ─────────────────────────────────────────────────────── */

export const transitions = {
  fast: {
    duration: 0.25,
    ease: ease.premium,
  } satisfies Transition,

  base: {
    duration: 0.45,
    ease: ease.premium,
  } satisfies Transition,

  slow: {
    duration: 0.65,
    ease: ease.premium,
  } satisfies Transition,

  spring: {
    type: "spring",
    damping: 30,
    stiffness: 200,
    mass: 0.8,
  } satisfies Transition,

  springGentle: {
    type: "spring",
    damping: 40,
    stiffness: 120,
    mass: 1,
  } satisfies Transition,
} as const;

/* ─── Reusable Variant Sets ──────────────────────────────────────────────────── */

/**
 * Fade up — standard entrance for most elements.
 * Apply to individual items or as a container.
 */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: transitions.base,
  },
};

/**
 * Fade in — opacity only, no movement.
 */
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: transitions.base,
  },
};

/**
 * Scale in — subtle scale entrance.
 */
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: transitions.base,
  },
};

/**
 * Slide in from left.
 */
export const slideRight: Variants = {
  hidden: { opacity: 0, x: -24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: transitions.base,
  },
};

/**
 * Slide in from right.
 */
export const slideLeft: Variants = {
  hidden: { opacity: 0, x: 24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: transitions.base,
  },
};

/**
 * Stagger container — wraps a list of child elements.
 * Each child uses fadeUp or another variant.
 */
export const staggerContainer = (
  staggerChildren = 0.08,
  delayChildren = 0
): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

/**
 * Stagger item — use inside a staggerContainer.
 */
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: transitions.base,
  },
};

/**
 * Hero headline — dramatic entrance.
 */
export const heroHeadline: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: ease.premium,
    },
  },
};

/**
 * Viewport config — standard for scroll-triggered animations.
 */
export const viewportConfig = {
  once: true,
  margin: "-80px",
} as const;

