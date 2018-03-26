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
    console.log(
        `${chalk.yellow("Current build step")}: ${chalk.red.bold(buldStep)}\n${chalk.cyan(
            `This step provides ${message}`
        )}`
    );
}

function logFileInfo(file) {
    return execAsync(`du -h ${file}`).then(({ stdout }) => logInfo(`compiled:\nsize: ${stdout}`, "green"));
}

module.exports = {
    logInfo,
    logError,
    logFileInfo,
    logBuildStep,
    execAsync,
    readFileAsync,
    writeFileAsync,
};
