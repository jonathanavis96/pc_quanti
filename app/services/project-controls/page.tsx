import React from 'react';
import { Container, Card, Button } from '@/src/components';
import Link from 'next/link';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Project Controls",
  description: "Scheduling, cost control, and risk management to deliver certainty in complex environments. Expert project controls for nuclear and industrial sectors.",
  openGraph: {
    title: "Project Controls | PC Quanti",
    description: "Scheduling, cost control, and risk management to deliver certainty in complex environments. Expert project controls for nuclear and industrial sectors.",
  },
};

export default function ProjectControlsPage() {
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
              Project Controls
            </h1>
            <p className="text-xl md:text-2xl text-pc-neutral-600 max-w-3xl">
              Comprehensive project controls services including scheduling, cost control, risk management, and performance monitoring for complex industrial projects.
            </p>
          </div>

          {/* Overview */}
          <div className="mb-12">
            <Card variant="elevated">
              <h2 className="text-2xl font-semibold text-pc-neutral-900 mb-4">
                Overview
              </h2>
              <p className="text-pc-neutral-600 leading-relaxed mb-4">
                PC Quanti delivers integrated project controls solutions that provide clarity, foresight, and control throughout the project lifecycle. We help clients plan, monitor, and manage their nuclear, mining, and industrial projects through robust scheduling, cost management, risk analysis, and earned value systems.
              </p>
              <p className="text-pc-neutral-600 leading-relaxed">
                Our project controls services are designed to give project teams the visibility and insight they need to make informed decisions, anticipate challenges, and deliver projects on time and on budget. Whether you need baseline development, ongoing monitoring, or recovery planning, we bring discipline, expertise, and practical solutions.
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
                  Planning & Scheduling
                </h3>
                <ul className="space-y-2 text-pc-neutral-600">
                  <li>• Baseline schedule development</li>
                  <li>• Critical path analysis</li>
                  <li>• Schedule risk assessments</li>
                  <li>• Progress monitoring and updates</li>
                </ul>
              </Card>

              <Card>
                <h3 className="text-xl font-semibold text-pc-neutral-900 mb-3">
                  Cost Control
                </h3>
                <ul className="space-y-2 text-pc-neutral-600">
                  <li>• Cost baseline development</li>
                  <li>• Budget monitoring and forecasting</li>
                  <li>• Earned value management (EVM)</li>
                  <li>• Cost variance analysis</li>
                </ul>
              </Card>

              <Card>
                <h3 className="text-xl font-semibold text-pc-neutral-900 mb-3">
                  Risk Management
                </h3>
                <ul className="space-y-2 text-pc-neutral-600">
                  <li>• Risk identification and assessment</li>
                  <li>• Quantitative risk analysis (QRA)</li>
                  <li>• Contingency planning</li>
                  <li>• Risk register maintenance</li>
                </ul>
              </Card>

              <Card>
                <h3 className="text-xl font-semibold text-pc-neutral-900 mb-3">
                  Performance Monitoring
                </h3>
                <ul className="space-y-2 text-pc-neutral-600">
                  <li>• KPI dashboards and reporting</li>
                  <li>• Trend analysis and forecasting</li>
                  <li>• Schedule performance index (SPI) tracking</li>
                  <li>• Cost performance index (CPI) tracking</li>
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
                    Integrated Systems
                  </h3>
                  <p className="text-pc-neutral-600">
                    Seamless integration of schedule, cost, and risk data to provide comprehensive project visibility and enable data-driven decision making.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-pc-neutral-900 mb-3">
                    Industry Standards
                  </h3>
                  <p className="text-pc-neutral-600">
                    Adherence to recognized best practices including PMI, AACE, and industry-specific standards for nuclear, mining, and industrial projects.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-pc-neutral-900 mb-3">
                    Expert Analysis
                  </h3>
                  <p className="text-pc-neutral-600">
                    Deep analytical expertise in critical path methods, earned value management, and Monte Carlo simulation for accurate forecasting and planning.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* CTA Section */}
          <div className="text-center p-8 bg-pc-neutral-50 rounded-lg">
            <h2 className="text-2xl font-semibold text-pc-neutral-900 mb-4">
              Need robust project controls?
            </h2>
            <p className="text-pc-neutral-600 mb-6 max-w-2xl mx-auto">
              Contact PC Quanti to discuss how our project controls services can help you deliver your project on time and on budget.
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
