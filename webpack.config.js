const { join, resolve } = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const DashboardPlugin = require('webpack-dashboard/plugin');

const sourcePath = join(__dirname, './src');
const buildPath = join(__dirname, './dist');

module.exports = {
  entry: {
    main: [
      'webpack/hot/only-dev-server',
      'webpack-dev-server/client?http://0.0.0.0:3000',
      sourcePath,
    ],
  },
  output: {
    filename: 'bundle_[hash].js',
    path: buildPath,
    publicPath: '/',
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          failOnError: true,
        },
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
        ],
      },
    ],
  },
  resolve: {
    modules: [
      resolve(__dirname),
      'node_modules',
    ],
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
    new DashboardPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: join(sourcePath, 'index.html'),
      path: buildPath,
      filename: 'index.html',
    }),
  ],
};
