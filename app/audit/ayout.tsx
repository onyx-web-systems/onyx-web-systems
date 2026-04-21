import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Website Audit",
  description:
    "Get a free website performance audit from Onyx Web Systems. We'll identify what's slowing your site, weakening conversions, and costing you leads — delivered within 48 hours.",
  alternates: { canonical: "https://onyxwebsystems.com/audit" },
  openGraph: {
    url:         "https://onyxwebsystems.com/audit",
    title:       "Free Website Audit | Onyx Web Systems",
    description: "Find out what's costing you leads. Free audit delivered within 48 hours. No commitment.",
  },
};

export default function AuditLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
