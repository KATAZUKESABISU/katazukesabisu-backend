const express = require("express");
const route = express.Router();
const inquiryController = require("../controllers/InquiryController");

route.post("/create", inquiryController.createInquiry);
route.put("/:id/update", inquiryController.updateInquiry);
route.get("/:id/detail", inquiryController.getInquiry);
route.get("/", inquiryController.getInquiries);

module.exports = route;
