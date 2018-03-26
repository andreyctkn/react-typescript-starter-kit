const vendorLibs = require("../libs");

const external = [];

const globals = Object.keys(vendorLibs).reduce((libAliases, lib) => {
    let { importName, globalAlias } = vendorLibs[lib];
    globalAlias = !globalAlias ? importName : globalAlias;
    external.push(importName);
    libAliases[importName] = globalAlias;
    return libAliases;
}, {});

module.exports = { globals, external };
