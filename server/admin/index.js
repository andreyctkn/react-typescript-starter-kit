const express = require("express");
const listData = require("./list/GET.json");

const AdminModule = express.Router();
const AdminAPINamespace = "/api/v1/";

AdminModule.get("/users", function(req, res) {
    res.send({ data: listData });
});

module.exports = { AdminAPINamespace, AdminModule };
