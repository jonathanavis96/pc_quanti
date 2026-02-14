import React from 'react';
import { Container, Card, Button } from '@/src/components';
import Link from 'next/link';

export default function QuantitySurveyingPage() {
  return (
    <main className="min-h-screen bg-white">
      <Container>
        <div className="py-16 md:py-24">
          {/* Header */}
          <div className="mb-12 md:mb-16">
            <Link 
              href="/services" 
              className="text-pc-blue hover:underline mb-4 inline-block"
            >
              ← Back to Services
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-pc-neutral-900 mb-6">
              Quantity Surveying
            </h1>
            <p className="text-xl md:text-2xl text-pc-neutral-600 max-w-3xl">
              Expert cost management and contract support for nuclear, mining, and industrial projects. From procurement through final account settlement.
            </p>
          </div>

          {/* Overview */}
          <div className="mb-12">
            <Card variant="elevated">
              <h2 className="text-2xl font-semibold text-pc-neutral-900 mb-4">
                Overview
              </h2>
              <p className="text-pc-neutral-600 leading-relaxed mb-4">
                PC Quanti provides specialist quantity surveying services for complex industrial projects, with particular expertise in nuclear and mining sectors. We deliver rigorous cost control, procurement support, and contract administration without the bloated overhead of large consultancies.
              </p>
              <p className="text-pc-neutral-600 leading-relaxed">
                Our approach combines deep technical understanding of industrial environments with practical commercial acumen. Whether you're managing tender processes, controlling project costs, or negotiating final accounts, we bring clarity and precision to every engagement.
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
                  Cost Estimation & Planning
                </h3>
                <ul className="space-y-2 text-pc-neutral-600">
                  <li>• Pre-tender cost estimates</li>
                  <li>• Bill of quantities preparation</li>
                  <li>• Cost-benefit analysis</li>
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
                  Contract Administration
                </h3>
                <ul className="space-y-2 text-pc-neutral-600">
                  <li>• Interim payment valuations</li>
                  <li>• Variation assessment and pricing</li>
                  <li>• Change order management</li>
                  <li>• Cost reporting and forecasting</li>
                </ul>
              </Card>

              <Card>
                <h3 className="text-xl font-semibold text-pc-neutral-900 mb-3">
                  Final Account & Settlement
                </h3>
                <ul className="space-y-2 text-pc-neutral-600">
                  <li>• Final account preparation</li>
                  <li>• Claims assessment and negotiation</li>
                  <li>• Financial close-out documentation</li>
                  <li>• Cost reconciliation reports</li>
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
                    Cost Management
                  </h3>
                  <p className="text-pc-neutral-600">
                    Rigorous cost control throughout project lifecycle, from initial estimates through to final account settlement and commercial close-out.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-pc-neutral-900 mb-3">
                    Contract Support
                  </h3>
                  <p className="text-pc-neutral-600">
                    Expert support for NEC, FIDIC, and bespoke contract forms, including variation management and dispute avoidance strategies.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-pc-neutral-900 mb-3">
                    Commercial Insight
                  </h3>
                  <p className="text-pc-neutral-600">
                    Strategic commercial advice grounded in practical understanding of industrial project delivery and stakeholder dynamics.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* CTA Section */}
          <div className="text-center p-8 bg-pc-neutral-50 rounded-lg">
            <h2 className="text-2xl font-semibold text-pc-neutral-900 mb-4">
              Need expert quantity surveying support?
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
