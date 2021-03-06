/**
 * Webpack Configuration
 * http://webpack.github.io/docs/configuration.html
 */
var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var AUTOPREFIXER_BROWSERS = ['last 2 version'];

module.exports = {
  // Entry point(s) for the bundle
  entry: ['./src/index.jsx'],

  // Output
  output: {
    path: path.resolve(__dirname, 'dist/assets'),
    publicPath: '/assets/',
    filename: 'main.js'
  },

  // Loaders
  module: {
    preLoaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'eslint'
      }
    ],
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'react-hot!babel'
      },
      {
        test: /\.(css|styl)$/,
        loader: ExtractTextPlugin.extract('style',
                'css!' +
                'autoprefixer?{browsers:' + JSON.stringify(AUTOPREFIXER_BROWSERS) + '}!' +
                'stylus')
      },
      {
        test: /\.(gif|png|jpg|svg|eot|woff2|ttf|woff)(\?|$)/,
        loader: 'file'
      }
    ]
  },

  // Plugins
  plugins: [
    new ExtractTextPlugin('main.css'),
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false }
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      filename: '../index.html',
      inject: true,
      hash: true
    })
  ],

  // Path resolving, aliases
  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
      assets: path.resolve(__dirname, 'src/assets'),
      components: path.resolve(__dirname, 'src/components'),
      styles: path.resolve(__dirname, 'src/styles')
    }
  },
  devtool: 'source-map'
};
