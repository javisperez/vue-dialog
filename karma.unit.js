var base = require('./webpack.karma.js')

module.exports = function (config) {
  config.set(Object.assign(base, {
    browsers: ['PhantomJS'],
    reporters: ['progress'],
    singleRun: true,
    logLevel: config.LOG_INFO,
    client: {
        captureConsole: true
    }
  }))
}