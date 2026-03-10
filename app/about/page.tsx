import { Container } from "@/src/components/Container";
import { Button } from "@/src/components/Button";
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
        {/* Phil's Story Section */}
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            {/* Image/Headshot placeholder */}
            <div className="order-2 lg:order-1">
              <div className="aspect-square bg-gradient-to-br from-pc-neutral-100 to-pc-neutral-200 rounded-2xl flex items-center justify-center">
                <div className="text-center text-pc-neutral-400">
                  <svg
                    className="mx-auto h-24 w-24 mb-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                  <p className="text-sm">Professional headshot</p>
                </div>
              </div>
            </div>

            {/* Phil's Story Content */}
            <div className="order-1 lg:order-2">
              <h1 className="text-4xl font-bold tracking-tight text-pc-neutral-900 sm:text-5xl mb-6">
                About PC Quanti
              </h1>
              <div className="prose prose-lg text-pc-neutral-600 space-y-4">
                <p>
                  PC Quanti was established to provide clear, independent and highly disciplined support to organisations operating in complex engineering and construction environments. Our focus is on bringing structure, transparency and professional judgement to projects where technical detail, commercial pressure and contractual obligation intersect. With a measured, analytical approach and a strong emphasis on integrity, PC Quanti partners with clients to help them understand challenges, evaluate options and move forward with confidence — whether during live project delivery or when matters require formal resolution.
                </p>
                <p>
                  After obtaining a B.Sc in Construction Management at the University of Pretoria, <strong>Phil Coleman</strong> spent 13 years in the United Kingdom working on major engineering and construction projects for global infrastructure leader Vinci SA, and its subsidiaries Norwest Holst and Vinci Construction (formally Taylor Woodrow Construction), excelling in the fields of Quantity Surveying, Commercial Management, Project Controls and Project Management. After joining Group Five Nuclear in 2013 as part of their senior management team as Divisional Commercial Manager, Phil became Programme Manager of Group Five Nuclear Division in 2017, tasked with the successful implementation of the iconic <strong>PTR Tanks and Steam Generators Replacement Projects</strong>.
                </p>
                <p>
                  In 2020, with years of major projects experience covering all aspects of the project life-cycle in South Africa and abroad, in the areas of civil structures, and mechanical / electrical service and infrastructure such as <strong>airports developments and nuclear construction at the highest level</strong>, Phil launched PC quanti, a multi-discipline project services company which has provided services on major engineering projects in the nuclear industry and other industrial sectors since inception.
                </p>
                <p>
                  At PC Quanti our mission is to deliver engineering and construction management excellence that reliably translates technical capability into commercial success. We believe the foundation of every great project lies in <strong>disciplined planning, rigorous risk and value management, clear communication</strong> and an unwavering commitment to quality at every stage of the project life cycle.
                </p>
                <p>
                  Our philosophy is rooted in adding measurable value for clients through proactive problem-solving, ethical practice and collaboration with all stakeholders — ensuring projects are delivered safely, on time and within budget while exceeding expectations in performance and long-term operational success.
                </p>
              </div>
            </div>
          </div>
        </Container>

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
            <div className="bg-white p-6 rounded-xl border border-pc-neutral-200 shadow-sm">
              <div className="w-12 h-12 bg-pc-gold/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-pc-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
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
            <div className="bg-white p-6 rounded-xl border border-pc-neutral-200 shadow-sm">
              <div className="w-12 h-12 bg-pc-gold/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-pc-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
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
            <div className="bg-white p-6 rounded-xl border border-pc-neutral-200 shadow-sm">
              <div className="w-12 h-12 bg-pc-gold/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-pc-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
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
            <div className="bg-white p-6 rounded-xl border border-pc-neutral-200 shadow-sm">
              <div className="w-12 h-12 bg-pc-gold/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-pc-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
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
