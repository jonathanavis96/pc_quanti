import React from 'react';
import { Container, Card, LinkButton } from '@/src/components';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Commercial Management — Procurement, Estimating & Value Engineering",
  description: "Full project commercial oversight covering procurement, estimating, tender analysis, cost analysis, risk management, design development, and value engineering to protect and enhance commercial outcomes across the project life cycle.",
  alternates: {
    canonical: "/services/commercial-management",
  },
  openGraph: {
    title: "Commercial Management | PC Quanti",
    description: "Expert commercial management for engineering and construction projects — procurement, estimating, cost analysis, value engineering, and full project commercial oversight.",
    url: "/services/commercial-management",
  },
};

export default function CommercialManagementPage() {
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
              Commercial Management
            </h1>
            <p className="text-xl md:text-2xl text-pc-neutral-600 max-w-3xl">
              Full project commercial oversight — from procurement and estimating through tender analysis, cost control, and value engineering — to protect and enhance commercial outcomes.
            </p>
          </div>

          {/* Overview */}
          <div className="mb-12">
            <Card variant="elevated">
              <h2 className="text-2xl font-semibold text-pc-neutral-900 mb-4">
                Overview
              </h2>
              <p className="text-pc-neutral-600 leading-relaxed mb-4">
                PC Quanti provides full project commercial management services covering the complete commercial life cycle of engineering and construction projects. Our commercial management team delivers integrated oversight across procurement strategy, estimating, tender analysis, cost control, risk management, and value engineering — providing clients with complete commercial visibility and control.
              </p>
              <p className="text-pc-neutral-600 leading-relaxed mb-4">
                We work alongside project and construction management teams to align commercial strategy with project delivery objectives, ensuring that cost, value, and risk are actively managed from feasibility through to project close-out.
              </p>
              <p className="text-pc-neutral-600 leading-relaxed">
                Our approach combines technical rigour with commercial pragmatism — identifying opportunities to optimise value while protecting against commercial exposure, and ensuring that all commercial decisions are made with full awareness of contractual and financial implications.
              </p>
            </Card>
          </div>

          {/* Service Image */}
          <div className="relative w-full h-80 md:h-96 rounded-lg overflow-hidden mb-12">
            <Image
              src="/services/commercial-management.png"
              alt="Commercial management and cost control"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 1088px"
            />
          </div>

          {/* Typical Deliverables */}
          <div className="mb-12">
            <h2 className="text-3xl font-semibold text-pc-neutral-900 mb-6">
              Typical Deliverables
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <h3 className="text-xl font-semibold text-pc-neutral-900 mb-3">
                  Procurement &amp; Estimating
                </h3>
                <ul className="space-y-2 text-pc-neutral-600">
                  <li>• Procurement strategy development</li>
                  <li>• Cost estimating and budget preparation</li>
                  <li>• Tender document preparation and management</li>
                  <li>• Tender analysis and contractor evaluation</li>
                </ul>
              </Card>

              <Card>
                <h3 className="text-xl font-semibold text-pc-neutral-900 mb-3">
                  Cost &amp; Value Management
                </h3>
                <ul className="space-y-2 text-pc-neutral-600">
                  <li>• Cost planning and cost-in-use analysis</li>
                  <li>• Value engineering and design optimisation</li>
                  <li>• Cost benchmarking and market analysis</li>
                  <li>• Life cycle cost assessment</li>
                </ul>
              </Card>

              <Card>
                <h3 className="text-xl font-semibold text-pc-neutral-900 mb-3">
                  Risk &amp; Commercial Oversight
                </h3>
                <ul className="space-y-2 text-pc-neutral-600">
                  <li>• Commercial risk identification and assessment</li>
                  <li>• Risk register development and management</li>
                  <li>• Commercial reporting and forecasting</li>
                  <li>• Cash flow analysis and management</li>
                </ul>
              </Card>

              <Card>
                <h3 className="text-xl font-semibold text-pc-neutral-900 mb-3">
                  Design Development Support
                </h3>
                <ul className="space-y-2 text-pc-neutral-600">
                  <li>• Concept and feasibility cost estimates</li>
                  <li>• Design development cost monitoring</li>
                  <li>• Elemental cost plans at each design stage</li>
                  <li>• Cost-in-use and whole life cost analysis</li>
                </ul>
              </Card>
            </div>
          </div>

          {/* Key Capabilities */}
          <div className="mb-12">
            <h2 className="text-3xl font-semibold text-pc-neutral-900 mb-6">
              Key Capabilities
            </h2>
            <Card variant="elevated">
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-pc-neutral-900 mb-3">
                    End-to-End Oversight
                  </h3>
                  <p className="text-pc-neutral-600">
                    Integrated commercial management from project inception through to close-out — providing continuous commercial visibility and control across all phases of the project life cycle.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-pc-neutral-900 mb-3">
                    Value Engineering
                  </h3>
                  <p className="text-pc-neutral-600">
                    Systematic identification of value engineering opportunities during design development and procurement, delivering optimal outcomes without compromising technical requirements or project objectives.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-pc-neutral-900 mb-3">
                    Sector Experience
                  </h3>
                  <p className="text-pc-neutral-600">
                    Commercial management expertise across nuclear, petrochemical, mining, and major infrastructure sectors — with deep knowledge of sector-specific commercial drivers and risk profiles.
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
              <Link href="/services/quantity-surveying" className="p-4 border border-pc-neutral-200 rounded-lg hover:border-pc-gold transition-colors focus:outline-none focus:ring-2 focus:ring-pc-gold focus:ring-offset-2">
                <h3 className="font-semibold text-pc-neutral-900 mb-2">Quantity Surveying →</h3>
                <p className="text-sm text-pc-neutral-600">Detailed cost management and payment process management</p>
              </Link>
              <Link href="/services/contract-management" className="p-4 border border-pc-neutral-200 rounded-lg hover:border-pc-gold transition-colors focus:outline-none focus:ring-2 focus:ring-pc-gold focus:ring-offset-2">
                <h3 className="font-semibold text-pc-neutral-900 mb-2">Contract Management →</h3>
                <p className="text-sm text-pc-neutral-600">Contract lifecycle support and compliance management</p>
              </Link>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center p-8 bg-pc-neutral-50 rounded-lg">
            <h2 className="text-2xl font-semibold text-pc-neutral-900 mb-4">
              Ready to Discuss Your Commercial Management Needs?
            </h2>
            <p className="text-pc-neutral-600 mb-6 max-w-2xl mx-auto">
              Contact PC Quanti to explore how our commercial management services can protect and optimise the commercial outcomes of your next project.
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
