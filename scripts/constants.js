const { execSync } = require("child_process");
const { BUILD_TYPE, PORT } = process.env;

const DIRS = {
    output: "dist/build",
    // internal temporary folder
    tmp: "dist/_tmp",
    root: "src",
};

const BUILD_TYPES = {
    start: "start",
    dev: "dev",
    prod: "prod",
};

const isProduction = BUILD_TYPE === BUILD_TYPES.prod;
const SERVER_PORT = PORT || 3000;
const UI_PORT = SERVER_PORT + 80;
const NODE_MODULES_DIR = "node_modules";
const HASH_FROM_LAST_COMMIT = execSync("git rev-parse HEAD")
    .toString()
    .trim();
const HASH_FOR_FILE_NAME = `${isProduction ? `.${HASH_FROM_LAST_COMMIT}` : ""}`;

const INPUTS = {
    js: `${DIRS.tmp}/index.js`,
    hbs: `${DIRS.root}/index.hbs`,
};

const OUTPUTS = {
    html: `${DIRS.output}/index.html`,
    // vendor contains only libs
    vendor: `${DIRS.output}/vendor${HASH_FOR_FILE_NAME}.js`,
    // bundle contains only app logic
    bundle: `${DIRS.output}/bundle${HASH_FOR_FILE_NAME}.js`,
};

module.exports = {
    DIRS,
    BUILD_TYPES,
    SERVER_PORT,
    UI_PORT,
    NODE_MODULES_DIR,
    INPUTS,
    OUTPUTS,
    HASH_FOR_FILE_NAME,
    isProduction,
};
