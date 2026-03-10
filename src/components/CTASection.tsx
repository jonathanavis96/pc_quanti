import React from 'react';
import { LinkButton } from './LinkButton';
import { Container } from './Container';

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-[#171717] py-16 md:py-24">
      {/* Decorative blueprint grid — gold accent */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(196, 162, 26, 0.35) 1px, transparent 1px), linear-gradient(to bottom, rgba(196, 162, 26, 0.35) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
        aria-hidden
      />
      <Container maxWidth="lg" className="relative">
        <div className="rounded-2xl border border-pc-gold-700/30 bg-pc-black-light px-6 py-12 text-center md:px-12">
          <h2 className="text-3xl font-bold text-pc-gold mb-4">
            Partner with PC Quanti
          </h2>
          <p className="text-lg text-pc-neutral-400 max-w-2xl mx-auto mb-8">
            For any questions or to discuss how PC Quanti can support your next engineering or construction project, please contact us.
          </p>
          <LinkButton href="/contact" size="lg" variant="primary" onDark>
            Contact Us
          </LinkButton>
        </div>
      </Container>
    </section>
  );
}
