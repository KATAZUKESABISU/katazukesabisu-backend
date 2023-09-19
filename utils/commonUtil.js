const _CONF = require("../config");
const nodemailer = require("nodemailer");
const mstPostCommonModel = require("../models/mst_post_common_model");
const { cloudinary } = require("../cloudinary");

module.exports.sendMail = async (subject, content, email) => {
    try {
        const transporter = nodemailer.createTransport({
            host: _CONF.HOST,
            port: _CONF.PORT,
            auth: {
                user: _CONF.GMAIL_EMAIL,
                pass: _CONF.GMAIL_PASSWORD,
            },
            secureConnection: "false",
            tls: {
                ciphers: "SSLv3",
            },
        });

        const mailOption = {
            from: `${_CONF.PROJECT_NAME} <${_CONF.GMAIL_EMAIL}>`,
            to: email,
            subject: subject,
            html: content,
        };

        await transporter.sendMail(mailOption);
    } catch (error) {
        console.log(error);
        throw error;
    }
};

module.exports.getNotFound = async (req, res) => {
    try {
        const errorNotFound = await mstPostCommonModel.findOne({
            type: _CONF.NOT_FOUND,
        });
        return res.status(404).json({
            title: errorNotFound.title,
            createDate: errorNotFound.createDate,
            content: JSON.parse(errorNotFound.content),
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Something went wrong!" });
    }
};

module.exports.uploadImage = async (imagePath) => {
    const options = {
        use_filename: true,
        unique_filename: false,
        overwrite: true,
        folder: _CONF.PROJECT_NAME,
    };

    try {
        const result = await cloudinary.uploader.upload(imagePath, options);
        console.log(result);
        return result.secure_url;
    } catch (error) {
        console.error(error);
    }
};
