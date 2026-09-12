import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Sales — B2B Lead Generation Support",
  description:
    "Get in touch with the GetYourClientsB2B team. Questions about B2B prospecting, cold outreach CRM, pricing, or integrations — our team responds within 24 hours.",
  keywords: [
    "contact GetYourClientsB2B",
    "B2B lead generation support",
    "cold outreach CRM support",
    "sales prospecting software help",
  ],
  alternates: {
    canonical: "https://getyourclientsb2b.com/contact",
  },
  openGraph: {
    title: "Contact Sales — GetYourClientsB2B",
    description:
      "Questions about B2B prospecting, outreach CRM, or pricing? Our team is ready to help you find and close more clients.",
    url: "https://getyourclientsb2b.com/contact",
    type: "website",
  },
  twitter: {
    title: "Contact Sales — GetYourClientsB2B",
    description:
      "Talk to the team about B2B lead discovery, cold outreach CRM, and pricing. Response within 24 hours.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
