import type { Metadata } from "next";
import { JsonLd, faqSchema } from "@/components/seo/JsonLd";
import { HomePageClient } from "@/components/marketing/home-page-client";

// ─── Page-level SEO metadata ──────────────────────────────────────────────────
// This server component owns all metadata. The interactive client UI lives in
// HomePageClient (components/marketing/home-page-client.tsx).

const BASE_URL = "https://getyourclientsb2b.com";

export const metadata: Metadata = {
  title: "Find B2B Clients Online — B2B Client Discovery & Cold Outreach CRM",
  description:
    "The fastest way to find B2B clients online. Search leads by industry & country across 190+ countries, visualize them on an interactive map, and run cold outreach from one dashboard. Start free — no credit card required.",
  keywords: [
    "find b2b clients",
    "b2b client",
    "b2b client discovery tool",
    "find b2b clients online",
    "b2b client finder",
    "B2B lead generation software",
    "cold outreach CRM",
    "find B2B leads by industry",
    "B2B prospecting platform",
    "sales outreach automation software",
    "CRM for cold email outreach",
    "B2B lead finder tool",
  ],
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    title: "Find B2B Clients Online — B2B Client Discovery & Cold Outreach CRM",
    description:
      "Find, qualify, and close B2B clients across 190+ countries. Map-based lead discovery, industry filters, and cold outreach CRM — all in one platform.",
    url: BASE_URL,
    siteName: "GetYourClientsB2B",
    type: "website",
    images: [
      {
        url: `${BASE_URL}/images/og-image.png`,
        width: 1200,
        height: 630,
        alt: "GetYourClientsB2B — Find B2B Clients Online",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Find B2B Clients Online — B2B Client Discovery & Cold Outreach CRM",
    description:
      "Find, qualify, and close B2B clients across 190+ countries. Map-based lead discovery, industry filters, and cold outreach CRM.",
    images: [`${BASE_URL}/images/og-image.png`],
  },
};

// ─── FAQ structured data for Google rich results ──────────────────────────────
const HOMEPAGE_FAQS = [
  {
    question: "What is GetYourClientsB2B?",
    answer:
      "GetYourClientsB2B is a B2B client discovery and CRM outreach platform that lets you find leads by industry and country across 190+ countries, visualize them on an interactive map, and run cold outreach from a single dashboard.",
  },
  {
    question: "Is GetYourClientsB2B an Apollo.io alternative?",
    answer:
      "Yes. GetYourClientsB2B offers similar B2B prospecting capabilities to Apollo.io — with added map-based lead discovery and a built-in cold outreach CRM, often at a lower price point for growing teams.",
  },
  {
    question: "Can I automate cold email outreach with GetYourClientsB2B?",
    answer:
      "Absolutely. GetYourClientsB2B includes outreach automation tools to help you send personalized cold emails at scale and manage follow-up sequences from one place — without switching between tools.",
  },
  {
    question: "How do I find B2B leads by industry?",
    answer:
      "Use the GetYourClientsB2B search engine to filter businesses by industry, country, company size, and revenue. Results are plotted on a live map so you can visually prospect entire regions at once.",
  },
  {
    question: "Is there a free plan available?",
    answer:
      "Yes. GetYourClientsB2B offers a free plan with 3 verified leads to get started. No credit card required. Paid plans start at $19/month for growing sales teams.",
  },
  {
    question: "How many countries does GetYourClientsB2B cover?",
    answer:
      "GetYourClientsB2B indexes business data across 190+ countries, making it ideal for teams doing international B2B prospecting and cross-border outreach.",
  },
];

// ─── Server component ─────────────────────────────────────────────────────────
export default function HomePage() {
  return (
    <>
      {/* FAQ schema — renders <script type="application/ld+json"> for Google */}
      <JsonLd data={faqSchema(HOMEPAGE_FAQS)} />
      <HomePageClient />
    </>
  );
}
