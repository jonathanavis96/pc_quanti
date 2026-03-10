import React from 'react';
import { Card, Container, LinkButton } from '@/src/components';
import Link from 'next/link';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PC quanti - Services",
  description: "Engineering and construction management consultancy with extensive experience in NEC3, NEC4, FIDIC, GCC, JBCC. Project management, quantity surveying, cost and value management, risk management, contract and claims management, dispute resolution, adjudication and arbitration.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "PC quanti - Services",
    description: "Engineering and construction management consultancy with extensive experience in NEC3, NEC4, FIDIC, GCC, JBCC. Project management, quantity surveying, planning, construction management, dispute resolution, adjudication and arbitration.",
    url: "/services",
  },
};

const services = [
  {
    slug: 'project-management',
    title: 'Project Management',
    description: 'Turnkey project management services from initial design and engineering development through on-site execution and project close-out, integrating schedule development, risk management, change control and stakeholder interface management.',
    icon: '📋',
  },
  {
    slug: 'quantity-surveying',
    title: 'Quantity Surveying',
    description: 'Detailed quantity surveying from variation analysis and compensation event quotation building or assessment to managing the payment assessment process, ensuring value is maintained across claims, disputes and arbitrations.',
    icon: '📊',
  },
  {
    slug: 'contract-administration',
    title: 'Contract Administration',
    description: 'Proper and effective contract administration with concise but comprehensive written project communication, serving required notices on time and properly documenting progress of the works under the contract form.',
    icon: '📝',
  },
  {
    slug: 'claims-management',
    title: 'Claims Management',
    description: 'Specialist advice and representation in construction and engineering disputes across all formal and alternative dispute resolution forums, including adjudication and arbitration proceedings.',
    icon: '⚖️',
  },
  {
    slug: 'project-controls',
    title: 'Project Controls',
    description: 'Structured and strategic planning services on various forms of contract, supporting both clients and contractors in developing project controls including delay analysis and extension of time claims.',
    icon: '🎯',
  },
  {
    slug: 'risk-management',
    title: 'Risk Management',
    description: 'Specialised risk management services helping developers, contractors and project stakeholders identify, assess and mitigate potential risks before they impact timelines, budgets or compliance.',
    icon: '⚠️',
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
              We have extensive experience in various contract forms including NEC3, NEC4, FIDIC, GCC, JBCC and deploy services in project management, engineering management, planning, construction management, Quantity Surveying, cost, value and risk management, planning, contract and claims management, dispute resolution, adjudication and arbitration, with a proven track record of delivering complex major EPC projects.
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
                    <div className="text-5xl flex-shrink-0" aria-hidden="true">
                      {service.icon}
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
