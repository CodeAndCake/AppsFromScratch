 
module.exports = function(_opt){

    _opt.grunt.loadNpmTasks('grunt-contrib-watch');

    return {
        css: {
            files: ['../style.css'],
            tasks: []
        },

        scripts: {
            files: [
            '../**/*.html',
            '../**/*.js',
            '!../grunt/**/*',
           
            ],
            tasks: []
        },

        options: {
            livereload: {
                port: _opt.config.livereload.port
            }
        }
    }

}