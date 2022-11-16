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
        "matt-black": "#151515",
        "mobile-nav": "var(--mobile-nav)",
        "light-gray": "#C8C5C5",
        "cerebral-gray": "#CCC",
        tin: "#909090",
        "shadow-mountain": "#585858",
        "light-green": "#00FF38",
        "bright-light-green": "#2AFD58",
        button: "rgba(67,66,66,0.7)",
        "button-hover": "rgba(113,111,111,0.7)",
        "naga-morich": "#C7000B",
      },
      height: {
        screen: "calc(var(--vh) * 100)",
        nav: "var(--nav-height)",
        "screen-minus-nav": "calc(100 * var(--vh) - var(--nav-height))",
        "screen-minus-nav-footer":
          "calc(100 * var(--vh) - var(--nav-height) - var(--footer-height))",
      },
      minHeight: { screen: "calc(var(--vh) * 100)" },
      maxHeight: {
        screen: "calc(var(--vh) * 100)",
        "screen-minus-nav": "calc(100 * var(--vh) - var(--nav-height))",
      },
      spacing: {
        18: "4.5rem",
        4.5: "1.125rem",
      },
      fontFamily: {
        sans: ["Noto Sans TC", ...defaultTheme.fontFamily.sans],
      },
      opacity: {
        15: 0.15,
      },
      spacing: {
        68: "17rem",
        100: "25rem",
      },
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
