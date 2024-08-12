/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    container: {
      center: true,

      screens: {
        sm: "100%",
        md: "100%",
        xl: "1340px"
      },
    },
    screens: {
      sm: "600px",
      md: "728px",
      lg: "1116px",
      xl: "1340px"
    },
    extend: {
      colors: {
        primary: "#6366f1",
        search: "#e8e8e8",
        darkBg: "#22303c",
        lightBg: "#fdfdff"
      },
      fontFamily: {
        "SanFrancisco": ["San Francisco", "sans-serif"],
        "Noto Sans": ["Noto Sans", "sans-serif"]
      },
    },
  },
  plugins: [],
}