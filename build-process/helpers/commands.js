const chalk = require("chalk");
const { exec, execSync } = require("child_process");
const { readFile, writeFile } = require("fs");
const { promisify } = require("util");

const execAsync = promisify(exec);
const readFileAsync = promisify(readFile);
const writeFileAsync = promisify(writeFile);

function logInfo(info) {
    console.log(chalk`{cyan ${info}} \n`);
}

function logError(error) {
    console.log(chalk`{red ${error}}`);
}

function logBuildStep(buldStep, message) {
    console.log(
        `Current build step: ${chalk.red(buldStep)}\n${chalk.cyan(`This step provides ${message}`)}`
    );
}

function getHashFromLastCommit() {
    return execSync("git rev-parse HEAD")
        .toString()
        .trim();
}

module.exports = {
    logInfo,
    logError,
    logBuildStep,
    execAsync,
    readFileAsync,
    writeFileAsync,
    getHashFromLastCommit,
};
