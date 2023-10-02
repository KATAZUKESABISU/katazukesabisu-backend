const inquiryModel = require("../models/inquiry_model");

module.exports.createInquiry = async (req, res) => {
    const data = req.body;
    try {
        const result = await inquiryModel.create({ ...data });
        return res.status(200).json({
            message: "create successfully!",
            data: {
                id: result._id,
            }
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Something went wrong!" });
    }
};

module.exports.updateInquiry = async (req, res) => {
    const id = req.body._id;
    const data = req.body;
    try {
        await inquiryModel.findByIdAndUpdate(id, { ...data });
        return res.status(200).json({
            message: "update successfully!",
            data: {
                id
            }
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Something went wrong!" });
    }
};

module.exports.getInquiry = async (req, res) => {
    const { id } = req.params;
    try {
        const inquiry = await inquiryModel.findById(id);
        return res.status(200).json({
            message: "Get detail inquiry successfully!",
            data: {
                inquiry,
            }
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Something went wrong!" });
    }
};

module.exports.getInquiries = async (req, res) => {
    try {
        const inquiries = await inquiryModel.find({});
        return res.status(200).json({
            message: "Get list inquiry successfully!",
            data: {
                inquiries,
            }
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Something went wrong!" });
    }
};
