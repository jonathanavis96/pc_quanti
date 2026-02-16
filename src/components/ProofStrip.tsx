import React from 'react';
import { Container } from './Container';

const proofPoints = [
  { label: 'Delivery experience', value: '15+ years across nuclear & industrial programmes' },
  { label: 'Commercial focus', value: 'NEC, FIDIC, and bespoke contract expertise' },
  { label: 'Lean engagement', value: 'Senior-led delivery without the consultancy overhead' },
];

export function ProofStrip() {
  return (
    <section className="border-y border-pc-neutral-200 bg-pc-neutral-50/60 py-10">
      <Container maxWidth="lg">
        <div className="grid gap-6 md:grid-cols-3">
          {proofPoints.map((point) => (
            <div key={point.label} className="text-center md:text-left">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-pc-neutral-500">
                {point.label}
              </p>
              <p className="mt-2 text-base font-semibold text-pc-neutral-900">{point.value}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
