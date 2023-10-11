const inquiryModel = require("../models/inquiry_model");
const { response } = require("../utils/commonUtil");

module.exports.createInquiry = async (req, res) => {
    const inquiry = req.body;
    try {
        const id = (await inquiryModel.create({ ...inquiry }))._id;
        const data = {
            id,
        };
        const result = await response("Create successfully!", 200, null, data);
        return res.status(200).json(result);
    } catch (error) {
        console.log(error);
        const result = await response("Something went wrong!", 500);
        return res.status(500).json(result);
    }
};

module.exports.updateInquiry = async (req, res) => {
    const id = req.body._id;
    const inquiry = req.body;
    try {
        await inquiryModel.findByIdAndUpdate(id, { ...inquiry });
        const data = {
            id,
        };
        const result = await response("Update successfully!", 200, null, data);
        return res.status(200).json(result);
    } catch (error) {
        console.log(error);
        const result = await response("Something went wrong!", 500);
        return res.status(500).json(result);
    }
};

module.exports.getInquiry = async (req, res) => {
    const { id } = req.params;
    try {
        const inquiry = await inquiryModel.findById(id);
        const result = await response(
            "Get detail inquiry successfully!",
            200,
            'inquiry_details',
            inquiry
        );
        return res.status(200).json(result);
    } catch (error) {
        console.log(error);
        const result = await response("Something went wrong!", 500);
        return res.status(500).json(result);
    }
};

module.exports.getInquiries = async (req, res) => {
    try {
        const inquiries = await inquiryModel.find({});
        const result = await response(
            "Get list inquiry successfully!",
            200,
            'inquiries',
            inquiries
        );
        return res.status(200).json(result);
    } catch (error) {
        console.log(error);
        const result = await response("Something went wrong!", 500);
        return res.status(500).json(result);
    }
};
