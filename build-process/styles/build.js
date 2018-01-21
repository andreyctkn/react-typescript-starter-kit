const { writeFile } = require("fs");
const { promisify } = require("util");
const { render, info } = require("node-sass");
const { minify } = require("csso");
const eyeglass = require("eyeglass");
const { logError, logInfo, writeFileAsync } = require("../helpers/commands");
const { INPUTS, OUTPUTS } = require("../constants");

const compileScss = promisify(render);

logInfo(info);
logInfo("compiling scss...");

compileScss(
    eyeglass({
        file: INPUTS.scss,
        eyeglass: {
            enableImportOnce: true,
        },
    })
)
    .then(({ css }) => minify(css, { restructure: false }))
    .then(({ css }) => writeFileAsync(OUTPUTS.styles, css))
    .then(() => logInfo(`css complied: ${OUTPUTS.styles}`, "green"))
    .catch((error) => logError(!error.formatted ? error : error.formatted));
