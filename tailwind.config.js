/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'yellow_figma': '#FDC500',
      'white_figma': '#FFF',
      'black_figma': '#2A3744',
      'backgr_footer': '#F1F5F9',
      'backgr_reg': '#FFF',
    },
    plugins: [
        // require('@tailwindcss/forms'),
    ],
  }
}

