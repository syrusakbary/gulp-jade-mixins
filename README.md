#gulp-jade-mixins
[![Build Status](https://travis-ci.org/CheggInc/gulp-jade-mixins.png?branch=master)](https://travis-ci.org/CheggInc/gulp-jade-mixins)

> Compile [Jade](http://jade-lang.com/) Mixins with gulp (gulpjs.com)

## Information

<table>
<tr> 
<td>Package</td><td>gulp-jade-mixins</td>
</tr>
<tr>
<td>Description</td>
<td>Jade mixins js-generator plugin for Gulp</td>
</tr>
<tr>
<td>Node Version</td>
<td>>= 0.9</td>
</tr>
<tr>
<td>Gulp Version</td>
<td>3.x</td>
</tr>
</table>

## Usage
#### Install
		npm install https://github.com/CheggInc/gulp-jade-mixins/tarball/master --save

## Examples

```javascript

// Gulpfile.js
// Require the needed packages
var gulp = require('gulp');
var jade_mixins = require('gulp-jade-mixins');


// Get one .styl file and render
gulp.task('jade-mixins', function () {
	gulp.src('./templates/*/**.jade')
		.pipe(jade_mixins({
			pretty: true
		}))
		.pipe(gulp.dest('./js/templates'));
});


// Default gulp task to run
gulp.task('default', ['jade-mixins']);

```

## LICENSE

(MIT License)

Copyright (c) 2014 Syrus Akbary / Chegg.com

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
