// Metadata is defined in app/contact/page.tsx to avoid duplication.
// This layout exists as an extension point for future contact-specific wrappers.

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
