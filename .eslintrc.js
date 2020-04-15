const { alias } = require("./config/shared");

module.exports = {
	extends: [
		"airbnb",
		"plugin:prettier/recommended",
		"prettier/react",
		"plugin:import/errors",
		"plugin:import/warnings"
	],
	parser: "babel-eslint",
	plugins: ["babel", "react", "emotion"],
	env: {
		browser: true,
		jest: true
	},
	settings: {
		"import/resolver": {
			alias: {
				map: Object.entries(alias),
				extensions: [".js", ".jsx", ".json"]
			}
		},
		react: {
			pragma: "React",
			version: "detect"
		}
	},
	rules: {
		// See: https://github.com/benmosher/eslint-plugin-import/issues/496
		"import/no-extraneous-dependencies": 0,
		"no-console": ["warn"],
		"no-unused-vars": ["error", { ignoreRestSiblings: true }],
		"no-param-reassign": 0,
		"react/no-danger": 0,
		"react/jsx-props-no-spreading": 0,
		"react/forbid-prop-types": [
			"error",
			{
				forbid: ["any", "array"],
				checkContextTypes: true,
				checkChildContextTypes: true
			}
		],
		"react/prefer-stateless-function": 0,
		"react/static-property-placement": 0,
		"react/state-in-constructor": 0,
		"import/prefer-default-export": 0,
		"class-methods-use-this": 0
	}
};
