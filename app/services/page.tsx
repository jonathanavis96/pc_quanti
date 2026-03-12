import React from 'react';
import { Card, Container, LinkButton } from '@/src/components';
import Link from 'next/link';
import type { Metadata } from "next";

// SVG icons — exact copies of homepage ServicesGrid icons
const ProjectManagementIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12" aria-hidden="true">
    {/* Clipboard */}
    <rect x="8" y="7" width="28" height="34" rx="2" />
    <rect x="16" y="4" width="12" height="7" rx="2" />
    {/* X obstacles — small, light */}
    <line x1="14" y1="16" x2="17" y2="19" strokeWidth="1.2" strokeOpacity="0.5" />
    <line x1="17" y1="16" x2="14" y2="19" strokeWidth="1.2" strokeOpacity="0.5" />
    <line x1="27" y1="16" x2="30" y2="19" strokeWidth="1.2" strokeOpacity="0.5" />
    <line x1="30" y1="16" x2="27" y2="19" strokeWidth="1.2" strokeOpacity="0.5" />
    <line x1="14" y1="28" x2="17" y2="31" strokeWidth="1.2" strokeOpacity="0.5" />
    <line x1="17" y1="28" x2="14" y2="31" strokeWidth="1.2" strokeOpacity="0.5" />
    <line x1="27" y1="28" x2="30" y2="31" strokeWidth="1.2" strokeOpacity="0.5" />
    <line x1="30" y1="28" x2="27" y2="31" strokeWidth="1.2" strokeOpacity="0.5" />
    {/* Start circle — bottom-left */}
    <circle cx="13" cy="35" r="2.5" fill="currentColor" fillOpacity="0.2" />
    <circle cx="13" cy="35" r="2.5" />
    {/* End circle — top-right */}
    <circle cx="33" cy="13" r="2.5" fill="currentColor" fillOpacity="0.2" />
    <circle cx="33" cy="13" r="2.5" />
    {/* Winding S-curve */}
    <path d="M 13 32 C 22 32 22 22 13 22 C 13 15 22 15 31 13" strokeWidth="1.6" />
    <polyline points="28,11 31,13 28,15" strokeWidth="1.6" />
  </svg>
);

const PlanningIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12" aria-hidden="true">
    {/* Gantt chart bars */}
    <rect x="6" y="10" width="18" height="5" rx="1" fill="currentColor" fillOpacity="0.15" />
    <rect x="6" y="10" width="18" height="5" rx="1" />
    <rect x="14" y="19" width="24" height="5" rx="1" fill="currentColor" fillOpacity="0.15" />
    <rect x="14" y="19" width="24" height="5" rx="1" />
    <rect x="6" y="28" width="14" height="5" rx="1" fill="currentColor" fillOpacity="0.15" />
    <rect x="6" y="28" width="14" height="5" rx="1" />
    <line x1="6" y1="38" x2="38" y2="38" strokeWidth="1.2" strokeOpacity="0.4" />
  </svg>
);

const ConstructionManagementIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12" aria-hidden="true">
    {/* Crown rib — centre top tab */}
    <path d="M18 18V9a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v9" />
    {/* Left dome arc */}
    <path d="M7 28v-6a11 11 0 0 1 11-11" />
    {/* Right dome arc */}
    <path d="M26 11a11 11 0 0 1 11 11v6" />
    {/* Brim */}
    <rect x="3" y="28" width="38" height="7" rx="2" fill="currentColor" fillOpacity="0.1" />
    <rect x="3" y="28" width="38" height="7" rx="2" />
  </svg>
);

const ContractAdminIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12" aria-hidden="true">
    {/* Document */}
    <rect x="8" y="4" width="22" height="30" rx="2" />
    <path d="M30 4 L30 10 L36 10" strokeWidth="1.4" />
    <path d="M30 4 L36 10 L36 34 Q36 36 34 36 L10 36" />
    <line x1="13" y1="14" x2="25" y2="14" />
    <line x1="13" y1="19" x2="25" y2="19" />
    <line x1="13" y1="24" x2="20" y2="24" />
    {/* Seal */}
    <circle cx="30" cy="30" r="5" fill="currentColor" fillOpacity="0.12" />
    <circle cx="30" cy="30" r="5" />
    <line x1="28" y1="30" x2="30" y2="32" />
    <line x1="30" y1="32" x2="33" y2="28" />
  </svg>
);

const ContractManagementIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12" aria-hidden="true">
    {/* Document */}
    <rect x="5" y="4" width="22" height="30" rx="2" fill="currentColor" fillOpacity="0.08" />
    <rect x="5" y="4" width="22" height="30" rx="2" />
    <line x1="10" y1="12" x2="23" y2="12" />
    <line x1="10" y1="17" x2="23" y2="17" />
    <line x1="10" y1="22" x2="18" y2="22" />
    {/* Signature line */}
    <line x1="10" y1="28" x2="23" y2="28" strokeOpacity="0.4" />
    {/* Pen body */}
    <path d="M 39 9 L 41 7 L 23 25 L 21 27 Z" fill="currentColor" fillOpacity="0.1" />
    <path d="M 39 9 L 41 7 L 23 25 L 21 27 Z" />
    {/* Nib */}
    <path d="M 21 27 L 23 25 L 19 31 Z" fill="currentColor" stroke="none" />
    {/* Signature scribble */}
    <path d="M 11 28 Q 14 26 16 28 Q 18 30 20 28" strokeWidth="1.2" />
  </svg>
);

const QuantitySurveyingIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12" aria-hidden="true">
    {/* Ruler + measurement ticks */}
    <rect x="4" y="16" width="36" height="12" rx="2" />
    <line x1="10" y1="16" x2="10" y2="22" />
    <line x1="16" y1="16" x2="16" y2="24" />
    <line x1="22" y1="16" x2="22" y2="22" />
    <line x1="28" y1="16" x2="28" y2="24" />
    <line x1="34" y1="16" x2="34" y2="22" />
    {/* Value label */}
    <line x1="12" y1="10" x2="32" y2="10" strokeDasharray="2 2" strokeOpacity="0.5" />
    <line x1="12" y1="9" x2="12" y2="11" />
    <line x1="32" y1="9" x2="32" y2="11" />
  </svg>
);

const CommercialManagementIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12" aria-hidden="true">
    {/* Short vertical ticks above and below the S */}
    <path d="M22 4v7m0 22v7" />
    {/* S-curve */}
    <path d="M37 14a5.5 5.5 0 0 0-5-3h-20a5.5 5.5 0 0 0 0 11h20a5.5 5.5 0 0 1 0 11h-20a5.5 5.5 0 0 1-5-3" />
  </svg>
);

const RiskManagementIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12" aria-hidden="true">
    {/* Shield */}
    <path d="M22 4 L36 10 L36 24 C36 32 22 40 22 40 C22 40 8 32 8 24 L8 10 Z" fill="currentColor" fillOpacity="0.1" />
    <path d="M22 4 L36 10 L36 24 C36 32 22 40 22 40 C22 40 8 32 8 24 L8 10 Z" />
    {/* Check mark */}
    <polyline points="15,22 20,27 29,17" strokeWidth="2" />
  </svg>
);

const DisputeResolutionIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12" aria-hidden="true">
    {/* Balance scales */}
    <line x1="22" y1="6" x2="22" y2="38" />
    <line x1="10" y1="38" x2="34" y2="38" />
    <line x1="8" y1="14" x2="36" y2="14" />
    <line x1="22" y1="6" x2="22" y2="14" />
    {/* Left pan */}
    <path d="M8 14 L5 22 Q8 26 11 22 Z" fill="currentColor" fillOpacity="0.12" />
    <path d="M8 14 L5 22 Q8 26 11 22 Z" />
    {/* Right pan */}
    <path d="M36 14 L33 22 Q36 26 39 22 Z" fill="currentColor" fillOpacity="0.12" />
    <path d="M36 14 L33 22 Q36 26 39 22 Z" />
  </svg>
);

export const metadata: Metadata = {
  title: "PC Quanti — Services",
  description: "Engineering and construction management consultancy with extensive experience in NEC3, NEC4, FIDIC, GCC, JBCC. Project management, planning, construction management, quantity surveying, commercial management, risk management, contract and dispute resolution, adjudication and arbitration.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "PC Quanti — Services",
    description: "Engineering and construction management consultancy with extensive experience in NEC3, NEC4, FIDIC, GCC, JBCC. Project management, planning, construction management, quantity surveying, commercial management, risk management, contract and dispute resolution, adjudication and arbitration.",
    url: "/services",
  },
};

const services = [
  {
    slug: 'project-management',
    title: 'Project Management',
    description: 'Comprehensive project management services from initial design and engineering development through on-site execution and project close-out, integrating schedule development, risk management, change control, stakeholder interface management, and outage and shutdown delivery.',
    Icon: ProjectManagementIcon,
  },
  {
    slug: 'planning',
    title: 'Planning',
    description: 'Structured and strategic planning services on NEC, FIDIC, and GCC contracts — including critical path scheduling, earned value management, resource loading, forensic delay analysis, look-ahead programmes, and outage and shutdown scheduling.',
    Icon: PlanningIcon,
  },
  {
    slug: 'construction-management',
    title: 'Construction Management',
    description: 'Proven track record of delivering complex projects in challenging environments, including multidisciplinary project execution in operational facilities. We manage clients, main contractor or subcontractor activities, including outage and shutdown works.',
    Icon: ConstructionManagementIcon,
  },
  {
    slug: 'contract-administration',
    title: 'Contract Administration',
    description: 'Timely contractual notices, structured reporting, and disciplined commercial administration — ensuring proper documentation of progress and compliance under the contract form.',
    Icon: ContractAdminIcon,
  },
  {
    slug: 'contract-management',
    title: 'Contract Management',
    description: 'Comprehensive contract lifecycle support including advisory on compliance, risk allocation, payment certification, variation management, and extension of time assessments across all major forms of procurement.',
    Icon: ContractManagementIcon,
  },
  {
    slug: 'quantity-surveying',
    title: 'Quantity Surveying',
    description: 'Detailed quantity surveying from variation analysis and compensation event assessment to certification and payment management, ensuring value is maintained across claims, disputes and arbitrations.',
    Icon: QuantitySurveyingIcon,
  },
  {
    slug: 'commercial-management',
    title: 'Commercial Management',
    description: 'Full project commercial oversight covering procurement, estimating, tender analysis, cost analysis, risk management, design development, and value engineering to protect and enhance commercial outcomes across the project lifecycle.',
    Icon: CommercialManagementIcon,
  },
  {
    slug: 'risk-management',
    title: 'Risk Management',
    description: 'Specialised risk management services helping developers, contractors and project stakeholders identify, assess and mitigate potential risks before they impact timelines, budgets or compliance.',
    Icon: RiskManagementIcon,
  },
  {
    slug: 'dispute-resolution',
    title: 'Dispute Resolution, Adjudication and Arbitration',
    description: 'Specialist advice and representation in construction and engineering disputes across all formal and alternative dispute resolution forums, including adjudication and arbitration proceedings.',
    Icon: DisputeResolutionIcon,
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Container>
        <div className="py-16 md:py-24">
          {/* Header */}
          <div className="mb-12 md:mb-16 text-center">
            <Link
              href="/"
              className="text-pc-gold hover:underline mb-4 inline-block focus:outline-none focus:ring-2 focus:ring-pc-gold focus:ring-offset-2 rounded-sm"
            >
              ← Back to Home
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-pc-neutral-900 mb-4">
              Our Services
            </h1>
            <p className="text-lg md:text-xl text-pc-neutral-600 max-w-3xl mx-auto">
              We have extensive experience in various forms of contract including NEC3, NEC4, FIDIC, GCC, JBCC and deploy services in project management, planning, construction management, quantity surveying, cost, value and risk management, contract and commercial management, dispute resolution, adjudication and arbitration, with a proven track record of delivering complex major EPC and EPCM projects.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid gap-6 md:gap-8 mb-12">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="block group focus:outline-none focus:ring-2 focus:ring-pc-gold focus:ring-offset-2 rounded-lg"
              >
                <Card variant="elevated" className="hover:border-pc-gold transition-all duration-200">
                  <div className="flex items-start gap-6">
                    <div className="text-pc-gold flex-shrink-0">
                      <service.Icon />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-semibold text-pc-neutral-900 mb-3 group-hover:text-pc-gold transition-colors">
                        {service.title}
                      </h2>
                      <p className="text-pc-neutral-600 leading-relaxed">
                        {service.description}
                      </p>
                      <div className="mt-4 text-pc-gold font-semibold group-hover:underline">
                        Learn more →
                      </div>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16 p-8 bg-pc-neutral-50 rounded-lg">
            <h2 className="text-2xl font-semibold text-pc-neutral-900 mb-4">
              Ready to Discuss Your Project?
            </h2>
            <p className="text-pc-neutral-600 mb-6 max-w-2xl mx-auto">
              Get in touch to explore how PC Quanti can support your next project with disciplined engineering and construction management expertise.
            </p>
            <LinkButton href="/contact" size="lg">
              Contact Us
            </LinkButton>
          </div>
        </div>
      </Container>
    </main>
  );
}
