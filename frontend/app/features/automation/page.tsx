import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Zap, Calendar, BarChart, RefreshCw, Bot, Clock, FileText, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MarketingNavbar } from "@/components/marketing/marketing-navbar";
import { MarketingFooter } from "@/components/marketing/marketing-footer";
import { JsonLd, breadcrumbSchema, faqSchema } from "@/components/seo/JsonLd";
import { APP_LOGIN_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Sales Outreach Automation — Automate Cold Email & Follow-Ups",
  description:
    "GetYourClientsB2B automates your sales outreach — from cold email sequences to follow-up timing, reply detection, and pipeline updates. Try free, no credit card needed.",
  keywords: [
    "sales outreach automation software",
    "how to automate cold outreach",
    "B2B outreach automation",
    "automated cold email software",
    "sales automation platform",
  ],
  alternates: {
    canonical: "https://getyourclientsb2b.com/features/automation",
  },
  openGraph: {
    title: "Sales Outreach Automation — Automate Cold Email & Follow-Ups | GetYourClientsB2B",
    description:
      "Automate your entire B2B outreach workflow — sequences, follow-ups, reply handling, and pipeline updates. Let the system work while your team closes.",
    url: "https://getyourclientsb2b.com/features/automation",
    type: "website",
  },
};

const FAQS = [
  {
    question: "What outreach tasks can GetYourClientsB2B automate?",
    answer:
      "GetYourClientsB2B automates cold email sequences, follow-up timing, reply detection and pause triggers, pipeline stage updates on positive reply, and send-time optimization per timezone.",
  },
  {
    question: "How does reply detection work in the automation?",
    answer:
      "When a prospect replies to any step of your sequence, the system automatically detects the reply, pauses further follow-ups to that contact, and surfaces the reply in your unified inbox — so you never accidentally follow up on a contact who already responded.",
  },
  {
    question: "Can I personalize automated emails at scale?",
    answer:
      "Yes. GetYourClientsB2B supports dynamic variables (first name, company name, industry, country) in all sequence templates — letting you run personalized outreach at scale without manual editing.",
  },
  {
    question: "Will automation hurt my email deliverability?",
    answer:
      "Not if done right. GetYourClientsB2B includes send-rate throttling, timezone-optimized sending windows, and pre-send email verification to protect your sender reputation — all enabled by default.",
  },
];

const AUTOMATIONS = [
  { icon: FileText, title: "Multi-Step Sequence Builder", desc: "Build 3–8 touch sequences with personalized templates. Set delays between each step — days, hours, or business days only." },
  { icon: Calendar, title: "Smart Send Scheduling", desc: "Emails send at the optimal time for each contact's timezone. Avoid weekends and holidays automatically." },
  { icon: RefreshCw, title: "Auto-Pause on Reply", desc: "Sequences pause instantly when a prospect replies. No more awkward follow-ups to contacts who already said yes." },
  { icon: Bot, title: "Pipeline Auto-Update", desc: "Positive replies automatically move a contact to the next pipeline stage. Your CRM updates without manual data entry." },
  { icon: BarChart, title: "Performance Reporting", desc: "Daily or weekly automation reports. See open rates, reply rates, and meetings booked per sequence — automatically." },
  { icon: Clock, title: "Send-Rate Throttling", desc: "Stay within safe sending limits. GetYourClientsB2B throttles daily volume to protect your domain reputation." },
  { icon: Target, title: "Audience Segmentation", desc: "Trigger different sequences based on industry, country, or deal stage. Send the right message to the right segment automatically." },
  { icon: Zap, title: "One-Click Launch", desc: "Add leads discovered in the map or search view to a sequence with a single click. No CSV, no copy-paste." },
];

export default function AutomationPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([
        { name: "Home", url: "https://getyourclientsb2b.com" },
        { name: "Features", url: "https://getyourclientsb2b.com/features" },
        { name: "Sales Automation", url: "https://getyourclientsb2b.com/features/automation" },
      ])} />
      <JsonLd data={faqSchema(FAQS)} />

      <div className="min-h-screen flex flex-col bg-background text-foreground">
        <MarketingNavbar />

        {/* Hero */}
        <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-br from-background via-surface/60 to-background py-20 lg:py-28">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,hsl(228,100%,64%,0.12),transparent)]" />
          <div className="relative mx-auto max-w-5xl px-6 text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary">
              Sales Outreach Automation
            </div>
            <h1 className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Automate Your{" "}
              <span className="gradient-text">B2B Outreach</span> —
              Sequences, Follow-Ups & Pipeline
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
              Stop spending 4 hours a day on manual follow-ups. GetYourClientsB2B
              automates your entire cold outreach workflow — from the first touch
              to the signed deal — while keeping everything personalized.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <a href={APP_LOGIN_URL}>
                <Button size="lg" className="font-semibold px-8 shadow-lg shadow-primary/25">
                  Automate Your Outreach Free <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
              <Link href="/pricing">
                <Button size="lg" variant="outline" className="font-semibold px-8">See Pricing</Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Banner */}
        <section className="border-b border-border/60 py-10 bg-surface/30">
          <div className="mx-auto max-w-5xl px-6">
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
              {[
                { stat: "4h+", label: "Saved per rep per day" },
                { stat: "3x", label: "More outreach volume" },
                { stat: "8-Touch", label: "Max sequence length" },
                { stat: "98%", label: "Deliverability rate" },
              ].map(({ stat, label }) => (
                <div key={label} className="text-center">
                  <p className="font-display text-3xl font-bold text-primary">{stat}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Automations Grid */}
        <section className="py-20 px-6">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-center font-display text-3xl font-bold mb-3">What GetYourClientsB2B Automates for You</h2>
            <p className="text-center text-muted-foreground mb-14">Every step of your cold outreach workflow — on autopilot</p>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {AUTOMATIONS.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="rounded-xl border border-border/60 bg-surface/40 p-5 flex flex-col gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground text-sm">{title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
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
            <h2 className="font-display text-3xl font-bold mb-4">Stop Manual Follow-Ups. Start Closing.</h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Automate your B2B outreach workflow and spend your time on conversations that matter.
            </p>
            <a href={APP_LOGIN_URL}>
              <Button size="lg" className="font-semibold px-10 shadow-lg shadow-primary/25">
                Get Started Free <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
            <p className="mt-4 text-xs text-muted-foreground">No credit card required · Sequences + CRM included free</p>
          </div>
        </section>

        <MarketingFooter />
      </div>
    </>
  );
}
