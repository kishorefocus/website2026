import { MetadataRoute } from "next";

const BASE_URL = "https://getyourclientsb2b.com";

const COMPARE_SLUGS = [
  "apollo-alternative",
  "hunter-alternative",
  "lusha-alternative",
  "zoominfo-alternative",
];

const FEATURES_SLUGS = [
  "lead-discovery",
  "crm-outreach",
  "map-search",
  "automation",
];

const USE_CASE_SLUGS = ["agencies", "sales-teams", "freelancers"];

const INDUSTRY_SLUGS = [
  "saas",
  "manufacturing",
  "healthcare",
  "retail",
  "finance",
  "ecommerce",
  "real-estate",
];

const FIND_SLUGS = [
  "saas-clients-in-dubai",
  "saas-clients-in-london",
  "saas-clients-in-new-york",
  "manufacturing-clients-in-germany",
  "manufacturing-clients-in-china",
  "healthcare-clients-in-canada",
  "ecommerce-clients-in-australia",
  "finance-clients-in-singapore",
  "retail-clients-in-india",
  "saas-clients-in-paris",
];

const BLOG_SLUGS = [
  "hunter-alternatives",
  "b2b-client-outreach",
  "find-b2b-clients",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/pricing`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/privacy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/terms`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/refund`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  const compareRoutes: MetadataRoute.Sitemap = COMPARE_SLUGS.map((slug) => ({
    url: `${BASE_URL}/compare/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  const featuresRoutes: MetadataRoute.Sitemap = FEATURES_SLUGS.map((slug) => ({
    url: `${BASE_URL}/features/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  const useCaseRoutes: MetadataRoute.Sitemap = USE_CASE_SLUGS.map((slug) => ({
    url: `${BASE_URL}/use-cases/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  const industryRoutes: MetadataRoute.Sitemap = INDUSTRY_SLUGS.map((slug) => ({
    url: `${BASE_URL}/industries/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  const findRoutes: MetadataRoute.Sitemap = FIND_SLUGS.map((slug) => ({
    url: `${BASE_URL}/find/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  const blogRoutes: MetadataRoute.Sitemap = BLOG_SLUGS.map((slug) => ({
    url: `${BASE_URL}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  return [
    ...staticRoutes,
    ...compareRoutes,
    ...featuresRoutes,
    ...useCaseRoutes,
    ...industryRoutes,
    ...findRoutes,
    ...blogRoutes,
  ];
}
