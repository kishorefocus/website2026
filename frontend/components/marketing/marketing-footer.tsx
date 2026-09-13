import Link from "next/link";
import Image from "next/image";
import { ShieldCheck } from "lucide-react";
import { APP_LOGIN_URL, SUPPORT_EMAIL, SALES_EMAIL, FOUNDER_EMAIL, ADMIN_EMAIL } from "@/lib/constants";

export function MarketingFooter() {
  return (
    <footer className="border-t border-border bg-surface/50 py-12 text-foreground">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          {/* Brand & Mission */}
          <div className="max-w-sm">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-md overflow-hidden">
                <Image
                  src="/images/logo_image.png"
                  alt="GetYourClients"
                  width={28}
                  height={28}
                  className="h-7 w-7 object-contain"
                />
              </div>
              <span className="font-display font-bold text-base">
                GetYour<span className="gradient-text">Clients</span>
              </span>
            </Link>
            <p className="mt-3 text-xs text-muted-foreground leading-relaxed">
              The AI-powered B2B client discovery & pipeline platform. Helping sales teams identify, contact, and close qualified decision-makers across 190+ countries.
            </p>
            <div className="mt-4 flex items-center gap-2 text-[11px] text-muted-foreground bg-muted/50 rounded-lg px-2.5 py-1.5 border border-border/60 w-fit">
              <ShieldCheck className="h-4 w-4 text-primary" />
              <span>Payments & invoices processed securely by <strong>Paddle</strong></span>
            </div>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 text-sm">
            <div>
              <p className="font-semibold text-foreground mb-3">Product</p>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a href={APP_LOGIN_URL} className="hover:text-foreground transition-colors font-medium text-primary">
                    Login to Platform
                  </a>
                </li>
                <li>
                  <Link href="/pricing" className="hover:text-foreground transition-colors">
                    Pricing &amp; Plans
                  </Link>
                </li>
                <li>
                  <Link href="/#product" className="hover:text-foreground transition-colors">
                    Global Discovery
                  </Link>
                </li>
                <li>
                  <Link href="/#how-it-works" className="hover:text-foreground transition-colors">
                    Pipeline Engine
                  </Link>
                </li>
                <li>
                  <Link href="/#industries" className="hover:text-foreground transition-colors">
                    Industries
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-semibold text-foreground mb-3">Features</p>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <Link href="/features/lead-discovery" className="hover:text-foreground transition-colors">
                    B2B Lead Finder
                  </Link>
                </li>
                <li>
                  <Link href="/features/crm-outreach" className="hover:text-foreground transition-colors">
                    Cold Outreach CRM
                  </Link>
                </li>
                <li>
                  <Link href="/features/map-search" className="hover:text-foreground transition-colors">
                    Map-Based Prospecting
                  </Link>
                </li>
                <li>
                  <Link href="/features/automation" className="hover:text-foreground transition-colors">
                    Sales Automation
                  </Link>
                </li>
                <li>
                  <Link href="/use-cases/agencies" className="hover:text-foreground transition-colors">
                    For Agencies
                  </Link>
                </li>
                <li>
                  <Link href="/use-cases/sales-teams" className="hover:text-foreground transition-colors">
                    For Sales Teams
                  </Link>
                </li>
                <li>
                  <Link href="/use-cases/freelancers" className="hover:text-foreground transition-colors">
                    For Freelancers
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-semibold text-foreground mb-3">Compare</p>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <Link href="/compare/apollo-alternative" className="hover:text-foreground transition-colors">
                    vs Apollo.io
                  </Link>
                </li>
                <li>
                  <Link href="/compare/hunter-alternative" className="hover:text-foreground transition-colors">
                    vs Hunter.io
                  </Link>
                </li>
                <li>
                  <Link href="/compare/lusha-alternative" className="hover:text-foreground transition-colors">
                    vs Lusha
                  </Link>
                </li>
                <li>
                  <Link href="/compare/zoominfo-alternative" className="hover:text-foreground transition-colors">
                    vs ZoomInfo
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-semibold text-foreground mb-3">Company &amp; Support</p>
              <ul className="space-y-2 text-muted-foreground text-xs">
                <li>
                  <Link href="/contact" className="hover:text-foreground transition-colors font-medium text-foreground">
                    Contact Channels
                  </Link>
                </li>
                <li>
                  <a href={`mailto:${SUPPORT_EMAIL}`} className="hover:text-foreground transition-colors flex items-center gap-1.5 font-mono">
                    <span className="text-[10px] uppercase font-bold text-primary bg-primary/10 px-1 py-0.2 rounded">Support</span> {SUPPORT_EMAIL}
                  </a>
                </li>
                <li>
                  <a href={`mailto:${SALES_EMAIL}`} className="hover:text-foreground transition-colors flex items-center gap-1.5 font-mono">
                    <span className="text-[10px] uppercase font-bold text-accent bg-accent/10 px-1 py-0.2 rounded">Sales</span> {SALES_EMAIL}
                  </a>
                </li>
                <li>
                  <a href={`mailto:${FOUNDER_EMAIL}`} className="hover:text-foreground transition-colors flex items-center gap-1.5 font-mono">
                    <span className="text-[10px] uppercase font-bold text-purple-600 bg-purple-500/10 px-1 py-0.2 rounded">Founder</span> {FOUNDER_EMAIL}
                  </a>
                </li>
                <li>
                  <a href={`mailto:${ADMIN_EMAIL}`} className="hover:text-foreground transition-colors flex items-center gap-1.5 font-mono">
                    <span className="text-[10px] uppercase font-bold text-amber-600 bg-amber-500/10 px-1 py-0.2 rounded">Admin</span> {ADMIN_EMAIL}
                  </a>
                </li>
                <li className="pt-1">
                  <a href={APP_LOGIN_URL} className="hover:text-foreground transition-colors">
                    Customer Portal
                  </a>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-foreground transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-foreground transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/refund" className="hover:text-foreground transition-colors">
                    Refund &amp; Cancellation
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Merchant of Record & Copyright */}
        <div className="mt-10 pt-6 border-t border-border flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between text-xs text-muted-foreground">
          <div className="space-y-1">
            <p>© {new Date().getFullYear()} GetYourClients, Inc. All rights reserved.</p>
            <p className="text-[11px] text-muted-foreground/80">
              Our order process is conducted by our online reseller Paddle.com. Paddle.com is the Merchant of Record for all our orders. Paddle provides all customer service inquiries and handles returns.
            </p>
          </div>
          <span className="manifest-chip shrink-0 self-start sm:self-center">
            GLOBAL B2B COMPLIANCE
          </span>
        </div>
      </div>
    </footer>
  );
}
