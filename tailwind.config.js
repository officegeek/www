module.exports = {
  content: ["./layouts/**/*.html", "./content/**/*.md"],
  // safelist: ["bg-blue-50"],
  darkMode: "class",
  media: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        // purple: {
        //   350: "#a8a0b6",
        //   920: "#4F3677",
        //   970: "#321d53",
        //   980: "#22133c",
        //   990: "#110720",
        // },
      },
      fontFamily: {
        sans: "'Euclid Circular B',-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif",
        serif: ["PT Serif", "serif"],
      },
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
  ],
};
