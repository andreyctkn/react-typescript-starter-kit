const vendorLibs = require("./libs");

const externals = [];

const globals = Object.keys(vendorLibs).reduce((libAliases, lib) => {
    externals.push(vendorLibs[lib].importName);
    libAliases[vendorLibs[lib].importName] = vendorLibs[lib].globalAlias;
    return libAliases;
}, {});

module.exports = {
    globals: globals,
    external: externals
};
