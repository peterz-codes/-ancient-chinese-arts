/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        paper:   '#F5EDD6',
        'paper-dark': '#EAE0C4',
        ink:     '#1E1209',
        vermil:  '#8B1A1A',
        'vermil-light': '#A52020',
        gold:    '#9E7D3A',
        'gold-light': '#C9A84C',
        sepia:   '#6B5D4F',
        border:  '#D4B896',
      },
      fontFamily: {
        serif: ['"Noto Serif SC"', 'serif'],
        display: ['"Ma Shan Zheng"', 'serif'],
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#1E1209',
          },
        },
      },
    },
  },
  plugins: [],
};
