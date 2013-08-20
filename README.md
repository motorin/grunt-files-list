# grunt-files-list

> Create templated list of files

## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-files-list --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-files-list');
```

## The "files_list" task

### Overview
In your project's Gruntfile, add a section named `files_list` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  files_list: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
})
```

### Options

#### options.pathPrefix
Type: `String`
Default value: ``

A string value that is used to prefix the filepath.

#### options.pathSuffix
Type: `String`
Default value: ``

A string value that is used to suffix the filepath. Some get parameters for example.

### Usage Examples

#### Default Options
In this example, the default options are used to do something with whatever. So it just output file with HTML-tags within. Tags corresponds to file extension: `.js => <script>` and `.css => <link>`. So, `src/first.js` will be `<script src="src/first.js"></script>`

```js
grunt.initConfig({
  files_list: {
    options: {},
    files: {
      'dest/filelist.html': ['src/first.js', 'src/second.js'],
    },
  },
})
```


#### Custom Options
In this example, custom options are used prefix and suffix the filepath. So, `src/first.js` will be `<script src="/js/src/first.js?version=0.1"></script>`

```js
grunt.initConfig({
  files_list: {
    options: {
      pathPrefix: "/js/",
      pathSuffix: "?verion=0.1"
    },
    files: {
      'dest/filelist.html': ['src/first.js', 'src/second.js'],
    },
  },
})
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
