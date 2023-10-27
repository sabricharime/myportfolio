import { nextui } from '@nextui-org/react'
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
    fontFamily: {
      arabic: ['Noto Kufi Arabic', 'sans-serif'],
      english: ['Manrope', 'sans-serif'],
    },
  },
  darkMode: 'class',

  plugins: [
    nextui({
      prefix: 'nextui', // prefix for themes variables
      addCommonColors: false, // override common colors (e.g. "blue", "green", "pink").
      defaultTheme: 'dark', // default theme from the themes object
      defaultExtendTheme: 'dark',

      themes: {
        light: {
          layout: {},
          colors: {
            primary: {
              100: '#072713',
              200: '#0e4f26',
              300: '#147638',
              400: '#1b9e4b',
              500: '#22c55e',
              600: '#4ed17e',
              700: '#7adc9e',
              800: '#a7e8bf',
              900: '#d3f3df',
            },

            foreground: {
              100: '#0c0c0d',
              200: '#17171a',
              300: '#232328',
              400: '#2e2e35',
              500: '#3a3a42',
              600: '#616168',
              700: '#89898e',
              800: '#b0b0b3',
              900: '#d8d8d9',
            },
            background: {
          100: "#ffffff",
          200: "#fefeff",
          300: "#fefefe",
          400: "#fdfdfe",
          500: "#fdfdfe",
          600: "#cacacb",
          700: "#989898",
          800: "#656566",
          900: "#333333"
},
          },
        },
        dark: {
          layout: {},
          colors: {
            primary: {
              100: '#d3f3df',
              200: '#a7e8bf',
              300: '#7adc9e',
              400: '#4ed17e',
              500: '#22c55e',
              600: '#1b9e4b',
              700: '#147638',
              800: '#0e4f26',
              900: '#072713',
            },

            foreground: {
              100: '#f6f6f9',
              200: '#ededf2',
              300: '#e4e4ec',
              400: '#dbdbe5',
              500: '#d2d2df',
              600: '#a8a8b2',
              700: '#7e7e86',
              800: '#545459',
              900: '#2a2a2d',
            },
            background: {
              100: '#0c0c0d',
              200: '#17171a',
              300: '#232328',
              400: '#2e2e35',
              500: '#3a3a42',
              600: '#616168',
              700: '#89898e',
              800: '#b0b0b3',
              900: '#d8d8d9',
            },
          },
        },
      },
    }),
  ],
}
