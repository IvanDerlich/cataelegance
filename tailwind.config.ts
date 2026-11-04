import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cacao: '#794C34',
        rosa: '#B36C68',
        crema: '#FEF5E6',
        blush: '#F3D9D4',
        nude: '#EBCDB7',
      },
      fontFamily: {
        satisfy: ['var(--font-satisfy)', 'cursive'],
        cormorant: ['var(--font-cormorant)', 'serif'],
        montserrat: ['var(--font-montserrat)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
