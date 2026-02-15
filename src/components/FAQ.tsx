'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Container } from './Container';
import { Button } from './Button';

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQProps {
  items: FAQItem[];
  ctaText?: string;
  ctaHref?: string;
  ctaLabel?: string;
}

export const FAQ: React.FC<FAQProps> = ({
  items,
  ctaText = "Still have questions?",
  ctaHref = "/contact",
  ctaLabel = "Contact Us",
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-16 md:py-24 bg-pc-neutral-50">
      <Container maxWidth="md">
        <h2 className="text-3xl font-bold text-pc-neutral-900 text-center mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {items.map((item, index) => {
            const isOpen = openIndex === index;
            const buttonId = `faq-button-${index}`;
            const panelId = `faq-panel-${index}`;

            return (
              <div
                key={index}
                className="bg-white border border-pc-neutral-200 rounded-lg"
              >
                <h3>
                  <button
                    type="button"
                    id={buttonId}
                    className="w-full flex items-center justify-between gap-6 p-6 md:p-7 text-left"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex((prev) => (prev === index ? null : index))}
                  >
                    <span className="text-lg md:text-xl font-semibold text-pc-neutral-900">
                      {item.question}
                    </span>
                    <span
                      className={`shrink-0 transition-transform ${isOpen ? "rotate-180" : "rotate-0"}`}
                      aria-hidden="true"
                    >
                      <svg
                        className="h-5 w-5 text-pc-neutral-700"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </button>
                </h3>

                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={isOpen ? "px-6 pb-6 md:px-7 md:pb-7" : "hidden"}
                >
                  <p className="text-pc-neutral-600 leading-relaxed">{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-lg text-pc-neutral-600 mb-4">{ctaText}</p>
          <Link href={ctaHref} className="inline-block">
            <Button type="button" variant="primary" size="lg">
              {ctaLabel}
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
};
