import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, Globe, Filter, MapPin, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MarketingNavbar } from "@/components/marketing/marketing-navbar";
import { MarketingFooter } from "@/components/marketing/marketing-footer";
import { JsonLd, breadcrumbSchema, faqSchema } from "@/components/seo/JsonLd";
import { APP_LOGIN_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "How to Find B2B Clients Online in 2025 — Complete Guide",
  description:
    "Learn how to find B2B clients online in 2025. Discover the 7 best methods for B2B client acquisition — from lead discovery tools to LinkedIn outreach — with a step-by-step action plan.",
  keywords: [
    "find b2b clients",
    "b2b client",
    "how to find b2b clients",
    "find b2b clients online",
    "b2b client acquisition",
    "how to get b2b clients",
    "b2b client finder",
    "find b2b leads",
  ],
  alternates: {
    canonical: "https://www.getyourclientsb2b.com/blog/find-b2b-clients",
  },
  openGraph: {
    title: "How to Find B2B Clients Online in 2025 — Complete Guide",
    description: "7 proven methods to find B2B clients online in 2025 — with tools, scripts, and a step-by-step action plan.",
    url: "https://www.getyourclientsb2b.com/blog/find-b2b-clients",
    siteName: "GetYourClientsB2B",
    type: "article",
  },
};

const FAQS = [
  {
    question: "How do you find B2B clients?",
    answer: "The fastest way to find B2B clients is to use a lead discovery tool that lets you search businesses by industry, country, and company size. GetYourClientsB2B lets you find B2B clients across 190+ countries with advanced filters — and add them directly to cold email sequences without switching tools.",
  },
  {
    question: "How do you get B2B clients fast?",
    answer: "The fastest way to get B2B clients is through cold outreach — specifically cold email. Define your ideal client profile, use a tool like GetYourClientsB2B to find matching businesses, write a targeted cold email sequence, and automate follow-ups. Teams using this approach typically book their first meetings within 1–2 weeks.",
  },
  {
    question: "What is the best B2B client finder tool?",
    answer: "GetYourClientsB2B is the best B2B client finder tool for teams that want to do both discovery and outreach in one platform. It lets you search for B2B clients by industry and country, see them on a map, and run cold email sequences — all in one workflow.",
  },
  {
    question: "How many B2B clients can I find with GetYourClientsB2B?",
    answer: "GetYourClientsB2B indexes business data across 190+ countries. Search results depend on your filters — a search for 'SaaS companies in Europe' can return thousands of leads. You can narrow down with company size, country, and sub-industry filters to find your exact ideal clients.",
  },
  {
    question: "What industries can I find B2B clients in?",
    answer: "GetYourClientsB2B covers all major B2B industries including SaaS, manufacturing, healthcare, finance, e-commerce, real estate, construction, logistics, professional services, and more. You can filter by industry category and sub-industry to find your most relevant B2B prospects.",
  },
];

const METHODS = [
  {
    num: "01",
    icon: Filter,
    title: "Use a B2B Lead Discovery Tool",
    desc: "The fastest way to find B2B clients at scale. A good B2B lead finder lets you search businesses by industry, country, company size, and revenue — returning hundreds or thousands of qualified prospects in seconds.",
    tool: "GetYourClientsB2B",
    toolLink: "/features/lead-discovery",
    why: "Find leads by industry + country + company size. 190+ countries. Add directly to outreach sequences.",
  },
  {
    num: "02",
    icon: Globe,
    title: "LinkedIn Search & Outreach",
    desc: "LinkedIn's search allows filtering by industry, company size, job title, and location. You can find companies and decision makers, then message them directly via LinkedIn or find their business email.",
    tool: "LinkedIn Sales Navigator",
    toolLink: null,
    why: "Good for finding decision makers by job title. Combine with email outreach for better response rates.",
  },
  {
    num: "03",
    icon: MapPin,
    title: "Geographic & Industry Directories",
    desc: "Industry directories and local business databases list companies by sector and geography. Chamber of commerce websites, trade association directories, and Google Maps can surface businesses that don't appear in mainstream databases.",
    tool: "Google Maps + GetYourClientsB2B Map View",
    toolLink: "/features/map-search",
    why: "Great for local B2B prospecting. GetYourClientsB2B shows leads on an interactive map with contact data.",
  },
  {
    num: "04",
    icon: Users,
    title: "Referrals from Existing Clients",
    desc: "Your existing B2B clients know other businesses that could benefit from your services. A structured referral ask — with a clear incentive — can be the cheapest source of new B2B clients. 80% of B2B buyers trust referrals.",
    tool: "Email or CRM follow-up",
    toolLink: "/features/crm-outreach",
    why: "Highest conversion rate of any B2B client acquisition channel. Zero cost.",
  },
  {
    num: "05",
    icon: Globe,
    title: "Content Marketing & SEO",
    desc: "Publishing guides, comparison pages, and industry-specific content attracts B2B buyers who are actively searching for solutions. This is a long-term channel (3–12 months to see results) but generates consistent inbound leads.",
    tool: "Blog + SEO tools",
    toolLink: null,
    why: "Builds long-term, compounding traffic. High-intent visitors who are already searching for your solution.",
  },
  {
    num: "06",
    icon: Filter,
    title: "Trade Shows & Industry Events",
    desc: "B2B buyers attend industry events to discover new solutions. Exhibiting or attending key conferences in your target industry puts you in front of decision-makers who are actively looking to buy.",
    tool: "Industry events + follow-up CRM",
    toolLink: "/features/crm-outreach",
    why: "High-quality conversations with motivated buyers. Follow up fast — within 24 hours of meeting.",
  },
  {
    num: "07",
    icon: Globe,
    title: "Paid Advertising (LinkedIn & Google)",
    desc: "LinkedIn Ads target by industry, company size, and job title — making them ideal for B2B client acquisition. Google Ads target intent — people searching for your solution right now. Both channels require budget but can produce results quickly.",
    tool: "LinkedIn Ads / Google Ads",
    toolLink: null,
    why: "Fast results but requires ongoing budget. Best paired with a strong landing page and free trial offer.",
  },
];

export default function FindB2BClientsBlogPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([
        { name: "Home", url: "https://www.getyourclientsb2b.com" },
        { name: "Blog", url: "https://www.getyourclientsb2b.com/blog" },
        { name: "How to Find B2B Clients", url: "https://www.getyourclientsb2b.com/blog/find-b2b-clients" },
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
              <span>Find B2B Clients</span>
            </div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
              B2B Client Acquisition
            </div>
            <h1 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl mb-4">
              How to Find B2B Clients Online in 2025 — Complete Guide
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Finding B2B clients is the #1 challenge for most sales teams. Whether you&apos;re a solo founder, an SDR, or a sales manager, this guide covers 7 proven methods to find B2B clients online — with real tools, scripts, and step-by-step actions you can start today.
            </p>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span>By GetYourClientsB2B Team</span>
              <span>·</span>
              <span>Updated September 2025</span>
              <span>·</span>
              <span>14 min read</span>
            </div>
          </div>
        </section>

        {/* Body */}
        <section className="py-16 px-6">
          <div className="mx-auto max-w-3xl space-y-12">

            <div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">What Makes a Good B2B Client?</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Before you start searching for B2B clients, you need to define what a good B2B client looks like for your business. This is called your Ideal Client Profile (ICP).
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                A strong ICP includes:
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  "Industry — which sectors do your best clients come from?",
                  "Company size — how many employees or what revenue range?",
                  "Geography — which countries or regions do you serve?",
                  "Decision maker title — who signs the purchase order?",
                  "Pain points — what specific problem does your product solve for them?",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check className="h-4 w-4 text-emerald-400 mt-0.5 shrink-0" />{item}
                  </li>
                ))}
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                Once your ICP is clear, every method below becomes more effective — because you&apos;re searching for a specific type of B2B client, not just any business.
              </p>
            </div>

            {/* The 7 methods */}
            <div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-8">
                7 Proven Ways to Find B2B Clients Online
              </h2>
              <div className="space-y-6">
                {METHODS.map(({ num, icon: Icon, title, desc, tool, toolLink, why }) => (
                  <div key={num} className="rounded-xl border border-border/60 bg-surface/40 p-6">
                    <div className="flex items-start gap-4">
                      <span className="text-3xl font-black text-primary/20 font-display leading-none shrink-0">{num}</span>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Icon className="h-4 w-4 text-primary" />
                          <h3 className="font-display text-lg font-bold text-foreground">{title}</h3>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-3">{desc}</p>
                        <div className="rounded-lg bg-surface/60 border border-border/40 px-3 py-2 flex flex-wrap items-start gap-3">
                          <div>
                            <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wide mb-0.5">Tool</p>
                            {toolLink ? (
                              <Link href={toolLink} className="text-xs text-primary underline font-medium">{tool}</Link>
                            ) : (
                              <p className="text-xs text-foreground font-medium">{tool}</p>
                            )}
                          </div>
                          <div className="flex-1">
                            <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wide mb-0.5">Why it works</p>
                            <p className="text-xs text-muted-foreground">{why}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* The fastest method */}
            <div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                The Fastest Way to Find B2B Clients in 2025
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If you need B2B clients now — not in 6 months — the fastest approach is:
              </p>
              <ol className="space-y-4 mb-6">
                {[
                  "Define your ICP (industry + company size + country)",
                  "Search GetYourClientsB2B with those filters to find matching businesses",
                  "Add them to a cold email sequence with 4–5 automated touches",
                  "Track replies and follow up with interested prospects",
                  "Book calls, run demos, and close",
                ].map((step, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-white text-xs font-bold">{i + 1}</span>
                    {step}
                  </li>
                ))}
              </ol>
              <p className="text-muted-foreground leading-relaxed">
                Teams that implement this workflow using <Link href="/" className="text-primary underline">GetYourClientsB2B</Link> typically book their first meetings within 1–2 weeks of starting outreach.
              </p>
            </div>

            {/* CTA */}
            <div className="rounded-xl border border-primary/40 bg-primary/5 p-6 text-center">
              <h3 className="font-display text-xl font-bold text-foreground mb-2">Start Finding B2B Clients Today</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Search 190+ countries by industry & company size. Add leads to outreach sequences in one click. Free to start.
              </p>
              <a href={APP_LOGIN_URL}>
                <Button className="font-semibold px-8 shadow-lg shadow-primary/25">
                  Find B2B Clients Free <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
              <p className="mt-2 text-xs text-muted-foreground">No credit card required</p>
            </div>

            {/* FAQ */}
            <div className="pt-8 border-t border-border/60">
              <h2 className="font-display text-2xl font-bold text-foreground mb-8">FAQs — Finding B2B Clients</h2>
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
                <Link href="/blog/b2b-client-outreach" className="rounded-xl border border-border/60 bg-surface/40 p-4 hover:border-primary/40 transition-colors group">
                  <h3 className="font-semibold text-foreground group-hover:text-primary text-sm mb-1">How to Do B2B Client Outreach That Gets Replies</h3>
                  <p className="text-xs text-muted-foreground">Cold email strategy & sequences</p>
                </Link>
                <Link href="/features/lead-discovery" className="rounded-xl border border-border/60 bg-surface/40 p-4 hover:border-primary/40 transition-colors group">
                  <h3 className="font-semibold text-foreground group-hover:text-primary text-sm mb-1">B2B Lead Discovery Tool</h3>
                  <p className="text-xs text-muted-foreground">Find B2B leads by industry & country</p>
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
