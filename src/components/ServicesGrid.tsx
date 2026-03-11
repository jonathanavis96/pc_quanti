import React from 'react';
import { Card } from './Card';
import { Container } from './Container';
import { LinkButton } from './LinkButton';

const services = [
  {
    title: 'Project Management',
    description:
      'Comprehensive project management from initial design and engineering through on-site execution and close-out, integrating schedule development, risk management, change control, and stakeholder interface management — including plant outage and shutdown delivery.',
    href: '/services/project-management',
    icon: (
      <svg viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        {/* Gantt chart bars */}
        <rect x="6" y="10" width="18" height="5" rx="1" fill="currentColor" fillOpacity="0.15" />
        <rect x="6" y="10" width="18" height="5" rx="1" />
        <rect x="14" y="19" width="24" height="5" rx="1" fill="currentColor" fillOpacity="0.15" />
        <rect x="14" y="19" width="24" height="5" rx="1" />
        <rect x="6" y="28" width="14" height="5" rx="1" fill="currentColor" fillOpacity="0.15" />
        <rect x="6" y="28" width="14" height="5" rx="1" />
        <line x1="6" y1="38" x2="38" y2="38" strokeWidth="1.2" strokeOpacity="0.4" />
      </svg>
    ),
  },
  {
    title: 'Planning',
    description:
      'Structured and strategic planning on NEC, FIDIC, and GCC contracts — including critical path scheduling, earned value management, resource loading, forensic delay analysis, look-ahead programmes, and outage and shutdown scheduling.',
    href: '/services/planning',
    icon: (
      <svg viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        {/* Clipboard body */}
        <rect x="8" y="7" width="28" height="34" rx="2" fill="currentColor" fillOpacity="0.08" />
        <rect x="8" y="7" width="28" height="34" rx="2" />
        {/* Clip tab */}
        <rect x="16" y="4" width="12" height="7" rx="2" fill="currentColor" fillOpacity="0.15" />
        <rect x="16" y="4" width="12" height="7" rx="2" />
        {/* 4 X obstacles */}
        <line x1="13" y1="15" x2="17" y2="19" strokeWidth="1.5" /><line x1="17" y1="15" x2="13" y2="19" strokeWidth="1.5" />
        <line x1="27" y1="15" x2="31" y2="19" strokeWidth="1.5" /><line x1="31" y1="15" x2="27" y2="19" strokeWidth="1.5" />
        <line x1="13" y1="27" x2="17" y2="31" strokeWidth="1.5" /><line x1="17" y1="27" x2="13" y2="31" strokeWidth="1.5" />
        <line x1="27" y1="27" x2="31" y2="31" strokeWidth="1.5" /><line x1="31" y1="27" x2="27" y2="31" strokeWidth="1.5" />
        {/* Start circle — bottom-left */}
        <circle cx="13" cy="35" r="2.5" fill="currentColor" fillOpacity="0.2" />
        <circle cx="13" cy="35" r="2.5" />
        {/* End circle — top-right */}
        <circle cx="33" cy="13" r="2.5" fill="currentColor" fillOpacity="0.2" />
        <circle cx="33" cy="13" r="2.5" />
        {/* Winding S-curve avoiding obstacles (passes through centre gap between X columns) */}
        <path d="M 13 32 C 22 32 22 22 13 22 C 13 15 22 15 31 13" />
        {/* Arrowhead */}
        <polyline points="28,11 31,13 28,15" />
      </svg>
    ),
  },
  {
    title: 'Construction Management',
    description:
      'Proven track record of delivering complex projects in the most challenging environments — managing multidisciplinary execution in operational nuclear and petrochemical plants, including outage and shutdown construction activities.',
    href: '/services/construction-management',
    icon: (
      <svg viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        {/* Hard hat dome */}
        <path d="M9 22 Q9 13 19 13 Q29 13 29 22" fill="currentColor" fillOpacity="0.12" />
        <path d="M9 22 Q9 13 19 13 Q29 13 29 22" />
        <line x1="7" y1="22" x2="31" y2="22" strokeWidth="2" />
        {/* Head */}
        <circle cx="19" cy="26" r="4" fill="currentColor" fillOpacity="0.08" />
        <circle cx="19" cy="26" r="4" />
        {/* Body / shoulders */}
        <path d="M11 38 Q11 32 19 31 Q27 32 27 38" />
        {/* Arm holding paper */}
        <line x1="25" y1="30" x2="30" y2="28" />
        {/* Paper / document */}
        <rect x="29" y="22" width="13" height="16" rx="1" fill="currentColor" fillOpacity="0.08" />
        <rect x="29" y="22" width="13" height="16" rx="1" />
        {/* Cog on paper: circle + 8 teeth */}
        <circle cx="35" cy="30" r="3.5" fill="currentColor" fillOpacity="0.1" />
        <circle cx="35" cy="30" r="3.5" />
        <circle cx="35" cy="30" r="1.2" fill="currentColor" />
        <line x1="35" y1="24.5" x2="35" y2="26" strokeWidth="1.6" />
        <line x1="35" y1="34" x2="35" y2="35.5" strokeWidth="1.6" />
        <line x1="28.5" y1="30" x2="30" y2="30" strokeWidth="1.6" />
        <line x1="40" y1="30" x2="41.5" y2="30" strokeWidth="1.6" />
        <line x1="30.5" y1="25.5" x2="31.5" y2="26.5" strokeWidth="1.4" />
        <line x1="38.5" y1="25.5" x2="39.5" y2="26.5" strokeWidth="1.4" />
        <line x1="30.5" y1="34.5" x2="31.5" y2="33.5" strokeWidth="1.4" />
        <line x1="38.5" y1="34.5" x2="39.5" y2="33.5" strokeWidth="1.4" />
      </svg>
    ),
  },
  {
    title: 'Contract Administration',
    description:
      'Comprehensive written project communication, timely notices, and proper documentation of progress and commercial administration under NEC, FIDIC, GCC and JBCC contract forms.',
    href: '/services/contract-administration',
    icon: (
      <svg viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        {/* Document */}
        <rect x="8" y="4" width="22" height="30" rx="2" />
        <path d="M30 4 L30 10 L36 10" strokeWidth="1.4" />
        <path d="M30 4 L36 10 L36 34 Q36 36 34 36 L10 36" />
        <line x1="13" y1="14" x2="25" y2="14" />
        <line x1="13" y1="19" x2="25" y2="19" />
        <line x1="13" y1="24" x2="20" y2="24" />
        {/* Seal */}
        <circle cx="30" cy="30" r="5" fill="currentColor" fillOpacity="0.12" />
        <circle cx="30" cy="30" r="5" />
        <line x1="28" y1="30" x2="30" y2="32" />
        <line x1="30" y1="32" x2="33" y2="28" />
      </svg>
    ),
  },
  {
    title: 'Contract Management',
    description:
      'Comprehensive contract lifecycle support including advisory on compliance, risk allocation, payment certification, variation management, and extension of time assessments across all major procurement forms.',
    href: '/services/contract-management',
    icon: (
      <svg viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        {/* Document */}
        <rect x="5" y="4" width="22" height="30" rx="2" fill="currentColor" fillOpacity="0.08" />
        <rect x="5" y="4" width="22" height="30" rx="2" />
        <line x1="10" y1="12" x2="23" y2="12" />
        <line x1="10" y1="17" x2="23" y2="17" />
        <line x1="10" y1="22" x2="18" y2="22" />
        {/* Signature line */}
        <line x1="10" y1="28" x2="23" y2="28" strokeOpacity="0.4" />
        {/* Pen body — diagonal slab from upper-right down to tip */}
        <path d="M 39 9 L 41 7 L 23 25 L 21 27 Z" fill="currentColor" fillOpacity="0.1" />
        <path d="M 39 9 L 41 7 L 23 25 L 21 27 Z" />
        {/* Nib — pointed tip */}
        <path d="M 21 27 L 23 25 L 19 31 Z" fill="currentColor" stroke="none" />
        {/* Signature scribble being written */}
        <path d="M 11 28 Q 14 26 16 28 Q 18 30 20 28" strokeWidth="1.2" />
      </svg>
    ),
  },
  {
    title: 'Quantity Surveying',
    description:
      'Detailed quantity surveying from variation analysis and compensation event assessment to managing payment processes — dovetailing with contract management to ensure value is maintained.',
    href: '/services/quantity-surveying',
    icon: (
      <svg viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        {/* Ruler + measurement ticks */}
        <rect x="4" y="16" width="36" height="12" rx="2" />
        <line x1="10" y1="16" x2="10" y2="22" />
        <line x1="16" y1="16" x2="16" y2="24" />
        <line x1="22" y1="16" x2="22" y2="22" />
        <line x1="28" y1="16" x2="28" y2="24" />
        <line x1="34" y1="16" x2="34" y2="22" />
        {/* Value label */}
        <line x1="12" y1="10" x2="32" y2="10" strokeDasharray="2 2" strokeOpacity="0.5" />
        <line x1="12" y1="9" x2="12" y2="11" />
        <line x1="32" y1="9" x2="32" y2="11" />
      </svg>
    ),
  },
  {
    title: 'Commercial Management',
    description:
      'Full project commercial oversight covering procurement, estimating, tender analysis, cost analysis, risk management, design development, and value engineering to protect and enhance commercial outcomes.',
    href: '/services/commercial-management',
    icon: (
      <svg viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        {/* Dollar sign — vertical line */}
        <line x1="22" y1="5" x2="22" y2="39" />
        {/* Dollar sign — S curve */}
        <path d="M 29 13 C 29 8 14 8 14 17 C 14 24 30 24 30 31 C 30 37 15 37 15 32" />
      </svg>
    ),
  },
  {
    title: 'Risk Management',
    description:
      'Specialised risk management helping clients identify, assess and mitigate potential risks before they impact timelines, budgets or compliance — ensuring proactive decision-making and improved project certainty.',
    href: '/services/risk-management',
    icon: (
      <svg viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        {/* Shield */}
        <path d="M22 4 L36 10 L36 24 C36 32 22 40 22 40 C22 40 8 32 8 24 L8 10 Z" fill="currentColor" fillOpacity="0.1" />
        <path d="M22 4 L36 10 L36 24 C36 32 22 40 22 40 C22 40 8 32 8 24 L8 10 Z" />
        {/* Check mark */}
        <polyline points="15,22 20,27 29,17" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: 'Dispute Resolution',
    description:
      'Specialist advice and representation across all dispute resolution forums, including claims preparation, adjudication, arbitration, and negotiation to achieve efficient and sustainable outcomes.',
    href: '/services/dispute-resolution',
    icon: (
      <svg viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        {/* Balance scales */}
        <line x1="22" y1="6" x2="22" y2="38" />
        <line x1="10" y1="38" x2="34" y2="38" />
        <line x1="8" y1="14" x2="36" y2="14" />
        <line x1="22" y1="6" x2="22" y2="14" />
        {/* Left pan */}
        <path d="M8 14 L5 22 Q8 26 11 22 Z" fill="currentColor" fillOpacity="0.12" />
        <path d="M8 14 L5 22 Q8 26 11 22 Z" />
        {/* Right pan */}
        <path d="M36 14 L33 22 Q36 26 39 22 Z" fill="currentColor" fillOpacity="0.12" />
        <path d="M36 14 L33 22 Q36 26 39 22 Z" />
      </svg>
    ),
  },
];

export function ServicesGrid() {
  return (
    <section className="py-16 md:py-24 bg-pc-neutral-50">
      <Container maxWidth="lg">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-pc-neutral-500">
            Services
          </p>
          <h2 className="text-3xl font-bold text-pc-neutral-900 mt-3 mb-4">
            Professional services across the full project life cycle
          </h2>
          <p className="text-lg text-pc-neutral-600 max-w-2xl mx-auto">
            Extensive experience in NEC3, NEC4, FIDIC, GCC and JBCC contracts with a proven track record of delivering complex major EPC projects.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card key={service.title} variant="outlined" padding="lg" className="flex h-full flex-col">
              <div className="mb-4 h-11 w-11 text-pc-gold">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-pc-neutral-900 mb-3">{service.title}</h3>
              <p className="text-pc-neutral-600 mb-6 flex-1">{service.description}</p>
              <LinkButton href={service.href} variant="outline" size="sm" className="self-start">
                Learn more
              </LinkButton>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
