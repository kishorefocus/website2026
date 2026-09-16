import type { Metadata } from "next";
import Link from "next/link";
import { Check, X, ArrowRight, Star, Mail, Database, Layers, Zap, DollarSign, Users, Globe, Target, TrendingUp, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MarketingNavbar } from "@/components/marketing/marketing-navbar";
import { MarketingFooter } from "@/components/marketing/marketing-footer";
import { JsonLd, breadcrumbSchema, faqSchema } from "@/components/seo/JsonLd";
import { APP_LOGIN_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Best Hunter Alternative 2025 — B2B Lead Discovery & Outreach CRM",
  description:
    "Looking for a Hunter alternative? GetYourClientsB2B offers email finding + full CRM + outreach sequences + map-based B2B prospecting — all in one tool. Try free, no credit card needed.",
  keywords: [
    "hunter alternative",
    "hunter.io alternative",
    "hunter alternative free",
    "best hunter alternative",
    "hunter alternative 2025",
    "hunter email finder alternative",
    "B2B email finder alternative",
    "cold outreach tool instead of hunter",
    "hunter.io competitor",
    "hunter.io replacement",
    "hunter io alternative",
    "free hunter alternative",
  ],
  alternates: {
    canonical: "https://getyourclientsb2b.com/compare/hunter-alternative",
  },
  openGraph: {
    title: "Best Hunter Alternative 2025 — B2B Leads & Outreach CRM | GetYourClientsB2B",
    description:
      "GetYourClientsB2B vs Hunter.io — email finding + built-in CRM + outreach sequences + map-based prospecting. One tool instead of three. Try free.",
    url: "https://getyourclientsb2b.com/compare/hunter-alternative",
    siteName: "GetYourClientsB2B",
    type: "website",
    images: [
      {
        url: "https://getyourclientsb2b.com/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "GetYourClientsB2B vs Hunter.io — Best Hunter Alternative 2025",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@GetYourClientsB2B",
    title: "Best Hunter Alternative 2025 — B2B Leads & Outreach CRM",
    description:
      "More than just email finding. Map-based B2B prospecting + built-in CRM + outreach automation. The #1 Hunter.io alternative.",
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
  { feature: "Reply Detection & Auto-Pause", gyc: true, hunter: false },
  { feature: "Lead Discovery by Company Size", gyc: true, hunter: false },
  { feature: "190+ Country Coverage", gyc: true, hunter: true },
  { feature: "API Access", gyc: true, hunter: true },
];

const PRICING = [
  { plan: "Free", gyc: "Free forever (3 leads)", hunter: "Free (25 searches/mo)" },
  { plan: "Starter / Growth", gyc: "$19/month (unlimited)", hunter: "$49/month (500 searches)" },
  { plan: "Pro", gyc: "$49/month", hunter: "$149/month (2,000 searches)" },
  { plan: "CRM Included", gyc: "✅ All plans", hunter: "❌ Not included" },
  { plan: "Outreach Sequences", gyc: "✅ All plans", hunter: "✅ Campaigns add-on" },
  { plan: "Per-user pricing", gyc: "❌ Flat rate", hunter: "✅ Per seat" },
];

const ALTERNATIVES = [
  {
    rank: 1,
    name: "GetYourClientsB2B",
    best: "Best Overall Hunter Alternative",
    pros: ["Full CRM + outreach built-in", "Map-based prospecting", "Flat-rate pricing", "190+ country coverage"],
    cons: ["Newer brand vs Hunter"],
    price: "Free – $49/mo",
    highlight: true,
  },
  {
    rank: 2,
    name: "Snov.io",
    best: "Best for Email Drip Campaigns",
    pros: ["Email finder + drip campaigns", "Chrome extension", "Large database"],
    cons: ["Expensive at scale", "CRM is basic"],
    price: "$39 – $738/mo",
    highlight: false,
  },
  {
    rank: 3,
    name: "Apollo.io",
    best: "Best for Enterprise Data",
    pros: ["Huge contact database", "Advanced filters", "Salesforce integration"],
    cons: ["Expensive", "Complex UI", "Data accuracy issues"],
    price: "$49 – $149/mo",
    highlight: false,
  },
  {
    rank: 4,
    name: "Clearbit",
    best: "Best for Data Enrichment",
    pros: ["Rich company data", "API-first", "Good CRM integrations"],
    cons: ["Very expensive", "No outreach tool", "Requires technical setup"],
    price: "$199+/mo",
    highlight: false,
  },
  {
    rank: 5,
    name: "Find That Email",
    best: "Best Bare-Bones Free Option",
    pros: ["Simple interface", "Browser extension", "Free plan"],
    cons: ["No CRM", "No sequences", "Small database"],
    price: "Free – $49/mo",
    highlight: false,
  },
];

const FAQS = [
  {
    question: "What is the best Hunter alternative in 2025?",
    answer:
      "GetYourClientsB2B is the top Hunter alternative in 2025 for teams that need more than just email finding. It combines B2B lead discovery, email verification, map-based prospecting, outreach sequences, and a built-in CRM — all in one platform, at a lower price than stitching together multiple tools.",
  },
  {
    question: "Why would I switch from Hunter.io to GetYourClientsB2B?",
    answer:
      "Hunter.io is great for email finding but lacks a built-in CRM and pipeline management. GetYourClientsB2B combines lead discovery, email verification, outreach sequences, and a full CRM in one platform — so you don't need to buy multiple tools or manage data sync between apps.",
  },
  {
    question: "Does GetYourClientsB2B verify email addresses like Hunter?",
    answer:
      "Yes. Email verification is included on all plans, with real-time validation before outreach to reduce bounce rates and protect your sender reputation. Emails are checked against MX records and SMTP validation before any sequence launches.",
  },
  {
    question: "Can I run outreach sequences with GetYourClientsB2B?",
    answer:
      "Yes. Unlike Hunter which requires a third-party tool for sequences, GetYourClientsB2B has a built-in outreach CRM with follow-up automation and reply tracking — no extra subscriptions needed. You can build multi-step sequences with custom delays and auto-pause when prospects reply.",
  },
  {
    question: "Is GetYourClientsB2B cheaper than Hunter.io?",
    answer:
      "Yes, significantly. Hunter's paid plans start at $49/month for just 500 searches. GetYourClientsB2B's Growth plan is $19/month and includes both lead discovery AND the outreach CRM with no search limits — making it 60–70% cheaper for full-cycle prospecting workflows.",
  },
  {
    question: "Is there a free Hunter alternative?",
    answer:
      "Yes. GetYourClientsB2B offers a free plan that includes B2B lead discovery and email finding with no credit card required — making it one of the only free Hunter.io alternatives that also includes CRM and outreach features at no cost.",
  },
  {
    question: "Does GetYourClientsB2B work for finding B2B leads internationally?",
    answer:
      "Absolutely. GetYourClientsB2B covers 190+ countries, letting you search for B2B leads by industry, country, and company size globally. This is especially useful for international B2B prospecting — something Hunter.io's domain-based search cannot do at scale.",
  },
  {
    question: "How does GetYourClientsB2B find B2B leads differently than Hunter?",
    answer:
      "Hunter.io finds emails by searching a specific company domain. GetYourClientsB2B lets you search broadly by industry, country, and company size — discovering businesses you didn't already know about, then finding their contact information. It's proactive discovery vs. lookup.",
  },
  {
    question: "Can I migrate my Hunter.io leads to GetYourClientsB2B?",
    answer:
      "Yes. You can export your Hunter.io leads as a CSV and import them directly into GetYourClientsB2B's CRM. From there, you can enrich them with additional data and add them to outreach sequences without any manual re-entry.",
  },
  {
    question: "Does GetYourClientsB2B integrate with my existing CRM?",
    answer:
      "GetYourClientsB2B includes a built-in CRM so most teams don't need an external integration. For teams using Salesforce, HubSpot, or Pipedrive, CSV export and API access allow you to sync data to your existing pipeline tools.",
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

const WHO_SHOULD_SWITCH = [
  {
    icon: Users,
    title: "Solo Founders & Freelancers",
    desc: "If you're prospecting alone and paying $49/month for Hunter + another tool for sequences, GetYourClientsB2B saves you 60% with everything in one subscription.",
  },
  {
    icon: Target,
    title: "Sales Teams of 5–50",
    desc: "Hunter's per-seat pricing gets expensive fast. GetYourClientsB2B's flat-rate plans let your whole team prospect and run outreach without per-user fees.",
  },
  {
    icon: Globe,
    title: "International B2B Teams",
    desc: "If you're prospecting outside your home country, Hunter's domain-based search is limited. GetYourClientsB2B lets you search by industry + country across 190+ nations.",
  },
  {
    icon: TrendingUp,
    title: "B2B Agencies",
    desc: "Agencies managing multiple clients need a CRM built into their prospecting workflow. GetYourClientsB2B lets you find leads and manage client pipelines in the same platform.",
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
              #1 Hunter.io Alternative 2025
            </div>
            <h1 className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              The Best{" "}
              <span className="gradient-text">Hunter Alternative</span>{" "}
              With a Full Outreach CRM Built In
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
              Hunter.io finds emails. GetYourClientsB2B finds emails{" "}
              <em>and</em> manages your pipeline, runs outreach sequences, and
              shows B2B leads on a live map — all in one platform, at a fraction
              of the cost.
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
            <p className="mt-6 text-xs text-muted-foreground">
              Join thousands of B2B teams who switched from Hunter · Free plan available · No credit card required
            </p>
          </div>
        </section>

        {/* Quick Stats Bar */}
        <section className="border-b border-border/60 bg-surface/40 py-8 px-6">
          <div className="mx-auto max-w-5xl grid grid-cols-2 gap-6 sm:grid-cols-4 text-center">
            {[
              { stat: "190+", label: "Countries Covered" },
              { stat: "$19/mo", label: "Starting Price (vs $49 Hunter)" },
              { stat: "All-in-1", label: "Find + CRM + Outreach" },
              { stat: "Free", label: "Plan Available" },
            ].map(({ stat, label }) => (
              <div key={label} className="flex flex-col gap-1">
                <span className="text-2xl font-bold text-primary font-display">{stat}</span>
                <span className="text-xs text-muted-foreground">{label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Feature Comparison Table */}
        <section className="py-20 px-6">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-center font-display text-3xl font-bold text-foreground mb-3">
              GetYourClientsB2B vs Hunter.io — Full Feature Comparison
            </h2>
            <p className="text-center text-muted-foreground mb-12">
              A detailed side-by-side comparison for cold outreach and B2B prospecting teams
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

        {/* Pricing Comparison */}
        <section className="bg-surface/30 py-20 px-6 border-y border-border/60">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-center font-display text-3xl font-bold mb-3">
              Hunter.io Pricing vs GetYourClientsB2B Pricing (2025)
            </h2>
            <p className="text-center text-muted-foreground mb-12">
              GetYourClientsB2B is 60–70% cheaper than Hunter — and includes CRM + outreach sequences in every plan.
            </p>
            <div className="overflow-hidden rounded-2xl border border-border bg-surface/40">
              <div className="grid grid-cols-3 border-b border-border bg-surface/80 px-6 py-4 text-sm font-semibold">
                <span className="text-muted-foreground">Plan</span>
                <span className="text-center text-primary">GetYourClientsB2B</span>
                <span className="text-center text-muted-foreground">Hunter.io</span>
              </div>
              {PRICING.map((row, i) => (
                <div
                  key={row.plan}
                  className={`grid grid-cols-3 px-6 py-4 text-sm ${i % 2 === 0 ? "" : "bg-surface/20"} border-b border-border/40 last:border-0`}
                >
                  <span className="text-foreground font-medium">{row.plan}</span>
                  <span className="text-center text-emerald-400 font-medium">{row.gyc}</span>
                  <span className="text-center text-muted-foreground">{row.hunter}</span>
                </div>
              ))}
            </div>
            <p className="text-center text-xs text-muted-foreground mt-4">
              Pricing as of September 2025. Visit{" "}
              <Link href="/pricing" className="text-primary underline">our pricing page</Link>{" "}
              for current GetYourClientsB2B plans.
            </p>
          </div>
        </section>

        {/* Why Switch — Features */}
        <section className="py-20 px-6">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-center font-display text-3xl font-bold mb-3">
              Why Teams Switch from Hunter.io to GetYourClientsB2B
            </h2>
            <p className="text-center text-muted-foreground mb-14">
              Hunter.io solves one problem. GetYourClientsB2B solves the entire B2B client outreach workflow.
            </p>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { icon: Mail, title: "Email Discovery & Verification", desc: "Find and verify B2B emails by industry, country, and company size — just like Hunter, but with richer filters and broader discovery." },
                { icon: Database, title: "Industry & Country Filters", desc: "Search specifically within industries like SaaS, Manufacturing, Healthcare. Hunter only searches by domain — limiting prospecting scope." },
                { icon: Layers, title: "No Extra Tools Needed", desc: "Hunter requires CRM + email sequences from separate tools. GetYourClientsB2B includes it all — one subscription, one workflow." },
                { icon: Zap, title: "Outreach Automation", desc: "Run cold email sequences with follow-ups, reply detection, and bounce handling — directly inside the same platform where you found the leads." },
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

        {/* Top 5 Hunter Alternatives */}
        <section className="bg-surface/30 border-y border-border/60 py-20 px-6">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-center font-display text-3xl font-bold mb-3">
              Top 5 Hunter Alternatives in 2025 (Ranked)
            </h2>
            <p className="text-center text-muted-foreground mb-14">
              We compared the most popular Hunter.io alternatives across pricing, features, and ease of use.
            </p>
            <div className="space-y-4">
              {ALTERNATIVES.map((alt) => (
                <div
                  key={alt.name}
                  className={`rounded-xl border p-6 flex flex-col md:flex-row gap-4 ${
                    alt.highlight
                      ? "border-primary/40 bg-primary/5"
                      : "border-border/60 bg-surface/40"
                  }`}
                >
                  <div className="flex items-start gap-4 flex-1">
                    <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold ${alt.highlight ? "bg-primary text-white" : "bg-surface/80 text-muted-foreground border border-border"}`}>
                      #{alt.rank}
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <h3 className="font-bold text-foreground text-lg">{alt.name}</h3>
                        {alt.highlight && (
                          <span className="text-xs bg-primary/10 text-primary border border-primary/20 rounded-full px-2 py-0.5 font-semibold">
                            Recommended
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-primary font-medium mb-3">{alt.best}</p>
                      <div className="grid sm:grid-cols-2 gap-3">
                        <div>
                          <p className="text-xs text-muted-foreground font-semibold mb-1 uppercase tracking-wide">Pros</p>
                          <ul className="space-y-1">
                            {alt.pros.map((p) => (
                              <li key={p} className="flex items-start gap-1.5 text-sm text-foreground">
                                <Check className="h-3.5 w-3.5 text-emerald-400 mt-0.5 shrink-0" />
                                {p}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground font-semibold mb-1 uppercase tracking-wide">Cons</p>
                          <ul className="space-y-1">
                            {alt.cons.map((c) => (
                              <li key={c} className="flex items-start gap-1.5 text-sm text-muted-foreground">
                                <X className="h-3.5 w-3.5 text-rose-400 mt-0.5 shrink-0" />
                                {c}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end justify-between gap-3 shrink-0">
                    <div className="text-right">
                      <p className="text-xs text-muted-foreground">Starting price</p>
                      <p className="font-bold text-foreground">{alt.price}</p>
                    </div>
                    {alt.highlight && (
                      <a href={APP_LOGIN_URL}>
                        <Button size="sm" className="font-semibold">
                          Try Free <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                        </Button>
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Who Should Switch */}
        <section className="py-20 px-6">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-center font-display text-3xl font-bold mb-3">
              Who Should Use a Hunter Alternative?
            </h2>
            <p className="text-center text-muted-foreground mb-14">
              Hunter.io works well for specific use cases — but these teams get far more value from GetYourClientsB2B.
            </p>
            <div className="grid gap-6 sm:grid-cols-2">
              {WHO_SHOULD_SWITCH.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="rounded-xl border border-border/60 bg-surface/40 p-6 flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
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

        {/* How to Migrate — Step by Step */}
        <section className="bg-surface/30 border-y border-border/60 py-20 px-6">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-center font-display text-3xl font-bold mb-3">
              How to Switch from Hunter.io to GetYourClientsB2B (Step-by-Step)
            </h2>
            <p className="text-center text-muted-foreground mb-14">
              Migration takes less than 30 minutes. Here&apos;s exactly how to do it.
            </p>
            <div className="space-y-4">
              {[
                {
                  step: "1",
                  title: "Export Your Hunter.io Leads",
                  desc: "In Hunter.io, go to Leads → Export → Download as CSV. This exports all your contacts, emails, and any notes attached to them.",
                },
                {
                  step: "2",
                  title: "Sign Up for GetYourClientsB2B (Free)",
                  desc: "Create your free account at GetYourClientsB2B. No credit card required. Your account is ready instantly — no onboarding call needed.",
                },
                {
                  step: "3",
                  title: "Import Your CSV into the CRM",
                  desc: "In GetYourClientsB2B, go to CRM → Import → Upload CSV. Map the columns from your Hunter export (name, email, company) and all contacts import in seconds.",
                },
                {
                  step: "4",
                  title: "Set Up Your First Outreach Sequence",
                  desc: "In the Outreach section, create a new sequence. Add your imported contacts as the audience, write your email steps, and set delays. Your first campaign is ready to launch.",
                },
                {
                  step: "5",
                  title: "Start Prospecting New Leads",
                  desc: "Use the lead discovery engine to search for new B2B leads by industry and country. Add them directly to your sequences — no copy-paste, no CSV juggling.",
                },
              ].map(({ step, title, desc }) => (
                <div key={step} className="flex gap-4 rounded-xl border border-border/60 bg-surface/60 p-6">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-white font-bold text-sm">
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

        {/* Reviews */}
        <section className="py-20 px-6">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-center font-display text-3xl font-bold mb-12">
              What Teams Say After Switching from Hunter
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

        {/* Internal Links / Related Pages */}
        <section className="bg-surface/20 border-y border-border/60 py-12 px-6">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-center font-display text-xl font-bold mb-8 text-foreground">
              Explore More from GetYourClientsB2B
            </h2>
            <div className="grid gap-4 sm:grid-cols-3">
              <Link
                href="/features/lead-discovery"
                className="rounded-xl border border-border/60 bg-surface/60 p-4 hover:border-primary/40 hover:bg-primary/5 transition-colors group"
              >
                <h3 className="font-semibold text-foreground group-hover:text-primary text-sm mb-1 flex items-center gap-1">
                  B2B Lead Discovery <ArrowRight className="h-3 w-3" />
                </h3>
                <p className="text-xs text-muted-foreground">Find B2B leads by industry & country across 190+ nations</p>
              </Link>
              <Link
                href="/features/crm-outreach"
                className="rounded-xl border border-border/60 bg-surface/60 p-4 hover:border-primary/40 hover:bg-primary/5 transition-colors group"
              >
                <h3 className="font-semibold text-foreground group-hover:text-primary text-sm mb-1 flex items-center gap-1">
                  Client Outreach CRM <ArrowRight className="h-3 w-3" />
                </h3>
                <p className="text-xs text-muted-foreground">Run cold email sequences and manage your B2B pipeline</p>
              </Link>
              <Link
                href="/compare/apollo-alternative"
                className="rounded-xl border border-border/60 bg-surface/60 p-4 hover:border-primary/40 hover:bg-primary/5 transition-colors group"
              >
                <h3 className="font-semibold text-foreground group-hover:text-primary text-sm mb-1 flex items-center gap-1">
                  Apollo.io Alternative <ArrowRight className="h-3 w-3" />
                </h3>
                <p className="text-xs text-muted-foreground">See how we compare to Apollo.io for B2B prospecting</p>
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 px-6">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-center font-display text-3xl font-bold mb-12">
              Frequently Asked Questions — Hunter Alternative
            </h2>
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
            <h2 className="font-display text-3xl font-bold mb-4">
              Ready to Switch from Hunter.io?
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Get everything Hunter offers — plus a full CRM, outreach sequences, and map-based prospecting — completely free to start.
            </p>
            <a href={APP_LOGIN_URL}>
              <Button size="lg" className="font-semibold px-10 shadow-lg shadow-primary/25">
                Get Started Free <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
            <p className="mt-4 text-xs text-muted-foreground">
              No credit card required · Free plan available · Cancel anytime
            </p>
            <p className="mt-6 text-sm text-muted-foreground">
              Also looking for other comparisons?{" "}
              <Link href="/compare/apollo-alternative" className="text-primary underline">Apollo.io alternative</Link>{" · "}
              <Link href="/compare/lusha-alternative" className="text-primary underline">Lusha alternative</Link>{" · "}
              <Link href="/compare/zoominfo-alternative" className="text-primary underline">ZoomInfo alternative</Link>
            </p>
          </div>
        </section>

        <MarketingFooter />
      </div>
    </>
  );
}
