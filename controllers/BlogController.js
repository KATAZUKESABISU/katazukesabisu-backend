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
    const sortItem = req.query.sortItem || _CONF.SORT_ITEM_DEFAULT_DATE;
    const sortOrder = req.query.sortOrder || _CONF.SORT_ORDER_DEFAULT_DESC;
    const title = req.query.title;
    try {
        const condition = title ? { title: title } : {};
        const totalPage = Math.ceil(
            (await blogModel.count(condition)) / perPage
        );
        if (currentPage > totalPage || currentPage < 1) {
            const result = await response("CurentPage not found!", 404);
            return res.status(404).json(result);
        }

        const blogCommon = await mstPostCommonModel.findOne({
            contentType: _CONF.BLOG_COMMON,
        });
        let sortBlog = {};
        if (sortItem == _CONF.SORT_ITEM_DEFAULT_DATE) {
            sortBlog = {
                createDate: sortOrder,
            };
        } else if (sortItem == _CONF.SORT_ITEM_PUBLISH) {
            sortBlog = {
                publish: sortOrder,
                createDate: _CONF.SORT_ORDER_DESC,
            };
        }
        const blog = await blogModel
            .find(condition)
            .sort(sortBlog)
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
                publish: item.publish,
            })),
        };
        let result = await response(
            "Get list blog successfully!",
            200,
            "Blog",
            blogData
        );
        result.currentPage = currentPage;
        result.totalPage = totalPage;
        return res.status(200).json(result);
    } catch (error) {
        console.log(error);
        const result = await response("Something went wrong!", 500);
        return res.status(500).json(result);
    }
};

module.exports.createBlog = async (req, res) => {};

module.exports.updateBlog = async (req, res) => {};
