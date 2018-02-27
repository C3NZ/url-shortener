var HTMLWebpackPlugin = require('html-webpack-plugin');

//html Webpacks config object
var html_webpack_config = {
	template: __dirname + '/app/index.html',
	filename: 'index.html',
	inject: 'body'
};

//Initializing html webpack with our config object
var HTMLWebpackPluginConfig = new HTMLWebpackPlugin(html_webpack_config);

//webpacks config for parsing our jsx
module.exports = {
	entry: __dirname + '/app/index.js',
	
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			}
		]
	},

	output: {
		filename: 'transformed.js',
		path: __dirname + '/public'
	},

	plugins: [HTMLWebpackPluginConfig]
};