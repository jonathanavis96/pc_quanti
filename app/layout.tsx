import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header, Footer } from "@/src/components";
import { Analytics } from "@/src/components/Analytics";
import { StructuredData } from "@/src/components/StructuredData";
import { siteConfig } from "@/src/config/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const siteUrl = siteConfig.url;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "PC Quanti | Engineering & Construction Management Consultancy",
    template: "%s | PC Quanti",
  },
  description: "Engineering and construction management consultancy delivering Project Management, Quantity Surveying, Contract Administration, Claims Management, Project Controls, and Risk Management across nuclear, mining, oil and gas, and infrastructure sectors in South Africa and the UK.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "PC Quanti | Engineering & Construction Management Consultancy",
    description: "Engineering and construction management consultancy delivering Project Management, Quantity Surveying, Contract Administration, Claims Management, Project Controls, and Risk Management across nuclear, mining, oil and gas, and infrastructure sectors in South Africa and the UK.",
    type: "website",
    locale: "en_GB",
    url: siteUrl,
    siteName: "PC Quanti",
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "PC Quanti — Engineering & Construction Management Consultancy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PC Quanti | Engineering & Construction Management Consultancy",
    description: "Engineering and construction management consultancy delivering professional services across nuclear, mining, oil and gas, and infrastructure sectors in South Africa and the UK.",
    images: [`${siteUrl}/og-image.png`],
  },
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
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
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#C4A21A" />
        {/* OG Image meta tags (explicit for static export) */}
        <meta property="og:image" content={`${siteUrl}/og-image.png`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="PC Quanti — Engineering & Construction Management Consultancy" />
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
