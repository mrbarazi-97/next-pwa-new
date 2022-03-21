module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      darkBlue: '#040847',
      mainBlue: '#2484c6',
      lightBlue: '#3b9ee1',
      lightGray: '#ffffff80',
      gray: '#676b72',
      white: '#ffffff',
      yellow: '#f3ba2f',
      bgBlue: '#7db5c8',
      bgTable: '#31286c',
      trueBlue: '#0d0156',
      bgColor:'#eeeeee',
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
