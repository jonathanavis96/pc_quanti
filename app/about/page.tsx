import { Container } from "@/src/components/Container";
import { Button } from "@/src/components/Button";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "PC quanti - About us",
  description:
    "PC Quanti was established to provide clear, independent and highly disciplined support to organisations operating in complex engineering and construction environments. Specialist provider of technical, commercial, and contractual advisory services for complex engineering and construction projects.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "PC quanti - About us",
    description:
      "PC Quanti is a specialist provider of technical, commercial, and contractual advisory services for complex engineering and construction projects. Supporting clients through every stage of the project lifecycle with engineering insight and commercial rigour.",
  },
};

export default function AboutPage() {
  return (
    <main className="py-16 sm:py-24">

        {/* Intro */}
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-pc-neutral-500 mb-3">About Us</p>
            <h1 className="text-4xl font-bold tracking-tight text-pc-neutral-900 sm:text-5xl mb-6">
              About PC Quanti
            </h1>
            <p className="text-lg text-pc-neutral-600">
              PC Quanti was established to provide clear, independent and highly disciplined support to organisations operating in complex engineering and construction environments — bringing structure, transparency and professional judgement to projects where technical detail, commercial pressure and contractual obligation intersect.
            </p>
          </div>
        </Container>

        {/* Section 1: Who We Are — image left, text right */}
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center mb-24">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="/about/who-we-are.jpg"
                alt="PC Quanti team in consultation"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-pc-neutral-500 mb-3">Who We Are</p>
              <h2 className="text-3xl font-bold tracking-tight text-pc-neutral-900 mb-6">
                Expertise You Can Trust
              </h2>
              <div className="space-y-4 text-pc-neutral-600 leading-relaxed">
                <p>
                  PC Quanti is a specialist provider of technical, commercial, and contractual advisory services for complex engineering and construction projects. We support clients through every stage of the project lifecycle — from early concept and planning through execution, delivery, and hand-over — helping them manage uncertainty, optimise value, and achieve successful outcomes.
                </p>
                <p>
                  Our multidisciplinary team has deep practical experience in delivering and overseeing major infrastructure, power generation, and oil &amp; gas programmes, working with employers, contractors, consultants, and legal teams around the world. By combining engineering insight with commercial rigour, PC Quanti brings clarity to cost, contract, programme, and risk.
                </p>
                <p>
                  We understand the demands of internationally recognised contract suites including NEC3, NEC4, FIDIC, GCC and JBCC, and bring thorough, structured discipline to cost planning, project controls, contract administration, and claims management.
                </p>
              </div>
            </div>
          </div>
        </Container>

        {/* Section 2: What We Do — text left, image right */}
        <div className="bg-pc-neutral-50 py-20 mb-24">
          <Container>
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-pc-neutral-500 mb-3">What We Do</p>
                <h2 className="text-3xl font-bold tracking-tight text-pc-neutral-900 mb-6">
                  Supporting Project Success
                </h2>
                <div className="space-y-4 text-pc-neutral-600 leading-relaxed">
                  <p>
                    At PC Quanti, we provide a broad suite of expert services designed to enhance the planning, delivery, and commercial governance of engineering projects — including project and contract management, cost and value engineering, planning and scheduling, risk management, and independent expert support in dispute resolution.
                  </p>
                  <p>
                    Our approach is evidence-based and focused on ensuring that projects are delivered in compliance with schedule, budget, quality and contractual obligation. We apply rigorous analysis to project data and commercial frameworks, enabling stakeholders to understand entitlement, quantify claims, and navigate complex disputes with confidence.
                  </p>
                  <p>
                    Our mission is to deliver engineering and construction management excellence that reliably translates technical capability into commercial success — rooted in <strong>disciplined planning, rigorous risk management, and clear communication</strong> at every stage of the project life cycle.
                  </p>
                </div>
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src="/about/what-we-do.jpg"
                  alt="PC Quanti project delivery"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </Container>
        </div>

        {/* Differentiators Section */}
        <Container className="mt-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-pc-neutral-900 sm:text-4xl">
              Why choose PC Quanti?
            </h2>
            <p className="mt-4 text-lg text-pc-neutral-600 max-w-2xl mx-auto">
              PC Quanti delivers expert engineering and construction management services across the entire project life cycle, combining deep technical insight with commercial rigour to support complex and technically demanding endeavours.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Differentiator 1 */}
            <div className="bg-white p-6 rounded-xl border border-pc-neutral-200 shadow-sm text-center">
              <div className="flex justify-center mb-4 text-pc-gold">
                <svg viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10" aria-hidden>
                  {/* Gantt/schedule bars with arrow — structured execution */}
                  <rect x="6" y="9" width="16" height="5" rx="1" fill="currentColor" fillOpacity="0.12" /><rect x="6" y="9" width="16" height="5" rx="1" />
                  <rect x="12" y="18" width="20" height="5" rx="1" fill="currentColor" fillOpacity="0.12" /><rect x="12" y="18" width="20" height="5" rx="1" />
                  <rect x="6" y="27" width="12" height="5" rx="1" fill="currentColor" fillOpacity="0.12" /><rect x="6" y="27" width="12" height="5" rx="1" />
                  {/* Completion arrow */}
                  <polyline points="30,29 36,29" strokeWidth="2" />
                  <polyline points="33,26 36,29 33,32" strokeWidth="2" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-pc-neutral-900 mb-2">
                Structured Project Execution
              </h3>
              <p className="text-pc-neutral-600">
                Effective project execution forms the foundation of our business. We specialise in transforming technical and contractual complexity into measurable project success through structured planning and disciplined project controls.
              </p>
            </div>

            {/* Differentiator 2 */}
            <div className="bg-white p-6 rounded-xl border border-pc-neutral-200 shadow-sm text-center">
              <div className="flex justify-center mb-4 text-pc-gold">
                <svg viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10" aria-hidden>
                  {/* Eye — oversight / monitoring */}
                  <path d="M4 22 Q22 6 40 22 Q22 38 4 22 Z" fill="currentColor" fillOpacity="0.08" />
                  <path d="M4 22 Q22 6 40 22 Q22 38 4 22 Z" />
                  <circle cx="22" cy="22" r="5" fill="currentColor" fillOpacity="0.15" />
                  <circle cx="22" cy="22" r="5" />
                  <circle cx="22" cy="22" r="2" fill="currentColor" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-pc-neutral-900 mb-2">
                Comprehensive Oversight
              </h3>
              <p className="text-pc-neutral-600">
                End-to-end project and construction management services, overseeing the full spectrum of activities required to meet programme milestones, regulatory obligations, contractual requirements, and client performance objectives.
              </p>
            </div>

            {/* Differentiator 3 */}
            <div className="bg-white p-6 rounded-xl border border-pc-neutral-200 shadow-sm text-center">
              <div className="flex justify-center mb-4 text-pc-gold">
                <svg viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10" aria-hidden>
                  {/* Shield with warning triangle — risk management */}
                  <path d="M22 4 L36 10 L36 24 C36 32 22 40 22 40 C22 40 8 32 8 24 L8 10 Z" fill="currentColor" fillOpacity="0.08" />
                  <path d="M22 4 L36 10 L36 24 C36 32 22 40 22 40 C22 40 8 32 8 24 L8 10 Z" />
                  {/* Exclamation mark inside shield */}
                  <line x1="22" y1="17" x2="22" y2="26" strokeWidth="2.2" />
                  <circle cx="22" cy="30" r="1.2" fill="currentColor" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-pc-neutral-900 mb-2">
                Risk Management
              </h3>
              <p className="text-pc-neutral-600">
                We actively protect our clients&apos; commercial interests through rigorous project controls, transparent reporting, and disciplined construction oversight — minimising delays, cost overruns, and performance disputes.
              </p>
            </div>

            {/* Differentiator 4 */}
            <div className="bg-white p-6 rounded-xl border border-pc-neutral-200 shadow-sm text-center">
              <div className="flex justify-center mb-4 text-pc-gold">
                <svg viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10" aria-hidden>
                  {/* Balance scales — dispute resolution */}
                  <line x1="22" y1="6" x2="22" y2="38" />
                  <line x1="10" y1="38" x2="34" y2="38" />
                  <line x1="8" y1="14" x2="36" y2="14" />
                  {/* Left pan */}
                  <path d="M8 14 L5 22 Q8 26 11 22 Z" fill="currentColor" fillOpacity="0.12" />
                  <path d="M8 14 L5 22 Q8 26 11 22 Z" />
                  {/* Right pan */}
                  <path d="M36 14 L33 22 Q36 26 39 22 Z" fill="currentColor" fillOpacity="0.12" />
                  <path d="M36 14 L33 22 Q36 26 39 22 Z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-pc-neutral-900 mb-2">
                Dispute Resolution
              </h3>
              <p className="text-pc-neutral-600">
                Highly experienced in construction claims, adjudication, arbitration, and formal dispute resolution proceedings — building long-term client relationships by consistently adding measurable value and professional excellence.
              </p>
            </div>
          </div>
        </Container>

        {/* Credentials Section */}
        <Container className="mt-24">
          <div className="bg-pc-neutral-50 rounded-2xl p-8 sm:p-12 text-center">
            <h2 className="text-2xl font-bold text-pc-neutral-900 mb-4">
              Professional Standards
            </h2>
            <p className="text-pc-neutral-600 max-w-2xl mx-auto">
              PC Quanti operates across a wide range of internationally recognised contract frameworks, including NEC3, NEC4, FIDIC, GCC, and JBCC. Our team&apos;s experience is aligned to RICS, APM, and sector-specific regulatory requirements — ensuring thorough, structured discipline in cost planning, project controls, contract administration, and claims management.
            </p>
          </div>
        </Container>

        {/* CTA Section with internal links */}
        <Container className="mt-16">
          <div className="bg-white rounded-2xl p-8 sm:p-12 text-center border border-pc-neutral-200">
            <h2 className="text-2xl font-bold text-pc-neutral-900 mb-4">
              Ready to Explore Our Services?
            </h2>
            <p className="text-pc-neutral-600 max-w-2xl mx-auto mb-6">
              Discover how PC Quanti can support your next programme with expert project management, quantity surveying, contract administration, and claims management services.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/services">
                <Button variant="primary" size="lg">
                  View Services
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="secondary" size="lg">
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </main>
  );
}
