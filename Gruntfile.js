module.exports = function (grunt)
{
	grunt.initConfig({

		pkg : grunt.file.readJSON('package.json'),

		jshint :
		{
			files :
			{
				src : ['src/entry-direction.js']
			}
		},

		uglify :
		{	
			options: 
			{
      			banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
       					 '<%= grunt.template.today("yyyy-mm-dd") %> <%= pkg.author %> */\n'
    		},
			build :
			{
				files :
				{
					'dist/entry-direction.min.js' : ['src/entry-direction.js']
				}
			}
		},

		copy :
		{
			build :
			{
				src : ['src/entry-direction.js'], dest : 'dist/entry-direction.js'
			}
		},

		watch :
		{
			scripts :
			{
				files : ['src/entry-direction.js'],
				tasks : ['jshint','uglify']
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.registerTask('default', ['jshint', 'uglify', 'copy']);
};