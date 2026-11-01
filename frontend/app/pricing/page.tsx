import type { Metadata } from "next";
import { JsonLd, faqSchema } from "@/components/seo/JsonLd";
import { PricingPageClient } from "@/components/marketing/pricing-page-client";

// ─── Page-level SEO metadata ──────────────────────────────────────────────────
// Server component wrapper — owns all metadata & structured data.
// Interactive billing toggle UI lives in PricingPageClient.

const BASE_URL = "https://www.getyourclientsb2b.com";

export const metadata: Metadata = {
  title: "Pricing — Affordable B2B Lead Generation Tool",
  description:
    "GetYourClientsB2B pricing starts free. Compare Growth (₹1,900/mo), Pro (₹4,900/mo), and Enterprise plans for B2B lead discovery, map-based prospecting, and cold outreach CRM. No hidden fees.",
  keywords: [
    "affordable B2B lead generation tool",
    "B2B prospecting platform pricing",
    "cold outreach CRM pricing",
    "B2B lead finder tool cost",
    "GetYourClientsB2B plans",
  ],
  alternates: {
    canonical: `${BASE_URL}/pricing`,
  },
  openGraph: {
    title: "Pricing — Affordable B2B Lead Generation | GetYourClientsB2B",
    description:
      "Plans starting free. Flat-rate pricing for B2B lead discovery, outreach CRM, and 190+ country coverage. No per-seat pricing, no hidden fees.",
    url: `${BASE_URL}/pricing`,
    siteName: "GetYourClientsB2B",
    type: "website",
    images: [
      {
        url: `${BASE_URL}/images/og-image.png`,
        width: 1200,
        height: 630,
        alt: "GetYourClientsB2B Pricing — B2B Lead Generation Plans",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pricing — Affordable B2B Lead Generation | GetYourClientsB2B",
    description:
      "Plans starting free. Flat-rate pricing for B2B lead discovery and cold outreach CRM across 190+ countries.",
    images: [`${BASE_URL}/images/og-image.png`],
  },
};

// ─── Pricing FAQ structured data ───────────────────────────────────────────────
const PRICING_FAQS = [
  {
    question: "How does billing and subscription renewal work?",
    answer:
      "All paid plans (Growth, Pro, Enterprise) are billed in INR as recurring subscriptions, either monthly or annually based on your selection. You can manage or cancel your subscription at any time from your dashboard.",
  },
  {
    question: "Who processes my payments?",
    answer:
      "All payments are securely processed by Razorpay, India's leading payment gateway. Razorpay is PCI-DSS compliant and uses 256-bit SSL encryption to keep your financial data safe.",
  },
  {
    question: "Can I cancel my subscription at any time?",
    answer:
      "Yes. You can cancel your subscription at any time by contacting our support team or through your customer billing link. When you cancel, your account remains active with full access until the end of your paid billing period.",
  },
  {
    question: "What is your refund policy?",
    answer:
      "We offer a 14-day money-back guarantee for first-time subscriptions. If you are not satisfied within 14 days of your initial purchase, contact us for a full refund.",
  },
  {
    question: "What payment methods are supported?",
    answer:
      "Via Razorpay, we accept UPI (PhonePe, Google Pay, Paytm), Net Banking, Credit & Debit Cards (Visa, MasterCard, RuPay, Amex), and popular wallets — covering virtually every Indian payment method.",
  },
  {
    question: "Can I switch plans later?",
    answer:
      "Yes! You can upgrade or downgrade your plan at any time directly in your account dashboard. Simply select the desired plan and complete the checkout via Razorpay.",
  },
];

// ─── Server component ─────────────────────────────────────────────────────────
export default function PricingPage() {
  return (
    <>
      {/* FAQ schema — enables Google rich results for pricing FAQs */}
      <JsonLd data={faqSchema(PRICING_FAQS)} />
      <PricingPageClient />
    </>
  );
}
