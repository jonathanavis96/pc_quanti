import React from 'react';
import { Container, Card, Button } from '@/src/components';
import Link from 'next/link';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Project Management",
  description: "End-to-end project delivery for nuclear, mining, and industrial sectors. From feasibility through commissioning with expert project management consultancy.",
  openGraph: {
    title: "Project Management | PC Quanti",
    description: "End-to-end project delivery for nuclear, mining, and industrial sectors. From feasibility through commissioning with expert project management consultancy.",
  },
};

export default function ProjectManagementPage() {
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
              Project Management
            </h1>
            <p className="text-xl md:text-2xl text-pc-neutral-600 max-w-3xl">
              End-to-end project delivery for nuclear, mining, and industrial sectors. From feasibility through commissioning.
            </p>
          </div>

          {/* Overview */}
          <div className="mb-12">
            <Card variant="elevated">
              <h2 className="text-2xl font-semibold text-pc-neutral-900 mb-4">
                Overview
              </h2>
              <p className="text-pc-neutral-600 leading-relaxed mb-4">
                PC Quanti delivers expert project management consultancy tailored to the unique demands of nuclear, mining, and industrial projects. With extensive experience in high-stakes, highly regulated environments, we provide lean, effective project leadership without the overhead of large corporate consultancies.
              </p>
              <p className="text-pc-neutral-600 leading-relaxed">
                Whether you're navigating complex commissioning phases, managing stakeholder expectations, or ensuring compliance with stringent regulatory frameworks, our approach combines deep technical expertise with pragmatic delivery focus.
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
                  Project Planning & Setup
                </h3>
                <ul className="space-y-2 text-pc-neutral-600">
                  <li>• Project execution plans</li>
                  <li>• Governance frameworks</li>
                  <li>• Stakeholder engagement strategies</li>
                  <li>• Risk registers and mitigation plans</li>
                </ul>
              </Card>

              <Card>
                <h3 className="text-xl font-semibold text-pc-neutral-900 mb-3">
                  Delivery & Controls
                </h3>
                <ul className="space-y-2 text-pc-neutral-600">
                  <li>• Progress monitoring and reporting</li>
                  <li>• Schedule and cost management</li>
                  <li>• Change control processes</li>
                  <li>• Quality assurance oversight</li>
                </ul>
              </Card>

              <Card>
                <h3 className="text-xl font-semibold text-pc-neutral-900 mb-3">
                  Commissioning Support
                </h3>
                <ul className="space-y-2 text-pc-neutral-600">
                  <li>• Commissioning strategy and plans</li>
                  <li>• Systems integration coordination</li>
                  <li>• Handover documentation</li>
                  <li>• Lessons learned capture</li>
                </ul>
              </Card>

              <Card>
                <h3 className="text-xl font-semibold text-pc-neutral-900 mb-3">
                  Compliance & Reporting
                </h3>
                <ul className="space-y-2 text-pc-neutral-600">
                  <li>• Regulatory compliance management</li>
                  <li>• Board and executive reporting</li>
                  <li>• Audit support and documentation</li>
                  <li>• Contractual milestone tracking</li>
                </ul>
              </Card>
            </div>
          </div>

          {/* Sectors Served */}
          <div className="mb-12">
            <h2 className="text-3xl font-semibold text-pc-neutral-900 mb-6">
              Sectors Served
            </h2>
            <Card variant="elevated">
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-pc-neutral-900 mb-3">
                    Nuclear
                  </h3>
                  <p className="text-pc-neutral-600">
                    New build, decommissioning, and operational nuclear facilities with deep understanding of regulatory requirements and safety-critical environments.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-pc-neutral-900 mb-3">
                    Mining
                  </h3>
                  <p className="text-pc-neutral-600">
                    Surface and underground mining operations, processing facilities, and infrastructure development in resource-intensive environments.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-pc-neutral-900 mb-3">
                    Industrial
                  </h3>
                  <p className="text-pc-neutral-600">
                    Energy, infrastructure, and heavy industrial projects requiring rigorous project controls and stakeholder management.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* CTA Section */}
          <div className="text-center p-8 bg-pc-neutral-50 rounded-lg">
            <h2 className="text-2xl font-semibold text-pc-neutral-900 mb-4">
              Ready to discuss your project management needs?
            </h2>
            <p className="text-pc-neutral-600 mb-6 max-w-2xl mx-auto">
              Get in touch to explore how PC Quanti can deliver expert project leadership for your next industrial project.
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
