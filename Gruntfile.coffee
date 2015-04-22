module.exports = (grunt) ->
  grunt.initConfig
    pkg: grunt.file.readJSON 'package.json'

    watch:
      scripts:
        files: 'coffee/caffeine.coffee'
        tasks: ['coffee']
    connect:
      server:
        options:
          port: 3000

    coffee:
      dist:
        files:
          'js/caffeine.js': 'coffee/*.coffee'

  grunt.loadNpmTasks 'grunt-contrib-watch'
  grunt.loadNpmTasks 'grunt-contrib-connect'
  grunt.loadNpmTasks 'grunt-contrib-coffee'
  
  grunt.registerTask 'default', ['connect', 'coffee', 'watch']
