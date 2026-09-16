import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { MarketingNavbar } from "@/components/marketing/marketing-navbar";
import { MarketingFooter } from "@/components/marketing/marketing-footer";

export const metadata: Metadata = {
  title: "B2B Sales & Outreach Blog — GetYourClientsB2B",
  description:
    "Guides, strategies, and tools for B2B client discovery, cold email outreach, and sales automation. Written by the GetYourClientsB2B team.",
  alternates: {
    canonical: "https://getyourclientsb2b.com/blog",
  },
};

const POSTS = [
  {
    slug: "hunter-alternatives",
    title: "7 Best Hunter.io Alternatives in 2025 (Free & Paid, Ranked)",
    excerpt: "We tested 7 Hunter.io alternatives and ranked them by features, pricing, and ease of use. Find the best email finder and B2B outreach tool for your team.",
    category: "Tool Comparisons",
    readTime: "12 min",
  },
  {
    slug: "b2b-client-outreach",
    title: "How to Do B2B Client Outreach That Gets Replies (2025 Guide)",
    excerpt: "The complete framework for B2B client outreach — from finding clients to writing cold emails that get replies to closing deals with automated sequences.",
    category: "Outreach Strategy",
    readTime: "15 min",
  },
  {
    slug: "find-b2b-clients",
    title: "How to Find B2B Clients Online in 2025 — Complete Guide",
    excerpt: "7 proven methods to find B2B clients online — from lead discovery tools to LinkedIn outreach — with step-by-step actions you can start today.",
    category: "Lead Generation",
    readTime: "14 min",
  },
];

export default function BlogIndexPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <MarketingNavbar />

      <section className="border-b border-border/60 bg-gradient-to-br from-background via-surface/60 to-background py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h1 className="font-display text-4xl font-bold tracking-tight text-foreground mb-4">
            B2B Sales & Outreach Blog
          </h1>
          <p className="text-lg text-muted-foreground">
            Guides, strategies, and tools for B2B client discovery and cold email outreach.
          </p>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="mx-auto max-w-4xl">
          <div className="space-y-6">
            {POSTS.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block rounded-xl border border-border/60 bg-surface/40 p-6 hover:border-primary/40 hover:bg-primary/5 transition-colors group"
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs text-primary bg-primary/10 border border-primary/20 rounded-full px-2 py-0.5 font-medium">
                        {post.category}
                      </span>
                      <span className="text-xs text-muted-foreground">{post.readTime} read</span>
                    </div>
                    <h2 className="font-display text-xl font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                      {post.title}
                    </h2>
                    <p className="text-sm text-muted-foreground leading-relaxed">{post.excerpt}</p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors shrink-0 mt-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <MarketingFooter />
    </div>
  );
}
