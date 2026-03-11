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
        <div className="grid grid-cols-2 gap-4 text-center md:grid-cols-4 md:gap-x-8">
          {displayMarkers.map((marker, idx) => (
            <div key={idx} className="flex flex-col gap-1">
              <span className="text-xs font-medium text-pc-neutral-500 uppercase tracking-wide">
                {marker.label}
              </span>
              <span className="text-sm font-semibold text-pc-neutral-900 sm:text-base">
                {marker.value}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
