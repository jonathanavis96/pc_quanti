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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://pcquanti.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
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
    url: siteUrl,
    siteName: "PC Quanti",
    images: [
      {
        url: `${siteUrl}/logo.png`,
        width: 760,
        height: 336,
        alt: "PC Quanti Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PC Quanti | Expert Project Management for Nuclear & Industrial Sectors",
    description: "UK nuclear project management consultancy delivering expert Project Management, Quantity Surveying, Contract Administration, Claims Management, and Project Controls for industrial sectors across the UK and South Africa.",
    images: [`${siteUrl}/logo.png`],
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
        {/* OG Image meta tags (explicit for static export) */}
        <meta property="og:image" content={`${siteUrl}/logo.png`} />
        <meta property="og:image:width" content="760" />
        <meta property="og:image:height" content="336" />
        <meta property="og:image:alt" content="PC Quanti Logo" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="PC Quanti" />
        <meta property="og:locale" content="en_GB" />
        <meta property="og:url" content={siteUrl} />
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
