/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: '#F4F1EA',
          light: '#FAF8F5',
          dark: '#EAE5DB',
        },
        dark: {
          DEFAULT: '#172323',
          soft: '#213333',
          muted: '#3D5253',
        },
        sage: {
          DEFAULT: '#A9C0C1',
          light: '#C8D8D9',
          dark: '#87A3A4',
        },
        card: {
          DEFAULT: '#D6E0DE',
          light: '#E2EBE9',
          dark: '#CAD7D5',
        },
        accent: {
          DEFAULT: '#718B8C',
          light: '#88A3A4',
          dark: '#587374',
        },
      },
      fontFamily: {
        serif: ['Newsreader', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        widest: '.2em',
        tightest: '-.04em',
      },
    },
  },
  plugins: [],
}
