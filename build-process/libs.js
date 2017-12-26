const path = require('path');

const npm = 'node_modules';

const vendorLibs = {
	react: {
		importName: 'react',
		globalAlias: 'React',
		dev: `${npm}/react/umd/react.development.js`,
		prod: `${npm}/react/umd/react.production.min.js`,
	},
	reactDom: {
		importName: 'react-dom',
		globalAlias: 'ReactDOM',
		dev: `${npm}/react-dom/umd/react-dom.development.js`,
		prod: `${npm}/react-dom/umd/react-dom.production.min.js`,
	},
};

module.exports = vendorLibs;
