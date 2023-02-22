/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#070724",
        primaryLight: "#38384F",
        primaryVeryLight: "#838391",
        lightBlue: "#419EBB",
        lightYellow: "#EDA249",
        purple: "#6F2ED6",
        orange: "#D14C32",
        lightRed: "#D83A34",
        darkOrange: "#CD5120",
        cyan: "#1EC2A4",
        darkBlue: "#2D68F0",
      },
      fontFamily: {
        antonio: ["'Antonio', sans-serif"],
        spartan: ["'League Spartan', sans-serif"]
      },
    },
  },
  plugins: [],
}