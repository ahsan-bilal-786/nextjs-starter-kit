/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
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
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
  ]
}
