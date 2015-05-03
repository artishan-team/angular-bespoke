/**
@toc
2. load grunt plugins
3. init
4. setup variables
5. grunt.initConfig
6. register grunt tasks

*/

'use strict';

module.exports = function(grunt) {

	/**
	Load grunt plugins
	@toc 2.
	*/
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-karma');

	/**
	Function that wraps everything to allow dynamically setting/changing grunt options and config later by grunt task. This init function is called once immediately (for using the default grunt options, config, and setup) and then may be called again AFTER updating grunt (command line) options.
	@toc 3.
	@method init
	*/
	function init(params) {
		/**
		Project configuration.
		@toc 5.
		*/
		grunt.initConfig({
			concat: {
				devJs: {
					src: [
						"bower_components/bespoke.js/dist/bespoke.js",
						"bower_components/bespoke-classes/dist/bespoke-classes.js",
						"bower_components/bespoke-keys/dist/bespoke-keys.js",
						"bower_components/bespoke-scale/dist/bespoke-scale.js",
						"bower_components/bespoke-progress/dist/bespoke-progress.js",
						"bower_components/bespoke-theme-cube/dist/bespoke-theme-cube.js",
						// "bower_components/bespoke-theme-nebula/dist/bespoke-theme-nebula.js",
						'src/angular-bespoke.js'
					],
					dest: 'dist/angular-bespoke.js'
				}
			},
			jshint: {
				options: {
					globalstrict:   true,
					node: true,
					loopfunc: true,
					browser:        true,
					devel:          true,
					globals: {
						angular: false,
						$: false,
						moment:	false,
						module: false,
						forge: false
					}
				},
				beforeconcat:   {
					options: {
						force:	false,
						ignores: ['**.min.js']
					},
					files: {
						src: []
					}
				},
				//quick version - will not fail entire grunt process if there are lint errors
				beforeconcatQ:   {
					options: {
						force:	true,
						ignores: ['**.min.js']
					},
					files: {
						src: ['**.js']
					}
				}
			},
			uglify: {
				options: {
					mangle: false
				},
				build: {
					files:  {},
					src: 'dist/angular-bespoke.js',
					dest: 'dist/angular-bespoke.min.js'
				}
			},
			less: {
				development: {
					options: {
					},
					files: {
						"dist/angular-bespoke.css": "src/angular-bespoke.less"
					}
				}
			},
			cssmin: {
				dev: {
					src: ['dist/angular-bespoke.css'],
					dest: 'dist/angular-bespoke.min.css'
				}
			},
			connect: {
				dev: {
					options: {
						port: 8000,
						hostname: '*',
						base: ['test', 'src', 'bower_components', 'node_modules']
					}
				},
				demo: {
					options: {
						port: 8000,
						hostname: '*',
						base: ['demo', 'dist', 'bower_components']
					}
				}
			}
			/*,
			karma: {
				unit: {
					configFile: publicPathRelativeRoot+'config/karma.conf.js',
					singleRun: true,
					browsers: ['PhantomJS']
				}
			}*/
		});


		/**
		register/define grunt tasks
		@toc 6.
		*/
		grunt.registerTask('default', [
			'jshint:beforeconcat',
			'less:development',
			'concat:devJs',
			'connect:demo:keepalive'
		]);
		grunt.registerTask('dev', [
			'jshint:beforeconcat',
			'less:development',
			'concat:devJs',
			'connect:dev:keepalive'
		]);
		grunt.registerTask('demo', [
			'connect:demo:keepalive'
		]);
		grunt.registerTask('build',	[
			'jshint:beforeconcatQ',
			'less:development',
			'cssmin',
			'concat',
			'uglify:build'
		]);
	}
	init({});		//initialize here for defaults (init may be called again later within a task)

};
