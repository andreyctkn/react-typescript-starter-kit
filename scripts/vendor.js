const libsConfig = require("./libs");
const { NODE_MODULES_DIR, OUTPUTS, isProduction } = require("./constants");
const { execAsync, logError, logInfo } = require("./helpers/commands");

logInfo("concatenating libs to vendor.js...");

const vendorLibs = Object.keys(libsConfig)
    .map((lib) => {
        const currentLib = libsConfig[lib];
        const basePathForCurrentLib = `${NODE_MODULES_DIR}/${currentLib.nodeModulesPath}`;
        return `${basePathForCurrentLib}/${isProduction ? currentLib.prod : currentLib.dev}`;
    })
    .join(" ");

execAsync(`cat ${vendorLibs} > ${OUTPUTS.vendor}`)
    .then(() => logInfo(`compiled: ${OUTPUTS.vendor}`, "green"))
    .catch(logError);
