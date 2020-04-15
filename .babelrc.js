const { alias } = require("./config/shared");

module.exports = {
	presets: ["@babel/preset-env", "@babel/preset-react"],
	plugins: [
		"emotion",
		[
			"module-resolver",
			{
				alias
			}
		]
	]
};
