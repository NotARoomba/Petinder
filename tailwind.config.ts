import type { Config } from "tailwindcss";

export default {
  content: [
    "./index.html",
    "./src/tsx/**/*.{js,ts,jsx,tsx}",
    "./src/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: '"Inter"',
      },
      colors: { 'rose_pink': { DEFAULT: '#ff6bc7', 100: '#48002d', 200: '#910059', 300: '#d90086', 400: '#ff23ab', 500: '#ff6bc7', 600: '#ff89d2', 700: '#ffa6dd', 800: '#ffc4e8', 900: '#ffe1f4' }, 'hot_pink': { DEFAULT: '#ff67be', 100: '#470028', 200: '#8f0051', 300: '#d60079', 400: '#ff1f9e', 500: '#ff67be', 600: '#ff85ca', 700: '#ffa3d7', 800: '#ffc2e4', 900: '#ffe0f2' }, 'persian_pink': { DEFAULT: '#ff7cb2', 100: '#4b001f', 200: '#97003f', 300: '#e2005e', 400: '#ff2f86', 500: '#ff7cb2', 600: '#ff95c1', 700: '#ffafd1', 800: '#ffcae0', 900: '#ffe4f0' }, 'tickle_me_pink': { DEFAULT: '#ff86ad', 100: '#4e0019', 200: '#9b0031', 300: '#e9004a', 400: '#ff3776', 500: '#ff86ad', 600: '#ff9dbc', 700: '#ffb6cd', 800: '#ffcede', 900: '#ffe7ee' }, 'baker-miller_pink': { DEFAULT: '#fe8fa9', 100: '#4f0113', 200: '#9e0226', 300: '#ec0239', 400: '#fd416d', 500: '#fe8fa9', 600: '#fea6bb', 700: '#febccc', 800: '#ffd3dd', 900: '#ffe9ee' }, 'gunmetal': { DEFAULT: '#2f323a', 100: '#0a0a0c', 200: '#131418', 300: '#1d1f23', 400: '#27292f', 500: '#2f323a', 600: '#545967', 700: '#7a8092', 800: '#a6abb6', 900: '#d3d5db' } },
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
