import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        sumi: '#0C0C0D',
        washi: '#EFE8D8',
        shu: '#B23A1E',
        ai: '#22395C',
        neon: '#00E5C7',
        kin: '#B8925A',
      },
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        body: ['var(--font-body)', 'sans-serif'],
      },
      spacing: {
        '1': '0.5rem',
        '2': '1rem',
        '3': '1.5rem',
        '4': '2rem',
        '6': '3rem',
        '8': '4rem',
        '12': '6rem',
        '16': '8rem',
      },
    },
  },
};

export default config;
