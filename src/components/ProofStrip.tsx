import React from 'react';
import { Container } from './Container';

const proofPoints = [
  { label: 'Full lifecycle', value: 'From early concept and planning through execution, delivery and hand-over' },
  { label: 'Track record', value: 'Safety-critical nuclear and major EPC projects across South Africa and the UK' },
  { label: 'Our commitment', value: 'Delivered safely, on time and within budget — every stage of the project life cycle' },
];

export function ProofStrip() {
  return (
    <section className="border-y border-pc-neutral-200 bg-pc-neutral-50/60 py-10">
      <Container maxWidth="lg">
        <div className="grid gap-8 md:grid-cols-3 md:divide-x md:divide-pc-neutral-200">
          {proofPoints.map((point) => (
            <div key={point.label} className="md:px-8 first:md:pl-0 last:md:pr-0">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-pc-neutral-500 text-center">
                {point.label}
              </p>
              <p className="mt-2 text-base font-semibold text-pc-neutral-900 text-left">{point.value}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
