/*
 * grunt-files-list
 * https://github.com/motorin/grunt-files-list
 *
 * Copyright (c) 2013 Motorin
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>',
      ],
      options: {
        jshintrc: '.jshintrc',
      },
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp'],
    },

    // Configuration to be run (and then tested).
    files_list: {
      defaultOptions: {
        cwd: "test/fixtures/",
        src: ['*.js','*.css'],
        dest: 'tmp/defaultOptions.html'
      },
      withPrefixAndSuffux: {
        options: {
          pathPrefix: "/js/",
          pathSuffix: "?verion=0.1"
        },
        cwd: "test/fixtures/",
        src: ['*.js','*.css'],
        dest: 'tmp/withPrefixAndSuffix.html'
      },
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js'],
    },

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'files_list', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

};
