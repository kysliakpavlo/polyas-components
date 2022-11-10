const defaultTheme = require("tailwindcss/defaultTheme")
const plugin = require("tailwindcss/plugin")

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["../**/*.astro"],
  // content: ["./index.php", "./app/**/*.php", "./resources/**/*.{php,vue,js}"] // for The Main Project
  theme: {
    extend: {
      colors: {
        dark: "#022249",
        primary: { DEFAULT: "#2bb1b8", light: "#E8F8F8" },
        accent: "#F86951",
        slate: {
          DEFAULT: "#78929D",
          light: "#E3E7E9",
          lighter: "#EFF3F4",
          lightest: "#FAFAFA",
        },
      },
      fontFamily: {
        headline: ["Inter var", ...defaultTheme.fontFamily.sans],
        sans: ["Inter var", "Inter", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        // Headlines
        "headline-1": [
          "1rem",
          {
            fontWeight: 700,
            letterSpacing: "0.02em",
            lineHeight: "1.62",
          },
        ],
        "headline-2": [
          "clamp(2.5rem, 1.955rem + 2.73vw, 4rem)",
          {
            fontWeight: 700,
            lineHeight: "1.08",
          },
        ],
        "headline-3": [
          "clamp(1.875rem, 1.511rem + 1.82vw, 2.875rem)",
          {
            fontWeight: 700,
            lineHeight: "1.08",
          },
        ],
        "headline-4": [
          "clamp(1.5rem, 1.364rem + 0.68vw, 1.875rem)",
          {
            fontWeight: 700,
            lineHeight: "1.2",
          },
        ],
        // List items
        list: [
          "1.5rem",
          {
            fontWeight: 400,
            lineHeight: "1.8",
          },
        ],
        // Body
        body: [
          "1.25rem",
          {
            lineHeight: "1.3",
          },
        ],
        // Intro
        intro: [
          "1.5rem",
          {
            lineHeight: "1.5",
          },
        ],
        // Footnotes
        footnote: [
          "1rem",
          {
            lineHeight: "1.375",
          },
        ],
      },
      typography: (theme) => ({
        inherit: {
          css: {
            color: "inherit",
            strong: {
              color: "inherit",
            },
            "h1,h2,h3": {
              color: "inherit",
            },
            a: {
              color: theme("colors.slate"),
              fontWeight: 700,
              "&:hover": {
                color: theme("colors.accent"),
              },
            },
          },
        },
      }),
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    plugin(({ addComponents, addUtilities, theme }) => {
      addComponents({
        ".button": {
          borderRadius: "999px",
          border: `3px solid ${theme("colors.accent")}`,
          minHeight: "clamp(3.125rem, 2.989rem + 0.68vw, 3.5rem)",
          paddingInline: "1.5em",
          fontSize: "clamp(1.25rem, 1.136rem + 0.57vw, 1.5rem)",
          fontWeight: "600",
          lineHeight: "1.08",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "0.2s ease-in-out",
          transitionProperty: "background-color, border-color, color",
        },
        ".button-primary": {
          backgroundColor: theme("colors.accent"),
          color: theme("colors.white"),

          "&:hover": {
            backgroundColor: "rgb(0 0 0 / 0)",
            color: theme("colors.accent"),
          },
        },
        ".button-secondary": {
          color: theme("colors.accent"),

          "&:hover": {
            color: theme("colors.white"),
            backgroundColor: theme("colors.accent"),
          },
        },
      })
      addUtilities({
        ".container": {
          width: "100%",
          paddingInline: "1.25em",
          marginInline: "auto",
          maxWidth: "80rem",
        },
      })
    }),
  ],
}
