import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Globe2, ShieldCheck, Zap, Users, TrendingUp, Target, HeartHandshake,
  Award, CheckCircle2, ArrowRight, Building, Sparkles, Lock, MapPin, Mail, Star
} from "lucide-react";
import { MarketingNavbar } from "@/components/marketing/marketing-navbar";
import { MarketingFooter } from "@/components/marketing/marketing-footer";
import { Button } from "@/components/ui/button";
import { JsonLd } from "@/components/seo/JsonLd";
import { APP_LOGIN_URL, SUPPORT_EMAIL, SALES_EMAIL, FOUNDER_EMAIL } from "@/lib/constants";

const BASE_URL = "https://getyourclientsb2b.com";

export const metadata: Metadata = {
  title: "About Us — GetYourClientsB2B | Global B2B Lead Discovery Platform",
  description:
    "Learn about GetYourClientsB2B. We empower B2B sales teams across 190+ countries with AI-powered map prospecting, verified business contacts, and cold outreach CRM — without bloated per-seat pricing.",
  alternates: {
    canonical: `${BASE_URL}/about`,
  },
  openGraph: {
    title: "About Us — GetYourClientsB2B | Global B2B Lead Discovery",
    description:
      "Our mission is to make international B2B client acquisition transparent, affordable, and actionable for every sales team and agency worldwide.",
    url: `${BASE_URL}/about`,
    siteName: "GetYourClientsB2B",
    type: "website",
    images: [
      {
        url: `${BASE_URL}/images/og-image.png`,
        width: 1200,
        height: 630,
        alt: "About GetYourClientsB2B",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us — GetYourClientsB2B",
    description:
      "Empowering sales teams across 190+ countries with transparent, AI-driven B2B lead generation and outreach CRM.",
    images: [`${BASE_URL}/images/og-image.png`],
  },
};

const companySchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "GetYourClientsB2B",
  url: BASE_URL,
  logo: `${BASE_URL}/images/logo_image.png`,
  description:
    "AI-powered B2B client discovery, map-based visual prospecting, and cold outreach CRM across 190+ countries.",
  founder: {
    "@type": "Person",
    name: "Kishore",
    email: FOUNDER_EMAIL,
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+1-800-555-0199",
      contactType: "customer service",
      email: SUPPORT_EMAIL,
      availableLanguage: ["English"],
    },
    {
      "@type": "ContactPoint",
      contactType: "sales",
      email: SALES_EMAIL,
      availableLanguage: ["English"],
    },
  ],
  sameAs: [
    "https://twitter.com/getyourclients",
    "https://linkedin.com/company/getyourclients",
  ],
};

const stats = [
  { value: "190+", label: "Countries Indexed", subtext: "True global coverage" },
  { value: "4.2M+", label: "Verified Businesses", subtext: "Continuously updated" },
  { value: "2,400+", label: "Active Sales Teams", subtext: "Worldwide adoption" },
  { value: "99.2%", label: "Deliverability Rate", subtext: "Zero-bounce guarantee" },
];

const values = [
  {
    icon: Globe2,
    title: "Global-First, Not US-Only",
    description:
      "Most sales intelligence tools prioritize North America while ignoring EMEA, APAC, and LATAM. We built our data engine from day one to index local business registries and company data across 190+ countries.",
  },
  {
    icon: Zap,
    title: "Zero Per-Seat Gouging",
    description:
      "Legacy data providers lock teams into punishing annual contracts charging $15,000+ with steep per-seat fees. We believe every sales rep and agency deserves affordable flat-rate access with multi-seat teams included.",
  },
  {
    icon: Target,
    title: "Actionable Data, Not Stale Lists",
    description:
      "A contact list is useless if you can't act on it immediately. GetYourClients integrates interactive map prospecting with an omnichannel cold email and call CRM, turning discovery into conversations instantly.",
  },
  {
    icon: ShieldCheck,
    title: "Privacy & Compliance First",
    description:
      "We strictly adhere to GDPR, CAN-SPAM, and CCPA regulations. Our data is ethically sourced from public commercial registries and verified in real time. Payments and invoices are securely processed by Paddle (Merchant of Record).",
  },
];

const leadership = [
  {
    name: "Kishore",
    role: "Founder & Chief Architect",
    bio: "Passionate engineer and serial entrepreneur focused on democratizing international B2B commerce and eliminating fragmented sales stacks.",
    email: FOUNDER_EMAIL,
    initials: "K",
    color: "bg-indigo-600",
  },
  {
    name: "Alexander Becker",
    role: "Head of Global Data Operations",
    bio: "Former data infrastructure lead with 12+ years optimizing web crawling, business registry indexing, and real-time contact validation engines.",
    email: SUPPORT_EMAIL,
    initials: "AB",
    color: "bg-emerald-600",
  },
  {
    name: "Sophia Martinez",
    role: "Head of Customer Success & Support",
    bio: "Dedicated outbound specialist who has helped hundreds of agency owners and sales leaders scale international lead generation pipelines.",
    email: SALES_EMAIL,
    initials: "SM",
    color: "bg-purple-600",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <JsonLd data={companySchema} />
      <MarketingNavbar />

      <main className="flex-1">
        {/* ─── Hero Section ────────────────────────────────────────── */}
        <section className="py-20 md:py-28 relative overflow-hidden border-b border-border">
          <div className="mx-auto max-w-7xl px-6">
            <div className="max-w-3xl mx-auto text-center">
              <span className="manifest-chip">OUR MISSION &amp; STORY</span>
              <h1 className="mt-4 font-display text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
                Democratizing B2B sales for{" "}
                <span className="gradient-text">ambitious teams worldwide</span>
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                We started GetYourClientsB2B with a simple belief: finding international clients and closing deals shouldn't require enterprise budgets, restrictive annual lock-in, or five disconnected software subscriptions.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <a href={APP_LOGIN_URL}>
                  <Button size="lg" className="shadow-lg shadow-primary/25 font-semibold">
                    Launch Live Workspace <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
                <Link href="/pricing">
                  <Button size="lg" variant="outline">
                    View Transparent Plans
                  </Button>
                </Link>
              </div>
            </div>

            {/* Numbers Grid */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-border bg-card p-6 text-center shadow-subtle hover:border-border/80 transition-colors"
                >
                  <p className="font-display text-3xl md:text-4xl font-extrabold text-foreground">
                    <span className="gradient-text">{stat.value}</span>
                  </p>
                  <p className="mt-1 text-sm font-semibold text-foreground">{stat.label}</p>
                  <p className="mt-0.5 text-xs text-muted-foreground">{stat.subtext}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── The Problem We Solve ───────────────────────────────── */}
        <section className="py-20 md:py-24 bg-surface/30 border-b border-border">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="manifest-chip">WHY WE BUILT THIS</span>
                <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
                  Legacy sales intelligence tools are broken for modern teams.
                </h2>
                <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground">
                  <p>
                    For years, B2B outbound prospecting was monopolized by legacy data brokers who charged upwards of $15,000/year, forced annual upfront contracts, and guarded basic export capabilities behind arbitrary credit tiers.
                  </p>
                  <p>
                    Worse yet, their databases were heavily skewed toward Silicon Valley and US enterprises. Teams attempting to sell into Europe, Asia-Pacific, Latin America, or the Middle East encountered stale numbers, missing emails, and zero localized map discovery.
                  </p>
                  <p>
                    GetYourClients was created to flip this model on its head. We combined verified commercial registries across 190+ nations with interactive geospatial prospecting and a built-in CRM, giving individual consultants, growing agencies, and global enterprises an all-in-one client acquisition platform starting at just $19/month.
                  </p>
                </div>

                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="rounded-xl border border-border bg-card p-4">
                    <div className="flex items-center gap-2 text-rose-500 font-semibold text-xs mb-2">
                      <span className="h-2 w-2 rounded-full bg-rose-500" />
                      Legacy Data Giants
                    </div>
                    <ul className="space-y-1.5 text-xs text-muted-foreground">
                      <li>• $10k–$25k annual contracts</li>
                      <li>• Punishing per-seat pricing</li>
                      <li>• 80%+ US-focused data bias</li>
                      <li>• No integrated cold outreach CRM</li>
                    </ul>
                  </div>

                  <div className="rounded-xl border border-primary/40 bg-card p-4 ring-1 ring-primary/20">
                    <div className="flex items-center gap-2 text-primary font-semibold text-xs mb-2">
                      <span className="h-2 w-2 rounded-full bg-primary" />
                      GetYourClientsB2B
                    </div>
                    <ul className="space-y-1.5 text-xs text-foreground">
                      <li>• Plans start free, paid from $19/mo</li>
                      <li>• Multi-seat teams included</li>
                      <li>• 190+ country global registry</li>
                      <li>• Built-in visual pipeline &amp; outreach</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Visual Card */}
              <div className="relative rounded-2xl border border-border bg-card p-8 shadow-card overflow-hidden">
                <div className="absolute top-0 right-0 p-6 opacity-10">
                  <Globe2 className="h-40 w-40 text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground">
                  Our Engineering &amp; Data Standards
                </h3>
                <p className="mt-2 text-xs text-muted-foreground">
                  How we maintain 99.2% contact accuracy across multiple international borders:
                </p>

                <div className="mt-6 space-y-4">
                  {[
                    {
                      title: "Live SMTP Handshake Verification",
                      desc: "Every email is verified in real-time before export, protecting your domain sender reputation from hard bounces.",
                    },
                    {
                      title: "Map-Based Geospatial Indexing",
                      desc: "Pinpoint verified businesses by neighborhood, city, or radius on a live interactive map engine.",
                    },
                    {
                      title: "Strict GDPR & Privacy Compliance",
                      desc: "Zero scraping of sensitive personal data. We only index publicly registered commercial enterprise contacts.",
                    },
                    {
                      title: "Merchant of Record Security",
                      desc: "All billing, taxes, and subscriptions are managed securely by Paddle.com with full PCI-DSS Level 1 compliance.",
                    },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-semibold text-foreground">{item.title}</p>
                        <p className="text-xs text-muted-foreground mt-0.5">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Core Values ─────────────────────────────────────────── */}
        <section className="py-20 md:py-24 border-b border-border">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center max-w-2xl mx-auto">
              <span className="manifest-chip">WHAT DRIVES US</span>
              <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
                Our Core Principles
              </h2>
              <p className="mt-3 text-sm text-muted-foreground">
                The values that guide every product decision, pricing policy, and support interaction.
              </p>
            </div>

            <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((v) => {
                const Icon = v.icon;
                return (
                  <div
                    key={v.title}
                    className="rounded-2xl border border-border bg-card p-8 shadow-subtle hover:shadow-card transition-all"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-5 font-display text-lg font-bold text-foreground">
                      {v.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {v.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ─── Leadership & Team ───────────────────────────────────── */}
        <section className="py-20 md:py-24 bg-surface/30 border-b border-border">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center max-w-2xl mx-auto">
              <span className="manifest-chip">THE TEAM</span>
              <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
                Led by builders passionate about sales
              </h2>
              <p className="mt-3 text-sm text-muted-foreground">
                Meet the leadership team behind the GetYourClients discovery and outreach platform.
              </p>
            </div>

            <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
              {leadership.map((member) => (
                <div
                  key={member.name}
                  className="rounded-2xl border border-border bg-card p-6 shadow-subtle flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-4">
                      <div className={`flex h-14 w-14 items-center justify-center rounded-2xl text-xl font-bold text-white shadow-md ${member.color}`}>
                        {member.initials}
                      </div>
                      <div>
                        <h3 className="font-display text-base font-bold text-foreground">
                          {member.name}
                        </h3>
                        <p className="text-xs text-primary font-medium">{member.role}</p>
                      </div>
                    </div>
                    <p className="mt-5 text-xs text-muted-foreground leading-relaxed">
                      {member.bio}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-border flex items-center justify-between text-xs">
                    <a
                      href={`mailto:${member.email}`}
                      className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1.5"
                    >
                      <Mail className="h-3.5 w-3.5" />
                      <span>{member.email}</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Security & Merchant of Record ──────────────────────── */}
        <section className="py-16 md:py-20 border-b border-border">
          <div className="mx-auto max-w-7xl px-6">
            <div className="rounded-2xl border border-border bg-card p-8 md:p-12 flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="max-w-2xl">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary">
                  <ShieldCheck className="h-4 w-4" />
                  Enterprise Trust &amp; Payment Compliance
                </div>
                <h3 className="mt-3 font-display text-2xl font-bold">
                  Secure Billing Powered by Paddle.com
                </h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  Paddle is our authorized online Merchant of Record. Paddle conducts all checkout operations, currency conversions, sales tax/VAT compliance, and PCI-DSS Level 1 tokenized payments. You are protected with our 14-day money-back guarantee.
                </p>
                <div className="mt-6 flex flex-wrap gap-3 text-xs text-muted-foreground">
                  <span className="trust-badge">SOC 2 Type II Aligned</span>
                  <span className="trust-badge">GDPR Compliant</span>
                  <span className="trust-badge">PCI-DSS Level 1</span>
                  <span className="trust-badge">14-Day Money Back</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0 w-full lg:w-auto">
                <a href={APP_LOGIN_URL} className="w-full">
                  <Button className="w-full font-semibold shadow-md shadow-primary/20">
                    Get Started Free
                  </Button>
                </a>
                <Link href="/contact" className="w-full">
                  <Button variant="outline" className="w-full">
                    Contact Executive Team
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <MarketingFooter />
    </div>
  );
}
