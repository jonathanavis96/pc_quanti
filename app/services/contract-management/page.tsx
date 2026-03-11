import React from 'react';
import { Container, Card, LinkButton } from '@/src/components';
import Link from 'next/link';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contract Management — Lifecycle Support & Compliance",
  description: "Comprehensive contract management lifecycle support — advisory on compliance, risk allocation, payment certification, variation management, and extension of time assessments across all major procurement forms.",
  alternates: {
    canonical: "/services/contract-management",
  },
  openGraph: {
    title: "Contract Management | PC Quanti",
    description: "Expert contract management covering compliance, risk allocation, payment certification, variation management, and extension of time assessments across NEC, FIDIC, GCC, and JBCC contracts.",
    url: "/services/contract-management",
  },
};

export default function ContractManagementPage() {
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
              Contract Management
            </h1>
            <p className="text-xl md:text-2xl text-pc-neutral-600 max-w-3xl">
              Comprehensive contract lifecycle support — from pre-award advisory through to final account, covering compliance, risk allocation, payment certification, and variation management.
            </p>
          </div>

          {/* Overview */}
          <div className="mb-12">
            <Card variant="elevated">
              <h2 className="text-2xl font-semibold text-pc-neutral-900 mb-4">
                Overview
              </h2>
              <p className="text-pc-neutral-600 leading-relaxed mb-4">
                PC Quanti provides comprehensive contract management lifecycle support across all major procurement forms, including NEC3, NEC4, FIDIC, GCC, and JBCC contracts. Our approach covers the full contract life cycle — from pre-award advisory and contract drafting through to contract execution, change management, and final account resolution.
              </p>
              <p className="text-pc-neutral-600 leading-relaxed mb-4">
                We advise clients on contract compliance, risk allocation, and commercial exposure throughout project delivery. Our team manages payment certification processes, assesses and manages variations, and provides strategic guidance on extension of time entitlements — ensuring contractual rights are identified, preserved, and enforced.
              </p>
              <p className="text-pc-neutral-600 leading-relaxed">
                Where contract management is integrated with our quantity surveying and contract administration services, clients benefit from a fully coordinated commercial team that protects value, manages risk, and maintains commercial clarity throughout the project life cycle.
              </p>
            </Card>
          </div>

          {/* Image Placeholder */}
          <div className="relative w-full h-80 md:h-96 rounded-lg overflow-hidden mb-12 bg-pc-neutral-100 flex items-center justify-center">
            <p className="text-pc-neutral-400 text-sm">Service image coming soon</p>
          </div>

          {/* Typical Deliverables */}
          <div className="mb-12">
            <h2 className="text-3xl font-semibold text-pc-neutral-900 mb-6">
              Typical Deliverables
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <h3 className="text-xl font-semibold text-pc-neutral-900 mb-3">
                  Pre-Award Advisory
                </h3>
                <ul className="space-y-2 text-pc-neutral-600">
                  <li>• Contract form selection and risk allocation review</li>
                  <li>• Tender document review and commercial advice</li>
                  <li>• Contract negotiation support</li>
                  <li>• Pre-contract risk assessment and mitigation planning</li>
                </ul>
              </Card>

              <Card>
                <h3 className="text-xl font-semibold text-pc-neutral-900 mb-3">
                  Contract Execution
                </h3>
                <ul className="space-y-2 text-pc-neutral-600">
                  <li>• Payment certification and assessment management</li>
                  <li>• Variation and compensation event management</li>
                  <li>• Extension of time assessment and entitlement advice</li>
                  <li>• Compliance monitoring and reporting</li>
                </ul>
              </Card>

              <Card>
                <h3 className="text-xl font-semibold text-pc-neutral-900 mb-3">
                  Change Management
                </h3>
                <ul className="space-y-2 text-pc-neutral-600">
                  <li>• Variation register management</li>
                  <li>• Change order preparation and negotiation</li>
                  <li>• Impact assessment on time and cost</li>
                  <li>• Contractual notice management</li>
                </ul>
              </Card>

              <Card>
                <h3 className="text-xl font-semibold text-pc-neutral-900 mb-3">
                  Final Account &amp; Close-Out
                </h3>
                <ul className="space-y-2 text-pc-neutral-600">
                  <li>• Final account preparation and negotiation</li>
                  <li>• Commercial close-out reporting</li>
                  <li>• Retention release management</li>
                  <li>• Post-project commercial review</li>
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
                    Multi-Form Expertise
                  </h3>
                  <p className="text-pc-neutral-600">
                    Deep knowledge of NEC3, NEC4, FIDIC, GCC, and JBCC contracts — enabling tailored advice on each form&apos;s specific requirements, risk mechanisms, and entitlement provisions.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-pc-neutral-900 mb-3">
                    Commercial Protection
                  </h3>
                  <p className="text-pc-neutral-600">
                    Proactive identification and management of commercial risks, ensuring contractual rights are preserved and commercial exposure is minimised throughout project delivery.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-pc-neutral-900 mb-3">
                    Integrated Approach
                  </h3>
                  <p className="text-pc-neutral-600">
                    Contract management delivered alongside contract administration and quantity surveying services, providing a fully coordinated commercial team for complete project commercial control.
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
                <p className="text-sm text-pc-neutral-600">Disciplined contract administration and written communication</p>
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
              Need Expert Contract Management Support?
            </h2>
            <p className="text-pc-neutral-600 mb-6 max-w-2xl mx-auto">
              Contact PC Quanti to discuss how our contract management services can protect your commercial interests throughout your project delivery.
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
