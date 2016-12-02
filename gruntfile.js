'use strict';

module.exports = function(grunt) {

    grunt.initConfig({

        karma: {  // task name
            options: {
                // these options apply to all of our TARGETS
                frameworks: [ 'mocha', 'chai' ],
                client: {
                    mocha: {
                        ui: 'bdd'
                    }
                },
                browsers: [ 'PhantomJS' ],
                singleRun: true,

                preprocessors: {
                    'src/js/**/*.js': [ 'coverage' ]
                },
                reporters: [ 'dots', 'coverage' ],
                coverageReporter: {
                    type: 'text-summary'
                }
            },

            // targets
            registrar: {
                options: {
                    // these are options specific to THIS TARGET
                    files: [
                        'node_modules/angular/angular.js',
                        'node_modules/angular-mocks/angular-mocks.js',
                        'src/js/shop.module.js',
                        'src/js/shop.controller.js',
                        'src/js/product.service.js',
                        'test/specs/product.service.spec.js',
                        'test/specs/registrar.controller.spec.js'
                    ]
                }
            }
        }

    });

    grunt.loadNpmTasks('grunt-karma');

    grunt.registerTask('default', ['karma']);
};
