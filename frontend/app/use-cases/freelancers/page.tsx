import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, User, DollarSign, Globe, Zap, Clock, Target, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MarketingNavbar } from "@/components/marketing/marketing-navbar";
import { MarketingFooter } from "@/components/marketing/marketing-footer";
import { JsonLd, breadcrumbSchema, faqSchema } from "@/components/seo/JsonLd";
import { APP_LOGIN_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "B2B Client Finder for Freelancers — Find Clients Without Cold Calling",
  description:
    "GetYourClientsB2B helps freelancers find B2B clients by industry and country, send personalized cold emails, and land projects — all from one affordable tool. Try free.",
  keywords: [
    "B2B client finder for freelancers",
    "how to find B2B clients as a freelancer",
    "freelancer client discovery tool",
    "cold email tool for freelancers",
    "B2B prospecting for solo freelancers",
  ],
  alternates: {
    canonical: "https://getyourclientsb2b.com/use-cases/freelancers",
  },
  openGraph: {
    title: "B2B Client Finder for Freelancers | GetYourClientsB2B",
    description:
      "Find your next B2B client by industry and country, send personalized cold emails, and manage your project pipeline — from one affordable freelancer-friendly tool.",
    url: "https://getyourclientsb2b.com/use-cases/freelancers",
    siteName: "GetYourClientsB2B",
    type: "website",
    images: [
      {
        url: "https://getyourclientsb2b.com/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "GetYourClientsB2B — B2B Client Finder for Freelancers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@GetYourClientsB2B",
    title: "B2B Client Finder for Freelancers | GetYourClientsB2B",
    description:
      "Find B2B clients by industry and country. Send personalized cold emails and land projects — without cold calling.",
    images: ["https://getyourclientsb2b.com/images/og-image.png"],
  },
};

const FAQS = [
  {
    question: "How can a freelancer use GetYourClientsB2B to find clients?",
    answer:
      "Search by your target industry (e.g., SaaS, E-commerce, Healthcare) and country, discover businesses that match your ICP, and send personalized cold email campaigns directly from the platform. You can manage your entire prospecting and follow-up workflow in one place.",
  },
  {
    question: "Is GetYourClientsB2B affordable for solo freelancers?",
    answer:
      "Yes. The free plan gives you access to core lead discovery and outreach features. Paid plans are flat-rate and designed to be accessible for individual freelancers — a fraction of what enterprise tools like ZoomInfo or Apollo charge.",
  },
  {
    question: "Do I need sales experience to use GetYourClientsB2B?",
    answer:
      "No. The platform is designed to be intuitive for non-sales professionals. The map-based interface and sequence builder are beginner-friendly, with templates to get you started quickly.",
  },
  {
    question: "Can I find international clients as a freelancer?",
    answer:
      "Yes. GetYourClientsB2B covers 190+ countries, so you can prospect into any market where your services are in demand — without geographic limitations.",
  },
];

const BENEFITS = [
  { icon: Target, title: "Find Your Exact ICP", desc: "Search by industry, country, and company size — so every lead you contact is a genuine potential client for your freelance services." },
  { icon: User, title: "Built for Solo Users", desc: "No complex team setup or onboarding required. Get started in minutes and start prospecting immediately." },
  { icon: DollarSign, title: "Freelancer-Friendly Pricing", desc: "A free plan that actually works, plus flat-rate paid plans that don't charge per contact or per email sent." },
  { icon: Globe, title: "Find International Clients", desc: "Open your services to any country. Discover clients in the UK, UAE, US, Germany, Australia — wherever your skills are valued." },
  { icon: Clock, title: "Automate Follow-Ups", desc: "Send your initial cold email, then let the system follow up automatically until you get a reply — so no lead falls through the cracks." },
  { icon: Zap, title: "Manage Your Client Pipeline", desc: "Track prospect conversations from first contact to signed contract. Never lose track of where a potential project stands." },
];

export default function FreelancersUseCasePage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([
        { name: "Home", url: "https://getyourclientsb2b.com" },
        { name: "Use Cases", url: "https://getyourclientsb2b.com/use-cases" },
        { name: "For Freelancers", url: "https://getyourclientsb2b.com/use-cases/freelancers" },
      ])} />
      <JsonLd data={faqSchema(FAQS)} />

      <div className="min-h-screen flex flex-col bg-background text-foreground">
        <MarketingNavbar />

        {/* Hero */}
        <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-br from-background via-surface/60 to-background py-20 lg:py-28">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,hsl(228,100%,64%,0.12),transparent)]" />
          <div className="relative mx-auto max-w-5xl px-6 text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary">
              For Freelancers
            </div>
            <h1 className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Find B2B Clients as a{" "}
              <span className="gradient-text">Freelancer</span> — Without the
              Hustle
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
              Stop relying on referrals and job boards. GetYourClientsB2B gives
              freelancers the same B2B prospecting power as enterprise sales
              teams — at a price that makes sense for solo operators.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <a href={APP_LOGIN_URL}>
                <Button size="lg" className="font-semibold px-8 shadow-lg shadow-primary/25">
                  Find Clients Free <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
              <Link href="/pricing">
                <Button size="lg" variant="outline" className="font-semibold px-8">See Pricing</Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Pain point callout */}
        <section className="border-b border-border/60 py-10 bg-surface/30">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <p className="text-muted-foreground text-sm max-w-2xl mx-auto">
              The tools used by enterprise sales teams — Apollo, ZoomInfo, Hunter — are either too expensive or too complex for freelancers. GetYourClientsB2B was designed from the ground up to be the go-to prospecting tool for individuals and small operators.
            </p>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 px-6">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-center font-display text-3xl font-bold mb-3">Everything a Freelancer Needs to Land B2B Clients</h2>
            <p className="text-center text-muted-foreground mb-14">One affordable tool. No sales experience required.</p>
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

        {/* Step-by-step */}
        <section className="bg-surface/30 py-20 px-6 border-y border-border/60">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-center font-display text-3xl font-bold mb-12">How Freelancers Land Clients with GetYourClientsB2B</h2>
            <div className="space-y-4">
              {[
                { step: "01", title: "Define Your Target Client", desc: "Pick your ideal industry (e.g., SaaS, E-commerce) and countries you want to target. GetYourClientsB2B filters results to match." },
                { step: "02", title: "Discover Matching Businesses", desc: "Browse businesses on a live map or list view. See company details, decision-maker contacts, and industry info." },
                { step: "03", title: "Send a Personalised Cold Email", desc: "Use the built-in sequence builder to craft a targeted pitch. Variables auto-fill company name, industry, and location." },
                { step: "04", title: "Let Automated Follow-Ups Work", desc: "If no reply, follow-up emails send automatically. When a prospect replies, the sequence pauses — and you take over." },
                { step: "05", title: "Track Your Pipeline", desc: "Log conversations, move deals through stages, and know exactly which prospects are close to becoming clients." },
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

        {/* What's included */}
        <section className="py-20 px-6">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-center font-display text-3xl font-bold mb-12">What You Get on the Free Plan</h2>
            <div className="rounded-2xl border border-border bg-surface/40 p-8">
              <ul className="space-y-3">
                {[
                  "B2B lead discovery across industries and 190+ countries",
                  "Map-based lead search and geographic filtering",
                  "Cold email sequence builder with personalization",
                  "Automated follow-up sequences",
                  "Reply detection and inbox view",
                  "Basic pipeline management and deal stages",
                  "CSV export of leads and contacts",
                  "No credit card required to start",
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
            <h2 className="font-display text-3xl font-bold mb-4">Start Finding Clients Today — Free</h2>
            <p className="text-muted-foreground mb-8 text-lg">
              No referrals needed. No cold calling. Just targeted outreach to the exact businesses that need your services.
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
