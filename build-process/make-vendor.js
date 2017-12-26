const libsConfig = require('./libs');
const buildConstants = require('./build-constants');
const { execCommand, logInfo } = require('./helpers/bash');
const { BUILD_TYPE } = process.env;

logInfo('concatenating libs to vendor.js');

const vendorLibs = Object.keys(libsConfig)
	.map(lib => BUILD_TYPE === 'production' ? libsConfig[lib].dev : libsConfig[lib].prod)
	.join(' ');

execCommand('cat', vendorLibs, '>', `${buildConstants.out}/vendor.js`);
