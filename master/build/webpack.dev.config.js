const { merge } = require('webpack-merge');
const path = require('path');
const baseConfig = require('./webpack.base.config');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = merge(baseConfig, {
  mode: 'development',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].js',
    publicPath: '/',
  },
  devServer: {
    historyApiFallback: true,
    open: true,
    // hot: true,
    port: '9820',
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
  plugins: [new BundleAnalyzerPlugin()],
});
