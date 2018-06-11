/* eslint-disable */

var path = require("path");
var webpack = require("webpack");
var root = path.resolve(__dirname, '..');

module.exports = {
  entry: path.resolve(root, './src/index.tsx'),
  module: {
    rules: [
      {
        test: /\.(t|j)sx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
    alias: {
      '@store': path.resolve(root, './src/redux-store'),
      '@ui': path.resolve(root, './src/ui'),
      'tests': path.resolve(root, './tests'),
      'example-app': path.resolve(root, './src'),
      'example-app/src': path.resolve(root, './src')
    }
  },
  output: {
    filename: 'test-bundle.js',
    path: path.resolve(root, 'dist')
  }
};
