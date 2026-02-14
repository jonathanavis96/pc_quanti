import { Container } from "@/src/components/Container";
import { Header } from "@/src/components/Header";
import { Footer } from "@/src/components/Footer";
import Image from "next/image";

export const metadata = {
  title: "About | PC Quanti",
  description: "Learn about Phil's background in UK nuclear project management and why PC Quanti delivers lean, expert consultancy services for industrial sectors including quantity surveying and contract administration.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="py-16 sm:py-24">
        {/* Phil's Story Section */}
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            {/* Image/Headshot placeholder */}
            <div className="order-2 lg:order-1">
              <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center">
                <div className="text-center text-gray-400">
                  <svg
                    className="mx-auto h-24 w-24 mb-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                  <p className="text-sm">Professional headshot placeholder</p>
                </div>
              </div>
            </div>

            {/* Phil's Story Content */}
            <div className="order-1 lg:order-2">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">
                About PC Quanti
              </h1>
              <div className="prose prose-lg text-gray-600 space-y-4">
                <p>
                  <strong>Phil</strong> founded PC Quanti to deliver expert project management services with the agility and focus that large consultancies can't match.
                </p>
                <p>
                  With deep experience in <strong>nuclear project environments</strong>—including five years of intensive work with a major client operating under strict confidentiality—Phil brings scarce skills to complex industrial projects. This nuclear foundation provides rigorous discipline in safety, compliance, and stakeholder coordination that translates seamlessly across sectors.
                </p>
                <p>
                  PC Quanti serves clients in <strong>nuclear, mining, infrastructure, and energy sectors</strong> across the UK and South Africa, offering project management, quantity surveying, contract administration, claims management, and project controls expertise.
                </p>
                <p>
                  The business model is simple: <strong>lean operations, trusted network access, on-ground delivery.</strong> You get experienced professionals without the overhead of big corporate consultancies.
                </p>
              </div>
            </div>
          </div>
        </Container>

        {/* Differentiators Section */}
        <Container className="mt-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Why PC Quanti?
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Four key advantages that set us apart from traditional consultancies
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Differentiator 1 */}
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
              <div className="w-12 h-12 bg-[#2C02D9]/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#2C02D9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Lean Model
              </h3>
              <p className="text-gray-600">
                No bloated overhead. You pay for expertise, not layers of corporate bureaucracy.
              </p>
            </div>

            {/* Differentiator 2 */}
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
              <div className="w-12 h-12 bg-[#2C02D9]/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#2C02D9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Scarce Skills Access
              </h3>
              <p className="text-gray-600">
                Trusted network of nuclear and industrial specialists who bring on-ground experience.
              </p>
            </div>

            {/* Differentiator 3 */}
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
              <div className="w-12 h-12 bg-[#2C02D9]/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#2C02D9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                On-Ground Delivery
              </h3>
              <p className="text-gray-600">
                We work where you work—site presence and hands-on project execution.
              </p>
            </div>

            {/* Differentiator 4 */}
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
              <div className="w-12 h-12 bg-[#2C02D9]/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#2C02D9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Sector Versatility
              </h3>
              <p className="text-gray-600">
                Nuclear discipline applied to mining, infrastructure, and energy projects across industries.
              </p>
            </div>
          </div>
        </Container>

        {/* Optional Credentials Section (flagged for Phil review) */}
        <Container className="mt-24">
          <div className="bg-gray-50 rounded-2xl p-8 sm:p-12 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Credentials & Affiliations
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              This section is reserved for professional certifications, memberships, and industry affiliations. Content pending Phil's input.
            </p>
            <p className="text-sm text-gray-500 mt-4 italic">
              (Placeholder—can be removed or populated with specific credentials)
            </p>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
