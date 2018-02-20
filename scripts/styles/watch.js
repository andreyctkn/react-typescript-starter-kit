const { execSync } = require("child_process");
const { INPUTS, OUTPUTS } = require("../constants");

execSync(`onchange 'src/**/*.scss' -- node-sass ${INPUTS.scss} ${OUTPUTS.styles}`, {
    stdio: [0, 1, 2],
});
