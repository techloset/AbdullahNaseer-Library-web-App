/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customTextColour:"#183B56",
        linkColour:"#1565D8"

      },
    },
  },
  plugins: [],
};
