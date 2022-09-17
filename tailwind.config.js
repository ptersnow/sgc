module.exports = {
  content: [
    './resources/**/*.antlers.html',
    './resources/**/*.blade.php',
    './resources/**/*.vue',
    './content/**/*.md'
  ],
  theme: {
    extend: {
        colors: {
            primary: {
                400: "#53F9E7",
                500: "#2bd1bf"
            }
        }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
