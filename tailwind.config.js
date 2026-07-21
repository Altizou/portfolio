/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
    "./src/app/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgprimary: "#05080a",
        bgsecondary: "#0a0f12",
        bgcard: "#0d1417",
        bordersubtle: "#1a2226",
        accent: "#22d3ee",
        accentdim: "#0e7490",
        textsecondary: "#94a3b8",
        textmuted: "#64748b",
      },
      fontFamily: {
        mono: ["var(--font-mono)"],
        sans: ["var(--font-sans)"],
      },
    },
  },
  plugins: [],
};
