const { fontFamily } = require("tailwindcss/defaultTheme")

module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "3xl": "2200px",
      },
      colors: {
        "primary-dark": "var(--color-primary-dark)",
        "primary-light": "var(--color-primary-light)",
        "secondary-dark": "var(--color-secondary-dark)",
        "secondary-light": "var(--color-secondary-light)",
        "accent-dark": "var(--color-accent-dark)",
        "accent-light": "var(--color-accent-light)",
      },
      borderRadius: {
        layout: "var(--borderRadius-global)",
      },
      fontFamily: {
        sans: ["var(--font-default)", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
}
