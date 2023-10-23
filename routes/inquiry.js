const express = require("express");
const route = express.Router();
const inquiryController = require("../controllers/InquiryController");

// route.post("/create", inquiryController.createInquiry);
route.put("/:id", inquiryController.updateInquiry);
route.get("/:id", inquiryController.getInquiry);
// route.get("/", inquiryController.getInquiries);

module.exports = route;
