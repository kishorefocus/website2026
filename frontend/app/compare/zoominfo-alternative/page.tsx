import type { Metadata } from "next";
import Link from "next/link";
import { Check, X, ArrowRight, Star, DollarSign, Rocket, Globe, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MarketingNavbar } from "@/components/marketing/marketing-navbar";
import { MarketingFooter } from "@/components/marketing/marketing-footer";
import { JsonLd, breadcrumbSchema, faqSchema } from "@/components/seo/JsonLd";
import { APP_LOGIN_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "ZoomInfo Alternative for Startups & Small Teams",
  description:
    "ZoomInfo costs $15,000+/year. GetYourClientsB2B delivers B2B lead discovery, map-based prospecting, and cold outreach CRM — at a startup-friendly price. Try free.",
  keywords: [
    "ZoomInfo alternative for small business",
    "ZoomInfo alternative startups",
    "cheaper ZoomInfo alternative",
    "ZoomInfo competitor",
    "affordable B2B data platform",
  ],
  alternates: {
    canonical: "https://getyourclientsb2b.com/compare/zoominfo-alternative",
  },
  openGraph: {
    title: "ZoomInfo Alternative for Startups | GetYourClientsB2B",
    description:
      "Don't pay $15K+/year for ZoomInfo. GetYourClientsB2B gives startups and small teams enterprise-grade B2B discovery at a fraction of the cost.",
    url: "https://getyourclientsb2b.com/compare/zoominfo-alternative",
    siteName: "GetYourClientsB2B",
    type: "website",
    images: [
      {
        url: "https://getyourclientsb2b.com/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "GetYourClientsB2B vs ZoomInfo — Startup-Friendly B2B Data Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@GetYourClientsB2B",
    title: "ZoomInfo Alternative for Startups | GetYourClientsB2B",
    description:
      "Enterprise B2B lead discovery without the $15K ZoomInfo price tag. Map-based prospecting + cold outreach CRM.",
    images: ["https://getyourclientsb2b.com/images/og-image.png"],
  },
};

const FEATURES = [
  { feature: "B2B Lead Discovery", gyc: true, zoom: true },
  { feature: "Map-Based Prospecting", gyc: true, zoom: false },
  { feature: "Built-in Outreach CRM", gyc: true, zoom: true },
  { feature: "Free Plan Available", gyc: true, zoom: false },
  { feature: "Startup-Friendly Pricing", gyc: true, zoom: false },
  { feature: "190+ Countries Coverage", gyc: true, zoom: true },
  { feature: "Industry Filters", gyc: true, zoom: true },
  { feature: "Cold Email Sequences", gyc: true, zoom: true },
  { feature: "No Annual Contract Required", gyc: true, zoom: false },
  { feature: "Month-to-Month Plans", gyc: true, zoom: false },
];

const FAQS = [
  {
    question: "How much does ZoomInfo cost compared to GetYourClientsB2B?",
    answer:
      "ZoomInfo's plans typically start at $10,000–$15,000/year for small teams, with annual contracts required. GetYourClientsB2B offers monthly plans starting free, with paid plans accessible to solo reps and small teams without enterprise-level commitments.",
  },
  {
    question: "Is GetYourClientsB2B good enough for startups switching from ZoomInfo?",
    answer:
      "Yes. GetYourClientsB2B covers the core use cases: industry-based lead discovery, contact data, outreach sequences, and pipeline management — at a price point that works for pre-Series A startups.",
  },
  {
    question: "Does GetYourClientsB2B require an annual contract like ZoomInfo?",
    answer:
      "No. All GetYourClientsB2B plans are available month-to-month. There are no annual commitments or lock-in contracts.",
  },
  {
    question: "What makes GetYourClientsB2B different from ZoomInfo for international sales?",
    answer:
      "GetYourClientsB2B was built specifically for cross-border B2B prospecting. Our map-based interface lets you visually search and discover leads across 190+ countries by industry — a workflow ZoomInfo doesn't offer natively.",
  },
];

const REVIEWS = [
  {
    name: "Lena K.",
    role: "CEO, Early-Stage SaaS Startup",
    text: "ZoomInfo quoted us $18,000/year. We tried GetYourClientsB2B and had our first 50 qualified leads within an hour. The ROI difference is staggering for a startup at our stage.",
    rating: 5,
  },
  {
    name: "Tom H.",
    role: "Sales Director, Scale-Up",
    text: "We used ZoomInfo for 2 years. When budget cuts hit, we evaluated alternatives and GetYourClientsB2B won on features we actually use — international coverage, map search, and no per-seat pricing.",
    rating: 5,
  },
  {
    name: "Kemi O.",
    role: "Founder, B2B Lead Gen Agency",
    text: "For agencies running international campaigns, ZoomInfo's pricing is impossible. GetYourClientsB2B gives us the same quality data with a business model that actually makes sense for service businesses.",
    rating: 5,
  },
];

export default function ZoomInfoAlternativePage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([
        { name: "Home", url: "https://getyourclientsb2b.com" },
        { name: "Compare", url: "https://getyourclientsb2b.com/compare" },
        { name: "ZoomInfo Alternative", url: "https://getyourclientsb2b.com/compare/zoominfo-alternative" },
      ])} />
      <JsonLd data={faqSchema(FAQS)} />

      <div className="min-h-screen flex flex-col bg-background text-foreground">
        <MarketingNavbar />

        {/* Hero */}
        <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-br from-background via-surface/60 to-background py-20 lg:py-28">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,hsl(228,100%,64%,0.12),transparent)]" />
          <div className="relative mx-auto max-w-5xl px-6 text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary">
              ZoomInfo Alternative
            </div>
            <h1 className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              The{" "}
              <span className="gradient-text">ZoomInfo Alternative</span>{" "}
              Startups & Small Teams Can Afford
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
              ZoomInfo costs $10,000–$15,000+ per year. GetYourClientsB2B
              delivers enterprise-grade B2B lead discovery, outreach CRM, and
              map-based prospecting — starting free, no contract required.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <a href={APP_LOGIN_URL}>
                <Button size="lg" className="font-semibold px-8 shadow-lg shadow-primary/25">
                  Try Free — No Credit Card <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
              <Link href="/pricing">
                <Button size="lg" variant="outline" className="font-semibold px-8">Compare Pricing</Button>
              </Link>
            </div>
            <div className="mt-8 inline-flex items-center gap-2 rounded-xl border border-border/60 bg-surface/60 px-5 py-3 text-sm text-muted-foreground">
              <DollarSign className="h-4 w-4 text-emerald-400" />
              <span>ZoomInfo: ~$15,000/year vs GetYourClientsB2B: starts free</span>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-20 px-6">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-center font-display text-3xl font-bold text-foreground mb-3">GetYourClientsB2B vs ZoomInfo</h2>
            <p className="text-center text-muted-foreground mb-12">Why startups and small teams choose us over ZoomInfo</p>
            <div className="overflow-hidden rounded-2xl border border-border bg-surface/40">
              <div className="grid grid-cols-3 border-b border-border bg-surface/80 px-6 py-4 text-sm font-semibold">
                <span className="text-muted-foreground">Feature</span>
                <span className="text-center text-primary">GetYourClientsB2B</span>
                <span className="text-center text-muted-foreground">ZoomInfo</span>
              </div>
              {FEATURES.map((row, i) => (
                <div key={row.feature} className={`grid grid-cols-3 px-6 py-4 text-sm ${i % 2 === 0 ? "" : "bg-surface/20"} border-b border-border/40 last:border-0`}>
                  <span className="text-foreground font-medium">{row.feature}</span>
                  <span className="flex justify-center">{row.gyc ? <Check className="h-5 w-5 text-emerald-400" /> : <X className="h-5 w-5 text-rose-400" />}</span>
                  <span className="flex justify-center">{row.zoom ? <Check className="h-5 w-5 text-emerald-400" /> : <X className="h-5 w-5 text-rose-400" />}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Switch */}
        <section className="bg-surface/30 py-20 px-6 border-y border-border/60">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-center font-display text-3xl font-bold mb-12">Why Startups Win With GetYourClientsB2B</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { icon: DollarSign, title: "No Enterprise Pricing", desc: "Skip the $15K/year ZoomInfo contract. Start free, pay monthly, cancel anytime. No sales calls required." },
                { icon: Rocket, title: "Set Up in Minutes", desc: "No 6-week onboarding. Create an account, set your industry and country filters, and start finding leads immediately." },
                { icon: Globe, title: "Built for Global Sales", desc: "Map-based prospecting across 190+ countries — purpose-built for teams selling internationally." },
                { icon: BarChart3, title: "Pipeline Included", desc: "ZoomInfo requires you to pair it with a CRM. GetYourClientsB2B manages pipeline and outreach natively." },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="rounded-xl border border-border/60 bg-surface/60 p-5 flex flex-col gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10"><Icon className="h-5 w-5 text-primary" /></div>
                  <h3 className="font-semibold text-foreground">{title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section className="py-20 px-6">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-center font-display text-3xl font-bold mb-12">What Teams Say After Switching from ZoomInfo</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {REVIEWS.map((r) => (
                <div key={r.name} className="rounded-xl border border-border/60 bg-surface/40 p-6 flex flex-col gap-4">
                  <div className="flex gap-1">{Array.from({ length: r.rating }).map((_, i) => <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />)}</div>
                  <p className="text-sm text-muted-foreground leading-relaxed italic">&ldquo;{r.text}&rdquo;</p>
                  <div className="mt-auto"><p className="text-sm font-semibold text-foreground">{r.name}</p><p className="text-xs text-muted-foreground">{r.role}</p></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-surface/30 border-t border-border/60 py-20 px-6">
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
        <section className="py-20 px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl font-bold mb-4">Enterprise B2B Discovery Without the Enterprise Price Tag</h2>
            <p className="text-muted-foreground mb-8 text-lg">Start free and see why growing teams choose GetYourClientsB2B over ZoomInfo.</p>
            <a href={APP_LOGIN_URL}>
              <Button size="lg" className="font-semibold px-10 shadow-lg shadow-primary/25">
                Get Started Free <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
            <p className="mt-4 text-xs text-muted-foreground">No credit card required · No annual contract · Cancel anytime</p>
          </div>
        </section>

        <MarketingFooter />
      </div>
    </>
  );
}
