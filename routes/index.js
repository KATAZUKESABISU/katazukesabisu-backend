const adminRoute = require("./admin");
const inquiryRoute = require("./inquiry");
const { getMstInfo, getDataHomePage } = require("../controllers/MstController");
const { getNotFound } = require("../utils/commonUtil");

function route(app) {
    app.use("/api/public/404_not_found", getNotFound);
    app.use("/api/inquiry", inquiryRoute);
    app.use("/api/mst_info", getMstInfo);
    app.use("/api/home_page", getDataHomePage);
    app.use("/api", adminRoute);
}

module.exports = route;
