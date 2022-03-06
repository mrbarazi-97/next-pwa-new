module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      darkBlue: '#040847',
      mainBlue: '#2484c6',
      lightGray: '#ffffff80',
      white: '#ffffff',
      yellow: '#f3ba2f',
    },
    extend: {
      keyframes: {
        movingStars: {
          from: {
            'background-position': ' 0 0',
          },
          to: {
            'background-position': ' -10000px 5000px',
          },
        },
      },
      animation: {
        movingStars: 'movingStars 200ms linear infinite',
      },
    },
  },
  plugins: [],
};
