import path from 'path';
import webpack from 'webpack';

const CopyWebpackPlugin = require('copy-webpack-plugin');

const GLOBALS = {
  'process.env.NODE_ENV': JSON.stringify('production')
};

export default {
  debug: true,
  devtool: 'source-map',
  noInfo: false,
  entry: './client/index',
  target: 'web',
  output: {
    path: path.join(__dirname, '/.dist'), // Note: Physical files are only output by the production build task `npm run build`.
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './.dist'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(), // optimize the order the files are bundled
    new webpack.DefinePlugin(GLOBALS), // define variables for use in react
    new webpack.optimize.DedupePlugin(), // eliminates duplicate packages
    new webpack.optimize.UglifyJsPlugin(), // minifies javascript
    new CopyWebpackPlugin([
      { from: './client/index.html', to: './index.html' }, // copying entry html to dist folder
      { from: './client/img', to: './img' }
    ])
  ],
  module: {
    loaders: [
      { test: /\.js$/, include: path.join(__dirname, 'client'), loaders: ['babel'] },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file' },
      { test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000' },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream' },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml' }
    ]
  }
};
