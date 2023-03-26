const path = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const WriteFilePlugin = require('write-file-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader', 
          'sass-loader'
        ],
      },
    ],
  },
  plugins: [
    /**
     * Cleans the dist folder before each build
    */
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new WriteFilePlugin({
      test: /^(?!.*(hot)).*/,
    }),
  ],
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
    /**
     * @see https://webpack.js.org/configuration/dev-server/#devserverallowedhosts
     * Adds an extra layer of security to devServer by only allowing connections from specified hosts.
     * This option is ignored if the host option is set to a non-localhost value.
     *
     */
    allowedHosts: [
      'localhost',
    ],
    // Compress devServer files output
    compress: false,
    // Open devServer in browser each time it starts
    open: false,
    // Set Access-Control-Allow-Origin header to '*' for allowing cross-origin access during development
    // Useful for avoiding CORS issues; do not use this configuration in production
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    liveReload: false,
    hot: true,
    /**
     * When the dev server is started, it will open on this port.
    */
    port: 8080,
    /**
     * The proxy option is used to redirect specific requests from the Webpack dev server
     * to another server (in this case, a WordPress server running on http://localhost:8888).
     * This is useful when you have a separate back-end server and want to handle API requests
     * or serve specific files from that server while still using the Webpack dev server
     * for the rest of your application.
     */
    proxy: {
      '/': {
        target: 'http://localhost:8888',
        changeOrigin: true,
      },
    },
    /**
     * This is saving the files to disk to allow for HMR
     * The files are saved to the dist folder
     * DO NOT USE IN PRODUCTION 
     */
    devMiddleware: {
      writeToDisk: true,
    },
  },
});
