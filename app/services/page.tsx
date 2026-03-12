import React from 'react';
import { Card, Container, LinkButton } from '@/src/components';
import Link from 'next/link';
import type { Metadata } from "next";

// Professional SVG icons for each service
const ProjectManagementIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none" className="w-12 h-12" aria-hidden="true">
    <rect x="6" y="4" width="28" height="36" rx="3" stroke="currentColor" strokeWidth="2.5" fill="none"/>
    <line x1="12" y1="14" x2="28" y2="14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    <line x1="12" y1="21" x2="24" y2="21" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    <line x1="12" y1="28" x2="20" y2="28" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    <polyline points="30,28 34,32 42,22" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  </svg>
);

const PlanningIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none" className="w-12 h-12" aria-hidden="true">
    {/* Clipboard */}
    <rect x="8" y="8" width="32" height="38" rx="2" stroke="currentColor" strokeWidth="2.5"/>
    <rect x="17" y="4" width="14" height="8" rx="2" stroke="currentColor" strokeWidth="2.5"/>
    {/* X obstacles — small, light */}
    <line x1="14" y1="18" x2="18" y2="22" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.5"/>
    <line x1="18" y1="18" x2="14" y2="22" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.5"/>
    <line x1="30" y1="18" x2="34" y2="22" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.5"/>
    <line x1="34" y1="18" x2="30" y2="22" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.5"/>
    <line x1="14" y1="30" x2="18" y2="34" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.5"/>
    <line x1="18" y1="30" x2="14" y2="34" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.5"/>
    <line x1="30" y1="30" x2="34" y2="34" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.5"/>
    <line x1="34" y1="30" x2="30" y2="34" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.5"/>
    {/* Start circle BL */}
    <circle cx="14" cy="40" r="3" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.2"/>
    {/* End circle TR */}
    <circle cx="36" cy="16" r="3" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.2"/>
    {/* Winding S-curve */}
    <path d="M 14 37 C 24 37 24 25 14 25 C 14 18 24 18 33 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none"/>
    <polyline points="30,13 33,16 30,19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ConstructionManagementIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none" className="w-12 h-12" aria-hidden="true">
    {/* Crown rib — centre top tab */}
    <path d="M20 20V10a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    {/* Left dome arc */}
    <path d="M8 30v-6a12 12 0 0 1 12-12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    {/* Right dome arc */}
    <path d="M28 12a12 12 0 0 1 12 12v6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    {/* Brim */}
    <rect x="3" y="30" width="42" height="8" rx="2" stroke="currentColor" strokeWidth="2.5" fill="currentColor" fillOpacity="0.1"/>
  </svg>
);

const ContractAdminIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none" className="w-12 h-12" aria-hidden="true">
    <path d="M10 6h20l10 10v28a2 2 0 01-2 2H10a2 2 0 01-2-2V8a2 2 0 012-2z" stroke="currentColor" strokeWidth="2.5" fill="none"/>
    <path d="M30 6v10h10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    <line x1="14" y1="22" x2="34" y2="22" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    <line x1="14" y1="30" x2="34" y2="30" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    <line x1="14" y1="38" x2="24" y2="38" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
  </svg>
);

const ContractManagementIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none" className="w-12 h-12" aria-hidden="true">
    {/* Document */}
    <rect x="6" y="4" width="24" height="34" rx="2" stroke="currentColor" strokeWidth="2.5" fill="currentColor" fillOpacity="0.06"/>
    <line x1="11" y1="14" x2="26" y2="14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <line x1="11" y1="20" x2="26" y2="20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <line x1="11" y1="26" x2="20" y2="26" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    {/* Signature line */}
    <line x1="11" y1="32" x2="26" y2="32" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.4" strokeLinecap="round"/>
    {/* Pen body */}
    <path d="M 43 9 L 46 12 L 28 30 L 25 27 Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" fill="currentColor" fillOpacity="0.1"/>
    {/* Nib */}
    <path d="M 25 27 L 28 30 L 22 34 Z" fill="currentColor" stroke="none"/>
    {/* Signature scribble */}
    <path d="M 13 32 Q 16 29 18 32 Q 20 35 22 32" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
  </svg>
);

const QuantitySurveyingIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none" className="w-12 h-12" aria-hidden="true">
    <rect x="4" y="30" width="8" height="12" rx="1.5" stroke="currentColor" strokeWidth="2.5" fill="none"/>
    <rect x="16" y="20" width="8" height="22" rx="1.5" stroke="currentColor" strokeWidth="2.5" fill="none"/>
    <rect x="28" y="12" width="8" height="30" rx="1.5" stroke="currentColor" strokeWidth="2.5" fill="none"/>
    <rect x="40" y="6" width="4" height="36" rx="1.5" stroke="currentColor" strokeWidth="2.5" fill="none"/>
    <line x1="2" y1="44" x2="46" y2="44" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
  </svg>
);

const CommercialManagementIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none" className="w-12 h-12" aria-hidden="true">
    {/* Short vertical ticks above and below the S */}
    <path d="M24 4v8m0 24v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    {/* S-curve — widened to fill 48×48 viewBox */}
    <path d="M40 15a6 6 0 0 0-5-3h-22a6 6 0 0 0 0 12h22a6 6 0 0 1 0 12h-22a6 6 0 0 1-5-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none"/>
  </svg>
);

const RiskManagementIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none" className="w-12 h-12" aria-hidden="true">
    <path d="M24 4 L42 12 V26 C42 35 34 42 24 46 C14 42 6 35 6 26 V12 Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" fill="none"/>
    <line x1="24" y1="18" x2="24" y2="28" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    <circle cx="24" cy="34" r="1.5" fill="currentColor"/>
  </svg>
);

const DisputeResolutionIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none" className="w-12 h-12" aria-hidden="true">
    <line x1="24" y1="6" x2="24" y2="44" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    <line x1="8" y1="14" x2="40" y2="14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M8 14 L4 26 C4 30 12 30 12 26 L8 14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    <path d="M40 14 L36 26 C36 30 44 30 44 26 L40 14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    <line x1="16" y1="44" x2="32" y2="44" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
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
    description: 'Proven track record of delivering complex projects in challenging environments, including multidisciplinary project execution in operational nuclear and petrochemical facilities. We manage main contractor and subcontractor activities, including outage and shutdown construction.',
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
    description: 'Comprehensive contract lifecycle support including advisory on compliance, risk allocation, payment certification, variation management, and extension of time assessments across all major procurement forms.',
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
              We have extensive experience in various contract forms including NEC3, NEC4, FIDIC, GCC, JBCC and deploy services in project management, engineering management, planning, construction management, quantity surveying, cost, value and risk management, contract and commercial management, dispute resolution, adjudication and arbitration, with a proven track record of delivering complex major EPC projects.
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
