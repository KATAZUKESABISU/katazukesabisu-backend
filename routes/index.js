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
    // app.get("/public/inquiries", inquiryController.getInquiriesClient);
    app.post("/public/inquiry/create", inquiryController.createInquiry);
    app.put("/public/inquiry/:id", inquiryController.updateInquiry);
    app.get("/public/inquiry/:id", inquiryController.getInquiry);
    // admin
    app.use("/api", adminRoute);
    app.get("/api/404_not_found", isAuthentication, getNotFound);
    app.use("/api/inquiry", isAuthentication, inquiryRoute);
    app.get("/api/inquiries", isAuthentication, inquiryController.getInquiries)
    app.get("/api/mst_info", isAuthentication, getMstInfo);
    app.get("/api/home_page", isAuthentication, getDataHomePage);
    app.put("/api/home_page/update", isAuthentication, updateHomePage);
    app.get("/api/about_us", isAuthentication, getAboutUs);
    app.get("/api/footer_contact", isAuthentication, getFooterContact);
    app.get("/api/flow_page", isAuthentication, getFlowPage);
    app.get("/api/common_block", isAuthentication, getCommonBlock);
    app.get("/api/service_price_infor", isAuthentication, getServicePriceInfor);
    app.get("/api/rate_plan", isAuthentication, getRatePlan);
    app.use("/api/blog", isAuthentication, blogRoute);
    app.post("/api/upload", isAuthentication, upload.single("image"), getUrlImageUpload);
}

module.exports = route;
