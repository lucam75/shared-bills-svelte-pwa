module.exports = {
  purge: ["./src/**/*.svelte"],
  important: true,
  theme: {
    fontFamily: {
      display: ['Gilroy', 'sans-serif'],
      body: ['Graphik', 'sans-serif'],
    },
    extend: {
      colors: {
        backgroundColor: "#f6f5f5",
        primaryColor: "#5bd1d7",
        secondaryColor: "#248ea9",
        accentColor: "#556fb5"
      },
      margin: {
        '96': '24rem',
        '128': '32rem',
      },
    }
  },
  variants: {
    opacity: ['responsive', 'hover']
  }
}