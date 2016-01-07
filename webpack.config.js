/**
 * Webpack Configuration
 * http://webpack.github.io/docs/configuration.html
 */
var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');


var AUTOPREFIXER_BROWSERS = ['last 2 version'];

module.exports = {
  // Entry point(s) for the bundle
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/dev-server',
    './src/index.jsx'
  ],

  output: {
    path: '/',
    filename: 'app.js',
    pathinfo: true
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
        loader: 'style!' +
                'css!' +
                'autoprefixer?{browsers:' + JSON.stringify(AUTOPREFIXER_BROWSERS) + '}!' +
                'stylus'
      },
      {
        test: /\.(gif|png|jpg|svg|eot|woff2|ttf|woff)(\?|$)/,
        loader: 'file'
      }
    ]
  },

  // Path resolving, aliases
  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
      assets: path.resolve(__dirname, 'src/assets'),
      components: path.resolve(__dirname, 'src/components'),
      styles: path.resolve(__dirname, 'src/styles')
    }
  },

  // Dev server configuration
  devServer: {
    hot: true,
    inline: true,
    historyApiFallback: true,
    host: 'localhost',
    port: process.env.PORT || 3000,
    contentBase: './src'
  },

  // Plugins
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject: true,
      hash: true
    })
  ],

  // General configuration
  debug: true,
  devtool: 'eval-cheap-module-source-map'
};
