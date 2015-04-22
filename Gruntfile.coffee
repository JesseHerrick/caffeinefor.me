module.exports = (grunt) ->
  grunt.initConfig
    pkg: grunt.file.readJSON 'package.json'

    watch:
      scripts:
        files: 'coffee/caffeine.coffee'
        tasks: ['coffee', 'uglify']

    connect:
      server:
        options:
          port: 3000

    coffee:
      dist:
        files:
          'js/caffeine.js': 'coffee/*.coffee'

    uglify:
      dist:
        options:
          banner: "/*\nLicenced under the MIT license (C) 2015 by Jesse Herrick.\njesseherrick.io · caffeinefor.me\n*/\n"
        files:
          'js/caffeine.min.js': 'js/caffeine.js'

  grunt.loadNpmTasks 'grunt-contrib-watch'
  grunt.loadNpmTasks 'grunt-contrib-connect'
  grunt.loadNpmTasks 'grunt-contrib-uglify'
  grunt.loadNpmTasks 'grunt-contrib-coffee'

  grunt.registerTask 'default', ['connect', 'coffee', 'uglify', 'watch']
