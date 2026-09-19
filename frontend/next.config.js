/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: false,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "lh3.googleusercontent.com" },
      { protocol: "https", hostname: "api.dicebear.com" },
    ],
  },
  env: {
    NEXT_PUBLIC_APP_NAME: "GetYourClients",
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || "https://api.getyourclientsb2b.com",
  },
  async redirects() {
    return [
      // ─── Enforce non-www canonical domain (301 permanent) ───────────────────
      // This fixes "Redirect error" and "Duplicate without user-selected canonical"
      // reported in Google Search Console.
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.getyourclientsb2b.com" }],
        destination: "https://getyourclientsb2b.com/:path*",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-DNS-Prefetch-Control", value: "on" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(self), interest-cohort=()",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
