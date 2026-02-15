"use client";

import React from 'react';
import { motion } from 'framer-motion';

const drawTransition = {
  duration: 10.0,
  ease: 'linear',
};

const detailTransition = {
  duration: 8.0,
  ease: 'linear',
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
        <motion.path
          d="M130 146 A36 36 0 1 1 130 74 A36 36 0 1 1 130 146"
          stroke="rgba(44, 2, 217, 0.65)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ ...drawTransition, delay: 0.5 }}
        />
        <motion.path
          d="M166 110H212"
          stroke="rgba(44, 2, 217, 0.5)"
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ ...drawTransition, delay: 8.0 }}
        />
        <motion.path
          d="M130 146V186"
          stroke="rgba(44, 2, 217, 0.25)"
          strokeWidth="1.5"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ ...detailTransition, delay: 10.5 }}
        />
        <motion.path
          d="M130 186H55"
          stroke="rgba(44, 2, 217, 0.35)"
          strokeWidth="1.5"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.0, delay: 18.5, ease: 'linear' }}
        />
        <motion.path
          d="M130 186H205"
          stroke="rgba(44, 2, 217, 0.35)"
          strokeWidth="1.5"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.0, delay: 18.5, ease: 'linear' }}
        />
        <motion.path
          d="M55 186V218"
          stroke="rgba(44, 2, 217, 0.35)"
          strokeWidth="1.5"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 20.5, ease: 'linear' }}
        />
        <motion.path
          d="M205 186V218"
          stroke="rgba(44, 2, 217, 0.35)"
          strokeWidth="1.5"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 20.5, ease: 'linear' }}
        />
        <motion.path
          d="M55 218H130"
          stroke="rgba(44, 2, 217, 0.35)"
          strokeWidth="1.5"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.0, delay: 22.0, ease: 'linear' }}
        />
        <motion.path
          d="M205 218H130"
          stroke="rgba(44, 2, 217, 0.35)"
          strokeWidth="1.5"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.0, delay: 22.0, ease: 'linear' }}
        />
        <motion.rect
          x="55"
          y="186"
          width="150"
          height="32"
          rx="16"
          fill="rgba(44, 2, 217, 0.08)"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.0, delay: 24.0, ease: 'linear' }}
        />
        <motion.text
          x="130"
          y="207"
          textAnchor="middle"
          fontSize="12"
          fill="rgba(44, 2, 217, 0.75)"
          initial={{ clipPath: 'inset(0 100% 0 0)', opacity: 1 }}
          animate={{ clipPath: 'inset(0 0% 0 0)', opacity: 1 }}
          transition={{ duration: 2.0, delay: 25.0, ease: 'linear' }}
        >
          1. Define scope
        </motion.text>
        <motion.path
          d="M212 110 A28 28 0 0 1 240 82 A28 28 0 0 1 268 110 A28 28 0 0 1 240 138 A28 28 0 0 1 212 110"
          stroke="rgba(44, 2, 217, 0.4)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ ...drawTransition, delay: 18.0 }}
        />
        <motion.path
          d="M268 110H380"
          stroke="rgba(44, 2, 217, 0.5)"
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ ...drawTransition, delay: 23.0 }}
        />
        <motion.path
          d="M240 138V236"
          stroke="rgba(44, 2, 217, 0.25)"
          strokeWidth="1.5"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ ...detailTransition, delay: 25.5 }}
        />
        <motion.path
          d="M240 236H135"
          stroke="rgba(44, 2, 217, 0.35)"
          strokeWidth="1.5"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.0, delay: 33.5, ease: 'linear' }}
        />
        <motion.path
          d="M240 236H345"
          stroke="rgba(44, 2, 217, 0.35)"
          strokeWidth="1.5"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.0, delay: 33.5, ease: 'linear' }}
        />
        <motion.path
          d="M135 236V268"
          stroke="rgba(44, 2, 217, 0.35)"
          strokeWidth="1.5"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 35.5, ease: 'linear' }}
        />
        <motion.path
          d="M345 236V268"
          stroke="rgba(44, 2, 217, 0.35)"
          strokeWidth="1.5"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 35.5, ease: 'linear' }}
        />
        <motion.path
          d="M135 268H240"
          stroke="rgba(44, 2, 217, 0.35)"
          strokeWidth="1.5"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.0, delay: 37.0, ease: 'linear' }}
        />
        <motion.path
          d="M345 268H240"
          stroke="rgba(44, 2, 217, 0.35)"
          strokeWidth="1.5"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.0, delay: 37.0, ease: 'linear' }}
        />
        <motion.rect
          x="135"
          y="236"
          width="210"
          height="32"
          rx="16"
          fill="rgba(44, 2, 217, 0.08)"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.0, delay: 39.0, ease: 'linear' }}
        />
        <motion.text
          x="240"
          y="257"
          textAnchor="middle"
          fontSize="12"
          fill="rgba(44, 2, 217, 0.75)"
          initial={{ clipPath: 'inset(0 100% 0 0)', opacity: 1 }}
          animate={{ clipPath: 'inset(0 0% 0 0)', opacity: 1 }}
          transition={{ duration: 2.0, delay: 40.0, ease: 'linear' }}
        >
          2. Align commercial strategy
        </motion.text>
        <motion.path
          d="M380 110 A20 20 0 0 1 400 90 A20 20 0 0 1 420 110 A20 20 0 0 1 400 130 A20 20 0 0 1 380 110"
          stroke="rgba(44, 2, 217, 0.4)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ ...drawTransition, delay: 33.0 }}
        />
        <motion.path
          d="M400 130V295"
          stroke="rgba(44, 2, 217, 0.25)"
          strokeWidth="1.5"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ ...detailTransition, delay: 40.5 }}
        />
        <motion.path
          d="M400 295H310"
          stroke="rgba(44, 2, 217, 0.35)"
          strokeWidth="1.5"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.0, delay: 48.5, ease: 'linear' }}
        />
        <motion.path
          d="M400 295H490"
          stroke="rgba(44, 2, 217, 0.35)"
          strokeWidth="1.5"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.0, delay: 48.5, ease: 'linear' }}
        />
        <motion.path
          d="M310 295V327"
          stroke="rgba(44, 2, 217, 0.35)"
          strokeWidth="1.5"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 50.5, ease: 'linear' }}
        />
        <motion.path
          d="M490 295V327"
          stroke="rgba(44, 2, 217, 0.35)"
          strokeWidth="1.5"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 50.5, ease: 'linear' }}
        />
        <motion.path
          d="M310 327H400"
          stroke="rgba(44, 2, 217, 0.35)"
          strokeWidth="1.5"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.0, delay: 52.0, ease: 'linear' }}
        />
        <motion.path
          d="M490 327H400"
          stroke="rgba(44, 2, 217, 0.35)"
          strokeWidth="1.5"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.0, delay: 52.0, ease: 'linear' }}
        />
        <motion.rect
          x="310"
          y="295"
          width="180"
          height="32"
          rx="16"
          fill="rgba(44, 2, 217, 0.08)"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.0, delay: 54.0, ease: 'linear' }}
        />
        <motion.text
          x="400"
          y="316"
          textAnchor="middle"
          fontSize="12"
          fill="rgba(44, 2, 217, 0.75)"
          initial={{ clipPath: 'inset(0 100% 0 0)', opacity: 1 }}
          animate={{ clipPath: 'inset(0 0% 0 0)', opacity: 1 }}
          transition={{ duration: 2.0, delay: 55.0, ease: 'linear' }}
        >
          3. Deliver with control
        </motion.text>
        <motion.path
          d="M360 50C390 30 430 30 460 50"
          stroke="rgba(44, 2, 217, 0.35)"
          strokeWidth="1.5"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ ...detailTransition, delay: 1.5 }}
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
      </svg>
    </div>
  );
}
