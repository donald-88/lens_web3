module.exports = {
  mode: 'jit',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sfui': ['SFUIText']
      },
      colors: {
        'primary': '#E0F0F3',
        'secondary': '#A5A5A5',
        'accent': '#EDAD49'
      }
    },
  },
  plugins: [],
}
