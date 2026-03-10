import React from "react";
import { Container } from "./Container";

type SectorItem = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

/* Nuclear atom — nucleus + 3 orbital ellipses + electrons */
function IconNuclear() {
  return (
    <svg viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth="1.8"
      strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10" aria-hidden>
      <circle cx="22" cy="22" r="3" fill="currentColor" fillOpacity="0.2" />
      <circle cx="22" cy="22" r="3" />
      {/* Orbit 1 — horizontal ellipse */}
      <ellipse cx="22" cy="22" rx="14" ry="5" />
      <circle cx="36" cy="22" r="1.5" fill="currentColor" />
      {/* Orbit 2 — tilted 60° */}
      <ellipse cx="22" cy="22" rx="14" ry="5" transform="rotate(60 22 22)" />
      <circle cx="29" cy="9.4" r="1.5" fill="currentColor" />
      {/* Orbit 3 — tilted 120° */}
      <ellipse cx="22" cy="22" rx="14" ry="5" transform="rotate(120 22 22)" />
      <circle cx="9" cy="15" r="1.5" fill="currentColor" />
    </svg>
  );
}

/* Pumpjack — lattice truss tower with walking beam + horse head */
function IconOilGas() {
  return (
    <svg viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth="1.8"
      strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10" aria-hidden>
      {/* Ground line */}
      <line x1="3" y1="38" x2="41" y2="38" />
      {/* Lattice tower — A-frame, wide at base, narrow at top */}
      {/* Outer left leg */}
      <line x1="8" y1="38" x2="18" y2="16" />
      {/* Outer right leg */}
      <line x1="29" y1="38" x2="21" y2="16" />
      {/* Inner left leg */}
      <line x1="13" y1="38" x2="18" y2="16" />
      {/* Inner right leg */}
      <line x1="24" y1="38" x2="21" y2="16" />
      {/* Cross braces — lower X */}
      <line x1="8" y1="38" x2="24" y2="28" />
      <line x1="13" y1="38" x2="8" y2="28" strokeOpacity="0.6" />
      {/* Cross braces — upper X */}
      <line x1="13" y1="28" x2="24" y2="22" strokeOpacity="0.7" />
      <line x1="8" y1="22" x2="24" y2="28" strokeOpacity="0.5" />
      {/* Pivot cap at top of tower */}
      <circle cx="19.5" cy="16" r="1.5" fill="currentColor" />
      {/* Walking beam — left (pump end) to right (horse head) */}
      <line x1="10" y1="14" x2="36" y2="14" />
      {/* Horse head — curves up then swoops forward-right */}
      <path d="M36 14 Q40 14 40 10 Q40 6 36 5 Q33 5 33 8" strokeLinejoin="round" />
      {/* Wellbore sucker rod — dashed vertical from pump end down */}
      <line x1="10" y1="14" x2="10" y2="38" strokeDasharray="2.5 2" strokeOpacity="0.45" />
    </svg>
  );
}

/* Suspension bridge */
function IconInfrastructure() {
  return (
    <svg viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth="1.8"
      strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10" aria-hidden>
      {/* Road deck */}
      <line x1="4" y1="30" x2="40" y2="30" />
      {/* Left tower */}
      <line x1="14" y1="16" x2="14" y2="30" />
      <line x1="11" y1="16" x2="17" y2="16" />
      {/* Right tower */}
      <line x1="30" y1="16" x2="30" y2="30" />
      <line x1="27" y1="16" x2="33" y2="16" />
      {/* Main cables */}
      <path d="M14 16 Q22 12 30 16" />
      {/* Vertical hangers */}
      <line x1="18" y1="15.5" x2="18" y2="30" strokeOpacity="0.5" strokeWidth="1.2" />
      <line x1="22" y1="13" x2="22" y2="30" strokeOpacity="0.5" strokeWidth="1.2" />
      <line x1="26" y1="15.5" x2="26" y2="30" strokeOpacity="0.5" strokeWidth="1.2" />
      {/* Side cable runs */}
      <line x1="4" y1="30" x2="14" y2="16" strokeOpacity="0.5" strokeWidth="1.2" />
      <line x1="40" y1="30" x2="30" y2="16" strokeOpacity="0.5" strokeWidth="1.2" />
      {/* Ground */}
      <line x1="4" y1="36" x2="40" y2="36" strokeOpacity="0.3" strokeWidth="1" />
      <line x1="4" y1="30" x2="4" y2="36" />
      <line x1="40" y1="30" x2="40" y2="36" />
    </svg>
  );
}

/* High-voltage transmission pylon */
function IconPowerGeneration() {
  return (
    <svg viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth="1.8"
      strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10" aria-hidden>
      {/* Pylon legs (wide at base, narrow at top) */}
      <line x1="22" y1="4" x2="14" y2="38" />
      <line x1="22" y1="4" x2="30" y2="38" />
      {/* Cross braces */}
      <line x1="16" y1="28" x2="28" y2="28" />
      <line x1="17" y1="20" x2="27" y2="20" />
      <line x1="19" y1="13" x2="25" y2="13" />
      {/* Top cross-arm (widest) */}
      <line x1="8" y1="10" x2="36" y2="10" />
      {/* Middle cross-arm */}
      <line x1="11" y1="18" x2="33" y2="18" />
      {/* Bottom cross-arm */}
      <line x1="13" y1="26" x2="31" y2="26" />
      {/* Hanging wires (catenary curves) */}
      <path d="M8 10 Q12 14 16 12" strokeWidth="1.2" strokeOpacity="0.6" />
      <path d="M28 12 Q32 14 36 10" strokeWidth="1.2" strokeOpacity="0.6" />
      <path d="M11 18 Q14 22 17 20" strokeWidth="1.2" strokeOpacity="0.6" />
      <path d="M27 20 Q30 22 33 18" strokeWidth="1.2" strokeOpacity="0.6" />
      {/* Base */}
      <line x1="10" y1="38" x2="34" y2="38" strokeOpacity="0.3" />
    </svg>
  );
}

export interface SectorsTrustGridProps {
  heading?: string;
  items?: Array<Pick<SectorItem, "title" | "description">>;
}

export function SectorsTrustGrid({
  heading = "Trusted in High-Stakes Sectors",
  items,
}: SectorsTrustGridProps) {
  const defaultItems: SectorItem[] = [
    {
      title: "Nuclear",
      description: "Life-extension upgrades, safety-critical construction and project delivery at nuclear power stations",
      icon: <IconNuclear />,
    },
    {
      title: "Oil & Gas",
      description: "Petrochemical plant execution, outage shutdown turnarounds, and commercial management",
      icon: <IconOilGas />,
    },
    {
      title: "Infrastructure",
      description: "Major infrastructure developments including airport projects, civil works, and public capital programmes",
      icon: <IconInfrastructure />,
    },
    {
      title: "Power Generation",
      description: "Nuclear and coal-fired power station projects across the full EPC lifecycle",
      icon: <IconPowerGeneration />,
    },
  ];

  const iconByTitle = new Map<string, React.ReactNode>(
    defaultItems.map((item) => [item.title, item.icon])
  );

  const displayItems: SectorItem[] = items
    ? items.map((item) => ({
        ...item,
        icon: iconByTitle.get(item.title) ?? <IconInfrastructure />,
      }))
    : defaultItems;

  return (
    <section className="py-16 md:py-24 bg-white">
      <Container maxWidth="lg">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-pc-neutral-900">{heading}</h2>
          <p className="mx-auto mt-3 max-w-2xl text-base text-pc-neutral-600">
            Extensive experience in nuclear and coal-fired power generation, oil &amp; gas, and major infrastructure — locally and internationally.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {displayItems.map((item) => (
            <div
              key={item.title}
              className="group rounded-lg border border-pc-neutral-200 bg-white p-6 text-center transition-colors hover:bg-pc-neutral-50/60"
            >
              <div className="mb-4 flex justify-center text-pc-gold">{item.icon}</div>
              <h3 className="text-lg font-semibold text-pc-neutral-900">{item.title}</h3>
              <p className="mt-2 text-sm text-pc-neutral-600">{item.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
