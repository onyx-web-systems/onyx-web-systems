import type { Metadata, Viewport } from "next";
import { Instrument_Serif, DM_Sans, JetBrains_Mono } from "next/font/google";
import "@/styles/globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { cn } from "@/lib/utils";

/* ─── Fonts ──────────────────────────────────────────────────────────────────── */

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

/* ─── Site-wide Metadata ─────────────────────────────────────────────────────── */

export const metadata: Metadata = {
  metadataBase: new URL("https://onyxwebsystems.com"),

  title: {
    default: "Onyx Web Systems | High-Performance Websites Built to Convert",
    template: "%s | Onyx Web Systems",
  },

  description:
    "Onyx Web Systems builds high-performance websites engineered to attract, convert, and automate client acquisition for serious businesses.",

  keywords: [
    "web design agency",
    "high performance websites",
    "conversion rate optimization",
    "Next.js web development",
    "premium web design",
    "website that converts",
    "revenue system",
    "CRM integration",
    "AI chatbot website",
    "Onyx Web Systems",
  ],

  authors:   [{ name: "Onyx Web Systems", url: "https://onyxwebsystems.com" }],
  creator:   "Onyx Web Systems",
  publisher: "Onyx Web Systems",

  /* ── Open Graph ── */
  openGraph: {
    type:      "website",
    locale:    "en_US",
    url:       "https://onyxwebsystems.com",
    siteName:  "Onyx Web Systems",
    title:     "Onyx Web Systems | High-Performance Websites Built to Convert",
    description:
      "Not a website. A revenue system. We build high-performance digital infrastructure for serious businesses.",
    images: [
      {
        url:    "/og-image.jpg",
        width:  1200,
        height: 630,
        alt:    "Onyx Web Systems — High-Performance Websites Built to Convert",
      },
    ],
  },

  /* ── Twitter / X ── */
  twitter: {
    card:        "summary_large_image",
    site:        "@onyxwebsystems",
    creator:     "@onyxwebsystems",
    title:       "Onyx Web Systems | High-Performance Websites Built to Convert",
    description: "High-performance websites that attract, convert, and automate client acquisition.",
    images:      ["/og-image.jpg"],
  },

  /* ── Icons ── */
  icons: {
    icon: [
      { url: "/favicon.ico",  sizes: "any" },
      { url: "/favicon.svg",  type: "image/svg+xml" },
    ],
    apple:   "/apple-touch-icon.png",
    other: [
      { rel: "icon", url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { rel: "icon", url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
  },

  /* ── Manifest ── */
  manifest: "/site.webmanifest",

  /* ── Robots ── */
  robots: {
    index:  true,
    follow: true,
    googleBot: {
      index:              true,
      follow:             true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet":       -1,
    },
  },

  /* ── Canonical ── */
  alternates: {
    canonical: "https://onyxwebsystems.com",
  },

  /* ── Verification placeholders ── */
  // Uncomment and fill when you have these accounts:
  // verification: {
  //   google: "YOUR_GOOGLE_SITE_VERIFICATION",
  //   yandex: "YOUR_YANDEX_VERIFICATION",
  // },
};

export const viewport: Viewport = {
  themeColor:    "#0A0A0A",
  width:         "device-width",
  initialScale:  1,
  maximumScale:  5,
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
      <body className="bg-[#0B0B0B] text-[#ECECEC] font-sans antialiased">
        <div className="relative flex flex-col min-h-dvh">
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
