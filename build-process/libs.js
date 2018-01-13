const vendorLibs = {
    react: {
        importName: "react",
        globalAlias: "React",
        nodeModulesPath: "react/umd",
        dev: "react.development.js",
        prod: "react.production.min.js",
    },
    reactDom: {
        importName: "react-dom",
        globalAlias: "ReactDOM",
        nodeModulesPath: "react-dom/umd",
        dev: "react-dom.development.js",
        prod: "react-dom.production.min.js",
    },
};

module.exports = vendorLibs;
