/**
 * StructuredData component - Adds Schema.org JSON-LD markup
 * Implements Organization, WebSite, and Service schemas for SEO
 */

import { siteConfig } from "@/src/config/site";

interface StructuredDataProps {
  type?: "home" | "service";
  serviceName?: string;
  serviceDescription?: string;
}

export function StructuredData({ type = "home", serviceName, serviceDescription }: StructuredDataProps) {
  const baseUrl = siteConfig.url;

  // Organization schema - appears on all pages
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${baseUrl}#organization`,
    "name": siteConfig.company.legalName,
    "alternateName": siteConfig.name,
    "url": baseUrl,
    "description": siteConfig.company.description,
    "foundingDate": siteConfig.company.foundingDate,
    "areaServed": siteConfig.areaServed.map((countryCode) => ({
      "@type": "Country",
      "name": countryCode === "GB" ? "United Kingdom" : "South Africa",
    })),
    ...(siteConfig.contact.email && {
      "contactPoint": {
        "@type": "ContactPoint",
        "email": siteConfig.contact.email,
        "contactType": "customer service",
        "availableLanguage": ["en"],
      },
    }),
    ...(siteConfig.social.linkedin || siteConfig.social.twitter ? {
      "sameAs": [
        siteConfig.social.linkedin,
        siteConfig.social.twitter,
      ].filter(Boolean),
    } : {}),
  };

  // WebSite schema - homepage only
  const websiteSchema = type === "home" ? {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${baseUrl}#website`,
    "url": baseUrl,
    "name": siteConfig.name,
    "description": siteConfig.company.description,
    "publisher": {
      "@id": `${baseUrl}#organization`,
    },
    "inLanguage": "en-GB",
  } : null;

  // Service schema - service pages only
  const serviceSchema = type === "service" && serviceName && serviceDescription ? {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": serviceName,
    "description": serviceDescription,
    "provider": {
      "@id": `${baseUrl}#organization`,
    },
    "areaServed": siteConfig.areaServed.map((countryCode) => ({
      "@type": "Country",
      "name": countryCode === "GB" ? "United Kingdom" : "South Africa",
    })),
    "serviceType": serviceName,
  } : null;

  // Combine all schemas
  const schemas = [
    organizationSchema,
    websiteSchema,
    serviceSchema,
  ].filter(Boolean);

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
      ))}
    </>
  );
}
