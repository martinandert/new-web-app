'use strict';

var webpack = require('webpack');

function plugins() {
  var all = [
    new webpack.DefinePlugin({ 'process.env': { NODE_ENV: JSON.stringify(process.env.NODE_ENV) } })
  ];

  var production = [
    new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false }, comments: /<strip-all>/ }),
    new webpack.optimize.DedupePlugin()
  ];

  return process.env.NODE_ENV === 'production' ? all.concat(production) : all;
}

module.exports = {
  cache: true,
  entry: './src/browser.js',

  output: {
    path:       'build/',
    filename:   'bundle.js',
    publicPath: '/'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  },

  plugins: plugins()
};
