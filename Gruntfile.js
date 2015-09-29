module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-concat-css');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.initConfig({
        watch: {
            default: {
                files: [
                    'Gruntfile.js',
                    'src/js/modules/**/*.js',
                    'src/templates/**/*.html',
                    'src/templates/*.html'/*,
                    'src/index.html'*/
                ],
                tasks: [
                    'concat:dist',
                    'uglify:dist',
                    'clean',
                    'concat_css',
                    'cssmin'
                ],
                options: {
                    spawn: false
                }
            }
        },
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {
                    //'index.html': 'src/index.html',
                    'build/templates/auth/login.html': 'src/templates/auth/login.html',
                    'build/templates/auth/register.html': 'src/templates/auth/register.html',
                    'build/templates/auth/forgot.html': 'src/templates/auth/forgot.html'
                }
            }
        },
        jshint: {
            all: [
                'Gruntfile.js',
                'src/js/modules/controllers/*.js',
                'src/js/modules/services/*.js'
            ]
        },
        clean: {
            default: ["./build/css/main_style.css"]
        },
        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: [
                    'src/js/libs/angular/angular.js',
                    'src/js/libs/angular-resource/angular-resource.js',
                    'src/js/libs/angular-ui-router/release/angular-ui-router.js',
                    'src/js/libs/angular-bootstrap/ui-bootstrap-tpls.js',
                    'src/js/libs/underscore/underscore.js',
                    'src/js/modules/config.js',
                    'src/js/modules/app.js',
                    'src/js/modules/routes.js',
                    'src/js/modules/**/*.js'
                ],
                dest: 'build/js/app.js'
            }
        },
        uglify: {
            dist: {
                files: {
                    'build/js/app.min.js': ['build/js/app.js']
                },
                options: {
                    mangle: false
                }
            }
        },
        concat_css: {
            all: {
                src: ["./src/styles/mainstyle/*.css"],
                dest: "./build/css/main_style.css"
            }
        },
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: './build/css',
                    src: ['main_style.css'],
                    dest: './build/css',
                    ext: '.min.css'
                }]
            }
        }
    });
    grunt.registerTask('default', [
        'concat:dist'/*,
        'uglify:dist',
        'htmlmin:dist',
        'concat_css',
        'cssmin',
        'watch:default'*/
    ]);

    grunt.registerTask('html', [
        'htmlmin:dist'
    ]);

    grunt.registerTask('css', [
        'concat_css',
        'cssmin'
    ]);

};