/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          red: "#A83913",
          gray: "#A59B8F",
          midnight: "#262B2F",
          steel: "#D3CFCA",
          mist: "#DDE2E7",
        },
      },
      fontFamily: {
        "noto-sans": ["var(--font-noto-sans)", "system-ui", "sans-serif"],
        "pp-museum": ["var(--font-pp-museum)", "system-ui", "sans-serif"],
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};
