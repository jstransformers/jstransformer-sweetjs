'use strict';

var sweet = require('sweet.js');

exports.name = 'sweetjs';
exports.inputFormats = ['sweetjs', 'sweetjsbar'];
exports.outputFormat = 'html';

exports.render = function (str, options) {
  var output = sweet.compile(str, options);
  return output.code;
}
