import type { Metadata } from "next";
import Link from "next/link";
import { Check, X, ArrowRight, Star, Zap, Globe, BarChart3, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MarketingNavbar } from "@/components/marketing/marketing-navbar";
import { MarketingFooter } from "@/components/marketing/marketing-footer";
import { JsonLd, breadcrumbSchema, faqSchema } from "@/components/seo/JsonLd";
import { APP_LOGIN_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Best Apollo.io Alternative in 2026",
  description:
    "Looking for an Apollo.io alternative? GetYourClientsB2B offers B2B lead discovery, map-based prospecting, and cold outreach CRM at a fraction of the cost. Try free — no credit card required.",
  keywords: [
    "Apollo.io alternative",
    "best Apollo.io alternatives 2026",
    "GetYourClients vs Apollo",
    "B2B lead generation software alternative",
    "affordable Apollo alternative",
  ],
  alternates: {
    canonical: "https://getyourclientsb2b.com/compare/apollo-alternative",
  },
  openGraph: {
    title: "Best Apollo.io Alternative in 2026 | GetYourClientsB2B",
    description:
      "GetYourClientsB2B vs Apollo.io — side-by-side feature & pricing comparison. Map-based B2B prospecting at a fraction of Apollo's cost.",
    url: "https://getyourclientsb2b.com/compare/apollo-alternative",
    type: "website",
  },
};

const FEATURES = [
  { feature: "B2B Lead Discovery by Industry", gyc: true, apollo: true },
  { feature: "Map-Based Lead Prospecting", gyc: true, apollo: false },
  { feature: "Cold Outreach CRM (built-in)", gyc: true, apollo: true },
  { feature: "Free Plan Available", gyc: true, apollo: false },
  { feature: "No Per-Seat Pricing", gyc: true, apollo: false },
  { feature: "190+ Countries Coverage", gyc: true, apollo: true },
  { feature: "Industry + Country Filters", gyc: true, apollo: true },
  { feature: "Email Verification", gyc: true, apollo: true },
  { feature: "Real-Time Data Refresh", gyc: true, apollo: false },
  { feature: "Dedicated Support (all plans)", gyc: true, apollo: false },
];

const FAQS = [
  {
    question: "Is GetYourClientsB2B a good Apollo.io alternative?",
    answer:
      "Yes. GetYourClientsB2B offers B2B lead discovery, industry & country filters, and a built-in cold outreach CRM — covering the same core use case as Apollo.io, with a map-based prospecting interface that Apollo doesn't have. Plans start free.",
  },
  {
    question: "How does GetYourClientsB2B pricing compare to Apollo.io?",
    answer:
      "Apollo.io's paid plans start at $49/user/month and scale with seat count. GetYourClientsB2B offers flat-rate plans starting free, making it significantly more affordable for small teams and agencies.",
  },
  {
    question: "Can I migrate from Apollo.io to GetYourClientsB2B?",
    answer:
      "Yes. You can export your Apollo data as CSV and import it into GetYourClientsB2B. Our team offers free onboarding support during migration.",
  },
  {
    question: "Does GetYourClientsB2B have email verification like Apollo?",
    answer:
      "Yes. GetYourClientsB2B verifies email addresses before you export or run outreach, reducing bounce rates and protecting your sender reputation.",
  },
];

const REVIEWS = [
  {
    name: "Marcus T.",
    role: "Head of Sales, SaaS startup",
    text: "We switched from Apollo and immediately noticed the map view. Finding manufacturers in Germany or SaaS companies in Dubai is 10x more intuitive. The price difference alone made it a no-brainer.",
    rating: 5,
  },
  {
    name: "Priya K.",
    role: "Founder, B2B Agency",
    text: "Apollo's per-seat pricing was killing us as we scaled. GetYourClientsB2B's flat pricing means we can add the whole team without a budget conversation every time.",
    rating: 5,
  },
  {
    name: "James R.",
    role: "SDR, Mid-Market Tech Company",
    text: "The cold outreach CRM is built right in — I don't have to export leads, import them into another tool, and pray the data is still accurate. Everything just works together.",
    rating: 5,
  },
];

export default function ApolloAlternativePage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "https://getyourclientsb2b.com" },
          { name: "Compare", url: "https://getyourclientsb2b.com/compare" },
          {
            name: "Apollo.io Alternative",
            url: "https://getyourclientsb2b.com/compare/apollo-alternative",
          },
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
              Apollo.io Alternative
            </div>
            <h1 className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              The Best{" "}
              <span className="gradient-text">Apollo.io Alternative</span> for
              Teams That Sell Globally
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
              GetYourClientsB2B delivers the same B2B lead discovery and cold
              outreach CRM as Apollo — with a live map interface, flat-rate
              pricing, and 190+ country coverage. Plans start free.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <a href={APP_LOGIN_URL}>
                <Button size="lg" className="font-semibold px-8 shadow-lg shadow-primary/25">
                  Try Free — No Credit Card <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
              <Link href="/pricing">
                <Button size="lg" variant="outline" className="font-semibold px-8">
                  Compare Pricing
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Feature Comparison Table */}
        <section className="py-20 px-6">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-center font-display text-3xl font-bold text-foreground mb-3">
              GetYourClientsB2B vs Apollo.io
            </h2>
            <p className="text-center text-muted-foreground mb-12">
              Side-by-side feature comparison for B2B prospecting teams
            </p>
            <div className="overflow-hidden rounded-2xl border border-border bg-surface/40">
              <div className="grid grid-cols-3 border-b border-border bg-surface/80 px-6 py-4 text-sm font-semibold">
                <span className="text-muted-foreground">Feature</span>
                <span className="text-center text-primary">GetYourClientsB2B</span>
                <span className="text-center text-muted-foreground">Apollo.io</span>
              </div>
              {FEATURES.map((row, i) => (
                <div
                  key={row.feature}
                  className={`grid grid-cols-3 px-6 py-4 text-sm ${i % 2 === 0 ? "" : "bg-surface/20"} border-b border-border/40 last:border-0`}
                >
                  <span className="text-foreground font-medium">{row.feature}</span>
                  <span className="flex justify-center">
                    {row.gyc ? (
                      <Check className="h-5 w-5 text-emerald-400" />
                    ) : (
                      <X className="h-5 w-5 text-rose-400" />
                    )}
                  </span>
                  <span className="flex justify-center">
                    {row.apollo ? (
                      <Check className="h-5 w-5 text-emerald-400" />
                    ) : (
                      <X className="h-5 w-5 text-rose-400" />
                    )}
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
              Why Teams Switch from Apollo to GetYourClientsB2B
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { icon: Globe, title: "Map-Based Prospecting", desc: "Visually search and filter B2B leads on a live map by industry and geography — unique to GetYourClientsB2B." },
                { icon: Zap, title: "Flat-Rate Pricing", desc: "No per-seat costs. Scale your team without your bill growing linearly. Apollo charges per user." },
                { icon: BarChart3, title: "Built-in Outreach CRM", desc: "Manage your pipeline, track replies, and run sequences without switching between tabs or tools." },
                { icon: Shield, title: "Free Plan to Start", desc: "Try the full platform free. Apollo's free plan is extremely limited compared to GetYourClientsB2B." },
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

        {/* Social Proof */}
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
                  <p className="text-sm text-muted-foreground leading-relaxed italic">
                    &ldquo;{review.text}&rdquo;
                  </p>
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
            <h2 className="text-center font-display text-3xl font-bold mb-12">
              Frequently Asked Questions
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
        <section className="py-20 px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl font-bold mb-4">
              Ready to Switch from Apollo?
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Start free and discover why growing sales teams choose
              GetYourClientsB2B over Apollo.io.
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
