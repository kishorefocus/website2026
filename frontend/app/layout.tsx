import type { Metadata } from "next";
import Script from "next/script";
import { Fraunces, Inter, IBM_Plex_Mono } from "next/font/google";
import "leaflet/dist/leaflet.css";
import "./globals.css";
import { Providers } from "./providers";
import { JsonLd, organizationSchema, softwareAppSchema } from "@/components/seo/JsonLd";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  axes: ["opsz", "SOFT", "WONK"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

const BASE_URL = "https://getyourclientsb2b.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "GetYourClientsB2B — B2B Client Discovery & Cold Outreach CRM",
    template: "%s | GetYourClientsB2B",
  },
  description:
    "GetYourClientsB2B is the B2B client discovery platform for teams selling across borders. Search leads by industry and country, work them on a map, and run cold outreach from one dashboard.",
  keywords: [
    "B2B client discovery tool",
    "B2B lead generation software",
    "cold outreach CRM",
    "find B2B leads by industry",
    "B2B prospecting platform",
    "sales outreach automation software",
    "B2B lead finder tool",
  ],
  authors: [{ name: "GetYourClientsB2B", url: BASE_URL }],
  creator: "GetYourClientsB2B",
  publisher: "GetYourClientsB2B",
  category: "technology",
  classification: "Business Software, B2B Lead Generation, CRM",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "GetYourClientsB2B",
    title: "GetYourClientsB2B — B2B Client Discovery & Cold Outreach CRM",
    description:
      "Find, qualify, and close B2B clients across 190+ countries. Map-based lead discovery, industry filters, and cold outreach CRM — all in one platform.",
    images: [
      {
        url: `${BASE_URL}/images/og-image.png`,
        width: 1200,
        height: 630,
        alt: "GetYourClientsB2B — B2B Client Discovery Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@GetYourClientsB2B",
    creator: "@GetYourClientsB2B",
    title: "GetYourClientsB2B — B2B Client Discovery & Cold Outreach CRM",
    description:
      "Find, qualify, and close B2B clients across 190+ countries. Map-based lead discovery, industry filters, and cold outreach CRM — all in one platform.",
    images: [`${BASE_URL}/images/og-image.png`],
  },
  alternates: {
    canonical: BASE_URL,
  },
  icons: {
    icon: "/images/logo_image.png",
    shortcut: "/images/logo_image.png",
    apple: "/images/logo_image.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/images/logo_image.png" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var stored = localStorage.getItem('gyc-theme');
                  if (stored === 'dark') {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className={`${fraunces.variable} ${inter.variable} ${plexMono.variable}`}>
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-ZMMZJLEG61"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-ZMMZJLEG61');
          `}
        </Script>
        <JsonLd data={organizationSchema()} />
        <JsonLd data={softwareAppSchema()} />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
