import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with PC Quanti to discuss your project needs. Expert project management consultancy for nuclear, mining, and industrial sectors across the UK and South Africa.",
  openGraph: {
    title: "Contact Us | PC Quanti",
    description: "Get in touch with PC Quanti to discuss your project needs. Expert project management consultancy for nuclear, mining, and industrial sectors across the UK and South Africa.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
