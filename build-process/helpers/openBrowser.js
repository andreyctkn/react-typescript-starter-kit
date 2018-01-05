const { execAsync } = require("./node");
const { UI_PORT } = require("../buildConstants");

setTimeout(function() {
    const url = `http://localhost:${UI_PORT}`;
    execAsync(`open ${url}`).catch(error => `Failed to open browser. with error ${error}`);
}, 3000);
