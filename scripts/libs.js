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
    reactRouterDOM: {
        importName: "react-router-dom",
        globalAlias: "ReactRouterDOM",
        nodeModulesPath: "react-router-dom/umd",
        dev: "react-router-dom.js",
        prod: "react-router-dom.min.js",
    },
    immutable: {
        importName: "immutable",
        globalAlias: "Immutable",
        nodeModulesPath: "immutable/dist",
        dev: "immutable.js",
        prod: "immutable.min.js",
    },
    moment: {
        importName: "moment",
        nodeModulesPath: "moment/min",
        prod: "moment.min.js",
    },
};

module.exports = vendorLibs;
