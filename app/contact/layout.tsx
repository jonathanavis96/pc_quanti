import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact PC Quanti — Request a Consultation",
  description: "Get in touch with PC Quanti to discuss your nuclear, mining, or industrial project. Specialist PM, QS, and contract consultancy across the UK and South Africa. Response within 24 hours.",
  openGraph: {
    title: "Contact PC Quanti | Request a Consultation",
    description: "Get in touch to discuss your nuclear, mining, or industrial project. Specialist consultancy across the UK and South Africa.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
