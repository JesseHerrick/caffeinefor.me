module.exports = (grunt) ->
  grunt.initConfig
    pkg: grunt.file.readJSON 'package.json'
    
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
  
  grunt.loadNpmTasks 'grunt-contrib-uglify'
  grunt.loadNpmTasks 'grunt-contrib-coffee'
  
  grunt.registerTask 'default', ['coffee', 'uglify']