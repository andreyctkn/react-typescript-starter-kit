const express = require("express");
const morgan = require("morgan");
const { init } = require("browser-sync").create();
const { DIRS, OUTPUTS, SERVER_PORT, UI_PORT } = require("../scripts/constants");
const { routes } = require("./static");
const { AdminAPINamespace, AdminModule } = require("./admin");

const app = express();

app.use(morgan("dev"));
app.use(express.static(DIRS.output));
app.use(AdminAPINamespace, AdminModule);

app.get(routes, function(req, res) {
    res.sendFile(OUTPUTS.html);
});

app.listen(SERVER_PORT, () => {
    init({
        proxy: `localhost:${SERVER_PORT}`,
        open: false,
        port: UI_PORT,
        files: DIRS.output,
    });
});
