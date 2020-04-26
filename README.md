# jstransformer-sweetjs

[Sweet.js](http://sweetjs.org/) support for [JSTransformers](http://github.com/jstransformers).

[![Build Status](https://img.shields.io/travis/jstransformers/jstransformer-sweetjs/master.svg)](https://travis-ci.org/jstransformers/jstransformer-sweetjs)
[![Coverage Status](https://img.shields.io/codecov/c/github/jstransformers/jstransformer-sweetjs/master.svg)](https://codecov.io/gh/jstransformers/jstransformer-sweetjs)
[![Dependency Status](https://img.shields.io/david/jstransformers/jstransformer-sweetjs/master.svg)](http://david-dm.org/jstransformers/jstransformer-sweetjs)

[![NPM version](https://img.shields.io/npm/v/jstransformer-sweetjs.svg)](https://www.npmjs.org/package/jstransformer-sweetjs)

## Installation

    npm install jstransformer-sweetjs

## API

```js
var sweet = require('jstransformer')(require('jstransformer-sweetjs'));
var input = "syntax hi = function (ctx) { return #`console.log('hello, world!')`; }\n hi"
sweet.render(input).body
//=> 'console.log('hello, world!');

sweetjs.render('blah').body
//=> 'blah'
```

## License

MIT
