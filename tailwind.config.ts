import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#fc4c5a',
        secondary: '#7fdbc9',
        accent: '#ffc83d',
        hover: '#0d6efd',
        white: '#ffffff',
        offwhite: '#f5f5f5',
        textdark: '#1a1a1a',
        textgray: '#666666',
      },
      spacing: {
        '8px': '8px',
        '16px': '16px',
        '24px': '24px',
        '32px': '32px',
        '48px': '48px',
        '64px': '64px',
        '80px': '80px',
        '120px': '120px',
      },
    },
  },
  plugins: [],
}
export default config
