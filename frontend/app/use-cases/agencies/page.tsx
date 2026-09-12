import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Briefcase, Globe, Layers, TrendingUp, Users, Zap, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MarketingNavbar } from "@/components/marketing/marketing-navbar";
import { MarketingFooter } from "@/components/marketing/marketing-footer";
import { JsonLd, breadcrumbSchema, faqSchema } from "@/components/seo/JsonLd";
import { APP_LOGIN_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "B2B Lead Generation for Agencies — Client Discovery at Scale",
  description:
    "GetYourClientsB2B helps B2B lead generation agencies discover clients across any industry and country, manage multiple pipelines, and run outreach at scale. Try free.",
  keywords: [
    "B2B lead generation for agencies",
    "agency client discovery tool",
    "B2B agency prospecting software",
    "lead generation agency CRM",
    "multi-client B2B outreach",
  ],
  alternates: {
    canonical: "https://getyourclientsb2b.com/use-cases/agencies",
  },
  openGraph: {
    title: "B2B Lead Generation for Agencies | GetYourClientsB2B",
    description:
      "Discover and close clients across any industry and country. GetYourClientsB2B powers B2B agencies with scalable prospecting, multi-client pipelines, and outreach automation.",
    url: "https://getyourclientsb2b.com/use-cases/agencies",
    type: "website",
  },
};

const FAQS = [
  {
    question: "How does GetYourClientsB2B help B2B lead generation agencies?",
    answer:
      "Agencies use GetYourClientsB2B to run prospect research for multiple client verticals simultaneously — searching by industry and country, building tailored outreach sequences per client, and managing separate pipelines for each client account.",
  },
  {
    question: "Can I manage multiple client campaigns from one account?",
    answer:
      "Yes. GetYourClientsB2B supports multiple pipeline workspaces and outreach sequences, making it practical to run prospecting and outreach for several client verticals in parallel.",
  },
  {
    question: "Is the pricing suitable for agencies doing volume prospecting?",
    answer:
      "Yes. GetYourClientsB2B's flat-rate pricing means your cost doesn't scale with headcount or contact volume in the way per-seat tools like Apollo or ZoomInfo do — keeping margins healthy as you scale client accounts.",
  },
];

const BENEFITS = [
  { icon: Globe, title: "Any Industry, Any Country", desc: "Research B2B prospects across 50+ industries and 190+ countries — ideal for agencies serving diverse client verticals." },
  { icon: Layers, title: "Multi-Client Pipeline Management", desc: "Run separate pipelines for each client. Keep prospect data, sequences, and pipeline stages cleanly segmented." },
  { icon: Zap, title: "Outreach at Scale", desc: "Launch parallel cold email sequences for multiple client campaigns. Automation handles follow-ups while your team focuses on strategy." },
  { icon: TrendingUp, title: "Flat-Rate Agency Pricing", desc: "No per-seat or per-contact fees. Grow your team and client base without per-unit costs eroding your margins." },
  { icon: Users, title: "Team Collaboration", desc: "Assign team members to specific client pipelines. Share notes, sequences, and lead research across your agency team." },
  { icon: Briefcase, title: "White-Label Ready Reporting", desc: "Export pipeline data, outreach performance, and lead lists as CSV to include in client reports or dashboards." },
];

export default function AgenciesUseCasePage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([
        { name: "Home", url: "https://getyourclientsb2b.com" },
        { name: "Use Cases", url: "https://getyourclientsb2b.com/use-cases" },
        { name: "For Agencies", url: "https://getyourclientsb2b.com/use-cases/agencies" },
      ])} />
      <JsonLd data={faqSchema(FAQS)} />

      <div className="min-h-screen flex flex-col bg-background text-foreground">
        <MarketingNavbar />

        {/* Hero */}
        <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-br from-background via-surface/60 to-background py-20 lg:py-28">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,hsl(228,100%,64%,0.12),transparent)]" />
          <div className="relative mx-auto max-w-5xl px-6 text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary">
              For B2B Agencies
            </div>
            <h1 className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              B2B Client Discovery &amp; Outreach{" "}
              <span className="gradient-text">Built for Agencies</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
              Run scalable client discovery across any industry and country. Manage
              multiple client pipelines, automate outreach sequences, and deliver
              results — without the per-seat pricing that kills agency margins.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <a href={APP_LOGIN_URL}>
                <Button size="lg" className="font-semibold px-8 shadow-lg shadow-primary/25">
                  Start Free — No Credit Card <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
              <Link href="/pricing">
                <Button size="lg" variant="outline" className="font-semibold px-8">View Agency Pricing</Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 px-6">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-center font-display text-3xl font-bold mb-3">Everything Your Agency Needs to Scale B2B Prospecting</h2>
            <p className="text-center text-muted-foreground mb-14">From first-touch discovery to booked meeting — handled in one platform</p>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {BENEFITS.map(({ icon: Icon, title, desc }) => (
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

        {/* Agency Workflow */}
        <section className="bg-surface/30 py-20 px-6 border-y border-border/60">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-center font-display text-3xl font-bold mb-12">How Agencies Use GetYourClientsB2B</h2>
            <div className="space-y-4">
              {[
                { step: "01", title: "Define Target Vertical per Client", desc: "Set industry and geography filters per client — e.g., \"SaaS companies in DACH\" or \"Healthcare businesses in the UK.\"" },
                { step: "02", title: "Discover & Qualify Leads on the Map", desc: "Search thousands of matching businesses. Use the map to visualize density and prioritize geographies." },
                { step: "03", title: "Build Tailored Outreach Sequences", desc: "Create personalized email sequences per client vertical. Variables auto-fill company name, industry, and country." },
                { step: "04", title: "Automate & Monitor Campaign Performance", desc: "Set sequences live and track open rates, replies, and pipeline progress. Report results to clients from in-platform data." },
              ].map(({ step, title, desc }) => (
                <div key={step} className="flex gap-5 rounded-xl border border-border/60 bg-surface/60 p-5">
                  <span className="flex-none font-mono text-sm font-bold text-primary/60 mt-0.5">{step}</span>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Inclusions */}
        <section className="py-20 px-6">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-center font-display text-3xl font-bold mb-12">What Agency Plans Include</h2>
            <div className="rounded-2xl border border-border bg-surface/40 p-8">
              <ul className="space-y-3">
                {[
                  "B2B lead discovery across 50+ industries and 190+ countries",
                  "Map-based prospecting and territory planning",
                  "Multi-client pipeline management",
                  "Cold email sequence builder with personalization variables",
                  "Automated follow-ups and reply detection",
                  "Open rate, reply rate, and meeting booked tracking",
                  "CSV export of leads and pipeline data for client reporting",
                  "Flat-rate pricing — no per-seat fees",
                  "Dedicated support on growth and agency plans",
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
            <h2 className="font-display text-3xl font-bold mb-4">Scale Your Agency&apos;s B2B Prospecting</h2>
            <p className="text-muted-foreground mb-8 text-lg">Start free. Discover clients in any industry, any country — and deliver results at scale.</p>
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
