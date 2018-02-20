const { rollup } = require("rollup");
const replace = require("rollup-plugin-replace");
const resolve = require("rollup-plugin-node-resolve");
const { compile } = require("google-closure-compiler-js");
const { globals, external } = require("./rollup.helper");
const { logError, logInfo, writeFileAsync } = require("../helpers/commands");
const { INPUTS, OUTPUTS } = require("../constants");

logInfo("creating bundle...");

rollup({
    input: INPUTS.js,
    external,
    plugins: [
        replace({
            "process.env.NODE_ENV": JSON.stringify("production"),
        }),
        resolve({ jsnext: true, modulesOnly: true }),
    ],
})
    .then((bundle) => bundle.generate({ format: "iife", globals }))
    .then(({ code }) =>
        compile({
            languageIn: "ES5",
            applyInputSourceMaps: false,
            jsCode: [{ src: code }],
        })
    )
    .then(({ compiledCode }) => writeFileAsync(OUTPUTS.bundle, compiledCode))
    .then(() => logInfo(`compiled: ${OUTPUTS.bundle}`, "green"))
    .catch(logError);
