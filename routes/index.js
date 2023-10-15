const { isAuthentication, getUrlImageUpload } = require("../middleware");
const multer = require("multer");
const { storage } = require("../cloudinary");
const upload = multer({ storage });
const adminRoute = require("./admin");
const inquiryRoute = require("./inquiry");
const blogRoute = require("./blog");
const inquiryController = require("../controllers/InquiryController");
const {
    getMstInfo,
    getMstInfoClient,
    getDataHomePage,
    getDataHomePageClient,
    updateHomePage,
    getAboutUs,
    getAboutUsClient,
    getFooterContact,
    getFooterContactClient,
    getFlowPage,
    getFlowPageClient,
    getCommonBlock,
    getCommonBlockClient,
    getServicePriceInfor,
    getServicePriceInforClient,
    getRatePlan,
    getRatePlanClient,
} = require("../controllers/MstController");
const { getNotFound, getNotFoundClient } = require("../utils/commonUtil");
const {
    getBlogClient,
    getBlogsClient,
} = require("../controllers/BlogController");

function route(app) {
    // client
    app.get("/public/404_not_found", getNotFoundClient);
    app.get("/public/inquiries", inquiryController.getInquiriesClient);
    app.get("/public/mst_info", getMstInfoClient);
    app.get("/public/home_page", getDataHomePageClient);
    app.get("/public/about_us", getAboutUsClient);
    app.get("/public/footer_contact", getFooterContactClient);
    app.get("/public/flow_page", getFlowPageClient);
    app.get("/public/common_block", getCommonBlockClient);
    app.get("/public/service_price_infor", getServicePriceInforClient);
    app.get("/public/rate_plan", getRatePlanClient);
    app.get("/public/list_blog", getBlogsClient);
    app.get("/public/blog/:id", getBlogClient);
    // admin
    app.use("/api", adminRoute);
    app.use(isAuthentication);
    app.get("/api/404_not_found", getNotFound);
    app.use("/api/inquiry", inquiryRoute);
    app.get("/api/mst_info", getMstInfo);
    app.get("/api/home_page", getDataHomePage);
    app.put("/api/home_page/update", updateHomePage);
    app.get("/api/about_us", getAboutUs);
    app.get("/api/footer_contact", getFooterContact);
    app.get("/api/flow_page", getFlowPage);
    app.get("/api/common_block", getCommonBlock);
    app.get("/api/service_price_infor", getServicePriceInfor);
    app.get("/api/rate_plan", getRatePlan);
    app.use("/api/blog", blogRoute);
    app.post("/api/upload", upload.single("image"), getUrlImageUpload);
}

module.exports = route;
