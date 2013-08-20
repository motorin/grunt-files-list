/*
 * grunt-files-list
 * https://github.com/motorin/grunt-files-list
 *
 * Copyright (c) 2013 Motorin
 * Licensed under the MIT license.
 */

'use strict';



module.exports = function(grunt) {

  // Link to Underscore.js
  var _ = grunt.util._;
  var path = require('path');

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('files_list', 'Create files list in for jincluding in HTML', function() {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      jsTemplate: '<script src="<%= pathPrefix %><%= filename %><%= pathSuffix %>"></script>',
      cssTemplate: '<link rel="stylesheet" type="text/css" href="<%= pathPrefix %><%= filename %><%= pathSuffix %>"></link>',
      pathPrefix: '',
      pathSuffix: '',
      punctuation: '.',
      separator: '\r\n'
    });

    var outputHTML = "";
    var targetFile = "";
    var filesCounter = 0;
    // Iterate over all specified file groups.
    this.files.forEach(function(f) {
      // Concat specified files.
      var src = f.src.filter(function(filepath) {
        var fullPath = filepath;
        if( f.cwd ){
            fullPath = f.cwd + filepath;
        }
        // Warn on and remove invalid source files (if nonull was set).
        if (!grunt.file.exists(fullPath)) {
          grunt.log.warn('Source file "' + fullPath + '" not found.');
          return false;
        } else {
          return true;
        }
      }).map(function(filepath) {
        // Read file source.
        filesCounter++;
        switch(path.extname(filepath)){
          case ".js":
            return _.template(options.jsTemplate, {filename: filepath, pathPrefix: options.pathPrefix, pathSuffix: options.pathSuffix});
          case ".css":
            return _.template(options.cssTemplate, {filename: filepath,pathPrefix: options.pathPrefix, pathSuffix: options.pathSuffix});
          default:
            filesCounter--;
            grunt.log.warn('Unrecognized file extension: ' + path.extname(filepath) + '. Must be .js or .css');
            return "";
        }
      }).join(grunt.util.normalizelf(options.separator));

      // src += options.punctuation;
      targetFile = f.dest;
      outputHTML = src;
    });
    // Write the destination file.
    grunt.file.write(targetFile, outputHTML);

    // Print a success message.
    grunt.log.writeln('Result script/link tags: ' + filesCounter + '.');
    grunt.log.writeln('File "' + targetFile + '" created.');

  });

};
