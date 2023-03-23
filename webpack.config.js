const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); 
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    app: './src/entries/app.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[chunkhash].js',
    publicPath: '/wp-content/themes/wp-boilerplate/dist/',
    // Clean the dist folder before building
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      // This is the template that will be used to generate the index.html file
      template: './src/index.html',
      /**
       * The output filename
       * This is only being used to store the scripts and stylesheets tags
       * Its used to get the correct hash value and used in conjuction with
       * wpboiler_scripts_loader() and wpboiler_styles_loader() functions
       * in functions.php
      */
      filename: 'index.html',
      inject: true,
    }),
    new MiniCssExtractPlugin({
      /**
       * In a similar way to the scripts, the stylesheets are being stored
       * in the dist folder and the index.html file is being used to get
       * the correct hash value and used in conjuction with
       * wpboiler_scripts_loader() and wpboiler_styles_loader() functions
       * in functions.php
      */
      filename: '[name].[chunkhash].css',
      chunkFilename: '[id].[chunkhash].css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
}