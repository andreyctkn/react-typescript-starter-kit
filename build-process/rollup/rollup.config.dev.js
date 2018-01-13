const replace = require("rollup-plugin-replace");
const sourcemaps = require("rollup-plugin-sourcemaps");
const resolve = require("rollup-plugin-node-resolve");
const { globals, external } = require("./rollup.helper");
const { INPUTS, OUTPUTS } = require("../constants");

export default {
    input: INPUTS.js,
    external,
    output: {
        file: OUTPUTS.bundle,
        format: "iife",
        sourcemap: true,
        globals,
    },
    watch: {
        clearScreen: false,
        chokidar: true,
    },
    plugins: [
        replace({
            "process.env.NODE_ENV": JSON.stringify("development"),
        }),
        resolve({ jsnext: true, modulesOnly: true }),
        sourcemaps(),
    ],
};
