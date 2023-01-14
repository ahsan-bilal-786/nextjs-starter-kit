/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
      },
      fontFamily: {
      },
      colors: {
      },
      backgroundImage: {
      },
      dropShadow: {
      },
      boxShadow: {
      },
      fontSize: {
      },
      height: {
      },
      lineHeight: {
      },
      padding: {
      },
      margin: {
      },
      minHeight: {
      },
      width: {
      },
      maxWidth: {},
      gap: {},
      width: {},
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
  ]
}
