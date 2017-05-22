const path = require("path");

const npm = "node_modules";

const vendorLibs = {
    react: {
        importName: "react",
        globalAlias: "React",
        path: path.resolve(`${npm}/react/dist/react.js`),
        minPath: path.resolve(`${npm}/react/dist/react.min.js`)
    },
    reactDom: {
        importName: "react-dom",
        globalAlias: "ReactDOM",
        path: path.resolve(`${npm}/react-dom/dist/react-dom.js`),
        minPath: path.resolve(`${npm}/react-dom/dist/react-dom.min.js`)
    }
};

module.exports = vendorLibs;
