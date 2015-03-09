module.exports = function(grunt) {
	grunt.initConfig({
		connect: {
			server: {
				options: {
					port: 9000,
					base: 'public/',
					hostname: '*',
					useAvailablePort: true,
					livereload: true
				}
			}
		},
		stylus: {
			compile: {
				options: {
					paths: ['public/css'],
					'include css': true
				},
				files: {
					'public/css/main.css': 'public/css/main.styl'
				}
			}
		},
		watch: {
			project: {
				files: [
					'public/**/*.js', 
					'public/**/*.html', 
					'public/**/*.json', 
					'public/**/*.styl'
				],
				options: {
					livereload: true
				}
			},
			stylesheets: {
				files: ['public/css/**/*.styl', 'public/css/**/*.css'],
				tasks: ['stylus'],
				options: {
					interrupt: true
				}
			} 
		}
	});

	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-stylus');

	grunt.registerTask('default', ['connect', 'watch', 'stylus']);

};
