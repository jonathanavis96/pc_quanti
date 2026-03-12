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
  // NOTE: Do NOT use metadata.icons here — Next.js does not apply basePath
  // to icon URLs in static exports, causing favicons to 404 on GitHub Pages.
  // Favicons are injected manually via <link> tags in RootLayout <head> below.
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
        {/*
          Favicon links are injected manually (not via metadata.icons) because
          Next.js static export does NOT prepend basePath to metadata icon URLs.
          On GitHub Pages the site is served from /pc_quanti/, so bare paths like
          /favicon-32x32.png would resolve to the repo root and 404.
          NEXT_PUBLIC_BASE_PATH is set in next.config.ts at build time:
            - GitHub Pages (USE_GITHUB_PAGES=true): "/pc_quanti"
            - Custom domain:                        ""
        */}
        <link rel="icon" type="image/x-icon" href={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}/favicon.ico`} />
        <link rel="icon" type="image/png" sizes="32x32" href={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}/favicon-32x32.png`} />
        <link rel="icon" type="image/png" sizes="16x16" href={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}/favicon-16x16.png`} />
        <link rel="icon" type="image/svg+xml" href={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}/favicon.svg`} />
        <link rel="apple-touch-icon" sizes="180x180" href={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}/apple-touch-icon.png`} />
        <link rel="manifest" href={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}/site.webmanifest`} />
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
