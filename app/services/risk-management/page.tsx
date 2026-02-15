import React from 'react';
import { Container, Card, Button } from '@/src/components';
import Link from 'next/link';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Risk Management",
  description: "Identify and mitigate project risks before they impact delivery — protecting timelines, budgets, and outcomes for nuclear, mining, and industrial projects.",
  alternates: {
    canonical: "/services/risk-management",
  },
  openGraph: {
    title: "Risk Management | PC Quanti",
    description: "Identify and mitigate project risks before they impact delivery — protecting timelines, budgets, and outcomes for nuclear, mining, and industrial projects.",
    url: "/services/risk-management",
  },
};

export default function RiskManagementPage() {
  return (
    <main className="min-h-screen bg-white">
      <Container>
        <div className="py-16 md:py-24">
          {/* Header */}
          <div className="mb-12 md:mb-16">
            <Link 
              href="/services" 
              className="text-pc-blue hover:underline mb-4 inline-block focus:outline-none focus:ring-2 focus:ring-pc-blue focus:ring-offset-2 rounded-sm"
            >
              ← Back to Services
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-pc-neutral-900 mb-6">
              Risk Management
            </h1>
            <p className="text-xl md:text-2xl text-pc-neutral-600 max-w-3xl">
              Identify and mitigate project risks before they impact delivery — protecting timelines, budgets, and outcomes.
            </p>
          </div>

          {/* Overview */}
          <div className="mb-12">
            <Card variant="elevated">
              <h2 className="text-2xl font-semibold text-pc-neutral-900 mb-4">
                Overview
              </h2>
              <p className="text-pc-neutral-600 leading-relaxed mb-4">
                In high-stakes nuclear and industrial projects, risk management isn&apos;t optional — it&apos;s essential. PC Quanti provides proactive risk identification, assessment, and mitigation strategies that protect your project from costly delays, budget overruns, and scope creep.
              </p>
              <p className="text-pc-neutral-600 leading-relaxed">
                Our structured approach combines industry best practices with hands-on experience in complex, regulated environments where failure carries significant consequences. We don&apos;t just identify risks — we develop practical mitigation strategies and monitor them throughout the project lifecycle.
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
                  Risk Identification & Assessment
                </h3>
                <ul className="space-y-2 text-pc-neutral-600">
                  <li>• Comprehensive risk registers</li>
                  <li>• Qualitative and quantitative risk analysis</li>
                  <li>• Risk probability and impact assessments</li>
                  <li>• Risk categorization and prioritization</li>
                </ul>
              </Card>

              <Card>
                <h3 className="text-xl font-semibold text-pc-neutral-900 mb-3">
                  Mitigation Planning
                </h3>
                <ul className="space-y-2 text-pc-neutral-600">
                  <li>• Risk response strategies (avoid, transfer, mitigate, accept)</li>
                  <li>• Contingency planning and reserves</li>
                  <li>• Action plans with clear ownership</li>
                  <li>• Early warning indicators and triggers</li>
                </ul>
              </Card>

              <Card>
                <h3 className="text-xl font-semibold text-pc-neutral-900 mb-3">
                  Monitoring & Control
                </h3>
                <ul className="space-y-2 text-pc-neutral-600">
                  <li>• Regular risk review meetings</li>
                  <li>• Risk dashboard and reporting</li>
                  <li>• Emerging risk identification</li>
                  <li>• Mitigation effectiveness tracking</li>
                </ul>
              </Card>

              <Card>
                <h3 className="text-xl font-semibold text-pc-neutral-900 mb-3">
                  Specialized Risk Analysis
                </h3>
                <ul className="space-y-2 text-pc-neutral-600">
                  <li>• Schedule risk analysis (Monte Carlo simulation)</li>
                  <li>• Cost risk modeling</li>
                  <li>• Safety and regulatory risk assessment</li>
                  <li>• Stakeholder and reputational risk analysis</li>
                </ul>
              </Card>
            </div>
          </div>

          {/* Key Risk Areas */}
          <div className="mb-12">
            <h2 className="text-3xl font-semibold text-pc-neutral-900 mb-6">
              Key Risk Areas We Address
            </h2>
            <Card variant="elevated">
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-pc-neutral-900 mb-3">
                    Technical Risks
                  </h3>
                  <p className="text-pc-neutral-600">
                    Design complexity, technology maturity, interface management, and technical performance uncertainties in nuclear and industrial environments.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-pc-neutral-900 mb-3">
                    Commercial Risks
                  </h3>
                  <p className="text-pc-neutral-600">
                    Contract terms, procurement strategies, supply chain vulnerabilities, cost escalation, and claims exposure management.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-pc-neutral-900 mb-3">
                    Regulatory & Compliance
                  </h3>
                  <p className="text-pc-neutral-600">
                    Licensing delays, regulatory changes, safety case approvals, and compliance obligations in highly regulated sectors.
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
              <Link href="/services/project-controls" className="p-4 border border-pc-neutral-200 rounded-lg hover:border-pc-blue transition-colors focus:outline-none focus:ring-2 focus:ring-pc-blue focus:ring-offset-2">
                <h3 className="font-semibold text-pc-neutral-900 mb-2">Project Controls →</h3>
                <p className="text-sm text-pc-neutral-600">Scheduling, cost control, and performance reporting</p>
              </Link>
              <Link href="/services/project-management" className="p-4 border border-pc-neutral-200 rounded-lg hover:border-pc-blue transition-colors focus:outline-none focus:ring-2 focus:ring-pc-blue focus:ring-offset-2">
                <h3 className="font-semibold text-pc-neutral-900 mb-2">Project Management →</h3>
                <p className="text-sm text-pc-neutral-600">End-to-end project delivery and governance</p>
              </Link>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center p-8 bg-pc-neutral-50 rounded-lg">
            <h2 className="text-2xl font-semibold text-pc-neutral-900 mb-4">
              Ready to protect your project from preventable risks?
            </h2>
            <p className="text-pc-neutral-600 mb-6 max-w-2xl mx-auto">
              Get in touch to explore how PC Quanti can strengthen your risk management approach and safeguard project delivery.
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
