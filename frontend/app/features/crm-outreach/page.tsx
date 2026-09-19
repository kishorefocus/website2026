import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Mail, SendHorizonal, BarChart, RefreshCw, CheckCircle, Inbox, Layers, Clock, Target, Users, Globe, TrendingUp, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MarketingNavbar } from "@/components/marketing/marketing-navbar";
import { MarketingFooter } from "@/components/marketing/marketing-footer";
import { JsonLd, breadcrumbSchema, faqSchema } from "@/components/seo/JsonLd";
import { APP_LOGIN_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Client Outreach Tool — B2B Cold Outreach CRM & Email Automation",
  description:
    "The best client outreach tool for B2B teams. GetYourClientsB2B lets you find leads, run cold email sequences, track replies, and manage your B2B pipeline — all in one platform. Try free, no credit card required.",
  keywords: [
    "client outreach",
    "B2B client outreach",
    "client outreach tool",
    "client outreach software",
    "cold outreach CRM",
    "CRM for cold email outreach",
    "cold email CRM software",
    "B2B outreach automation",
    "sales outreach CRM",
    "outreach tool for B2B",
    "b2b outreach platform",
    "cold email outreach tool",
  ],
  alternates: {
    canonical: "https://www.getyourclientsb2b.com/features/crm-outreach",
  },
  openGraph: {
    title: "Client Outreach Tool — B2B Cold Outreach CRM & Email Automation | GetYourClientsB2B",
    description:
      "The best client outreach tool for B2B teams. Find leads, run sequences, track replies, and manage pipeline — all in one platform. Try free.",
    url: "https://www.getyourclientsb2b.com/features/crm-outreach",
    siteName: "GetYourClientsB2B",
    type: "website",
    images: [
      {
        url: "https://www.getyourclientsb2b.com/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "GetYourClientsB2B — Client Outreach CRM Tool",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@GetYourClientsB2B",
    title: "Client Outreach Tool — B2B Cold Outreach CRM & Email Automation",
    description:
      "Find leads, run cold email sequences, track replies — all in one client outreach platform. Try free.",
    images: ["https://www.getyourclientsb2b.com/images/og-image.png"],
  },
};

const FAQS = [
  {
    question: "What is a client outreach tool?",
    answer:
      "A client outreach tool is software that helps B2B businesses find potential clients, contact them via cold email, and manage the follow-up process until they convert. The best tools combine lead discovery, email automation, reply tracking, and CRM pipeline management in one platform — like GetYourClientsB2B.",
  },
  {
    question: "What makes GetYourClientsB2B the best client outreach tool?",
    answer:
      "Unlike tools that only handle one part of outreach, GetYourClientsB2B covers the full workflow: find leads by industry and country, verify their emails, launch cold email sequences, track opens and replies, and manage deals in a built-in CRM — without switching apps or paying for multiple subscriptions.",
  },
  {
    question: "What makes GetYourClientsB2B a good CRM for cold email outreach?",
    answer:
      "Unlike general-purpose CRMs that you have to wire together with a cold email tool, GetYourClientsB2B combines lead discovery and outreach in one workflow. Find leads, add them to sequences, track replies, and manage pipeline — without switching apps.",
  },
  {
    question: "Can I set up automated follow-up sequences?",
    answer:
      "Yes. You can create multi-step sequences with custom delays between touches. The system detects replies and automatically pauses follow-ups to the contacts who have already responded, preventing awkward double-sends.",
  },
  {
    question: "Does the CRM track email opens and replies?",
    answer:
      "Yes. GetYourClientsB2B tracks open rates, click rates, and reply rates for each outreach sequence. You can see performance at the campaign level and individual contact level — giving you the data to iterate and improve your outreach strategy.",
  },
  {
    question: "Is this a full pipeline management CRM or just an outreach tool?",
    answer:
      "It's both. You can manage deal stages, set follow-up reminders, annotate leads, and track revenue pipeline — all alongside outreach sequences and contact data. It's designed so that finding a lead and closing them happens entirely within one platform.",
  },
  {
    question: "How many B2B clients can I reach with GetYourClientsB2B?",
    answer:
      "There are no strict limits on the number of contacts you can outreach to. The platform's lead discovery engine covers 190+ countries and millions of businesses. Your actual outreach volume depends on your email sending limits and plan tier.",
  },
  {
    question: "How is client outreach different from cold calling?",
    answer:
      "Client outreach via cold email is asynchronous — it reaches prospects in their inbox without requiring you to be available simultaneously. It scales better than cold calling, allows for careful personalization, and lets prospects respond on their own schedule. GetYourClientsB2B automates this entire process.",
  },
  {
    question: "What is the best strategy for B2B client outreach?",
    answer:
      "The most effective B2B client outreach strategy involves: (1) defining your ideal client profile, (2) finding targeted leads by industry and country, (3) personalizing the first email, (4) setting up a 3–5 touch follow-up sequence, and (5) tracking replies to identify what works. GetYourClientsB2B handles steps 2–5 automatically.",
  },
];

const STEPS = [
  {
    step: "1",
    title: "Find Your Ideal B2B Clients",
    desc: "Use the lead discovery engine to search businesses by industry, country, and company size. 190+ countries covered. Leads appear instantly on an interactive map.",
    icon: Target,
  },
  {
    step: "2",
    title: "Verify Their Email Addresses",
    desc: "Emails are verified in real-time before your sequence launches. Reduce bounce rates, protect your domain reputation, and ensure your outreach lands in inboxes.",
    icon: Shield,
  },
  {
    step: "3",
    title: "Build a Multi-Step Outreach Sequence",
    desc: "Write 3–5 email steps with personalized variables. Set delays between touches. The sequence runs automatically — follow-ups send only to non-responders.",
    icon: Mail,
  },
  {
    step: "4",
    title: "Track Replies & Manage Your Pipeline",
    desc: "Monitor open rates, click rates, and reply rates per campaign. Move interested prospects into deal stages and close from the same CRM — no app switching.",
    icon: TrendingUp,
  },
];

const WHO_ITS_FOR = [
  {
    icon: Users,
    title: "Solo Founders & Freelancers",
    desc: "Run your entire client outreach operation yourself. Find leads, send sequences, and track replies without a team or complex tools.",
  },
  {
    icon: Target,
    title: "B2B Sales Teams",
    desc: "Give your SDRs a unified platform for prospecting and outreach. Eliminate data sync between your lead tool, email tool, and CRM.",
  },
  {
    icon: Globe,
    title: "International B2B Sellers",
    desc: "Prospect in any of 190+ countries. Filter leads by country, industry, and company size to run targeted outreach campaigns globally.",
  },
  {
    icon: TrendingUp,
    title: "B2B Agencies",
    desc: "Manage client outreach campaigns for multiple clients from one dashboard. Each client gets their own pipeline and sequence tracking.",
  },
];

export default function CRMOutreachPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([
        { name: "Home", url: "https://www.getyourclientsb2b.com" },
        { name: "Features", url: "https://www.getyourclientsb2b.com/features" },
        { name: "Client Outreach CRM", url: "https://www.getyourclientsb2b.com/features/crm-outreach" },
      ])} />
      <JsonLd data={faqSchema(FAQS)} />

      <div className="min-h-screen flex flex-col bg-background text-foreground">
        <MarketingNavbar />

        {/* Hero */}
        <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-br from-background via-surface/60 to-background py-20 lg:py-28">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,hsl(228,100%,64%,0.12),transparent)]" />
          <div className="relative mx-auto max-w-5xl px-6 text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary">
              Client Outreach Tool
            </div>
            <h1 className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              The Best <span className="gradient-text">Client Outreach</span>{" "}
              Tool for B2B Teams
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
              Find B2B clients, verify their emails, run cold email sequences,
              track every reply, and manage your pipeline — all in one client
              outreach platform. No juggling between tools.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <a href={APP_LOGIN_URL}>
                <Button size="lg" className="font-semibold px-8 shadow-lg shadow-primary/25">
                  Start Client Outreach Free <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
              <Link href="/pricing">
                <Button size="lg" variant="outline" className="font-semibold px-8">See Pricing</Button>
              </Link>
            </div>
            <p className="mt-6 text-xs text-muted-foreground">
              No credit card required · Includes lead discovery + outreach CRM · Cancel anytime
            </p>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="border-b border-border/60 bg-surface/40 py-8 px-6">
          <div className="mx-auto max-w-5xl grid grid-cols-2 gap-6 sm:grid-cols-4 text-center">
            {[
              { stat: "190+", label: "Countries for Prospecting" },
              { stat: "All-in-1", label: "Find + Verify + Outreach + CRM" },
              { stat: "Auto", label: "Follow-Up Sequences" },
              { stat: "Free", label: "Plan to Start" },
            ].map(({ stat, label }) => (
              <div key={label} className="flex flex-col gap-1">
                <span className="text-2xl font-bold text-primary font-display">{stat}</span>
                <span className="text-xs text-muted-foreground">{label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 px-6">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-center font-display text-3xl font-bold mb-3">
              How the Client Outreach Workflow Works
            </h2>
            <p className="text-center text-muted-foreground mb-14">
              GetYourClientsB2B handles the entire B2B client outreach process — from finding leads to closing deals.
            </p>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {STEPS.map(({ step, title, desc, icon: Icon }) => (
                <div key={step} className="rounded-xl border border-border/60 bg-surface/40 p-5 flex flex-col gap-3 relative">
                  <div className="absolute top-4 right-4 text-4xl font-black text-primary/10 font-display">{step}</div>
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

        {/* Key Features Grid */}
        <section className="bg-surface/30 border-y border-border/60 py-20 px-6">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-center font-display text-3xl font-bold mb-3">
              Everything a B2B Client Outreach Team Needs
            </h2>
            <p className="text-center text-muted-foreground mb-14">
              No integrations needed — every outreach feature is built in and connected to your lead discovery.
            </p>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                { icon: Mail, title: "Multi-Step Email Sequences", desc: "Build sequences with personalized touches across multiple days. Set custom send times and delays between each step." },
                { icon: SendHorizonal, title: "Automated Follow-Ups", desc: "Follow-up emails send automatically based on non-reply triggers. Sequences pause when a prospect replies — no awkward double sends." },
                { icon: BarChart, title: "Open & Reply Tracking", desc: "Track open rates, reply rates, and click rates per campaign and per contact. Know what's working and iterate fast." },
                { icon: RefreshCw, title: "Reply Detection & Routing", desc: "Replies are automatically detected and categorized. Positive replies surface at the top of your deal pipeline." },
                { icon: Layers, title: "Pipeline Stage Management", desc: "Move B2B clients through custom deal stages. Add notes, set reminders, and track revenue across your pipeline." },
                { icon: Clock, title: "Send-Time Optimization", desc: "Schedule outreach to land in inboxes at the optimal time per timezone — maximizing open and reply rates." },
                { icon: CheckCircle, title: "Email Verification Pre-Send", desc: "Emails are verified before sequences launch. Reduce bounces and protect your domain sender reputation." },
                { icon: Inbox, title: "Unified Inbox View", desc: "See all replies across sequences in a single inbox. Respond, categorize, and move deals forward without switching tabs." },
                { icon: Zap, title: "Direct from Lead Discovery", desc: "Leads discovered on the map or in search can be added to a sequence with one click — zero copy-paste, zero friction." },
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

        {/* Who It's For */}
        <section className="py-20 px-6">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-center font-display text-3xl font-bold mb-3">
              Who Uses GetYourClientsB2B for Client Outreach?
            </h2>
            <p className="text-center text-muted-foreground mb-14">
              Designed for any B2B team that needs to find and convert clients through outreach.
            </p>
            <div className="grid gap-6 sm:grid-cols-2">
              {WHO_ITS_FOR.map(({ icon: Icon, title, desc }) => (
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

        {/* Compare to standalone tools */}
        <section className="bg-surface/30 py-20 px-6 border-y border-border/60">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="font-display text-3xl font-bold mb-6">One Client Outreach Tool Instead of Three</h2>
            <p className="text-muted-foreground mb-10 max-w-2xl mx-auto">
              Most B2B teams stitch together a data provider + a cold email tool + a CRM. GetYourClientsB2B replaces all three — eliminating data sync issues, extra subscriptions, and workflow friction.
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

        {/* B2B Outreach Strategy Guide */}
        <section className="py-20 px-6">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-center font-display text-3xl font-bold mb-3">
              What Makes B2B Client Outreach Effective?
            </h2>
            <p className="text-center text-muted-foreground mb-14">
              The most successful B2B outreach campaigns follow a clear, repeatable framework.
            </p>
            <div className="space-y-6">
              {[
                {
                  num: "01",
                  title: "Target the Right B2B Clients",
                  body: "Before sending a single email, define exactly which companies you want as clients. Industry, company size, geography, and annual revenue all determine whether a prospect is a good fit. GetYourClientsB2B's search filters let you narrow down to exactly your ideal customer profile.",
                },
                {
                  num: "02",
                  title: "Personalize the First Email",
                  body: "Generic cold emails get ignored. The first email in your sequence should reference the prospect's industry, company name, or a specific challenge they face. GetYourClientsB2B includes personalization variables so you can customize at scale without writing each email from scratch.",
                },
                {
                  num: "03",
                  title: "Follow Up Consistently (Not Aggressively)",
                  body: "70% of B2B outreach replies come from follow-up emails — not the first message. A 3–5 touch sequence over 10–15 days is the industry standard. GetYourClientsB2B's automated sequences handle this for you, pausing automatically when a prospect replies.",
                },
                {
                  num: "04",
                  title: "Track What's Working and Iterate",
                  body: "Open rates under 30% usually indicate a subject line problem. Reply rates under 5% usually indicate a messaging problem. GetYourClientsB2B tracks both at the campaign and per-contact level so you can fix problems fast and scale what's working.",
                },
              ].map(({ num, title, body }) => (
                <div key={num} className="flex gap-6 rounded-xl border border-border/60 bg-surface/40 p-6">
                  <span className="text-4xl font-black text-primary/20 font-display leading-none shrink-0">{num}</span>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">{title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Internal links */}
        <section className="bg-surface/20 border-y border-border/60 py-12 px-6">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-center font-display text-xl font-bold mb-8 text-foreground">
              Related Tools & Comparisons
            </h2>
            <div className="grid gap-4 sm:grid-cols-3">
              <Link
                href="/features/lead-discovery"
                className="rounded-xl border border-border/60 bg-surface/60 p-4 hover:border-primary/40 hover:bg-primary/5 transition-colors group"
              >
                <h3 className="font-semibold text-foreground group-hover:text-primary text-sm mb-1 flex items-center gap-1">
                  B2B Lead Discovery <ArrowRight className="h-3 w-3" />
                </h3>
                <p className="text-xs text-muted-foreground">Find B2B leads by industry & country</p>
              </Link>
              <Link
                href="/compare/hunter-alternative"
                className="rounded-xl border border-border/60 bg-surface/60 p-4 hover:border-primary/40 hover:bg-primary/5 transition-colors group"
              >
                <h3 className="font-semibold text-foreground group-hover:text-primary text-sm mb-1 flex items-center gap-1">
                  Hunter Alternative <ArrowRight className="h-3 w-3" />
                </h3>
                <p className="text-xs text-muted-foreground">See how we compare to Hunter.io</p>
              </Link>
              <Link
                href="/pricing"
                className="rounded-xl border border-border/60 bg-surface/60 p-4 hover:border-primary/40 hover:bg-primary/5 transition-colors group"
              >
                <h3 className="font-semibold text-foreground group-hover:text-primary text-sm mb-1 flex items-center gap-1">
                  Pricing <ArrowRight className="h-3 w-3" />
                </h3>
                <p className="text-xs text-muted-foreground">Plans starting free — no credit card</p>
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 px-6">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-center font-display text-3xl font-bold mb-12">
              Frequently Asked Questions — Client Outreach
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
              Start Your B2B Client Outreach Today
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Find your ideal B2B clients, build a sequence, and send your first campaign — all within the same platform, for free.
            </p>
            <a href={APP_LOGIN_URL}>
              <Button size="lg" className="font-semibold px-10 shadow-lg shadow-primary/25">
                Get Started Free <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
            <p className="mt-4 text-xs text-muted-foreground">
              No credit card required · Includes lead discovery + CRM · Cancel anytime
            </p>
          </div>
        </section>

        <MarketingFooter />
      </div>
    </>
  );
}
