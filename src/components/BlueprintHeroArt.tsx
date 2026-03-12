"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const BRAND_TEXT = 'PC QUANTI';
const TYPE_SPEED = 330; // ms per character (1/3 speed)
const JITTER = 50; // ±ms random variation
const INITIAL_DELAY = 800; // ms before typing starts

function jitter(base: number): number {
  return base + Math.floor(Math.random() * JITTER * 2) - JITTER;
}

// Speed multiplier: 1 = normal, 2 = 2x faster, 0.5 = half speed
const SPEED_MULTIPLIER = 8;

const drawTransition = {
  duration: 10.0 / SPEED_MULTIPLIER,
  ease: [0, 0, 1, 1] as const,
};

const detailTransition = {
  duration: 8.0 / SPEED_MULTIPLIER,
  ease: [0, 0, 1, 1] as const,
};

export function BlueprintHeroArt() {
  const [charCount, setCharCount] = useState(0);
  const [cursorVisible, setCursorVisible] = useState(true);
  const [typingComplete, setTypingComplete] = useState(false);

  useEffect(() => {
    if (charCount >= BRAND_TEXT.length) {
      const timeout = setTimeout(() => {
        setTypingComplete(true);
        setCursorVisible(false);
      }, 800);
      return () => clearTimeout(timeout);
    }
    const delay = charCount === 0 ? INITIAL_DELAY : jitter(TYPE_SPEED);
    const timeout = setTimeout(() => setCharCount((prev) => prev + 1), delay);
    return () => clearTimeout(timeout);
  }, [charCount]);

  useEffect(() => {
    if (typingComplete) return;
    const interval = setInterval(() => setCursorVisible((prev) => !prev), 530);
    return () => clearInterval(interval);
  }, [typingComplete]);

  const displayedText = BRAND_TEXT.slice(0, charCount);

  return (
    <div className="relative aspect-[4/3] w-full max-w-xl">
      <svg
        viewBox="0 0 520 390"
        className="h-full w-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.rect
          x="20"
          y="20"
          width="480"
          height="350"
          rx="18"
          stroke="rgba(196, 162, 26, 0.5)"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={drawTransition}
        />
        <motion.path
          d="M70 70H450"
          stroke="rgba(196, 162, 26, 0.2)"
          strokeWidth="1"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ ...detailTransition, delay: 0.55 / SPEED_MULTIPLIER }}
        />
        <motion.path
          d="M70 70V330"
          stroke="rgba(196, 162, 26, 0.2)"
          strokeWidth="1"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ ...detailTransition, delay: 0.55 / SPEED_MULTIPLIER }}
        />
        <motion.path
          d="M130 146 A36 36 0 1 1 130 74 A36 36 0 1 1 130 146"
          stroke="rgba(196, 162, 26, 0.65)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ ...drawTransition, delay: 0.5 / SPEED_MULTIPLIER }}
        />
        <motion.path
          d="M166 110H212"
          stroke="rgba(196, 162, 26, 0.5)"
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ ...drawTransition, delay: 8.0 / SPEED_MULTIPLIER }}
        />
        <motion.path
          d="M130 146V186"
          stroke="rgba(196, 162, 26, 0.25)"
          strokeWidth="1.5"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ ...detailTransition, delay: 10.5 / SPEED_MULTIPLIER }}
        />
        <motion.path
          d="M130 186H75"
          stroke="rgba(196, 162, 26, 0.35)"
          strokeWidth="1.5"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.0 / SPEED_MULTIPLIER, delay: 18.5 / SPEED_MULTIPLIER, ease: [0, 0, 1, 1] as const }}
        />
        <motion.path
          d="M130 186H185"
          stroke="rgba(196, 162, 26, 0.35)"
          strokeWidth="1.5"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.0 / SPEED_MULTIPLIER, delay: 18.5 / SPEED_MULTIPLIER, ease: [0, 0, 1, 1] as const }}
        />
        <motion.path
          d="M75 186V218"
          stroke="rgba(196, 162, 26, 0.35)"
          strokeWidth="1.5"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5 / SPEED_MULTIPLIER, delay: 20.5 / SPEED_MULTIPLIER, ease: [0, 0, 1, 1] as const }}
        />
        <motion.path
          d="M185 186V218"
          stroke="rgba(196, 162, 26, 0.35)"
          strokeWidth="1.5"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5 / SPEED_MULTIPLIER, delay: 20.5 / SPEED_MULTIPLIER, ease: [0, 0, 1, 1] as const }}
        />
        <motion.path
          d="M75 218H130"
          stroke="rgba(196, 162, 26, 0.35)"
          strokeWidth="1.5"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.0 / SPEED_MULTIPLIER, delay: 22.0 / SPEED_MULTIPLIER, ease: [0, 0, 1, 1] as const }}
        />
        <motion.path
          d="M185 218H130"
          stroke="rgba(196, 162, 26, 0.35)"
          strokeWidth="1.5"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.0 / SPEED_MULTIPLIER, delay: 22.0 / SPEED_MULTIPLIER, ease: [0, 0, 1, 1] as const }}
        />
        <motion.rect
          x="75"
          y="186"
          width="110"
          height="32"
          rx="4"
          fill="rgba(196, 162, 26, 0.08)"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 / SPEED_MULTIPLIER, delay: 24.0 / SPEED_MULTIPLIER, ease: [0, 0, 1, 1] as const }}
        />
        <motion.text
          x="130"
          y="207"
          textAnchor="middle"
          fontSize="12"
          fill="rgba(196, 162, 26, 0.75)"
          initial={{ clipPath: 'inset(0 100% 0 0)', opacity: 1 }}
          animate={{ clipPath: 'inset(0 0% 0 0)', opacity: 1 }}
          transition={{ duration: 2.0 / SPEED_MULTIPLIER, delay: 25.0 / SPEED_MULTIPLIER, ease: [0, 0, 1, 1] as const }}
        >
          1. Define scope
        </motion.text>
        <motion.path
          d="M212 110 A28 28 0 0 1 240 82 A28 28 0 0 1 268 110 A28 28 0 0 1 240 138 A28 28 0 0 1 212 110"
          stroke="rgba(196, 162, 26, 0.4)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ ...drawTransition, delay: 18.0 / SPEED_MULTIPLIER }}
        />
        <motion.path
          d="M268 110H380"
          stroke="rgba(196, 162, 26, 0.5)"
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ ...drawTransition, delay: 23.0 / SPEED_MULTIPLIER }}
        />
        <motion.path
          d="M240 138V236"
          stroke="rgba(196, 162, 26, 0.25)"
          strokeWidth="1.5"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ ...detailTransition, delay: 25.5 / SPEED_MULTIPLIER }}
        />
        <motion.path
          d="M240 236H155"
          stroke="rgba(196, 162, 26, 0.35)"
          strokeWidth="1.5"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.0 / SPEED_MULTIPLIER, delay: 33.5 / SPEED_MULTIPLIER, ease: [0, 0, 1, 1] as const }}
        />
        <motion.path
          d="M240 236H325"
          stroke="rgba(196, 162, 26, 0.35)"
          strokeWidth="1.5"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.0 / SPEED_MULTIPLIER, delay: 33.5 / SPEED_MULTIPLIER, ease: [0, 0, 1, 1] as const }}
        />
        <motion.path
          d="M155 236V268"
          stroke="rgba(196, 162, 26, 0.35)"
          strokeWidth="1.5"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5 / SPEED_MULTIPLIER, delay: 35.5 / SPEED_MULTIPLIER, ease: [0, 0, 1, 1] as const }}
        />
        <motion.path
          d="M325 236V268"
          stroke="rgba(196, 162, 26, 0.35)"
          strokeWidth="1.5"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5 / SPEED_MULTIPLIER, delay: 35.5 / SPEED_MULTIPLIER, ease: [0, 0, 1, 1] as const }}
        />
        <motion.path
          d="M155 268H240"
          stroke="rgba(196, 162, 26, 0.35)"
          strokeWidth="1.5"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.0 / SPEED_MULTIPLIER, delay: 37.0 / SPEED_MULTIPLIER, ease: [0, 0, 1, 1] as const }}
        />
        <motion.path
          d="M325 268H240"
          stroke="rgba(196, 162, 26, 0.35)"
          strokeWidth="1.5"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.0 / SPEED_MULTIPLIER, delay: 37.0 / SPEED_MULTIPLIER, ease: [0, 0, 1, 1] as const }}
        />
        <motion.rect
          x="155"
          y="236"
          width="170"
          height="32"
          rx="4"
          fill="rgba(196, 162, 26, 0.08)"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 / SPEED_MULTIPLIER, delay: 39.0 / SPEED_MULTIPLIER, ease: [0, 0, 1, 1] as const }}
        />
        <motion.text
          x="240"
          y="257"
          textAnchor="middle"
          fontSize="12"
          fill="rgba(196, 162, 26, 0.75)"
          initial={{ clipPath: 'inset(0 100% 0 0)', opacity: 1 }}
          animate={{ clipPath: 'inset(0 0% 0 0)', opacity: 1 }}
          transition={{ duration: 2.0 / SPEED_MULTIPLIER, delay: 40.0 / SPEED_MULTIPLIER, ease: [0, 0, 1, 1] as const }}
        >
          2. Align commercial strategy
        </motion.text>
        <motion.path
          d="M380 110 A20 20 0 0 1 400 90 A20 20 0 0 1 420 110 A20 20 0 0 1 400 130 A20 20 0 0 1 380 110"
          stroke="rgba(196, 162, 26, 0.4)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ ...drawTransition, delay: 33.0 / SPEED_MULTIPLIER }}
        />
        <motion.path
          d="M400 130V295"
          stroke="rgba(196, 162, 26, 0.25)"
          strokeWidth="1.5"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ ...detailTransition, delay: 40.5 / SPEED_MULTIPLIER }}
        />
        <motion.path
          d="M400 295H325"
          stroke="rgba(196, 162, 26, 0.35)"
          strokeWidth="1.5"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.0 / SPEED_MULTIPLIER, delay: 48.5 / SPEED_MULTIPLIER, ease: [0, 0, 1, 1] as const }}
        />
        <motion.path
          d="M400 295H475"
          stroke="rgba(196, 162, 26, 0.35)"
          strokeWidth="1.5"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.0 / SPEED_MULTIPLIER, delay: 48.5 / SPEED_MULTIPLIER, ease: [0, 0, 1, 1] as const }}
        />
        <motion.path
          d="M325 295V327"
          stroke="rgba(196, 162, 26, 0.35)"
          strokeWidth="1.5"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5 / SPEED_MULTIPLIER, delay: 50.5 / SPEED_MULTIPLIER, ease: [0, 0, 1, 1] as const }}
        />
        <motion.path
          d="M475 295V327"
          stroke="rgba(196, 162, 26, 0.35)"
          strokeWidth="1.5"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5 / SPEED_MULTIPLIER, delay: 50.5 / SPEED_MULTIPLIER, ease: [0, 0, 1, 1] as const }}
        />
        <motion.path
          d="M325 327H400"
          stroke="rgba(196, 162, 26, 0.35)"
          strokeWidth="1.5"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.0 / SPEED_MULTIPLIER, delay: 52.0 / SPEED_MULTIPLIER, ease: [0, 0, 1, 1] as const }}
        />
        <motion.path
          d="M475 327H400"
          stroke="rgba(196, 162, 26, 0.35)"
          strokeWidth="1.5"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.0 / SPEED_MULTIPLIER, delay: 52.0 / SPEED_MULTIPLIER, ease: [0, 0, 1, 1] as const }}
        />
        <motion.rect
          x="325"
          y="295"
          width="150"
          height="32"
          rx="4"
          fill="rgba(196, 162, 26, 0.08)"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 / SPEED_MULTIPLIER, delay: 54.0 / SPEED_MULTIPLIER, ease: [0, 0, 1, 1] as const }}
        />
        <motion.text
          x="400"
          y="316"
          textAnchor="middle"
          fontSize="12"
          fill="rgba(196, 162, 26, 0.75)"
          initial={{ clipPath: 'inset(0 100% 0 0)', opacity: 1 }}
          animate={{ clipPath: 'inset(0 0% 0 0)', opacity: 1 }}
          transition={{ duration: 2.0 / SPEED_MULTIPLIER, delay: 55.0 / SPEED_MULTIPLIER, ease: [0, 0, 1, 1] as const }}
        >
          3. Deliver with control
        </motion.text>
        {/* PC QUANTI typewriter — replaces the 3-dot arc, top-right corner */}
        <foreignObject x="318" y="20" width="192" height="50">
          <div
            // @ts-expect-error xmlns is valid on SVG foreignObject children
            xmlns="http://www.w3.org/1999/xhtml"
            style={{
              display: 'flex',
              alignItems: 'center',
              height: '100%',
              paddingLeft: '4px',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-poppins), Poppins, system-ui, sans-serif',
                fontWeight: 700,
                fontSize: '19px',
                color: 'rgba(196, 162, 26, 0.9)',
                letterSpacing: '4px',
                whiteSpace: 'nowrap',
                userSelect: 'none',
              }}
              aria-label="PC QUANTI"
            >
              {displayedText}
            </span>
            {!typingComplete && (
              <span
                style={{
                  display: 'inline-block',
                  width: '2px',
                  height: '16px',
                  marginLeft: '2px',
                  backgroundColor: 'rgba(196, 162, 26, 0.9)',
                  opacity: cursorVisible ? 1 : 0,
                  verticalAlign: 'middle',
                }}
                aria-hidden="true"
              />
            )}
          </div>
        </foreignObject>
      </svg>
    </div>
  );
}
