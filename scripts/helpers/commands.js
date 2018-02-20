const chalk = require("chalk");
const { exec } = require("child_process");
const { readFile, writeFile } = require("fs");
const { promisify } = require("util");

const execAsync = promisify(exec);
const readFileAsync = promisify(readFile);
const writeFileAsync = promisify(writeFile);

function logInfo(info, color = "cyan") {
    console.log(chalk`{${color} ${info}}`);
}

function logError(error) {
    console.log(chalk`{red ${error}}`);
}

function logBuildStep(buldStep, message) {
    console.log(`Current build step: ${chalk.red(buldStep)}\n${chalk.cyan(`This step provides ${message}`)}`);
}

module.exports = {
    logInfo,
    logError,
    logBuildStep,
    execAsync,
    readFileAsync,
    writeFileAsync,
};
