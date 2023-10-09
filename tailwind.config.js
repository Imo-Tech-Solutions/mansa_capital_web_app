/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'footer_bg': '#000080',
        'resources_banner_bg': '#5151DC',
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        noto: ['Noto Serif TC', 'serif'],
        sans: ['Arial']
      },
      height: {
        'carousel': '45rem',
        'expertise-card': '34rem',
        'card-height': '100rem',
        'resources-banner': '38rem',
      },
      width: {
        'img-width': '30rem',
        'card-width': '100rem',
        'blog-card-width': '30rem',
        'tablet': '1200px',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    ["@babel/plugin-transform-react-jsx", { "throwIfNamespace": false }]
  ],
}
