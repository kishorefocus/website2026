import type { Metadata } from "next";
import Link from "next/link";
import { Check, X, ArrowRight, Star, Mail, Database, Layers, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MarketingNavbar } from "@/components/marketing/marketing-navbar";
import { MarketingFooter } from "@/components/marketing/marketing-footer";
import { JsonLd, breadcrumbSchema, faqSchema } from "@/components/seo/JsonLd";
import { APP_LOGIN_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Hunter.io Alternative — B2B Leads & Outreach CRM",
  description:
    "GetYourClientsB2B is the top Hunter.io alternative for teams needing full CRM + outreach automation. Search B2B leads by industry & country. No credit card required.",
  keywords: [
    "Hunter.io alternative",
    "Hunter alternative email finder",
    "GetYourClients vs Hunter",
    "B2B email finder alternative",
    "cold outreach CRM alternative to Hunter",
  ],
  alternates: {
    canonical: "https://getyourclientsb2b.com/compare/hunter-alternative",
  },
  openGraph: {
    title: "Hunter.io Alternative — Find B2B Leads & Run Outreach | GetYourClientsB2B",
    description:
      "GetYourClientsB2B vs Hunter.io — more than just email finding. Built-in CRM, outreach sequences, and map-based prospecting.",
    url: "https://getyourclientsb2b.com/compare/hunter-alternative",
    siteName: "GetYourClientsB2B",
    type: "website",
    images: [
      {
        url: "https://getyourclientsb2b.com/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "GetYourClientsB2B vs Hunter.io — B2B Email & Outreach Comparison",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@GetYourClientsB2B",
    title: "Hunter.io Alternative — B2B Leads & Outreach CRM | GetYourClientsB2B",
    description:
      "More than just email finding. Map-based B2B prospecting + built-in cold outreach CRM. Better than Hunter.io.",
    images: ["https://getyourclientsb2b.com/images/og-image.png"],
  },
};

const FEATURES = [
  { feature: "B2B Email Discovery", gyc: true, hunter: true },
  { feature: "Email Verification", gyc: true, hunter: true },
  { feature: "Map-Based Lead Search", gyc: true, hunter: false },
  { feature: "Built-in Outreach CRM", gyc: true, hunter: false },
  { feature: "Cold Email Sequences", gyc: true, hunter: true },
  { feature: "Industry Filters", gyc: true, hunter: false },
  { feature: "Country / Region Filters", gyc: true, hunter: true },
  { feature: "Free Plan Available", gyc: true, hunter: true },
  { feature: "Bulk Export (CSV)", gyc: true, hunter: true },
  { feature: "Pipeline Management", gyc: true, hunter: false },
];

const FAQS = [
  {
    question: "Why would I switch from Hunter.io to GetYourClientsB2B?",
    answer:
      "Hunter.io is great for email finding but lacks a built-in CRM and pipeline management. GetYourClientsB2B combines lead discovery, email verification, outreach sequences, and a full CRM in one platform — so you don't need to buy multiple tools.",
  },
  {
    question: "Does GetYourClientsB2B verify email addresses like Hunter?",
    answer:
      "Yes. Email verification is included on all plans, with real-time validation before outreach to reduce bounce rates.",
  },
  {
    question: "Can I run outreach sequences with GetYourClientsB2B?",
    answer:
      "Yes. Unlike Hunter which requires a third-party tool for sequences, GetYourClientsB2B has a built-in outreach CRM with follow-up automation and reply tracking.",
  },
  {
    question: "Is GetYourClientsB2B cheaper than Hunter.io?",
    answer:
      "Hunter's paid plans start at $49/month for 500 searches. GetYourClientsB2B's flat-rate pricing includes both lead discovery AND outreach CRM in one plan — making it more cost-effective for full-cycle prospecting.",
  },
];

const REVIEWS = [
  {
    name: "Sofia M.",
    role: "Agency Owner, Digital Sales Studio",
    text: "Hunter was great for emails, but I still needed HubSpot on top. GetYourClientsB2B replaced both. The built-in CRM changed how we manage client pipelines.",
    rating: 5,
  },
  {
    name: "Daniel W.",
    role: "Sales Manager, SaaS Company",
    text: "The industry filter is something Hunter just doesn't have. Being able to find all SaaS companies in specific cities and countries in one view is incredibly useful.",
    rating: 5,
  },
  {
    name: "Anna L.",
    role: "Freelance B2B Consultant",
    text: "I used Hunter for 2 years. GetYourClientsB2B has the same email quality plus everything else I needed — and the map view is genuinely impressive.",
    rating: 5,
  },
];

export default function HunterAlternativePage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "https://getyourclientsb2b.com" },
          { name: "Compare", url: "https://getyourclientsb2b.com/compare" },
          { name: "Hunter.io Alternative", url: "https://getyourclientsb2b.com/compare/hunter-alternative" },
        ])}
      />
      <JsonLd data={faqSchema(FAQS)} />

      <div className="min-h-screen flex flex-col bg-background text-foreground">
        <MarketingNavbar />

        {/* Hero */}
        <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-br from-background via-surface/60 to-background py-20 lg:py-28">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,hsl(228,100%,64%,0.12),transparent)]" />
          <div className="relative mx-auto max-w-5xl px-6 text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary">
              Hunter.io Alternative
            </div>
            <h1 className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              The{" "}
              <span className="gradient-text">Hunter.io Alternative</span>{" "}
              With a Full Outreach CRM Built In
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
              Hunter.io finds emails. GetYourClientsB2B finds emails{" "}
              <em>and</em> manages your pipeline, runs outreach sequences, and
              shows leads on a live map — all in one platform.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <a href={APP_LOGIN_URL}>
                <Button size="lg" className="font-semibold px-8 shadow-lg shadow-primary/25">
                  Try Free — No Credit Card <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
              <Link href="/pricing">
                <Button size="lg" variant="outline" className="font-semibold px-8">
                  See Pricing
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Feature Comparison Table */}
        <section className="py-20 px-6">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-center font-display text-3xl font-bold text-foreground mb-3">
              GetYourClientsB2B vs Hunter.io
            </h2>
            <p className="text-center text-muted-foreground mb-12">
              Full feature comparison for cold outreach and B2B prospecting
            </p>
            <div className="overflow-hidden rounded-2xl border border-border bg-surface/40">
              <div className="grid grid-cols-3 border-b border-border bg-surface/80 px-6 py-4 text-sm font-semibold">
                <span className="text-muted-foreground">Feature</span>
                <span className="text-center text-primary">GetYourClientsB2B</span>
                <span className="text-center text-muted-foreground">Hunter.io</span>
              </div>
              {FEATURES.map((row, i) => (
                <div
                  key={row.feature}
                  className={`grid grid-cols-3 px-6 py-4 text-sm ${i % 2 === 0 ? "" : "bg-surface/20"} border-b border-border/40 last:border-0`}
                >
                  <span className="text-foreground font-medium">{row.feature}</span>
                  <span className="flex justify-center">
                    {row.gyc ? <Check className="h-5 w-5 text-emerald-400" /> : <X className="h-5 w-5 text-rose-400" />}
                  </span>
                  <span className="flex justify-center">
                    {row.hunter ? <Check className="h-5 w-5 text-emerald-400" /> : <X className="h-5 w-5 text-rose-400" />}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Switch */}
        <section className="bg-surface/30 py-20 px-6 border-y border-border/60">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-center font-display text-3xl font-bold mb-12">
              More Than Just Email Finding
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { icon: Mail, title: "Email Discovery & Verification", desc: "Find and verify B2B emails by industry, country, and company size — just like Hunter, but with richer filters." },
                { icon: Database, title: "Industry & Country Filters", desc: "Search specifically within industries like SaaS, Manufacturing, Healthcare — Hunter lacks this granularity." },
                { icon: Layers, title: "No Extra Tools Needed", desc: "Hunter requires CRM + sequences from elsewhere. GetYourClientsB2B includes it all — one subscription." },
                { icon: Zap, title: "Outreach Automation", desc: "Run cold email sequences with follow-ups, reply detection, and bounce handling — directly from the platform." },
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

        {/* Reviews */}
        <section className="py-20 px-6">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-center font-display text-3xl font-bold mb-12">
              What Teams Say After Switching
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              {REVIEWS.map((review) => (
                <div key={review.name} className="rounded-xl border border-border/60 bg-surface/40 p-6 flex flex-col gap-4">
                  <div className="flex gap-1">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed italic">&ldquo;{review.text}&rdquo;</p>
                  <div className="mt-auto">
                    <p className="text-sm font-semibold text-foreground">{review.name}</p>
                    <p className="text-xs text-muted-foreground">{review.role}</p>
                  </div>
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
            <h2 className="font-display text-3xl font-bold mb-4">Ready to Go Beyond Email Finding?</h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Get everything Hunter offers — plus CRM, outreach sequences, and map-based prospecting — free.
            </p>
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
