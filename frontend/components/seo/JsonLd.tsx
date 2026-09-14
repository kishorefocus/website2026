import { SUPPORT_EMAIL, SALES_EMAIL, FOUNDER_EMAIL, ADMIN_EMAIL } from "@/lib/constants";

/**
 * Reusable JSON-LD structured data component for Schema.org markup.
 * Drop this into any page to inject <script type="application/ld+json"> tags.
 */

interface JsonLdProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: Record<string, any> | Array<Record<string, any>>;
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

// ─── Pre-built schema factories ────────────────────────────────────────────

const BASE_URL = "https://getyourclientsb2b.com";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "GetYourClientsB2B",
    url: BASE_URL,
    logo: `${BASE_URL}/images/logo_image.png`,
    description:
      "B2B client discovery platform for sales teams — search leads by industry and country, work them on a map, and run outreach from one dashboard.",
    contactPoint: [
      {
        "@type": "ContactPoint",
        email: SUPPORT_EMAIL,
        contactType: "customer support",
        availableLanguage: "English",
      },
      {
        "@type": "ContactPoint",
        email: SALES_EMAIL,
        contactType: "sales",
        availableLanguage: "English",
      },
      {
        "@type": "ContactPoint",
        email: FOUNDER_EMAIL,
        contactType: "executive",
        availableLanguage: "English",
      },
      {
        "@type": "ContactPoint",
        email: ADMIN_EMAIL,
        contactType: "administrative",
        availableLanguage: "English",
      },
    ],
    // Add your actual social profile URLs here when available
    sameAs: [
      // "https://twitter.com/GetYourClientsB2B",
      // "https://www.linkedin.com/company/getyourclientsb2b",
    ],
  };
}

export function softwareAppSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "GetYourClientsB2B",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: BASE_URL,
    description:
      "B2B lead discovery and cold outreach CRM. Find qualified decision-makers across 190+ countries by industry, filter on a live map, and manage your pipeline — all in one tool.",
    featureList: [
      "B2B lead discovery by industry and country",
      "Map-based lead prospecting",
      "Cold outreach CRM",
      "Email sequence automation",
      "190+ country coverage",
      "Verified email contacts",
      "Multi-client pipeline management",
      "Reply detection and follow-up automation",
    ],
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      description: "Free plan available. Paid plans start from $19/month.",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "120",
      bestRating: "5",
      worstRating: "1",
    },
  };
}

export function breadcrumbSchema(
  items: Array<{ name: string; url: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function faqSchema(items: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function webPageSchema({
  name,
  url,
  description,
  breadcrumb,
}: {
  name: string;
  url: string;
  description: string;
  breadcrumb?: Array<{ name: string; url: string }>;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name,
    url,
    description,
    isPartOf: {
      "@type": "WebSite",
      name: "GetYourClientsB2B",
      url: BASE_URL,
    },
    ...(breadcrumb && {
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: breadcrumb.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.name,
          item: item.url,
        })),
      },
    }),
  };
}

export function contactPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact GetYourClientsB2B — Support & Sales",
    url: `${BASE_URL}/contact`,
    description:
      "Get in touch with the GetYourClientsB2B team for support, enterprise sales, billing questions, or API inquiries.",
    isPartOf: {
      "@type": "WebSite",
      name: "GetYourClientsB2B",
      url: BASE_URL,
    },
    contactOption: "TollFree",
    contactType: "customer support",
    availableLanguage: "English",
  };
}

export function productSchema({
  name,
  description,
  url,
  price,
  priceCurrency = "USD",
}: {
  name: string;
  description: string;
  url: string;
  price: string;
  priceCurrency?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    description,
    url,
    brand: {
      "@type": "Brand",
      name: "GetYourClientsB2B",
    },
    offers: {
      "@type": "Offer",
      price,
      priceCurrency,
      availability: "https://schema.org/InStock",
      url,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "120",
      bestRating: "5",
      worstRating: "1",
    },
  };
}
