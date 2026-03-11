"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const COUNTRIES = [
  'South Africa',
  'United Kingdom',
  'Canada',
  'USA',
  'Africa',
  'Asia',
  'Americas',
  'Europe',
  'Middle East',
];

const TYPE_SPEED = 55; // ms per character — fast but readable
const PAUSE_DURATION = 1200; // ms to display full text before deleting
const DELETE_SPEED = 30; // ms per character when deleting — quick erase
const JITTER = 25; // ±ms random variation for natural feel

/** Adds slight random variation to timing for a natural typing feel */
function jitter(base: number): number {
  return base + Math.floor(Math.random() * JITTER * 2) - JITTER;
}

export function TypewriterCountries() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const currentCountry = COUNTRIES[currentIndex];

  useEffect(() => {
    let delay: number;

    if (!isDeleting) {
      if (displayedText.length < currentCountry.length) {
        delay = jitter(TYPE_SPEED);
      } else {
        delay = PAUSE_DURATION;
      }
    } else {
      if (displayedText.length > 0) {
        delay = jitter(DELETE_SPEED);
      } else {
        delay = TYPE_SPEED; // brief pause before next word starts
      }
    }

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayedText.length < currentCountry.length) {
          setDisplayedText(currentCountry.slice(0, displayedText.length + 1));
        } else {
          setIsDeleting(true);
        }
      } else {
        if (displayedText.length > 0) {
          setDisplayedText(displayedText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % COUNTRIES.length);
        }
      }
    }, delay);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentCountry]);

  return (
    <span className="inline-flex items-baseline">
      <span className="text-pc-gold">{displayedText}</span>
      <motion.span
        className="ml-[1px] inline-block h-[1.1em] w-[2px] translate-y-[0.1em] bg-pc-gold"
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.6, repeat: Infinity, repeatType: 'reverse' }}
        aria-hidden="true"
      />
    </span>
  );
}
