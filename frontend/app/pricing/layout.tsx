import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Affordable B2B Lead Generation Pricing",
  description:
    "GetYourClientsB2B pricing plans starting free. Find B2B clients by industry and country, run cold outreach, and manage your pipeline — at a fraction of Apollo.io or ZoomInfo. No credit card required.",
  keywords: [
    "affordable B2B lead generation tool",
    "B2B lead generation pricing",
    "B2B prospecting software cost",
    "Apollo.io alternative pricing",
    "cold outreach CRM pricing",
  ],
  alternates: {
    canonical: "https://getyourclientsb2b.com/pricing",
  },
  openGraph: {
    title: "Affordable B2B Lead Generation Pricing | GetYourClientsB2B",
    description:
      "Plans starting free. Find B2B leads by industry & country, run cold outreach, and close deals — at a fraction of the cost of Apollo or ZoomInfo.",
    url: "https://getyourclientsb2b.com/pricing",
    type: "website",
  },
  twitter: {
    title: "Affordable B2B Lead Generation Pricing | GetYourClientsB2B",
    description:
      "Plans starting free. B2B client discovery + cold outreach CRM for solo reps, agencies, and sales teams.",
  },
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
