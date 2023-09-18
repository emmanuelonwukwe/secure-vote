/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "aliceblue": {
          100: "#ecf9ff"
        },
        "softgreen": "#8CF3E9",
        "primary": "#060640"
      }
    },
  },
  plugins: [],
}

