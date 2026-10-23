/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', '"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        brand: {
          forest: '#26352B',
          sage: '#71866F',
          cream: '#F8F7F2',
          ink: '#1E2922',
        },
      },
    },
  },
  plugins: [],
}
