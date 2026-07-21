/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0B2545',
          light: '#12345E',
          dark: '#071830',
        },
        gold: {
          DEFAULT: '#F0A500',
          light: '#FFC94A',
          dark: '#C77F00',
        },
        maroon: {
          DEFAULT: '#A62639',
          dark: '#7A1B2A',
        },
        cream: '#FBF8F2',
        ink: '#1E2A38',
        muted: '#5B6B7C',
      },
      fontFamily: {
        display: ['"Fraunces"', 'serif'],
        body: ['"Manrope"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'ribbon': "linear-gradient(135deg, #F0A500 0%, #C77F00 100%)",
      },
    },
  },
  plugins: [],
}
