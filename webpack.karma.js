var webpack = require('webpack');

var webpackConfig = {
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      }
    ]
  },
  devtool: '#inline-source-map'
}

// shared config for all unit tests
module.exports = {
  frameworks: ['jasmine'],
  files: [
    'test/dialog.spec.js'
  ],
  preprocessors: {
    'test/dialog.spec.js': ['webpack', 'sourcemap']
  },
  webpack: webpackConfig,
  webpackMiddleware: {
    noInfo: true
  }
}