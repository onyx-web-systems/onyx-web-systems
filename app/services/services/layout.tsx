import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Onyx Web Systems' full range of services — website design, conversion strategy, landing pages, CRM automation, AI chatbots, and SEO infrastructure.",
  alternates: { canonical: "https://onyxwebsystems.com/services" },
  openGraph: {
    url:         "https://onyxwebsystems.com/services",
    title:       "Services | Onyx Web Systems",
    description: "High-performance web services engineered for clarity, conversion, and growth.",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
