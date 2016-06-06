'use strict';

var sweet = require('sweet.js');
var extend = require('extend-shallow');

exports.name = 'sweetjs';
exports.inputFormats = ['sweetjs', 'sweet'];
exports.outputFormat = 'html';

exports.render = function (str, options, locals) {
  var opts = extend({}, options, locals);
  var output = sweet.compile(str, opts);
  return output.code;
};
