import React from "react";
import { Container } from "./Container";

type SectorItem = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

function IconFrame({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="flex h-12 w-12 items-center justify-center rounded-md border border-pc-neutral-200 bg-white text-pc-blue"
      aria-hidden
    >
      {children}
    </div>
  );
}

function IconNuclear() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      aria-hidden
    >
      <path
        d="M12 11.5a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M12 3c2.1 0 4 .7 5.6 2.1"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M20.6 15.5A9 9 0 0 1 7.4 21.4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M3.4 15.5A9 9 0 0 1 16.6 3.6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconMining() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      aria-hidden
    >
      <path
        d="M4 20h16"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M7 20V10l5-4l5 4v10"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M10 12h4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconInfrastructure() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      aria-hidden
    >
      <path
        d="M4 20h16"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M6 20V9l6-4l6 4v11"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M10 20v-6h4v6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconEnergy() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      aria-hidden
    >
      <path
        d="M13 2L4 14h7l-1 8l10-14h-7l0-6Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export interface SectorsTrustGridProps {
  heading?: string;
  items?: Array<Pick<SectorItem, "title" | "description">>;
}

export function SectorsTrustGrid({
  heading = "Trusted Across Key Sectors",
  items,
}: SectorsTrustGridProps) {
  const defaultItems: SectorItem[] = [
    {
      title: "Nuclear",
      description: "High-compliance project delivery",
      icon: <IconNuclear />,
    },
    {
      title: "Mining",
      description: "Remote site delivery excellence",
      icon: <IconMining />,
    },
    {
      title: "Infrastructure",
      description: "Multi-year programme delivery",
      icon: <IconInfrastructure />,
    },
    {
      title: "Energy",
      description: "Complex project controls",
      icon: <IconEnergy />,
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
            Specialist delivery support across high-stakes, highly regulated programmes.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {displayItems.map((item) => (
            <div
              key={item.title}
              className="group rounded-lg border border-pc-neutral-200 bg-white p-4 text-left transition-colors hover:bg-pc-neutral-50/60 focus-within:bg-pc-neutral-50/60 focus-within:ring-2 focus-within:ring-pc-blue focus-within:ring-offset-2"
            >
              <div className="flex items-start gap-4">
                <IconFrame>{item.icon}</IconFrame>
                <div>
                  <h3 className="text-lg font-semibold text-pc-neutral-900">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm text-pc-neutral-600">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
