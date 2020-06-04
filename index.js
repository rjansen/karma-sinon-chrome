'use strict'

var path = require('path')

var pattern = function (file) {
  return { pattern: file, included: true, served: true, watched: false }
}

var framework = function (files) {
  var sinonChromePath = path.resolve(require.resolve('sinon-chrome'), '../bundle/sinon-chrome.min.js')
  files.unshift(pattern(sinonChromePath))
}

var frameworkApps = function (files) {
  var sinonChromePath = path.resolve(require.resolve('sinon-chrome'), '../bundle/sinon-chrome-apps.min.js')
  files.unshift(pattern(sinonChromePath))
}

var frameworkExtensions = function (files) {
  var sinonChromePath = path.resolve(require.resolve('sinon-chrome'), '../bundle/sinon-chrome-webextensions.min.js')
  files.unshift(pattern(sinonChromePath))
}

framework.$inject = ['config.files']
frameworkApps.$inject = ['config.files']
frameworkExtensions.$inject = ['config.files']

module.exports = {
  'framework:sinon-chrome': ['factory', framework],
  'framework:sinon-chrome-apps': ['factory', frameworkApps],
  'framework:sinon-chrome-extensions': ['factory', frameworkExtensions]
}
