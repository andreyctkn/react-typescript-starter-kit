const bs = require("browser-sync").create();
const buildConstants = require("../build-process/build-constants");

bs.watch(`${buildConstants.out}/*`).on("change", bs.reload);

bs.init({
    server: `${buildConstants.out}`
});
