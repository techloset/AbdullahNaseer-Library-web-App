module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customTextColour: "#183B56",
        linkColour: "#1565D8"
      },
      fontFamily: {
        'sans': ['Hanken Grotesk', 'Helvetica', 'Arial', 'sans-serif'],
        'Open-Sans': ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
