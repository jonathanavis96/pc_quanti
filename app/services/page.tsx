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
    <path d="M8 38 A18 18 0 1 1 40 38" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
    <line x1="24" y1="24" x2="32" y2="14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    <circle cx="24" cy="24" r="3" stroke="currentColor" strokeWidth="2.5" fill="none"/>
    <line x1="10" y1="38" x2="14" y2="38" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    <line x1="34" y1="38" x2="38" y2="38" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    <line x1="24" y1="10" x2="24" y2="14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
  </svg>
);

const ConstructionManagementIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none" className="w-12 h-12" aria-hidden="true">
    <path d="M10 30 Q10 16 24 16 Q38 16 38 30" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
    <line x1="6" y1="30" x2="42" y2="30" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    <line x1="14" y1="30" x2="14" y2="36" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    <line x1="34" y1="30" x2="34" y2="36" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    <line x1="14" y1="36" x2="34" y2="36" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    <line x1="24" y1="16" x2="24" y2="10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    <line x1="20" y1="10" x2="28" y2="10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
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
    <rect x="10" y="6" width="28" height="36" rx="3" stroke="currentColor" strokeWidth="2.5" fill="none"/>
    <rect x="16" y="2" width="16" height="10" rx="2" stroke="currentColor" strokeWidth="2.5" fill="none"/>
    <line x1="16" y1="20" x2="32" y2="20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    <line x1="16" y1="27" x2="32" y2="27" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    <line x1="16" y1="34" x2="24" y2="34" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    <polyline points="26,34 29,37 34,30" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
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
    <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="2.5" fill="none"/>
    <line x1="24" y1="12" x2="24" y2="16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    <line x1="24" y1="32" x2="24" y2="36" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M18 20 C18 17 30 17 30 22 C30 27 18 27 18 32 C18 37 30 37 30 34" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
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
    description: "Engineering and construction management consultancy with extensive experience in NEC3, NEC4, FIDIC, GCC, JBCC. Project management, planning, construction management, dispute resolution, adjudication and arbitration.",
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
    description: 'Proven track record of delivering complex projects in challenging environments, including multidisciplinary execution in operational nuclear and petrochemical plants. We manage main contractor and subcontractor activities, including outage and shutdown construction.',
    Icon: ConstructionManagementIcon,
  },
  {
    slug: 'contract-administration',
    title: 'Contract Administration',
    description: 'Proper and effective contract administration with concise but comprehensive written project communication, serving required notices on time and properly documenting progress of the works under the contract form.',
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
    description: 'Detailed quantity surveying from variation analysis and compensation event quotation building or assessment to managing the payment assessment process, ensuring value is maintained across claims, disputes and arbitrations.',
    Icon: QuantitySurveyingIcon,
  },
  {
    slug: 'commercial-management',
    title: 'Commercial Management',
    description: 'Full project commercial oversight covering procurement, estimating, tender analysis, cost analysis, risk management, design development, and value engineering to protect and enhance commercial outcomes across the project life cycle.',
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
