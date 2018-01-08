const libsConfig = require("./libs");
const { BUILD_TYPES, DIRS, isProduction } = require("./constants");
const { execAsync, logInfo, getHashFromLastCommit } = require("./helpers/commands");

logInfo("concatenating libs to vendor.js");

const vendorLibs = Object.keys(libsConfig)
    .map(lib => (isProduction ? libsConfig[lib].dev : libsConfig[lib].prod))
    .join(" ");

const vendorName = `vendor${isProduction ? "" : `.${getHashFromLastCommit()}`}`;

execAsync(`cat ${vendorLibs} > ${DIRS.output}/${vendorName}.js`);
