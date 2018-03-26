const { rollup } = require("rollup");
const replace = require("rollup-plugin-replace");
const resolve = require("rollup-plugin-node-resolve");
const commonjs = require("rollup-plugin-commonjs");
const { minify } = require("uglify-js");
const { globals, external } = require("./rollup.helper");
const { logError, logInfo, logFileInfo, writeFileAsync } = require("../helpers/commands");
const { INPUTS, OUTPUTS } = require("../constants");

logInfo("creating bundle...");

rollup({
    input: INPUTS.js,
    external,
    plugins: [
        replace({
            "process.env.NODE_ENV": JSON.stringify("production"),
        }),
        resolve({ jsnext: true }),
        commonjs(),
    ],
})
    .then((bundle) => bundle.generate({ format: "iife", globals }))
    .then(({ code }) => minify(code))
    .then(({ code, error }) => (error ? Promise.reject(error) : writeFileAsync(OUTPUTS.bundle, code)))
    .then(() => logFileInfo(OUTPUTS.bundle))
    .catch(logError);
