"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, ArrowRight, HelpCircle, Shield, Zap, Sparkles, X, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MarketingNavbar } from "@/components/marketing/marketing-navbar";
import { MarketingFooter } from "@/components/marketing/marketing-footer";
import { cn } from "@/lib/utils";
import { APP_LOGIN_URL } from "@/lib/constants";

const pricingPlans = [
  {
    key: "free",
    name: "Free",
    description: "Perfect for testing lead discovery and exploring global market coverage.",
    monthlyPrice: 0,
    yearlyPrice: 0,
    features: [
      "3 free verified leads",
      "1 team seat included",
      "Basic global searches",
      "Standard CRM pipeline",
      "Community support",
    ],
    popular: false,
    ctaText: "Start for free",
    ctaLink: APP_LOGIN_URL,
    variant: "outline" as const,
  },
  {
    key: "growth",
    name: "Growth",
    description: "For individual sales reps and consultants growing their outbound pipeline.",
    monthlyPrice: 19,
    yearlyPrice: 15,
    features: [
      "500 verified leads / month",
      "3 team seats included",
      "Standard AI Discovery",
      "Email outreach integration",
      "Standard analytics & export",
      "Standard email support",
    ],
    popular: false,
    ctaText: "Get Started with Growth",
    ctaLink: `${APP_LOGIN_URL}?plan=growth`,
    variant: "outline" as const,
  },
  {
    key: "pro",
    name: "Pro",
    description: "For fast-scaling sales teams who need high volume and automated discovery.",
    monthlyPrice: 49,
    yearlyPrice: 39,
    features: [
      "Unlimited verified leads",
      "10 team seats included",
      "AI Persona Discovery Engine",
      "Call + email outreach suite",
      "Full analytics & reporting",
      "Priority customer support",
    ],
    popular: true,
    ctaText: "Get Started with Pro",
    ctaLink: `${APP_LOGIN_URL}?plan=pro`,
    variant: "default" as const,
  },
  {
    key: "enterprise",
    name: "Enterprise",
    description: "For organizations demanding custom integrations, maximum seats, and dedicated SLAs.",
    monthlyPrice: 149,
    yearlyPrice: 119,
    features: [
      "Unlimited everything",
      "Unlimited team seats",
      "Custom API Integrations",
      "Dedicated account manager",
      "Single Sign-On (SSO / SAML)",
      "99.9% Uptime SLA",
    ],
    popular: false,
    ctaText: "Talk to Sales",
    ctaLink: "/contact?plan=enterprise",
    variant: "outline" as const,
  },
];

const featureComparison = [
  {
    category: "Lead Discovery & Intelligence",
    features: [
      {
        name: "Monthly Verified Leads",
        free: "3 verified leads",
        growth: "500 leads / mo",
        pro: "Unlimited leads",
        enterprise: "Unlimited leads",
      },
      {
        name: "Global Country Coverage",
        free: "190+ countries",
        growth: "190+ countries",
        pro: "190+ countries",
        enterprise: "190+ countries",
      },
      {
        name: "Map-Based Visual Prospecting",
        free: "Basic view",
        growth: "Full map search",
        pro: "Full map + radius",
        enterprise: "Custom geospatial layers",
      },
      {
        name: "Real-Time Email Verification",
        free: "Included",
        growth: "Included",
        pro: "Included",
        enterprise: "Included",
      },
      {
        name: "Industry & Sub-sector Filters",
        free: "Basic",
        growth: "Advanced",
        pro: "Advanced",
        enterprise: "Custom taxonomies",
      },
      {
        name: "Company Revenue & Size Filters",
        free: false,
        growth: true,
        pro: true,
        enterprise: true,
      },
      {
        name: "AI Persona Discovery Engine",
        free: false,
        growth: "Standard",
        pro: "Advanced",
        enterprise: "Custom AI fine-tuning",
      },
    ],
  },
  {
    category: "Cold Outreach & Pipeline CRM",
    features: [
      {
        name: "Visual Kanban Deal Pipeline",
        free: "Standard",
        growth: "Full pipeline",
        pro: "Multiple pipelines",
        enterprise: "Unlimited pipelines",
      },
      {
        name: "Connected Email Inboxes",
        free: "1 inbox",
        growth: "3 inboxes",
        pro: "Unlimited inboxes",
        enterprise: "Dedicated IP & warmup",
      },
      {
        name: "Automated Follow-Up Sequences",
        free: false,
        growth: "3-step sequences",
        pro: "Unlimited multi-channel",
        enterprise: "Custom webhook workflows",
      },
      {
        name: "Call Logging & Phone Outreach",
        free: "Manual notes",
        growth: "Click-to-call logging",
        pro: "Advanced call tracking",
        enterprise: "Custom telephony bridge",
      },
      {
        name: "Activity Tracking & History",
        free: "30 days",
        growth: "1 year",
        pro: "Unlimited",
        enterprise: "Full audit logs",
      },
    ],
  },
  {
    category: "Team, Exports & Administration",
    features: [
      {
        name: "Included Team Seats",
        free: "1 seat",
        growth: "3 seats included",
        pro: "10 seats included",
        enterprise: "Unlimited seats",
      },
      {
        name: "Extra Cost Per Seat",
        free: "$0",
        growth: "$0",
        pro: "$0",
        enterprise: "$0",
      },
      {
        name: "CSV & Excel Contact Exports",
        free: "3 leads total",
        growth: "500 / month",
        pro: "Unlimited",
        enterprise: "Unlimited + REST API",
      },
      {
        name: "Role-Based Access Control (RBAC)",
        free: false,
        growth: "Admin & Member",
        pro: "Granular permissions",
        enterprise: "Custom roles & SAML/SSO",
      },
    ],
  },
  {
    category: "Security, Guarantees & Support",
    features: [
      {
        name: "14-Day Money-Back Guarantee",
        free: "Free tier",
        growth: "14 Days",
        pro: "14 Days",
        enterprise: "30 Days",
      },
      {
        name: "Merchant of Record (Paddle PCI-DSS)",
        free: true,
        growth: true,
        pro: true,
        enterprise: true,
      },
      {
        name: "Customer Support Level",
        free: "Community",
        growth: "Standard email (24h)",
        pro: "Priority email & chat (4h)",
        enterprise: "Dedicated Account Manager",
      },
      {
        name: "Service Level Agreement (SLA)",
        free: "Best effort",
        growth: "99.5% uptime",
        pro: "99.9% uptime",
        enterprise: "99.99% custom SLA",
      },
    ],
  },
];

const faqs = [
  {
    q: "How does billing and subscription renewal work?",
    a: "All paid plans (Growth, Pro, Enterprise) are billed as recurring subscriptions, either monthly or annually based on your selection. Your subscription automatically renews at the start of each billing period unless canceled.",
  },
  {
    q: "Who processes my payments?",
    a: "Our orders and payments are conducted by Paddle.com, our authorized Merchant of Record. Paddle handles all global payment processing, automated VAT/sales tax calculation, and PCI-DSS compliant secure checkouts.",
  },
  {
    q: "Can I cancel my subscription at any time?",
    a: "Yes. You can cancel your subscription at any time with one click from your billing portal. When you cancel, your account remains active with full access until the end of your paid billing period.",
  },
  {
    q: "What is your refund policy?",
    a: "We offer an unconditional 14-day money-back guarantee for first-time subscriptions. If you are not completely satisfied with GetYourClients, contact us within 14 days for a prompt, no-questions-asked refund.",
  },
  {
    q: "Are there per-seat fees or hidden costs?",
    a: "No! Unlike legacy vendors who charge $150+ per month per user, GetYourClients includes multi-seat teams in every tier. Growth includes 3 seats, Pro includes 10 seats, and Enterprise has unlimited seats.",
  },
  {
    q: "What payment methods are supported?",
    a: "Through Paddle, we accept major credit and debit cards (Visa, MasterCard, American Express, Discover), PayPal, Apple Pay, and Google Pay, depending on your region and currency.",
  },
];

export function PricingPageClient() {
  const [billingInterval, setBillingInterval] = useState<"month" | "year">("month");

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <MarketingNavbar />

      <main className="flex-1 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto">
            <span className="manifest-chip">100% TRANSPARENT B2B PRICING</span>
            <h1 className="mt-4 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
              Simple plans for ambitious <span className="gradient-text">sales teams</span>
            </h1>
            <p className="mt-4 text-base text-muted-foreground leading-relaxed">
              Find verified decision-makers across 190+ countries. Zero per-seat gouging, no hidden data fees, and instant self-serve activation.
            </p>

            {/* Billing interval toggle */}
            <div className="mt-8 flex items-center justify-center gap-3">
              <span className={cn("text-sm font-medium", billingInterval === "month" ? "text-foreground" : "text-muted-foreground")}>
                Monthly billing
              </span>
              <button
                type="button"
                onClick={() => setBillingInterval(billingInterval === "month" ? "year" : "month")}
                className="relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-muted transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                role="switch"
                aria-checked={billingInterval === "year"}
              >
                <span
                  className={cn(
                    "pointer-events-none inline-block h-5 w-5 transform rounded-full bg-primary shadow-lg ring-0 transition duration-200 ease-in-out",
                    billingInterval === "year" ? "translate-x-5" : "translate-x-0"
                  )}
                />
              </button>
              <div className="flex items-center gap-2">
                <span className={cn("text-sm font-medium", billingInterval === "year" ? "text-foreground" : "text-muted-foreground")}>
                  Yearly billing
                </span>
                <span className="rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 px-2 py-0.5 text-[11px] font-semibold">
                  Save ~20%
                </span>
              </div>
            </div>

            {/* Micro guarantees */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1">
                <CheckCircle2 className="h-3.5 w-3.5 text-success" /> 14-day money-back guarantee
              </span>
              <span className="inline-flex items-center gap-1">
                <CheckCircle2 className="h-3.5 w-3.5 text-success" /> Cancel anytime in 1 click
              </span>
              <span className="inline-flex items-center gap-1">
                <CheckCircle2 className="h-3.5 w-3.5 text-success" /> Instant workspace access
              </span>
            </div>
          </div>

          {/* Pricing Cards Grid */}
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {pricingPlans.map((plan) => {
              const price = billingInterval === "month" ? plan.monthlyPrice : plan.yearlyPrice;
              return (
                <div
                  key={plan.key}
                  className={cn(
                    "relative flex flex-col rounded-2xl border p-6 bg-card transition-all duration-200",
                    plan.popular
                      ? "border-primary shadow-xl shadow-primary/10 ring-1 ring-primary"
                      : "border-border shadow-subtle hover:border-border/80"
                  )}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="inline-flex items-center gap-1 rounded-full bg-primary px-3 py-0.5 text-xs font-semibold text-primary-foreground shadow-sm">
                        <Sparkles className="h-3 w-3" /> Most Popular
                      </span>
                    </div>
                  )}

                  <div>
                    <h3 className="font-display text-xl font-bold">{plan.name}</h3>
                    <p className="mt-2 text-xs text-muted-foreground min-h-[32px]">
                      {plan.description}
                    </p>

                    <div className="mt-6 flex items-baseline">
                      <span className="font-display text-4xl font-extrabold tracking-tight">
                        ${price}
                      </span>
                      <span className="ml-1.5 text-xs text-muted-foreground">
                        / month {billingInterval === "year" && price > 0 && "(billed annually)"}
                      </span>
                    </div>
                  </div>

                  <ul className="mt-6 space-y-3 text-xs text-muted-foreground flex-1 border-t border-border pt-6">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5">
                        <Check className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 pt-4">
                    {plan.ctaLink.startsWith("http") ? (
                      <a href={plan.ctaLink} className="block w-full">
                        <Button
                          variant={plan.variant}
                          className={cn(
                            "w-full font-semibold",
                            plan.popular && "shadow-lg shadow-primary/25"
                          )}
                        >
                          {plan.ctaText}
                        </Button>
                      </a>
                    ) : (
                      <Link href={plan.ctaLink} className="block w-full">
                        <Button
                          variant={plan.variant}
                          className={cn(
                            "w-full font-semibold",
                            plan.popular && "shadow-lg shadow-primary/25"
                          )}
                        >
                          {plan.ctaText}
                        </Button>
                      </Link>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Trust Guarantees Bar */}
          <div className="mt-12 rounded-2xl border border-border bg-card/40 p-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="font-semibold text-sm text-foreground">14-Day Guarantee</p>
              <p className="text-xs text-muted-foreground mt-0.5">100% refund if not satisfied</p>
            </div>
            <div>
              <p className="font-semibold text-sm text-foreground">No Contract Lock-in</p>
              <p className="text-xs text-muted-foreground mt-0.5">Cancel or switch plans anytime</p>
            </div>
            <div>
              <p className="font-semibold text-sm text-foreground">Flat-Rate Pricing</p>
              <p className="text-xs text-muted-foreground mt-0.5">No surprise per-seat billing</p>
            </div>
            <div>
              <p className="font-semibold text-sm text-foreground">Instant Activation</p>
              <p className="text-xs text-muted-foreground mt-0.5">Start prospecting immediately</p>
            </div>
          </div>

          {/* ─── In-Depth Feature Comparison Matrix ───────────────── */}
          <div className="mt-20">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="manifest-chip">FULL TRANSPARENCY</span>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight">
                Compare Plan Features &amp; Allowances
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                See exactly what is included in each plan — with zero hidden restrictions.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card overflow-hidden shadow-subtle">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="border-b border-border bg-muted/40">
                      <th className="py-4 px-6 font-semibold text-foreground text-sm w-2/5">Plan Features</th>
                      <th className="py-4 px-4 font-semibold text-foreground text-center w-[15%]">Free ($0)</th>
                      <th className="py-4 px-4 font-semibold text-foreground text-center w-[15%]">Growth ($19)</th>
                      <th className="py-4 px-4 font-semibold text-primary text-center w-[15%] bg-primary/5">Pro ($49)</th>
                      <th className="py-4 px-4 font-semibold text-foreground text-center w-[15%]">Enterprise ($149)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {featureComparison.map((cat, catIdx) => (
                      <>
                        <tr key={`cat-${catIdx}`} className="bg-surface/70 border-y border-border">
                          <td
                            colSpan={5}
                            className="py-2.5 px-6 font-bold uppercase tracking-wider text-[11px] text-primary"
                          >
                            {cat.category}
                          </td>
                        </tr>
                        {cat.features.map((feat, fIdx) => (
                          <tr
                            key={`feat-${catIdx}-${fIdx}`}
                            className="border-b border-border/50 hover:bg-muted/20 transition-colors"
                          >
                            <td className="py-3 px-6 text-foreground font-medium">{feat.name}</td>
                            
                            {/* Free */}
                            <td className="py-3 px-4 text-center text-muted-foreground">
                              {typeof feat.free === "boolean" ? (
                                feat.free ? (
                                  <Check className="h-4 w-4 text-primary inline-block" />
                                ) : (
                                  <X className="h-4 w-4 text-muted-foreground/40 inline-block" />
                                )
                              ) : (
                                feat.free
                              )}
                            </td>

                            {/* Growth */}
                            <td className="py-3 px-4 text-center text-muted-foreground">
                              {typeof feat.growth === "boolean" ? (
                                feat.growth ? (
                                  <Check className="h-4 w-4 text-primary inline-block" />
                                ) : (
                                  <X className="h-4 w-4 text-muted-foreground/40 inline-block" />
                                )
                              ) : (
                                feat.growth
                              )}
                            </td>

                            {/* Pro */}
                            <td className="py-3 px-4 text-center text-foreground font-medium bg-primary/5">
                              {typeof feat.pro === "boolean" ? (
                                feat.pro ? (
                                  <Check className="h-4 w-4 text-primary inline-block" />
                                ) : (
                                  <X className="h-4 w-4 text-muted-foreground/40 inline-block" />
                                )
                              ) : (
                                feat.pro
                              )}
                            </td>

                            {/* Enterprise */}
                            <td className="py-3 px-4 text-center text-muted-foreground">
                              {typeof feat.enterprise === "boolean" ? (
                                feat.enterprise ? (
                                  <Check className="h-4 w-4 text-primary inline-block" />
                                ) : (
                                  <X className="h-4 w-4 text-muted-foreground/40 inline-block" />
                                )
                              ) : (
                                feat.enterprise
                              )}
                            </td>
                          </tr>
                        ))}
                      </>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Security & Merchant of Record Strip */}
          <div className="mt-16 rounded-2xl border border-border bg-card/60 p-6 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Shield className="h-6 w-6" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-foreground">Secure Payments Powered by Paddle</h4>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Paddle.com is our Merchant of Record. All checkouts are 256-bit encrypted, PCI-DSS Level 1 compliant, and support local currencies.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <span className="px-2 py-1 rounded bg-muted/70 font-mono text-[11px]">Visa</span>
              <span className="px-2 py-1 rounded bg-muted/70 font-mono text-[11px]">Mastercard</span>
              <span className="px-2 py-1 rounded bg-muted/70 font-mono text-[11px]">Amex</span>
              <span className="px-2 py-1 rounded bg-muted/70 font-mono text-[11px]">PayPal</span>
              <span className="px-2 py-1 rounded bg-muted/70 font-mono text-[11px]">Apple Pay</span>
            </div>
          </div>

          {/* FAQs Section */}
          <div className="mt-20 max-w-4xl mx-auto">
            <div className="text-center">
              <span className="manifest-chip">QUESTIONS & ANSWERS</span>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-border bg-card p-5 shadow-subtle"
                >
                  <h3 className="font-semibold text-sm text-foreground flex items-start gap-2">
                    <HelpCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>{faq.q}</span>
                  </h3>
                  <p className="mt-2.5 text-xs text-muted-foreground leading-relaxed pl-6">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <MarketingFooter />
    </div>
  );
}
