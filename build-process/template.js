const { compile } = require("handlebars");
const { INPUTS, OUTPUTS, HASH_FOR_FILE_NAME } = require("./constants");
const { logInfo, logError, readFileAsync, writeFileAsync } = require("./helpers/commands");

logInfo("building template...");

readFileAsync(INPUTS.hbs, { encoding: "utf8" })
    .then((data) => {
        const template = compile(data);
        return template({ version: HASH_FOR_FILE_NAME });
    })
    .then((html) => writeFileAsync(OUTPUTS.html, html))
    .then(() => logInfo(`template was built: ${OUTPUTS.html}`, "green"))
    .catch(logError);
