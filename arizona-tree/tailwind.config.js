/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        orange: "#EC8F5E",
        lightOrange: "#F3B664",
        lightGreen: "#F1EB90",
        green: "#9FBB73",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
