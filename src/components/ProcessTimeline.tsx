import React from 'react';
import { Container } from './Container';

const steps = [
  {
    title: 'Discovery & Alignment',
    description: 'Clarify scope, constraints, and success metrics with stakeholders and delivery teams.',
  },
  {
    title: 'Structured Mobilisation',
    description: 'Build the right team, apply project controls, and develop reporting requirements to de-risk delivery early.',
  },
  {
    title: 'Controlled Execution',
    description: 'Track progress, manage change, and keep commercial outcomes protected.',
  },
  {
    title: 'Closeout & Handover',
    description: 'Deliver final reporting, lessons learned, and a clean transition to operations.',
  },
];

export function ProcessTimeline() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <Container maxWidth="lg">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-pc-neutral-500">Process</p>
          <h2 className="text-3xl font-bold text-pc-neutral-900 mt-3 mb-4">How We Deliver</h2>
          <p className="text-lg text-pc-neutral-600 max-w-2xl mx-auto">
            A clear, repeatable delivery path that balances governance with practical execution.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {steps.map((step, index) => (
            <div key={step.title} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-pc-gold/40 text-sm font-semibold text-pc-gold">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <div className="mt-4 hidden h-full w-px bg-pc-neutral-200 md:block" aria-hidden />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-pc-neutral-900 mb-2">{step.title}</h3>
                <p className="text-pc-neutral-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
