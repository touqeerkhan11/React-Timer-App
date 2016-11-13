var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: [
    // 'webpack-dev-server/client?http://localhost:3000/',
    // 'webpack/hot/only-dev-server',
    // 'react-hot-loader/patch',
    'script!jquery/dist/jquery.min.js',
    'script!foundation-sites/dist/foundation.min.js',
    './src/index'
  ],
  externals: {
    jquery: 'jQuery'
  },
  output: {
    path: path.join(__dirname, 'public'),
    publicPath: '/public/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    })
    // ,new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    root: __dirname,
    alias: {
      Main: 'src/components/Main',
      // srclicationStyles: 'src/styles/src.scss',
      Nav: 'src/components/Nav',
      Timer: 'src/components/Timer',
      Countdown: 'src/components/Countdown',
      Clock: 'src/components/Clock',
      CountdownForm: 'src/components/CountdownForm',
      Controls: 'src/components/Controls',

      Routes: 'src/components/Routes',
      react: path.join(__dirname, 'node_modules', 'react'),
    },
    extensions: ['', '.js']
  },
  resolveLoader: {
    'fallback': path.join(__dirname, 'node_modules')
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      exclude: /node_modules/,
      include: __dirname
    }, {
      test: /\.js$/,
      loaders: ['babel'],
      include: path.join(__dirname, '..', '..', 'src')
    }, {
      test: /\.css?$/,
      // loaders: ['css', 'style', 'raw'],
      loader: "style-loader!css-loader",
      include: __dirname
    }]
  },
  sassLoader: {
    includePaths: [
      path.resolve(__dirname, './node_modules/foundation-sites/scss')
    ]
  }
};
