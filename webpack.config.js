const { join, resolve } = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const DashboardPlugin = require('webpack-dashboard/plugin');

const sourcePath = join(__dirname, './src');
const buildPath = join(__dirname, './dist');

const production = ['staging', 'prod', 'production'].includes(process.env.NODE_ENV);

const extractStyles = new ExtractTextPlugin({
  filename: 'styles-[hash].min.css',
  allChunks: true,
  disable: !production,
});

module.exports = {
  entry: {
    main: (production ?
      [] :
      [
        'webpack/hot/only-dev-server',
        'webpack-dev-server/client?http://0.0.0.0:3000',
      ])
      .concat([
        'font-awesome-sass-loader!./font-awesome.config.js',
        sourcePath,
      ]),
  },
  output: {
    filename: `bundle_[hash]${production && '.min'}.js`,
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
              outputStyle: production ? 'compressed' : 'expanded',
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
  devServer: production ? undefined : {
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
  cache: !production,
  devtool: production ? 'hidden-source-map' : 'eval-source-map',
  plugins: (production
    ? [
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          screw_ie8: true,
          warnings: false,
          drop_console: true,
        },
        output: { comments: false },
        sourceMap: false,
      }),
    ]
    : [
      new DashboardPlugin(),
      new webpack.HotModuleReplacementPlugin(),
    ])
    .concat(
      [
        new webpack.LoaderOptionsPlugin({
          options: {
            eslint: {
              failOnError: true,
            },
            context: '/',
            debug: !production,
          },
        }),
        new webpack.optimize.CommonsChunkPlugin({
          name: 'chunks',
          filename: `chunks-[hash]${production ? '.min' : ''}.js`,
        }),
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
      ]
    ),
};
