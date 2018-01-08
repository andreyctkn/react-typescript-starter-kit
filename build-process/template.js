const { compile } = require("handlebars");
const { DIRS, isProduction } = require("./constants");
const { logInfo, logError, readFileAsync, writeFileAsync, getHashFromLastCommit } = require("./helpers/commands");

readFileAsync("src/index.hbs", { encoding: "utf8" })
    .then(data => {
        const template = compile(data);
        const version = getHashFromLastCommit();
        return template({ version: isProduction ? "" : version });
    })
    .then(html => writeFileAsync(`${DIRS.output}/index.html`, html))
    .then(() => logInfo("template was built"))
    .catch(logError);
