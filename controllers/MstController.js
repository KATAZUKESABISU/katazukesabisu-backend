const mstContactModel = require("../models/mst_contact_model");
const mstPostCommonModel = require("../models/mst_post_common_model");
const mstInquiryModel = require("../models/mst_inquiry_model");
const inquiryModel = require("../models/inquiry_model");
const mstButtonModel = require("../models/mst_button_model");
const mstServicePageModel = require("../models/mst_service_page_model");
const mstHeadingModel = require("../models/mst_heading_model");
const _CONF = require("../config");
const { response } = require("../utils/commonUtil");

module.exports.getMstInfo = async (req, res) => {
    try {
        const contact = await mstContactModel.findOne();

        const inquiryForm = await mstInquiryModel.findOne();

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
            null,
            masterInfo
        );
        return res.status(200).json(result);
    } catch (error) {
        console.log(error);
        const result = await response("Something went wrong!", 500);
        return res.status(500).json(result);
    }
};

module.exports.getMstInfoClient = async (req, res) => {
    try {
        const contact = await mstContactModel.findOne({ isDisplay: true });
        const inquiryForm = await mstInquiryModel.findOne({ isDisplay: true });
        const postCommon = await mstPostCommonModel.find({ isDisplay: true });
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
            contactInfo: contact
                ? {
                      title: contact?.title,
                      createDate: contact?.createDate,
                      list: JSON.parse(contact?.list),
                      block: JSON.parse(contact?.block),
                  }
                : {},
            form: inquiryForm
                ? {
                      inquiryItem: JSON.parse(inquiryForm?.inquiryItem),
                      requestContent: JSON.parse(inquiryForm?.requestContent),
                      name: JSON.parse(inquiryForm?.name),
                      furigana: JSON.parse(inquiryForm?.furigana),
                      emailAddress: JSON.parse(inquiryForm?.emailAddress),
                      address: JSON.parse(inquiryForm?.address),
                      telephoneNumber: JSON.parse(inquiryForm?.telephoneNumber),
                      preferredContact: JSON.parse(
                          inquiryForm?.preferredContact
                      ),
                      contentOfInquiry: JSON.parse(
                          inquiryForm?.contentOfInquiry
                      ),
                  }
                : {},
            formNoteInfo: {
                title: formNote?.title,
                createDate: formNote?.createDate,
                content: JSON.parse(formNote?.content),
            },
            privacyPolicy: privacyPolicy
                ? {
                      title: privacyPolicy?.title,
                      createDate: privacyPolicy?.createDate,
                      content: JSON.parse(privacyPolicy?.content),
                  }
                : {},
            communicationMethod: communicationMethod
                ? {
                      title: communicationMethod?.title,
                      createDate: communicationMethod?.createDate,
                      content: JSON.parse(communicationMethod?.content),
                  }
                : {},
        };
        const result = await response(
            "Get data masters successfully!",
            200,
            null,
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
        const heading = await mstHeadingModel.findOne({
            contentType: _CONF.HOME_PAGE,
        });
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
            "home_page",
            {
                heading: heading.heading,
                homePage,
            }
        );
        return res.status(200).json(result);
    } catch (error) {
        console.log(error);
        const result = await response("Something went wrong!", 500);
        return res.status(500).json(result);
    }
};

module.exports.updateHomePage = async (req, res) => {
    const { heading, homePage } = req.body;
    try {
        await mstHeadingModel.findOneAndUpdate(
            {
                contentType: _CONF.HOME_PAGE,
            },
            { heading: heading }
        );
        for (const [key, obj] of Object.entries(homePage)) {
            const data = {
                title: obj?.title,
                createDate: obj?.createDate,
                style: obj?.style,
                button: obj?.button ? JSON.stringify(obj?.button) : undefined,
                isDisplay: obj?.isDisplay,
                content: JSON.stringify(obj?.content),
            };
            await mstPostCommonModel.updateOne({ _name: key }, data);
        }
        const result = await response(
            "Update data home page successfully!",
            200,
            "home_page",
            {}
        );
        return res.status(200).json(result);
    } catch (error) {
        console.log(error);
        const result = await response("Something went wrong!", 500);
        return res.status(500).json(result);
    }
};

module.exports.getDataHomePageClient = async (req, res) => {
    try {
        const heading = await mstHeadingModel.findOne({
            contentType: _CONF.HOME_PAGE,
            isDisplay: true,
        });
        const homePageData = await mstPostCommonModel.find({
            contentType: _CONF.HOME_PAGE,
            isDisplay: true,
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
            "home_page",
            {
                heading: heading?.heading || "",
                homePage,
            }
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
        const heading = await mstHeadingModel.findOne({
            contentType: _CONF.ABOUT_US,
        });
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
            "about_us",
            {
                heading: heading.heading,
                aboutUs,
            }
        );
        return res.status(200).json(result);
    } catch (error) {
        console.log(error);
        const result = await response("Something went wrong!", 500);
        return res.status(500).json(result);
    }
};

module.exports.getAboutUsClient = async (req, res) => {
    try {
        const heading = await mstHeadingModel.findOne({
            contentType: _CONF.ABOUT_US,
            isDisplay: true,
        });
        const aboutUsData = await mstPostCommonModel.findOne({
            contentType: _CONF.ABOUT_US,
            isDisplay: true,
        });
        const aboutUs = {
            title: aboutUsData?.title,
            createDate: aboutUsData?.createDate,
            content: JSON.parse(aboutUsData?.content),
        };
        const result = await response(
            "Get data about us successfully!",
            200,
            "about_us",
            {
                heading: heading?.heading || "",
                aboutUs,
            }
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
            "footer_contact",
            footerContact
        );
        return res.status(200).json(result);
    } catch (error) {
        console.log(error);
        const result = await response("Something went wrong!", 500);
        return res.status(500).json(result);
    }
};

module.exports.getFooterContactClient = async (req, res) => {
    try {
        const footerContactData = await mstPostCommonModel.findOne({
            contentType: _CONF.FOOTER_CONTACT,
            isDisplay: true,
        });
        const footerContact = {
            title: footerContactData?.title,
            createDate: footerContactData?.createDate,
            content: JSON.parse(footerContactData?.content),
        };
        const result = await response(
            "Get footer contact successfully!",
            200,
            "footer_contact",
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
        const listQAData = await inquiryModel.find().sort({ createAt: -1 });
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
            "flow_page",
            flowPage
        );
        return res.status(200).json(result);
    } catch (error) {
        console.log(error);
        const result = await response("Something went wrong!", 500);
        return res.status(500).json(result);
    }
};

module.exports.getFlowPageClient = async (req, res) => {
    try {
        const flowPageData = await mstPostCommonModel.find({
            contentType: _CONF.FLOW_PAGE,
            isDisplay: true,
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
            "flow_page",
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
            "common_block",
            contactUs
        );
        return res.status(200).json(result);
    } catch (error) {
        console.log(error);
        const result = await response("Something went wrong!", 500);
        return res.status(500).json(result);
    }
};

module.exports.getCommonBlockClient = async (req, res) => {
    try {
        const contactUsData = await mstPostCommonModel.findOne({
            contentType: _CONF.CONTACT_US,
            isDisplay: true,
        });
        const contactUs = {
            title: contactUsData?.title,
            createDate: contactUsData?.createDate,
            content: JSON.parse(contactUsData?.content),
        };
        const result = await response(
            "Get common block successfully!",
            200,
            "common_block",
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
        const servicePriceData = await mstServicePageModel.findOne({
            contentType: _CONF.SERVICE_PRICE_INFO,
        });
        const servicePriceInfo = {
            heading: servicePriceData.heading,
            section: JSON.parse(servicePriceData.section),
        };
        const result = await response(
            "Get service price info successfully!",
            200,
            "service_price_info",
            servicePriceInfo
        );
        return res.status(200).json(result);
    } catch (error) {
        console.log(error);
        const result = await response("Something went wrong!", 500);
        return res.status(500).json(result);
    }
};

module.exports.getServicePriceInforClient = async (req, res) => {
    try {
        const servicePriceData = await mstServicePageModel.findOne({
            contentType: _CONF.SERVICE_PRICE_INFO,
        });
        const servicePriceInfo = {
            heading: servicePriceData.heading,
            section: JSON.parse(servicePriceData.section),
        };
        if (servicePriceInfo.section[0].isDisplay === true) {
            const result = await response(
                "Get service price info successfully!",
                200,
                "service_price_info",
                servicePriceInfo
            );
            return res.status(200).json(result);
        }
        const result = await response("Service price info not found!", 404);
        return res.status(404).json(result);
    } catch (error) {
        console.log(error);
        const result = await response("Something went wrong!", 500);
        return res.status(500).json(result);
    }
};

module.exports.getRatePlan = async (req, res) => {
    try {
        const ratePlaneData = await mstServicePageModel.findOne({
            contentType: _CONF.RATE_PLAN,
        });
        const ratePlan = {
            heading: ratePlaneData.heading,
            section: JSON.parse(ratePlaneData.section),
        };
        if (ratePlan.section[0].isDisplay === true) {
            const result = await response(
                "Get rate plan successfully!",
                200,
                "rate_plan",
                ratePlan
            );
            return res.status(200).json(result);
        }
        const result = await response("Rate plan not found!", 404);
        return res.status(404).json(result);
    } catch (error) {
        console.log(error);
        const result = await response("Something went wrong!", 500);
        return res.status(500).json(result);
    }
};

module.exports.getRatePlanClient = async (req, res) => {
    try {
        const ratePlaneData = await mstServicePageModel.findOne({
            contentType: _CONF.RATE_PLAN,
        });
        const ratePlan = {
            heading: ratePlaneData.heading,
            section: JSON.parse(ratePlaneData.section),
        };
        const result = await response(
            "Get rate plan successfully!",
            200,
            "rate_plan",
            ratePlan
        );
        return res.status(200).json(result);
    } catch (error) {
        console.log(error);
        const result = await response("Something went wrong!", 500);
        return res.status(500).json(result);
    }
};
