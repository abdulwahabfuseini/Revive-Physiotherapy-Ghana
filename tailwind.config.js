/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        Text: "#333333",
        foot: "#00031f",
        main: "#103C65",
      }
    },
  },
  plugins: [require("@shrutibalasa/tailwind-grid-auto-fit")],
}
