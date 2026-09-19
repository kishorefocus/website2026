import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Search, Filter, MapPin, Download, Building2, Globe, Zap, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MarketingNavbar } from "@/components/marketing/marketing-navbar";
import { MarketingFooter } from "@/components/marketing/marketing-footer";
import { JsonLd, breadcrumbSchema, softwareAppSchema, faqSchema } from "@/components/seo/JsonLd";
import { APP_LOGIN_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Find B2B Clients by Industry & Country — B2B Lead Discovery Tool",
  description:
    "Find B2B clients in any industry across 190+ countries. GetYourClientsB2B's lead discovery lets you filter by industry, country, and company size — then add leads directly to outreach sequences. Free to try.",
  keywords: [
    "find b2b clients",
    "b2b client finder",
    "find b2b clients online",
    "b2b client discovery tool",
    "B2B lead finder tool",
    "find B2B leads by industry",
    "B2B lead generation software",
    "B2B prospecting platform",
    "find b2b clients by industry",
    "b2b lead discovery",
  ],
  alternates: {
    canonical: "https://www.getyourclientsb2b.com/features/lead-discovery",
  },
  openGraph: {
    title: "B2B Lead Finder Tool — Find Leads by Industry & Country | GetYourClientsB2B",
    description:
      "Search and discover B2B leads across 190+ countries by industry, company size, and geography. Export verified contacts and run outreach — all in one platform.",
    url: "https://www.getyourclientsb2b.com/features/lead-discovery",
    siteName: "GetYourClientsB2B",
    type: "website",
    images: [
      {
        url: "https://www.getyourclientsb2b.com/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "GetYourClientsB2B — B2B Lead Finder Tool",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@GetYourClientsB2B",
    title: "B2B Lead Finder Tool — Find Leads by Industry & Country | GetYourClientsB2B",
    description:
      "Search millions of B2B businesses by industry and country across 190+ countries. Free to try.",
    images: ["https://www.getyourclientsb2b.com/images/og-image.png"],
  },
};

const FAQS = [
  {
    question: "How does the B2B lead finder work?",
    answer:
      "You select an industry (e.g., SaaS, Manufacturing, Healthcare) and a country or region. GetYourClientsB2B searches its database of verified businesses, shows them on a live map and list view, and lets you export contacts or add them directly to your pipeline.",
  },
  {
    question: "Can I filter leads by company size?",
    answer:
      "Yes. You can filter by industry, country, region, and company size (SMB, mid-market, enterprise). This lets you target your exact ICP without wading through irrelevant results.",
  },
  {
    question: "How many countries does the lead finder cover?",
    answer:
      "GetYourClientsB2B covers businesses across 190+ countries, with particularly strong coverage in North America, Europe, the Middle East, Southeast Asia, and Latin America.",
  },
  {
    question: "Is the contact data verified?",
    answer:
      "Yes. All email addresses are verified before export. We use real-time validation to minimize bounce rates and protect your sender reputation during outreach.",
  },
];

const STEPS = [
  { icon: Filter, step: "01", title: "Set Your Filters", desc: "Choose your target industry (SaaS, Manufacturing, Finance, Healthcare…) and target country or region." },
  { icon: Search, step: "02", title: "Discover Leads", desc: "GetYourClientsB2B returns a list and map view of matching businesses with company details and decision-maker contacts." },
  { icon: MapPin, step: "03", title: "Review on the Map", desc: "Visualize lead density and spread across geographies. Identify target markets and territory clusters at a glance." },
  { icon: Download, step: "04", title: "Export or Outreach", desc: "Export contacts as CSV or add directly to your outreach pipeline. Start cold email sequences from inside the platform." },
];

export default function LeadDiscoveryPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([
        { name: "Home", url: "https://www.getyourclientsb2b.com" },
        { name: "Features", url: "https://www.getyourclientsb2b.com/features" },
        { name: "B2B Lead Finder", url: "https://www.getyourclientsb2b.com/features/lead-discovery" },
      ])} />
      <JsonLd data={softwareAppSchema()} />
      <JsonLd data={faqSchema(FAQS)} />

      <div className="min-h-screen flex flex-col bg-background text-foreground">
        <MarketingNavbar />

        {/* Hero */}
        <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-br from-background via-surface/60 to-background py-20 lg:py-28">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,hsl(228,100%,64%,0.12),transparent)]" />
          <div className="relative mx-auto max-w-5xl px-6 text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary">
              B2B Lead Finder
            </div>
            <h1 className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Find <span className="gradient-text">B2B Leads by Industry</span>{" "}
              Across 190+ Countries
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
              Stop guessing where your next clients are. GetYourClientsB2B&apos;s
              lead finder lets you search millions of businesses by industry,
              country, and company size — and see them on a live map.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <a href={APP_LOGIN_URL}>
                <Button size="lg" className="font-semibold px-8 shadow-lg shadow-primary/25">
                  Start Finding Leads Free <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
              <Link href="/pricing">
                <Button size="lg" variant="outline" className="font-semibold px-8">See Pricing</Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="border-b border-border/60 py-10 bg-surface/30">
          <div className="mx-auto max-w-5xl px-6">
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
              {[
                { stat: "190+", label: "Countries Covered" },
                { stat: "50+", label: "Industries Available" },
                { stat: "10M+", label: "B2B Contacts" },
                { stat: "98%", label: "Email Deliverability" },
              ].map(({ stat, label }) => (
                <div key={label} className="text-center">
                  <p className="font-display text-3xl font-bold text-primary">{stat}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 px-6">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-center font-display text-3xl font-bold mb-3">How the B2B Lead Finder Works</h2>
            <p className="text-center text-muted-foreground mb-14">From filters to outreach in 4 steps</p>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {STEPS.map(({ icon: Icon, step, title, desc }) => (
                <div key={step} className="relative rounded-xl border border-border/60 bg-surface/40 p-6 flex flex-col gap-3">
                  <span className="text-xs font-mono font-bold text-primary/60">{step}</span>
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground">{title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Capabilities */}
        <section className="bg-surface/30 py-20 px-6 border-y border-border/60">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-center font-display text-3xl font-bold mb-12">Built for Targeted Outbound Teams</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                { icon: Building2, title: "Industry-First Search", desc: "Target SaaS, Manufacturing, Healthcare, Finance, Real Estate, E-commerce, and 50+ more verticals." },
                { icon: Globe, title: "Cross-Border Coverage", desc: "Prospect across 190+ countries with localized data quality — ideal for international sales teams." },
                { icon: MapPin, title: "Map-Based Visualization", desc: "See leads plotted on a live map. Identify market density and plan territory strategy visually." },
                { icon: Filter, title: "Advanced Filters", desc: "Combine industry, country, company size, and employee count filters to target your exact ICP." },
                { icon: Zap, title: "Direct-to-Pipeline", desc: "Add discovered leads directly to your outreach CRM — no CSV export required if you don't want it." },
                { icon: Shield, title: "Verified Email Data", desc: "All exported contacts include verified emails, minimizing bounces and protecting deliverability." },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="rounded-xl border border-border/60 bg-surface/60 p-5 flex flex-col gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground">{title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 px-6">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-center font-display text-3xl font-bold mb-12">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {FAQS.map((faq) => (
                <div key={faq.question} className="rounded-xl border border-border/60 bg-surface/60 p-6">
                  <h3 className="font-semibold text-foreground mb-2">{faq.question}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-surface/30 border-t border-border/60 py-20 px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl font-bold mb-4">Start Finding B2B Leads Today</h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Join hundreds of sales teams using GetYourClientsB2B to discover and close B2B clients worldwide.
            </p>
            <a href={APP_LOGIN_URL}>
              <Button size="lg" className="font-semibold px-10 shadow-lg shadow-primary/25">
                Get Started Free <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
            <p className="mt-4 text-xs text-muted-foreground">No credit card required · Free plan available · 190+ countries</p>
          </div>
        </section>

        <MarketingFooter />
      </div>
    </>
  );
}
