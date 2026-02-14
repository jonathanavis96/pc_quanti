import React from 'react';
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
  ctaLabel = "Contact Us"
}) => {
  return (
    <section className="py-16 md:py-24 bg-pc-neutral-50">
      <Container maxWidth="md">
        <h2 className="text-3xl font-bold text-pc-neutral-900 text-center mb-12">
          Frequently Asked Questions
        </h2>
        
        <div className="space-y-6">
          {items.map((item, index) => (
            <div 
              key={index} 
              className="bg-white border border-pc-neutral-200 rounded-lg p-6 md:p-8"
            >
              <h3 className="text-xl font-semibold text-pc-neutral-900 mb-3">
                {item.question}
              </h3>
              <p className="text-pc-neutral-600 leading-relaxed">
                {item.answer}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-lg text-pc-neutral-600 mb-4">
            {ctaText}
          </p>
          <Button href={ctaHref} variant="primary" size="lg">
            {ctaLabel}
          </Button>
        </div>
      </Container>
    </section>
  );
};
