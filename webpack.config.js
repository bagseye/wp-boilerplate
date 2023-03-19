const path = require('path');

// Webpack Configuration
// https://webpack.js.org/configuration/
// I/O path settings
const rootOutputPath = path.resolve(__dirname, 'dist');
const outputPaths = {
  js: 'js',
  css: 'css',
  images: 'images',
  fonts: 'fonts',
};

module.exports = {
  entry: {
    app: './src/entries/app.entry.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: `${outputPaths.js}[name].bundle.js`,
    chunkFilename: `${outputPaths.js}[name].bundle.js`,
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Translates CSS into CommonJS
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  [
                    'postcss-preset-env',
                    {
                      // Options
                    },
                  ],
                ],
              },
            },
          }
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
    ],
  },
};
