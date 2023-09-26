const express = require("express");
const route = express.Router();
const mstController = require("../controllers/MstController");

route.get("/mst_info", mstController.getMstInfo);

module.exports = route;
