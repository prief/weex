const path = require("path");
module.exports = {
  mode: "none",
  entry: {
    index: "./src/index.js"
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].js"
  }
};
