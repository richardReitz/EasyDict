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
            primary: colors.theme.primary,
            secondary: colors.theme.secondary,
            background: colors.theme.background,
            shapes: colors.theme.shapes,
            text: colors.theme.text,
            'text-light': colors.theme.textLight,
            'text-secondary': colors.theme.textLight,
            error: colors.theme.error
        },
    },
    },
    plugins: [],
}