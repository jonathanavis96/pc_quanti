import React from 'react';
import { Container } from './Container';

export interface TrustBarProps {
  /** Optional: Override default trust markers */
  markers?: Array<{
    label: string;
    value: string;
  }>;
}

/**
 * TrustBar component - Reduces "can I trust you?" friction
 * Displays credibility markers like years of experience, sectors, accreditations
 */
export function TrustBar({ markers }: TrustBarProps) {
  const defaultMarkers = [
    { label: 'Experience', value: 'Decades of combined expertise' },
    { label: 'Sectors', value: 'Nuclear · Oil & Gas · Infrastructure' },
    { label: 'Reach', value: 'South Africa · United Kingdom · International' },
    { label: 'Standards', value: 'NEC3 · NEC4 · FIDIC · GCC · JBCC' },
  ];

  const displayMarkers = markers || defaultMarkers;

  return (
    <section className="border-b border-pc-neutral-200 bg-white py-6">
      <Container maxWidth="xl">
        <div className="flex items-center justify-between gap-x-8 text-center">
          {displayMarkers.map((marker, idx) => (
            <div key={idx} className="flex flex-col gap-1">
              <span className="text-xs font-medium text-pc-neutral-500 uppercase tracking-wide whitespace-nowrap">
                {marker.label}
              </span>
              <span className="text-base font-semibold text-pc-neutral-900 whitespace-nowrap">
                {marker.value}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
