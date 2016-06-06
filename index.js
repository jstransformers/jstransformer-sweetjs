'use strict';

var extend = require('extend-shallow');
var sweet = require('sweet.js');

exports.name = 'sweetjs';
exports.inputFormats = ['sweetjs', 'sweet'];
exports.outputFormat = 'html';

exports.render = function (str, options, locals) {
  var opts = extend({}, options, locals);
  var output = sweet.compile(str, opts);
  return output.code;
};
