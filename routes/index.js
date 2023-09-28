const { isAuthentication } = require("../middleware");
const adminRoute = require("./admin");
const inquiryRoute = require("./inquiry");
const inquiryController = require("../controllers/InquiryController");
const {
    getMstInfo,
    getDataHomePage,
    getAboutUs,
    getFooterContact,
    getFlowPage,
} = require("../controllers/MstController");
const { getNotFound } = require("../utils/commonUtil");

function route(app) {
    // client
    app.get("/public/404_not_found", getNotFound);
    app.get("/public/inquiry/:id/detail", inquiryController.getInquiry);
    app.get("/public/inquiries", inquiryController.getInquiries);
    app.get("/public/mst_info", getMstInfo);
    app.get("/public/home_page", getDataHomePage);
    app.get("/public/about_us", getAboutUs);
    app.get("/public/footer_contact", getFooterContact);
    app.get("/public/flow_page", getFlowPage);
    // admin
    app.use("/api", adminRoute);
    app.use(isAuthentication);
    app.get("/api/404_not_found", getNotFound);
    app.use("/api/inquiry", inquiryRoute);
    app.get("/api/mst_info", getMstInfo);
    app.get("/api/home_page", getDataHomePage);
}

module.exports = route;
