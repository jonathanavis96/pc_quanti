/**
 * Site configuration for PC Quanti
 * Used for metadata, schema markup, and other site-wide settings
 */

export const siteConfig = {
  name: "PC Quanti",
  company: {
    legalName: "PC Quanti Ltd",
    description: "Lean, trusted project management consultancy delivering Project Management, Quantity Surveying, Contract Administration, Claims Management, and Project Controls across the UK and South Africa.",
    foundingDate: "2024", // Update with actual founding date
  },
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://pcquanti.com",
  contact: {
    email: "info@pcquanti.com", // Update with actual email
    phone: "+44-XXX-XXX-XXXX", // Update with actual phone
  },
  services: [
    {
      name: "Project Management",
      description: "End-to-end project delivery across nuclear, mining, and industrial sectors",
      url: "/services/project-management",
    },
    {
      name: "Quantity Surveying",
      description: "Cost management and commercial expertise for complex industrial projects",
      url: "/services/quantity-surveying",
    },
    {
      name: "Contract Administration",
      description: "Professional contract management ensuring compliance and risk mitigation",
      url: "/services/contract-administration",
    },
    {
      name: "Claims Management",
      description: "Expert claims analysis and resolution for industrial projects",
      url: "/services/claims-management",
    },
    {
      name: "Project Controls",
      description: "Integrated cost, schedule, and risk management solutions",
      url: "/services/project-controls",
    },
  ],
  social: {
    // Update with actual social media profiles when available
    linkedin: "", // e.g., "https://linkedin.com/company/pc-quanti"
    twitter: "", // e.g., "https://twitter.com/pcquanti"
  },
  areaServed: ["GB", "ZA"], // UK and South Africa
} as const;

export type SiteConfig = typeof siteConfig;
