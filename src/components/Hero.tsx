import React from 'react';
import Link from 'next/link';
import { Button } from './Button';
import { Container } from './Container';

export interface HeroProps {
  headline: string;
  subheadline: string;
  ctaText?: string;
  ctaHref?: string;
}

export function Hero({
  headline,
  subheadline,
  ctaText = 'Get in Touch',
  ctaHref = '/contact',
}: HeroProps) {
  return (
    <section className="relative bg-gradient-to-br from-pc-blue-light via-white to-pc-neutral-50 py-20 md:py-32">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-pc-neutral-900 md:text-5xl lg:text-6xl">
            {headline}
          </h1>
          <p className="mb-8 text-lg text-pc-neutral-600 md:text-xl">
            {subheadline}
          </p>
          <Link href={ctaHref}>
            <Button size="lg" variant="primary">
              {ctaText}
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
}
