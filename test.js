/* global it */

'use strict'

var fs = require('fs')
var di = require('di')
var framework = require('./')
var frameworkApps = require('./')
var frameworkExtensions = require('./')

describe('sinon-crhome', function () {
  it('should inject files', function () {
    var config = { 'config': [ 'value', { files: [] } ] }
    var injector = new di.Injector([ config, framework ])

    injector.get('framework:sinon-chrome')

    injector.get('config.files')
      .map(function (file) {
        return file.pattern
      })
      .forEach(function (path) {
        fs.accessSync(path)
      })
  })
})

describe('sinon-crhome-apps', function () {
  it('should inject files', function () {
    var config = { 'config': [ 'value', { files: [] } ] }
    var injector = new di.Injector([ config, frameworkApps ])

    injector.get('framework:sinon-chrome-apps')

    injector.get('config.files')
      .map(function (file) {
        return file.pattern
      })
      .forEach(function (path) {
        fs.accessSync(path)
      })
  })
})

describe('sinon-crhome-extensions', function () {
  it('should inject files', function () {
    var config = { 'config': [ 'value', { files: [] } ] }
    var injector = new di.Injector([ config, frameworkExtensions ])

    injector.get('framework:sinon-chrome-extensions')

    injector.get('config.files')
      .map(function (file) {
        return file.pattern
      })
      .forEach(function (path) {
        fs.accessSync(path)
      })
  })
})
