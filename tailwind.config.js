/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "ocean-blue": "#0077be",
        "sea-green": "#2e8b57",
        sand: "#f4a460",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
