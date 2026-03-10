import React from 'react';
import { Card } from './Card';
import { Container } from './Container';
import { LinkButton } from './LinkButton';

const services = [
  {
    title: 'Project Management',
    description:
      'Turnkey project management from initial design and engineering through on-site execution and close-out, integrating schedule development, risk management and change control to manage time, cost and scope delivery.',
    href: '/services/project-management',
  },
  {
    title: 'Quantity Surveying',
    description:
      'Detailed quantity surveying from variation analysis and compensation event assessment to managing payment processes — dovetailing with contract management to ensure value is maintained.',
    href: '/services/quantity-surveying',
  },
  {
    title: 'Contract Administration',
    description:
      'Comprehensive written project communication, timely notices, and proper documentation of progress and commercial administration under NEC, FIDIC, GCC and JBCC contract forms.',
    href: '/services/contract-administration',
  },
  {
    title: 'Claims & Dispute Resolution',
    description:
      'Specialist advice and representation across all dispute resolution forums, including claims preparation, adjudication, arbitration, and negotiation to achieve efficient and sustainable outcomes.',
    href: '/services/claims-management',
  },
  {
    title: 'Planning & Project Controls',
    description:
      'Strategic planning and project controls on NEC, FIDIC and GCC contracts — including critical path scheduling, earned value management, delay analysis and look-ahead programmes.',
    href: '/services/project-controls',
  },
  {
    title: 'Risk Management',
    description:
      'Specialised risk management helping clients identify, assess and mitigate potential risks before they impact timelines, budgets or compliance — ensuring proactive decision-making and improved project certainty.',
    href: '/services/risk-management',
  },
];

export function ServicesGrid() {
  return (
    <section className="py-16 md:py-24 bg-pc-neutral-50">
      <Container maxWidth="lg">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-pc-neutral-500">
            Services
          </p>
          <h2 className="text-3xl font-bold text-pc-neutral-900 mt-3 mb-4">
            Professional services across the full project life cycle
          </h2>
          <p className="text-lg text-pc-neutral-600 max-w-2xl mx-auto">
            Extensive experience in NEC3, NEC4, FIDIC, GCC and JBCC contracts with a proven track record of delivering complex major EPC projects.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card key={service.title} variant="outlined" padding="lg" className="flex h-full flex-col">
              <div className="mb-4 h-10 w-10 rounded-full border border-pc-gold/20 bg-pc-gold/10" aria-hidden />
              <h3 className="text-xl font-semibold text-pc-neutral-900 mb-3">{service.title}</h3>
              <p className="text-pc-neutral-600 mb-6 flex-1">{service.description}</p>
              <LinkButton href={service.href} variant="outline" size="sm" className="self-start">
                Learn more
              </LinkButton>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
