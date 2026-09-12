import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Mail, SendHorizonal, BarChart, RefreshCw, CheckCircle, Inbox, Layers, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MarketingNavbar } from "@/components/marketing/marketing-navbar";
import { MarketingFooter } from "@/components/marketing/marketing-footer";
import { JsonLd, breadcrumbSchema, faqSchema } from "@/components/seo/JsonLd";
import { APP_LOGIN_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Cold Outreach CRM — Manage Cold Email Campaigns",
  description:
    "GetYourClientsB2B's built-in cold outreach CRM lets you run email sequences, track replies, manage follow-ups, and close B2B deals — without switching tools. Try free.",
  keywords: [
    "CRM for cold email outreach",
    "cold outreach CRM",
    "cold email CRM software",
    "B2B outreach automation",
    "sales outreach CRM",
  ],
  alternates: {
    canonical: "https://getyourclientsb2b.com/features/crm-outreach",
  },
  openGraph: {
    title: "Cold Outreach CRM — Run B2B Email Campaigns | GetYourClientsB2B",
    description:
      "Built-in CRM for cold email outreach. Run sequences, track replies, handle follow-ups, and manage your B2B pipeline — all in one platform.",
    url: "https://getyourclientsb2b.com/features/crm-outreach",
    type: "website",
  },
};

const FAQS = [
  {
    question: "What makes GetYourClientsB2B a good CRM for cold email outreach?",
    answer:
      "Unlike general-purpose CRMs that you have to wire together with a cold email tool, GetYourClientsB2B combines lead discovery and outreach in one workflow. Find leads, add them to sequences, track replies, and manage pipeline — without switching apps.",
  },
  {
    question: "Can I set up automated follow-up sequences?",
    answer:
      "Yes. You can create multi-step sequences with custom delays between touches. The system detects replies and automatically pauses follow-ups to the contacts who have already responded.",
  },
  {
    question: "Does the CRM track email opens and replies?",
    answer:
      "Yes. GetYourClientsB2B tracks open rates, click rates, and reply rates for each outreach sequence. You can see performance at the campaign level and individual contact level.",
  },
  {
    question: "Is this a full pipeline management CRM or just an outreach tool?",
    answer:
      "It's both. You can manage deal stages, set follow-up reminders, annotate leads, and track revenue pipeline — all alongside outreach sequences and contact data.",
  },
];

export default function CRMOutreachPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([
        { name: "Home", url: "https://getyourclientsb2b.com" },
        { name: "Features", url: "https://getyourclientsb2b.com/features" },
        { name: "Cold Outreach CRM", url: "https://getyourclientsb2b.com/features/crm-outreach" },
      ])} />
      <JsonLd data={faqSchema(FAQS)} />

      <div className="min-h-screen flex flex-col bg-background text-foreground">
        <MarketingNavbar />

        {/* Hero */}
        <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-br from-background via-surface/60 to-background py-20 lg:py-28">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,hsl(228,100%,64%,0.12),transparent)]" />
          <div className="relative mx-auto max-w-5xl px-6 text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary">
              Cold Outreach CRM
            </div>
            <h1 className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              The <span className="gradient-text">CRM Built for Cold Email</span>{" "}
              Outreach Teams
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
              Find leads and run outreach in one place. GetYourClientsB2B&apos;s
              outreach CRM manages your sequences, tracks every reply, handles
              follow-ups automatically — so your team focuses on closing, not
              clicking.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <a href={APP_LOGIN_URL}>
                <Button size="lg" className="font-semibold px-8 shadow-lg shadow-primary/25">
                  Try the CRM Free <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
              <Link href="/pricing">
                <Button size="lg" variant="outline" className="font-semibold px-8">See Pricing</Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Key Features Grid */}
        <section className="py-20 px-6">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-center font-display text-3xl font-bold mb-3">Everything a Cold Outreach Team Needs</h2>
            <p className="text-center text-muted-foreground mb-14">No integrations needed — it&apos;s all built in</p>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                { icon: Mail, title: "Multi-Step Email Sequences", desc: "Build sequences with personalized touches across multiple days. Set custom send times and delays between each step." },
                { icon: SendHorizonal, title: "Automated Follow-Ups", desc: "Follow-up emails send automatically based on non-reply triggers. Sequences pause when a prospect replies." },
                { icon: BarChart, title: "Open & Reply Tracking", desc: "Track open rates, reply rates, and click rates per campaign and per contact. Know what&apos;s working and iterate fast." },
                { icon: RefreshCw, title: "Reply Detection & Routing", desc: "Replies are automatically detected and categorized. Positive replies surface at the top of your deal pipeline." },
                { icon: Layers, title: "Pipeline Stage Management", desc: "Move leads through custom deal stages. Add notes, set reminders, and track revenue across your pipeline." },
                { icon: Clock, title: "Send-Time Optimization", desc: "Schedule outreach to land in inboxes at the optimal time per timezone — maximizing open and reply rates." },
                { icon: CheckCircle, title: "Email Verification Pre-Send", desc: "Emails are verified before sequences launch. Reduce bounces and protect your domain sender reputation." },
                { icon: Inbox, title: "Unified Inbox View", desc: "See all replies across sequences in a single inbox. Respond, categorize, and move deals forward without switching tabs." },
                { icon: RefreshCw, title: "Direct from Lead Discovery", desc: "Leads discovered on the map or in search can be added to a sequence with one click — zero copy-paste." },
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

        {/* Compare to standalone tools */}
        <section className="bg-surface/30 py-20 px-6 border-y border-border/60">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="font-display text-3xl font-bold mb-6">One Tool Instead of Three</h2>
            <p className="text-muted-foreground mb-10 max-w-2xl mx-auto">
              Most teams stitch together a data provider + a cold email tool + a CRM. GetYourClientsB2B replaces all three — eliminating data sync issues, extra subscriptions, and workflow friction.
            </p>
            <div className="grid grid-cols-3 gap-4 text-sm">
              {[
                { old: "ZoomInfo / Apollo (leads)", new: "GetYourClientsB2B Lead Discovery" },
                { old: "Lemlist / Instantly (sequences)", new: "GetYourClientsB2B Outreach CRM" },
                { old: "HubSpot / Pipedrive (pipeline)", new: "GetYourClientsB2B Pipeline Manager" },
              ].map(({ old: o, new: n }) => (
                <div key={o} className="rounded-xl border border-border/60 bg-surface/60 p-4 flex flex-col gap-2 items-center text-center">
                  <p className="text-xs text-muted-foreground line-through">{o}</p>
                  <ArrowRight className="h-3 w-3 text-primary" />
                  <p className="text-xs font-semibold text-primary">{n}</p>
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
            <h2 className="font-display text-3xl font-bold mb-4">Run Your First Cold Email Campaign Today</h2>
            <p className="text-muted-foreground mb-8 text-lg">Find leads, build a sequence, and send your first campaign — all within the same platform, for free.</p>
            <a href={APP_LOGIN_URL}>
              <Button size="lg" className="font-semibold px-10 shadow-lg shadow-primary/25">
                Get Started Free <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
            <p className="mt-4 text-xs text-muted-foreground">No credit card required · Includes lead discovery + CRM · Cancel anytime</p>
          </div>
        </section>

        <MarketingFooter />
      </div>
    </>
  );
}
