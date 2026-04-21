import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you're looking for doesn't exist.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div className="min-h-dvh flex flex-col items-center justify-center bg-[#0A0A0A] px-6 text-center">
      {/* Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(32,160,32,0.05), transparent)" }}
        aria-hidden="true"
      />

      <div className="relative flex flex-col items-center gap-6 max-w-md">
        <span
          className="font-mono text-[10px] font-semibold tracking-widest uppercase"
          style={{ color: "#20A020" }}
        >
          404
        </span>

        <h1
          className="font-display text-white"
          style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", letterSpacing: "-0.04em", lineHeight: "1.05" }}
        >
          Page Not Found
        </h1>

        <p className="text-[#6B6B6B] text-sm leading-relaxed" style={{ maxWidth: "320px" }}>
          The page you're looking for doesn't exist or has been moved.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-3 mt-2">
          <Link href="/" className="btn-primary">
            Back to Home
          </Link>
          <Link href="/contact" className="btn-secondary">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
