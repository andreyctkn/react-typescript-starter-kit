const libsConfig = require("./libs");
const { BUILD_TYPES, DIRS } = require("./buildConstants");
const { execCommand, logInfo } = require("./helpers/bash");
const { BUILD_TYPE } = process.env;

logInfo("concatenating libs to vendor.js");

const vendorLibs = Object.keys(libsConfig)
    .map(lib => (BUILD_TYPE === BUILD_TYPES.prod ? libsConfig[lib].dev : libsConfig[lib].prod))
    .join(" ");

execCommand("cat", vendorLibs, ">", `${DIRS.output}/vendor.js`);
