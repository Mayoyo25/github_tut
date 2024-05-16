import type { Config } from 'tailwindcss';

const config: Config = {
  mode: 'jit',
  darkMode: 'class', // or 'media'
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    listStyleType: {
      none: 'none',
      roman: 'upper-roman',
    },
    extend: {
      colors: {
        'brand-color': '#26ffbd',
        'custom-pink': '#fa118b',
        custom: '#3BC4C3',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [require('daisyui'), require('@tailwindcss/typography')],
  daisyui: {
    themes: ['light', 'dark', 'winter', 'luxury'],
  },
};
export default config;
