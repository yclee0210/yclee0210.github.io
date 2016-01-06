/**
 * Created by yclee on 1/6/16.
 */

module.exports = function (grunt) {
    'use strict';

    require('time-grunt')(grunt);
    require('jit-grunt')(grunt, {
        useminPrepare: 'grunt-usemin',
        ngtemplates: 'grunt-angular-templates',
        cdnify: 'grunt-google-cdn',
        protractor: 'grunt-protractor-runner'
    });

    var directory = {
        app: require('./bower.json').appPath || 'app',
        dist: 'dist'
    };

    grunt.initConfig({
        directory: directory,

        watch: {
            bower: {
                files: ['bower.json'],
                tasks: ['wiredep']
            },
            js: {
                files: ['<%= directory.app %>/source/**/!(*.spec).js'],
                tasks: ['newer:jshint:all'],
                options: {
                    livereload: '<%= connect.options.livereload %>'
                }
            },
            jsTest: {
                files: ['<%= directory.app %>/source/**/*.spec.js'],
                tasks: ['newer:jshint:test', 'karma']
            },
            gruntfile: {
                files: ['Gruntfile.js']
            },
            livereload: {
                options: {
                    livereload: '<%= connect.options.livereload %>'
                },
                files: [
                    '<%= directory.app %>/**/*.html'
                ]
            }
        },

        connect: {
            options: {
                port: 9000,
                hostname: '0.0.0.0',
                livereload: 35729,
                useAvailablePort: true
            },
            livereload: {
                options: {
                    open: true,
                    middleware: function (connect) {
                        return [
                            connect.static('.tmp'),
                            connect().use(
                                '/bower_components',
                                connect.static('./bower_components')
                            ),
                            connect().use(
                                '/app/styles',
                                connect.static('./app/styles')
                            ),
                            connect.static(directory.app)
                        ];
                    }
                }
            },
            test: {
                options: {
                    port: 9001,
                    middleware: function (connect) {
                        return [
                            connect.static('.tmp'),
                            connect.static('test'),
                            connect().use(
                                '/bower_components',
                                connect.static('./bower_components')
                            ),
                            connect.static(directory.app)
                        ];
                    }
                }
            },
            dist: {
                options: {
                    open: true,
                    port: 9002,
                    base: '<%= directory.dist %>'
                }
            }
        },

        clean: {
            dist: {
                files: [{
                    dot: true,
                    src: [
                        '.tmp',
                        '<%= directory.dist %>/{,*/}*',
                        '!<%= directory.dist %>/.git{,*/}*'
                    ]
                }]
            },
            serve: '.tmp',
            test: {
                files: [{
                    src: [
                        'test/results',
                        'test/coverage'
                    ]
                }]
            }
        },

        wiredep: {
            app: {
                src: ['<%= directory.app %>/index.html'],
                ignorePath: /\.\.\//
            },
            test: {
                devDependencies: true,
                src: '<%= karma.unit.configFile %>',
                ignorePath: /\.\.\//,
                fileTypes: {
                    js: {
                        block: /(([\s\t]*)\/{2}\s*?bower:\s*?(\S*))(\n|\r|.)*?(\/{2}\s*endbower)/gi,
                        detect: {
                            js: /'(.*\.js)'/gi
                        },
                        replace: {
                            js: '\'{{filePath}}\','
                        }
                    }
                }
            }
        },

        useminPrepare: {
            html: '<%= directory.app %>/index.html',
            options: {
                dest: '<%= directory.dist %>',
                flow: {
                    html: {
                        steps: {
                            js: ['concat', 'uglifyjs'],
                            css: ['cssmin']
                        },
                        post: {}
                    }
                }
            }
        },

        imagemin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= directory.app %>/assets/images',
                    src: '{,*/}*.{png,jpg,jpeg,gif}',
                    dest: '<%= directory.dist %>/assets/images'
                }]
            }
        },

        svgmin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= directory.app %>/assets/images',
                    src: '{,*/}*.svg',
                    dest: '<%= directory.dist %>/assets/images'
                }]
            }
        },

        copy: {
            dist: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: '<%= directory.app %>',
                    dest: '<%= directory.dist %>',
                    src: [
                        '*.{ico,png,txt}',
                        '*.html',
                        'assets/images/{,*/}*.{webp}',
                        'assets/fonts/{,*/}*.*',
                        'assets/i18n/*.*'
                    ]
                }, {
                    expand: true,
                    cwd: '.tmp/assets/images',
                    dest: '<%= directory.dist %>/assets/images',
                    src: ['generated/*']
                }]
            },
            stylesheet: {
                expand: true,
                cwd: '<%= directory.app %>/assets/stylesheet',
                dest: '.tmp/assets/stylesheet',
                src: '{,*/}*.css'
            }
        },

        ngtemplates: {
            dist: {
                options: {
                    module: 'angularApp',
                    htmlmin: '<%= htmlmin.dist.options %>',
                    usemin: 'scripts/app.js'
                },
                cwd: '<%= directory.app %>',
                src: 'source/**/*.html',
                dest: '.tmp/templateCache.js'
            }
        },

        ngAnnotate: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '.tmp/concat/scripts',
                    src: '*.js',
                    dest: '.tmp/concat/scripts'
                }]
            }
        },

        cdnify: {
            dist: {
                html: ['<%= directory.dist %>/*.html']
            }
        },

        filerev: {
            dist: {
                src: [
                    '<%= directory.dist %>/scripts/{,*/}*.js',
                    '<%= directory.dist %>/assets/stylesheet/{,*/}*.css',
                    '<%= directory.dist %>/assets/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
                    '<%= directory.dist %>/assets/fonts/*'
                ]
            }
        },

        usemin: {
            html: ['<%= directory.dist %>/{,*/}*.html'],
            css: ['<%= directory.dist %>/assets/stylesheet/{,*/}*.css'],
            js: ['<%= directory.dist %>/scripts/{,*/}*.js'],
            options: {
                assetsDirs: [
                    '<%= directory.dist %>',
                    '<%= directory.dist %>/assets/images',
                    '<%= directory.dist %>/assets/stylesheet'
                ],
                patterns: {
                    js: [
                        [/(img\/[^''""]*\.(png|jpg|jpeg|gif|webp|svg))/g, 'Replacing references to img']
                    ]
                }
            }
        },

        htmlmin: {
            dist: {
                options: {
                    collapseWhitespace: true,
                    conservativeCollapse: true,
                    collapseBooleanAttributes: false,
                    removeCommentsFromCDATA: true
                },
                files: [{
                    expand: true,
                    cwd: '<%= directory.dist %>',
                    src: ['*.html'],
                    dest: '<%= directory.dist %>'
                }]
            }
        },

        'gh-pages': {
            options: {
                repo: 'https://' + process.env.GH_TOKEN + '@' + process.env.GH_REF,
                base: 'dist',
                branch: 'master',
                user: {
                    name: 'yclee0210',
                    email: 'yclee1987@gmail.com'
                }
            },
            src: ['**']
        },

        jshint: {
            options: {
                jshintrc: '.jshintrc',
                reporter: require('jshint-stylish')
            },
            all: {
                src: [
                    'Gruntfile.js',
                    '<%= directory.app %>/app/source/**/!(*.spec).js'
                ]
            },
            test: {
                options: {
                    jshintrc: 'test/.jshintrc'
                },
                src: ['app/source/**/*.spec.js', 'test/e2e/**/*.js']
            }
        },

        karma: {
            unit: {
                configFile: 'test/karma.conf.js',
                singleRun: false,
                browsers: ['PhantomJS']
            },
            continuous: {
                configFile: 'test/karma.conf.js',
                singleRun: true,
                browsers: ['PhantomJS']
            }
        }
    });

    grunt.registerTask('serve', [
        'wiredep',
        'connect:livereload',
        'watch'
    ]);

    grunt.registerTask('test', function (target) {
        if ('unit' === target) {
            return grunt.task.run([
                'wiredep',
                'connect:test',
                'karma:continuous'
            ]);
        }

        grunt.task.run([
            'wiredep',
            'connect:test',
            'karma:continuous'
        ]);
    });

    grunt.registerTask('build', function (option) {
        if ('andServe' === option) {
            return grunt.task.run([
                'clean:dist',
                'wiredep',
                'useminPrepare',
                'imagemin',
                'svgmin',
                'copy:stylesheet',
                //'autoprefixer',
                'ngtemplates',
                'concat',
                'ngAnnotate',
                'copy:dist',
                'cdnify',
                'cssmin',
                'uglify',
                'filerev',
                'usemin',
                'htmlmin',
                'connect:dist:keepalive'
            ]);
        }

        grunt.task.run([
            'clean:dist',
            'wiredep',
            'useminPrepare',
            'imagemin',
            'svgmin',
            'copy:stylesheet',
            //'autoprefixer',
            'ngtemplates',
            'concat',
            'ngAnnotate',
            'copy:dist',
            'cdnify',
            'cssmin',
            'uglify',
            'filerev',
            'usemin',
            'htmlmin'
        ]);
    });

    grunt.registerTask('deploy', [
        'build',
        'gh-pages'
    ]);
};
