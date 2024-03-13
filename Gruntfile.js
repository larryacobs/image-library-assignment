module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            dist: {
                files: {
                    'dist/styles.css': 'src/styles.scss'
                }
            }
        },
        concat: {
            options: {
                separator: ';',
            },
            dist: {
                src: ['src/*.js'],
                dest: 'dist/scripts.js',
            },
        },
        watch: {
            css: {
                files: 'src/**/*.scss',
                tasks: ['sass'],
                options: {
                    livereload: true,
                },
            },
            js: {
                files: 'src/**/*.js',
                tasks: ['concat'],
                options: {
                    livereload: true,
                },
            },
        },
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['sass', 'concat', 'watch']);
};
