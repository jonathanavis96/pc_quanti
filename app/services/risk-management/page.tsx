import React from 'react';
import { Container, Card, Button } from '@/src/components';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Risk Management",
  description: "Proactive risk identification, assessment, and mitigation strategies for nuclear, mining, and industrial projects. Protect timelines, budgets, and outcomes with expert risk management consultancy.",
  alternates: {
    canonical: "/services/risk-management",
  },
  openGraph: {
    title: "Risk Management | PC Quanti",
    description: "Proactive risk identification, assessment, and mitigation strategies for nuclear, mining, and industrial projects. Protect timelines, budgets, and outcomes.",
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
              className="text-pc-gold hover:underline mb-4 inline-block focus:outline-none focus:ring-2 focus:ring-pc-gold focus:ring-offset-2 rounded-sm"
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
                PC Quanti provides specialised risk management services tailored to the construction and engineering sector. We help developers, contractors, and project stakeholders identify, assess, and mitigate potential risks before they impact timelines, budgets, or compliance.
              </p>
              <p className="text-pc-neutral-600 leading-relaxed mb-4">
                From project feasibility and cost exposure analysis to contractual, operational, and site-based risk evaluation, our structured approach ensures proactive decision-making and improved project certainty. By combining technical expertise with real-world industry experience, PC Quanti enables clients to minimise financial loss, manage uncertainty effectively, and deliver projects with greater confidence and control.
              </p>
              <p className="text-pc-neutral-600 leading-relaxed">
                We actively protect our clients&apos; commercial interests and contractual entitlements through rigorous project controls, transparent reporting, and disciplined construction oversight. By implementing proactive risk management strategies and maintaining accurate project data, we help minimise delays, cost overruns, and performance disputes — ensuring projects are delivered efficiently and in compliance with contractual obligations.
              </p>
            </Card>
          </div>

          {/* Service Image */}
          <div className="relative w-full h-80 md:h-96 rounded-lg overflow-hidden mb-12">
            <Image
              src="/services/services-risk-management-6.png"
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
                  Risk Identification & Assessment
                </h3>
                <ul className="space-y-2 text-pc-neutral-600">
                  <li>• Comprehensive risk registers</li>
                  <li>• Qualitative and quantitative risk analysis</li>
                  <li>• Risk probability and impact assessments</li>
                  <li>• Risk categorisation and prioritisation</li>
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
                  Specialised Risk Analysis & Financial Security
                </h3>
                <ul className="space-y-2 text-pc-neutral-600">
                  <li>• Schedule risk analysis (Monte Carlo simulation)</li>
                  <li>• Cost risk modelling</li>
                  <li>• Safety and regulatory risk assessment</li>
                  <li>• Managing and interact with bonds, guarantees, warranties and insurances.</li>
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
                    Contract terms, procurement strategies, supply chain vulnerabilities, cost escalation, claims management, and financial securities.
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
              <Link href="/services/planning" className="p-4 border border-pc-neutral-200 rounded-lg hover:border-pc-gold transition-colors focus:outline-none focus:ring-2 focus:ring-pc-gold focus:ring-offset-2">
                <h3 className="font-semibold text-pc-neutral-900 mb-2">Planning →</h3>
                <p className="text-sm text-pc-neutral-600">Critical path scheduling, cost control, and performance reporting</p>
              </Link>
              <Link href="/services/project-management" className="p-4 border border-pc-neutral-200 rounded-lg hover:border-pc-gold transition-colors focus:outline-none focus:ring-2 focus:ring-pc-gold focus:ring-offset-2">
                <h3 className="font-semibold text-pc-neutral-900 mb-2">Project Management →</h3>
                <p className="text-sm text-pc-neutral-600">End-to-end project delivery and governance</p>
              </Link>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center p-8 bg-pc-neutral-50 rounded-lg">
            <h2 className="text-2xl font-semibold text-pc-neutral-900 mb-4">
              Ready to Protect Your Project from Preventable Risks?
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
