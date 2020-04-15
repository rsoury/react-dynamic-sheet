const path = require("path");

module.exports.alias = {
	"@": path.resolve(__dirname, "../src"),
	"@tests": path.resolve(__dirname, "../tests")
};

module.exports.jestModuleNameMapper = {
	"^@(tests/)(.*)$": "<rootDir>/tests/$2",
	"^@(/)(.*)$": "<rootDir>/src/$2"
};
