import { Container, LinkButton } from "@/src/components";
import { ProjectImageCarousel } from "@/src/components/ProjectImageCarousel";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Key Projects — Nuclear & Industrial Engineering Portfolio | PC Quanti",
  description:
    "PC Quanti's project portfolio showcases landmark engineering and construction achievements at Koeberg Nuclear Power Station — including the PTR Tanks life extension and Steam Generator replacement. Expert NEC contract management, project controls, and construction oversight in safety-critical environments.",
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: "Key Projects | PC Quanti",
    description:
      "Case studies from Koeberg Nuclear Power Station: PTR Tanks life extension and Steam Generator replacement — delivered under NEC contract with expert project management and construction oversight.",
    url: "/projects",
  },
};

const projects = [
  {
    id: "ptr-tanks",
    title: "PTR Tanks Project",
    subtitle: "20-Year Life Extension — Koeberg Nuclear Power Station",
    sector: "Nuclear Power Generation",
    contract: "NEC Option A",
    location: "Koeberg, South Africa",
    services: [
      "Project Management",
      "Contract Administration",
      "Construction Oversight",
      "Planning & Scheduling",
    ],
    challenge:
      "Koeberg Nuclear Power Station required two new borated water storage tanks to support its 20-year life extension programme. Each tank had to be manufactured and installed to the highest nuclear standards within a live, tightly regulated nuclear environment — with zero tolerance for quality deviations.",
    scope:
      "Delivered end-to-end project management and NEC Option A contract administration from early design through final commissioning. Each tank was fabricated in SAF2205 Duplex Stainless Steel to ASME III code, with 100% radiographic weld examination required throughout. Installation involved the deployment of a 500-ton crawler crane for lifting operations and the precise integration of complex piping and services connections.",
    outcome:
      "The project was successfully delivered within the required nuclear quality assurance framework, contributing to Koeberg's continued safe and reliable operation. Structured contract administration and programme planning ensured all milestones were tracked, communicated, and met within the constraints of the nuclear environment.",
    images: [
      {
        src: "/projects/ptr/1-ptr-tank-internal-view-koeberg.webp",
        alt: "Internal view of PTR borated water storage tank at Koeberg Nuclear Power Station",
      },
      {
        src: "/projects/ptr/2-ptr-tank-man-cage-inspection.webp",
        alt: "Man cage inspection inside PTR tank during construction at Koeberg",
      },
      {
        src: "/projects/ptr/3-ptr-tank-internal-man-cage-overhead.webp",
        alt: "Overhead view of PTR tank interior with man cage during weld inspection",
      },
      {
        src: "/projects/ptr/4-ptr-tank-roof-slinging-crane.webp",
        alt: "PTR tank roof slinging operation using 500-ton crawler crane at Koeberg",
      },
    ],
  },
  {
    id: "steam-generator",
    title: "Steam Generator Replacement",
    subtitle: "20-Year Life Extension — Koeberg Nuclear Power Station",
    sector: "Nuclear Power Generation",
    contract: "NEC3 Option A",
    location: "Koeberg, South Africa",
    services: [
      "Project Management",
      "Contract Administration",
      "Construction Management",
      "Planning",
      "Quantity Surveying",
      "Commercial Management",
      "Risk Management",
    ],
    challenge:
      "Replacing six steam generators — three per operating unit, each weighing approximately 350 tons — required meticulous multi-year coordination of site implementation phase across heavy transport, rigging, and nuclear quality installation within live plant and outage windows.",
    scope:
      "PC Quanti provided comprehensive project management and NEC3 Option A contract and construction management to the plant OEM, throughout the complete implementation phase. Services included subcontractor coordination across multiple specialist firms, detailed outage scheduling for precision welding operations, and ongoing project controls and planning to maintain programme integrity against stringent nuclear safety and quality standards.",
    outcome:
      "The Steam Generator Replacement was completed as a critical enabler of Koeberg's 20-year life extension — one of the most technically complex projects undertaken at the station. PC Quanti's structured approach to contract management, risk identification, and planning as an integrated delivery team delivered the project within the required quality, safety, cost, and schedule parameters.",
    images: [
      {
        src: "/projects/knps/1-koeberg-steam-generator-project.webp",
        alt: "Koeberg Nuclear Power Station steam generator replacement project",
      },
      {
        src: "/projects/knps/2-koeberg-nuclear-power-station-table-mountain.webp",
        alt: "Koeberg Nuclear Power Station with Table Mountain in the background",
      },
      {
        src: "/projects/knps/3-steam-generator-lifting-dock-transport.webp",
        alt: "Steam generator being lifted at dock for transport to Koeberg",
      },
      {
        src: "/projects/knps/4-steam-generator-trailer-transport.webp",
        alt: "Steam generator secured on trailer for heavy transport to Koeberg Nuclear Power Station",
      },
    ],
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Container>
        <div className="py-16 md:py-24">

          {/* Page Header */}
          <div className="mb-16 md:mb-20">
            <Link
              href="/"
              className="text-pc-gold hover:underline mb-6 inline-block text-sm focus:outline-none focus:ring-2 focus:ring-pc-gold focus:ring-offset-2 rounded-sm"
            >
              ← Back to Home
            </Link>
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-pc-gold mb-3">
                Portfolio
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-pc-neutral-900 mb-5">
                Key Projects
              </h1>
              <p className="text-lg text-pc-neutral-600 leading-relaxed">
                A selection of landmark projects where PC Quanti has delivered
                specialist project management, contract administration, and
                construction oversight in complex, safety-critical environments.
                Each project demonstrates our ability to operate at the highest
                levels of technical and contractual rigour.
              </p>
            </div>
          </div>

          {/* Project Articles */}
          <div className="space-y-20 md:space-y-28">
            {projects.map((project, index) => (
              <article
                key={project.id}
                id={project.id}
                className="scroll-mt-24"
              >
                {/* Project eyebrow + title */}
                <div className="mb-8">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-pc-gold mb-2">
                    {project.sector}
                  </p>
                  <h2 className="text-3xl md:text-4xl font-bold text-pc-neutral-900 mb-2">
                    {project.title}
                  </h2>
                  <p className="text-lg text-pc-neutral-500">
                    {project.subtitle}
                  </p>
                </div>

                {/* Two-column: carousel + case study sidebar */}
                <div className="grid gap-10 lg:grid-cols-[3fr_2fr] lg:gap-12">

                  {/* Left: Image carousel */}
                  <div>
                    <ProjectImageCarousel
                      images={project.images}
                      priority={index === 0}
                    />
                  </div>

                  {/* Right: Key facts + narrative */}
                  <div className="flex flex-col gap-7">

                    {/* Key facts card */}
                    <div className="rounded-xl border border-pc-neutral-200 bg-pc-neutral-50 p-5">
                      <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-pc-neutral-500 mb-4">
                        Project Details
                      </h3>
                      <dl className="space-y-3 text-sm">
                        <div>
                          <dt className="font-semibold text-pc-neutral-900 mb-1">Contract</dt>
                          <dd className="text-pc-neutral-600">{project.contract}</dd>
                        </div>
                        <div>
                          <dt className="font-semibold text-pc-neutral-900 mb-1">Location</dt>
                          <dd className="text-pc-neutral-600">{project.location}</dd>
                        </div>
                        <div>
                          <dt className="font-semibold text-pc-neutral-900 mb-1.5">Services Delivered</dt>
                          <dd className="flex flex-wrap gap-1.5">
                            {project.services.map((s) => (
                              <span
                                key={s}
                                className="rounded-full border border-pc-gold/30 bg-pc-gold/10 px-2.5 py-0.5 text-xs font-medium text-pc-gold"
                              >
                                {s}
                              </span>
                            ))}
                          </dd>
                        </div>
                      </dl>
                    </div>

                    {/* Case study narrative */}
                    <div className="space-y-5 text-sm leading-relaxed text-pc-neutral-600">
                      <div>
                        <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-pc-neutral-400 mb-2">
                          Challenge
                        </h3>
                        <p>{project.challenge}</p>
                      </div>
                      <div>
                        <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-pc-neutral-400 mb-2">
                          Scope &amp; Approach
                        </h3>
                        <p>{project.scope}</p>
                      </div>
                      <div>
                        <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-pc-neutral-400 mb-2">
                          Outcome
                        </h3>
                        <p>{project.outcome}</p>
                      </div>
                    </div>

                  </div>
                </div>

                {/* Divider */}
                {index < projects.length - 1 && (
                  <div className="mt-16 md:mt-20 border-t border-pc-neutral-200" />
                )}
              </article>
            ))}
          </div>

          {/* In the News */}
          <section className="mt-20 md:mt-28 rounded-xl bg-pc-neutral-900 p-10 md:p-14">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-pc-gold mb-3">
              In the News
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Koeberg Unit 2 Returns to Service
            </h2>
            <div className="max-w-3xl">
              <p className="text-pc-neutral-400 leading-relaxed mb-4">
                In early 2025, Koeberg Nuclear Power Station&apos;s Unit 2 was
                reconnected to the South African grid following the completion of
                its steam generator replacement — the same landmark project
                detailed in our Steam Generator Replacement case study above.
                Unit 2 went on to achieve 365 days of uninterrupted operation at
                946 MW with a 99.4% energy availability factor (EAF), and the
                client publicly praised the quality of the steam generator
                installation. PC Quanti provided project management, contract
                administration, and contract management services throughout the
                implementation programme, to the OEM, contributing directly to
                this major milestone in Koeberg&apos;s 20-year lifecycle
                extension programme.
              </p>
              {/* Source: Engineering News, 10 March 2026 — reports the 365-day/99.4% EAF performance milestone */}
              <a
                href="https://m.engineeringnews.co.za/article/eskom-hails-performance-of-upgraded-koeberg-nuclear-reactor-2026-03-10"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-pc-gold hover:text-pc-gold-dark transition-colors focus:outline-none focus:ring-2 focus:ring-pc-gold focus:ring-offset-2 focus:ring-offset-pc-neutral-900 rounded-sm"
              >
                Read the full article on Engineering News
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </section>

          {/* CTA */}
          <div className="mt-20 md:mt-28 text-center rounded-xl bg-pc-neutral-50 p-10 md:p-14">
            <h2 className="text-2xl md:text-3xl font-semibold text-pc-neutral-900 mb-4">
              Discuss Your Project
            </h2>
            <p className="text-pc-neutral-600 mb-8 max-w-xl mx-auto">
              Whether you are planning a new build, managing a complex programme,
              or navigating a contractual challenge — PC Quanti brings the
              expertise to support your project goals.
            </p>
            <LinkButton href="/contact" size="lg">
              Contact Us
            </LinkButton>
          </div>

        </div>
      </Container>
    </main>
  );
}
