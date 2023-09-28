const mstContactModel = require("../models/mst_contact_model");
const mstPostCommonModel = require("../models/mst_post_common_model");
const mstInquiryModel = require("../models/mst_inquiry_model");
const inquiryModel = require("../models/inquiry_model");
const _CONF = require("../config");

module.exports.getMstInfo = async (req, res) => {
    try {
        const contact = await mstContactModel.findOne();

        const inquiryForm = await mstInquiryModel.findOne({});

        const postCommon = await mstPostCommonModel.find();
        const formNote = postCommon.find(
            (element) => element.contentType === _CONF.FORM_NOTE
        );
        const privacyPolicy = postCommon.find(
            (element) => element.contentType === _CONF.PRIVACY_POLICY
        );
        const communicationMethod = postCommon.find(
            (element) => element.contentType === _CONF.COMMUNICATION_METHOD
        );

        const data_masters = {
            contactInfo: {
                title: contact?.title,
                createDate: contact?.createDate,
                list: JSON.parse(contact?.list),
                block: JSON.parse(contact?.block),
            },
            form: {
                inquiryItem: JSON.parse(inquiryForm?.inquiryItem),
                requestContent: JSON.parse(inquiryForm?.requestContent),
                name: JSON.parse(inquiryForm?.name),
                furigana: JSON.parse(inquiryForm?.furigana),
                emailAddress: JSON.parse(inquiryForm?.emailAddress),
                address: JSON.parse(inquiryForm?.address),
                telephoneNumber: JSON.parse(inquiryForm?.telephoneNumber),
                preferredContact: JSON.parse(inquiryForm?.preferredContact),
                contentOfInquiry: JSON.parse(inquiryForm?.contentOfInquiry),
            },
            formNoteInfo: {
                title: formNote?.title,
                createDate: formNote?.createDate,
                content: JSON.parse(formNote?.content),
            },
            privacyPolicy: {
                title: privacyPolicy?.title,
                createDate: privacyPolicy?.createDate,
                content: JSON.parse(privacyPolicy?.content),
            },
            communicationMethod: {
                title: communicationMethod?.title,
                createDate: communicationMethod?.createDate,
                content: JSON.parse(communicationMethod?.content),
            },
        };
        return res.status(200).json({
            message: "",
            data_masters,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Something went wrong!" });
    }
};

module.exports.getDataHomePage = async (req, res) => {
    try {
        const homePage = await mstPostCommonModel.find({
            contentType: _CONF.HOME_PAGE,
        });
        let homePageData = {};
        homePage?.forEach((element) => {
            homePageData[element?._name] = {
                title: element?.title,
                createDate: element?.createDate,
                style: element?.style,
                button: element?.button,
                isDisplay: element?.isDisplay,
                content: JSON.parse(element?.content),
            };
        });
        return res.status(200).json({
            message: "",
            homePageData,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Something went wrong!" });
    }
};

module.exports.getAboutUs = async (req, res) => {
    try {
        const aboutUs = await mstPostCommonModel.findOne({
            contentType: _CONF.ABOUT_US,
        });
        const aboutUsData = {
            title: aboutUs?.title,
            createDate: aboutUs?.createDate,
            content: JSON.parse(aboutUs?.content),
        };
        return res.status(200).json({
            message: "",
            aboutUsData,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Something went wrong!" });
    }
};

module.exports.getFooterContact = async (req, res) => {
    try {
        const footerContact = await mstPostCommonModel.findOne({
            contentType: _CONF.FOOTER_CONTACT,
        });
        const footerContactData = {
            title: footerContact?.title,
            createDate: footerContact?.createDate,
            content: JSON.parse(footerContact?.content),
        };
        return res.status(200).json({
            message: "",
            footerContactData,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Something went wrong!" });
    }
};

module.exports.getFlowPage = async (req, res) => {
    try {
        const flowPage = await mstPostCommonModel.find({
            contentType: _CONF.FLOW_PAGE,
        });
        const listQA = await inquiryModel
            .find({
                answer: { $ne: null },
            })
            .sort({ createAt: -1 });
        let listQAData = [];
        listQA?.forEach((element, index) => {
            if (index === 0) {
                listQAData[index] = {
                    question: element?.contentOfInquiry,
                    answer: element?.answer,
                    button: "Get data master",
                };
            } else {
                listQAData[index] = {
                    question: element?.contentOfInquiry,
                    answer: element?.answer,
                };
            }
        });

        let flowPageData = {};
        flowPage?.forEach((element) => {
            if (element?._name === _CONF.LIST_QA) {
                flowPageData[element?._name] = {
                    title: element?.title,
                    id: element?.id,
                    createDate: element?.createDate,
                    content: listQAData,
                };
            } else {
                flowPageData[element?._name] = {
                    title: element?.title,
                    id: element?.id,
                    createDate: element?.createDate,
                    content: JSON.parse(element?.content),
                };
            }
        });
        return res.status(200).json({
            message: "",
            flowPageData,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Something went wrong!" });
    }
};
