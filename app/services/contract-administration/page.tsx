import React from 'react';
import { Container, Card, Button } from '@/src/components';
import Link from 'next/link';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contract Administration",
  description: "Expert contract management, variations, and change control to protect your interests. Specialist contract administration for complex industrial projects.",
  alternates: {
    canonical: "/services/contract-administration",
  },
  openGraph: {
    title: "Contract Administration | PC Quanti",
    description: "Expert contract management, variations, and change control to protect your interests. Specialist contract administration for complex industrial projects.",
    url: "/services/contract-administration",
  },
};

export default function ContractAdministrationPage() {
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
              Contract Administration
            </h1>
            <p className="text-xl md:text-2xl text-pc-neutral-600 max-w-3xl">
              Expert contract administration, compliance management, and documentation services for nuclear, mining, and industrial projects.
            </p>
          </div>

          {/* Overview */}
          <div className="mb-12">
            <Card variant="elevated">
              <h2 className="text-2xl font-semibold text-pc-neutral-900 mb-4">
                Overview
              </h2>
              <p className="text-pc-neutral-600 leading-relaxed mb-4">
                PC Quanti provides specialist contract administration services for complex industrial projects. We ensure contractual obligations are met, documentation is maintained to the highest standards, and compliance requirements are rigorously managed throughout the project lifecycle.
              </p>
              <p className="text-pc-neutral-600 leading-relaxed">
                Our approach combines meticulous attention to contractual detail with practical understanding of project delivery realities. Whether you're managing NEC, FIDIC, or bespoke contract forms, we bring clarity, accuracy, and commercial awareness to every engagement.
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
                  Contract Management
                </h3>
                <ul className="space-y-2 text-pc-neutral-600">
                  <li>• Contract setup and mobilization</li>
                  <li>• Notice management and compliance tracking</li>
                  <li>• Change order administration</li>
                  <li>• Contract closeout and handover</li>
                </ul>
              </Card>

              <Card>
                <h3 className="text-xl font-semibold text-pc-neutral-900 mb-3">
                  Documentation Control
                </h3>
                <ul className="space-y-2 text-pc-neutral-600">
                  <li>• Contract correspondence registers</li>
                  <li>• Meeting minutes and action tracking</li>
                  <li>• Document version control</li>
                  <li>• As-built documentation</li>
                </ul>
              </Card>

              <Card>
                <h3 className="text-xl font-semibold text-pc-neutral-900 mb-3">
                  Compliance & Reporting
                </h3>
                <ul className="space-y-2 text-pc-neutral-600">
                  <li>• Regulatory compliance monitoring</li>
                  <li>• Contractual milestone tracking</li>
                  <li>• Performance reporting dashboards</li>
                  <li>• Audit trail maintenance</li>
                </ul>
              </Card>

              <Card>
                <h3 className="text-xl font-semibold text-pc-neutral-900 mb-3">
                  Risk & Issue Management
                </h3>
                <ul className="space-y-2 text-pc-neutral-600">
                  <li>• Risk register administration</li>
                  <li>• Early warning notification systems</li>
                  <li>• Dispute avoidance strategies</li>
                  <li>• Lessons learned capture</li>
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
                    Contractual Expertise
                  </h3>
                  <p className="text-pc-neutral-600">
                    Deep knowledge of standard and bespoke contract forms, with proven experience administering NEC, FIDIC, and client-specific agreements in industrial settings.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-pc-neutral-900 mb-3">
                    Compliance Rigour
                  </h3>
                  <p className="text-pc-neutral-600">
                    Meticulous tracking of contractual obligations, regulatory requirements, and documentation standards to ensure full compliance and audit readiness.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-pc-neutral-900 mb-3">
                    Practical Focus
                  </h3>
                  <p className="text-pc-neutral-600">
                    Balanced approach that maintains contractual discipline while supporting pragmatic project delivery and collaborative stakeholder relationships.
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
              <Link href="/services/quantity-surveying" className="p-4 border border-pc-neutral-200 rounded-lg hover:border-pc-blue transition-colors">
                <h3 className="font-semibold text-pc-neutral-900 mb-2">Quantity Surveying →</h3>
                <p className="text-sm text-pc-neutral-600">Cost planning and commercial management</p>
              </Link>
              <Link href="/services/claims-management" className="p-4 border border-pc-neutral-200 rounded-lg hover:border-pc-blue transition-colors">
                <h3 className="font-semibold text-pc-neutral-900 mb-2">Claims Management →</h3>
                <p className="text-sm text-pc-neutral-600">Dispute resolution and claims preparation</p>
              </Link>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center p-8 bg-pc-neutral-50 rounded-lg">
            <h2 className="text-2xl font-semibold text-pc-neutral-900 mb-4">
              Need expert contract administration support?
            </h2>
            <p className="text-pc-neutral-600 mb-6 max-w-2xl mx-auto">
              Contact PC Quanti to discuss how we can ensure contractual compliance and documentation excellence on your next industrial project.
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
