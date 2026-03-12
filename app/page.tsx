import { Hero } from "@/src/components/Hero";
import { TrustBar } from "@/src/components/TrustBar";
import { FAQ } from "@/src/components/FAQ";
import { ServicesGrid } from "@/src/components/ServicesGrid";
import { ProcessTimeline } from "@/src/components/ProcessTimeline";
import { ProofStrip } from "@/src/components/ProofStrip";
import { CTASection } from "@/src/components/CTASection";
import { SectorsTrustGrid } from "@/src/components/SectorsTrustGrid";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PC Quanti — Engineering & Construction Consulting Services",
  description: "PC Quanti delivers engineering and construction consulting services internationally — nuclear, power generation, oil and gas, and major infrastructure projects across South Africa, the United Kingdom, and beyond.",
  openGraph: {
    title: "PC Quanti — Engineering & Construction Consulting Services",
    description: "PC Quanti delivers engineering and construction consulting services internationally — nuclear, power generation, oil and gas, and major infrastructure projects across South Africa, the United Kingdom, and beyond.",
  },
};

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-white">
        <Hero
          headline="Engineering & Construction Consulting Services"
          subheadline="Delivering professional engineering and construction consulting services across the full project lifecycle — nuclear and coal-fired power generation, oil & gas, and major infrastructure in South Africa, the United Kingdom, and other international markets. We specialise in technically complex projects where disciplined contract management, planning and commercial control are critical to successful delivery."
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

        {/* Management Core Team Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-pc-neutral-500 mb-3">Our People</p>
              <h2 className="text-3xl font-bold text-pc-neutral-900 mb-4">Management Core Team</h2>
              <p className="text-lg text-pc-neutral-600 max-w-3xl mx-auto">
                PC Quanti&apos;s strength lies in its highly qualified and committed team of engineering,
                construction and commercial professionals — combining technical expertise with disciplined
                commercial management, always guided by integrity and accountability.
              </p>
              <p className="text-base text-pc-neutral-500 max-w-2xl mx-auto mt-3">
                We operate on an expandable team model, scaling with vetted specialists and
                associates to match the demands of each project.
              </p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
              {[
                { name: "Phil Coleman", role: "Managing Director", image: "/team/phil.jpg" },
                { name: "Tyrone Juul", role: "Project, Construction & Contract Management", image: "/team/tyrone.jpg" },
                { name: "Heleene Schreuder", role: "Legal", image: "/team/heleene.jpg" },
                { name: "Francois Venter", role: "Planning", image: "/team/francois.jpg" },
                { name: "Jonathan Ely", role: "Adjudication & Arbitration", image: "/team/jonathan.jpg" },
              ].map((member) => (
                <div key={member.name} className="text-center">
                  <div className="relative mx-auto w-32 h-32 mb-4 overflow-hidden rounded-full border-2 border-pc-neutral-200">
                    <Image src={member.image} alt={member.name} fill className="object-cover object-[center_20%] scale-[1.25]" sizes="128px" />
                  </div>
                  <h3 className="font-semibold text-pc-neutral-900">{member.name}</h3>
                  <p className="text-sm text-pc-gold mt-1">{member.role}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-10">
              <Link
                href="/team"
                className="inline-flex items-center justify-center rounded-lg border border-pc-neutral-300 px-6 py-3 text-sm font-semibold text-pc-neutral-900 hover:border-pc-gold hover:text-pc-gold transition-colors"
              >
                Meet the management team →
              </Link>
            </div>
          </div>
        </section>

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
              answer: "Our mission is to deliver engineering and construction management excellence that reliably translates technical capability into commercial success. We believe the foundation of every great project lies in disciplined planning, rigorous risk and value management, clear communication and an unwavering commitment to quality at every stage of the project lifecycle. Our philosophy is rooted in adding measurable value through proactive problem-solving, ethical practice and collaboration with all stakeholders — ensuring projects are delivered safely, on time and within budget."
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
