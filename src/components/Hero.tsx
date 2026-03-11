"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from './Button';
import { LinkButton } from './LinkButton';
import { Container } from './Container';
import { BlueprintHeroArt } from './BlueprintHeroArt';
import { TypewriterCountries } from './TypewriterCountries';

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
    <section className="relative overflow-hidden bg-[#171717] py-20 md:py-28">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(196, 162, 26, 0.35) 1px, transparent 1px), linear-gradient(to bottom, rgba(196, 162, 26, 0.35) 1px, transparent 1px), radial-gradient(circle at top, rgba(196, 162, 26, 0.12), transparent 55%)',
          backgroundSize: '32px 32px, 32px 32px, 100% 100%',
        }}
        aria-hidden
      />
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <motion.div
            className="flex flex-col gap-6 text-left"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
          >
            <div className="flex flex-col gap-1">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-pc-gold">
                International Service
              </p>
              <p className="text-sm font-medium tracking-wide text-pc-neutral-400">
                Delivering expertise in <TypewriterCountries />
              </p>
            </div>
            <motion.h1
              className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl"
              initial={{ clipPath: 'inset(0 0 100% 0)' }}
              animate={{ clipPath: 'inset(0 0 0% 0)' }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.2, 0.8, 0.2, 1] }}
            >
              {headline}
            </motion.h1>
            <motion.p
              className="text-lg text-pc-neutral-400 md:text-xl"
              initial={{ clipPath: 'inset(0 0 100% 0)' }}
              animate={{ clipPath: 'inset(0 0 0% 0)' }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
            >
              {subheadline}
            </motion.p>
            <div className="flex flex-wrap gap-4">
              <motion.div
                className="relative inline-flex"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.45, ease: [0.2, 0.8, 0.2, 1] }}
              >
                <motion.svg
                  className="absolute inset-0 h-full w-full"
                  viewBox="0 0 180 52"
                  preserveAspectRatio="none"
                  initial={{ pathLength: 0, opacity: 1 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1.2, delay: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
                >
                  <motion.path
                    d="M2 50 L178 50 L178 2 L2 2 L2 50"
                    fill="none"
                    stroke="rgba(196, 162, 26, 0.9)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    pathLength={1}
                    initial={{ strokeDasharray: '1 1', strokeDashoffset: 1 }}
                    animate={{ strokeDasharray: '1 1', strokeDashoffset: 0 }}
                    transition={{ duration: 1.2, delay: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
                  />
                </motion.svg>
                <motion.div
                  className="absolute inset-0 rounded-md"
                  style={{
                    backgroundColor: 'rgba(196, 162, 26, 0.9)',
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2, delay: 1.45, ease: [0.2, 0.8, 0.2, 1] }}
                />
                <motion.div
                  className="absolute inset-0 rounded-md"
                  style={{
                    backgroundColor: 'rgba(196, 162, 26, 0.9)',
                    backgroundImage:
                      'repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(0, 0, 0, 0.1) 2px, rgba(0, 0, 0, 0.1) 3px)',
                  }}
                  initial={{
                    clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)',
                  }}
                  animate={{
                    clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
                  }}
                  transition={{ duration: 0.5, delay: 1.7, ease: [0.4, 0, 0.2, 1] }}
                />
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2, delay: 1.15, ease: [0.2, 0.8, 0.2, 1] }}
                >
                  <Link href={ctaHref}>
                    <Button
                      size="lg"
                      variant="primary"
                      onDark
                      className="relative bg-transparent text-white hover:bg-transparent active:bg-transparent"
                    >
                      {ctaText}
                    </Button>
                  </Link>
                </motion.div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.55, ease: [0.2, 0.8, 0.2, 1] }}
              >
                <LinkButton href="/services" size="lg" variant="outline" onDark>
                  View Services
                </LinkButton>
              </motion.div>
            </div>
            <motion.div
              className="flex flex-wrap gap-3 text-sm font-semibold text-pc-neutral-400"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.65, ease: [0.2, 0.8, 0.2, 1] }}
            >
              {['PM', 'Planning', 'Construction', 'Contract Admin', 'Contract Mgmt', 'QS', 'Commercial', 'Risk', 'Disputes'].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-pc-gold/30 bg-pc-gold/10 px-3 py-1 text-pc-gold-300"
                >
                  {item}
                </span>
              ))}
            </motion.div>
          </motion.div>
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.2, 0.8, 0.2, 1] }}
          >
            <BlueprintHeroArt />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
