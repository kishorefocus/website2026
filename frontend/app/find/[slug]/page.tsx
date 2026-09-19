import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Globe, MapPin, Search, Zap, Check } from "lucide-react";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { MarketingNavbar } from "@/components/marketing/marketing-navbar";
import { MarketingFooter } from "@/components/marketing/marketing-footer";
import { JsonLd, breadcrumbSchema } from "@/components/seo/JsonLd";
import { APP_LOGIN_URL } from "@/lib/constants";

const BASE_URL = "https://www.getyourclientsb2b.com";

// ─── Slug Data ──────────────────────────────────────────────────────────────

interface FindPageData {
  slug: string;
  industry: string;
  city: string;
  country: string;
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroSubtitle: string;
  keywords: string[];
  examples: string[];
}

const FIND_DATA: Record<string, FindPageData> = {
  "saas-clients-in-dubai": {
    slug: "saas-clients-in-dubai",
    industry: "SaaS",
    city: "Dubai",
    country: "UAE",
    metaTitle: "Find SaaS Clients in Dubai — B2B Lead Generation UAE",
    metaDescription:
      "Discover SaaS and technology companies in Dubai looking for B2B services. GetYourClientsB2B helps you find, filter, and reach tech clients in the UAE with cold outreach CRM.",
    heroTitle: "Find SaaS Clients in Dubai",
    heroSubtitle:
      "Connect with SaaS companies, tech startups, and software vendors across Dubai and the wider UAE market. Filter by company size, contact role, and more.",
    keywords: ["find SaaS clients in Dubai", "B2B leads Dubai", "tech companies Dubai", "UAE B2B prospecting"],
    examples: ["SaaS companies in Dubai", "Tech startups UAE", "Software vendors in Dubai", "Cloud companies UAE"],
  },
  "saas-clients-in-london": {
    slug: "saas-clients-in-london",
    industry: "SaaS",
    city: "London",
    country: "UK",
    metaTitle: "Find SaaS Clients in London — B2B Lead Generation UK",
    metaDescription:
      "Discover SaaS companies and tech firms in London looking for B2B services. Use GetYourClientsB2B to find and contact decision-makers across the UK tech sector.",
    heroTitle: "Find SaaS Clients in London",
    heroSubtitle:
      "London is Europe's largest tech hub. Reach SaaS companies, fintech firms, and software vendors with targeted B2B prospecting and cold outreach.",
    keywords: ["find SaaS clients in London", "B2B leads London", "tech companies London UK", "London B2B prospecting"],
    examples: ["SaaS companies in London", "Fintech firms UK", "Software startups London", "Tech scale-ups UK"],
  },
  "saas-clients-in-new-york": {
    slug: "saas-clients-in-new-york",
    industry: "SaaS",
    city: "New York",
    country: "USA",
    metaTitle: "Find SaaS Clients in New York — B2B Lead Generation NYC",
    metaDescription:
      "Find SaaS and technology companies in New York City. GetYourClientsB2B lets you discover decision-makers at NYC tech firms and run cold outreach from one platform.",
    heroTitle: "Find SaaS Clients in New York",
    heroSubtitle:
      "New York City is a powerhouse for B2B SaaS. Find and contact tech companies, martech firms, and software vendors across the NYC metro area.",
    keywords: ["find SaaS clients New York", "NYC B2B leads", "tech companies New York", "New York B2B prospecting"],
    examples: ["SaaS companies in NYC", "Martech firms New York", "AdTech startups NYC", "Enterprise software NYC"],
  },
  "saas-clients-in-paris": {
    slug: "saas-clients-in-paris",
    industry: "SaaS",
    city: "Paris",
    country: "France",
    metaTitle: "Find SaaS Clients in Paris — B2B Lead Generation France",
    metaDescription:
      "Discover SaaS companies and tech startups in Paris, France. GetYourClientsB2B helps you reach decision-makers at French tech firms with targeted cold outreach.",
    heroTitle: "Find SaaS Clients in Paris",
    heroSubtitle:
      "Paris is home to a thriving tech ecosystem. Identify SaaS companies, deeptech startups, and software vendors across France with precision B2B prospecting.",
    keywords: ["find SaaS clients in Paris", "B2B leads France", "tech companies Paris", "French SaaS companies"],
    examples: ["SaaS companies in Paris", "French tech startups", "Deeptech firms France", "Software vendors Paris"],
  },
  "manufacturing-clients-in-germany": {
    slug: "manufacturing-clients-in-germany",
    industry: "Manufacturing",
    city: "Germany",
    country: "Germany",
    metaTitle: "Find Manufacturing Clients in Germany — B2B Lead Generation",
    metaDescription:
      "Discover manufacturing companies and industrial firms in Germany. GetYourClientsB2B helps you reach procurement managers and decision-makers at German manufacturers.",
    heroTitle: "Find Manufacturing Clients in Germany",
    heroSubtitle:
      "Germany is the world's top manufacturing economy. Find industrial companies, machinery manufacturers, and engineering firms across all major German cities.",
    keywords: ["find manufacturing clients Germany", "German B2B leads", "industrial companies Germany", "manufacturing firms Germany"],
    examples: ["Machinery manufacturers Germany", "Automotive suppliers Germany", "Industrial firms Munich", "Engineering companies Frankfurt"],
  },
  "manufacturing-clients-in-china": {
    slug: "manufacturing-clients-in-china",
    industry: "Manufacturing",
    city: "China",
    country: "China",
    metaTitle: "Find Manufacturing Clients in China — B2B Lead Generation",
    metaDescription:
      "Find manufacturing companies and factories in China. GetYourClientsB2B helps you discover Chinese manufacturers and reach the right decision-makers for B2B outreach.",
    heroTitle: "Find Manufacturing Clients in China",
    heroSubtitle:
      "China is the world's manufacturing hub. Identify factories, OEM suppliers, and industrial firms across Shenzhen, Shanghai, Guangzhou, and more.",
    keywords: ["find manufacturing clients China", "Chinese manufacturers B2B", "factory leads China", "China B2B prospecting"],
    examples: ["Electronics manufacturers Shenzhen", "OEM suppliers China", "Factories in Guangzhou", "Industrial firms Shanghai"],
  },
  "healthcare-clients-in-canada": {
    slug: "healthcare-clients-in-canada",
    industry: "Healthcare",
    city: "Canada",
    country: "Canada",
    metaTitle: "Find Healthcare Clients in Canada — B2B Lead Generation",
    metaDescription:
      "Discover healthcare companies, clinics, and medical firms in Canada. GetYourClientsB2B helps you reach decision-makers in the Canadian healthcare sector.",
    heroTitle: "Find Healthcare Clients in Canada",
    heroSubtitle:
      "Reach clinics, hospitals, healthtech startups, and medical device companies across Toronto, Vancouver, Calgary, and all major Canadian cities.",
    keywords: ["find healthcare clients Canada", "Canadian healthcare B2B leads", "medical companies Canada", "healthtech Canada"],
    examples: ["Healthtech startups Toronto", "Medical device companies Canada", "Clinics Vancouver", "Healthcare firms Calgary"],
  },
  "ecommerce-clients-in-australia": {
    slug: "ecommerce-clients-in-australia",
    industry: "Ecommerce",
    city: "Australia",
    country: "Australia",
    metaTitle: "Find Ecommerce Clients in Australia — B2B Lead Generation",
    metaDescription:
      "Find ecommerce brands, online retailers, and DTC companies in Australia. GetYourClientsB2B helps you reach ecommerce decision-makers with targeted cold outreach.",
    heroTitle: "Find Ecommerce Clients in Australia",
    heroSubtitle:
      "Australia's ecommerce market is booming. Find online retailers, DTC brands, and marketplace sellers across Sydney, Melbourne, Brisbane, and beyond.",
    keywords: ["find ecommerce clients Australia", "Australian ecommerce B2B leads", "online retailers Australia", "DTC brands Australia"],
    examples: ["DTC brands Sydney", "Online retailers Melbourne", "Ecommerce startups Australia", "Shopify stores Australia"],
  },
  "finance-clients-in-singapore": {
    slug: "finance-clients-in-singapore",
    industry: "Finance",
    city: "Singapore",
    country: "Singapore",
    metaTitle: "Find Finance Clients in Singapore — B2B Lead Generation",
    metaDescription:
      "Discover financial services companies, fintech firms, and banks in Singapore. GetYourClientsB2B helps you reach decision-makers in Asia's top financial hub.",
    heroTitle: "Find Finance Clients in Singapore",
    heroSubtitle:
      "Singapore is Asia's premier financial centre. Find banks, fintech companies, asset managers, and financial services firms with targeted B2B prospecting.",
    keywords: ["find finance clients Singapore", "Singapore fintech B2B leads", "financial companies Singapore", "banks Singapore outreach"],
    examples: ["Fintech startups Singapore", "Asset management firms Singapore", "Banks in Singapore", "Payment companies Singapore"],
  },
  "retail-clients-in-india": {
    slug: "retail-clients-in-india",
    industry: "Retail",
    city: "India",
    country: "India",
    metaTitle: "Find Retail Clients in India — B2B Lead Generation",
    metaDescription:
      "Find retail chains, D2C brands, and consumer companies in India. GetYourClientsB2B helps you reach procurement and operations decision-makers across Indian retail.",
    heroTitle: "Find Retail Clients in India",
    heroSubtitle:
      "India's retail sector is one of the world's fastest growing. Reach retail chains, D2C brands, and consumer companies across Mumbai, Delhi, Bangalore, and beyond.",
    keywords: ["find retail clients India", "Indian retail B2B leads", "retail companies India", "D2C brands India"],
    examples: ["Retail chains Mumbai", "D2C brands India", "Consumer companies Delhi", "FMCG firms Bangalore"],
  },
};

// ─── Static Params ──────────────────────────────────────────────────────────

export function generateStaticParams() {
  return Object.keys(FIND_DATA).map((slug) => ({ slug }));
}

// ─── Metadata ────────────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const page = FIND_DATA[params.slug];
  if (!page) return {};

  const url = `${BASE_URL}/find/${page.slug}`;

  return {
    title: page.metaTitle,
    description: page.metaDescription,
    keywords: page.keywords,
    alternates: { canonical: url },
    openGraph: {
      title: `${page.metaTitle} | GetYourClientsB2B`,
      description: page.metaDescription,
      url,
      siteName: "GetYourClientsB2B",
      type: "website",
      images: [
        {
          url: `${BASE_URL}/images/og-image.png`,
          width: 1200,
          height: 630,
          alt: `GetYourClientsB2B — ${page.metaTitle}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@GetYourClientsB2B",
      title: page.metaTitle,
      description: page.metaDescription,
      images: [`${BASE_URL}/images/og-image.png`],
    },
  };
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function FindPage({ params }: { params: { slug: string } }) {
  const page = FIND_DATA[params.slug];
  if (!page) notFound();

  const pageUrl = `${BASE_URL}/find/${page.slug}`;

  const features = [
    { icon: Search, title: "Industry Filters", desc: `Filter ${page.industry} companies by sub-vertical, company size, and contact role.` },
    { icon: MapPin, title: "Map-Based Search", desc: `Visualise ${page.industry} companies in ${page.city} on an interactive map.` },
    { icon: Zap, title: "Cold Outreach CRM", desc: "Send personalised cold emails and follow-ups directly from the platform." },
    { icon: Globe, title: "190+ Countries", desc: "Search beyond a single city — expand to any market worldwide." },
  ];

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: BASE_URL },
          { name: "Find Clients", url: `${BASE_URL}/find` },
          { name: `${page.industry} Clients in ${page.city}`, url: pageUrl },
        ])}
      />

      <div className="min-h-screen flex flex-col bg-background text-foreground">
        <MarketingNavbar />

        {/* Hero */}
        <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-br from-background via-surface/60 to-background py-20 lg:py-28">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,hsl(228,100%,64%,0.12),transparent)]" />
          <div className="relative mx-auto max-w-4xl px-6 text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary">
              <Globe className="h-3.5 w-3.5" />
              {page.city}, {page.country}
            </div>
            <h1 className="font-display text-4xl font-bold leading-tight tracking-tight lg:text-5xl">
              {page.heroTitle}
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
              {page.heroSubtitle}
            </p>

            <div className="mt-6 flex flex-wrap justify-center gap-2">
              {page.examples.map((example) => (
                <span
                  key={example}
                  className="rounded-full border border-border/60 bg-surface/40 px-3 py-1 text-xs text-muted-foreground"
                >
                  {example}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <a href={APP_LOGIN_URL}>
                <Button size="lg" className="font-semibold px-8 shadow-lg shadow-primary/25">
                  Find {page.industry} Clients Free <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
              <Link href="/pricing">
                <Button size="lg" variant="outline" className="font-semibold px-8">
                  View Pricing
                </Button>
              </Link>
            </div>
            <p className="mt-4 text-xs text-muted-foreground">No credit card required · Free plan available</p>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 px-6">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-center font-display text-3xl font-bold mb-3">
              Everything You Need to Win {page.industry} Clients in {page.city}
            </h2>
            <p className="text-center text-muted-foreground mb-14">
              From discovery to booked meeting — powered by one platform
            </p>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {features.map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="rounded-xl border border-border/60 bg-surface/40 p-5 flex flex-col gap-3"
                >
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

        {/* How It Works */}
        <section className="bg-surface/30 py-20 px-6 border-y border-border/60">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-center font-display text-3xl font-bold mb-12">
              How to Find {page.industry} Clients in {page.city}
            </h2>
            <div className="space-y-4">
              {[
                {
                  step: "01",
                  title: "Search by Industry & Location",
                  desc: `Enter "${page.industry}" and "${page.city}" in GetYourClientsB2B to surface matching companies instantly.`,
                },
                {
                  step: "02",
                  title: "Filter & Qualify",
                  desc: "Narrow results by company size, decision-maker role, and sub-vertical to focus on your ideal customer profile.",
                },
                {
                  step: "03",
                  title: "View on Map",
                  desc: `Pin ${page.industry} companies in ${page.city} on an interactive map to prioritise outreach geographically.`,
                },
                {
                  step: "04",
                  title: "Run Cold Outreach",
                  desc: "Send personalised cold emails and automated follow-up sequences. Track opens, replies, and pipeline status.",
                },
              ].map(({ step, title, desc }) => (
                <div key={step} className="flex gap-4 rounded-xl border border-border/60 bg-surface/60 p-5">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                    {step}
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="py-20 px-6">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-center font-display text-3xl font-bold mb-12">
              What&apos;s Included
            </h2>
            <div className="rounded-2xl border border-border bg-surface/40 p-8">
              <ul className="space-y-3">
                {[
                  `${page.industry} company search filtered by ${page.city}, ${page.country}`,
                  "Decision-maker contact details (name, title, email)",
                  "Interactive map view for geographic prospecting",
                  "Cold email outreach with automated follow-ups",
                  "Pipeline CRM to track leads from first touch to close",
                  "Export leads to CSV or sync with your CRM",
                  "Free plan to get started — no credit card required",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Check className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-surface/30 border-t border-border/60 py-20 px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl font-bold mb-4">
              Start Finding {page.industry} Clients in {page.city} Today
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Join thousands of B2B sales teams, agencies, and freelancers using GetYourClientsB2B to win clients globally.
            </p>
            <a href={APP_LOGIN_URL}>
              <Button size="lg" className="font-semibold px-10 shadow-lg shadow-primary/25">
                Get Started Free <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
            <p className="mt-4 text-xs text-muted-foreground">
              No credit card required · Free plan available · Cancel anytime
            </p>
          </div>
        </section>

        <MarketingFooter />
      </div>
    </>
  );
}