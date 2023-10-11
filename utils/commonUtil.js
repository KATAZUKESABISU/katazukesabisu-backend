const _CONF = require("../config");
const nodemailer = require("nodemailer");
const mstPostCommonModel = require("../models/mst_post_common_model");
const { cloudinary } = require("../cloudinary");
const seoHelmetModel = require("../models/seo_helmet_model");

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
            contentType: _CONF.NOT_FOUND,
        });
        if (errorNotFound) {
            const result = await this.response(
                "Get not found successfully!",
                200,
                {
                    title: errorNotFound.title,
                    createDate: errorNotFound.createDate,
                    content: JSON.parse(errorNotFound.content),
                }
            );
            return res.status(200).json(result);
        }
    } catch (error) {
        console.log(error);
        const result = await this.response("Something went wrong!", 500);
        return res.status(500).json(result);
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
        console.log(result.secure_url);
        return result.secure_url;
    } catch (error) {
        console.error(error);
    }
};

module.exports.response = async (message, statusCode, page = null, data = undefined) => {
    let seoHelmet = undefined;
    if (statusCode == 200) {
        const seoHelmetData = await seoHelmetModel.findOne({nameSeo: page});
        seoHelmet = seoHelmetData ? JSON.parse(seoHelmetData.content) : {};
    }
    return {
        statusCode,
        message,
        data,
        seoHelmet,
    };
};
