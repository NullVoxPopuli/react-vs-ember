/* eslint-disable */

var path = require("path");
var webpack = require("webpack");

function locate(path) {
  return process.cwd() + '/' + path;
}

module.exports = {
  mode: 'development',
  context: process.cwd(),
  entry: locate('tests/index.ts'),
  module: {
    rules: [
      {
        test: /\.(t|j)sx?$/,
        use: 'ts-loader',
        exclude: [/node_modules/, /dist/, /\.cache/]
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
    alias: {
      // this is only the 3rd or 4th places these are all defined...
      '@store': locate('src/redux-store'),
      '@ui': locate('src/ui'),
      'tests': locate('tests'),
      'example-app': locate('src'),
      'example-app/src': locate('src'),
    }
  },
  output: {
    filename: 'test-bundle.js',
    path: process.cwd() + '/dist',
  }
};
