import babel from "rollup-plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import postcss from "rollup-plugin-postcss";
import external from "rollup-plugin-peer-deps-external";
import { terser } from "rollup-plugin-terser";
import { uglify } from "rollup-plugin-uglify";
import filesize from "rollup-plugin-filesize";
import { string } from "rollup-plugin-string";
import visualizer from "rollup-plugin-visualizer";
import autoprefixer from "autoprefixer";

import pkg from "./package.json";

const input = "./src/index.js";
const extensions = [".ts", ".tsx", ".js", ".jsx", ".json"];
const codes = [
	"THIS_IS_UNDEFINED",
	"MISSING_GLOBAL_NAME",
	"CIRCULAR_DEPENDENCY"
];
const minifyExtension = pathToFile => pathToFile.replace(/\.js$/, ".min.js");
const discardWarning = warning => {
	if (codes.includes(warning.code)) {
		return;
	}

	console.error(warning);
};

const plugins = [
	postcss({
		extract: true,
		plugins: [autoprefixer]
	}),
	babel({
		exclude: "node_modules/**",
		extensions
	}),
	external({
		includeDependencies: true
	}),
	resolve({
		browser: true,
		extensions,
		preferBuiltins: false
	}),
	commonjs(),
	filesize(),
	string({
		include: "modern-normalize"
	}),
	visualizer()
];

export default [
	// CommonJS
	{
		output: {
			file: pkg.main,
			format: "cjs"
		},
		plugins
	},
	{
		output: {
			file: minifyExtension(pkg.main),
			format: "cjs"
		},
		plugins: [...plugins, uglify()]
	},

	// UMD
	{
		output: {
			file: pkg.browser,
			format: "umd",
			name: "reactDynamicSheet",
			globals: {
				react: "React",
				"@emotion/styled": "styled",
				"@emotion/core": "core"
			}
		},
		plugins
	},
	{
		output: {
			file: minifyExtension(pkg.browser),
			format: "umd",
			name: "reactDynamicSheet",
			globals: {
				react: "React",
				"@emotion/styled": "styled",
				"@emotion/core": "core"
			}
		},
		plugins: [...plugins, terser()]
	},

	// ES
	{
		output: {
			file: pkg.module,
			format: "es",
			exports: "named"
		},
		plugins
	},
	{
		output: {
			file: minifyExtension(pkg.module),
			format: "es",
			exports: "named"
		},
		plugins: [...plugins, terser()]
	}
].map(conf => ({
	input,
	onwarn: discardWarning,
	treeshake: true,
	...conf
}));
