"use client";

import React from 'react';
import { motion } from 'framer-motion';

const drawTransition = {
  duration: 2.0,
  ease: [0.2, 0.8, 0.2, 1],
};

const detailTransition = {
  duration: 1.6,
  ease: [0.2, 0.8, 0.2, 1],
};

export function BlueprintHeroArt() {
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
          stroke="rgba(44, 2, 217, 0.5)"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={drawTransition}
        />
        <motion.path
          d="M60 80H220M60 110H180M60 140H200"
          stroke="rgba(44, 2, 217, 0.35)"
          strokeWidth="1.5"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ ...detailTransition, delay: 0.35 }}
        />
        <motion.path
          d="M280 90H440M280 120H420M280 150H450"
          stroke="rgba(44, 2, 217, 0.35)"
          strokeWidth="1.5"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ ...detailTransition, delay: 0.45 }}
        />
        <motion.path
          d="M70 70H450"
          stroke="rgba(44, 2, 217, 0.2)"
          strokeWidth="1"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ ...detailTransition, delay: 0.55 }}
        />
        <motion.path
          d="M70 70V330"
          stroke="rgba(44, 2, 217, 0.2)"
          strokeWidth="1"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ ...detailTransition, delay: 0.55 }}
        />
        <motion.circle
          cx="140"
          cy="230"
          r="36"
          stroke="rgba(44, 2, 217, 0.65)"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ ...drawTransition, delay: 0.5 }}
        />
        <motion.circle
          cx="300"
          cy="230"
          r="28"
          stroke="rgba(44, 2, 217, 0.4)"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ ...drawTransition, delay: 0.6 }}
        />
        <motion.circle
          cx="420"
          cy="230"
          r="20"
          stroke="rgba(44, 2, 217, 0.4)"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ ...drawTransition, delay: 0.7 }}
        />
        <motion.path
          d="M176 230H272M328 230H402"
          stroke="rgba(44, 2, 217, 0.5)"
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ ...drawTransition, delay: 0.8 }}
        />
        <motion.path
          d="M140 266V320M300 258V320M420 250V320"
          stroke="rgba(44, 2, 217, 0.25)"
          strokeWidth="1.5"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ ...detailTransition, delay: 1.0 }}
        />
        <motion.path
          d="M320 180C350 160 390 160 420 180"
          stroke="rgba(44, 2, 217, 0.35)"
          strokeWidth="1.5"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ ...detailTransition, delay: 0.85 }}
        />
        <motion.circle
          cx="320"
          cy="180"
          r="6"
          fill="rgba(44, 2, 217, 0.2)"
          stroke="rgba(44, 2, 217, 0.5)"
          strokeWidth="1.2"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
        />
        <motion.circle
          cx="370"
          cy="165"
          r="5"
          fill="rgba(44, 2, 217, 0.2)"
          stroke="rgba(44, 2, 217, 0.5)"
          strokeWidth="1.2"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.95, ease: [0.2, 0.8, 0.2, 1] }}
        />
        <motion.circle
          cx="420"
          cy="180"
          r="6"
          fill="rgba(44, 2, 217, 0.2)"
          stroke="rgba(44, 2, 217, 0.5)"
          strokeWidth="1.2"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4, delay: 1.0, ease: [0.2, 0.8, 0.2, 1] }}
        />
        <motion.g
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.1, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <rect x="70" y="310" width="120" height="32" rx="16" fill="rgba(44, 2, 217, 0.08)" />
          <text x="130" y="331" textAnchor="middle" fontSize="12" fill="rgba(44, 2, 217, 0.75)">
            Certainty
          </text>
        </motion.g>
        <motion.g
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <rect x="228" y="310" width="120" height="32" rx="16" fill="rgba(44, 2, 217, 0.08)" />
          <text x="288" y="331" textAnchor="middle" fontSize="12" fill="rgba(44, 2, 217, 0.75)">
            Confidence
          </text>
        </motion.g>
        <motion.g
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.3, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <rect x="384" y="310" width="120" height="32" rx="16" fill="rgba(44, 2, 217, 0.08)" />
          <text x="444" y="331" textAnchor="middle" fontSize="12" fill="rgba(44, 2, 217, 0.75)">
            Momentum
          </text>
        </motion.g>
      </svg>
    </div>
  );
}
