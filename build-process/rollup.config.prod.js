const replace = require("rollup-plugin-replace");
const sourcemaps = require('rollup-plugin-sourcemaps');
const config = require("./rollup.helper");
const resolve = require('rollup-plugin-node-resolve');

export default {
    entry: "dist/_temp/index.js",
    dest: "dist/build/bundle.js",
    format: "iife",
    sourceMap: true,
    globals: config.globals,
    external: config.external,
    plugins: [
        replace({
            "process.env.NODE_ENV": JSON.stringify("production")
        }),
        resolve({ jsnext: true, modulesOnly: true }),
        sourcemaps()
    ]
}
