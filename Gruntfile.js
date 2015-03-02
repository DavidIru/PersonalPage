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
		watch: {
			project: {
				files: [
					'public/**/*.js', 
					'public/**/*.html', 
					'public/**/*.json', 
					'public/**/*.css'
				],
				options: {
					livereload: true
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['connect', 'watch']);

};
