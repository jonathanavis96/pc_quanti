import React from 'react';
import { LinkButton } from './LinkButton';
import { Container } from './Container';

export function CTASection() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(44, 2, 217, 0.35) 1px, transparent 1px), linear-gradient(to bottom, rgba(44, 2, 217, 0.35) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
        aria-hidden
      />
      <Container maxWidth="lg" className="relative">
        <div className="rounded-2xl border border-pc-neutral-200 bg-white px-6 py-12 text-center md:px-12">
          <h2 className="text-3xl font-bold text-pc-neutral-900 mb-4">
            Ready to strengthen project delivery?
          </h2>
          <p className="text-lg text-pc-neutral-600 max-w-2xl mx-auto mb-8">
            Talk to a senior consultant about how PC Quanti can support your next programme with lean, accountable delivery.
          </p>
          <LinkButton href="/contact" size="lg" variant="primary">
            Request a call
          </LinkButton>
        </div>
      </Container>
    </section>
  );
}
