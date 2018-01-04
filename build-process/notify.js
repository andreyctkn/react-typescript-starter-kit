const { logBuildStep } = require("./helpers/bash");
const { BUILD_TYPES } = require("./buildConstants");
const { BUILD_TYPE } = process.env;

switch (BUILD_TYPE) {
    case BUILD_TYPES.start:
        logBuildStep("start", "watch mode and run mock server");
        break;
    case BUILD_TYPES.dev:
        logBuildStep("development", "unminified code with source maps");
        break;
    case BUILD_TYPES.prod:
        logBuildStep("production", "minified version of js and css");
        break;
}
