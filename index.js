'use strict';

var map = require('map-stream');
var duplexer = require('duplexer');
var jade = require('jade');
var templatizer = require('templatizer');
var beautify = require('templatizer/lib/beautify');
var jadeAst = require('templatizer/lib/jade-ast');
var ext = require('gulp-util').replaceExtension;
var _ = require('underscore');
var fs = require('fs');


module.exports = function(options){
  var parentObjName = 'exports';
  var opts = options || {};
  options.client = true;
	var placesToLook = [
	        // __dirname + '/../jade/runtime.js',
	        // __dirname + '/node_modules/jade/runtime.js',
	        __dirname + '/jade.runtime.js'
	    ];
	var f = _.find(placesToLook, fs.existsSync);
	var jadeRuntime = fs.readFileSync(f).toString();


  function CompileJadeMixins(file, cb){
    var name = ext(file.path, '.js');
    var template = beautify(jade.compile(file.contents.toString(), {
        client: true,
        compileDebug: false,
        pretty: false,
        filename: name
    }).toString());

	var astResult = jadeAst.getMixins({
	    template: template,
	    templateName: name,
	    dirString: 'mixins',
	    parentObjName: parentObjName
	});

	var mixinOutput = astResult.mixins;
	var output = '';

	output += jadeRuntime + '\n\n'
	output += parentObjName + '["mixins"] = {};\n'; 
	output += mixinOutput;

	file.contents = new Buffer(output);
	file.path = name;
    cb(null, file);
  }
  return map(CompileJadeMixins);
};
