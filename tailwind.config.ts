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
        'pc-blue': '#2C02D9',        // Primary brand color
        'pc-blue-dark': '#1F0199',   // Hover/active states
        'pc-blue-light': '#E8E3FF',  // Subtle backgrounds
        
        // Neutrals (light mode)
        'pc-neutral-50': '#FAFAFA',   // Lightest surface
        'pc-neutral-100': '#F5F5F5',  // Secondary surface
        'pc-neutral-200': '#E5E5E5',  // Borders
        'pc-neutral-400': '#A3A3A3',  // Muted text
        'pc-neutral-600': '#525252',  // Secondary text
        'pc-neutral-900': '#171717',  // Primary text
      },
    },
  },
  plugins: [],
};

export default config;
