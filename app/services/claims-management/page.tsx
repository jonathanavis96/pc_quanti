import React from 'react';
import { Container, Card, LinkButton } from '@/src/components';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Claims Management — Dispute Resolution, Adjudication & Arbitration",
  description: "Dispute resolution, delay analysis, and claims preparation backed by nuclear and industrial experience. Expert claims management consultancy covering adjudication, arbitration, and forensic schedule analysis for complex projects.",
  alternates: {
    canonical: "/services/claims-management",
  },
  openGraph: {
    title: "Claims Management | PC Quanti",
    description: "Expert claims preparation, dispute resolution, adjudication, and arbitration support for complex nuclear, mining, and industrial projects.",
    url: "/services/claims-management",
  },
};

export default function ClaimsManagementPage() {
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
              Claims Management
            </h1>
            <p className="text-xl md:text-2xl text-pc-neutral-600 max-w-3xl">
              Specialist advice and representation in construction and engineering disputes — including claims preparation, adjudication, arbitration, and settlement negotiation.
            </p>
          </div>

          {/* Overview */}
          <div className="mb-12">
            <Card variant="elevated">
              <h2 className="text-2xl font-semibold text-pc-neutral-900 mb-4">
                Overview
              </h2>
              <p className="text-pc-neutral-600 leading-relaxed mb-4">
                We aim to avoid disputes and manage your project around this core principle. Should a dispute be unavoidable, we provide specialist advice and representation in construction and engineering disputes across all formal and alternative dispute resolution forums. Our services include strategic and practical guidance on contractual dispute resolution procedures, the preparation of statements of claim, statements of defence and counterclaims for adjudication and arbitration proceedings, and comprehensive arbitration support from referral through to final award.
              </p>
              <p className="text-pc-neutral-600 leading-relaxed mb-4">
                We assist clients with the formulation and presentation of construction-related claims, evidentiary preparation, and the coordination of expert input to ensure technically robust and commercially persuasive submissions. We also support and lead dispute resolution negotiations and draft clear, enforceable settlement agreements designed to achieve efficient and sustainable outcomes.
              </p>
              <p className="text-pc-neutral-600 leading-relaxed">
                While our primary focus is dispute avoidance through strong planning and administration, PC Quanti is highly experienced in construction claims, adjudication, arbitration, and formal dispute resolution proceedings when required. Our mission is to build long-term client relationships by consistently adding measurable value, strengthening project certainty, and delivering professional excellence across every engagement.
              </p>
            </Card>
          </div>

          {/* Service Image */}
          <div className="relative w-full h-80 md:h-96 rounded-lg overflow-hidden mb-12">
            <Image
              src="/services/claims-management.webp"
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
                  Claims Preparation
                </h3>
                <ul className="space-y-2 text-pc-neutral-600">
                  <li>• Delay and disruption claims</li>
                  <li>• Prolongation cost analysis</li>
                  <li>• Variation and change order claims</li>
                  <li>• Loss and expense assessments</li>
                </ul>
              </Card>

              <Card>
                <h3 className="text-xl font-semibold text-pc-neutral-900 mb-3">
                  Claims Assessment
                </h3>
                <ul className="space-y-2 text-pc-neutral-600">
                  <li>• Contractor claim evaluation</li>
                  <li>• Quantum and entitlement analysis</li>
                  <li>• Independent cost verification</li>
                  <li>• Commercial risk assessments</li>
                </ul>
              </Card>

              <Card>
                <h3 className="text-xl font-semibold text-pc-neutral-900 mb-3">
                  Dispute Resolution Support
                </h3>
                <ul className="space-y-2 text-pc-neutral-600">
                  <li>• Expert witness reports and testimony</li>
                  <li>• Adjudication and arbitration support from referral to final award</li>
                  <li>• Mediation preparation and settlement negotiation</li>
                  <li>• Statements of claim, defence, and counterclaim drafting</li>
                </ul>
              </Card>

              <Card>
                <h3 className="text-xl font-semibold text-pc-neutral-900 mb-3">
                  Forensic Analysis
                </h3>
                <ul className="space-y-2 text-pc-neutral-600">
                  <li>• Critical path delay analysis</li>
                  <li>• Programme impact assessments</li>
                  <li>• Cost causation analysis</li>
                  <li>• Document forensics and reconstruction</li>
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
                    Forensic Rigour
                  </h3>
                  <p className="text-pc-neutral-600">
                    Detailed analysis of project records, programmes, and costs to build robust, evidence-based claims that withstand scrutiny and challenge.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-pc-neutral-900 mb-3">
                    Commercial Awareness
                  </h3>
                  <p className="text-pc-neutral-600">
                    Pragmatic approach that balances contractual entitlement with commercial realities, supporting settlement negotiations and dispute avoidance.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-pc-neutral-900 mb-3">
                    Industry Experience
                  </h3>
                  <p className="text-pc-neutral-600">
                    Proven track record in nuclear, mining, and industrial sectors, with deep understanding of complex project delivery challenges and contractual frameworks.
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
                <p className="text-sm text-pc-neutral-600">Expert contract management and compliance</p>
              </Link>
              <Link href="/services/project-controls" className="p-4 border border-pc-neutral-200 rounded-lg hover:border-pc-gold transition-colors focus:outline-none focus:ring-2 focus:ring-pc-gold focus:ring-offset-2">
                <h3 className="font-semibold text-pc-neutral-900 mb-2">Project Controls →</h3>
                <p className="text-sm text-pc-neutral-600">Scheduling, cost control, and risk management</p>
              </Link>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center p-8 bg-pc-neutral-50 rounded-lg">
            <h2 className="text-2xl font-semibold text-pc-neutral-900 mb-4">
              Need Expert Claims Management Support?
            </h2>
            <p className="text-pc-neutral-600 mb-6 max-w-2xl mx-auto">
              Contact PC Quanti to discuss how we can help you prepare, assess, or resolve contractual claims on your industrial project.
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
