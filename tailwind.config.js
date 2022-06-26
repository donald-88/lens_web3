module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      content:{
        'link' : 'url("/public/favicon.ico")'
      }
    },
  },
  plugins: [],
}
