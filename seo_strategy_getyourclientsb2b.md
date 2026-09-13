# 🚀 GetYourClientsB2B — Comprehensive 90-Day SEO Strategy
**Domain:** [getyourclientsb2b.com](https://getyourclientsb2b.com) | **Stack:** Next.js (App Router) / Vercel

---

## Part 1 — Master Strategy & Keyword Research

### 🎯 Core Buyer Personas

| Persona | Title | Pain Point | Search Intent |
|---|---|---|---|
| **The Hustler** | Founder / Solo Sales Rep | "I need to find clients fast without a huge budget" | Transactional |
| **The Sales Manager** | VP Sales / Revenue Lead | "My team wastes 4h/day on manual prospecting" | Transactional + Comparison |
| **The Agency Owner** | B2B Lead Gen Agency | "I need scalable client discovery for multiple verticals" | Transactional |
| **The SDR** | Sales Development Rep | "How do I automate cold outreach without killing deliverability" | Informational |
| **The Ops Person** | RevOps / Marketing Ops | "We need a CRM that integrates lead discovery and outreach" | Comparison |

---

### 🔑 Seed Keyword Clusters (25 Keywords)

#### 🛒 Transactional (High Intent — Bottom of Funnel)

| # | Keyword | Est. Monthly Volume | Competition | Priority |
|---|---|---|---|---|
| 1 | B2B client discovery tool | 1,200 | Low | ⭐⭐⭐ |
| 2 | B2B lead generation software | 8,100 | High | ⭐⭐ |
| 3 | cold outreach CRM | 720 | Low | ⭐⭐⭐ |
| 4 | find B2B leads by industry | 590 | Low | ⭐⭐⭐ |
| 5 | B2B prospecting platform | 1,600 | Medium | ⭐⭐⭐ |
| 6 | sales outreach automation software | 2,400 | Medium | ⭐⭐ |
| 7 | CRM for cold email outreach | 480 | Low | ⭐⭐⭐ |
| 8 | B2B lead finder tool | 880 | Low | ⭐⭐⭐ |

#### ℹ️ Informational (Awareness — Top/Mid Funnel)

| # | Keyword | Est. Monthly Volume | Competition | Priority |
|---|---|---|---|---|
| 9 | how to automate cold outreach | 3,200 | Medium | ⭐⭐⭐ |
| 10 | how to find B2B clients online | 4,400 | Medium | ⭐⭐⭐ |
| 11 | best cold email strategies 2025 | 2,900 | Medium | ⭐⭐ |
| 12 | B2B lead generation strategies | 6,600 | High | ⭐⭐ |
| 13 | how to use CRM for sales prospecting | 1,800 | Low | ⭐⭐⭐ |
| 14 | what is B2B client discovery | 390 | Very Low | ⭐⭐⭐ |
| 15 | cold email deliverability tips | 2,100 | Medium | ⭐⭐ |
| 16 | how to build a B2B sales pipeline | 3,700 | Medium | ⭐⭐ |

#### ⚖️ Comparison & Alternative Terms (Mid-Bottom Funnel)

| # | Keyword | Est. Monthly Volume | Competition | Priority |
|---|---|---|---|---|
| 17 | Apollo.io alternative | 5,400 | High | ⭐⭐ |
| 18 | Hunter.io alternative | 2,900 | Medium | ⭐⭐⭐ |
| 19 | Lusha alternative | 1,800 | Medium | ⭐⭐⭐ |
| 20 | ZoomInfo alternative for small business | 720 | Low | ⭐⭐⭐ |
| 21 | Instantly vs Apollo | 1,200 | Medium | ⭐⭐ |
| 22 | best Apollo.io alternatives 2025 | 890 | Low | ⭐⭐⭐ |
| 23 | affordable B2B lead generation tool | 480 | Very Low | ⭐⭐⭐ |
| 24 | GetYourClients vs Apollo | — | Very Low | ⭐⭐⭐ |
| 25 | B2B prospecting tool comparison | 390 | Low | ⭐⭐⭐ |

---

### 🏗️ SEO-Optimized Site Architecture

```
getyourclientsb2b.com/
├── /                          ← Homepage (primary brand + "B2B client discovery")
├── /features/                 ← Features hub
│   ├── /features/lead-discovery      ← "B2B lead finder tool"
│   ├── /features/crm-outreach        ← "cold outreach CRM"
│   ├── /features/map-search          ← "find leads by location"
│   └── /features/automation          ← "sales outreach automation"
├── /pricing/                  ← "affordable B2B lead generation"
├── /blog/                     ← Informational content hub
│   ├── /blog/cold-email/      ← Cold Email cluster
│   ├── /blog/b2b-prospecting/ ← B2B Prospecting cluster
│   └── /blog/sales-crm/       ← CRM cluster
├── /compare/                  ← Comparison pages hub
│   ├── /compare/apollo-alternative
│   ├── /compare/hunter-alternative
│   ├── /compare/lusha-alternative
│   └── /compare/zoominfo-alternative
├── /industries/               ← Programmatic SEO hub
│   ├── /industries/saas/
│   ├── /industries/manufacturing/
│   └── /industries/[industry]/        ← Dynamic routes
├── /find/                     ← Programmatic SEO hub (geo)
│   └── /find/[industry]-clients-in-[city]/
├── /use-cases/
│   ├── /use-cases/agencies
│   ├── /use-cases/sales-teams
│   └── /use-cases/freelancers
├── /contact/                  ← (already exists)
├── /privacy/                  ← (already exists)
└── /terms/                    ← (already exists)
```

---

### ⚡ Quick Wins — 30-Day Action Plan

#### Quick Win #1: Claim Low-Competition Long-Tails Now
Target these **immediately** with dedicated landing pages or blog posts:
- `"CRM for cold email outreach"` (480/mo, Low KD) → `/features/crm-outreach`
- `"what is B2B client discovery"` (390/mo, Very Low KD) → Blog post
- `"affordable B2B lead generation tool"` (480/mo, Very Low KD) → `/pricing` page optimization

#### Quick Win #2: Optimize Existing Pages
Your [layout.tsx](file:///d:/Company/Website/get-your-clients/frontend/app/layout.tsx) has a solid base description. Expand page-level metadata for `/pricing`, `/contact`, and the homepage with keyword-rich, intent-matched titles.

#### Quick Win #3: Build 3 Comparison Pages
`/compare/apollo-alternative`, `/compare/hunter-alternative`, and `/compare/zoominfo-alternative` can rank within 30–45 days with thin-but-targeted content. These have commercial intent and convert well.

---

## Part 2 — Technical SEO (Next.js App Router)

### ✅ Technical SEO Checklist

#### 1. Dynamic `generateMetadata` — Per-Page SEO

Create a reusable metadata factory. Add this to each page's `page.tsx`:

```typescript
// app/compare/[slug]/page.tsx
import { Metadata } from "next";

type Props = { params: { slug: string } };

const COMPARE_META: Record<string, { title: string; description: string }> = {
  "apollo-alternative": {
    title: "Best Apollo.io Alternative in 2025 | GetYourClientsB2B",
    description:
      "Looking for an Apollo.io alternative? GetYourClientsB2B offers B2B lead discovery, map-based prospecting, and cold outreach CRM at a fraction of the cost. Try free.",
  },
  "hunter-alternative": {
    title: "Hunter.io Alternative — Find B2B Leads & Run Outreach | GetYourClientsB2B",
    description:
      "GetYourClientsB2B is the top Hunter.io alternative for teams needing full CRM + outreach automation. Search by industry & country. No credit card required.",
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const meta = COMPARE_META[params.slug];
  return {
    title: meta?.title ?? "Compare B2B Lead Tools | GetYourClientsB2B",
    description: meta?.description ?? "Compare the best B2B prospecting tools.",
    alternates: {
      canonical: `https://getyourclientsb2b.com/compare/${params.slug}`,
    },
    openGraph: {
      title: meta?.title,
      description: meta?.description,
      url: `https://getyourclientsb2b.com/compare/${params.slug}`,
      siteName: "GetYourClientsB2B",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: meta?.title,
      description: meta?.description,
    },
  };
}
```

#### 2. Dynamic `sitemap.xml`

Create [`app/sitemap.ts`](file:///d:/Company/Website/get-your-clients/frontend/app/sitemap.ts):

```typescript
// app/sitemap.ts
import { MetadataRoute } from "next";

const BASE_URL = "https://getyourclientsb2b.com";

// Pull these from your PostgreSQL DB in production
const COMPARE_SLUGS = ["apollo-alternative", "hunter-alternative", "lusha-alternative", "zoominfo-alternative"];
const INDUSTRY_SLUGS = ["saas", "manufacturing", "healthcare", "retail", "finance"];
const BLOG_SLUGS: string[] = []; // Populate from DB

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 1.0 },
    { url: `${BASE_URL}/pricing`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${BASE_URL}/features/lead-discovery`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${BASE_URL}/features/crm-outreach`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
  ];

  const compareRoutes = COMPARE_SLUGS.map((slug) => ({
    url: `${BASE_URL}/compare/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  const industryRoutes = INDUSTRY_SLUGS.map((slug) => ({
    url: `${BASE_URL}/industries/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.75,
  }));

  return [...staticRoutes, ...compareRoutes, ...industryRoutes];
}
```

#### 3. `robots.txt`

Create [`app/robots.ts`](file:///d:/Company/Website/get-your-clients/frontend/app/robots.ts):

```typescript
// app/robots.ts
import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/dashboard/", "/api/", "/onboard/", "/_next/"],
      },
    ],
    sitemap: "https://getyourclientsb2b.com/sitemap.xml",
    host: "https://getyourclientsb2b.com",
  };
}
```

#### 4. Canonical Tags — Already Handled

When you pass `alternates.canonical` in `generateMetadata`, Next.js App Router renders the `<link rel="canonical">` tag automatically. **Always include this in every page's metadata.**

```typescript
// In every page's generateMetadata or static metadata export:
alternates: {
  canonical: "https://getyourclientsb2b.com/your-page-path",
}
```

#### 5. Core Web Vitals — Critical Actions

| Metric | Target | Action for Next.js |
|---|---|---|
| **LCP** (Largest Contentful Paint) | < 2.5s | Use `next/image` with `priority` on hero images |
| **CLS** (Cumulative Layout Shift) | < 0.1 | Always set `width` + `height` on `next/image` |
| **FID / INP** | < 200ms | Lazy-load heavy components with `next/dynamic` |
| **TTFB** | < 0.8s | Use ISR or SSG for marketing pages |

```typescript
// ✅ next/image best practice
import Image from "next/image";
<Image
  src="/images/hero-dashboard.webp"
  alt="GetYourClientsB2B dashboard — B2B lead discovery map view"
  width={1200}
  height={630}
  priority          // ← Only for above-the-fold hero images
  sizes="(max-width: 768px) 100vw, 1200px"
/>

// ✅ next/font is already configured in your layout.tsx — great!
// Ensure display: "swap" is set (it is) to prevent invisible text during font load
```

#### 6. JSON-LD Schema Markup

Add this to your root [`layout.tsx`](file:///d:/Company/Website/get-your-clients/frontend/app/layout.tsx) or relevant page:

```typescript
// components/SchemaMarkup.tsx
export function SoftwareApplicationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "GetYourClientsB2B",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: "https://getyourclientsb2b.com",
    description:
      "B2B client discovery and CRM outreach platform. Find leads by industry and country, manage them on an interactive map, and run outreach from one dashboard.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      description: "Free trial available",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "124",
    },
    featureList: [
      "B2B Lead Discovery",
      "Map-based Prospecting",
      "Cold Outreach CRM",
      "Industry & Country Filtering",
      "Email Automation",
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FAQSchema({ faqs }: { faqs: { q: string; a: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
```

**Example FAQ data for the homepage:**
```typescript
const homepageFAQs = [
  {
    q: "What is GetYourClientsB2B?",
    a: "GetYourClientsB2B is a B2B client discovery and CRM outreach platform that lets you find leads by industry and country, visualize them on a map, and run cold outreach from a single dashboard.",
  },
  {
    q: "Is GetYourClientsB2B an Apollo.io alternative?",
    a: "Yes. GetYourClientsB2B offers similar B2B prospecting capabilities with added map-based discovery and built-in CRM outreach, often at a lower price point for growing teams.",
  },
  {
    q: "Can I automate my cold email outreach?",
    a: "Absolutely. GetYourClientsB2B includes outreach automation tools to help you send personalized cold emails at scale while managing follow-up sequences from one place.",
  },
];
```

---

## Part 3 — Programmatic SEO & Landing Page Strategy

### 📄 3 Programmatic Page Templates

---

#### Template A: `Find [Industry] Clients in [City]`
**URL pattern:** `/find/[industry]-clients-in-[city]`
**Example:** `/find/saas-clients-in-dubai`

```
H1: Find SaaS Clients in Dubai — B2B Lead Discovery Tool
H2: Why Sales Teams Use GetYourClientsB2B to Prospect in Dubai
  H3: Filter SaaS companies by employee size and revenue
  H3: Visualize Dubai leads on an interactive map
  H3: Launch outreach campaigns directly from the platform
H2: How It Works — 3 Steps to Your First Dubai SaaS Lead
  H3: Step 1: Set your industry filter (SaaS, Tech, FinTech...)
  H3: Step 2: Set your geography to Dubai, UAE
  H3: Step 3: Export, enrich, and reach out in one click
H2: Frequently Asked Questions — B2B Prospecting in Dubai
```

**Meta Title Formula:**
`Find [Industry] Clients in [City] | B2B Lead Discovery — GetYourClientsB2B`

**Meta Description Formula:**
`Discover [Industry] businesses in [City] instantly. GetYourClientsB2B lets you filter B2B leads by industry, city, and company size — then run outreach from one dashboard. Start free.`

---

#### Template B: `[Competitor] Alternative`
**URL pattern:** `/compare/[competitor]-alternative`
**Example:** `/compare/apollo-alternative`

```
H1: The Best Apollo.io Alternative for B2B Teams in 2025
H2: Why Teams Switch from Apollo to GetYourClientsB2B
  H3: Map-based lead discovery vs. flat list views
  H3: Built-in CRM outreach vs. third-party integrations
  H3: Pricing comparison: Apollo vs. GetYourClientsB2B
H2: Feature-by-Feature Comparison
  H3: Lead Discovery & Data Quality
  H3: CRM & Pipeline Management
  H3: Email Outreach & Automation
  H3: Pricing & Value for Small Teams
H2: Real Teams Who Switched from Apollo
H2: How to Migrate from Apollo to GetYourClientsB2B (Step-by-Step)
H2: Frequently Asked Questions
```

**Meta Title Formula:**
`Best [Competitor] Alternative in 2025 | GetYourClientsB2B`

**Meta Description Formula:**
`Looking for a [Competitor] alternative? GetYourClientsB2B gives you [Key Differentiator 1] and [Key Differentiator 2] — at a price that scales with your team. Compare plans & try free.`

---

#### Template C: `B2B Leads for [Industry]`
**URL pattern:** `/industries/[industry]`
**Example:** `/industries/manufacturing`

```
H1: B2B Lead Discovery for the Manufacturing Industry
H2: Why Manufacturing Sales Cycles Demand Better Prospecting
  H3: Long sales cycles need relationship-first outreach
  H3: Decision makers in manufacturing are hard to find
H2: How GetYourClientsB2B Helps You Find Manufacturing Clients
  H3: Filter by SIC code and NAICS classification
  H3: Geo-target manufacturing hubs (Detroit, Stuttgart, Shenzhen)
  H3: Build outreach sequences for multi-stakeholder deals
H2: Manufacturing Verticals We Cover
  H3: Industrial Equipment | Auto Parts | Food Processing | ...
H2: Start Finding Manufacturing Clients Today
H2: FAQs — B2B Prospecting for Manufacturing
```

**Meta Title Formula:**
`B2B Lead Generation for [Industry] Companies | GetYourClientsB2B`

**Meta Description Formula:**
`Find verified [Industry] leads worldwide with GetYourClientsB2B. Filter by country, company size, and revenue — then reach out directly from our B2B CRM. Free trial available.`

---

### 🗄️ Database-Driven Strategy (PostgreSQL)

```sql
-- Core table to drive programmatic pages
CREATE TABLE programmatic_pages (
  id          SERIAL PRIMARY KEY,
  template    TEXT NOT NULL,          -- 'find', 'compare', 'industry'
  slug        TEXT NOT NULL UNIQUE,
  h1          TEXT NOT NULL,
  meta_title  TEXT NOT NULL,
  meta_desc   TEXT NOT NULL,
  industry    TEXT,
  city        TEXT,
  country     TEXT,
  competitor  TEXT,
  stats       JSONB,                  -- {"avg_companies": 1200, "market_size": "$4.2B"}
  published   BOOLEAN DEFAULT FALSE,
  created_at  TIMESTAMPTZ DEFAULT NOW()
);

-- Example rows
INSERT INTO programmatic_pages (template, slug, h1, meta_title, meta_desc, industry, city)
VALUES
  ('find', 'saas-clients-in-dubai', 'Find SaaS Clients in Dubai', 'Find SaaS Clients in Dubai | GetYourClientsB2B', 'Discover SaaS businesses in Dubai...', 'SaaS', 'Dubai'),
  ('find', 'manufacturing-clients-in-germany', 'Find Manufacturing Clients in Germany', 'Find Manufacturing Clients in Germany | GetYourClientsB2B', 'Discover manufacturing businesses in Germany...', 'Manufacturing', 'Germany');
```

**Next.js Dynamic Route (`app/find/[slug]/page.tsx`):**
```typescript
export async function generateStaticParams() {
  // Fetch all published slugs from DB at build time
  const pages = await db.query("SELECT slug FROM programmatic_pages WHERE template = 'find' AND published = TRUE");
  return pages.rows.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const page = await db.query("SELECT * FROM programmatic_pages WHERE slug = $1", [params.slug]);
  return {
    title: page.rows[0].meta_title,
    description: page.rows[0].meta_desc,
    alternates: { canonical: `https://getyourclientsb2b.com/find/${params.slug}` },
  };
}
```

> **Scaling Tip:** Start with 50 high-priority city+industry combos. Use `generateStaticParams` for ISR. Set `revalidate = 86400` (24h) to keep pages fresh without rebuilding.

---

## Part 4 — Content Marketing & Authority Building

### 📚 5 Hub-and-Spoke Content Clusters

---

#### Cluster 1: 🧊 Cold Email Mastery (Hub)
**Hub URL:** `/blog/cold-email/ultimate-guide`
**Hub Title:** *The Ultimate Guide to Cold Email Deliverability in 2025*

**Spoke Articles:**
1. `/blog/cold-email/best-subject-lines` — 47 Cold Email Subject Lines That Get Replies (Tested)
2. `/blog/cold-email/spf-dkim-dmarc-setup` — SPF, DKIM & DMARC: The Complete Setup Guide
3. `/blog/cold-email/warm-up-email-account` — How to Warm Up a New Email Account Before Cold Outreach
4. `/blog/cold-email/follow-up-sequences` — The 5-Touch Cold Email Follow-Up Sequence That Books Meetings
5. `/blog/cold-email/personalization-at-scale` — Cold Email Personalization at Scale: Templates + Tactics

**Backlink Strategy:** Pitch guest posts on Lemlist blog, Woodpecker blog, Close CRM blog, and cold email Reddit communities (r/sales, r/emailmarketing).

---

#### Cluster 2: 🔍 B2B Lead Generation (Hub)
**Hub URL:** `/blog/b2b-prospecting/ultimate-guide`
**Hub Title:** *The Complete B2B Lead Generation Playbook for 2025*

**Spoke Articles:**
1. `/blog/b2b-prospecting/linkedin-scraping-tools` — 7 LinkedIn Prospecting Tools That Don't Get You Banned
2. `/blog/b2b-prospecting/icp-ideal-customer-profile` — How to Build an ICP That Triples Your Reply Rates
3. `/blog/b2b-prospecting/b2b-data-providers` — 10 Best B2B Data Providers Compared (2025)
4. `/blog/b2b-prospecting/outbound-vs-inbound` — Outbound vs. Inbound Lead Generation: Which Wins for B2B SaaS?
5. `/blog/b2b-prospecting/find-decision-makers` — How to Find Decision Makers in Any Company (Without LinkedIn Premium)

**Backlink Strategy:** Submit to Sales Hacker, HubSpot community, G2 Crowd reviews + "round-up" link building (contact authors who wrote "best tools" lists).

---

#### Cluster 3: 🌍 International B2B Sales (Hub)
**Hub URL:** `/blog/international-sales/ultimate-guide`
**Hub Title:** *How to Expand Your B2B Sales Internationally (Country-by-Country Guide)*

**Spoke Articles:**
1. `/blog/international-sales/b2b-leads-europe` — How to Find B2B Clients in Europe: A Region-by-Region Guide
2. `/blog/international-sales/b2b-leads-middle-east` — B2B Prospecting in the Middle East: UAE, Saudi Arabia & Beyond
3. `/blog/international-sales/cross-border-cold-email` — Cross-Border Cold Email Laws: GDPR, CAN-SPAM & CASL Explained
4. `/blog/international-sales/currency-pricing-b2b` — How to Price Your B2B Offer for International Markets
5. `/blog/international-sales/timezone-outreach` — The Best Times to Send Cold Emails Across Time Zones

**Backlink Strategy:** Pitch to export.gov, chambers of commerce websites, and international business blogs. This cluster is highly linkable from trade organizations.

---

#### Cluster 4: 🤖 Sales Automation (Hub)
**Hub URL:** `/blog/sales-automation/ultimate-guide`
**Hub Title:** *The B2B Sales Automation Playbook: Prospect, Outreach & Close on Autopilot*

**Spoke Articles:**
1. `/blog/sales-automation/crm-automation-setup` — How to Set Up CRM Automation for a 10-Person Sales Team
2. `/blog/sales-automation/email-sequences` — How to Write Email Sequences That Actually Convert
3. `/blog/sales-automation/sales-cadence` — The 8-Touch Sales Cadence That Books 3x More Meetings
4. `/blog/sales-automation/ai-in-sales` — How AI is Changing B2B Sales Prospecting in 2025
5. `/blog/sales-automation/outreach-metrics` — The 7 Sales Outreach Metrics Every Team Should Track

**Backlink Strategy:** Contribute data-driven statistics ("Teams using CRM automation close 28% faster"). These stat posts attract backlinks naturally from industry surveys and roundups.

---

#### Cluster 5: 🏆 CRM Comparisons (Hub)
**Hub URL:** `/blog/crm/best-crm-for-cold-outreach`
**Hub Title:** *The 8 Best CRMs for Cold Email Outreach in 2025 (Compared)*

**Spoke Articles:**
1. `/compare/apollo-alternative` — GetYourClientsB2B vs. Apollo.io: Which is Better for Small Teams?
2. `/compare/hunter-alternative` — GetYourClientsB2B vs. Hunter.io: Feature & Pricing Comparison
3. `/compare/lusha-alternative` — GetYourClientsB2B vs. Lusha: B2B Data Quality Face-Off
4. `/compare/zoominfo-alternative` — ZoomInfo Alternative for Startups: Why GetYourClientsB2B Wins
5. `/blog/crm/crm-vs-sales-engagement` — CRM vs. Sales Engagement Platform: What B2B Teams Really Need

**Backlink Strategy:** Target product review sites (G2, Capterra, Trustpilot, Product Hunt). Getting listed and reviewed on these platforms alone generates high-authority dofollow backlinks.

---

### 🔗 Backlink Acquisition Playbook

| Tactic | Target Sites | Timeline |
|---|---|---|
| **Guest Posts** | Lemlist, Woodpecker, Close.io blogs | Month 1–2 |
| **HARO / Qwoted** | Major marketing & sales publications | Ongoing |
| **Product Listings** | G2, Capterra, Product Hunt, Crunchbase | Week 1 |
| **Statistics Pitching** | Round-up posts citing your data | Month 2–3 |
| **Directory Submissions** | AlternativeTo, SaaSworthy, GetApp | Week 1–2 |
| **Podcast Outreach** | Sales/RevOps podcasts (guest spots) | Month 2–3 |
| **Reddit & Communities** | r/sales, r/emailmarketing, Slack groups | Ongoing |

---

## 📅 90-Day Execution Roadmap

| Week | Priority Action |
|---|---|
| **1–2** | Fix metadata in all existing pages, add `sitemap.ts`, `robots.ts`, Schema markup |
| **3–4** | Publish 3 comparison pages (Apollo, Hunter, Lusha) |
| **5–6** | Launch Cold Email Hub + 3 spoke articles |
| **7–8** | Launch B2B Lead Gen Hub + build first 20 programmatic `/find/` pages |
| **9–10** | Submit to G2, Capterra, AlternativeTo, Product Hunt |
| **11–12** | Pitch 3 guest posts; Launch International Sales cluster |

---

> [!TIP]
> **Highest-leverage action this week:** Add `sitemap.ts` and `robots.ts` to your Next.js app, then verify with Google Search Console. This alone can accelerate indexing of all your existing pages within 7–10 days.

> [!IMPORTANT]
> Your current [`layout.tsx`](file:///d:/Company/Website/get-your-clients/frontend/app/layout.tsx) has a good global description but **no per-page metadata** on most routes. Each of your `/pricing`, `/login`, `/contact`, and `/onboard` pages should have unique `metadata` exports with page-specific titles and descriptions — this is a quick win with significant impact.

> [!NOTE]
> Programmatic SEO pages only work if they have **unique, genuinely useful content** per page. Avoid pure template duplication. At minimum, include city/industry-specific statistics, a relevant CTA, and a custom intro paragraph per page.
