const replace = require("");
const sourcemaps = require("rollup-plugin-sourcemaps");
const config = require("./rollup.helper");
const resolve = require("rollup-plugin-node-resolve");
const buildConstants = require("./build-constants");

export default {
    input: `${buildConstants.tmpOut}/index.js`,
    sourcemap: true,
    globals: config.globals,
    external: config.external,
    output: {
        file: `${buildConstants.out}/bundle.js`,
        format: "iife",
    },
    plugins: [
        replace({
            "process.env.NODE_ENV": JSON.stringify("development"),
        }),
        resolve({ jsnext: true, modulesOnly: true }),
        sourcemaps(),
    ],
};
