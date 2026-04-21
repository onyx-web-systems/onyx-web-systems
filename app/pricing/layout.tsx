import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent pricing for high-performance web systems. Foundation, Growth, and Authority packages designed for businesses serious about results.",
  alternates: { canonical: "https://onyxwebsystems.com/pricing" },
  openGraph: {
    url:         "https://onyxwebsystems.com/pricing",
    title:       "Pricing | Onyx Web Systems",
    description: "Investment in performance. Pricing that reflects strategy, execution, and results.",
  },
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
