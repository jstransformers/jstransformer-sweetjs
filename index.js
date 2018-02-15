'use strict'

const extend = require('extend-shallow')
const sweet = require('sweet.js')

exports.name = 'sweetjs'
exports.inputFormats = ['sweetjs', 'sweet']
exports.outputFormat = 'html'

exports.render = function (str, options, locals) {
  const opts = extend({}, options, locals)
  const output = sweet.compile(str, opts)
  return output.code
}
