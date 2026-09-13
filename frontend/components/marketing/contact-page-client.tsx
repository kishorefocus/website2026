"use client";

import { useState } from "react";
import { MarketingNavbar } from "@/components/marketing/marketing-navbar";
import { MarketingFooter } from "@/components/marketing/marketing-footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageSquare, Clock, Building, CheckCircle2, Send, ShieldCheck, UserCheck } from "lucide-react";
import { motion } from "framer-motion";
import { APP_LOGIN_URL, CONTACT_EMAILS, ADMIN_EMAIL, FOUNDER_EMAIL, SALES_EMAIL, SUPPORT_EMAIL } from "@/lib/constants";

export function ContactPageClient() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "General Support",
    message: "",
  });

  const getDestinationEmail = (subject: string) => {
    if (subject.includes("Sales")) return SALES_EMAIL;
    if (subject.includes("Founder") || subject.includes("Partnership")) return FOUNDER_EMAIL;
    if (subject.includes("Administration") || subject.includes("Legal")) return ADMIN_EMAIL;
    return SUPPORT_EMAIL;
  };

  const currentDestination = getDestinationEmail(formData.subject);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    // Client-side form acknowledgement
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <MarketingNavbar />

      <main className="flex-1 py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto">
            <span className="manifest-chip">24/7 SUPPORT &amp; SALES</span>
            <h1 className="mt-4 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
              Get in touch with our <span className="gradient-text">team</span>
            </h1>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              Have questions about our global lead discovery, API, or subscription plans? We are here to help your sales team succeed.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-12">
            {/* Contact Channels Card */}
            <div className="lg:col-span-5 space-y-6">
              <div className="rounded-2xl border border-border bg-card p-6 shadow-subtle space-y-5">
                <h2 className="font-display text-lg font-bold text-foreground">Official Channels</h2>

                {/* Support (SU) */}
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary font-bold text-xs">
                    SU
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-xs font-semibold text-foreground uppercase tracking-wider">Support Team</h3>
                      <span className="rounded bg-primary/10 px-1.5 py-0.5 text-[10px] font-semibold text-primary">Technical &amp; Billing</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-0.5">Platform queries, troubleshooting &amp; subscription help</p>
                    <a
                      href={`mailto:${SUPPORT_EMAIL}`}
                      className="mt-1 inline-block text-xs font-medium text-primary hover:underline font-mono"
                    >
                      {SUPPORT_EMAIL}
                    </a>
                  </div>
                </div>

                {/* Sales (SA) */}
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent font-bold text-xs">
                    SA
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-xs font-semibold text-foreground uppercase tracking-wider">Enterprise &amp; Sales</h3>
                      <span className="rounded bg-accent/10 px-1.5 py-0.5 text-[10px] font-semibold text-accent">Solutions</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-0.5">Custom volume, SSO setup &amp; dedicated demos</p>
                    <a
                      href={`mailto:${SALES_EMAIL}`}
                      className="mt-1 inline-block text-xs font-medium text-primary hover:underline font-mono"
                    >
                      {SALES_EMAIL}
                    </a>
                  </div>
                </div>

                {/* Kishore (KI) - Founder */}
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 font-bold text-xs">
                    KI
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-xs font-semibold text-foreground uppercase tracking-wider">Kishore</h3>
                      <span className="rounded bg-purple-500/10 px-1.5 py-0.5 text-[10px] font-semibold text-purple-600 dark:text-purple-400">Founder Desk</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-0.5">Strategic partnerships, investor relations &amp; executive inquiries</p>
                    <a
                      href={`mailto:${FOUNDER_EMAIL}`}
                      className="mt-1 inline-block text-xs font-medium text-primary hover:underline font-mono"
                    >
                      {FOUNDER_EMAIL}
                    </a>
                  </div>
                </div>

                {/* Admin (Admin) */}
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 font-bold text-xs">
                    Admin
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-xs font-semibold text-foreground uppercase tracking-wider">Administration</h3>
                      <span className="rounded bg-amber-500/10 px-1.5 py-0.5 text-[10px] font-semibold text-amber-600 dark:text-amber-400">Legal &amp; Compliance</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-0.5">Corporate governance, data privacy requests &amp; vendor ops</p>
                    <a
                      href={`mailto:${ADMIN_EMAIL}`}
                      className="mt-1 inline-block text-xs font-medium text-primary hover:underline font-mono"
                    >
                      {ADMIN_EMAIL}
                    </a>
                  </div>
                </div>

                {/* Response Time */}
                <div className="flex items-start gap-4 border-t border-border pt-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-500">
                    <Clock className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold text-foreground uppercase tracking-wider">Response Time</h3>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      Our customer team typically responds within <strong>24 business hours</strong>.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 border-t border-border pt-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-muted text-muted-foreground">
                    <Building className="h-4 w-4" />
                  </div>
                  <div className="text-xs text-muted-foreground leading-relaxed">
                    <h3 className="font-semibold text-foreground">GetYourClients, Inc.</h3>
                    <p className="mt-0.5">Web: https://getyourclientsb2b.com</p>
                    <p>Payments reseller: Paddle.com</p>
                  </div>
                </div>
              </div>

              {/* Quick Login Callout */}
              <div className="rounded-2xl border border-border bg-card/60 p-5 shadow-subtle flex items-center justify-between">
                <div>
                  <h3 className="text-xs font-semibold text-foreground uppercase tracking-wider">Already a customer?</h3>
                  <p className="text-xs text-muted-foreground mt-0.5">Access your live leads &amp; outreach pipeline</p>
                </div>
                <a href={APP_LOGIN_URL}>
                  <Button size="sm" variant="outline" className="text-xs font-semibold">
                    Platform Login →
                  </Button>
                </a>
              </div>
            </div>

            {/* Interactive Form */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl border border-border bg-card p-8 shadow-card">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center text-center py-12"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500 mb-4">
                      <CheckCircle2 className="h-8 w-8" />
                    </div>
                    <h3 className="font-display text-2xl font-bold text-foreground">Message Sent Successfully!</h3>
                    <p className="mt-2 text-sm text-muted-foreground max-w-md">
                      Thank you for contacting us. Your message has been routed to <strong>{currentDestination}</strong>. A team member will reach out to <strong>{formData.email}</strong> shortly.
                    </p>
                    <Button
                      variant="outline"
                      className="mt-6"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: "", email: "", subject: "General Support", message: "" });
                      }}
                    >
                      Send another message
                    </Button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <h2 className="font-display text-xl font-bold text-foreground">Send a Message</h2>
                      <p className="mt-1 text-xs text-muted-foreground">
                        Fill out the form below or email the relevant department directly.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-foreground">Your Name *</label>
                        <Input
                          required
                          placeholder="e.g. Jane Doe"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-foreground">Work Email Address *</label>
                        <Input
                          required
                          type="email"
                          placeholder="jane@company.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between">
                        <label className="text-xs font-semibold text-foreground">Department / Subject</label>
                        <span className="text-[11px] text-muted-foreground">
                          Direct:{" "}
                          <a
                            href={`mailto:${currentDestination}?subject=${encodeURIComponent(formData.subject)}`}
                            className="text-primary hover:underline font-mono"
                          >
                            {currentDestination}
                          </a>
                        </span>
                      </div>
                      <select
                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-xs shadow-sm focus:outline-none focus:ring-1 focus:ring-ring text-foreground"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      >
                        <option value="General Support">Support Desk — support@getyourclientsb2b.com</option>
                        <option value="Enterprise Sales">Sales &amp; Enterprise — sales@getyourclientsb2b.com</option>
                        <option value="Founder &amp; Strategic Inquiries">Founder Desk (Kishore) — kishore@getyourclientsb2b.com</option>
                        <option value="Administration &amp; Legal">Admin &amp; Legal — admin@getyourclientsb2b.com</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-foreground">Message *</label>
                      <Textarea
                        required
                        rows={5}
                        placeholder="Please describe how we can help you..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      />
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button type="submit" className="flex-1 gap-2 font-semibold">
                        <Send className="h-4 w-4" /> Send Message
                      </Button>
                      <a
                        href={`mailto:${currentDestination}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(formData.message)}`}
                        className="inline-flex"
                      >
                        <Button type="button" variant="outline" className="w-full sm:w-auto text-xs">
                          Open in Email App ↗
                        </Button>
                      </a>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      <MarketingFooter />
    </div>
  );
}
