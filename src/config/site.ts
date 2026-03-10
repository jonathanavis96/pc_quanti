/**
 * Site configuration for PC Quanti
 * Used for metadata, schema markup, and other site-wide settings
 */

export const siteConfig = {
  name: "PC Quanti",
  company: {
    legalName: "PC Quanti",
    description:
      "Engineering and construction management consultancy delivering professional services across the full project life cycle. Our multi-disciplinary team brings extensive experience in nuclear and coal-fired power generation, oil and gas, mining, and major infrastructure developments. We operate across NEC3, NEC4, FIDIC, GCC, and JBCC contract frameworks, providing Project Management, Quantity Surveying, Contract Administration, Claims Management, Project Controls, and Risk Management across South Africa, the United Kingdom, and other international markets.",
    foundingDate: "2020",
  },
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://pcquanti.co.za",
  contact: {
    email: "info@pcquanti.co.za",
    phone: "082 863 2154",
    phoneInternational: "+27828632154",
    whatsapp: "https://wa.me/+27828632154",
  },
  services: [
    {
      name: "Project Management",
      description:
        "Turnkey project management from initial design and engineering through on-site execution and close-out, integrating programme management frameworks, schedule development, risk management, and change control for complex nuclear, mining, and industrial sectors",
      url: "/services/project-management",
    },
    {
      name: "Quantity Surveying",
      description:
        "Detailed quantity surveying from variation analysis and compensation event assessment to managing the payment process, dovetailing with contract management to ensure cost certainty and value is maintained across the project life cycle",
      url: "/services/quantity-surveying",
    },
    {
      name: "Contract Administration",
      description:
        "Disciplined contract administration across NEC, FIDIC, GCC, and JBCC frameworks, ensuring comprehensive written communication, timely notices, proper documentation, and effective commercial administration under all major contract forms",
      url: "/services/contract-administration",
    },
    {
      name: "Claims Management",
      description:
        "Expert claims preparation, assessment, and dispute resolution including adjudication, arbitration, and expert witness services, with strategic guidance on contractual dispute resolution procedures and evidentiary preparation",
      url: "/services/claims-management",
    },
    {
      name: "Project Controls",
      description:
        "Integrated planning, scheduling, cost control, and earned value management using Primavera P6, with expertise in forensic delay analysis, critical path methods, and recognised time impact analysis standards",
      url: "/services/project-controls",
    },
    {
      name: "Risk Management",
      description:
        "Specialised risk identification, quantitative analysis, and mitigation planning for construction and engineering projects, enabling clients to minimise financial loss, manage uncertainty effectively, and deliver with greater confidence",
      url: "/services/risk-management",
    },
  ],
  social: {
    linkedin: "https://www.linkedin.com/in/phil-coleman/",
    twitter: "",
  },
  areaServed: ["GB", "ZA"], // UK and South Africa
} as const;

export type SiteConfig = typeof siteConfig;
