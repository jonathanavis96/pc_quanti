import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Gold brand family
        'pc-gold': '#C4A21A',          // Primary brand gold
        'pc-gold-dark': '#9B7F0E',     // Hover/active states (darker gold)
        'pc-gold-light': '#FDF8E8',    // Subtle backgrounds (warm cream)
        'pc-gold-50': '#FFFDF5',       // Lightest gold tint
        'pc-gold-100': '#FDF8E8',      // Light gold background
        'pc-gold-200': '#F5ECCC',      // Light gold border/accent
        'pc-gold-300': '#E8D88F',      // Soft gold
        'pc-gold-400': '#D4BD4A',      // Medium gold
        'pc-gold-500': '#C4A21A',      // Primary brand gold (same as pc-gold)
        'pc-gold-600': '#9B7F0E',      // Dark gold (same as pc-gold-dark)
        'pc-gold-700': '#7A6409',      // Deeper gold
        'pc-gold-800': '#5C4B07',      // Very dark gold
        'pc-gold-900': '#3D3205',      // Darkest gold

        // Near-black for dark sections (warm-shifted)
        'pc-black': '#0B0A09',         // Primary dark background
        'pc-black-light': '#1B1A18',   // Elevated dark surface
        'pc-black-lighter': '#2B2A27', // Cards/panels on dark bg

        // Legacy aliases (map old blue names to gold for migration)
        'pc-blue': '#C4A21A',          // → pc-gold
        'pc-blue-dark': '#9B7F0E',     // → pc-gold-dark
        'pc-blue-light': '#FDF8E8',    // → pc-gold-light

        // Neutrals – warm-shifted to complement gold (light mode)
        'pc-neutral-50': '#FAFAF7',    // Lightest surface
        'pc-neutral-100': '#F5F5F2',   // Secondary surface
        'pc-neutral-200': '#E5E5E1',   // Borders
        'pc-neutral-300': '#D4D4CF',   // Subtle dividers
        'pc-neutral-400': '#A3A3A0',   // Muted text
        'pc-neutral-500': '#73736F',   // Subdued labels
        'pc-neutral-600': '#52524E',   // Secondary text
        'pc-neutral-700': '#40403C',   // Strong muted text
        'pc-neutral-900': '#171715',   // Primary text
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'h1': ['2.5rem', { lineHeight: '1.2', fontWeight: '700' }],
        'h2': ['2rem', { lineHeight: '1.3', fontWeight: '700' }],
        'h3': ['1.5rem', { lineHeight: '1.4', fontWeight: '600' }],
        'h4': ['1.25rem', { lineHeight: '1.5', fontWeight: '600' }],
      },
    },
  },
  plugins: [],
};

export default config;
