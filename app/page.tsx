import { Hero } from "@/src/components/Hero";
import { TrustBar } from "@/src/components/TrustBar";
import { FAQ } from "@/src/components/FAQ";
import { Container } from "@/src/components/Container";
import { ServicesGrid } from "@/src/components/ServicesGrid";
import { ProcessTimeline } from "@/src/components/ProcessTimeline";
import { ProofStrip } from "@/src/components/ProofStrip";
import { CTASection } from "@/src/components/CTASection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Expert Project Management for Nuclear & Industrial Sectors",
  description: "UK nuclear project management consultancy delivering expert Project Management, Quantity Surveying, Contract Administration, Claims Management, and Project Controls for industrial sectors.",
  openGraph: {
    title: "PC Quanti | Expert Project Management for Nuclear & Industrial Sectors",
    description: "UK nuclear project management consultancy delivering expert Project Management, Quantity Surveying, Contract Administration, Claims Management, and Project Controls for industrial sectors.",
  },
};

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-white">
        <Hero
          headline="Expert Project Management for Nuclear & Industrial Sectors"
          subheadline="Lean, trusted consultancy delivering Project Management, Quantity Surveying, Contract Administration, Claims Management, and Project Controls across the UK and South Africa."
          ctaText="Get in Touch"
          ctaHref="/contact"
        />

        <TrustBar />

        <ServicesGrid />

        <ProcessTimeline />

        <ProofStrip />

        <CTASection />

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
    </>
  );
}
