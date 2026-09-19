import type { Metadata } from "next";
import { ContactPageClient } from "@/components/marketing/contact-page-client";
import { JsonLd, contactPageSchema, breadcrumbSchema } from "@/components/seo/JsonLd";

// ─── Page-level SEO metadata ──────────────────────────────────────────────────
// Server component wrapper — owns metadata.
// Interactive form with useState lives in ContactPageClient.

const BASE_URL = "https://www.getyourclientsb2b.com";

export const metadata: Metadata = {
  title: "Contact Us — GetYourClientsB2B Support & Sales",
  description:
    "Get in touch with the GetYourClientsB2B team for support, enterprise sales, billing questions, or API inquiries. We help B2B sales teams, agencies, and founders find leads and run cold outreach.",
  keywords: [
    "GetYourClientsB2B support",
    "B2B lead generation tool contact",
    "cold outreach CRM support",
    "GetYourClientsB2B sales",
  ],
  alternates: {
    canonical: `${BASE_URL}/contact`,
  },
  openGraph: {
    title: "Contact GetYourClientsB2B — Support & Sales",
    description:
      "Reach our team for support, enterprise pricing, or API questions. GetYourClientsB2B powers B2B lead discovery across 190+ countries.",
    url: `${BASE_URL}/contact`,
    siteName: "GetYourClientsB2B",
    type: "website",
    images: [
      {
        url: `${BASE_URL}/images/og-image.png`,
        width: 1200,
        height: 630,
        alt: "GetYourClientsB2B — Contact Us",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact GetYourClientsB2B — Support & Sales",
    description:
      "Reach our team for support, enterprise pricing, or API questions.",
    images: [`${BASE_URL}/images/og-image.png`],
  },
};

// ─── Server component ─────────────────────────────────────────────────────────
export default function ContactPage() {
  return (
    <>
      <JsonLd data={contactPageSchema()} />
      <JsonLd data={breadcrumbSchema([
        { name: "Home", url: "https://www.getyourclientsb2b.com" },
        { name: "Contact", url: "https://www.getyourclientsb2b.com/contact" },
      ])} />
      <ContactPageClient />
    </>
  );
}
