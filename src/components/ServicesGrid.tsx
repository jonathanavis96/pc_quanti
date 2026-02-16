import React from 'react';
import { Card } from './Card';
import { Container } from './Container';
import { LinkButton } from './LinkButton';

const services = [
  {
    title: 'Project Management',
    description:
      'Lead complex programmes from initiation through closeout with rigorous governance and delivery focus.',
    href: '/services/project-management',
  },
  {
    title: 'Quantity Surveying',
    description:
      'Deliver cost certainty through robust estimating, commercial management, and cost control.',
    href: '/services/quantity-surveying',
  },
  {
    title: 'Contract Administration',
    description:
      'Ensure compliance and control risk with disciplined contract management and stakeholder alignment.',
    href: '/services/contract-administration',
  },
  {
    title: 'Claims Management',
    description:
      'Protect commercial outcomes with expert claims preparation, review, and negotiation support.',
    href: '/services/claims-management',
  },
  {
    title: 'Project Controls',
    description:
      'Keep projects on schedule and under control through integrated planning, tracking, and performance reporting.',
    href: '/services/project-controls',
  },
  {
    title: 'Risk Management',
    description:
      'Identify and mitigate project risks before they impact delivery — protecting timelines, budgets, and outcomes.',
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
            Focused delivery support across the project lifecycle
          </h2>
          <p className="text-lg text-pc-neutral-600 max-w-2xl mx-auto">
            Specialist support for complex projects where failure isn&apos;t an option.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card key={service.title} variant="outlined" padding="lg" className="flex h-full flex-col">
              <div className="mb-4 h-10 w-10 rounded-full border border-pc-blue/20 bg-pc-blue/10" aria-hidden />
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
