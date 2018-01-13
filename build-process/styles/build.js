const { render } = require("node-sass");
const { writeFile } = require("fs");
const eyeglass = require("eyeglass");
const { promisify } = require("util");
const { logError, logInfo, writeFileAsync } = require("../helpers/commands");
const { INPUTS, OUTPUTS } = require("../constants");

const compileScss = promisify(render);

logInfo("compiling scss...");

compileScss(
    eyeglass({
        file: INPUTS.scss,
        outputStyle: "compressed",
        eyeglass: {
            enableImportOnce: true,
        },
    })
)
    .then(({ css }) => writeFileAsync(OUTPUTS.styles, css))
    .then(() => logInfo(`css complied: ${OUTPUTS.styles}`, "green"))
    .catch((error) => logError(!error.formatted ? error : error.formatted));
