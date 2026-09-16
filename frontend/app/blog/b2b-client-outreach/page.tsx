import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MarketingNavbar } from "@/components/marketing/marketing-navbar";
import { MarketingFooter } from "@/components/marketing/marketing-footer";
import { JsonLd, breadcrumbSchema, faqSchema } from "@/components/seo/JsonLd";
import { APP_LOGIN_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "How to Do B2B Client Outreach That Gets Replies (2025 Guide)",
  description:
    "The complete guide to B2B client outreach. Learn how to find clients, write cold emails that get replies, set up follow-up sequences, and close deals — with a step-by-step framework used by top sales teams.",
  keywords: [
    "client outreach",
    "B2B client outreach",
    "b2b outreach strategy",
    "cold email outreach strategy",
    "how to do client outreach",
    "b2b outreach guide",
    "client outreach tips",
    "cold outreach for b2b",
  ],
  alternates: {
    canonical: "https://getyourclientsb2b.com/blog/b2b-client-outreach",
  },
  openGraph: {
    title: "How to Do B2B Client Outreach That Gets Replies (2025 Guide)",
    description: "Complete 2025 guide to B2B client outreach — find clients, write cold emails, set up sequences, and close deals.",
    url: "https://getyourclientsb2b.com/blog/b2b-client-outreach",
    siteName: "GetYourClientsB2B",
    type: "article",
  },
};

const FAQS = [
  {
    question: "What is B2B client outreach?",
    answer: "B2B client outreach is the process of proactively contacting potential business clients to introduce your product or service, start a conversation, and ultimately convert them into customers. It typically involves cold email, LinkedIn messaging, or cold calling — often in a multi-touch sequence.",
  },
  {
    question: "What is the best cold email open rate for B2B outreach?",
    answer: "A good B2B cold email open rate is 30–50%. If your open rate is below 25%, your subject lines need improvement. Reply rates of 5–10% are considered strong for cold outreach. GetYourClientsB2B's sequence tracking shows you both metrics in real time.",
  },
  {
    question: "How many follow-ups should you send in B2B outreach?",
    answer: "Research shows that 70% of replies come from follow-up emails, not the first message. A 4–5 touch sequence over 10–14 days is the industry standard. Each follow-up should add value — share a case study, a relevant statistic, or a different angle on your value proposition.",
  },
  {
    question: "How do you find B2B clients to reach out to?",
    answer: "The fastest way to find B2B clients for outreach is to use a lead discovery tool that lets you filter by industry, country, and company size. GetYourClientsB2B lets you search for businesses across 190+ countries and add them directly to an outreach sequence — without switching tools.",
  },
];

export default function B2BClientOutreachBlogPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([
        { name: "Home", url: "https://getyourclientsb2b.com" },
        { name: "Blog", url: "https://getyourclientsb2b.com/blog" },
        { name: "B2B Client Outreach Guide", url: "https://getyourclientsb2b.com/blog/b2b-client-outreach" },
      ])} />
      <JsonLd data={faqSchema(FAQS)} />

      <div className="min-h-screen flex flex-col bg-background text-foreground">
        <MarketingNavbar />

        {/* Article Header */}
        <section className="border-b border-border/60 bg-gradient-to-br from-background via-surface/60 to-background py-16 lg:py-20">
          <div className="mx-auto max-w-3xl px-6">
            <div className="mb-4 flex items-center gap-2 text-xs text-muted-foreground">
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-primary transition-colors">Blog</Link>
              <span>/</span>
              <span>B2B Client Outreach</span>
            </div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
              Outreach Strategy
            </div>
            <h1 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl mb-4">
              How to Do B2B Client Outreach That Gets Replies (2025 Guide)
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Most B2B client outreach fails because of one reason: it&apos;s generic. This guide shows you the exact framework top B2B sales teams use to find ideal clients, write cold emails that get replies, and set up automated follow-up sequences that book meetings on autopilot.
            </p>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span>By GetYourClientsB2B Team</span>
              <span>·</span>
              <span>Updated September 2025</span>
              <span>·</span>
              <span>15 min read</span>
            </div>
          </div>
        </section>

        {/* Article Body */}
        <section className="py-16 px-6">
          <div className="mx-auto max-w-3xl space-y-12">

            {/* What is client outreach */}
            <div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">What is B2B Client Outreach?</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                B2B client outreach is the process of proactively contacting potential business clients to introduce your product or service and start a sales conversation. Unlike inbound marketing (where clients come to you), outreach means going to your ideal clients first — via cold email, LinkedIn, or phone.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                When done well, B2B client outreach is the fastest path to growing B2B revenue. You don&apos;t wait for organic traffic or ad spend to build up — you go directly to decision-makers at companies that match your ideal customer profile.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The challenge is that most cold outreach gets ignored. This guide shows you how to do it right — from finding the right clients to writing emails that get replies.
              </p>
            </div>

            {/* Step by step */}
            <div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-6">The 5-Step B2B Client Outreach Framework</h2>
              {[
                {
                  step: "Step 1",
                  title: "Define Your Ideal Client Profile (ICP)",
                  content: `Before sending a single email, you need to know exactly who you're targeting. Your Ideal Client Profile (ICP) defines the type of company most likely to buy from you and get the most value from your product.

Your ICP should include:
• Industry (e.g., SaaS, Manufacturing, E-commerce)
• Company size (employees or revenue range)
• Geography (countries or regions you serve)
• Job titles of decision makers (CEO, VP Sales, Head of Operations)
• Pain points your product solves

The more specific your ICP, the better your outreach results. A generic "any B2B company" ICP leads to generic emails that get ignored.`,
                },
                {
                  step: "Step 2",
                  title: "Find B2B Leads That Match Your ICP",
                  content: `Once you have a clear ICP, you need a reliable way to find companies that match it. Manual research on Google or LinkedIn is slow and doesn't scale.

The fastest method is using a B2B lead discovery tool that lets you filter by:
• Industry (SaaS, healthcare, fintech, etc.)
• Country and city
• Company size
• Revenue range

GetYourClientsB2B lets you search across 190+ countries with all these filters — and shows results on an interactive map so you can visualize geographic concentrations of your ideal clients. You can add them directly to an outreach sequence without exporting and re-importing CSV files.`,
                },
                {
                  step: "Step 3",
                  title: "Write a Cold Email That Gets Replies",
                  content: `The average business professional receives 120+ emails per day. Your cold email has about 3 seconds to convince someone not to delete it. Here's the proven structure:

Subject Line: Short, specific, and curiosity-provoking
• Bad: "Partnership Opportunity" 
• Good: "Quick question about [Company]'s SaaS pipeline"

Opening Line: Reference something specific about them
• Bad: "I hope this email finds you well"
• Good: "I noticed [Company] recently expanded into the UK market..."

Value Proposition: One sentence — the specific result you help achieve
• "We help SaaS companies like yours find and close 30% more enterprise clients without increasing headcount."

CTA: One simple, low-commitment ask
• "Would it be worth a 15-minute call this week to see if we're a fit?"`,
                },
                {
                  step: "Step 4",
                  title: "Set Up Automated Follow-Up Sequences",
                  content: `Here's the stat that changes how most teams think about outreach: 70% of replies come from follow-up emails, not the first message.

This means if you only send one email and wait, you're leaving most of your potential responses on the table.

A proven 5-touch B2B client outreach sequence:
• Day 1: First email (introduce the problem + your solution)
• Day 3: Follow-up 1 (shorter, different angle — share a case study)
• Day 7: Follow-up 2 (value-add email — share a relevant insight or stat)
• Day 10: Follow-up 3 ("Last try" email — brief, honest)
• Day 14: Break-up email ("Closing your file — let me know if timing changes")

GetYourClientsB2B's built-in outreach sequences handle all of this automatically. Sequences pause when a prospect replies — so you never send an embarrassing follow-up to someone who already responded.`,
                },
                {
                  step: "Step 5",
                  title: "Track, Measure, and Iterate",
                  content: `B2B client outreach is a numbers game with an optimization layer. You need to track:

• Open rate: Below 25% = subject line problem
• Reply rate: Below 5% = messaging problem  
• Positive reply rate: Are replies converting to meetings?
• Meeting-to-close rate: Are meetings converting?

Run A/B tests on:
• Subject lines (test 2 variants on the first 20% of your list)
• First-line personalization (mention of their industry vs. specific company detail)
• CTA (call this week vs. reply with interest)

GetYourClientsB2B tracks all of these metrics at the campaign and per-contact level — giving you the data to iterate fast and scale what's working.`,
                },
              ].map(({ step, title, content }) => (
                <div key={step} className="rounded-xl border border-border/60 bg-surface/40 p-6 mb-6">
                  <div className="flex items-start gap-4">
                    <span className="text-xs font-bold text-primary bg-primary/10 border border-primary/20 rounded-full px-2 py-0.5 shrink-0 mt-0.5">{step}</span>
                    <div>
                      <h3 className="font-display text-xl font-bold text-foreground mb-3">{title}</h3>
                      <div className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">{content}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Tools Section */}
            <div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                The Best Tools for B2B Client Outreach in 2025
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Most B2B teams end up paying for 3 separate tools: a data provider, a cold email tool, and a CRM. Here&apos;s the modern stack vs. the all-in-one approach:
              </p>
              <div className="rounded-xl border border-border bg-surface/40 overflow-hidden mb-6">
                <div className="grid grid-cols-2 border-b border-border bg-surface/80 px-6 py-3 text-sm font-semibold">
                  <span className="text-muted-foreground">3-Tool Stack</span>
                  <span className="text-primary">All-in-One with GetYourClientsB2B</span>
                </div>
                {[
                  ["Apollo / ZoomInfo for leads ($99+/mo)", "Built-in B2B lead discovery — no extra cost"],
                  ["Lemlist / Instantly for sequences ($59+/mo)", "Built-in outreach sequences — no extra cost"],
                  ["HubSpot / Pipedrive for CRM ($50+/mo)", "Built-in CRM pipeline — no extra cost"],
                  ["CSV exports + manual data sync", "One-click: find lead → add to sequence → track in CRM"],
                  ["$200+/month total spend", "Starting at $19/month flat rate"],
                ].map(([old, n], i) => (
                  <div key={i} className={`grid grid-cols-2 px-6 py-3 text-sm ${i % 2 === 0 ? "" : "bg-surface/20"} border-b border-border/40 last:border-0`}>
                    <span className="text-muted-foreground line-through text-xs">{old}</span>
                    <span className="text-foreground text-xs font-medium">{n}</span>
                  </div>
                ))}
              </div>
              <p className="text-muted-foreground leading-relaxed">
                <Link href="/features/crm-outreach" className="text-primary underline">GetYourClientsB2B&apos;s client outreach CRM</Link> handles all 3 layers in one workflow — so your team spends more time actually reaching out and less time managing tools.
              </p>
            </div>

            {/* CTA mid-article */}
            <div className="rounded-xl border border-primary/40 bg-primary/5 p-6 text-center">
              <h3 className="font-display text-xl font-bold text-foreground mb-2">Ready to Start Your B2B Client Outreach?</h3>
              <p className="text-muted-foreground text-sm mb-4">Find leads, build sequences, and track replies — all in one platform. Free to start.</p>
              <a href={APP_LOGIN_URL}>
                <Button className="font-semibold px-8 shadow-lg shadow-primary/25">
                  Try GetYourClientsB2B Free <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
              <p className="mt-2 text-xs text-muted-foreground">No credit card required</p>
            </div>

            {/* FAQ */}
            <div className="pt-8 border-t border-border/60">
              <h2 className="font-display text-2xl font-bold text-foreground mb-8">FAQs — B2B Client Outreach</h2>
              <div className="space-y-4">
                {FAQS.map((faq) => (
                  <div key={faq.question} className="rounded-xl border border-border/60 bg-surface/60 p-5">
                    <h3 className="font-semibold text-foreground mb-2 text-sm">{faq.question}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Related */}
            <div className="pt-8 border-t border-border/60">
              <h2 className="font-semibold text-foreground mb-6">Related Articles</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                <Link href="/features/crm-outreach" className="rounded-xl border border-border/60 bg-surface/40 p-4 hover:border-primary/40 transition-colors group">
                  <h3 className="font-semibold text-foreground group-hover:text-primary text-sm mb-1">Client Outreach CRM — Full Features</h3>
                  <p className="text-xs text-muted-foreground">Everything included in GetYourClientsB2B&apos;s outreach tool</p>
                </Link>
                <Link href="/blog/find-b2b-clients" className="rounded-xl border border-border/60 bg-surface/40 p-4 hover:border-primary/40 transition-colors group">
                  <h3 className="font-semibold text-foreground group-hover:text-primary text-sm mb-1">How to Find B2B Clients Online</h3>
                  <p className="text-xs text-muted-foreground">Complete guide to finding new B2B clients</p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <MarketingFooter />
      </div>
    </>
  );
}
