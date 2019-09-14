const path = require("path");
module.exports = {
  mode: "none",
  entry: {
    index: "./src/index.js",
    index2: "./src/index2.js"
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].js"
  },
  module: {
    rules: [{ test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }]
  }
};
