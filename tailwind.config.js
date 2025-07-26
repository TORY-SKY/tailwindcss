/** @type {import('tailwindcss').Config} */

import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00a117",
        secondary: "#ff6600",
        brand: {
          DEFAULT: "#00a216",
           light: "#33cc5c",
          dark: "#007a12",
        },
      },
    },
  },
  plugins: [],
}

export default config
