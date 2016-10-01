module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		jasmine: {
			core: {
				src: ["src/main/javascript/GuavaJS.js"],
				options: {
					specs: ["src/test/javascript/GuavaJS.spec.js"]
				}
			},
			logging: {
				src: ["src/main/javascript/GuavaJS.js", "src/main/javascript/GuavaJS.logging.js"],
				options: {
					specs: ["src/test/javascript/GuavaJS.logging.spec.js"]
				}
			},
			strings: {
				src: ["src/main/javascript/GuavaJS.js", "src/main/javascript/GuavaJS.strings.js"],
				options: {
					specs: ["src/test/javascript/GuavaJS.strings.spec.js"]
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-jasmine');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.registerTask('default', ['jasmine', 'concat', 'uglify']);
	grunt.registerTask('build', ['jasmine', 'concat', 'uglify']);
	grunt.registerTask('test', ['jasmine']);
}