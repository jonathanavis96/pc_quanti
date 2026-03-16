import React from 'react';
import { Container, Card, Button } from '@/src/components';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quantity Surveying",
  description: "Expert cost management, procurement support, and commercial oversight to keep your project on budget. Specialist quantity surveying for nuclear, mining, and industrial sectors.",
  alternates: {
    canonical: "/services/quantity-surveying",
  },
  openGraph: {
    title: "Quantity Surveying | PC Quanti",
    description: "Expert cost management, procurement support, and commercial oversight for nuclear, mining, and industrial projects.",
    url: "/services/quantity-surveying",
  },
};

export default function QuantitySurveyingPage() {
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
              Quantity Surveying
            </h1>
            <p className="text-xl md:text-2xl text-pc-neutral-600 max-w-3xl">
              Detailed quantity surveying from measuring and quantification, bill of quantities preparation, and variations analysis to claims management and commercial oversight — ensuring value is maintained across complex engineering and construction projects.
            </p>
          </div>

          {/* Overview */}
          <div className="mb-12">
            <Card variant="elevated">
              <h2 className="text-2xl font-semibold text-pc-neutral-900 mb-4">
                Overview
              </h2>
              <p className="text-pc-neutral-600 leading-relaxed mb-4">
                Our quantity surveying services encompass detailed measuring and quantification, bill of quantities preparation, performance and variations analysis, and claims management. From compensation event assessment through to certification and payment management, our quantity surveying dovetails with the work in progress and contract management to ensure value is maintained throughout the project lifecycle.
              </p>
              <p className="text-pc-neutral-600 leading-relaxed mb-4">
                We support dispute and arbitration proceedings with rigorous commercial evidence and contractual review, ensuring defensible positions are maintained at every stage. Our team brings disciplined cost control and commercial oversight to every engagement, with accurate measurement, transparent reporting, and enforceable commercial positions.
              </p>
              <p className="text-pc-neutral-600 leading-relaxed">
                We provide project commercial monitoring and risk management alongside full commercial management of projects to maximise value. Our services include project cost and value management, project cost reporting, and forecasting, as well as procurement planning and execution, estimating, tendering and tender analysis, award management, and overall coordination of project resources to achieve the commercial success of the project.
              </p>
            </Card>
          </div>

          {/* Service Image */}
          <div className="relative w-full h-80 md:h-96 rounded-lg overflow-hidden mb-12">
            <Image
              src="/services/quantity-surveying.webp"
              alt=""
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
                  Measuring & Quantification
                </h3>
                <ul className="space-y-2 text-pc-neutral-600">
                  <li>• Detailed measuring, quantification and re-measuring</li>
                  <li>• Bill of quantities (BoQ) preparation, lump sum quantities</li>
                  <li>• Pre-tender cost estimates</li>
                  <li>• Budget forecasting and tracking</li>
                </ul>
              </Card>

              <Card>
                <h3 className="text-xl font-semibold text-pc-neutral-900 mb-3">
                  Procurement Support
                </h3>
                <ul className="space-y-2 text-pc-neutral-600">
                  <li>• Tender documentation</li>
                  <li>• Bid evaluation and analysis</li>
                  <li>• Negotiation support</li>
                  <li>• Contract award recommendations</li>
                </ul>
              </Card>

              <Card>
                <h3 className="text-xl font-semibold text-pc-neutral-900 mb-3">
                  Performance & Variations Analysis
                </h3>
                <ul className="space-y-2 text-pc-neutral-600">
                  <li>• Performance and variations analysis</li>
                  <li>• Interim payment valuations</li>
                  <li>• Contractual review</li>
                  <li>• Project cost reporting and forecasting</li>
                </ul>
              </Card>

              <Card>
                <h3 className="text-xl font-semibold text-pc-neutral-900 mb-3">
                  Claims & Dispute Support
                </h3>
                <ul className="space-y-2 text-pc-neutral-600">
                  <li>• Claims management and assessment</li>
                  <li>• Supporting dispute and arbitration proceedings</li>
                  <li>• Final account preparation and negotiation</li>
                  <li>• Financial close-out documentation</li>
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
                    Cost & Value Management
                  </h3>
                  <p className="text-pc-neutral-600">
                    Project cost and value management, project cost reporting, and forecasting throughout the project lifecycle — from initial estimates through to final account settlement and commercial close-out.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-pc-neutral-900 mb-3">
                    Contractual Review & Support
                  </h3>
                  <p className="text-pc-neutral-600">
                    Expert contractual review and support for NEC, FIDIC, and bespoke contract forms, including variation management, claims management, and dispute avoidance strategies.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-pc-neutral-900 mb-3">
                    Commercial Monitoring & Risk Management
                  </h3>
                  <p className="text-pc-neutral-600">
                    Project commercial monitoring and risk management grounded in practical understanding of industrial project delivery and stakeholder dynamics.
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
              <Link href="/services/contract-administration" className="p-4 border border-pc-neutral-200 rounded-lg hover:border-pc-gold transition-colors focus:outline-none focus:ring-2 focus:ring-pc-gold focus:ring-offset-2">
                <h3 className="font-semibold text-pc-neutral-900 mb-2">Contract Administration →</h3>
                <p className="text-sm text-pc-neutral-600">Expert contract management and compliance services</p>
              </Link>
              <Link href="/services/planning" className="p-4 border border-pc-neutral-200 rounded-lg hover:border-pc-gold transition-colors focus:outline-none focus:ring-2 focus:ring-pc-gold focus:ring-offset-2">
                <h3 className="font-semibold text-pc-neutral-900 mb-2">Planning →</h3>
                <p className="text-sm text-pc-neutral-600">Scheduling, cost control, and risk management</p>
              </Link>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center p-8 bg-pc-neutral-50 rounded-lg">
            <h2 className="text-2xl font-semibold text-pc-neutral-900 mb-4">
              Need Expert Quantity Surveying Support?
            </h2>
            <p className="text-pc-neutral-600 mb-6 max-w-2xl mx-auto">
              Contact PC Quanti to discuss how we can help control costs and manage contracts on your next industrial project.
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
