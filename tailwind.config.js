/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // This is the important part
    './src/**/*.{html,js,ts,jsx,tsx,vue}',
    'node_modules/preline/dist/*.js',
  ], 
  // darkMode for 'class'
  darkMode: "class",
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
    },
  },
  plugins: [
    // require('@tailwindcss/forms'),
    require('preline/plugin'),
  ],
}