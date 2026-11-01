"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ExternalLink,
  Sparkles,
  TrendingUp,
  Search,
  Star,
  BarChart3,
  CheckCircle2,
  Share2,
  Flame,
  Network,
  Video,
  Globe,
  Zap,
  Activity,
  Layers,
  Calendar,
  Send,
  Eye,
  ChevronRight,
  Cpu,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { fadeUp, staggerContainer, EASE_OUT } from "@/lib/motion";

/* ─── Social Brand SVGs for authentic representation ─── */

function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function FacebookIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function LinkedInIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}

function YouTubeIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function TwitterXIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

/* ─── Platform Showcase Data ─── */

const platformCards = [
  {
    name: "Instagram Business",
    api: "Meta Graph API v19.0",
    color: "from-pink-500 to-rose-600",
    textColor: "text-pink-600 dark:text-pink-400",
    badgeBg: "bg-pink-50 dark:bg-pink-500/10 border-pink-200 dark:border-pink-500/20",
    icon: InstagramIcon,
    features: [
      "Auto-publish Reels, carousels & single posts",
      "AI caption & trending hashtag clustering",
      "Instant cross-posting synchronization with Facebook",
    ],
    highlight: "Visual & Reel Automation",
  },
  {
    name: "Facebook Page API",
    api: "Official Page API",
    color: "from-blue-500 to-indigo-600",
    textColor: "text-blue-600 dark:text-blue-400",
    badgeBg: "bg-blue-50 dark:bg-blue-500/10 border-blue-200 dark:border-blue-500/20",
    icon: FacebookIcon,
    features: [
      "Long-form case study & authority broadcast",
      "Autonomous feed & community scheduler",
      "Direct Meta lead capture integration",
    ],
    highlight: "Meta Authority Syndicate",
  },
  {
    name: "LinkedIn v2 API",
    api: "LinkedIn REST API v2",
    color: "from-sky-500 to-blue-600",
    textColor: "text-sky-600 dark:text-sky-400",
    badgeBg: "bg-sky-50 dark:bg-sky-500/10 border-sky-200 dark:border-sky-500/20",
    icon: LinkedInIcon,
    features: [
      "Dual company page & founder profile distribution",
      "High-converting B2B document/PDF carousels",
      "Algorithmic peak-hour distribution scheduler",
    ],
    highlight: "Founder B2B Engine",
  },
  {
    name: "YouTube Hub (Data v3)",
    api: "YouTube Data API v3",
    color: "from-red-500 to-rose-600",
    textColor: "text-red-600 dark:text-red-400",
    badgeBg: "bg-red-50 dark:bg-red-500/10 border-red-200 dark:border-red-500/20",
    icon: YouTubeIcon,
    features: [
      "Automated YouTube Shorts script-to-publish",
      "SEO-rich video titles, descriptions & tags",
      "Multi-platform video syndicate with zero extra effort",
    ],
    highlight: "Shorts & Video SEO",
  },
  {
    name: "Twitter / X Automation",
    api: "X API v2 Integration",
    color: "from-slate-700 to-slate-950 dark:from-indigo-400 dark:to-cyan-400",
    textColor: "text-slate-800 dark:text-slate-200",
    badgeBg: "bg-slate-100 dark:bg-white/10 border-slate-200 dark:border-white/20",
    icon: TwitterXIcon,
    features: [
      "High-virality thread generation & unrolling",
      "Thought-leadership hooks with automated queue",
      "Direct messaging triggers for high-intent replies",
    ],
    highlight: "Viral Thread Pipeline",
  },
];

/* ─── Distribution Pipeline Queue Samples ─── */

const mockPipelineItems = [
  {
    id: "meta-ig",
    platform: "Facebook & Instagram Business",
    icon: Flame,
    badgeColor: "text-blue-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-500/10 border-blue-200 dark:border-blue-500/20",
    status: "Sync Enabled",
    statusColor: "text-emerald-600 dark:text-emerald-400",
    title: "How top B2B agencies automate client acquisition with zero manual ad spend...",
    schedule: "Today, 4:00 PM",
    category: "meta",
  },
  {
    id: "linkedin",
    platform: "LinkedIn Company & Founder",
    icon: Network,
    badgeColor: "text-sky-700 dark:text-sky-400 bg-sky-50 dark:bg-sky-500/10 border-sky-200 dark:border-sky-500/20",
    status: "v2 API Ready",
    statusColor: "text-emerald-600 dark:text-emerald-400",
    title: "The playbook we used to scale 15 client accounts past $50k MRR without cold calls...",
    schedule: "Tomorrow, 9:00 AM",
    category: "linkedin",
  },
  {
    id: "youtube",
    platform: "YouTube Shorts & Video Hub",
    icon: Video,
    badgeColor: "text-red-700 dark:text-red-400 bg-red-50 dark:bg-red-500/10 border-red-200 dark:border-red-500/20",
    status: "Script Generated",
    statusColor: "text-emerald-600 dark:text-emerald-400",
    title: "3 AI Automation tools every agency owner must deploy in 2026 for high-ticket clients.",
    schedule: "Draft Ready",
    category: "youtube",
  },
  {
    id: "twitter",
    platform: "Twitter / X Viral Thread",
    icon: Zap,
    badgeColor: "text-indigo-700 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-500/10 border-indigo-200 dark:border-indigo-500/20",
    status: "Thread Scheduled",
    statusColor: "text-emerald-600 dark:text-emerald-400",
    title: "🧵 7 steps to turning organic social reach into $10k retainer clients on autopilot...",
    schedule: "Friday, 2:30 PM",
    category: "twitter",
  },
];

export function SocialGrowthAutomationSection() {
  const [activeTab, setActiveTab] = useState<"all" | "meta" | "linkedin" | "youtube" | "twitter">("all");

  const filteredPipeline = activeTab === "all"
    ? mockPipelineItems
    : mockPipelineItems.filter((item) => item.category === activeTab);

  return (
    <section
      id="growth-automation"
      className="relative z-20 py-24 border-b border-border bg-gradient-to-b from-surface via-background to-surface overflow-hidden"
    >
      {/* ── Background Dotted Grid & Ambient Glows (matching Growth OS UI) ── */}
      <div className="absolute inset-0 pointer-events-none opacity-40 dark:opacity-25">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: "radial-gradient(hsl(var(--primary) / 0.25) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[720px] h-[400px] bg-gradient-to-b from-primary/15 via-accent/10 to-transparent blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 -right-32 w-80 h-80 rounded-full bg-cyan-500/10 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 -left-20 w-80 h-80 rounded-full bg-pink-500/10 blur-[100px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* ── Header Badge & Headline ── */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: EASE_OUT }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 border border-primary/25 text-primary mb-6 shadow-sm backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5 text-accent animate-pulse" />
            <span className="font-bold tracking-wide">OMNICHANNEL B2B GROWTH OPERATING SYSTEM</span>
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span className="text-foreground/80 font-medium">Meta · LinkedIn · YouTube · X · SEO</span>
          </div>

          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.12]">
            Automate All Social & SEO in{" "}
            <span className="bg-gradient-to-r from-primary via-indigo-500 to-accent bg-clip-text text-transparent">
              One Unified Engine
            </span>
          </h2>

          <p className="mt-5 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Scale client acquisition with autonomous social publishing across{" "}
            <strong className="text-foreground font-semibold">Instagram, Facebook, LinkedIn, YouTube, and Twitter/X</strong>,
            paired with programmatic SEO and high-intent B2B lead generation.
          </p>

          {/* CTA Action Buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://growth.getyourclientsb2b.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-primary via-indigo-600 to-purple-600 hover:brightness-110 shadow-lg shadow-primary/25 transition-all text-sm active:scale-98"
            >
              <span>Explore Growth OS Dashboard</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="https://growth.getyourclientsb2b.com/#infrastructure"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm border border-border bg-card/80 hover:bg-muted/80 transition-all text-foreground/90 shadow-sm"
            >
              <Activity className="w-4 h-4 text-success" />
              <span>Verify Live Engine Telemetry</span>
              <ExternalLink className="w-3.5 h-3.5 text-muted-foreground ml-0.5" />
            </a>
          </div>
        </motion.div>

        {/* ── Official Platform API Badges (Matching Screenshot) ── */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.1, ease: EASE_OUT }}
          viewport={{ once: true }}
          className="mt-12 flex flex-wrap items-center justify-center gap-3 sm:gap-4"
        >
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-500/10 border-blue-200 dark:border-blue-500/30 shadow-sm">
            <Share2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
            <span>Facebook Page API</span>
          </div>

          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-semibold text-pink-600 dark:text-pink-400 bg-pink-50 dark:bg-pink-500/10 border-pink-200 dark:border-pink-500/30 shadow-sm">
            <Flame className="w-3.5 h-3.5 text-pink-600 dark:text-pink-400" />
            <span>Instagram Business</span>
          </div>

          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-semibold text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-500/10 border-sky-200 dark:border-sky-500/30 shadow-sm">
            <Network className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
            <span>LinkedIn v2 API</span>
          </div>

          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-semibold text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-500/10 border-red-200 dark:border-red-500/30 shadow-sm">
            <Video className="w-3.5 h-3.5 text-red-600 dark:text-red-400" />
            <span>YouTube Data v3</span>
          </div>

          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-semibold text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-500/10 border-indigo-200 dark:border-indigo-500/30 shadow-sm">
            <Zap className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
            <span>Twitter / X API</span>
          </div>

          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-semibold text-violet-600 dark:text-violet-400 bg-violet-50 dark:bg-violet-500/10 border-violet-200 dark:border-violet-500/30 shadow-sm">
            <Globe className="w-3.5 h-3.5 text-violet-600 dark:text-violet-400" />
            <span>Google Search SERP</span>
          </div>
        </motion.div>

        {/* ── Key Metrics Cards (Exact replica of user screenshot) ── */}
        <motion.div
          className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
        >
          {/* Card 1: 142,800+ Monthly Social Reach */}
          <motion.div
            variants={fadeUp}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            className="group rounded-2xl border border-border bg-card p-6 text-center shadow-card hover:shadow-popover transition-all relative overflow-hidden"
          >
            <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-md shadow-indigo-500/30 group-hover:scale-105 transition-transform">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <p className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
              142,800+
            </p>
            <p className="mt-1.5 text-xs sm:text-sm font-medium text-muted-foreground">
              Monthly Social Reach
            </p>
            <span className="inline-block mt-3 text-[11px] font-mono text-emerald-600 dark:text-emerald-400 font-semibold bg-emerald-50 dark:bg-emerald-500/10 px-2 py-0.5 rounded-md">
              ↑ 34% this month
            </span>
          </motion.div>

          {/* Card 2: 382 Keywords in Top 10 */}
          <motion.div
            variants={fadeUp}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            className="group rounded-2xl border border-border bg-card p-6 text-center shadow-card hover:shadow-popover transition-all relative overflow-hidden"
          >
            <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-md shadow-cyan-500/30 group-hover:scale-105 transition-transform">
              <Search className="w-6 h-6 text-white" />
            </div>
            <p className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
              382
            </p>
            <p className="mt-1.5 text-xs sm:text-sm font-medium text-muted-foreground">
              Keywords in Top 10
            </p>
            <span className="inline-block mt-3 text-[11px] font-mono text-blue-600 dark:text-blue-400 font-semibold bg-blue-50 dark:bg-blue-500/10 px-2 py-0.5 rounded-md">
              Google Search SERP
            </span>
          </motion.div>

          {/* Card 3: 12,450 Verified B2B Leads */}
          <motion.div
            variants={fadeUp}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            className="group rounded-2xl border border-border bg-card p-6 text-center shadow-card hover:shadow-popover transition-all relative overflow-hidden"
          >
            <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-md shadow-emerald-500/30 group-hover:scale-105 transition-transform">
              <Star className="w-6 h-6 text-white" />
            </div>
            <p className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
              12,450
            </p>
            <p className="mt-1.5 text-xs sm:text-sm font-medium text-muted-foreground">
              Verified B2B Leads
            </p>
            <span className="inline-block mt-3 text-[11px] font-mono text-teal-600 dark:text-teal-400 font-semibold bg-teal-50 dark:bg-teal-500/10 px-2 py-0.5 rounded-md">
              Direct pipeline captured
            </span>
          </motion.div>

          {/* Card 4: 1,480 SEO Pages Generated */}
          <motion.div
            variants={fadeUp}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            className="group rounded-2xl border border-border bg-card p-6 text-center shadow-card hover:shadow-popover transition-all relative overflow-hidden"
          >
            <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-600 flex items-center justify-center shadow-md shadow-violet-500/30 group-hover:scale-105 transition-transform">
              <BarChart3 className="w-6 h-6 text-white" />
            </div>
            <p className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
              1,480
            </p>
            <p className="mt-1.5 text-xs sm:text-sm font-medium text-muted-foreground">
              SEO Pages Generated
            </p>
            <span className="inline-block mt-3 text-[11px] font-mono text-purple-600 dark:text-purple-400 font-semibold bg-purple-50 dark:bg-purple-500/10 px-2 py-0.5 rounded-md">
              Zero cannibalization
            </span>
          </motion.div>
        </motion.div>

        {/* ── 5 Core Social Automation Cards (Instagram, Facebook, LinkedIn, YouTube, Twitter) ── */}
        <div className="mt-16">
          <div className="text-center mb-10">
            <span className="manifest-chip">MULTI-CHANNEL AUTONOMY</span>
            <h3 className="mt-3 font-display text-2xl sm:text-3xl font-bold tracking-tight">
              One Engine for All 5 Major Channels
            </h3>
            <p className="mt-2 text-sm text-muted-foreground max-w-xl mx-auto">
              Auto-generate hooks, format media for each platform’s algorithm, and post automatically on your schedule.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {platformCards.map((platform) => {
              const IconComponent = platform.icon;
              return (
                <div
                  key={platform.name}
                  className="rounded-2xl border border-border bg-card p-5 flex flex-col justify-between hover:shadow-card hover:-translate-y-1 transition-all duration-200 group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className={cn("w-10 h-10 rounded-xl bg-gradient-to-br flex items-center justify-center text-white shadow-sm", platform.color)}>
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <span className={cn("text-[10px] font-mono font-bold px-2 py-0.5 rounded-full border", platform.badgeBg, platform.textColor)}>
                        {platform.highlight}
                      </span>
                    </div>

                    <h4 className="font-display text-base font-bold text-foreground">
                      {platform.name}
                    </h4>
                    <p className="text-[11px] font-mono text-muted-foreground mt-0.5">
                      {platform.api}
                    </p>

                    <ul className="mt-4 space-y-2 text-xs text-muted-foreground">
                      {platform.features.map((feat, i) => (
                        <li key={i} className="flex items-start gap-1.5 leading-snug">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-5 pt-3 border-t border-border flex items-center justify-between text-[11px] font-semibold text-primary">
                    <span>Sync ready</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── Live Pipeline Mockup & Growth OS Console ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: EASE_OUT }}
          viewport={{ once: true }}
          className="mt-16 rounded-3xl p-[1.5px] bg-gradient-to-br from-primary/40 via-indigo-500/30 to-accent/40 shadow-2xl shadow-primary/10"
        >
          <div className="bg-card rounded-[22px] overflow-hidden border border-border">
            {/* Mock browser header */}
            <div className="px-5 py-3.5 bg-muted/60 border-b border-border flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-400" />
                <span className="w-3 h-3 rounded-full bg-amber-400" />
                <span className="w-3 h-3 rounded-full bg-emerald-400" />
                <span className="ml-3 font-mono text-xs text-muted-foreground truncate">
                  growth.getyourclientsb2b.com/admin/dashboard
                </span>
              </div>

              {/* Platform filter tabs */}
              <div className="flex items-center gap-1 bg-surface p-1 rounded-xl text-xs font-medium border border-border">
                {(["all", "meta", "linkedin", "youtube", "twitter"] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={cn(
                      "px-2.5 py-1 rounded-lg capitalize transition-all text-[11px]",
                      activeTab === tab
                        ? "bg-primary text-primary-foreground font-semibold shadow-sm"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {tab === "all" ? "All Channels" : tab === "meta" ? "Meta / IG" : tab}
                  </button>
                ))}
              </div>
            </div>

            {/* Mockup Content */}
            <div className="p-6 sm:p-8 space-y-6">
              {/* Telemetry summary mini-bar */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
                <div className="p-3.5 rounded-xl border border-border bg-muted/40">
                  <span className="text-[11px] text-muted-foreground font-medium">Meta Sync</span>
                  <p className="text-sm font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" /> FB & Instagram
                  </p>
                  <span className="text-[10px] font-mono text-muted-foreground">Graph API Active</span>
                </div>

                <div className="p-3.5 rounded-xl border border-border bg-muted/40">
                  <span className="text-[11px] text-muted-foreground font-medium">Scheduled Posts</span>
                  <p className="text-sm font-bold text-primary flex items-center gap-1.5 mt-0.5">
                    <Zap className="w-3.5 h-3.5" /> 48 Due Today
                  </p>
                  <span className="text-[10px] font-mono text-muted-foreground">Auto-publish worker on</span>
                </div>

                <div className="p-3.5 rounded-xl border border-border bg-muted/40">
                  <span className="text-[11px] text-muted-foreground font-medium">Cross-Network</span>
                  <p className="text-sm font-bold text-cyan-600 dark:text-cyan-400 flex items-center gap-1.5 mt-0.5">
                    <Layers className="w-3.5 h-3.5" /> 5 Channels
                  </p>
                  <span className="text-[10px] font-mono text-muted-foreground">IG, FB, LI, YT, X</span>
                </div>

                <div className="p-3.5 rounded-xl border border-border bg-muted/40">
                  <span className="text-[11px] text-muted-foreground font-medium">Monthly Reach</span>
                  <p className="text-sm font-bold text-purple-600 dark:text-purple-400 flex items-center gap-1.5 mt-0.5">
                    <TrendingUp className="w-3.5 h-3.5" /> 142,800+
                  </p>
                  <span className="text-[10px] font-mono text-muted-foreground">↑ 34% velocity</span>
                </div>
              </div>

              {/* Feed Queue items */}
              <div className="rounded-2xl border border-border bg-muted/20 p-4 space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-border">
                  <span className="text-xs font-bold text-foreground uppercase tracking-wider flex items-center gap-2">
                    <Send className="w-3.5 h-3.5 text-primary" />
                    Autonomous Content Distribution Pipeline
                  </span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-semibold text-xs flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    Worker Active
                  </span>
                </div>

                <div className="space-y-2.5">
                  {filteredPipeline.map((item) => (
                    <div
                      key={item.id}
                      className="p-3.5 rounded-xl bg-card border border-border hover:border-primary/40 flex flex-col md:flex-row md:items-center justify-between gap-3 transition-colors shadow-sm"
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className={cn("px-2 py-0.5 rounded-md text-[11px] font-bold border", item.badgeColor)}>
                            {item.platform}
                          </span>
                          <span className={cn("text-xs font-mono font-semibold", item.statusColor)}>
                            {item.status}
                          </span>
                        </div>
                        <p className="text-xs text-foreground/90 font-medium line-clamp-1">
                          {item.title}
                        </p>
                      </div>

                      <div className="flex items-center gap-3 shrink-0">
                        <span className="text-xs font-mono text-muted-foreground flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {item.schedule}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Console Banner CTA */}
              <div className="rounded-2xl bg-gradient-to-r from-primary/10 via-purple-500/10 to-accent/10 border border-primary/20 p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="space-y-1 text-center sm:text-left">
                  <h4 className="font-display text-sm sm:text-base font-bold text-foreground">
                    Ready to deploy autonomous social syndication & programmatic SEO?
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    Connect your Facebook, Instagram, LinkedIn, YouTube, and X accounts in under 2 minutes.
                  </p>
                </div>

                <a
                  href="https://growth.getyourclientsb2b.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-white bg-primary hover:bg-primary/90 transition-all text-xs shadow-md shadow-primary/25"
                >
                  <span>Launch Growth OS</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
