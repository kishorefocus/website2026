import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin, Layers, Globe, Navigation, ScanSearch, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MarketingNavbar } from "@/components/marketing/marketing-navbar";
import { MarketingFooter } from "@/components/marketing/marketing-footer";
import { JsonLd, breadcrumbSchema, faqSchema } from "@/components/seo/JsonLd";
import { APP_LOGIN_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Find B2B Leads by Location — Map-Based Prospecting Tool",
  description:
    "GetYourClientsB2B's map search lets you find B2B leads by location — city, country, or region. Visualize lead clusters, plan territories, and prospect geographically. Try free.",
  keywords: [
    "find leads by location",
    "map based B2B prospecting",
    "B2B lead map search",
    "geographic B2B prospecting",
    "find B2B clients by city",
  ],
  alternates: {
    canonical: "https://getyourclientsb2b.com/features/map-search",
  },
  openGraph: {
    title: "Find B2B Leads by Location — Map-Based Prospecting | GetYourClientsB2B",
    description:
      "Visually search for B2B leads on a live map. Filter by industry, country, or city — see lead density, plan territories, and start outreach immediately.",
    url: "https://getyourclientsb2b.com/features/map-search",
    siteName: "GetYourClientsB2B",
    type: "website",
    images: [
      {
        url: "https://getyourclientsb2b.com/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "GetYourClientsB2B — Map-Based B2B Lead Prospecting",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@GetYourClientsB2B",
    title: "Find B2B Leads by Location — Map-Based Prospecting | GetYourClientsB2B",
    description:
      "Search B2B leads on a live map. Visualize lead density, plan territories, and start outreach immediately.",
    images: ["https://getyourclientsb2b.com/images/og-image.png"],
  },
};

const FAQS = [
  {
    question: "How does map-based B2B prospecting work?",
    answer:
      "After selecting your industry filter, GetYourClientsB2B plots matching businesses on a live interactive map. You can zoom into cities, click on clusters, and add specific leads to your outreach pipeline — all without leaving the map view.",
  },
  {
    question: "Can I search for leads in a specific city?",
    answer:
      "Yes. You can zoom into any city or draw a search radius on the map to find businesses within a defined geographic area. This is especially useful for local or regional sales teams.",
  },
  {
    question: "Is the map useful for international sales teams?",
    answer:
      "Absolutely. International sales teams use the map to plan territory strategies across countries, identify market density by region, and prioritize which geographies to target first.",
  },
  {
    question: "Can I filter by industry on the map?",
    answer:
      "Yes. You can layer industry filters on top of the map — showing only SaaS companies in Berlin, or only manufacturing businesses in the Midwest, for example.",
  },
];

export default function MapSearchPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([
        { name: "Home", url: "https://getyourclientsb2b.com" },
        { name: "Features", url: "https://getyourclientsb2b.com/features" },
        { name: "Map Search", url: "https://getyourclientsb2b.com/features/map-search" },
      ])} />
      <JsonLd data={faqSchema(FAQS)} />

      <div className="min-h-screen flex flex-col bg-background text-foreground">
        <MarketingNavbar />

        {/* Hero */}
        <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-br from-background via-surface/60 to-background py-20 lg:py-28">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,hsl(228,100%,64%,0.12),transparent)]" />
          <div className="relative mx-auto max-w-5xl px-6 text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary">
              Map-Based Prospecting
            </div>
            <h1 className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Find B2B Leads{" "}
              <span className="gradient-text">by Location</span> on a Live Map
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
              The only B2B prospecting platform that lets you visually discover
              leads on an interactive map. See market density, plan territories,
              and identify geographic opportunities — instantly.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <a href={APP_LOGIN_URL}>
                <Button size="lg" className="font-semibold px-8 shadow-lg shadow-primary/25">
                  Try Map Search Free <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
              <Link href="/pricing">
                <Button size="lg" variant="outline" className="font-semibold px-8">See Plans</Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Feature Highlights */}
        <section className="py-20 px-6">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-center font-display text-3xl font-bold mb-3">Geographic Prospecting, Reimagined</h2>
            <p className="text-center text-muted-foreground mb-14">A prospecting interface built for how great sales teams think about territory</p>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                { icon: MapPin, title: "Live Interactive Map", desc: "Search and explore millions of B2B businesses plotted on a real-time, zoomable map — across 190+ countries." },
                { icon: ScanSearch, title: "Radius Search", desc: "Draw a radius around any city or area to find all matching businesses within a defined geographic boundary." },
                { icon: Layers, title: "Industry Layer Filters", desc: "Stack filters — show only SaaS companies in London, or only healthcare businesses in California." },
                { icon: Target, title: "Territory Planning", desc: "Visually divide markets into sales territories. See lead density by city or region before investing prospecting time." },
                { icon: Globe, title: "190+ Countries", desc: "Full international coverage. Plan expansion into new countries by seeing market size and business density before you invest." },
                { icon: Navigation, title: "One-Click Pipeline Add", desc: "Click any lead on the map, review their details, and add them to an outreach sequence instantly." },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="rounded-xl border border-border/60 bg-surface/40 p-5 flex flex-col gap-3">
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

        {/* Use Cases */}
        <section className="bg-surface/30 py-20 px-6 border-y border-border/60">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-center font-display text-3xl font-bold mb-12">Who Uses Map-Based Prospecting</h2>
            <div className="grid gap-4 md:grid-cols-3">
              {[
                { title: "Field Sales Teams", desc: "Plan routes and territory coverage. See which neighborhoods or districts have the most prospects before scheduling visits." },
                { title: "International Sales Teams", desc: "Visually evaluate new country markets. Compare lead density across EU, MENA, APAC and SEA regions in seconds." },
                { title: "B2B Agencies", desc: "Quickly identify the market size for a new client vertical in any city or country — before pitching territory strategies." },
              ].map(({ title, desc }) => (
                <div key={title} className="rounded-xl border border-border/60 bg-surface/60 p-6 flex flex-col gap-3">
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
            <h2 className="font-display text-3xl font-bold mb-4">See Your Market on the Map</h2>
            <p className="text-muted-foreground mb-8 text-lg">Discover B2B leads by location, industry, and company size — free.</p>
            <a href={APP_LOGIN_URL}>
              <Button size="lg" className="font-semibold px-10 shadow-lg shadow-primary/25">
                Get Started Free <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
            <p className="mt-4 text-xs text-muted-foreground">No credit card required · Interactive map included on free plan</p>
          </div>
        </section>

        <MarketingFooter />
      </div>
    </>
  );
}
