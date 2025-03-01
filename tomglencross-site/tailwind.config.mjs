/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        pinkCustom: '#FF13F0',
        blueCustom: "#0000FF",
        nightModeBlueCustom: "#00FFEE",
        nightModePinkCustom: "#FC33FF",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        arimo: ["Arimo", "sans-serif"]
      },
      keyframes: {
        fadeOut: {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
      },
      animation: {
        'fade-out': 'fadeOut 5s ease-in-out forwards',
      },
    },
  },
  plugins: [],
};
