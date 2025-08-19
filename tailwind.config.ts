import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class', // <-- add this
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        bg: "var(--color-bg)",
        text: "var(--color-text)",
      },
    },
  },
  plugins: [require('daisyui')],
}
export default config
