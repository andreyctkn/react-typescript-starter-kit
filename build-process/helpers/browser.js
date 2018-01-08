const { execAsync, logError } = require("./commands");
const { UI_PORT } = require("../constants");

setTimeout(() => {
    execAsync(`open http://localhost:${UI_PORT}`).catch(error =>
        logError(`Failed to open browser with error:\n${error}`)
    );
}, 3000);
