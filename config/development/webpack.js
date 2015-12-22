'use strict';

var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    'webpack-hot-middleware/client',
    './src/browser'
  ],

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
        include: path.resolve(__dirname, '../../src'),
        query: {
          presets: [
            'es2015',
            'stage-1',
            'react'
          ],

          plugins: [
            'react-require',
            'transform-dev',
            'transform-node-env-inline',
            [
              'react-transform', {
                transforms: [{
                  transform: 'react-transform-hmr',
                  imports: ['react'],
                  locals: ['module']
                }, {
                  transform: 'react-transform-catch-errors',
                  imports: ['react', 'redbox-react']
                }]
              }
            ],
            [
              'css-in-js', {
                bundleFile: 'build/cssinjs.css'
              }
            ]
          ]
        }
      }
    ]
  },

  plugins: [
    new webpack.DefinePlugin({ 'process.env': { NODE_ENV: JSON.stringify(process.env.NODE_ENV) } }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],

  devtool: 'cheap-module-eval-source-map'
};
