const express = require("express");
const morgan = require("morgan");
const { init } = require("browser-sync").create();
const { DIRS, SERVER_PORT, UI_PORT } = require("../build-process/constants");

const app = express();

app.use(morgan("dev"));
app.use(express.static(DIRS.output));

app.listen(SERVER_PORT, () => {
    init({
        proxy: `localhost:${SERVER_PORT}`,
        open: false,
        port: UI_PORT,
        files: DIRS.output,
    });
});
