import React from 'react';
import { Container, Card, LinkButton } from '@/src/components';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Construction Management — Complex Project Execution",
  description: "Proven construction management expertise for the most challenging environments — multidisciplinary project execution in operational nuclear and petrochemical facilities, outage and shutdown management, main contractor and subcontractor oversight.",
  alternates: {
    canonical: "/services/construction-management",
  },
  openGraph: {
    title: "Construction Management | PC Quanti",
    description: "Proven construction management expertise for the most challenging environments — multidisciplinary project execution in operational nuclear and petrochemical facilities, outage and shutdown management, main contractor and subcontractor oversight.",
    url: "/services/construction-management",
  },
};

export default function ConstructionManagementPage() {
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
              Construction Management
            </h1>
            <p className="text-xl md:text-2xl text-pc-neutral-600 max-w-3xl">
              Proven track record of delivering the most complex projects in the most challenging environments — managing multidisciplinary project execution in operational nuclear and petrochemical facilities.
            </p>
          </div>

          {/* Overview */}
          <div className="mb-12">
            <Card variant="elevated">
              <h2 className="text-2xl font-semibold text-pc-neutral-900 mb-4">
                Overview
              </h2>
              <p className="text-pc-neutral-600 leading-relaxed mb-4">
                PC Quanti has a proven track record of delivering the most complex projects in the most challenging environments, including managing multidisciplinary project execution in operational nuclear and petrochemical facilities. Our construction management team brings the technical depth and operational rigour required to manage high-consequence environments safely and efficiently.
              </p>
              <p className="text-pc-neutral-600 leading-relaxed mb-4">
                We manage both main contractor and subcontractor activities, providing clients with a single, accountable management layer that coordinates all disciplines — civil, structural, mechanical, electrical, and instrumentation — through to commissioning and handover.
              </p>
              <p className="text-pc-neutral-600 leading-relaxed">
                Our construction management capability includes specialist outage and shutdown execution — coordinating engineering, procurement, and construction activities to meet tight timeframe and budget targets in live industrial environments. We manage stakeholder interfaces, operational constraints, and readiness reviews to ensure plant availability is restored safely and on schedule.
              </p>
            </Card>
          </div>

          {/* Service Image */}
          <div className="relative w-full h-80 md:h-96 rounded-lg overflow-hidden mb-12">
            <Image
              src="/services/construction-management.png"
              alt="Construction management on a complex engineering project"
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
                  Site Execution Management
                </h3>
                <ul className="space-y-2 text-pc-neutral-600">
                  <li>• Main contractor and subcontractor oversight</li>
                  <li>• Multidisciplinary coordination across all trades</li>
                  <li>• Safety management and HSE compliance</li>
                  <li>• Quality assurance and inspection management</li>
                </ul>
              </Card>

              <Card>
                <h3 className="text-xl font-semibold text-pc-neutral-900 mb-3">
                  Outage &amp; Shutdown Management
                </h3>
                <ul className="space-y-2 text-pc-neutral-600">
                  <li>• Plant shutdown and turnaround execution</li>
                  <li>• 24/7 site operations management</li>
                  <li>• Readiness reviews and pre-outage planning</li>
                  <li>• Stakeholder interface and operational constraint management</li>
                </ul>
              </Card>

              <Card>
                <h3 className="text-xl font-semibold text-pc-neutral-900 mb-3">
                  Progress &amp; Reporting
                </h3>
                <ul className="space-y-2 text-pc-neutral-600">
                  <li>• Construction progress monitoring and reporting</li>
                  <li>• Resource utilisation tracking</li>
                  <li>• Look-ahead schedule management</li>
                  <li>• Issue and risk escalation protocols</li>
                </ul>
              </Card>

              <Card>
                <h3 className="text-xl font-semibold text-pc-neutral-900 mb-3">
                  Commissioning &amp; Handover
                </h3>
                <ul className="space-y-2 text-pc-neutral-600">
                  <li>• Commissioning readiness and pre-commissioning activities</li>
                  <li>• Systems completion and punch list management</li>
                  <li>• Handover documentation and as-built records</li>
                  <li>• Lessons learned capture and post-project review</li>
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
                    High-Consequence Environments
                  </h3>
                  <p className="text-pc-neutral-600">
                    Deep experience managing construction activities in operational nuclear and petrochemical facilities — where safety, regulatory compliance, and zero-defect execution are non-negotiable.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-pc-neutral-900 mb-3">
                    Multidisciplinary Integration
                  </h3>
                  <p className="text-pc-neutral-600">
                    Proven capability to coordinate civil, structural, mechanical, piping, electrical, and instrumentation disciplines simultaneously, maintaining interface management and schedule integrity throughout.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-pc-neutral-900 mb-3">
                    Outage Expertise
                  </h3>
                  <p className="text-pc-neutral-600">
                    Specialist knowledge of plant outage and shutdown execution, including 24/7 operations, tight deadline management, and coordination with operations teams to restore plant availability on schedule.
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
                <p className="text-sm text-pc-neutral-600">Comprehensive project management across the full lifecycle</p>
              </Link>
              <Link href="/services/planning" className="p-4 border border-pc-neutral-200 rounded-lg hover:border-pc-gold transition-colors focus:outline-none focus:ring-2 focus:ring-pc-gold focus:ring-offset-2">
                <h3 className="font-semibold text-pc-neutral-900 mb-2">Planning →</h3>
                <p className="text-sm text-pc-neutral-600">Critical path scheduling, earned value management, and delay analysis</p>
              </Link>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center p-8 bg-pc-neutral-50 rounded-lg">
            <h2 className="text-2xl font-semibold text-pc-neutral-900 mb-4">
              Ready to Discuss Your Construction Management Needs?
            </h2>
            <p className="text-pc-neutral-600 mb-6 max-w-2xl mx-auto">
              Get in touch to explore how PC Quanti can deliver expert construction management for your next engineering project — including complex outage and shutdown environments.
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
