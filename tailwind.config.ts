export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        sage: '#9BAE9E',
        darkGreen: '#052e16',
      },
      fontFamily: {
        poiret: ['Poiret One', 'sans-serif'],
        windsong: ['WindSong', 'serif'],
        greatvibes: ['Great Vibes', 'cursive'],
        nunito: ['Nunito', 'sans-serif'],
      },
      boxShadow: {
        custom: '0px 8px 20px rgba(0, 0, 0, 0.35)',
      },
    },
  },
  plugins: [],
};
