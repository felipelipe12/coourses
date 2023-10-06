import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      light: {
        background: '#FFFFFF',
        text: '#333333',
      },
      dark: {
        background: '#333333',
        text: '#FFFFFF',
      }
    },
  },
  plugins: [],
}
export default config
