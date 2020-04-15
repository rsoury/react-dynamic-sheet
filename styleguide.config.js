const path = require("path");

module.exports = {
	// require: [path.resolve(__dirname, "./styleguide.setup.js")],
	ignore: [
		path.resolve(__dirname, "./src/components/common/**"),
		path.resolve(__dirname, "./src/components/styles/**")
	],
	webpackConfig: {
		module: {
			rules: [
				{
					test: /\.jsx?$/,
					exclude: /node_modules/,
					loader: "babel-loader"
				},
				{
					test: /\.css?$/,
					include: /modern-normalize/,
					loader: ["to-string-loader", "css-loader"]
				}
			]
		}
	},
	title: "React Dynamic Sheet Library",
	styleguideDir: "docs"
};
