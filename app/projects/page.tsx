import { Container, LinkButton } from "@/src/components";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Key Projects — Engineering & Construction Portfolio",
  description:
    "Explore PC Quanti's key engineering and construction projects including the PTR Tanks Project and Steam Generator replacement at Koeberg Nuclear Power Station. NEC contract management, project controls, and construction oversight.",
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: "Key Projects | PC Quanti",
    description:
      "Engineering and construction project portfolio showcasing nuclear power generation projects at Koeberg Nuclear Power Station — PTR Tanks and Steam Generator replacement.",
    url: "/projects",
  },
};

const projects = [
  {
    id: "ptr-tanks",
    title: "PTR Tanks Project",
    subtitle: "20-Year Life Extension, Koeberg Nuclear Power Station",
    sector: "Nuclear Power Generation",
    contract: "NEC Option A",
    services: [
      "Project Management",
      "Contract Administration",
      "Construction Oversight",
      "Planning",
    ],
    description: `The PTR Tanks Project involved the design, fabrication, and installation of two new borated water storage tanks as part of the 20-year life extension programme at Koeberg Nuclear Power Station. Each tank was manufactured in SAF2205 Duplex Stainless Steel to ASME III code standards, requiring 100% radiographic weld examination to meet nuclear-grade quality assurance requirements.

Installation demanded precise coordination, including the deployment of a 500-ton crawler crane for roof lifting operations and the integration of complex piping and services connections within a highly regulated nuclear environment. PC Quanti provided end-to-end project management, contract administration under NEC Option A, construction oversight, and detailed programme planning throughout the project lifecycle.`,
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
    title: "Steam Generator Project",
    subtitle: "20-Year Life Extension, Koeberg Nuclear Power Station",
    sector: "Nuclear Power Generation",
    contract: "NEC3 Option A",
    services: [
      "Project Management",
      "Contract & Construction Management",
      "Subcontractor Coordination",
      "Project Controls & Planning",
    ],
    description: `The Steam Generator Replacement Project was a critical component of the 20-year life extension programme at Koeberg Nuclear Power Station. The scope encompassed the replacement of three steam generators per operating unit, each weighing approximately 350 tons, requiring meticulous logistics coordination from manufacturing through transport, rigging, and installation.

PC Quanti delivered comprehensive project management, contract and construction management under NEC3 Option A, subcontractor coordination, and project controls and planning services. The project demanded precise scheduling of welding operations during unit outages, coordination across multiple specialist subcontractors, and adherence to stringent nuclear safety and quality standards over a multi-year timeline.`,
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
          {/* Header */}
          <div className="mb-16 md:mb-20 text-center">
            <Link
              href="/"
              className="text-pc-gold hover:underline mb-4 inline-block focus:outline-none focus:ring-2 focus:ring-pc-gold focus:ring-offset-2 rounded-sm"
            >
              &larr; Back to Home
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-pc-neutral-900 mb-4">
              Key Projects
            </h1>
            <p className="text-lg md:text-xl text-pc-neutral-600 max-w-3xl mx-auto">
              A selection of landmark engineering and construction projects where
              PC Quanti has delivered specialist project management, contract
              administration, and construction oversight services in complex,
              safety-critical environments.
            </p>
          </div>

          {/* Projects */}
          <div className="space-y-24 md:space-y-32">
            {projects.map((project, index) => (
              <article
                key={project.id}
                id={project.id}
                className="scroll-mt-24"
              >
                {/* Project Header */}
                <div className="mb-8">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-pc-gold mb-2">
                    {project.sector}
                  </p>
                  <h2 className="text-3xl md:text-4xl font-bold text-pc-neutral-900 mb-2">
                    {project.title}
                  </h2>
                  <p className="text-lg text-pc-neutral-600">
                    {project.subtitle}
                  </p>
                </div>

                {/* Project Details Bar */}
                <div className="flex flex-wrap gap-x-8 gap-y-3 mb-8 text-sm">
                  <div>
                    <span className="font-semibold text-pc-neutral-900">
                      Contract:{" "}
                    </span>
                    <span className="text-pc-neutral-600">
                      {project.contract}
                    </span>
                  </div>
                  <div>
                    <span className="font-semibold text-pc-neutral-900">
                      Services:{" "}
                    </span>
                    <span className="text-pc-neutral-600">
                      {project.services.join(" \u00B7 ")}
                    </span>
                  </div>
                </div>

                {/* Image Gallery - Hero image + 3 thumbnails */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {/* Hero image */}
                  <div className="relative aspect-[4/3] overflow-hidden rounded-xl md:row-span-2">
                    <Image
                      src={project.images[0].src}
                      alt={project.images[0].alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority={index === 0}
                    />
                  </div>
                  {/* Secondary images */}
                  {project.images.slice(1).map((image, imgIndex) => (
                    <div
                      key={imgIndex}
                      className="relative aspect-[4/3] overflow-hidden rounded-xl"
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 25vw"
                      />
                    </div>
                  ))}
                </div>

                {/* Description */}
                <div className="max-w-3xl">
                  {project.description.split("\n\n").map((paragraph, pIndex) => (
                    <p
                      key={pIndex}
                      className="text-pc-neutral-600 leading-relaxed mb-4 last:mb-0"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Divider between projects */}
                {index < projects.length - 1 && (
                  <div className="mt-16 md:mt-20 border-t border-pc-neutral-200" />
                )}
              </article>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-24 p-8 bg-pc-neutral-50 rounded-lg">
            <h2 className="text-2xl font-semibold text-pc-neutral-900 mb-4">
              Discuss Your Project
            </h2>
            <p className="text-pc-neutral-600 mb-6 max-w-2xl mx-auto">
              Whether you are planning a new build, managing a complex
              programme, or navigating a contractual challenge, PC Quanti brings
              the expertise to support your project goals.
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
