/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        "cohort-backdrop": "#222222",
        "cohort-blue": "#000046",
        "cohort-background": "#F0F5FA",
        "cohort-bg-highlight": "#FFFFFF",
        "cohort-title": "#64648C",
        "cohort-shade": "#E6EBF5"
      },
    },
  },
  plugins: [],
};
