import React from 'react';
import { Container, Card, LinkButton } from '@/src/components';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Project Controls — Scheduling, Cost Control & Earned Value Management",
  description: "Structured and strategic planning services on NEC, FIDIC, and GCC contracts. Expert project controls using Primavera P6, earned value management, and forensic delay analysis for engineering and construction projects.",
  alternates: {
    canonical: "/services/project-controls",
  },
  openGraph: {
    title: "Project Controls | PC Quanti",
    description: "Comprehensive project controls — scheduling, cost control, risk management, and performance monitoring for complex engineering and construction programmes.",
    url: "/services/project-controls",
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
              className="text-pc-gold hover:underline mb-4 inline-block focus:outline-none focus:ring-2 focus:ring-pc-gold focus:ring-offset-2 rounded-sm"
            >
              ← Back to Services
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-pc-neutral-900 mb-6">
              Project Controls
            </h1>
            <p className="text-xl md:text-2xl text-pc-neutral-600 max-w-3xl">
              Structured and strategic planning services on various forms of contract — scheduling, cost control, risk management, and performance monitoring for complex engineering and construction projects.
            </p>
          </div>

          {/* Overview */}
          <div className="mb-12">
            <Card variant="elevated">
              <h2 className="text-2xl font-semibold text-pc-neutral-900 mb-4">
                Overview
              </h2>
              <p className="text-pc-neutral-600 leading-relaxed mb-4">
                PC Quanti has extensive experience providing structured and strategic planning services on various forms of contract, most notably engineering planning to facilitate the execution of NEC, FIDIC, and GCC contracts. We support both clients and contractors in developing a strategic level of planning and project controls. Our strategic planning foundation enables us to actively manage project delivery, support extension of time claims, and perform delay analysis.
              </p>
              <p className="text-pc-neutral-600 leading-relaxed mb-4">
                Our operational project planning capabilities include developing and managing the basis of schedule using recognised frameworks such as GAO 16-89G, critical path method (CPM) analysis, float analysis, baseline management, resource loading and allocation, earned value management (EVM), look-ahead schedules, and Primavera P6 data import/export.
              </p>
              <p className="text-pc-neutral-600 leading-relaxed">
                We also provide services to both clients and contractors to manage delays using recognised forensic schedule analysis techniques, including windows analysis, as-planned vs. as-built comparison, collapsed as-built (but-for analysis), and impacted as-planned methodologies, ensuring compliance with recognised time impact analysis standards.
              </p>
            </Card>
          </div>

          {/* Service Image */}
          <div className="relative w-full h-80 md:h-96 rounded-lg overflow-hidden mb-12">
            <Image
              src="/services/project-controls.webp"
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
                  Planning & Scheduling
                </h3>
                <ul className="space-y-2 text-pc-neutral-600">
                  <li>• Baseline schedule development and critical path method (CPM) analysis</li>
                  <li>• Resource loading, allocation, and look-ahead schedules</li>
                  <li>• Schedule risk assessments and float analysis</li>
                  <li>• Progress monitoring, S-curves, and earned value tracking</li>
                </ul>
              </Card>

              <Card>
                <h3 className="text-xl font-semibold text-pc-neutral-900 mb-3">
                  Cost Control
                </h3>
                <ul className="space-y-2 text-pc-neutral-600">
                  <li>• Cost baseline development and budget forecasting</li>
                  <li>• Earned value management (EVM): BCWS, BCWP, and ACWP reporting</li>
                  <li>• Cost variance analysis and performance indexing</li>
                  <li>• Data tracking, reporting tools, and XER/Excel integration</li>
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
                    Seamless integration of schedule, cost, and risk data — including Primavera P6, earned value systems, and data tracking tools — to provide comprehensive project visibility and enable data-driven decision-making.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-pc-neutral-900 mb-3">
                    Industry Standards
                  </h3>
                  <p className="text-pc-neutral-600">
                    Adherence to recognised best practices including PMI, AACE, and GAO schedule guidelines, with proven application across NEC, FIDIC, and GCC contract environments.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-pc-neutral-900 mb-3">
                    Expert Analysis
                  </h3>
                  <p className="text-pc-neutral-600">
                    Deep analytical expertise in critical path methods, earned value management, Monte Carlo simulation, and forensic delay analysis techniques for accurate forecasting and claims support.
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
              <Link href="/services/project-management" className="p-4 border border-pc-neutral-200 rounded-lg hover:border-pc-gold transition-colors focus:outline-none focus:ring-2 focus:ring-pc-gold focus:ring-offset-2">
                <h3 className="font-semibold text-pc-neutral-900 mb-2">Project Management →</h3>
                <p className="text-sm text-pc-neutral-600">Turnkey project management across the full project life cycle</p>
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
              Need Robust Project Controls?
            </h2>
            <p className="text-pc-neutral-600 mb-6 max-w-2xl mx-auto">
              Contact PC Quanti to discuss how our planning and project controls services can support your engineering and construction project delivery.
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
