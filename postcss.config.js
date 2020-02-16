module.exports = {
  parser: "postcss-scss",
  plugins: [
    require("postcss-inline-base64")({ baseDir: "./src/assets/fonts/noah" })
  ]
};
