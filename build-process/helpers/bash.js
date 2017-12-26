const chalk = require('chalk');
const { promisify } = require('util');
const { exec } = require('child_process');

const promisedExec = promisify(exec);

function logInfo(info) {
	console.log(chalk`{cyan ${info}} \n`);
}

async function execCommand(...options) {
	try {
		const { stdout, stderr } = await promisedExec(options.join(' '));
		if (stdout) {
			console.log(`${stdout}`);
		}
		if (stderr) {
			console.log(`${stderr}`);
		}
	} catch (error) {
		console.log(chalk`{red ${error}}`);
	}
}

module.exports = { execCommand, logInfo };
