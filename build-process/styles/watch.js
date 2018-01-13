const { execSync } = require("child_process");
const { INPUTS, OUTPUTS } = require("../constants");

execSync(`node-sass ${INPUTS.scss} ${OUTPUTS.styles} --w`, { stdio: [0, 1, 2] });
