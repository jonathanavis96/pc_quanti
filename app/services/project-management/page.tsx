import React from 'react';
import { Container, Card, LinkButton } from '@/src/components';
import Link from 'next/link';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Project Management",
  description: "Turnkey project management services across the full project life cycle — from initial design and engineering development through on-site execution and project close-out.",
  alternates: {
    canonical: "/services/project-management",
  },
  openGraph: {
    title: "Project Management | PC Quanti",
    description: "Turnkey project management services across the full project life cycle — from initial design and engineering development through on-site execution and project close-out.",
    url: "/services/project-management",
  },
};

export default function ProjectManagementPage() {
  return (
    <main className="min-h-screen bg-white">
      <Container>
        <div className="py-16 md:py-24">
          {/* Header */}
          <div className="mb-12 md:mb-16">
            <Link 
              href="/services" 
              className="text-pc-gold hover:underline mb-4 inline-block focus:outline-none focus:ring-2 focus:ring-pc-gold focus:ring-offset-2 rounded-sm"
            >
              ← Back to Services
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-pc-neutral-900 mb-6">
              Project Management
            </h1>
            <p className="text-xl md:text-2xl text-pc-neutral-600 max-w-3xl">
              Turnkey project management services to suit your project needs — from initial design and engineering development through on-site execution and project close-out.
            </p>
          </div>

          {/* Overview */}
          <div className="mb-12">
            <Card variant="elevated">
              <h2 className="text-2xl font-semibold text-pc-neutral-900 mb-4">
                Overview
              </h2>
              <p className="text-pc-neutral-600 leading-relaxed mb-4">
                PC Quanti provide turnkey project management services to suit your project needs, from initial design and engineering development phase, through on-site execution and project close-out phases. We can also provide services to existing projects by bolstering your existing team, where we guarantee that we will add value to your project team with our expertise.
              </p>
              <p className="text-pc-neutral-600 leading-relaxed mb-4">
                We implement programme management frameworks, integrating schedule development, risk management, change control and key client and stakeholder risks and interface management to manage time, cost and scope delivery, ensuring issue resolution and alignment between project objectives and contractual obligations.
              </p>
              <p className="text-pc-neutral-600 leading-relaxed">
                Whether you require management of the main contractor work or certain subcontractors, or require a client-side team to manage the project for you, we can provide you with the necessary services. Our approach combines deep technical expertise with a pragmatic delivery focus across power generation, oil and gas, and major infrastructure developments.
              </p>
            </Card>
          </div>

          {/* Typical Deliverables */}
          <div className="mb-12">
            <h2 className="text-3xl font-semibold text-pc-neutral-900 mb-6">
              Typical Deliverables
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <h3 className="text-xl font-semibold text-pc-neutral-900 mb-3">
                  Project Planning & Setup
                </h3>
                <ul className="space-y-2 text-pc-neutral-600">
                  <li>• Project execution plans</li>
                  <li>• Governance frameworks</li>
                  <li>• Stakeholder engagement strategies</li>
                  <li>• Risk registers and mitigation plans</li>
                </ul>
              </Card>

              <Card>
                <h3 className="text-xl font-semibold text-pc-neutral-900 mb-3">
                  Delivery & Controls
                </h3>
                <ul className="space-y-2 text-pc-neutral-600">
                  <li>• Progress monitoring and reporting</li>
                  <li>• Schedule and cost management</li>
                  <li>• Change control processes</li>
                  <li>• Quality assurance oversight</li>
                </ul>
              </Card>

              <Card>
                <h3 className="text-xl font-semibold text-pc-neutral-900 mb-3">
                  Commissioning Support
                </h3>
                <ul className="space-y-2 text-pc-neutral-600">
                  <li>• Commissioning strategy and plans</li>
                  <li>• Systems integration coordination</li>
                  <li>• Handover documentation</li>
                  <li>• Lessons learned capture</li>
                </ul>
              </Card>

              <Card>
                <h3 className="text-xl font-semibold text-pc-neutral-900 mb-3">
                  Compliance & Reporting
                </h3>
                <ul className="space-y-2 text-pc-neutral-600">
                  <li>• Regulatory compliance management</li>
                  <li>• Board and executive reporting</li>
                  <li>• Audit support and documentation</li>
                  <li>• Contractual milestone tracking</li>
                </ul>
              </Card>
            </div>
          </div>

          {/* Sectors Served */}
          <div className="mb-12">
            <h2 className="text-3xl font-semibold text-pc-neutral-900 mb-6">
              Sectors Served
            </h2>
            <Card variant="elevated">
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-pc-neutral-900 mb-3">
                    Nuclear &amp; Power Generation
                  </h3>
                  <p className="text-pc-neutral-600">
                    Nuclear and coal-fired power generation facilities with deep understanding of regulatory requirements, safety-critical environments, and complex EPC delivery.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-pc-neutral-900 mb-3">
                    Oil &amp; Gas
                  </h3>
                  <p className="text-pc-neutral-600">
                    Petrochemical plants and oil and gas installations requiring rigorous project controls, stakeholder management, and operational readiness.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-pc-neutral-900 mb-3">
                    Major Infrastructure
                  </h3>
                  <p className="text-pc-neutral-600">
                    Large-scale infrastructure developments including airport projects and civil structures, delivered locally in South Africa, the United Kingdom and other international markets.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Related Services */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-pc-neutral-900 mb-6">
              Related Services
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/services/project-controls" className="p-4 border border-pc-neutral-200 rounded-lg hover:border-pc-gold transition-colors focus:outline-none focus:ring-2 focus:ring-pc-gold focus:ring-offset-2">
                <h3 className="font-semibold text-pc-neutral-900 mb-2">Project Controls →</h3>
                <p className="text-sm text-pc-neutral-600">Scheduling, cost control, and risk management</p>
              </Link>
              <Link href="/services/quantity-surveying" className="p-4 border border-pc-neutral-200 rounded-lg hover:border-pc-gold transition-colors focus:outline-none focus:ring-2 focus:ring-pc-gold focus:ring-offset-2">
                <h3 className="font-semibold text-pc-neutral-900 mb-2">Quantity Surveying →</h3>
                <p className="text-sm text-pc-neutral-600">Cost planning and commercial management</p>
              </Link>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center p-8 bg-pc-neutral-50 rounded-lg">
            <h2 className="text-2xl font-semibold text-pc-neutral-900 mb-4">
              Ready to Discuss Your Project Management Needs?
            </h2>
            <p className="text-pc-neutral-600 mb-6 max-w-2xl mx-auto">
              Get in touch to explore how PC Quanti can deliver expert project management for your next engineering or construction project.
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
