const path = require('path');
const config = require('./package.json');

const webpack = require('webpack');
require('dotenv').config();

const PROD = process.env.NODE_ENV === 'production';

let plugins = [];

PROD ? [
    plugins.push(new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false }
    }))
  ] : '';

  module.exports = {
    // change to .tsx if necessary
    entry: './src/solarCalc.ts',
    output: {
      filename: './dist/solarCalc.js'
    },
    resolve: {
      // changed from extensions: [".js", ".jsx"]
      extensions: [".ts", ".tsx", ".js", ".jsx"]
    },
    module: {
      rules: [
        // changed from { test: /\.jsx?$/, use: { loader: 'babel-loader' }, exclude: /node_modules/ },
        { test: /\.(t|j)sx?$/, use: { loader: 'ts-loader' }, exclude: /node_modules/ },
  
        // addition - add source-map support
        { enforce: "pre", test: /\.js$/, exclude: /node_modules/, loader: "source-map-loader" }
      ]
    },
    externals: {
      "react": "React",
      "react-dom": "ReactDOM",
    },
    // addition - add source-map support
    devtool: "source-map"
  }