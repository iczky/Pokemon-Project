/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      //prettier-ignore
      "lato": ["Lato", "sans-serif"],
    },
    extend: {
      colors: {
        "base-color": "#212E4C",
        "base-card": "#F0F3FF",
      },
    },
  },
  plugins: [],
};
