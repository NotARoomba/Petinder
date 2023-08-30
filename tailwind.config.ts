import type { Config } from "tailwindcss";

export default {
  content: [
    "./index.html",
    "./src/tsx/**/*.{js,ts,jsx,tsx}",
    "./src/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gunmetal: {
          DEFAULT: "#2f323a",
          100: "#0a0a0c",
          200: "#131418",
          300: "#1d1f23",
          400: "#27292f",
          500: "#2f323a",
          600: "#545967",
          700: "#7a8092",
          800: "#a6abb6",
          900: "#d3d5db",
        },
        chinese_violet: {
          DEFAULT: "#77567a",
          100: "#181118",
          200: "#302331",
          300: "#483449",
          400: "#5f4562",
          500: "#77567a",
          600: "#98729b",
          700: "#b295b4",
          800: "#cbb9cd",
          900: "#e5dce6",
        },
        french_mauve: {
          DEFAULT: "#c47ac0",
          100: "#2c132b",
          200: "#582755",
          300: "#843a80",
          400: "#b04dab",
          500: "#c47ac0",
          600: "#d093cd",
          700: "#dcaed9",
          800: "#e7c9e6",
          900: "#f3e4f2",
        },
        amaranth_pink: {
          DEFAULT: "#e39ec1",
          100: "#3b1126",
          200: "#77224d",
          300: "#b23473",
          400: "#d16199",
          500: "#e39ec1",
          600: "#e8b0cc",
          700: "#eec4d9",
          800: "#f4d7e6",
          900: "#f9ebf2",
        },
        "tea_rose_(red)": {
          DEFAULT: "#debac0",
          100: "#371b1f",
          200: "#6e353f",
          300: "#a5505e",
          400: "#c3838e",
          500: "#debac0",
          600: "#e4c8cd",
          700: "#ebd6d9",
          800: "#f2e3e6",
          900: "#f8f1f2",
        },
      },
      keyframes: {
        animatedgradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      backgroundSize: {
        '300%': '300%',
      },
      animation: {
        gradient: 'animatedgradient 6s ease infinite alternate',
      },
    },
  },
  plugins: [],
} satisfies Config;
