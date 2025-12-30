/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: '#020617',
        accent: {
          DEFAULT: '#3B82F6',
          600: '#2563EB'
        },
        siteText: '#E5E7EB',
        siteBorder: '#1E293B'
      },
      boxShadow: {
        card: '0 12px 40px rgba(2,6,23,0.18)'
      }
    },
  },
  plugins: [],
};
