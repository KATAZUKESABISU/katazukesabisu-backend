const { isAuthentication } = require("../middleware");
const adminRoute = require("./admin");
const inquiryRoute = require("./inquiry");
const blogRoute = require("./blog");
const inquiryController = require("../controllers/InquiryController");
const {
    getMstInfo,
    getDataHomePage,
    getAboutUs,
    getFooterContact,
    getFlowPage,
    getCommonBlock,
    getServicePriceInfor,
    getRatePlan,
} = require("../controllers/MstController");
const { getNotFound } = require("../utils/commonUtil");
const { getBlog, getBlogs } = require("../controllers/BlogController");

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
    app.get("/public/common_block", getCommonBlock);
    app.get("/public/service_price_infor", getServicePriceInfor);
    app.get("/public/rate_plan", getRatePlan);
    app.get("/public/list_blog", getBlogs);
    app.get("/public/blog/:id", getBlog);
    // admin
    app.use("/api", adminRoute);
    app.use(isAuthentication);
    app.get("/api/404_not_found", getNotFound);
    app.use("/api/inquiry", inquiryRoute);
    app.get("/api/mst_info", getMstInfo);
    app.get("/api/home_page", getDataHomePage);
    app.use("/api/blog", blogRoute);
}

module.exports = route;
