import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  Building2,
  Globe,
  MapPin,
  Zap,
  TrendingUp,
  Users,
  Database,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { MarketingNavbar } from "@/components/marketing/marketing-navbar";
import { MarketingFooter } from "@/components/marketing/marketing-footer";
import { JsonLd, breadcrumbSchema, faqSchema } from "@/components/seo/JsonLd";
import { APP_LOGIN_URL } from "@/lib/constants";

const BASE_URL = "https://www.getyourclientsb2b.com";

// ─── Industry Data ─────────────────────────────────────────────────────────

interface BenefitItem {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: any;
  title: string;
  desc: string;
}

interface StepItem {
  step: string;
  title: string;
  desc: string;
}

interface FaqItem {
  question: string;
  answer: string;
}

interface StatItem {
  value: string;
  label: string;
}

interface IndustryData {
  slug: string;
  name: string;
  tagline: string;
  heroTitle: string;
  heroGradientWord: string;
  heroSubtitle: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  ogDescription: string;
  twitterDescription: string;
  benefits: BenefitItem[];
  steps: StepItem[];
  inclusions: string[];
  faqs: FaqItem[];
  ctaTitle: string;
  ctaSubtitle: string;
  searchExamples: string[];
  stats: StatItem[];
}

const INDUSTRY_DATA: Record<string, IndustryData> = {
  saas: {
    slug: "saas",
    name: "SaaS & Technology",
    tagline: "For SaaS Companies",
    heroTitle: "Find B2B Clients for Your",
    heroGradientWord: "SaaS Product",
    heroSubtitle:
      "Discover decision-makers at tech companies, startups, and software firms across 190+ countries. Filter by company size, region, and sub-vertical — then run cold outreach from one dashboard.",
    metaTitle: "B2B Lead Generation for SaaS Companies — Find Tech Clients",
    metaDescription:
      "GetYourClientsB2B helps SaaS companies discover B2B prospects at tech firms, startups, and enterprises worldwide. Filter by industry, country, and company size. Try free.",
    keywords: [
      "B2B lead generation for SaaS",
      "find SaaS clients",
      "SaaS prospecting tool",
      "B2B outreach for software companies",
      "tech company lead finder",
      "SaaS sales prospecting software",
    ],
    ogDescription:
      "Find qualified B2B prospects for your SaaS product. GetYourClientsB2B searches tech companies, startups, and enterprises across 190+ countries — filter by size and region.",
    twitterDescription:
      "B2B lead generation for SaaS teams. Discover tech company prospects by industry, country, and company size — then outreach from one platform.",
    benefits: [
      { icon: Database, title: "Tech Company Database", desc: "Search millions of software companies, SaaS businesses, and tech-adjacent firms. Filter by vertical — fintech, HR tech, marketing tech, and more." },
      { icon: MapPin, title: "Geographic Targeting", desc: "Focus outreach on high-value tech hubs — Silicon Valley, London, Berlin, Tel Aviv, Singapore, Bangalore — or any city worldwide." },
      { icon: Zap, title: "Fast Cold Outreach", desc: "Launch email sequences targeting CTOs, VPs of Engineering, Product Managers, and other decision-makers in the tech space." },
      { icon: Globe, title: "190+ Country Coverage", desc: "SaaS is global. Reach prospects across APAC, EMEA, LATAM, and North America without switching tools or data vendors." },
      { icon: TrendingUp, title: "Pipeline Visibility", desc: "Track every prospect from first contact to closed deal. See reply rates, open rates, and pipeline stages in one place." },
      { icon: Users, title: "Team Collaboration", desc: "Assign leads to SDRs, share sequences, and collaborate on outreach strategy — ideal for growing SaaS sales teams." },
    ],
    steps: [
      { step: "01", title: "Set Industry Filter to SaaS / Technology", desc: "Select SaaS, software, or technology as your target vertical. Narrow further by sub-category — fintech, edtech, martech, or enterprise software." },
      { step: "02", title: "Filter by Target Geography", desc: "Choose your priority markets — US, UK, EU, or specific cities. See prospect density on the live map before committing prospecting time." },
      { step: "03", title: "Build Your Prospect List", desc: "Browse matching companies, review firmographic details, and add target accounts to your outreach pipeline with one click." },
      { step: "04", title: "Launch Automated Outreach", desc: "Send personalized cold email sequences to CTOs, Founders, and VP-level contacts. Automated follow-ups run until they reply." },
    ],
    inclusions: [
      "B2B lead discovery across SaaS and tech verticals",
      "Filter by company size, country, and sub-industry",
      "Map-based prospecting to visualize tech hubs globally",
      "Contact discovery for decision-makers (Founders, CTOs, VPs)",
      "Cold email sequence builder with personalization variables",
      "Automated follow-up sequences",
      "Open rate, reply rate, and booked meeting tracking",
      "CRM pipeline management",
      "CSV export for your existing CRM or reporting",
      "Flat-rate pricing — no per-contact or per-seat fees",
    ],
    faqs: [
      {
        question: "Can GetYourClientsB2B help me find SaaS companies to sell to?",
        answer: "Yes. You can filter specifically for software and SaaS companies, then narrow by sub-vertical (fintech, HR tech, etc.), company size, and country. The results include business details and contact information for outreach.",
      },
      {
        question: "What kind of SaaS prospects can I find?",
        answer: "You can find B2B SaaS companies of all sizes — from funded startups to enterprise software vendors — across 190+ countries. Filter by region to focus on specific tech ecosystems like Silicon Valley, London, or Berlin.",
      },
      {
        question: "How do I target decision-makers at tech companies?",
        answer: "After finding matching companies, GetYourClientsB2B surfaces contact information for relevant decision-makers. You can then enroll them directly in personalized cold email sequences without leaving the platform.",
      },
      {
        question: "Is this better than LinkedIn Sales Navigator for SaaS prospecting?",
        answer: "GetYourClientsB2B complements LinkedIn by focusing on company-level discovery with integrated outreach automation. Flat-rate pricing means you are not paying per contact or per seat — ideal for SaaS teams doing high-volume prospecting.",
      },
    ],
    ctaTitle: "Start Filling Your SaaS Pipeline",
    ctaSubtitle: "Find tech company prospects in any market, any country — then close them faster with automated outreach.",
    searchExamples: ["SaaS companies in Austin, TX", "Fintech startups in London", "HR tech firms in Germany", "MarTech agencies in Singapore"],
    stats: [
      { value: "190+", label: "Countries covered" },
      { value: "50+", label: "Tech sub-verticals" },
      { value: "1-click", label: "Outreach launch" },
      { value: "Free", label: "Plan to start" },
    ],
  },

  healthcare: {
    slug: "healthcare",
    name: "Healthcare & Life Sciences",
    tagline: "For Healthcare Vendors",
    heroTitle: "Find B2B Clients in",
    heroGradientWord: "Healthcare & Life Sciences",
    heroSubtitle:
      "Discover clinics, hospitals, medical device companies, pharma distributors, and healthcare services businesses across 190+ countries. Reach administrators, procurement leads, and clinical directors.",
    metaTitle: "B2B Lead Generation for Healthcare Vendors — Find Medical Clients",
    metaDescription:
      "GetYourClientsB2B helps healthcare vendors, medical device sellers, and health tech companies find B2B clients at clinics, hospitals, and life sciences firms. Try free.",
    keywords: [
      "B2B lead generation for healthcare",
      "find healthcare clients",
      "medical B2B prospecting tool",
      "healthcare vendor outreach",
      "hospital and clinic lead finder",
      "life sciences B2B sales",
    ],
    ogDescription:
      "Find B2B clients in healthcare and life sciences. Discover hospitals, clinics, pharma companies, and medical device buyers across 190+ countries.",
    twitterDescription:
      "B2B prospecting for healthcare vendors. Find hospitals, clinics, and health tech companies in any country — then run targeted outreach from one dashboard.",
    benefits: [
      { icon: Building2, title: "Healthcare Business Database", desc: "Search clinics, hospitals, medical device companies, pharma distributors, diagnostics labs, and allied health services globally." },
      { icon: MapPin, title: "Regional Targeting", desc: "Target healthcare clusters by country or city — NHS trusts in the UK, private hospital groups in the Gulf, or hospital networks in APAC." },
      { icon: Users, title: "Reach Decision-Makers", desc: "Identify and contact procurement directors, clinical administrators, hospital CEOs, and supply chain managers — not gatekeeper emails." },
      { icon: Globe, title: "International Coverage", desc: "Healthcare procurement is global. Reach buyers in North America, Europe, the Middle East, South Asia, and Southeast Asia from one tool." },
      { icon: Zap, title: "Targeted B2B Outreach", desc: "Run targeted B2B cold email campaigns to healthcare businesses. Automated follow-ups surface hot leads without manual follow-through." },
      { icon: TrendingUp, title: "Pipeline Tracking", desc: "Track your healthcare deals from first email to purchase order. See which sequences get the most responses from medical buyers." },
    ],
    steps: [
      { step: "01", title: "Select Healthcare as Target Industry", desc: "Filter for hospitals, clinics, medical devices, pharma, diagnostics, or health tech sub-categories." },
      { step: "02", title: "Choose Your Target Region or Country", desc: "Focus on specific countries (US, UK, UAE, India, Australia) or zoom into hospital-dense cities on the live map." },
      { step: "03", title: "Build a Qualified Prospect List", desc: "Review matching healthcare businesses, assess company size and type, and add relevant accounts to your outreach pipeline." },
      { step: "04", title: "Run Targeted Email Outreach", desc: "Launch personalized sequences targeting procurement leads and clinical administrators. Automation handles follow-ups." },
    ],
    inclusions: [
      "Healthcare and life sciences B2B lead database",
      "Filter by sub-vertical: hospitals, clinics, pharma, diagnostics, health tech",
      "Country and city-level geographic targeting",
      "Decision-maker contact discovery",
      "Cold email sequences with personalization variables",
      "Automated follow-up workflows",
      "Reply detection and meeting booking tracking",
      "CRM pipeline management for healthcare sales cycles",
      "CSV export for your CRM",
      "Flat-rate pricing — no per-contact fees",
    ],
    faqs: [
      {
        question: "Can I find hospitals and clinics to sell my product to?",
        answer: "Yes. You can filter specifically for healthcare providers — hospitals, clinics, diagnostic labs, and outpatient centers — by country and city. GetYourClientsB2B surfaces business details and decision-maker contacts for outreach.",
      },
      {
        question: "What types of healthcare companies are in the database?",
        answer: "The database includes hospitals, private clinics, medical device companies, pharmaceutical distributors, diagnostics companies, health tech SaaS firms, and allied health services businesses across 190+ countries.",
      },
      {
        question: "Is cold email outreach compliant for B2B healthcare sales?",
        answer: "GetYourClientsB2B is designed for B2B commercial prospecting — targeting businesses, not individual patients. B2B cold outreach to procurement and administrative contacts at healthcare businesses is a standard and compliant sales practice.",
      },
      {
        question: "Can I target healthcare buyers in the Middle East or Southeast Asia?",
        answer: "Yes. The platform covers 190+ countries including the UAE, Saudi Arabia, India, Malaysia, Singapore, Australia, and across the EU. You can filter and visualize market density in any region before committing outreach resources.",
      },
    ],
    ctaTitle: "Find Your Next Healthcare Client",
    ctaSubtitle: "Search hospitals, clinics, and medical companies in any country — then launch outreach automatically.",
    searchExamples: ["Private hospitals in Dubai", "Medical device companies in Germany", "Diagnostics labs in India", "Health tech startups in the UK"],
    stats: [
      { value: "190+", label: "Countries covered" },
      { value: "10+", label: "Healthcare sub-verticals" },
      { value: "Auto", label: "Follow-up sequences" },
      { value: "Free", label: "Plan to start" },
    ],
  },

  manufacturing: {
    slug: "manufacturing",
    name: "Manufacturing & Industrial",
    tagline: "For Manufacturing Vendors",
    heroTitle: "Find B2B Clients in",
    heroGradientWord: "Manufacturing & Industry",
    heroSubtitle:
      "Discover manufacturers, industrial suppliers, logistics companies, and factories across 190+ countries. Find purchasing managers, plant directors, and procurement leads ready to evaluate your solution.",
    metaTitle: "B2B Lead Generation for Manufacturing — Find Industrial Clients",
    metaDescription:
      "GetYourClientsB2B helps vendors find B2B clients in manufacturing, industrial supply, and logistics. Prospect factories and suppliers worldwide. Try free.",
    keywords: [
      "B2B lead generation for manufacturing",
      "find manufacturing clients",
      "industrial B2B prospecting",
      "factory and supplier lead finder",
      "manufacturing sales outreach tool",
      "industrial vendor lead generation",
    ],
    ogDescription:
      "Find B2B clients in manufacturing and industrial sectors. Discover factories, suppliers, and industrial businesses across 190+ countries with GetYourClientsB2B.",
    twitterDescription:
      "B2B prospecting for manufacturing and industrial vendors. Find factories, suppliers, and purchasing managers in any country — all in one platform.",
    benefits: [
      { icon: Building2, title: "Manufacturing Company Database", desc: "Search factories, OEM manufacturers, industrial suppliers, logistics firms, and engineering businesses across the globe." },
      { icon: MapPin, title: "Industrial Hub Targeting", desc: "Focus on manufacturing clusters — Shenzhen, Germany's Ruhr, US Midwest, Maharashtra, Vietnam, and Mexico — on a live map." },
      { icon: Users, title: "Reach Procurement Decision-Makers", desc: "Find and contact Purchasing Managers, Plant Directors, Operations Directors, and Supply Chain VPs at target factories." },
      { icon: Globe, title: "Global Supply Chain Coverage", desc: "Manufacturing is global. Reach buyers in China, Germany, the US, India, Vietnam, Mexico, and 190+ other countries." },
      { icon: Zap, title: "Automated Outreach Sequences", desc: "Run multi-touch cold email campaigns targeting procurement and operations leadership. Follow-ups run automatically." },
      { icon: TrendingUp, title: "Long Sales Cycle Pipeline", desc: "Track manufacturing deals across long procurement cycles. See touchpoints, responses, and pipeline progress at a glance." },
    ],
    steps: [
      { step: "01", title: "Select Manufacturing / Industrial as Target Vertical", desc: "Filter for manufacturers, industrial suppliers, logistics, engineering, or construction businesses globally." },
      { step: "02", title: "Target Key Manufacturing Geographies", desc: "Zoom into industrial corridors in Germany, China, India, or the US Midwest. See factory density before deciding where to focus." },
      { step: "03", title: "Build a Targeted Account List", desc: "Review companies, identify purchasing-decision structure, and add priority accounts to your outreach pipeline." },
      { step: "04", title: "Launch Outreach to Procurement Contacts", desc: "Send personalized sequences to Purchasing Managers and Plant Directors. Follow-ups automate until a response is received." },
    ],
    inclusions: [
      "Manufacturing and industrial B2B company database",
      "Sub-vertical filters: factories, OEM, logistics, engineering, construction",
      "Map-based industrial hub prospecting",
      "Procurement and operations decision-maker contact discovery",
      "Multi-touch cold email sequence builder",
      "Automated follow-up workflows",
      "Pipeline tracking for long manufacturing sales cycles",
      "Reply detection and meeting tracking",
      "CSV export for your ERP or CRM",
      "Flat-rate pricing — no per-contact fees",
    ],
    faqs: [
      {
        question: "Can I find factories and manufacturers to sell my B2B product to?",
        answer: "Yes. You can filter by manufacturing and industrial sub-vertical — OEM manufacturers, industrial suppliers, logistics, engineering firms — then narrow by country or city to find matching businesses and their procurement contacts.",
      },
      {
        question: "What manufacturing geographies does GetYourClientsB2B cover?",
        answer: "The platform covers 190+ countries including top manufacturing hubs — China, Germany, USA, India, Vietnam, Mexico, South Korea, Japan, Brazil, and across Eastern Europe and Southeast Asia.",
      },
      {
        question: "How do I reach purchasing managers at manufacturing companies?",
        answer: "After building your account list, GetYourClientsB2B surfaces contact information for decision-makers including Purchasing Managers, Plant Directors, and Supply Chain VPs. You can add them directly to cold email sequences.",
      },
      {
        question: "Manufacturing deals take months. Can I manage long sales cycles in this tool?",
        answer: "Yes. The CRM pipeline tracks each prospect across multiple touchpoints and deal stages. You can set extended follow-up sequences and monitor where each account stands in a long procurement cycle.",
      },
    ],
    ctaTitle: "Find Your Next Manufacturing Client",
    ctaSubtitle: "Search factories, industrial suppliers, and manufacturers in any country — then launch outreach automatically.",
    searchExamples: ["Auto parts manufacturers in Germany", "Electronics factories in Shenzhen", "Textile mills in Bangladesh", "Food processing companies in the Netherlands"],
    stats: [
      { value: "190+", label: "Countries covered" },
      { value: "Global", label: "Manufacturing hub maps" },
      { value: "Multi-touch", label: "Outreach sequences" },
      { value: "Free", label: "Plan to start" },
    ],
  },

  finance: {
    slug: "finance",
    name: "Financial Services",
    tagline: "For Fintech & Finance Vendors",
    heroTitle: "Find B2B Clients in",
    heroGradientWord: "Financial Services",
    heroSubtitle:
      "Discover banks, insurance companies, fintech firms, accounting practices, and investment companies across 190+ countries. Reach CFOs, Finance Directors, and procurement leads at scale.",
    metaTitle: "B2B Lead Generation for Financial Services — Find Finance Clients",
    metaDescription:
      "GetYourClientsB2B helps fintech companies and finance vendors discover B2B clients at banks, insurers, accounting firms, and investment companies globally. Try free.",
    keywords: [
      "B2B lead generation for financial services",
      "find finance clients",
      "fintech prospecting tool",
      "bank and insurance lead finder",
      "financial services B2B outreach",
      "CFO lead generation",
    ],
    ogDescription:
      "Find B2B clients in banking, insurance, and fintech. GetYourClientsB2B discovers financial services businesses and decision-makers across 190+ countries.",
    twitterDescription:
      "B2B prospecting for fintech and finance vendors. Find banks, insurers, and financial firms in any market — and outreach from one dashboard.",
    benefits: [
      { icon: Building2, title: "Financial Services Database", desc: "Search banks, credit unions, insurance companies, investment firms, accounting practices, fintech startups, and financial advisors globally." },
      { icon: MapPin, title: "Financial Hub Targeting", desc: "Focus on global finance centers — New York, London, Singapore, Zurich, Dubai, Hong Kong, and Frankfurt — with map-based prospecting." },
      { icon: Users, title: "Reach Finance Decision-Makers", desc: "Identify and contact CFOs, Finance Directors, CIOs, Head of Operations, and Procurement Managers at financial institutions." },
      { icon: Globe, title: "190+ Country Coverage", desc: "Financial services is borderless. Reach institutions in North America, Europe, the Gulf, Southeast Asia, and LATAM from one tool." },
      { icon: Zap, title: "Professional B2B Outreach", desc: "Run professional cold email campaigns targeting business decision-makers at financial institutions with automated follow-ups." },
      { icon: TrendingUp, title: "Regulated Industry Pipeline", desc: "Track complex, multi-stakeholder finance deals. See touchpoints, responses, and pipeline stages across long compliance-driven sales cycles." },
    ],
    steps: [
      { step: "01", title: "Select Financial Services as Target Industry", desc: "Filter for banking, insurance, investment, accounting, fintech, or financial advisory sub-categories." },
      { step: "02", title: "Target Financial Centers by Geography", desc: "Focus on specific financial hubs or regions. Use the map to see institution density in New York, London, or Singapore." },
      { step: "03", title: "Build a Qualified Finance Account List", desc: "Review matching institutions, assess company size and type, and add target accounts to your outreach pipeline." },
      { step: "04", title: "Launch Outreach to Finance Decision-Makers", desc: "Run personalized sequences targeting CFOs, Finance Directors, and operations leadership. Automation handles follow-ups." },
    ],
    inclusions: [
      "Financial services B2B company database",
      "Sub-vertical filters: banking, insurance, fintech, investment, accounting",
      "Map-based financial hub prospecting",
      "CFO, Finance Director, and operations contact discovery",
      "Multi-touch cold email sequence builder",
      "Automated follow-up workflows",
      "Pipeline tracking for complex, multi-stakeholder deals",
      "Reply detection and meeting tracking",
      "CSV export for your CRM",
      "Flat-rate pricing — no per-contact fees",
    ],
    faqs: [
      {
        question: "Can I find banks and insurance companies to sell my B2B product to?",
        answer: "Yes. You can filter for banking, insurance, fintech, investment, and accounting sub-verticals. GetYourClientsB2B surfaces business details and CFO/Finance Director contact information for outreach.",
      },
      {
        question: "What financial services markets does GetYourClientsB2B cover?",
        answer: "Coverage includes 190+ countries with deep data in major financial hubs: United States, United Kingdom, UAE, Singapore, Switzerland, Hong Kong, Germany, Australia, India, and across the EU.",
      },
      {
        question: "Is B2B cold outreach compliant for financial services companies?",
        answer: "GetYourClientsB2B is for B2B commercial prospecting — targeting businesses, not individual retail consumers or investors. Cold outreach to business decision-makers at financial institutions is a standard sales practice.",
      },
      {
        question: "Financial sales cycles are long. How does the CRM handle this?",
        answer: "The pipeline CRM lets you track accounts across extended multi-touch cycles, set long-interval follow-up sequences, and monitor where each institution is in your deal flow. It is built for professional B2B sales, not quick transactional closes.",
      },
    ],
    ctaTitle: "Find Your Next Finance Client",
    ctaSubtitle: "Discover banks, insurers, and financial firms in any market — then outreach from one platform.",
    searchExamples: ["Fintech startups in London", "Insurance companies in Singapore", "Accounting firms in Germany", "Investment firms in Dubai"],
    stats: [
      { value: "190+", label: "Countries covered" },
      { value: "Major", label: "Financial hubs mapped" },
      { value: "Multi-touch", label: "Outreach sequences" },
      { value: "Free", label: "Plan to start" },
    ],
  },

  ecommerce: {
    slug: "ecommerce",
    name: "E-commerce & Online Retail",
    tagline: "For E-commerce Vendors",
    heroTitle: "Find B2B Clients in",
    heroGradientWord: "E-commerce & Online Retail",
    heroSubtitle:
      "Discover e-commerce brands, online marketplaces, DTC stores, and digital retail businesses across 190+ countries. Reach e-commerce founders, operations leads, and heads of marketing.",
    metaTitle: "B2B Lead Generation for E-commerce — Find Online Retail Clients",
    metaDescription:
      "GetYourClientsB2B helps vendors find B2B clients at e-commerce brands, DTC companies, and online retail businesses globally. Find e-commerce decision-makers fast. Try free.",
    keywords: [
      "B2B lead generation for e-commerce",
      "find ecommerce clients",
      "DTC brand prospecting tool",
      "online retail B2B outreach",
      "e-commerce vendor lead finder",
      "ecommerce sales prospecting",
    ],
    ogDescription:
      "Find B2B clients in e-commerce and online retail. GetYourClientsB2B discovers DTC brands, online stores, and marketplaces across 190+ countries.",
    twitterDescription:
      "B2B prospecting for e-commerce vendors. Find online retailers, DTC brands, and marketplace sellers in any country — then run automated outreach.",
    benefits: [
      { icon: Building2, title: "E-commerce Brand Database", desc: "Search DTC brands, online marketplaces, dropshippers, e-commerce agencies, digital-first retailers, and marketplace sellers globally." },
      { icon: MapPin, title: "Regional E-commerce Market Targeting", desc: "Focus on high-growth e-commerce markets — the US, UK, Germany, Australia, UAE, India, and Southeast Asia — using the map view." },
      { icon: Users, title: "Reach E-commerce Decision-Makers", desc: "Find Founders, COOs, Head of Operations, CMOs, and Head of Logistics at growing e-commerce companies." },
      { icon: Globe, title: "190+ Country Coverage", desc: "E-commerce is global. Reach brands and sellers across North America, Europe, the Gulf, Asia Pacific, and LATAM." },
      { icon: Zap, title: "Fast, High-Volume Outreach", desc: "E-commerce moves fast. Run multi-touch cold email sequences that auto-follow-up until your prospect responds." },
      { icon: TrendingUp, title: "Pipeline for Shorter Sales Cycles", desc: "E-commerce buys faster than enterprise. Track deals from first email to closed — with fast-moving pipeline stages." },
    ],
    steps: [
      { step: "01", title: "Select E-commerce / Online Retail as Target Vertical", desc: "Filter for DTC brands, e-commerce marketplaces, digital retailers, or e-commerce service agencies." },
      { step: "02", title: "Target E-commerce Growth Markets", desc: "Use the map to identify e-commerce brand density in target cities or countries. Focus on emerging DTC hubs." },
      { step: "03", title: "Build Your E-commerce Prospect List", desc: "Review matching brands, assess company stage and size, and add relevant accounts to your outreach pipeline." },
      { step: "04", title: "Launch Outreach to E-commerce Leaders", desc: "Run personalized sequences targeting Founders, CMOs, and Operations leads. Auto-follow-up handles the rest." },
    ],
    inclusions: [
      "E-commerce and online retail B2B company database",
      "Sub-vertical filters: DTC, marketplaces, dropshippers, e-commerce agencies",
      "Map-based e-commerce market prospecting",
      "Founder, CMO, and operations decision-maker contact discovery",
      "Multi-touch cold email sequence builder",
      "Automated follow-up workflows",
      "Fast-moving pipeline CRM for e-commerce sales cycles",
      "Reply detection and meeting tracking",
      "CSV export for your CRM or sales tool",
      "Flat-rate pricing — no per-contact fees",
    ],
    faqs: [
      {
        question: "Can I find e-commerce brands to sell my B2B product or service to?",
        answer: "Yes. GetYourClientsB2B lets you filter for e-commerce and online retail companies, then narrow by geography, company size, or sub-category (DTC brands, marketplaces, e-commerce agencies). Contact Founders and CMOs directly from the platform.",
      },
      {
        question: "What e-commerce markets does GetYourClientsB2B cover?",
        answer: "Coverage spans 190+ countries. Top e-commerce markets include the United States, United Kingdom, Germany, Australia, UAE, India, Malaysia, the Philippines, and across Western and Eastern Europe.",
      },
      {
        question: "E-commerce companies get pitched constantly. How do I stand out?",
        answer: "The sequence builder lets you personalize outreach with company name, industry, and country variables. Timing your outreach with multi-touch sequences — not one-shot blasts — significantly improves reply rates.",
      },
      {
        question: "Is there a free plan to test e-commerce prospecting?",
        answer: "Yes. GetYourClientsB2B has a free plan that lets you explore the platform, search for e-commerce prospects, and send initial outreach sequences — without a credit card.",
      },
    ],
    ctaTitle: "Find Your Next E-commerce Client",
    ctaSubtitle: "Search DTC brands, online retailers, and marketplaces in any market — then close them with automated outreach.",
    searchExamples: ["DTC brands in the United States", "Online retailers in Germany", "E-commerce companies in Australia", "Marketplace sellers in the UAE"],
    stats: [
      { value: "190+", label: "Countries covered" },
      { value: "DTC+", label: "E-commerce sub-verticals" },
      { value: "Auto", label: "Follow-up sequences" },
      { value: "Free", label: "Plan to start" },
    ],
  },

  retail: {
    slug: "retail",
    name: "Retail & Wholesale",
    tagline: "For Retail & Wholesale Vendors",
    heroTitle: "Find B2B Clients in",
    heroGradientWord: "Retail & Wholesale",
    heroSubtitle:
      "Discover retail chains, wholesale distributors, FMCG companies, supermarkets, and consumer goods businesses across 190+ countries. Reach Buyers, Category Managers, and Procurement Directors.",
    metaTitle: "B2B Lead Generation for Retail & Wholesale — Find Retail Clients",
    metaDescription:
      "GetYourClientsB2B helps vendors find B2B clients at retail chains, wholesale distributors, and FMCG companies globally. Search by country and category. Try free.",
    keywords: [
      "B2B lead generation for retail",
      "find wholesale clients",
      "retail B2B prospecting tool",
      "wholesale distributor lead finder",
      "FMCG B2B outreach",
      "retail buyer lead generation",
    ],
    ogDescription:
      "Find B2B clients in retail and wholesale. GetYourClientsB2B discovers retail chains, distributors, and FMCG companies across 190+ countries.",
    twitterDescription:
      "B2B prospecting for retail and wholesale vendors. Find buyers, distributors, and category managers in any country — automated outreach included.",
    benefits: [
      { icon: Building2, title: "Retail & Wholesale Database", desc: "Search supermarket chains, specialty retailers, wholesale distributors, FMCG brands, and consumer goods companies globally." },
      { icon: MapPin, title: "Regional Market Targeting", desc: "Focus on specific retail markets — UK grocery chains, Gulf supermarkets, German FMCG distributors, or Indian wholesale clusters." },
      { icon: Users, title: "Reach Retail Decision-Makers", desc: "Identify and contact Category Managers, Buyers, Procurement Directors, and Supply Chain Managers at retail and wholesale companies." },
      { icon: Globe, title: "190+ Country Coverage", desc: "Retail and wholesale are local everywhere. Reach businesses in any country, from global supermarket chains to regional wholesale distributors." },
      { icon: Zap, title: "Outreach to Multiple Buyers at Once", desc: "Run parallel outreach campaigns to multiple retail chains simultaneously. Automation handles follow-ups so you do not miss a buying window." },
      { icon: TrendingUp, title: "Seasonal Pipeline Visibility", desc: "Track deals across retail buying cycles — from initial outreach to buyer meeting to range review." },
    ],
    steps: [
      { step: "01", title: "Select Retail or Wholesale as Target Industry", desc: "Filter for supermarkets, specialty retail, wholesale distribution, FMCG, or consumer goods companies." },
      { step: "02", title: "Target Key Retail Markets by Country or City", desc: "Focus on specific markets — Gulf region supermarkets, UK grocery chains, Indian FMCG distributors. Use the map to identify concentration." },
      { step: "03", title: "Build Your Retail Buyer List", desc: "Review matching retailers and distributors, identify key buyer contacts, and add priority accounts to your outreach pipeline." },
      { step: "04", title: "Outreach to Category Managers and Buyers", desc: "Launch targeted sequences for retail buyers and procurement teams. Automated follow-ups keep your pitch in front of decision-makers." },
    ],
    inclusions: [
      "Retail and wholesale B2B company database",
      "Sub-vertical filters: supermarkets, specialty retail, FMCG, wholesale, distribution",
      "Country and city-level geographic targeting",
      "Category Manager, Buyer, and Procurement Director contact discovery",
      "Multi-touch cold email sequence builder",
      "Automated follow-up workflows",
      "Pipeline tracking for retail buying cycles",
      "Reply detection and meeting booking tracking",
      "CSV export for your CRM or ERP",
      "Flat-rate pricing — no per-contact fees",
    ],
    faqs: [
      {
        question: "Can I find retail chains and wholesale distributors to pitch my product to?",
        answer: "Yes. You can filter specifically for retail and wholesale sub-verticals, narrow by geography, and access contact information for Category Managers, Buyers, and Procurement Directors at matching companies.",
      },
      {
        question: "What retail markets does GetYourClientsB2B cover?",
        answer: "Coverage spans 190+ countries with strong data for the UK, Germany, UAE, Saudi Arabia, Australia, India, South Africa, and across Southeast Asia and Western Europe.",
      },
      {
        question: "How do I time outreach around retail buying seasons?",
        answer: "You can schedule and stagger sequences to reach buyers before peak buying windows. Multi-touch sequences keep your pitch active across a buying cycle without requiring manual follow-up.",
      },
      {
        question: "Can I target independent retailers as well as large chains?",
        answer: "Yes. GetYourClientsB2B includes both large retail chains and smaller independent retailers and distributors. You can filter by company size to focus on enterprise accounts or SMB retailers depending on your product's ideal buyer profile.",
      },
    ],
    ctaTitle: "Find Your Next Retail or Wholesale Client",
    ctaSubtitle: "Search retail chains, FMCG distributors, and wholesale buyers in any country — and land meetings on autopilot.",
    searchExamples: ["Supermarket chains in the UK", "FMCG distributors in UAE", "Wholesale distributors in India", "Specialty retailers in Germany"],
    stats: [
      { value: "190+", label: "Countries covered" },
      { value: "Chain+SMB", label: "Retailer types" },
      { value: "Seasonal", label: "Buying cycle tracking" },
      { value: "Free", label: "Plan to start" },
    ],
  },

  "real-estate": {
    slug: "real-estate",
    name: "Real Estate & Property",
    tagline: "For Real Estate Vendors",
    heroTitle: "Find B2B Clients in",
    heroGradientWord: "Real Estate & Property",
    heroSubtitle:
      "Discover real estate agencies, property developers, commercial landlords, REITs, and property management companies across 190+ countries. Reach directors, brokers, and portfolio managers.",
    metaTitle: "B2B Lead Generation for Real Estate — Find Property & Developer Clients",
    metaDescription:
      "GetYourClientsB2B helps vendors find B2B clients at real estate agencies, property developers, commercial landlords, and REITs worldwide. Try free.",
    keywords: [
      "B2B lead generation for real estate",
      "find real estate clients",
      "property developer prospecting tool",
      "real estate agency lead finder",
      "commercial property B2B outreach",
      "REIT and developer lead generation",
    ],
    ogDescription:
      "Find B2B clients in real estate and property. GetYourClientsB2B discovers agencies, developers, landlords, and property managers across 190+ countries.",
    twitterDescription:
      "B2B prospecting for real estate vendors. Find property developers, agencies, and landlords in any country — then run outreach from one platform.",
    benefits: [
      { icon: Building2, title: "Real Estate Company Database", desc: "Search residential and commercial real estate agencies, property developers, REITs, property management firms, and construction companies globally." },
      { icon: MapPin, title: "Property Market Targeting", desc: "Focus on specific real estate markets — Dubai, London, New York, Singapore, Sydney, or any city with high development or transaction activity." },
      { icon: Users, title: "Reach Property Decision-Makers", desc: "Find and contact Real Estate Directors, Development Managers, Portfolio Managers, Brokers, and Asset Managers at property companies." },
      { icon: Globe, title: "190+ Country Coverage", desc: "Real estate is hyper-local but globally scalable. Reach property businesses in the Gulf, UK, Europe, APAC, and the Americas from one platform." },
      { icon: Zap, title: "Outreach for Long-Cycle Property Sales", desc: "Run multi-touch email sequences designed for long relationship-building sales cycles common in commercial real estate." },
      { icon: TrendingUp, title: "Property Deal Pipeline", desc: "Track real estate business prospects from first contact to signed agreement. See touchpoints and pipeline stages at a glance." },
    ],
    steps: [
      { step: "01", title: "Select Real Estate / Property as Target Vertical", desc: "Filter for residential agencies, commercial landlords, property developers, REITs, or property management companies." },
      { step: "02", title: "Target Key Property Markets by City or Country", desc: "Focus on high-activity markets — Dubai, London, New York, Singapore, or emerging European cities — using the interactive map." },
      { step: "03", title: "Build Your Real Estate Prospect List", desc: "Review matching companies, assess portfolio size and company type, and add priority accounts to your outreach pipeline." },
      { step: "04", title: "Launch Outreach to Property Decision-Makers", desc: "Run personalized sequences to Directors, Portfolio Managers, and Brokers. Automated follow-ups keep you front of mind." },
    ],
    inclusions: [
      "Real estate and property B2B company database",
      "Sub-vertical filters: agencies, developers, REITs, commercial landlords, property management",
      "Map-based property market prospecting by city",
      "Director, Broker, and Portfolio Manager contact discovery",
      "Multi-touch cold email sequence builder",
      "Automated follow-up workflows for long sales cycles",
      "Pipeline CRM for relationship-driven property deals",
      "Reply detection and meeting tracking",
      "CSV export for your CRM",
      "Flat-rate pricing — no per-contact fees",
    ],
    faqs: [
      {
        question: "Can I find real estate agencies and property developers to pitch my service to?",
        answer: "Yes. GetYourClientsB2B lets you filter for real estate agencies, property developers, commercial landlords, REITs, and property management companies — then surfaces decision-maker contacts for outreach.",
      },
      {
        question: "What real estate markets does GetYourClientsB2B cover?",
        answer: "Coverage spans 190+ countries with strong data for the UAE, UK, USA, Singapore, Australia, Germany, India, Canada, and across Europe and Southeast Asia.",
      },
      {
        question: "Real estate relationships take time. How does the platform support this?",
        answer: "You can set extended multi-touch sequences with long intervals between follow-ups — suitable for real estate sales cycles that unfold over months. The CRM tracks each relationship across every touchpoint.",
      },
      {
        question: "Can I target commercial real estate specifically, not residential?",
        answer: "Yes. You can filter for commercial real estate sub-types — office landlords, industrial property companies, retail property developers, and commercial REITs — separately from residential agencies.",
      },
    ],
    ctaTitle: "Find Your Next Real Estate Client",
    ctaSubtitle: "Search property developers, agencies, and landlords in any market — and start building relationships today.",
    searchExamples: ["Property developers in Dubai", "Commercial landlords in London", "Real estate agencies in Singapore", "REITs and property managers in Australia"],
    stats: [
      { value: "190+", label: "Countries covered" },
      { value: "Resi+Comm", label: "Real estate sub-types" },
      { value: "Multi-touch", label: "Relationship outreach" },
      { value: "Free", label: "Plan to start" },
    ],
  },
};

// ─── Static Params ─────────────────────────────────────────────────────────

export function generateStaticParams() {
  return Object.keys(INDUSTRY_DATA).map((slug) => ({ slug }));
}

// ─── Metadata ──────────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const industry = INDUSTRY_DATA[params.slug];
  if (!industry) return {};

  const url = `${BASE_URL}/industries/${industry.slug}`;

  return {
    title: industry.metaTitle,
    description: industry.metaDescription,
    keywords: industry.keywords,
    alternates: { canonical: url },
    openGraph: {
      title: `${industry.metaTitle} | GetYourClientsB2B`,
      description: industry.ogDescription,
      url,
      siteName: "GetYourClientsB2B",
      type: "website",
      images: [
        {
          url: `${BASE_URL}/images/og-image.png`,
          width: 1200,
          height: 630,
          alt: `GetYourClientsB2B — B2B Lead Generation for ${industry.name}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@GetYourClientsB2B",
      title: `${industry.metaTitle} | GetYourClientsB2B`,
      description: industry.twitterDescription,
      images: [`${BASE_URL}/images/og-image.png`],
    },
  };
}

// ─── Page ──────────────────────────────────────────────────────────────────

export default function IndustryPage({ params }: { params: { slug: string } }) {
  const industry = INDUSTRY_DATA[params.slug];

  if (!industry) {
    notFound();
  }

  const pageUrl = `${BASE_URL}/industries/${industry.slug}`;

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: BASE_URL },
          { name: "Industries", url: `${BASE_URL}/industries` },
          { name: industry.name, url: pageUrl },
        ])}
      />
      <JsonLd data={faqSchema(industry.faqs)} />

      <div className="min-h-screen flex flex-col bg-background text-foreground">
        <MarketingNavbar />

        {/* Hero */}
        <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-br from-background via-surface/60 to-background py-20 lg:py-28">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,hsl(228,100%,64%,0.12),transparent)]" />
          <div className="relative mx-auto max-w-5xl px-6 text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary">
              {industry.tagline}
            </div>
            <h1 className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              {industry.heroTitle}{" "}
              <span className="gradient-text">{industry.heroGradientWord}</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
              {industry.heroSubtitle}
            </p>

            {/* Search Examples */}
            <div className="mt-6 flex flex-wrap justify-center gap-2">
              {industry.searchExamples.map((example) => (
                <span
                  key={example}
                  className="rounded-full border border-border/60 bg-surface/40 px-3 py-1 text-xs text-muted-foreground"
                >
                  {example}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <a href={APP_LOGIN_URL}>
                <Button size="lg" className="font-semibold px-8 shadow-lg shadow-primary/25">
                  Start Free — No Credit Card <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
              <Link href="/pricing">
                <Button size="lg" variant="outline" className="font-semibold px-8">
                  View Pricing
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="border-b border-border/60 bg-surface/30 py-8 px-6">
          <div className="mx-auto max-w-4xl">
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
              {industry.stats.map(({ value, label }) => (
                <div key={label} className="text-center">
                  <div className="font-display text-2xl font-bold text-primary">{value}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 px-6">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-center font-display text-3xl font-bold mb-3">
              Everything You Need to Win {industry.name} Clients
            </h2>
            <p className="text-center text-muted-foreground mb-14">
              From first-touch discovery to booked meeting — powered by one platform
            </p>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {industry.benefits.map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="rounded-xl border border-border/60 bg-surface/40 p-5 flex flex-col gap-3"
                >
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

        {/* How It Works */}
        <section className="bg-surface/30 py-20 px-6 border-y border-border/60">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-center font-display text-3xl font-bold mb-12">
              How to Find {industry.name} Clients with GetYourClientsB2B
            </h2>
            <div className="space-y-4">
              {industry.steps.map(({ step, title, desc }) => (
                <div
                  key={step}
                  className="flex gap-5 rounded-xl border border-border/60 bg-surface/60 p-5"
                >
                  <span className="flex-none font-mono text-sm font-bold text-primary/60 mt-0.5">
                    {step}
                  </span>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What is Included */}
        <section className="py-20 px-6">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-center font-display text-3xl font-bold mb-12">
              What&apos;s Included for {industry.name} Prospecting
            </h2>
            <div className="rounded-2xl border border-border bg-surface/40 p-8">
              <ul className="space-y-3">
                {industry.inclusions.map((item) => (
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
            <h2 className="text-center font-display text-3xl font-bold mb-12">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {industry.faqs.map((faq) => (
                <div
                  key={faq.question}
                  className="rounded-xl border border-border/60 bg-surface/60 p-6"
                >
                  <h3 className="font-semibold text-foreground mb-2">{faq.question}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cross-links to other industries */}
        <section className="py-20 px-6">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-center font-display text-2xl font-bold mb-3">
              Explore Other Industry Verticals
            </h2>
            <p className="text-center text-muted-foreground mb-10 text-sm">
              GetYourClientsB2B works across 50+ industries — see more verticals below
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {Object.values(INDUSTRY_DATA)
                .filter((ind) => ind.slug !== industry.slug)
                .map((ind) => (
                  <Link
                    key={ind.slug}
                    href={`/industries/${ind.slug}`}
                    className="rounded-full border border-border/60 bg-surface/40 px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
                  >
                    {ind.name}
                  </Link>
                ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-surface/30 border-t border-border/60 py-20 px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl font-bold mb-4">{industry.ctaTitle}</h2>
            <p className="text-muted-foreground mb-8 text-lg">{industry.ctaSubtitle}</p>
            <a href={APP_LOGIN_URL}>
              <Button size="lg" className="font-semibold px-10 shadow-lg shadow-primary/25">
                Get Started Free <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
            <p className="mt-4 text-xs text-muted-foreground">
              No credit card required · Free plan available · Cancel anytime
            </p>
          </div>
        </section>

        <MarketingFooter />
      </div>
    </>
  );
}
