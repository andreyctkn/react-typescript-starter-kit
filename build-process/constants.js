const DIRS = {
    output: "dist/build",
    tmp: "dist/_tmp",
};

const BUILD_TYPES = {
    start: "start",
    dev: "dev",
    prod: "prod",
};

const SERVER_PORT = process.env.PORT || 3000;
const UI_PORT = SERVER_PORT + 80;

const isProduction = () => BUILD_TYPE === BUILD_TYPES.prod;

module.exports = { DIRS, BUILD_TYPES, SERVER_PORT, UI_PORT, isProduction };
