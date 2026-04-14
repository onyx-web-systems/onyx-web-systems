/**
 * Onyx Web Systems — Homepage
 *
 * Page sections are imported here as blocks are delivered.
 *
 * ✅ Block 1 — Architecture, design system, app shell
 * ✅ Block 2 — Header, Footer, site shell
 * ☐  Block 3 — Hero section
 * ☐  Block 4 — Services
 * ☐  Block 5 — Process
 * ☐  Block 6 — Work / Case Studies
 * ☐  Block 7 — Testimonials
 * ☐  Block 8 — Stats / Social proof
 * ☐  Block 9 — CTA
 */

export default function HomePage() {
  return (
    <>
      {/*
       * Sections slot in here as blocks are delivered.
       * Each section is a self-contained component from /components/sections/
       */}

      {/* Temporary visual placeholder — remove once Block 3 (Hero) is added */}
      <div className="min-h-dvh flex flex-col items-center justify-center gap-6 px-6 text-center">
        <p className="eyebrow">Shell Ready</p>
        <h1 className="headline-xl text-white max-w-2xl text-balance">
          Onyx Web Systems
        </h1>
        <p className="body-lg max-w-md">
          Site shell is live. Header, footer, and layout patterns are in place.
          Page sections will be added with each subsequent block.
        </p>
      </div>
    </>
  );
}
