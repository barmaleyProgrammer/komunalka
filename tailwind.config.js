/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
    './node_modules/react-tailwindcss-select/dist/index.esm.js'
  ],



  theme: {
    extend: {
      boxShadow: {
        'myCustom': '0 0 10px 0 rgba(166, 170, 181, 0.25)',
      }
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'yellow_figma': '#FDC500',
      'white_figma': '#FFF',
      'black_figma': '#2A3744',
      'backgr_footer': '#F1F5F9',
      'backgr_reg': '#FFF',
      'borderColor': '#E7E7E7',
      'error': '#DC2626'
    },
    plugins: [
      require('@tailwindcss/forms'),
      require('flowbite/plugin')
    ],
  }
}
