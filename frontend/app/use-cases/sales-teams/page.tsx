import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Target, BarChart3, Clock, TrendingUp, Users, Zap, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MarketingNavbar } from "@/components/marketing/marketing-navbar";
import { MarketingFooter } from "@/components/marketing/marketing-footer";
import { JsonLd, breadcrumbSchema, faqSchema } from "@/components/seo/JsonLd";
import { APP_LOGIN_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "B2B Prospecting Tool for Sales Teams — Cut Research Time by 75%",
  description:
    "GetYourClientsB2B helps sales teams find qualified B2B leads by industry and country, automate outreach sequences, and manage pipeline — saving 4+ hours per rep per day.",
  keywords: [
    "B2B prospecting tool for sales teams",
    "sales prospecting software",
    "B2B sales team tools",
    "outbound sales automation",
    "sales development representative tools",
  ],
  alternates: {
    canonical: "https://getyourclientsb2b.com/use-cases/sales-teams",
  },
  openGraph: {
    title: "B2B Prospecting Tool for Sales Teams | GetYourClientsB2B",
    description:
      "Equip your sales team with a B2B prospecting tool that finds leads, runs outreach, and manages pipeline — all in one platform. Save 4+ hours per rep per day.",
    url: "https://getyourclientsb2b.com/use-cases/sales-teams",
    type: "website",
  },
};

const FAQS = [
  {
    question: "How does GetYourClientsB2B save sales teams time on prospecting?",
    answer:
      "Instead of switching between a data provider, a cold email tool, and a CRM, sales reps use one platform for the entire outbound workflow — from lead discovery to sequence launch to pipeline tracking. Most teams report saving 3–5 hours per rep per day.",
  },
  {
    question: "Can multiple reps use the same account?",
    answer:
      "Yes. GetYourClientsB2B supports team plans with flat-rate pricing — no per-seat costs. Add your full SDR and AE team without your monthly bill scaling proportionally.",
  },
  {
    question: "Can managers track team performance in GetYourClientsB2B?",
    answer:
      "Yes. Managers can see open rates, reply rates, meetings booked, and pipeline movement across the entire team — with per-rep breakdown available for coaching conversations.",
  },
  {
    question: "Is GetYourClientsB2B suitable for enterprise sales teams?",
    answer:
      "Yes. GetYourClientsB2B works for teams of all sizes — from solo SDRs to sales teams of 20+. Enterprise teams benefit from multi-pipeline management, team collaboration features, and outreach automation at scale.",
  },
];

const BENEFITS = [
  { icon: Target, title: "ICP-Matched Lead Discovery", desc: "Set your Ideal Customer Profile once. Search by industry, country, and company size — every result fits your target market." },
  { icon: Clock, title: "Cut Research Time by 75%", desc: "Stop spending half the day on manual research. Discover qualified leads in minutes, not hours, with pre-filtered results." },
  { icon: Zap, title: "Instant Sequence Launch", desc: "Go from lead discovery to live outreach sequence in under 2 minutes. One click adds discovered leads to an automated campaign." },
  { icon: BarChart3, title: "Pipeline Visibility", desc: "Track every deal from first touch to close. Managers get real-time visibility into team pipeline without chasing reps for updates." },
  { icon: Users, title: "Full-Team Collaboration", desc: "Assign leads, share pipeline views, and collaborate on sequences — flat-rate pricing means the whole team can be in the tool." },
  { icon: TrendingUp, title: "Performance Coaching", desc: "Sequence-level analytics show open rates, reply rates, and conversion per rep — giving managers the data to coach effectively." },
];

export default function SalesTeamsUseCasePage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([
        { name: "Home", url: "https://getyourclientsb2b.com" },
        { name: "Use Cases", url: "https://getyourclientsb2b.com/use-cases" },
        { name: "For Sales Teams", url: "https://getyourclientsb2b.com/use-cases/sales-teams" },
      ])} />
      <JsonLd data={faqSchema(FAQS)} />

      <div className="min-h-screen flex flex-col bg-background text-foreground">
        <MarketingNavbar />

        {/* Hero */}
        <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-br from-background via-surface/60 to-background py-20 lg:py-28">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,hsl(228,100%,64%,0.12),transparent)]" />
          <div className="relative mx-auto max-w-5xl px-6 text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary">
              For Sales Teams
            </div>
            <h1 className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Give Your Sales Team the{" "}
              <span className="gradient-text">Prospecting Platform</span> That
              Books More Meetings
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
              Your reps waste 4+ hours a day on manual research and follow-ups.
              GetYourClientsB2B cuts that to minutes — with ICP-matched lead
              discovery, automated outreach, and pipeline management in one tool.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <a href={APP_LOGIN_URL}>
                <Button size="lg" className="font-semibold px-8 shadow-lg shadow-primary/25">
                  Try Free for Your Team <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
              <Link href="/pricing">
                <Button size="lg" variant="outline" className="font-semibold px-8">See Team Pricing</Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="border-b border-border/60 py-10 bg-surface/30">
          <div className="mx-auto max-w-5xl px-6">
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
              {[
                { stat: "4h+", label: "Saved per rep daily" },
                { stat: "3x", label: "More outreach volume" },
                { stat: "190+", label: "Countries available" },
                { stat: "1-click", label: "Lead to sequence" },
              ].map(({ stat, label }) => (
                <div key={label} className="text-center">
                  <p className="font-display text-3xl font-bold text-primary">{stat}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 px-6">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-center font-display text-3xl font-bold mb-3">Designed Around How Modern Sales Teams Work</h2>
            <p className="text-center text-muted-foreground mb-14">From SDR prospecting to AE pipeline management — one platform</p>
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

        {/* Workflow for teams */}
        <section className="bg-surface/30 py-20 px-6 border-y border-border/60">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-center font-display text-3xl font-bold mb-12">What Your Team&apos;s Daily Workflow Looks Like</h2>
            <div className="rounded-2xl border border-border bg-surface/40 p-8">
              <ul className="space-y-4">
                {[
                  "SDRs search leads by target industry and country in the morning",
                  "Qualified leads are added to personalized outreach sequences with one click",
                  "Sequences run automatically throughout the day — including follow-ups",
                  "Replies are detected and routed to reps for live conversations",
                  "AEs review pipeline stages and move deals forward with notes and reminders",
                  "Managers check team-level analytics for coaching without rep check-ins",
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
            <h2 className="font-display text-3xl font-bold mb-4">Equip Your Team to Book More Meetings</h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Free plan available for teams of all sizes. Add everyone without per-seat pricing headaches.
            </p>
            <a href={APP_LOGIN_URL}>
              <Button size="lg" className="font-semibold px-10 shadow-lg shadow-primary/25">
                Get Started Free <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
            <p className="mt-4 text-xs text-muted-foreground">No credit card required · Flat-rate team pricing · Cancel anytime</p>
          </div>
        </section>

        <MarketingFooter />
      </div>
    </>
  );
}
