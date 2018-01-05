const chalk = require("chalk");
const { exec, execSync } = require("child_process");
const { readFile, writeFile } = require("fs");
const { promisify } = require("util");

const promisedExec = promisify(exec);
const promisedReadFile = promisify(readFile);
const promisedWriteFile = promisify(writeFile);

function logInfo(info) {
    console.log(chalk`{cyan ${info}} \n`);
}

function logError(error) {
    console.log(chalk`{red ${error}}`);
}

function logBuildStep(buldStep, message) {
    console.log(`Current build step: ${chalk.red(buldStep)}\n${chalk.cyan(`This step provides ${message}`)}`);
}

function readFileAsync(file) {
    return promisedReadFile(file, { encoding: "utf8" }).catch(logError);
}

function writeFileAsync(file, data) {
    return promisedWriteFile(file, data).catch(logError);
}

function execAsync(command) {
    return promisedExec(command);
}

function getLastCommitHash() {
    return execSync("git rev-parse HEAD")
        .toString()
        .trim();
}

module.exports = { logInfo, logBuildStep, logError, readFileAsync, writeFileAsync, execAsync, getLastCommitHash };
