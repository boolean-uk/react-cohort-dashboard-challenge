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
      },
    },
  },
  plugins: [],
};
