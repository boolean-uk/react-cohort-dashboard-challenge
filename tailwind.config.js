/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        "cohort-backdrop": "#222222",
        "cohort-background": "#F0F5FA",
        "cohort-bg-highlight": "#FFFFFF",
        "cohort-blue": "#000046",
        "cohort-green": "#64DC78",
        "cohort-shade": "#E6EBF5",
        "cohort-title": "#64648C",
        "cohort-title-dark": "#C8D2E6",
      },
    },
  },
  plugins: [],
};
