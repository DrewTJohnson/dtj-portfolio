/** @type {import('tailwindcss').Config} */
import { interactVariantPlugin } from './plugins/tailwind/interact.js'
import { animateDelayPlugin } from './plugins/tailwind/animate-delay.js'
import { animationDurationPlugin } from './plugins/tailwind/animation-duration.js'

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        "fade-in": "fade-in 0.75s ease-in-out"
      },
      keyframes: {
        "fade-in": {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        }
      }
    },
  },
  plugins: [interactVariantPlugin, animateDelayPlugin, animationDurationPlugin],
};
