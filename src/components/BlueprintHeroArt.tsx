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
          cx="130"
          cy="110"
          r="36"
          stroke="rgba(44, 2, 217, 0.65)"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ ...drawTransition, delay: 0.5 }}
        />
        <motion.circle
          cx="240"
          cy="110"
          r="28"
          stroke="rgba(44, 2, 217, 0.4)"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ ...drawTransition, delay: 0.6 }}
        />
        <motion.circle
          cx="400"
          cy="110"
          r="20"
          stroke="rgba(44, 2, 217, 0.4)"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ ...drawTransition, delay: 0.7 }}
        />
        <motion.path
          d="M166 110H212M268 110H380"
          stroke="rgba(44, 2, 217, 0.5)"
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ ...drawTransition, delay: 0.8 }}
        />
        <motion.path
          d="M130 146V186M240 138V236M400 130V295"
          stroke="rgba(44, 2, 217, 0.25)"
          strokeWidth="1.5"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ ...detailTransition, delay: 1.0 }}
        />
        <motion.path
          d="M360 50C390 30 430 30 460 50"
          stroke="rgba(44, 2, 217, 0.35)"
          strokeWidth="1.5"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ ...detailTransition, delay: 0.85 }}
        />
        <motion.circle
          cx="360"
          cy="50"
          r="6"
          fill="rgba(44, 2, 217, 0.2)"
          stroke="rgba(44, 2, 217, 0.5)"
          strokeWidth="1.2"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
        />
        <motion.circle
          cx="410"
          cy="35"
          r="5"
          fill="rgba(44, 2, 217, 0.2)"
          stroke="rgba(44, 2, 217, 0.5)"
          strokeWidth="1.2"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.95, ease: [0.2, 0.8, 0.2, 1] }}
        />
        <motion.circle
          cx="460"
          cy="50"
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
          <rect x="55" y="186" width="150" height="32" rx="16" fill="rgba(44, 2, 217, 0.08)" />
          <text x="130" y="207" textAnchor="middle" fontSize="12" fill="rgba(44, 2, 217, 0.75)">
            1. Define scope
          </text>
        </motion.g>
        <motion.g
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <rect x="135" y="236" width="210" height="32" rx="16" fill="rgba(44, 2, 217, 0.08)" />
          <text x="240" y="257" textAnchor="middle" fontSize="12" fill="rgba(44, 2, 217, 0.75)">
            2. Align commercial strategy
          </text>
        </motion.g>
        <motion.g
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.3, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <rect x="310" y="295" width="180" height="32" rx="16" fill="rgba(44, 2, 217, 0.08)" />
          <text x="400" y="316" textAnchor="middle" fontSize="12" fill="rgba(44, 2, 217, 0.75)">
            3. Deliver with control
          </text>
        </motion.g>
      </svg>
    </div>
  );
}
