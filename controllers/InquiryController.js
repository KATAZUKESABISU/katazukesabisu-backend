const inquiryModel = require("../models/inquiry_model");
const { response } = require("../utils/commonUtil");

module.exports.createInquiry = async (req, res) => {
    const inquiry = req.body;
    try {
        const data = {
            inquiryItem: inquiry.inquiryItem,
            requestContent: JSON.stringify(inquiry.requestContent),
            name: inquiry.name,
            furigana: inquiry.furigana || "",
            emailAddress: inquiry.emailAddress,
            address: inquiry.address || "",
            telephoneNumber: inquiry.telephoneNumber,
            preferredContact: JSON.stringify(inquiry.preferredContact),
            contentOfInquiry: inquiry.contentOfInquiry || "",
            createAt: new Date().getTime()
        }
        const id = (await inquiryModel.create(data))._id;
        const result = await response("Create successfully!", 200, null, { id });
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
        const doc = await inquiryModel.findByIdAndUpdate(id, { ...inquiry });
        if (!doc) {
            const result = await response("Inquiry not found!", 404);
            return res.status(404).json(result);
        }
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
        if (!id) {
            const result = await response("Id inquiry is required!", 400);
            return res.status(400).json(result);
        }
        const doc = await inquiryModel.findById(id);
        if (!doc) {
            const result = await response("Inquiry not found!", 404);
            return res.status(404).json(result);
        }
        const inquiry = {
            id: doc._id,
            inquiryItem: doc.inquiryItem,
            requestContent: JSON.parse(doc.requestContent),
            name: doc.name,
            furigana: doc.furigana,
            emailAddress: doc.emailAddress,
            address: doc.address,
            telephoneNumber: doc.telephoneNumber,
            preferredContact: JSON.parse(doc.preferredContact),
            contentOfInquiry: doc.contentOfInquiry,
        }
        const result = await response(
            "Get detail inquiry successfully!",
            200,
            "inquiry_details",
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
        const inquiries = await inquiryModel.find();
        const result = await response(
            "Get list inquiry successfully!",
            200,
            "inquiries",
            inquiries
        );
        return res.status(200).json(result);
    } catch (error) {
        console.log(error);
        const result = await response("Something went wrong!", 500);
        return res.status(500).json(result);
    }
};

module.exports.getInquiriesClient = async (req, res) => {
    try {
        const inquiries = await inquiryModel.find();
        const result = await response(
            "Get list inquiry successfully!",
            200,
            "inquiries",
            inquiries
        );
        return res.status(200).json(result);
    } catch (error) {
        console.log(error);
        const result = await response("Something went wrong!", 500);
        return res.status(500).json(result);
    }
};
