const replace = require("");
const sourcemaps = require("rollup-plugin-sourcemaps");
const config = require("./rollup.helper");
const resolve = require("rollup-plugin-node-resolve");
const { getLastCommitHash } = require("../helpers/commands");
const { DIRS } = require("../constants");

export default {
    input: `${DIRS.tmp}/index.js`,
    sourcemap: true,
    globals: config.globals,
    external: config.external,
    output: {
        file: `${DIRS.output}/bundle.${getLastCommitHash()}.js`,
        format: "iife",
    },
    plugins: [
        replace({
            "process.env.NODE_ENV": JSON.stringify("production"),
        }),
        resolve({ jsnext: true, modulesOnly: true }),
        sourcemaps(),
    ],
};
