/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["src/pages/**/*.{js,ts,jsx,tsx}", "src/components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "logo-red": "#C7000B",
        "light-red": "#FF1414",
        "aswad-black": "#181A1D",
        "chaos-black": "#101010",
        "mobile-nav": "var(--mobile-nav)",
        "light-gray": "#C8C5C5",
      },
      height: (theme) => ({
        auto: "auto",
        ...theme("spacing"),
        full: "100%",
        screen: "calc(var(--vh) * 100)",
      }),
      minHeight: (theme) => ({
        0: "0",
        ...theme("spacing"),
        full: "100%",
        screen: "calc(var(--vh) * 100)",
      }),
    },
    screens: {
      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }
      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }
      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }
      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
    },
  },
  plugins: [],
  future: {
    hoverOnlyWhenSupported: true,
  },
};
