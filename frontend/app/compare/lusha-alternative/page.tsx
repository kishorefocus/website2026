import type { Metadata } from "next";
import Link from "next/link";
import { Check, X, ArrowRight, Star, Users, Globe, ShieldCheck, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MarketingNavbar } from "@/components/marketing/marketing-navbar";
import { MarketingFooter } from "@/components/marketing/marketing-footer";
import { JsonLd, breadcrumbSchema, faqSchema } from "@/components/seo/JsonLd";
import { APP_LOGIN_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Lusha Alternative — B2B Lead Discovery & Outreach CRM",
  description:
    "GetYourClientsB2B vs Lusha — better B2B data coverage, built-in cold outreach CRM, and map-based prospecting. Try free with no credit card required.",
  keywords: [
    "Lusha alternative",
    "GetYourClients vs Lusha",
    "Lusha competitor",
    "B2B data provider alternative",
    "Lusha replacement",
  ],
  alternates: {
    canonical: "https://www.getyourclientsb2b.com/compare/lusha-alternative",
  },
  openGraph: {
    title: "Lusha Alternative — B2B Lead Discovery & Outreach CRM | GetYourClientsB2B",
    description:
      "Compare GetYourClientsB2B vs Lusha. Map-based prospecting, built-in CRM, and 190+ country coverage vs Lusha's contact enrichment.",
    url: "https://www.getyourclientsb2b.com/compare/lusha-alternative",
    siteName: "GetYourClientsB2B",
    type: "website",
    images: [
      {
        url: "https://www.getyourclientsb2b.com/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "GetYourClientsB2B vs Lusha — B2B Data & Outreach Comparison",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@GetYourClientsB2B",
    title: "Lusha Alternative — B2B Lead Discovery & Outreach CRM | GetYourClientsB2B",
    description:
      "Map-based B2B lead discovery + built-in outreach CRM. Better coverage than Lusha, with flat-rate pricing.",
    images: ["https://www.getyourclientsb2b.com/images/og-image.png"],
  },
};

const FEATURES = [
  { feature: "B2B Contact Discovery", gyc: true, lusha: true },
  { feature: "Map-Based Prospecting", gyc: true, lusha: false },
  { feature: "Built-in Outreach CRM", gyc: true, lusha: false },
  { feature: "Industry Filters", gyc: true, lusha: true },
  { feature: "190+ Country Coverage", gyc: true, lusha: true },
  { feature: "Cold Email Sequences", gyc: true, lusha: false },
  { feature: "Free Plan Available", gyc: true, lusha: true },
  { feature: "Pipeline Management", gyc: true, lusha: false },
  { feature: "Real-Time Data Validation", gyc: true, lusha: true },
  { feature: "Flat-Rate Team Pricing", gyc: true, lusha: false },
];

const FAQS = [
  {
    question: "How does GetYourClientsB2B compare to Lusha for B2B data quality?",
    answer:
      "Both platforms provide verified B2B contact data. GetYourClientsB2B additionally offers real-time map-based discovery by industry and country, letting you visually identify lead clusters that Lusha's search interface doesn't support.",
  },
  {
    question: "Does GetYourClientsB2B have a free plan like Lusha?",
    answer:
      "Yes. GetYourClientsB2B offers a free plan with access to core lead discovery and outreach features. Unlike Lusha's free tier which is heavily credits-limited, our free plan lets you fully evaluate the platform.",
  },
  {
    question: "Can GetYourClientsB2B replace both Lusha and my CRM?",
    answer:
      "Yes. GetYourClientsB2B includes a built-in outreach CRM with pipeline management, so you don't need a separate tool alongside your contact data provider.",
  },
  {
    question: "Is GetYourClientsB2B better for international B2B prospecting than Lusha?",
    answer:
      "For international teams, yes. Our map-based interface lets you visually prospect across 190+ countries, filtering by industry and company type — a major workflow advantage for teams selling across borders.",
  },
];

const REVIEWS = [
  {
    name: "Rafael B.",
    role: "VP Sales, SaaS Scale-Up",
    text: "Lusha is good for enrichment but we needed to find net-new leads proactively. GetYourClientsB2B's search-by-industry-and-country workflow is exactly what our outbound team needed.",
    rating: 5,
  },
  {
    name: "Mei L.",
    role: "SDR Team Lead",
    text: "The map view blew our team away in the demo. Seeing leads plotted geographically by industry makes territory planning so much easier than any spreadsheet or Lusha export.",
    rating: 5,
  },
  {
    name: "Arjun S.",
    role: "Founder, B2B Consulting",
    text: "I used Lusha for contact data and then had to manage follow-ups elsewhere. GetYourClientsB2B is one tab, one workflow. Game-changer for a solo founder.",
    rating: 5,
  },
];

export default function LushaAlternativePage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([
        { name: "Home", url: "https://www.getyourclientsb2b.com" },
        { name: "Compare", url: "https://www.getyourclientsb2b.com/compare" },
        { name: "Lusha Alternative", url: "https://www.getyourclientsb2b.com/compare/lusha-alternative" },
      ])} />
      <JsonLd data={faqSchema(FAQS)} />

      <div className="min-h-screen flex flex-col bg-background text-foreground">
        <MarketingNavbar />

        {/* Hero */}
        <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-br from-background via-surface/60 to-background py-20 lg:py-28">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,hsl(228,100%,64%,0.12),transparent)]" />
          <div className="relative mx-auto max-w-5xl px-6 text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary">
              Lusha Alternative
            </div>
            <h1 className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              The <span className="gradient-text">Lusha Alternative</span> Built
              for Active Prospecting Teams
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
              Go beyond contact enrichment. GetYourClientsB2B lets you actively
              discover, map, and outreach to B2B leads across 190+ countries
              from a single platform — with a built-in CRM included.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <a href={APP_LOGIN_URL}>
                <Button size="lg" className="font-semibold px-8 shadow-lg shadow-primary/25">
                  Try Free — No Credit Card <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
              <Link href="/pricing">
                <Button size="lg" variant="outline" className="font-semibold px-8">See Pricing</Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-20 px-6">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-center font-display text-3xl font-bold text-foreground mb-3">GetYourClientsB2B vs Lusha</h2>
            <p className="text-center text-muted-foreground mb-12">Feature-by-feature comparison for B2B data quality face-off</p>
            <div className="overflow-hidden rounded-2xl border border-border bg-surface/40">
              <div className="grid grid-cols-3 border-b border-border bg-surface/80 px-6 py-4 text-sm font-semibold">
                <span className="text-muted-foreground">Feature</span>
                <span className="text-center text-primary">GetYourClientsB2B</span>
                <span className="text-center text-muted-foreground">Lusha</span>
              </div>
              {FEATURES.map((row, i) => (
                <div key={row.feature} className={`grid grid-cols-3 px-6 py-4 text-sm ${i % 2 === 0 ? "" : "bg-surface/20"} border-b border-border/40 last:border-0`}>
                  <span className="text-foreground font-medium">{row.feature}</span>
                  <span className="flex justify-center">{row.gyc ? <Check className="h-5 w-5 text-emerald-400" /> : <X className="h-5 w-5 text-rose-400" />}</span>
                  <span className="flex justify-center">{row.lusha ? <Check className="h-5 w-5 text-emerald-400" /> : <X className="h-5 w-5 text-rose-400" />}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Switch */}
        <section className="bg-surface/30 py-20 px-6 border-y border-border/60">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-center font-display text-3xl font-bold mb-12">Why Active Prospectors Choose GetYourClientsB2B</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { icon: Globe, title: "Active Discovery", desc: "Don't wait for contacts to come to you. Search and discover B2B leads proactively across industries and geographies." },
                { icon: TrendingUp, title: "Pipeline Management", desc: "Track every lead from first touch to closed deal inside the same platform where you find them." },
                { icon: Users, title: "Team Collaboration", desc: "Assign leads, share pipelines, and collaborate on outreach sequences — flat-rate pricing means no per-seat bloat." },
                { icon: ShieldCheck, title: "GDPR-Aware", desc: "Operate with compliant outreach workflows. Our platform is built with international privacy regulations in mind." },
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
            <h2 className="text-center font-display text-3xl font-bold mb-12">Trusted by Prospecting Teams Worldwide</h2>
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
            <h2 className="font-display text-3xl font-bold mb-4">Switch from Lusha to a Full Prospecting Platform</h2>
            <p className="text-muted-foreground mb-8 text-lg">Get contact data plus CRM, outreach, and map-based discovery — all in one tool.</p>
            <a href={APP_LOGIN_URL}>
              <Button size="lg" className="font-semibold px-10 shadow-lg shadow-primary/25">
                Get Started Free <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
            <p className="mt-4 text-xs text-muted-foreground">No credit card required · Free plan available · Cancel anytime</p>
          </div>
        </section>

        <MarketingFooter />
      </div>
    </>
  );
}
