import Link from "next/link";
import { Container } from "@/src/components/Container";
import { TeamMemberCard } from "@/src/components/TeamMemberCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Team | PC Quanti",
  description:
    "Meet the PC Quanti team — highly qualified engineering, construction and commercial professionals with extensive experience across nuclear, oil & gas, power generation and major infrastructure projects.",
  openGraph: {
    title: "Our Team | PC Quanti",
    description:
      "Meet the PC Quanti team — highly qualified engineering, construction and commercial professionals with extensive experience across nuclear, oil & gas, power generation and major infrastructure projects.",
  },
};

const team = [
  {
    name: "Phil Coleman",
    role: "Managing Director",
    image: "/team/phil.jpg",
    bio: [
      "After obtaining a B.Sc in Construction Management at the University of Pretoria, Phil spent 13 years in the United Kingdom working on major engineering and construction projects for global infrastructure leader Vinci SA, and its subsidiaries Norwest Holst and Vinci Construction (formally Taylor Woodrow Construction), excelling in the fields of Quantity Surveying, Commercial Management, Project Controls and Project Management.",
      "After joining Group Five Nuclear in 2013 as part of their senior management team as Divisional Commercial Manager, Phil became Programme Manager of Group Five Nuclear Division in 2017, tasked with the successful implementation of the iconic PTR Tanks and Steam Generators Replacement Projects.",
      "In 2020, with years of major projects experience covering all aspects of the project life-cycle in South Africa and abroad, in the areas of civil structures, and mechanical / electrical service and infrastructure such as airports developments and nuclear construction at the highest level, Phil launched PC quanti, a multi-discipline project services company which has provided services on major engineering projects in the nuclear industry and other industrial sectors since inception.",
    ],
  },
  {
    name: "Tyrone Juul",
    role: "Project, Construction and Contract Manager",
    image: "/team/tyrone.jpg",
    bio: [
      "Tyrone is a construction and commercial management professional with over 23 years' industry experience across the public and private Engineering and Construction sector in South Africa and the Philippines. Tyrone has a background in mechanical engineering and extensive experience in project and contract management, risk, procurement, logistics, materials, people management, project planning, contractual claims, adjudication and arbitration.",
      "Recognised for a strong work ethic and a meticulous, delivery-focused approach, Tyrone thrives in high-pressure environments and has successfully led complex, multi-disciplinary major projects, specialising in NEC and FIDIC contract forms in the fields of oil & gas, nuclear, and coal-fired power generation.",
    ],
  },
  {
    name: "Heleene Schreuder",
    role: "Attorney at Law",
    image: "/team/heleene.jpg",
    bio: [
      "Heleene holds an LLB degree in Law from Stellenbosch University, is an admitted attorney of the High Court of South Africa and has over 15 years of experience in civil and commercial litigation, dispute resolution within the construction sector. Heleene's recent work has focused on contract management, contract administration, and dispute resolution on a major EPC project governed by NEC3 contract in the nuclear energy sector.",
      "Heleene is a Fellow Member of the Arbitration Association of Southern Africa, having completed its Specialization in Construction Law and Advanced Arbitration Practice modules. Heleene also holds a certificate in Construction Management from the University of Cape Town.",
      "Heleene brings valuable legal expertise, a professional attitude and a strong work ethic to every engagement, consistently striving to deliver practical solutions and add meaningful value to her clients and organization.",
    ],
  },
  {
    name: "Francois Venter",
    role: "Planning Engineer",
    image: "/team/francois.jpg",
    bio: [
      "In Francois's 30-year career which began in mechanical engineering, he has developed a passion for construction project management, with a keen focus on project planning, project controls and work management. With his experience in the Nuclear and Oil & Gas Industry sectors, Francois has overseen the planning and execution of countless shutdown/outage projects and major projects implementations, from operational readiness planning, to implementation on site and work in progress management and reporting, Francois has experience in the full EPC/M cycle.",
      "Additionally, Francois has conceptualized, designed and developed procedures and implemented work management systems to ensure efficiency and contemporaneous record keeping that enables solid project and contract management. With his fluency in Primavera P6 Professional and delay analysis techniques and project controls, as well as overseeing multiple claim events and dispute resolution, Francois is highly regarded in the planning field.",
    ],
  },
  {
    name: "Jonathan Ely",
    role: "Adjudicator and Arbitrator",
    image: "/team/jonathan.jpg",
    bio: [
      "Jonathan J. M. Ely is a seasoned arbitrator, adjudicator, and commercial consultant with a distinguished career bridging civil engineering and legal expertise. He holds a BSc in Civil Engineering from the University of the Witwatersrand, supplemented by an LLB and advanced certificates in construction law and adjudication — offering a rare combination of technical insight and legal acumen that makes him particularly effective in resolving complex contractual disputes.",
      "With over forty-five years of experience, Ely has worked across the full spectrum of construction and engineering environments, serving clients, consultants, contractors, and project management firms across power, mining, and infrastructure sectors, both locally in South Africa and internationally.",
      "As an accredited arbitrator and adjudicator, Ely is regularly appointed to panels dealing with contractual disputes under industry standard forms of contract, offering impartial decision-making and dispute management services, and is recognised for his contributions to maintaining high standards in arbitration and adjudication practice.",
    ],
  },
];

export default function TeamPage() {
  return (
    <main className="py-16 sm:py-24">
      <Container>
        {/* Page header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-pc-neutral-500 mb-3">
            Our People
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-pc-neutral-900 sm:text-5xl mb-6">
            Meet Our Team
          </h1>
          <p className="text-lg text-pc-neutral-600 max-w-3xl mx-auto">
            PC Quanti&apos;s strength lies in its highly qualified and committed team of engineering,
            construction and commercial professionals. Our specialists bring extensive experience
            across power generation, oil and gas, and large-scale infrastructure projects,
            combining technical expertise with practical, on-site understanding. With backgrounds
            spanning project management, quantity surveying, planning, contract administration and
            dispute resolution, our team works collaboratively to deliver disciplined execution,
            proactive risk management and measurable value — always guided by integrity and
            accountability.
          </p>
        </div>

        {/* Team members */}
        <div className="divide-y divide-black">
          {team.map((member, idx) => (
            <div key={member.name} className="py-16 first:pt-0">
              <TeamMemberCard
                name={member.name}
                role={member.role}
                image={member.image}
                bio={member.bio}
                reverse={idx % 2 === 1}
              />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 rounded-2xl bg-pc-neutral-50 border border-pc-neutral-200 p-8 sm:p-12 text-center">
          <h2 className="text-2xl font-bold text-pc-neutral-900 mb-4">
            Work with our team
          </h2>
          <p className="text-pc-neutral-600 max-w-2xl mx-auto mb-6">
            Get in touch to discuss how PC Quanti can support your next engineering or construction project.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg bg-pc-gold px-6 py-3 text-sm font-semibold text-black hover:bg-pc-gold-light transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </Container>
    </main>
  );
}
