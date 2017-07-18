const { join, resolve } = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const DashboardPlugin = require('webpack-dashboard/plugin');

const sourcePath = join(__dirname, './src');
const buildPath = join(__dirname, './dist');

const extractStyles = new ExtractTextPlugin({
  filename: 'styles-[hash].min.css',
  allChunks: true,
  disable: true,
});

module.exports = {
  entry: {
    main: [
      'webpack/hot/only-dev-server',
      'webpack-dev-server/client?http://0.0.0.0:3000',
      'font-awesome-sass-loader!./font-awesome.config.js',
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
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
        ],
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loader: extractStyles.extract({
          use: [{
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          }, {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              plugins: () => [
                autoprefixer,
              ],
            },
          }, {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              outputStyle: 'expanded',
            },
          }],
          fallback: 'style-loader',
        }),
      },
      {
        test: /\.json$/,
        exclude: /node_modules/,
        loader: 'json-loader',
      },
      {
        test: /\.(woff2?|ttf|eot|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              mimetype: 'application/font-woff',
            },
          },
        ],
      },
    ],
  },
  resolve: {
    modules: [
      resolve(__dirname),
      'node_modules',
    ],
    alias: {
      globals: resolve(process.cwd(), 'src', 'styles', '_globals.scss'),
    },
    extensions: ['.js'],
    mainFiles: ['index'],
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
  devtool: 'cheap-eval-source-map',
  plugins: [
    new DashboardPlugin(),
    new webpack.LoaderOptionsPlugin({
      options: {
        eslint: {
          failOnError: true,
        },
        context: '/',
        debug: true,
      },
    }),
    new webpack.HotModuleReplacementPlugin(),
    extractStyles,
    new HtmlWebpackPlugin({
      title: 'Posts & Comments',
      inject: false,
      template: resolve(process.cwd(), 'src', 'htmlTemplate.js'),
      appMountId: 'app',
      favicon: resolve(process.cwd(), 'src', 'favicon.ico'),
      externalCSS: [
        'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700%7CMaterial+Icons',
      ],
      externalJS: [
        // any umd builds
      ],
    }),
  ],
};
