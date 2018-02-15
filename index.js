'use strict'

const extend = require('extend-shallow')
const sweet = require('@sweet-js/core')
const NodeLoader = require('@sweet-js/core/dist/node-loader').default

exports.name = 'sweetjs'
exports.inputFormats = ['sweetjs', 'sweet', 'sjs']
exports.outputFormat = 'html'

exports.renderFile = function (file, options, locals) {
  extend(options, locals)
  const loader = new NodeLoader(process.cwd(), options)
  const out = sweet.compile(file, loader, options)
  return out.code
}
