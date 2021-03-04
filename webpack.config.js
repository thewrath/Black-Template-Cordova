const path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: {
    code: './src/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'www'),
    filename: 'index.bundle.js',
  },
  module: {
    rules: [{
      test: path.resolve(__dirname, 'src/assets'),
      exclude: /\.json$/,
      loader: 'file-loader',
      options: { name: '[name]-[hash:8].[ext]', },
    }, {
      type: 'javascript/auto',
      test: /\.(json)/,
      exclude: /(node_modules|bower_components)/,
      use: [{
        loader: 'file-loader',
        options: { name: '[name]-[hash:8].[ext]' },
      }],
    }],
  },
};