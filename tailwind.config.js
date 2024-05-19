/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        freeman: ["Freeman", "sans-serif"],
      },
      color: {
        main: "#FFC156",
        navbarColor: "bg-gradient-to-r from-rose-400 to-indigo-600",
        footerColor: "bg-gradient-to-r from-indigo-600 to-rose-400",
      },
      boxShadow: {
        login:
          "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      },
    },
  },
  plugins: [],
};
