const express = require("express");
const route = express.Router();
const blogController = require("../controllers/BlogController");

route.post("/create", blogController.createBlog);
route.put("/:id/update", blogController.updateBlog);
route.get("/:id", blogController.getBlog);
route.get("/", blogController.getBlogs);

module.exports = route;
