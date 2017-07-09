const { join } = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const sourcePath = join(__dirname, './src');
const buildPath = join(__dirname, './dist');

module.exports = {
  entry: sourcePath,
  output: {
    filename: 'bundle_[hash].js',
    path: buildPath,
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
        ],
      }
    ]
  },
  devServer: {
    contentBase: sourcePath,
    historyApiFallback: true,
    port: 3000,
    compress: false,
    inline: true,
    hot: true,
    host: '0.0.0.0',
    disableHostCheck: true,
    stats: {
      assets: true,
      children: false,
      chunks: false,
      hash: false,
      modules: false,
      publicPath: false,
      timings: true,
      version: false,
      warnings: true,
      colors: {
        green: '\u001b[32m',
      },
    },
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: join(sourcePath, 'index.html'),
      path: buildPath,
      filename: 'index.html',
    }),
  ]
};
