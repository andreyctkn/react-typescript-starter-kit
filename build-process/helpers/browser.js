const { execAsync } = require("./commands");
const { UI_PORT } = require("../constants");

setTimeout(function() {
    const url = `http://localhost:${UI_PORT}`;
    execAsync(`open ${url}`).catch(error => `Failed to open browser. with error ${error}`);
}, 3000);
