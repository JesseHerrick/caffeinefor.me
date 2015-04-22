module.exports = (grunt) ->
  grunt.initConfig
    pkg: grunt.file.readJSON 'package.json'

    watch:
      scripts:
        files: 'coffee/caffeine.coffee'
<<<<<<< HEAD
        tasks: ['coffee']
    
=======
        tasks: ['coffee', 'uglify']

>>>>>>> e17b333c24fcceb14bf3441e2b122cfbb49fa16e
    connect:
      server:
        options:
          port: 3000

    coffee:
      dist:
        files:
          'js/caffeine.js': 'coffee/*.coffee'
<<<<<<< HEAD
    
=======

    uglify:
      dist:
        options:
          banner: "/*\nLicenced under the MIT license (C) 2015 by Jesse Herrick.\njesseherrick.io · caffeinefor.me\n*/\n"
        files:
          'js/caffeine.min.js': 'js/caffeine.js'

>>>>>>> e17b333c24fcceb14bf3441e2b122cfbb49fa16e
  grunt.loadNpmTasks 'grunt-contrib-watch'
  grunt.loadNpmTasks 'grunt-contrib-connect'
  grunt.loadNpmTasks 'grunt-contrib-coffee'
<<<<<<< HEAD
  
  grunt.registerTask 'default', ['connect', 'coffee', 'watch']
=======

  grunt.registerTask 'default', ['connect', 'coffee', 'uglify', 'watch']
>>>>>>> e17b333c24fcceb14bf3441e2b122cfbb49fa16e
