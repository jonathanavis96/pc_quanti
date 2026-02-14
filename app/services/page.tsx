import React from 'react';
import { Card, Container, Button } from '@/src/components';
import Link from 'next/link';

const services = [
  {
    slug: 'project-management',
    title: 'Project Management',
    description: 'End-to-end project delivery for nuclear, mining, and industrial sectors. From feasibility through commissioning.',
    icon: '📋',
  },
  {
    slug: 'quantity-surveying',
    title: 'Quantity Surveying',
    description: 'Cost planning, procurement support, and commercial management to keep your project on budget.',
    icon: '📊',
  },
  {
    slug: 'contract-administration',
    title: 'Contract Administration',
    description: 'Expert contract management, variations, and change control to protect your interests.',
    icon: '📝',
  },
  {
    slug: 'claims-management',
    title: 'Claims Management',
    description: 'Dispute resolution, delay analysis, and claims preparation backed by nuclear and industrial experience.',
    icon: '⚖️',
  },
  {
    slug: 'project-controls',
    title: 'Project Controls',
    description: 'Scheduling, cost control, and risk management to deliver certainty in complex environments.',
    icon: '🎯',
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Container>
        <div className="py-16 md:py-24">
          {/* Header */}
          <div className="mb-12 md:mb-16 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-pc-neutral-900 mb-4">
              Our Services
            </h1>
            <p className="text-lg md:text-xl text-pc-neutral-600 max-w-3xl mx-auto">
              Specialist project management consultancy for nuclear, mining, and industrial sectors.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid gap-6 md:gap-8 mb-12">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="block group"
              >
                <Card variant="elevated" className="hover:border-pc-blue transition-all duration-200">
                  <div className="flex items-start gap-6">
                    <div className="text-5xl flex-shrink-0" aria-hidden="true">
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-semibold text-pc-neutral-900 mb-3 group-hover:text-pc-blue transition-colors">
                        {service.title}
                      </h2>
                      <p className="text-pc-neutral-600 leading-relaxed">
                        {service.description}
                      </p>
                      <div className="mt-4 text-pc-blue font-semibold group-hover:underline">
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
              Ready to discuss your project?
            </h2>
            <p className="text-pc-neutral-600 mb-6 max-w-2xl mx-auto">
              Get in touch to explore how PC Quanti can support your next project with lean, expert consultancy.
            </p>
            <Link href="/contact">
              <Button size="lg">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </main>
  );
}
