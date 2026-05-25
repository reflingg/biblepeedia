/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      colors: {
        'primary-blue':   '#0052cc',
        'dark-blue':      '#003d99',
        'navy':           '#00204d',
        'light-blue':     '#e6f0ff',
        'primary-gold':   '#ffc107',
        'gold-dark':      '#e6a800',
        'gold-light':     '#fff8e1',
        'text-muted':     '#5a6473',
        'text-secondary': '#4a5568',
        'surface':        '#eaeff8',
        'border-col':     '#dde3ec',
      },
      maxWidth: {
        container: '1200px',
      },
      boxShadow: {
        'bp-sm': '0 4px 12px rgba(0,82,204,0.08)',
        'bp-md': '0 8px 24px rgba(0,82,204,0.12)',
        'bp-lg': '0 20px 60px rgba(0,82,204,0.12)',
      },
    },
  },
  plugins: [],
}
