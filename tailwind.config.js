/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      colors: {
        purple: {
          400: "#a78bfa",
          500: "#8b5cf6",
          600: "#7c3aed",
          900: "#1e1b4b",
        },
        teal: {
          400: "#34d399",
          500: "#10b981",
        },
        surface: {
          DEFAULT: "#0a0a0f",
          1: "#13131a",
          2: "#1a1a26",
        },
      },
      animation: {
        pulse2: "pulse2 2s ease-in-out infinite",
        spin2: "spin 20s linear infinite",
      },
      keyframes: {
        pulse2: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: ".5", transform: "scale(.8)" },
        },
      },
    },
  },
  plugins: [],
};
