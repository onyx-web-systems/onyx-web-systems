
import type { Metadata, Viewport } from "next";
import { Instrument_Serif, DM_Sans, JetBrains_Mono } from "next/font/google";
import "@/styles/globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { cn } from "@/lib/utils";

/* ─── Font Definitions ───────────────────────────────────────────────────────── */

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
  preload: true,
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-sans",
  display: "swap",
  preload: true,
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
  preload: false,
});

/* ─── Site Metadata ──────────────────────────────────────────────────────────── */

export const metadata: Metadata = {
  metadataBase: new URL("https://onyxwebsystems.com"),
  title: {
    default: "Onyx Web Systems — High-Performance Websites Built to Convert",
    template: "%s | Onyx Web Systems",
  },
  description:
    "Onyx Web Systems builds high-performance websites engineered to attract, convert, and automate client acquisition. Not a website. A revenue system.",
  keywords: [
    "web design agency",
    "high performance websites",
    "conversion optimization",
    "Next.js development",
    "premium web development",
    "website that converts",
    "revenue system",
    "Onyx Web Systems",
  ],
  authors: [{ name: "Onyx Web Systems", url: "https://onyxwebsystems.com" }],
  creator: "Onyx Web Systems",
  publisher: "Onyx Web Systems",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://onyxwebsystems.com",
    siteName: "Onyx Web Systems",
    title: "Onyx Web Systems — High-Performance Websites Built to Convert",
    description:
      "Not a website. A revenue system. We build high-performance digital infrastructure for serious businesses.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Onyx Web Systems",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Onyx Web Systems — Built to Convert. Engineered to Scale.",
    description:
      "High-performance websites that attract, convert, and automate client acquisition.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#0A0A0A",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

/* ─── Root Layout ────────────────────────────────────────────────────────────── */

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn(
        instrumentSerif.variable,
        dmSans.variable,
        jetbrainsMono.variable
      )}
      suppressHydrationWarning
    >
      <body className="bg-onyx-950 text-onyx-200 font-sans antialiased">
        {/* Background Texture Layer */}
        <div
          className="fixed inset-0 pointer-events-none z-0 opacity-[0.015]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundSize: "200px 200px",
          }}
          aria-hidden="true"
        />

        {/* Site Shell */}
        <div className="relative z-[1] flex flex-col min-h-dvh">
          <Header />

          <main className="flex-1" id="main-content">
            {children}
          </main>

          <Footer />
        </div>
      </body>
    </html>
  );
}
