import React from 'react';
import { Container, Card, Button } from '@/src/components';
import Link from 'next/link';

export default function ClaimsManagementPage() {
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
              Claims Management
            </h1>
            <p className="text-xl md:text-2xl text-pc-neutral-600 max-w-3xl">
              Expert claims preparation, dispute resolution, and forensic analysis services for complex industrial projects.
            </p>
          </div>

          {/* Overview */}
          <div className="mb-12">
            <Card variant="elevated">
              <h2 className="text-2xl font-semibold text-pc-neutral-900 mb-4">
                Overview
              </h2>
              <p className="text-pc-neutral-600 leading-relaxed mb-4">
                PC Quanti provides specialist claims management services for nuclear, mining, and industrial projects. We help clients prepare, assess, and resolve contractual claims through rigorous analysis, clear documentation, and commercially astute strategies.
              </p>
              <p className="text-pc-neutral-600 leading-relaxed">
                Our approach combines forensic attention to detail with practical commercial awareness. Whether you're pursuing a delay and disruption claim, defending against contractor claims, or seeking early dispute resolution, we bring clarity, evidence, and expertise to every engagement.
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
                  <li>• Expert witness reports</li>
                  <li>• Adjudication and arbitration support</li>
                  <li>• Mediation preparation</li>
                  <li>• Litigation support services</li>
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

          {/* CTA Section */}
          <div className="text-center p-8 bg-pc-neutral-50 rounded-lg">
            <h2 className="text-2xl font-semibold text-pc-neutral-900 mb-4">
              Need expert claims management support?
            </h2>
            <p className="text-pc-neutral-600 mb-6 max-w-2xl mx-auto">
              Contact PC Quanti to discuss how we can help you prepare, assess, or resolve contractual claims on your industrial project.
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
