// Metadata is defined in app/pricing/page.tsx to avoid duplication.
// This layout exists as an extension point for future pricing-specific wrappers.

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
