const vendorLibs = require("../libs");

const external = [];

const globals = Object.keys(vendorLibs).reduce((libAliases, lib) => {
    external.push(vendorLibs[lib].importName);
    libAliases[vendorLibs[lib].importName] = vendorLibs[lib].globalAlias;
    return libAliases;
}, {});

module.exports = { globals, external };
