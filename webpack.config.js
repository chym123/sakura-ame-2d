const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackBar = require('webpackbar');
const chalk = require('chalk');

module.exports = {
  entry: {
    path: './index.js',
  },
  output: {
    publicPath: '',
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  mode: 'development',
  devtool: '#eval-source-map',
  devServer: {
    port: 2233,
    hot: true,
    stats: 'errors-only',
    clientLogLevel: 'error'
  },
  stats: 'none',
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      publicPath: './',
      template: path.join(__dirname, './index.html'),
    }),
    new WebpackBar({
      reporter: {
        allDone: () => {
          console.log(chalk.magenta('   http://127.0.0.1:2233\n'));
        },
      }
    }),
  ]
};