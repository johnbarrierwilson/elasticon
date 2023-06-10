/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      white: "#ffffff",
      black: "#000000",
      blue: {
        100: "#ffffff", // White
        200: "#E8F6FE", // Lighter Blue
        300: "#8CD7FF", // Ice
        400: "#36B9FF", // Sky Blue
        500: "#1BA9F5", // Light Blue
        600: "#0077CC", // Elastic Blue
        700: "#005A9E", // Dark Blue
        800: "#20377D", // Midnight
        900: "#101C3F", // Developer Blue
      },
      orange: "#FF957D",
      peach: "#FF957D",
      pink: "#DD0A73",
      teal: "#7DE2D1",
      yellow: "#FEC514",
    },
    container: {
      center: true,
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ["var(--font-space-grotesk)"],
      },
    },
  },
  plugins: [],
};
