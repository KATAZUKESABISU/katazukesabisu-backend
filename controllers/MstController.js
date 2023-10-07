const mstContactModel = require("../models/mst_contact_model");
const mstPostCommonModel = require("../models/mst_post_common_model");
const mstInquiryModel = require("../models/mst_inquiry_model");
const inquiryModel = require("../models/inquiry_model");
const mstButtonModel = require("../models/mst_button_model");
const mstServicePageModel = require("../models/mst_service_page_model");
const _CONF = require("../config");
const { response } = require("../utils/commonUtil");

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

        const masterInfo = {
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
        const result = await response(
            "Get data masters successfully!",
            200,
            masterInfo
        );
        return res.status(200).json(result);
    } catch (error) {
        console.log(error);
        const result = await response("Something went wrong!", 500);
        return res.status(500).json(result);
    }
};

module.exports.getDataHomePage = async (req, res) => {
    try {
        const homePageData = await mstPostCommonModel.find({
            contentType: _CONF.HOME_PAGE,
        });
        let homePage = {};
        homePageData?.forEach((element) => {
            homePage[element?._name] = {
                title: element?.title,
                createDate: element?.createDate,
                style: element?.style,
                button: element?.button
                    ? JSON.parse(element?.button)
                    : undefined,
                isDisplay: element?.isDisplay,
                content: JSON.parse(element?.content),
            };
        });
        const result = await response(
            "Get data home page successfully!",
            200,
            homePage
        );
        return res.status(200).json(result);
    } catch (error) {
        console.log(error);
        const result = await response("Something went wrong!", 500);
        return res.status(500).json(result);
    }
};

module.exports.getAboutUs = async (req, res) => {
    try {
        const aboutUsData = await mstPostCommonModel.findOne({
            contentType: _CONF.ABOUT_US,
        });
        const aboutUs = {
            title: aboutUsData?.title,
            createDate: aboutUsData?.createDate,
            content: JSON.parse(aboutUsData?.content),
        };
        const result = await response(
            "Get data about us successfully!",
            200,
            aboutUs
        );
        return res.status(200).json(result);
    } catch (error) {
        console.log(error);
        const result = await response("Something went wrong!", 500);
        return res.status(500).json(result);
    }
};

module.exports.getFooterContact = async (req, res) => {
    try {
        const footerContactData = await mstPostCommonModel.findOne({
            contentType: _CONF.FOOTER_CONTACT,
        });
        const footerContact = {
            title: footerContactData?.title,
            createDate: footerContactData?.createDate,
            content: JSON.parse(footerContactData?.content),
        };
        const result = await response(
            "Get footer contact successfully!",
            200,
            footerContact
        );
        return res.status(200).json(result);
    } catch (error) {
        console.log(error);
        const result = await response("Something went wrong!", 500);
        return res.status(500).json(result);
    }
};

module.exports.getFlowPage = async (req, res) => {
    try {
        const flowPageData = await mstPostCommonModel.find({
            contentType: _CONF.FLOW_PAGE,
        });
        const listQAData = await inquiryModel
            .find({
                answer: { $nin: [null, ""] },
            })
            .sort({ createAt: -1 });
        const buttonData = await mstButtonModel.findOne({
            category: _CONF.BUTTON_QA,
        });
        let listQA = [];
        listQAData?.forEach((element, index) => {
            if (index === 0) {
                listQA[index] = {
                    question: element?.contentOfInquiry,
                    answer: element?.answer,
                    button: JSON.parse(buttonData.button),
                };
            } else {
                listQA[index] = {
                    question: element?.contentOfInquiry,
                    answer: element?.answer,
                };
            }
        });

        let flowPage = {};
        flowPageData?.forEach((element) => {
            if (element?._name === _CONF.LIST_QA) {
                flowPage[element?._name] = {
                    title: element?.title,
                    id: element?.id,
                    createDate: element?.createDate,
                    content: listQA,
                };
            } else {
                flowPage[element?._name] = {
                    title: element?.title,
                    id: element?.id,
                    createDate: element?.createDate,
                    content: JSON.parse(element?.content),
                };
            }
        });
        const result = await response(
            "Get flow page successfully!",
            200,
            flowPage
        );
        return res.status(200).json(result);
    } catch (error) {
        console.log(error);
        const result = await response("Something went wrong!", 500);
        return res.status(500).json(result);
    }
};

module.exports.getCommonBlock = async (req, res) => {
    try {
        const contactUsData = await mstPostCommonModel.findOne({
            contentType: _CONF.CONTACT_US,
        });
        const contactUs = {
            title: contactUsData?.title,
            createDate: contactUsData?.createDate,
            content: JSON.parse(contactUsData?.content),
        };
        const result = await response(
            "Get common block successfully!",
            200,
            contactUs
        );
        return res.status(200).json(result);
    } catch (error) {
        console.log(error);
        const result = await response("Something went wrong!", 500);
        return res.status(500).json(result);
    }
};

module.exports.getServicePriceInfor = async (req, res) => {
    try {
        const servicePriceData = await mstServicePageModel.findOne({ contentType: _CONF.SERVICE_PRICE_INFO});
        const servicePriceInfo = {
            heading: servicePriceData.heading,
            section: JSON.parse(servicePriceData.section),
        }
        const result = await response(
            "Get service price info successfully!",
            200,
            servicePriceInfo
        );
        return res.status(200).json(result);
    } catch (error) {
        console.log(error);
        const result = await response("Something went wrong!", 500);
        return res.status(500).json(result);
    }
};

module.exports.getRatePlan = async (req, res) => {
    try {
        const ratePlaneData = await mstServicePageModel.findOne({ contentType: _CONF.RATE_PLAN})
        const ratePlan = {
            heading: ratePlaneData.heading,
            section: JSON.parse(ratePlaneData.section),
        }
        const result = await response(
            "Get rate plan successfully!",
            200,
            ratePlan
        );
        return res.status(200).json(result);
    } catch (error) {
        console.log(error);
        const result = await response("Something went wrong!", 500);
        return res.status(500).json(result);
    }
};
