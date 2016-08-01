module.exports = function(grunt) {

  grunt.initConfig({

    sass: {
      options: {
          sourceMap: false,
          
      },
      dist: {
          files: {
              'stylesheet.css': 'stylesheet.scss'
          }
        }
      },

    autoprefixer: {
			dist: {
				files: {
					'stylesheet.css' : 'stylesheet.scss'
				},
				options: {
					browsers: ['last 3 versions']
				}
			}
		},

    watch: {
	        styles: {
                files: [
                	'stylesheet.scss'
                ],
                tasks: ['sass', 'autoprefixer'],
                options: {
                    spawn: true
                  }
                }
              }

});
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-autoprefixer');


grunt.registerTask('default', ['watch']);
};
