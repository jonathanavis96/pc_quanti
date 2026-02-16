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

        {/* Trust Markers / Credibility Section */}
        <SectorsTrustGrid />

        <ProcessTimeline />

        <ProofStrip />

        <CTASection />

        {/* FAQ Preview Section */}
        <FAQ 
          items={[
            {
              question: "What sectors do you serve?",
              answer: "We specialize in nuclear, mining, infrastructure, and energy sectors across the UK and South Africa. Our experience spans new build nuclear facilities, decommissioning projects, mining operations, and industrial infrastructure development in highly regulated environments."
            },
            {
              question: "How does your lean model benefit clients?",
              answer: "Our lean consultancy model eliminates corporate overhead while maintaining expert delivery. You get direct access to senior professionals without the markup of large firms, faster decision-making, flexible engagement models, and personalized attention to your project's unique challenges."
            },
            {
              question: "What qualifications and experience does your team have?",
              answer: "Our team brings decades of combined experience in nuclear and industrial project management, with professional certifications including chartered quantity surveying, project management qualifications, and deep sector-specific expertise. We've delivered critical projects across challenging environments in both the UK and South Africa."
            },
            {
              question: "Do you handle international projects?",
              answer: "Yes, we operate across the UK and South Africa with proven capability for both on-site and remote delivery. Our international experience enables us to navigate different regulatory frameworks, manage cross-border teams, and deliver projects efficiently regardless of location."
            }
          ]}
          ctaText="Still have questions?"
          ctaLabel="Contact Us"
        />

      </main>
    </>
  );
}
