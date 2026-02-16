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
    { label: 'Experience', value: '15+ Years' },
    { label: 'Sectors', value: 'Nuclear, Industrial, Infrastructure' },
    { label: 'Locations', value: 'UK & South Africa' },
    { label: 'Accreditations', value: 'RICS, APM' },
  ];

  const displayMarkers = markers || defaultMarkers;

  return (
    <section className="border-b border-pc-neutral-200 bg-white py-6">
      <Container>
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-center md:justify-around">
          {displayMarkers.map((marker, idx) => (
            <div key={idx} className="flex flex-col gap-1">
              <span className="text-sm font-medium text-pc-neutral-500 uppercase tracking-wide">
                {marker.label}
              </span>
              <span className="text-base font-semibold text-pc-neutral-900">
                {marker.value}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
