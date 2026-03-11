/**
 * Site configuration for PC Quanti
 * Used for metadata, schema markup, and other site-wide settings
 */

export const siteConfig = {
  name: "PC Quanti",
  company: {
    legalName: "PC Quanti",
    description:
      "Engineering and construction management consultancy delivering professional services across the full project life cycle. Our multi-disciplinary team brings extensive experience in nuclear and coal-fired power generation, oil and gas, mining, and major infrastructure developments. We operate across NEC3, NEC4, FIDIC, GCC, and JBCC contract frameworks, providing Project Management, Planning, Construction Management, Contract Administration, Contract Management, Quantity Surveying, Commercial Management, Risk Management, and Dispute Resolution across South Africa, the United Kingdom, and other international markets.",
    foundingDate: "2020",
  },
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://pcquanti.co.za",
  contact: {
    email: "info@pcquanti.co.za",
    phone: "+27 82 863 2154",
    phoneInternational: "+27828632154",
    whatsapp: "https://wa.me/27828632154",
  },
  services: [
    {
      name: "Project Management",
      slug: "project-management",
      abbreviation: "PM",
      description:
        "Comprehensive project management from initial design and engineering through on-site execution and close-out, integrating programme management frameworks, schedule development, risk management, change control, and stakeholder interface management — including plant outage and shutdown delivery for nuclear and industrial sectors.",
      url: "/services/project-management",
    },
    {
      name: "Planning",
      slug: "planning",
      abbreviation: "Planning",
      description:
        "Structured and strategic planning services on NEC, FIDIC, and GCC contracts — including critical path scheduling, earned value management, resource loading, forensic delay analysis, look-ahead programmes, and outage and shutdown scheduling for complex engineering environments.",
      url: "/services/planning",
    },
    {
      name: "Construction Management",
      slug: "construction-management",
      abbreviation: "Construction",
      description:
        "Proven track record of delivering complex projects in challenging environments, including multidisciplinary execution in operational nuclear and petrochemical plants. We manage main contractor and subcontractor activities, including outage and shutdown construction, coordinating engineering, procurement, and construction to meet timeframe and budget targets.",
      url: "/services/construction-management",
    },
    {
      name: "Contract Administration",
      slug: "contract-administration",
      abbreviation: "Contract Admin",
      description:
        "Disciplined contract administration across NEC, FIDIC, GCC, and JBCC frameworks, ensuring comprehensive written communication, timely notices, proper documentation, and effective commercial administration under all major contract forms.",
      url: "/services/contract-administration",
    },
    {
      name: "Contract Management",
      slug: "contract-management",
      abbreviation: "Contract Mgmt",
      description:
        "Comprehensive contract lifecycle support including advisory on compliance, risk allocation, payment certification, variation management, and extension of time assessments across all major procurement forms.",
      url: "/services/contract-management",
    },
    {
      name: "Quantity Surveying",
      slug: "quantity-surveying",
      abbreviation: "QS",
      description:
        "Detailed quantity surveying from variation analysis and compensation event assessment to managing the payment process, dovetailing with contract management to ensure cost certainty and value is maintained across the project life cycle.",
      url: "/services/quantity-surveying",
    },
    {
      name: "Commercial Management",
      slug: "commercial-management",
      abbreviation: "Commercial",
      description:
        "Full project commercial oversight covering procurement, estimating, tender analysis, cost analysis, risk management, design development, and value engineering to protect and enhance commercial outcomes across the project life cycle.",
      url: "/services/commercial-management",
    },
    {
      name: "Risk Management",
      slug: "risk-management",
      abbreviation: "Risk",
      description:
        "Specialised risk identification, quantitative analysis, and mitigation planning for construction and engineering projects, enabling clients to minimise financial loss, manage uncertainty effectively, and deliver with greater confidence.",
      url: "/services/risk-management",
    },
    {
      name: "Dispute Resolution",
      slug: "dispute-resolution",
      abbreviation: "Disputes",
      description:
        "Expert claims preparation, assessment, and dispute resolution including adjudication, arbitration, and expert witness services, with strategic guidance on contractual dispute resolution procedures and evidentiary preparation.",
      url: "/services/dispute-resolution",
    },
  ],
  social: {
    linkedin: "https://www.linkedin.com/company/pc-quanti/",
    twitter: "",
  },
  areaServed: ["GB", "ZA"], // UK and South Africa
} as const;

export type SiteConfig = typeof siteConfig;
