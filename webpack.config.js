const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
	entry: './src/js/index.js',
	output: {
		filename: 'dest/js/app.js'
	},
    plugins: [
        new UglifyJsPlugin()
    ]
};
