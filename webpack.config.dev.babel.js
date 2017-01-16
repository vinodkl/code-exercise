import path from 'path';
import webpack from 'webpack';

export default {
  debug: true,
  devtool: 'cheap-module-eval-source-map', // generating .map file so it's possible to see the code in production
  noInfo: false,
  entry: [
    'eventsource-polyfill', // necessary for hot reloading with IE
    './client/index'
  ],
  target: 'web',
  output: {
    path: path.join(__dirname, '/.dist'), // Note: Physical files are only output by the production build task `npm run build`.
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './client',
    port: 9000,
    hot: true,
    inline: true,
    stats: {
      colors: true
    },
    historyApiFallback: true,
    proxy: { // proxy all api requests to local server
      '/api/*': 'http://localhost:3000'
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
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
