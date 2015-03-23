 
module.exports = function(_grunt){

    var opt = {
    	config: (new require('./config/config.default.js'))(_grunt),
        grunt: _grunt
    }


    _grunt.initConfig({
        watch: (new require('./config/watch.config.js'))(opt) 
    })

 
    _grunt.registerTask('build', [
        'sass:dev', 
        'include:main_dev'
    ]);

 
   
}

