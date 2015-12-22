'use strict';

var path = require('path');
var webpack = require('webpack');

module.exports = {
  cache: true,
  entry: './src/browser',

  output: {
    path: path.resolve(__dirname, '../../build'),
    filename: 'bundle.js',
    publicPath: '/'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      }
    ]
  },

  plugins: [
    new webpack.DefinePlugin({ 'process.env': { NODE_ENV: JSON.stringify(process.env.NODE_ENV) } }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false }, comments: /<strip-all>/ })
  ]
};
