const blogModel = require("../models/blog_model");
const { response } = require("../utils/commonUtil");
const mstPostCommonModel = require("../models/mst_post_common_model");
const _CONF = require("../config");

module.exports.getBlog = async (req, res) => {
    const { id, perPage, currentPage } = req.params;
    try {
        if (!id) {
            const result = await response("Blog not found!", 404);
            return res.status(404).json(result);
        }
        const blog = await blogModel.findById(id);
        const totalPage = Math.ceil( await blogModel.count() / (perPage ? perPage : _CONF.PER_PAGE_DEFAULT) );
        if (!blog) {
            const result = await response("Blog not found!", 404);
            return res.status(404).json(result);
        }
        const blogData = {
            id: blog._id,
            title: blog.title,
            createDate: blog.createDate,
            image: blog.image,
            content: blog.content
        }
        let result = await response("Get detail blog successfully!", 200, blogData);
        result.currentPage = currentPage ?? 1;
        result.totalPage = totalPage;
        return res.status(200).json(result);

    } catch (error) {
        console.log(error);
        const result = await response("Something went wrong!", 500);
        return res.status(500).json(result);
    }
};

module.exports.getBlogs = async (req, res) => {
    const currentPage = req.query.currentPage || 1;
    const perPage = req.query.perPage || _CONF.PER_PAGE_DEFAULT;
    try {
        const totalPage = Math.ceil( await blogModel.count() / (perPage) );
        if (currentPage > totalPage) {
            const result = await response("CurentPage not found!", 404);
            return res.status(404).json(result);
        }

        const blogCommon = await mstPostCommonModel.findOne({ contentType: _CONF.BLOG_COMMON });
        const blog = await blogModel.find().skip(perPage * currentPage - perPage).limit(perPage);

        
        const blogData = {
            title: blogCommon.title,
            createDate: blogCommon.createDate,
            content: blog.map(item => ({
                id: item._id,
                title: item.title,
                createDate: item.createDate,
                image: item.image,
                content: item.content
            })),
        }
        let result = await response("Get list blog successfully!", 200, blogData);
        result.currentPage = currentPage;
        result.totalPage = totalPage;
        return res.status(200).json(result);
    } catch (error) {
        console.log(error);
        const result = await response("Something went wrong!", 500);
        return res.status(500).json(result);
    }
}