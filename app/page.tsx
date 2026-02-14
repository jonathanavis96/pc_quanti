import Image from "next/image";
import Link from "next/link";
import { Button } from "@/src/components/Button";
import { Card } from "@/src/components/Card";
import { Container } from "@/src/components/Container";
import { Hero } from "@/src/components/Hero";
import { TrustBar } from "@/src/components/TrustBar";
import { FAQ } from "@/src/components/FAQ";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Expert Project Management for Nuclear & Industrial Sectors",
  description: "Lean, trusted consultancy delivering Project Management, Quantity Surveying, Contract Administration, Claims Management, and Project Controls across the UK and South Africa.",
  openGraph: {
    title: "PC Quanti | Expert Project Management for Nuclear & Industrial Sectors",
    description: "Lean, trusted consultancy delivering Project Management, Quantity Surveying, Contract Administration, Claims Management, and Project Controls across the UK and South Africa.",
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <Hero
          headline="Expert Project Management for Nuclear & Industrial Sectors"
          subheadline="Lean, trusted consultancy delivering Project Management, Quantity Surveying, Contract Administration, Claims Management, and Project Controls across the UK and South Africa."
          ctaText="Get in Touch"
          ctaHref="/contact"
        />

        <TrustBar />

        {/* Value Proposition Section */}
        {/* TODO(DESIGN): Review card layout and icon placement */}
        <section className="py-16 md:py-24">
          <Container maxWidth="lg">
            <h2 className="text-3xl font-bold text-pc-neutral-900 text-center mb-12">
              Why Choose PC Quanti
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card variant="outlined" padding="lg">
                {/* TODO(DESIGN): Add icon or visual element */}
                <h3 className="text-xl font-semibold text-pc-neutral-900 mb-3">
                  Nuclear Expertise
                </h3>
                <p className="text-pc-neutral-600">
                  Deep experience in nuclear and high-compliance industrial projects
                </p>
              </Card>
              <Card variant="outlined" padding="lg">
                {/* TODO(DESIGN): Add icon or visual element */}
                <h3 className="text-xl font-semibold text-pc-neutral-900 mb-3">
                  Lean Model
                </h3>
                <p className="text-pc-neutral-600">
                  Low overhead consultancy without the big firm premium
                </p>
              </Card>
              <Card variant="outlined" padding="lg">
                {/* TODO(DESIGN): Add icon or visual element */}
                <h3 className="text-xl font-semibold text-pc-neutral-900 mb-3">
                  Trusted Network
                </h3>
                <p className="text-pc-neutral-600">
                  Access to scarce PM and QS skills through proven partnerships
                </p>
              </Card>
              <Card variant="outlined" padding="lg">
                {/* TODO(DESIGN): Add icon or visual element */}
                <h3 className="text-xl font-semibold text-pc-neutral-900 mb-3">
                  On-Ground Experience
                </h3>
                <p className="text-pc-neutral-600">
                  Real-world delivery in nuclear, mining, and infrastructure sectors
                </p>
              </Card>
            </div>
          </Container>
        </section>

        {/* Services Grid Section */}
        {/* TODO(DESIGN): Review card styling and hover states */}
        <section className="py-16 md:py-24 bg-pc-neutral-50">
          <Container maxWidth="lg">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-pc-neutral-900 mb-4">
                Our Services
              </h2>
              {/* TODO(PHIL): Approve/replace services intro */}
              <p className="text-lg text-pc-neutral-600 max-w-2xl mx-auto">
                PC Quanti provides specialized project management services tailored to nuclear, mining, infrastructure, and energy sectors. We combine deep technical expertise with a lean, agile delivery model.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Service 1: Project Management */}
              <Card variant="elevated" padding="lg">
                {/* TODO(DESIGN): Add service icon */}
                <h3 className="text-xl font-semibold text-pc-neutral-900 mb-3">
                  Project Management
                </h3>
                <p className="text-pc-neutral-600 mb-4">
                  Professional project leadership from initiation through closeout, with proven experience in complex nuclear and industrial environments.
                </p>
                <Link href="/services/project-management">
                  <Button variant="outline" size="sm">
                    Learn More
                  </Button>
                </Link>
              </Card>

              {/* Service 2: Quantity Surveying */}
              <Card variant="elevated" padding="lg">
                {/* TODO(DESIGN): Add service icon */}
                <h3 className="text-xl font-semibold text-pc-neutral-900 mb-3">
                  Quantity Surveying
                </h3>
                <p className="text-pc-neutral-600 mb-4">
                  Accurate cost estimation, budget control, and commercial management to keep projects on track financially.
                </p>
                <Link href="/services/quantity-surveying">
                  <Button variant="outline" size="sm">
                    Learn More
                  </Button>
                </Link>
              </Card>

              {/* Service 3: Contract Administration */}
              <Card variant="elevated" padding="lg">
                {/* TODO(DESIGN): Add service icon */}
                <h3 className="text-xl font-semibold text-pc-neutral-900 mb-3">
                  Contract Administration
                </h3>
                <p className="text-pc-neutral-600 mb-4">
                  Expert contract management ensuring compliance, mitigating risks, and maintaining smooth stakeholder relationships.
                </p>
                <Link href="/services/contract-administration">
                  <Button variant="outline" size="sm">
                    Learn More
                  </Button>
                </Link>
              </Card>

              {/* Service 4: Claims Management */}
              <Card variant="elevated" padding="lg">
                {/* TODO(DESIGN): Add service icon */}
                <h3 className="text-xl font-semibold text-pc-neutral-900 mb-3">
                  Claims Management
                </h3>
                <p className="text-pc-neutral-600 mb-4">
                  Specialist support for contract claims, disputes, and negotiations, protecting your project interests.
                </p>
                <Link href="/services/claims-management">
                  <Button variant="outline" size="sm">
                    Learn More
                  </Button>
                </Link>
              </Card>

              {/* Service 5: Project Controls */}
              <Card variant="elevated" padding="lg">
                {/* TODO(DESIGN): Add service icon */}
                <h3 className="text-xl font-semibold text-pc-neutral-900 mb-3">
                  Project Controls
                </h3>
                <p className="text-pc-neutral-600 mb-4">
                  Integrated planning, scheduling, and performance monitoring to deliver projects on time and within budget.
                </p>
                <Link href="/services/project-controls">
                  <Button variant="outline" size="sm">
                    Learn More
                  </Button>
                </Link>
              </Card>
            </div>
          </Container>
        </section>

        {/* How It Works Section */}
        <section className="py-16 md:py-24 bg-white">
          <Container maxWidth="lg">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-pc-neutral-900 mb-4">
                How It Works
              </h2>
              <p className="text-lg text-pc-neutral-600 max-w-2xl mx-auto">
                Getting started with PC Quanti is straightforward. We focus on understanding your needs and delivering results quickly.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-pc-blue text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="text-xl font-semibold text-pc-neutral-900 mb-3">
                  Initial Consultation
                </h3>
                <p className="text-pc-neutral-600">
                  Reach out via our contact form or phone. We&apos;ll discuss your project scope, timeline, and specific requirements.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-pc-blue text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="text-xl font-semibold text-pc-neutral-900 mb-3">
                  Tailored Proposal
                </h3>
                <p className="text-pc-neutral-600">
                  We prepare a clear proposal outlining our approach, deliverables, and resource allocation from our trusted network.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-pc-blue text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="text-xl font-semibold text-pc-neutral-900 mb-3">
                  Project Delivery
                </h3>
                <p className="text-pc-neutral-600">
                  Our team mobilizes quickly, delivering expert project management with regular updates and transparent communication.
                </p>
              </div>
            </div>
            <div className="text-center">
              <Link href="/contact">
                <Button variant="primary" size="lg">
                  Start a Conversation
                </Button>
              </Link>
            </div>
          </Container>
        </section>

        {/* FAQ Preview Section */}
        <FAQ 
          items={[
            {
              question: "What sectors do you serve?",
              answer: "TODO(PHIL): Specify primary sectors - nuclear, industrial, infrastructure, etc. Mention geographic focus (UK & South Africa)."
            },
            {
              question: "How does your lean model benefit clients?",
              answer: "TODO(PHIL): Explain cost savings, flexibility, personalized attention vs. big consultancies."
            },
            {
              question: "What qualifications and experience does your team have?",
              answer: "TODO(PHIL): Highlight nuclear background, certifications, years of experience, notable projects."
            },
            {
              question: "Do you handle international projects?",
              answer: "TODO(PHIL): Clarify UK & South Africa capabilities, remote/on-site delivery, travel arrangements."
            }
          ]}
          ctaText="Still have questions?"
          ctaLabel="Contact Us"
        />

        {/* Trust Markers / Credibility Section */}
        {/* TODO(DESIGN): Review layout and visual hierarchy for credibility markers */}
        <section className="py-16 md:py-24 bg-white">
          <Container maxWidth="lg">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-pc-neutral-900 mb-8">
                Trusted Across Key Sectors
              </h2>
              <div className="flex flex-wrap justify-center gap-8 text-pc-neutral-600">
                <div>
                  <div className="text-4xl font-bold text-pc-blue mb-2">Nuclear</div>
                  <p className="text-sm">High-compliance project delivery</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-pc-blue mb-2">Mining</div>
                  <p className="text-sm">Industrial project expertise</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-pc-blue mb-2">Infrastructure</div>
                  <p className="text-sm">Large-scale programme management</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-pc-blue mb-2">Energy</div>
                  <p className="text-sm">Complex project controls</p>
                </div>
              </div>
              {/* TODO(PHIL): Add years of experience or other quantifiable credibility markers */}
            </div>
          </Container>
        </section>
      </main>

      {/* Footer */}
      {/* TODO(DESIGN): Review footer layout and information architecture */}
      <footer className="bg-pc-neutral-900 text-white py-12">
        <Container maxWidth="lg">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Image
                  src="/logo.png"
                  alt="PC Quanti logo"
                  width={40}
                  height={40}
                />
                <span className="text-lg font-semibold">PC Quanti</span>
              </div>
              <p className="text-pc-neutral-400">
                Expert project management services for nuclear and industrial sectors
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-pc-neutral-400">
                <li>
                  <Link href="/" className="hover:text-white transition-colors">Home</Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-white transition-colors">About</Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-white transition-colors">Services</Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              {/* TODO(PHIL): Add actual contact details */}
              <ul className="space-y-2 text-pc-neutral-400">
                <li>Email: info@pcquanti.com</li>
                <li>UK & South Africa</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-pc-neutral-700 pt-8 text-center text-pc-neutral-400 text-sm">
            <p>&copy; 2026 PC Quanti. All rights reserved.</p>
          </div>
        </Container>
      </footer>
    </div>
  );
}
