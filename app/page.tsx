import { Hero } from "@/src/components/Hero";
import { TrustBar } from "@/src/components/TrustBar";
import { FAQ } from "@/src/components/FAQ";
import { ServicesGrid } from "@/src/components/ServicesGrid";
import { ProcessTimeline } from "@/src/components/ProcessTimeline";
import { ProofStrip } from "@/src/components/ProofStrip";
import { CTASection } from "@/src/components/CTASection";
import { SectorsTrustGrid } from "@/src/components/SectorsTrustGrid";
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
        <SectorsTrustGrid />
      </main>
    </>
  );
}
