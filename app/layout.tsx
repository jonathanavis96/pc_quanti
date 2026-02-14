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
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://pcquanti.com"),
  title: {
    default: "PC Quanti | Expert Project Management for Nuclear & Industrial Sectors",
    template: "%s | PC Quanti",
  },
  description: "UK nuclear project management consultancy delivering expert Project Management, Quantity Surveying, Contract Administration, Claims Management, and Project Controls for industrial sectors across the UK and South Africa.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "PC Quanti | Expert Project Management for Nuclear & Industrial Sectors",
    description: "UK nuclear project management consultancy delivering expert Project Management, Quantity Surveying, Contract Administration, Claims Management, and Project Controls for industrial sectors across the UK and South Africa.",
    type: "website",
    locale: "en_GB",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "PC Quanti | Expert Project Management for Nuclear & Industrial Sectors",
    description: "UK nuclear project management consultancy delivering expert Project Management, Quantity Surveying, Contract Administration, Claims Management, and Project Controls for industrial sectors across the UK and South Africa.",
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
