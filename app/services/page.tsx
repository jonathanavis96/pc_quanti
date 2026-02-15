import React from 'react';
import { Card, Container, Button } from '@/src/components';
import Link from 'next/link';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services",
  description: "Specialist UK nuclear and industrial PM consultancy. Expert Project Management, Quantity Surveying, Contract Administration, Claims Management, and Project Controls for mining, infrastructure, and energy sectors.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Our Services | PC Quanti",
    description: "Specialist UK nuclear and industrial PM consultancy. Expert Project Management, Quantity Surveying, Contract Administration, Claims Management, and Project Controls for mining, infrastructure, and energy sectors.",
    url: "/services",
  },
};

const services = [
  {
    slug: 'project-management',
    title: 'Project Management',
    description: 'Lead complex programmes from initiation through closeout with rigorous governance and delivery focus.',
    icon: '📋',
  },
  {
    slug: 'quantity-surveying',
    title: 'Quantity Surveying',
    description: 'Deliver cost certainty through robust estimating, commercial management, and cost control.',
    icon: '📊',
  },
  {
    slug: 'contract-administration',
    title: 'Contract Administration',
    description: 'Ensure compliance and control risk with disciplined contract management and stakeholder alignment.',
    icon: '📝',
  },
  {
    slug: 'claims-management',
    title: 'Claims Management',
    description: 'Protect commercial outcomes with expert claims preparation, review, and negotiation support.',
    icon: '⚖️',
  },
  {
    slug: 'project-controls',
    title: 'Project Controls',
    description: 'Keep projects on schedule and under control through integrated planning, tracking, and performance reporting.',
    icon: '🎯',
  },
  {
    slug: 'risk-management',
    title: 'Risk Management',
    description: 'Identify and mitigate project risks before they impact delivery — protecting timelines, budgets, and outcomes.',
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
              className="text-pc-blue hover:underline mb-4 inline-block focus:outline-none focus:ring-2 focus:ring-pc-blue focus:ring-offset-2 rounded-sm"
            >
              ← Back to Home
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-pc-neutral-900 mb-4">
              Our Services
            </h1>
            <p className="text-lg md:text-xl text-pc-neutral-600 max-w-3xl mx-auto">
              Specialist support for complex projects where failure isn't an option.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid gap-6 md:gap-8 mb-12">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="block group focus:outline-none focus:ring-2 focus:ring-pc-blue focus:ring-offset-2 rounded-lg"
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
