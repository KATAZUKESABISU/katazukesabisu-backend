const blogModel = require("../models/blog_model");
const { response } = require("../utils/commonUtil");
const mstPostCommonModel = require("../models/mst_post_common_model");
const _CONF = require("../config");

module.exports.getBlog = async (req, res) => {
    const { id } = req.params;
    try {
        if (!id) {
            const result = await response("Blog not found!", 404);
            return res.status(404).json(result);
        }
        const blog = await blogModel.findById(id);
        if (!blog) {
            const result = await response("Blog not found!", 404);
            return res.status(404).json(result);
        }
        const blogData = {
            id: blog._id,
            title: blog.title,
            createDate: blog.createDate,
            image: blog.image,
            content: blog.content,
            published: blog.published,
        };
        const result = await response(
            "Get detail blog successfully!",
            200,
            "blog_detail",
            blogData
        );
        return res.status(200).json(result);
    } catch (error) {
        console.log(error);
        const result = await response("Something went wrong!", 500);
        return res.status(500).json(result);
    }
};

module.exports.getBlogClient = async (req, res) => {
    const { id } = req.params;
    console.log(id);
    try {
        if (!id) {
            const result = await response("Blog not found!", 404);
            return res.status(404).json(result);
        }
        const blog = await blogModel.findOne({ _id: id, published: true });
        if (!blog) {
            const result = await response("Blog not found!", 404);
            return res.status(404).json(result);
        }
        const blogData = {
            id: blog._id,
            title: blog.title,
            createDate: blog.createDate,
            image: blog.image,
            content: blog.content,
        };
        const result = await response(
            "Get detail blog successfully!",
            200,
            "blog_detail",
            blogData
        );
        return res.status(200).json(result);
    } catch (error) {
        console.log(error);
        const result = await response("Something went wrong!", 500);
        return res.status(500).json(result);
    }
};

module.exports.getBlogs = async (req, res) => {
    const currentPage = req.query.currentPage || 1;
    const perPage = req.query.limit || _CONF.PER_PAGE_DEFAULT;
    const published = req.query.published;
    const title = req.query.title;
    try {
        let condition = title ? { title: title } : {};
        if (published) {
            condition.published = published;
        }
        const totalRecord = await blogModel.count(condition);
        let totalPage = Math.ceil(totalRecord / perPage);
        totalPage = totalPage == 0 ? 1 : totalPage;
        if (currentPage > totalPage || currentPage < 1) {
            const result = await response("CurentPage not found!", 404);
            return res.status(404).json(result);
        }
        const blogCommon = await mstPostCommonModel.findOne({
            contentType: _CONF.BLOG_COMMON,
        });
        const blog = await blogModel
            .find(condition)
            .sort({ createDate: _CONF.SORT_ORDER_DESC })
            .skip(perPage * currentPage - perPage)
            .limit(perPage);

        const blogData = {
            title: blogCommon.title,
            createDate: blogCommon.createDate,
            content: blog.map((item) => ({
                id: item._id,
                title: item.title,
                createDate: item.createDate,
                image: item.image,
                content: item.content,
                published: item.published,
            })),
        };
        let result = await response(
            "Get list blog successfully!",
            200,
            "blogs",
            blogData
        );
        result.totalRecord = totalRecord;
        result.currentPage = currentPage;
        result.totalPage = totalPage;
        return res.status(200).json(result);
    } catch (error) {
        console.log(error);
        const result = await response("Something went wrong!", 500);
        return res.status(500).json(result);
    }
};

module.exports.getBlogsClient = async (req, res) => {
    const currentPage = req.query.currentPage || 1;
    const perPage = req.query.limit || _CONF.PER_PAGE_DEFAULT;
    try {
        const totalRecord = await blogModel.count({ published: true });
        let totalPage = Math.ceil(totalRecord / perPage);
        totalPage = totalPage == 0 ? 1 : totalPage;
        if (currentPage > totalPage || currentPage < 1) {
            const result = await response("CurentPage not found!", 404);
            return res.status(404).json(result);
        }
        const blogCommon = await mstPostCommonModel.findOne({
            contentType: _CONF.BLOG_COMMON,
        });
        const blog = await blogModel
            .find({ published: true })
            .sort({ createDate: _CONF.SORT_ORDER_DESC })
            .skip(perPage * currentPage - perPage)
            .limit(perPage);

        const blogData = {
            title: blogCommon.title,
            createDate: blogCommon.createDate,
            content: blog.map((item) => ({
                id: item._id,
                title: item.title,
                createDate: item.createDate,
                image: item.image,
                content: item.content.slice(0, 1000),
            })),
        };
        let result = await response(
            "Get list blog successfully!",
            200,
            "blogs",
            blogData
        );
        result.totalRecord = totalRecord;
        result.currentPage = currentPage;
        result.totalPage = totalPage;
        return res.status(200).json(result);
    } catch (error) {
        console.log(error);
        const result = await response("Something went wrong!", 500);
        return res.status(500).json(result);
    }
};

module.exports.createBlog = async (req, res) => {
    const { title, image, content, published } = req.body;
    try {
        const doc = await new blogModel({
            title: title,
            createDate: new Date(),
            image: image,
            content: content,
            published: published,
        }).save();
        const result = await response("Create successfully!", 200, null, {
            id: doc._id,
        });
        return res.status(200).json(result);
    } catch (error) {
        console.log(error);
        const result = await response("Something went wrong!", 500);
        return res.status(500).json(result);
    }
};

module.exports.updateBlog = async (req, res) => {
    const { id, title, image, content, published } = req.body;
    try {
        await blogModel.findByIdAndUpdate(id, {
            title: title,
            createDate: new Date(),
            image: image,
            content: content,
            published: published,
        });
        const result = await response("Update successfully!", 200, null, {
            id: id,
        });
        return res.status(200).json(result);
    } catch (error) {
        console.log(error);
        const result = await response("Something went wrong!", 500);
        return res.status(500).json(result);
    }
};

module.exports.deleteBlog = async (req, res) => {
    const { id } = req.body;
    try {
        const doc = await blogModel.findByIdAndDelete(id);
        if (!doc) {
            const result = await response("Blog not found!", 404);
            return res.status(404).json(result);
        }
        const result = await response("Deleted successfully!", 200, null, {
            id: doc._id,
        });
        return res.status(200).json(result);
    } catch (error) {
        console.log(error);
        const result = await response("Something went wrong!", 500);
        return res.status(500).json(result);
    }
};
