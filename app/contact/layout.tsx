import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Onyx Web Systems. Tell us about your business goals and the system you need — we'll respond within 24 hours.",
  alternates: { canonical: "https://onyxwebsystems.com/contact" },
  openGraph: {
    url:         "https://onyxwebsystems.com/contact",
    title:       "Contact | Onyx Web Systems",
    description: "Let's build something that performs. Tell us about your project.",
  },
  robots: {
    index:  true,
    follow: true,
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
