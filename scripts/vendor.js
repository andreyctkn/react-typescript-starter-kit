const libsConfig = require("./libs");
const { NODE_MODULES_DIR, OUTPUTS, isProduction } = require("./constants");
const { execAsync, logError, logInfo, logFileInfo } = require("./helpers/commands");

logInfo("concatenating UMD libs to vendor.js...");

const vendorLibs = Object.keys(libsConfig)
    .map((lib) => {
        let { nodeModulesPath, prod, dev, importName } = libsConfig[lib];
        logInfo(importName, "yellowBright");
        dev = !dev ? prod : dev;
        const basePathForCurrentLib = `${NODE_MODULES_DIR}/${nodeModulesPath}`;
        return `${basePathForCurrentLib}/${isProduction ? prod : dev}`;
    })
    .join(" ");

execAsync(`cat ${vendorLibs} > ${OUTPUTS.vendor}`)
    .then(() => logFileInfo(OUTPUTS.vendor))
    .catch(logError);
