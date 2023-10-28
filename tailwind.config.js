/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#01EDFF",
        secondary: "#39dd99",
        tertiary: "",
        text1: "#fff",
        text2: "#242a2b",
        dark1: "#1f242d",
        dark2: "#333b49",
      },
    },
  },
  plugins: [],
};
