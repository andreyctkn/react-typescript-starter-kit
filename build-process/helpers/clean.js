const { execSync } = require("child_process");
const { resolve } = require("path");
const { DIRS } = require("../constants");
const { logInfo } = require("./commands");

logInfo(`removing output folder: ${resolve(DIRS.output)}`);

execSync(`rm -rf ${DIRS.output} && mkdir -p ${DIRS.output}`);

logInfo(`removing internal temporary folder: ${resolve(DIRS.tmp)}`);

execSync(`rm -rf ${DIRS.tmp} && mkdir -p ${DIRS.tmp}`);
