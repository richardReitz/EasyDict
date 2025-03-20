const { default: colors } = require("./constants/Colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}",],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        "space-mono": ["SpaceMono"],
        "libre-baskerville-regular": ["LibreBaskerville-Regular"],
        "libre-baskerville-bold": ["LibreBaskerville-Bold"],
      },
      colors: {
        light: {
          primary: colors.light.primary,
          secondary: colors.light.secondary,
          background: colors.light.background,
          shapes: colors.light.shapes,
          text: colors.light.text,
        },
        dark: {
          primary: colors.dark.primary,
          secondary: colors.dark.secondary,
          background: colors.dark.background,
          shapes: colors.dark.shapes,
          text: colors.dark.text,
        },
      },
    },
  },
  plugins: [],
}