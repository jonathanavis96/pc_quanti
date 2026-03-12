import React from 'react';
import { Container, Card, Button } from '@/src/components';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contract Administration — NEC, FIDIC, GCC & JBCC Expertise",
  description: "Expert contract management, variations, and change control to protect your interests. Specialist contract administration for complex nuclear, mining, and industrial projects under NEC3, NEC4, FIDIC, GCC, and JBCC frameworks.",
  alternates: {
    canonical: "/services/contract-administration",
  },
  openGraph: {
    title: "Contract Administration | PC Quanti",
    description: "Expert contract administration, compliance management, and documentation services for nuclear, mining, and industrial projects under NEC, FIDIC, GCC, and JBCC.",
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
              className="text-pc-gold hover:underline mb-4 inline-block focus:outline-none focus:ring-2 focus:ring-pc-gold focus:ring-offset-2 rounded-sm"
            >
              ← Back to Services
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-pc-neutral-900 mb-6">
              Contract Administration
            </h1>
            <p className="text-xl md:text-2xl text-pc-neutral-600 max-w-3xl">
              Expert contract administration, compliance management, and documentation services for nuclear, mining, and industrial projects — across NEC, FIDIC, GCC, JBCC, and bespoke frameworks.
            </p>
          </div>

          {/* Overview */}
          <div className="mb-12">
            <Card variant="elevated">
              <h2 className="text-2xl font-semibold text-pc-neutral-900 mb-4">
                Overview
              </h2>
              <p className="text-pc-neutral-600 leading-relaxed mb-4">
                We believe that for a project to be truly successful, it is critical to implement proper and effective contract administration. PC Quanti ensures concise but comprehensive written project communication, serves the required notices on time, and properly documents the progress of the works and commercial administration required under the contract form, working with established document controls and EDMS systems to keep your important project documentation safe and audit-ready.
              </p>
              <p className="text-pc-neutral-600 leading-relaxed mb-4">
                We provide comprehensive contract administration support throughout the lifecycle of nuclear, mining, and industrial construction and engineering projects. Our services include contractual compliance monitoring, notice management, payment certification, variation management, and extension of time assessments across NEC3, NEC4, FIDIC, GCC, and JBCC contract suites.
              </p>
              <p className="text-pc-neutral-600 leading-relaxed">
                Our approach is proactive and detail-driven, with a focus on protecting our clients&apos; commercial interests while maintaining project momentum. By ensuring clear record-keeping, structured decision-making, and timely contractual notices, we help mitigate risk and reduce the likelihood of disputes arising.
              </p>
            </Card>
          </div>

          {/* Service Image */}
          <div className="relative w-full h-80 md:h-96 rounded-lg overflow-hidden mb-12">
            <Image
              src="/services/contract-administration.webp"
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
                  Contract Administration
                </h3>
                <ul className="space-y-2 text-pc-neutral-600">
                  <li>• Contract setup, mobilisation, and administration</li>
                  <li>• Notice management and variation &amp; change order administration</li>
                  <li>• Payment certification and contract close-out</li>
                  <li>• Ensuring clear contemporaneous record keeping</li>
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
                    Deep knowledge of NEC3, NEC4, FIDIC, GCC, JBCC, and bespoke contract forms, with proven experience administering complex agreements in nuclear, mining, and industrial settings.
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
              <Link href="/services/quantity-surveying" className="p-4 border border-pc-neutral-200 rounded-lg hover:border-pc-gold transition-colors focus:outline-none focus:ring-2 focus:ring-pc-gold focus:ring-offset-2">
                <h3 className="font-semibold text-pc-neutral-900 mb-2">Quantity Surveying →</h3>
                <p className="text-sm text-pc-neutral-600">Cost planning and commercial management</p>
              </Link>
              <Link href="/services/dispute-resolution" className="p-4 border border-pc-neutral-200 rounded-lg hover:border-pc-gold transition-colors focus:outline-none focus:ring-2 focus:ring-pc-gold focus:ring-offset-2">
                <h3 className="font-semibold text-pc-neutral-900 mb-2">Dispute Resolution →</h3>
                <p className="text-sm text-pc-neutral-600">Adjudication, arbitration, and claims preparation</p>
              </Link>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center p-8 bg-pc-neutral-50 rounded-lg">
            <h2 className="text-2xl font-semibold text-pc-neutral-900 mb-4">
              Need Expert Contract Administration Support?
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
