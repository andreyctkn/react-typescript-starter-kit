const replace = require("rollup-plugin-replace");
const sourcemaps = require("rollup-plugin-sourcemaps");
const { globals, external } = require("./rollup.helper");
const resolve = require("rollup-plugin-node-resolve");
const { DIRS } = require("../constants");

export default {
    input: `${DIRS.tmp}/index.js`,
    external,
    output: {
        file: `${DIRS.output}/bundle.js`,
        format: "iife",
        sourcemap: true,
        globals,
    },
    plugins: [
        replace({
            "process.env.NODE_ENV": JSON.stringify("development"),
        }),
        resolve({ jsnext: true, modulesOnly: true }),
        sourcemaps(),
    ],
};
