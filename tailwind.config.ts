import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class', // <-- add this
  theme: {
    extend: {
      colors: {
        bg: "var(--color-bg)",
        text: "var(--color-text)",
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        success: "var(--color-success)",
        danger: "var(--color-danger)",
        warning: "var(--color-warning)",
        info: "var(--color-info)",
      },
    },
  }, // <-- close theme here
  plugins: [require('daisyui')], // <-- plugins is outside theme
}

export default config
