const path = require('path');
const webpack = require('webpack');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  entry: {
    app: path.resolve(__dirname, '../src/index.js'),
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader',
      },
      {
        test: /\.js$/,
        use: 'babel-loader',
        // exclude: /node_modules/,
      },
      {
        test: /\.(png|svg|jpe?g|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1024 * 5,
              name: path.posix.join('static', 'img/[name].[hash:7].[ext]'),
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 51200,
              name: path.posix.join('static', 'fonts/[name].[ext]'),
            },
          },
        ],
      },
      {
        test: /\.(mp4|mp3)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 51200,
              name: path.posix.join('static', 'media/[name].[ext]'),
            },
          },
        ],
      },
    ],
  },
  plugins: [new VueLoaderPlugin(), new webpack.HotModuleReplacementPlugin()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../src'),
    },
    extensions: ['.js', '.json'],
  },
};
