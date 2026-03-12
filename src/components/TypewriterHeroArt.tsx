"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';

const TEXT = 'PC QUANTI';
const TYPE_SPEED = 120; // ms per character — deliberate, readable pace
const JITTER = 30; // ±ms random variation for natural feel
const INITIAL_DELAY = 600; // ms before typing starts
const CURSOR_BLINK_AFTER = 800; // ms after last char before cursor settles

/** Adds slight random variation to timing for a natural typing feel */
function jitter(base: number): number {
  return base + Math.floor(Math.random() * JITTER * 2) - JITTER;
}

export function TypewriterHeroArt() {
  const [charCount, setCharCount] = useState(0);
  const [cursorVisible, setCursorVisible] = useState(true);
  const [typingComplete, setTypingComplete] = useState(false);

  // Type out characters one by one
  useEffect(() => {
    if (charCount >= TEXT.length) {
      // Typing is done — wait a beat then stop cursor blinking
      const timeout = setTimeout(() => {
        setTypingComplete(true);
        setCursorVisible(true); // cursor stays solid briefly, then fades
      }, CURSOR_BLINK_AFTER);
      return () => clearTimeout(timeout);
    }

    const delay = charCount === 0 ? INITIAL_DELAY : jitter(TYPE_SPEED);
    const timeout = setTimeout(() => {
      setCharCount((prev) => prev + 1);
    }, delay);

    return () => clearTimeout(timeout);
  }, [charCount]);

  // Blink cursor while typing
  useEffect(() => {
    if (typingComplete) return;

    const interval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 530);

    return () => clearInterval(interval);
  }, [typingComplete]);

  const displayedText = TEXT.slice(0, charCount);

  return (
    <div className="relative flex aspect-[4/3] w-full max-w-xl items-center justify-center">
      {/* Subtle background glow */}
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(196, 162, 26, 0.08) 0%, transparent 70%)',
        }}
        aria-hidden
      />

      {/* Typewriter text */}
      <div className="relative select-none text-center">
        <span
          className="text-5xl font-black tracking-[0.08em] text-pc-gold md:text-6xl lg:text-7xl"
          style={{ fontFamily: 'var(--font-montserrat), system-ui, sans-serif' }}
          aria-label="PC QUANTI"
        >
          {displayedText}
        </span>

        {/* Blinking cursor */}
        {!typingComplete && (
          <motion.span
            className="ml-[2px] inline-block h-[0.85em] w-[3px] translate-y-[0.08em] bg-pc-gold align-baseline md:w-[4px]"
            style={{ opacity: cursorVisible ? 1 : 0 }}
            aria-hidden="true"
          />
        )}

        {/* Cursor fade-out after typing completes */}
        {typingComplete && (
          <motion.span
            className="ml-[2px] inline-block h-[0.85em] w-[3px] translate-y-[0.08em] bg-pc-gold align-baseline md:w-[4px]"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 1.2, delay: 0.5, ease: 'easeOut' }}
            aria-hidden="true"
          />
        )}
      </div>
    </div>
  );
}
