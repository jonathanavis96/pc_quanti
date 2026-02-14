import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header, Footer } from "@/src/components";
import { Analytics } from "@/src/components/Analytics";
import { StructuredData } from "@/src/components/StructuredData";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "PC Quanti | Expert Project Management for Nuclear & Industrial Sectors",
    template: "%s | PC Quanti",
  },
  description: "Lean, trusted project management consultancy delivering Project Management, Quantity Surveying, Contract Administration, Claims Management, and Project Controls across the UK and South Africa.",
  openGraph: {
    title: "PC Quanti | Expert Project Management for Nuclear & Industrial Sectors",
    description: "Lean, trusted project management consultancy delivering Project Management, Quantity Surveying, Contract Administration, Claims Management, and Project Controls across the UK and South Africa.",
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "PC Quanti | Expert Project Management for Nuclear & Industrial Sectors",
    description: "Lean, trusted project management consultancy delivering Project Management, Quantity Surveying, Contract Administration, Claims Management, and Project Controls across the UK and South Africa.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <StructuredData type="home" />
      </head>
      <body
        className={`${inter.variable} font-sans antialiased`}
      >
        <Analytics />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
