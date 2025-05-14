const { merge } = require('webpack-merge');
const path = require('path');
const baseConfig = require('./webpack.base.config');
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = merge(baseConfig, {
  mode: 'development',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].js',
    publicPath: '/',
    // },
    // output: {
    library: 'app1',
    libraryTarget: 'umd',
    chunkLoadingGlobal: 'webpackJsonp_app1',
    globalObject: 'window',
  },
  devServer: {
    historyApiFallback: true,
    open: true,
    // hot: true,
    port: '9821',
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              esModule: false,
            },
          },
          'postcss-loader',
        ],
      },
      {
        test: /.less$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              esModule: false,
            },
          },
          'postcss-loader',
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                javascriptEnabled: true,
              },
            },
          },
        ],
      },
    ],
  },
});
