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
        "base-id-poke": "#97A0CC",
        "base-stat-color": "#05091B",
        "bg-bar-hp": "#3D4466",
        "first-green": "#6CF0A1",
        "last-green": "#2AE3B7",
        "input-bg": "#FAFAFA",
        "view-toggle": "#0C1231",
        "grass-element": "#11B047",
        "id-single-view": "#263156",
      },
    },
  },
  plugins: [],
};
