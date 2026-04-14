import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // ─── Brand Colors ────────────────────────────────────────────────
      colors: {
        onyx: {
          // Core blacks & charcoals
          950: "#0A0A0A", // near-true black — page background
          900: "#111111", // section backgrounds
          800: "#1A1A1A", // card surfaces
          700: "#222222", // elevated cards
          600: "#2C2C2C", // borders, dividers
          500: "#3D3D3D", // muted borders
          400: "#6B6B6B", // placeholder / disabled text
          300: "#9A9A9A", // secondary text
          200: "#C8C8C8", // body text
          100: "#E8E8E8", // headings on dark
          50:  "#F5F5F5", // near-white
        },
        white: "#FFFFFF",

        // Accent — extracted directly from Onyx Web Systems logo
        // Deep racing green: #20A020 — the orbital ring color
        accent: {
          DEFAULT: "#20A020", // primary logo green (extracted)
          dim:     "#1A831A", // hover / pressed state
          muted:   "#0E480E", // low-opacity fills / backgrounds
          glow:    "rgba(32,160,32,0.15)", // subtle glow behind elements
          border:  "rgba(32,160,32,0.25)", // accent-tinted borders
        },
      },

      // ─── Typography ──────────────────────────────────────────────────
      fontFamily: {
        // Display: editorial weight, used for hero headlines
        display: ["var(--font-display)", "Georgia", "serif"],
        // Sans: clean, modern, used for UI and body
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        // Mono: code snippets, stats, technical callouts
        mono: ["var(--font-mono)", "monospace"],
      },
      fontSize: {
        "2xs": ["0.625rem", { lineHeight: "1rem" }],
        xs:   ["0.75rem",  { lineHeight: "1.125rem" }],
        sm:   ["0.875rem", { lineHeight: "1.375rem" }],
        base: ["1rem",     { lineHeight: "1.625rem" }],
        lg:   ["1.125rem", { lineHeight: "1.75rem" }],
        xl:   ["1.25rem",  { lineHeight: "1.875rem" }],
        "2xl":["1.5rem",   { lineHeight: "2rem" }],
        "3xl":["1.875rem", { lineHeight: "2.375rem" }],
        "4xl":["2.25rem",  { lineHeight: "2.75rem", letterSpacing: "-0.02em" }],
        "5xl":["3rem",     { lineHeight: "3.5rem",  letterSpacing: "-0.03em" }],
        "6xl":["3.75rem",  { lineHeight: "4.25rem", letterSpacing: "-0.03em" }],
        "7xl":["4.5rem",   { lineHeight: "5rem",    letterSpacing: "-0.04em" }],
        "8xl":["6rem",     { lineHeight: "6.5rem",  letterSpacing: "-0.04em" }],
        "9xl":["8rem",     { lineHeight: "8.5rem",  letterSpacing: "-0.05em" }],
      },
      letterSpacing: {
        tightest: "-0.05em",
        tighter:  "-0.03em",
        tight:    "-0.02em",
        normal:   "0em",
        wide:     "0.04em",
        wider:    "0.08em",
        widest:   "0.16em",
      },

      // ─── Spacing & Layout ────────────────────────────────────────────
      spacing: {
        "4.5":  "1.125rem",
        "13":   "3.25rem",
        "15":   "3.75rem",
        "18":   "4.5rem",
        "22":   "5.5rem",
        "26":   "6.5rem",
        "30":   "7.5rem",
        "34":   "8.5rem",
        "38":   "9.5rem",
        "42":   "10.5rem",
        "46":   "11.5rem",
        "50":   "12.5rem",
        "section-sm":  "5rem",
        "section":     "7.5rem",
        "section-lg":  "10rem",
        "section-xl":  "12.5rem",
      },
      maxWidth: {
        "8xl":  "88rem",
        "9xl":  "96rem",
        "10xl": "120rem",
        "site": "1440px",
        "prose-tight": "52ch",
        "prose":       "65ch",
        "prose-wide":  "80ch",
      },

      // ─── Border Radius ───────────────────────────────────────────────
      borderRadius: {
        "sm":  "4px",
        "md":  "8px",
        "lg":  "12px",
        "xl":  "16px",
        "2xl": "20px",
        "3xl": "28px",
        "4xl": "36px",
      },

      // ─── Shadows ─────────────────────────────────────────────────────
      boxShadow: {
        // Elevation shadows (dark-mode optimized)
        "subtle":    "0 1px 3px rgba(0,0,0,0.4), 0 1px 2px rgba(0,0,0,0.3)",
        "card":      "0 4px 16px rgba(0,0,0,0.5), 0 1px 4px rgba(0,0,0,0.3)",
        "card-hover":"0 8px 32px rgba(0,0,0,0.6), 0 2px 8px rgba(0,0,0,0.4)",
        "elevated":  "0 16px 48px rgba(0,0,0,0.6), 0 4px 16px rgba(0,0,0,0.4)",
        "modal":     "0 32px 80px rgba(0,0,0,0.7)",
        // Accent glow shadows
        "accent-sm": "0 0 12px rgba(32,160,32,0.2)",
        "accent-md": "0 0 24px rgba(32,160,32,0.25), 0 0 48px rgba(32,160,32,0.1)",
        "accent-lg": "0 0 40px rgba(32,160,32,0.3), 0 0 80px rgba(32,160,32,0.12)",
        // Inset
        "inner-subtle": "inset 0 1px 2px rgba(0,0,0,0.3)",
      },

      // ─── Animations ──────────────────────────────────────────────────
      transitionTimingFunction: {
        "premium":        "cubic-bezier(0.16, 1, 0.3, 1)",
        "premium-in":     "cubic-bezier(0.7, 0, 1, 0.6)",
        "premium-out":    "cubic-bezier(0.16, 1, 0.3, 1)",
        "premium-inout":  "cubic-bezier(0.76, 0, 0.24, 1)",
      },
      transitionDuration: {
        "250": "250ms",
        "350": "350ms",
        "450": "450ms",
        "600": "600ms",
        "800": "800ms",
        "1000":"1000ms",
        "1200":"1200ms",
      },
      keyframes: {
        "fade-up": {
          "0%":   { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "scale-in": {
          "0%":   { opacity: "0", transform: "scale(0.96)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "slide-right": {
          "0%":   { opacity: "0", transform: "translateX(-16px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "accent-pulse": {
          "0%, 100%": { opacity: "0.6", transform: "scale(1)" },
          "50%":      { opacity: "1",   transform: "scale(1.05)" },
        },
        "shimmer": {
          "0%":   { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "fade-up":      "fade-up 0.6s cubic-bezier(0.16,1,0.3,1) forwards",
        "fade-in":      "fade-in 0.5s cubic-bezier(0.16,1,0.3,1) forwards",
        "scale-in":     "scale-in 0.5s cubic-bezier(0.16,1,0.3,1) forwards",
        "slide-right":  "slide-right 0.5s cubic-bezier(0.16,1,0.3,1) forwards",
        "accent-pulse": "accent-pulse 3s ease-in-out infinite",
        "shimmer":      "shimmer 2s linear infinite",
      },

      // ─── Background Images ───────────────────────────────────────────
      backgroundImage: {
        // Noise texture overlay for depth
        "noise": "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E\")",
        // Subtle grid pattern
        "grid-subtle": "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
        // Accent gradient
        "accent-gradient": "linear-gradient(135deg, #3DD68C 0%, #2BAF71 100%)",
        // Radial glow for hero
        "hero-glow": "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(32,160,32,0.08) 0%, transparent 70%)",
        // Dark gradient for section transitions
        "fade-to-black": "linear-gradient(to bottom, transparent, #0A0A0A)",
        "fade-from-black": "linear-gradient(to top, transparent, #0A0A0A)",
      },
      backgroundSize: {
        "grid": "40px 40px",
      },

      // ─── Z-Index ─────────────────────────────────────────────────────
      zIndex: {
        "behind":  "-1",
        "base":    "0",
        "raised":  "10",
        "overlay": "20",
        "dropdown":"30",
        "sticky":  "40",
        "fixed":   "50",
        "modal":   "60",
        "toast":   "70",
        "cursor":  "80",
      },
    },
  },
  plugins: [],
};

export default config;
