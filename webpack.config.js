const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const entryPoints = {
  app: "/js/app.js",
  style: "/sass/main.scss",
  editorStyle: "/sass/editor-styles.scss",
};

module.exports = {
  entry: entryPoints,
  devtool: "inline-source-map",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
    clean: true,
  },
  mode: "development",
  devtool: "inline-source-map",
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.s?[c]ss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
};
