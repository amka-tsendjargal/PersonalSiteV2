/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        canvas: 'var(--canvas)',
        ink: 'var(--ink)',
        muted: 'var(--muted)',
        hairline: 'var(--hairline)',
        tint: 'var(--tint)',
        panel: 'var(--panel)',
        accent: 'var(--accent)',
      },
    },
  },
  plugins: [],
}