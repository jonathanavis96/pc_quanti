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
  title: "PC Quanti — Engineering & Construction Management",
  description: "PC Quanti is an engineering and construction management consultancy delivering professional services across the full project life cycle in nuclear, power generation, oil and gas, and major infrastructure developments.",
  openGraph: {
    title: "PC Quanti — Engineering & Construction Management",
    description: "PC Quanti is an engineering and construction management consultancy delivering professional services across the full project life cycle in nuclear, power generation, oil and gas, and major infrastructure developments.",
  },
};

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-white">
        <Hero
          headline="Engineering & Construction Management Consultancy"
          subheadline="Delivering professional services across the full project life cycle — nuclear and coal-fired power generation, oil and gas, and major infrastructure developments in South Africa, the United Kingdom and international markets."
          ctaText="Get in Touch"
          ctaHref="/contact"
        />

        <TrustBar />

        <ServicesGrid />

        {/* Sector Credibility Section */}
        <SectorsTrustGrid />

        <ProcessTimeline />

        <ProofStrip />

        <CTASection />

        {/* FAQ Section */}
        <FAQ
          items={[
            {
              question: "What sectors does PC Quanti serve?",
              answer: "We have extensive experience in nuclear and coal-fired power generation, oil and gas, and major infrastructure developments including airport projects. Our multi-disciplinary team has successfully delivered services across these sectors, supporting complex and technically demanding environments throughout the full project lifecycle — from early concept and planning through execution, delivery, and hand-over."
            },
            {
              question: "Which contract frameworks do you work with?",
              answer: "We operate across a wide range of contract frameworks, including NEC3, NEC4, FIDIC, GCC, and JBCC. Our expertise spans project and engineering management, construction management, planning and scheduling, quantity surveying, cost and value management, risk management, contract and claims management, as well as dispute resolution, adjudication and arbitration — with a proven track record of delivering complex major EPC projects."
            },
            {
              question: "Do you work internationally?",
              answer: "Yes. Our professionals have successfully delivered services across South Africa, the United Kingdom, and other international markets. We navigate different regulatory frameworks, manage cross-border teams, and bring deep practical experience working with employers, contractors, consultants, and legal teams around the world — whether during live project delivery or when matters require formal resolution."
            },
            {
              question: "What is PC Quanti's approach to project delivery?",
              answer: "Our mission is to deliver engineering and construction management excellence that reliably translates technical capability into commercial success. We believe the foundation of every great project lies in disciplined planning, rigorous risk and value management, clear communication and an unwavering commitment to quality at every stage of the project life cycle. Our philosophy is rooted in adding measurable value through proactive problem-solving, ethical practice and collaboration with all stakeholders — ensuring projects are delivered safely, on time and within budget."
            },
            {
              question: "What qualifications and experience does your team bring?",
              answer: "PC Quanti's strength lies in its highly qualified team of engineering, construction and commercial professionals. Our specialists bring extensive experience across power generation, oil and gas, and large-scale infrastructure projects, with backgrounds spanning project management, quantity surveying, planning, contract administration, construction management, and dispute resolution. Our team includes an admitted attorney of the High Court and accredited arbitrator and adjudicator — combining technical expertise with legal acumen to deliver disciplined execution and measurable value."
            },
            {
              question: "Do you provide dispute resolution services?",
              answer: "Yes. While our primary focus is dispute avoidance through strong planning and contract administration, we provide specialist advice and representation across all formal and alternative dispute resolution forums when required. Our services include strategic guidance on contractual dispute procedures, preparation of statements of claim and defence for adjudication and arbitration proceedings, evidentiary preparation, coordination of expert input, and drafting enforceable settlement agreements designed to achieve efficient and sustainable outcomes."
            }
          ]}
          ctaText="Still have questions?"
          ctaLabel="Get in Touch"
        />

      </main>
    </>
  );
}
