const path = require("path");
const { alias } = require("./config/shared");

module.exports = {
	// require: [path.resolve(__dirname, "./styleguide.setup.js")],
	ignore: [
		path.resolve(__dirname, "./src/components/common/**"),
		path.resolve(__dirname, "./src/components/styles/**")
	],
	webpackConfig: {
		resolve: {
			alias
		},
		module: {
			rules: [
				{
					test: /\.jsx?$/,
					exclude: /node_modules/,
					loader: "babel-loader"
				}
			]
		}
	}
};
