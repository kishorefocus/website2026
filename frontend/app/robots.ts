import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/onboard/", "/success/", "/cancel/", "/_next/"],
      },
    ],
    sitemap: "https://www.getyourclientsb2b.com/sitemap.xml",
    host: "https://www.getyourclientsb2b.com",
  };
}
