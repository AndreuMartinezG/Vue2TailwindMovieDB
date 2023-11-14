/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'media',
  content: [
    './public/**/*.html', 
    './src/**/*.{vue,js,ts,jsx,tsx}',
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('flowbite/plugin'),
  ],
  variants: {
    extend: {
      backgroundColor: ['hover', 'focus', 'responsive'],
      textColor: ['hover', 'focus', 'responsive'],
      transform: ['hover', 'focus', 'responsive'],
      // Agrega otras propiedades que deseas afectar con hover aquí
    },
  },
}

