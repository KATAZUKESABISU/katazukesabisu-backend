if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
}
const upload_cloud = require("./upload_cloud");
const db = require("../utils/connectDatabase");

const AdminModel = require("../models/admin_model");
const MstInquiryModel = require("../models/mst_inquiry_model");
const MstContactModel = require("../models/mst_contact_model");
const MstPostCommonModel = require("../models/mst_post_common_model");
const MstButtonModel = require("../models/mst_button_model");
const SeoHelmetModel = require("../models/seo_helmet_model");
const ServicePageModel = require("../models/mst_service_page_model");
const BlogModel = require("../models/blog_model");

const adminSeed = require("./admin_seed");
const mstInquirySeed = require("./mst_inquiry_seed");
const mstContactSeed = require("./mst_contact_seed");
const {
    notFound,
    formNote,
    privacyPolicy,
    communicationMethod,
    introduction,
    serviceIntro,
    serviceList,
    serviceGuide,
    availableArea,
    coupons,
    aboutUs,
    footerContact,
    summary,
    collection,
    paymentMethod,
    guide,
    lineTemplate,
    listQA,
    contactUs,
    blogCommon,
} = require("./mst_post_common_seed");
const { buttonQA } = require("./mst_button_seed");
const { seoHelmet } = require("./seo_helmet_seed");
const { servicePriceInfor, ratePlan } = require("./mst_service_page_seed");
const { blog } = require("./blog_seed");

const seedDB = async (result) => {
    console.log("Start Insert");
    await AdminModel.deleteMany({});
    adminSeed.photoUrl = result.avatarUrl;
    const admin = new AdminModel(adminSeed);
    await admin.save();

    await MstInquiryModel.deleteMany({});
    const mstInquiry = new MstInquiryModel(mstInquirySeed);
    await mstInquiry.save();

    await MstContactModel.deleteMany({});
    mstContactSeed.block[1].data.file.url = result.ImgContactUrl;
    // create data mstContactSeed
    const mstContactData = {
        title: mstContactSeed.title,
        createDate: mstContactSeed.createDate,
        list: JSON.stringify(mstContactSeed.list),
        block: JSON.stringify(mstContactSeed.block),
    };
    const mstContact = new MstContactModel(mstContactData);
    await mstContact.save();

    await MstPostCommonModel.deleteMany({});

    const mstNotFound = new MstPostCommonModel(notFound);
    await mstNotFound.save();

    const mstFormNote = new MstPostCommonModel(formNote);
    await mstFormNote.save();

    const mstPrivacyPolicy = new MstPostCommonModel(privacyPolicy);
    await mstPrivacyPolicy.save();

    communicationMethod.content[2].data.file.url = result.imgQRCodeUrl;
    // Create data communicationMethod
    const communicationMethodData = {
        title: communicationMethod.title,
        createDate: communicationMethod.createDate,
        content: JSON.stringify(communicationMethod.content),
        contentType: communicationMethod.contentType,
    };
    const mstCommunicationMethod = new MstPostCommonModel(
        communicationMethodData
    );
    await mstCommunicationMethod.save();

    introduction.content[0].data.file.url = result.imageHomepage1Url;
    const introductionData = {
        title: introduction.title,
        createDate: introduction.createDate,
        content: JSON.stringify(introduction.content),
        contentType: introduction.contentType,
        _name: introduction._name,
    };
    const mstIntroduction = new MstPostCommonModel(introductionData);
    await mstIntroduction.save();

    serviceIntro.content[0].data.file.url = result.imageHomepage2Url;
    const serviceIntroData = {
        title: serviceIntro.title,
        createDate: serviceIntro.createDate,
        style: serviceIntro.style,
        isDisplay: serviceIntro.isDisplay,
        button: JSON.stringify(serviceIntro.button),
        content: JSON.stringify(serviceIntro.content),
        contentType: serviceIntro.contentType,
        _name: serviceIntro._name,
    };
    const mstServiceIntro = new MstPostCommonModel(serviceIntroData);
    await mstServiceIntro.save();

    serviceList.content[0].image = result.image3Url;
    serviceList.content[1].image = result.image4Url;
    serviceList.content[2].image = result.image5Url;
    const serviceListData = {
        title: serviceList.title,
        content: JSON.stringify(serviceList.content),
        contentType: serviceList.contentType,
        _name: serviceList._name,
    };
    const mstServiceList = new MstPostCommonModel(serviceListData);
    await mstServiceList.save();

    serviceGuide.content[0].src = result.imageHomepage3Url;
    serviceGuide.content[1].src = result.imageHomepage4Url;
    serviceGuide.content[2].src = result.imageHomepage5Url;
    serviceGuide.content[3].src = result.imageHomepage6Url;
    const serviceGuideData = {
        title: serviceGuide.title,
        style: serviceGuide.style,
        button: JSON.stringify(serviceGuide.button),
        content: JSON.stringify(serviceGuide.content),
        contentType: serviceGuide.contentType,
        _name: serviceGuide._name,
    };
    const mstServiceGuide = new MstPostCommonModel(serviceGuideData);
    await mstServiceGuide.save();

    availableArea.content[0].src = result.imageHomepage7Url;
    const availableAreaData = {
        title: availableArea.title,
        style: availableArea.style,
        content: JSON.stringify(availableArea.content),
        contentType: availableArea.contentType,
        _name: availableArea._name,
    };
    const mstAvailableArea = new MstPostCommonModel(availableAreaData);
    await mstAvailableArea.save();

    const couponsData = {
        title: coupons.title,
        isDisplay: coupons.isDisplay,
        content: JSON.stringify(coupons.content),
        contentType: coupons.contentType,
        _name: coupons._name,
    };
    const mstCoupons = new MstPostCommonModel(couponsData);
    await mstCoupons.save();

    const mstAboutUs = new MstPostCommonModel(aboutUs);
    await mstAboutUs.save();

    const mstFooterContact = new MstPostCommonModel(footerContact);
    await mstFooterContact.save();

    const mstSummary = new MstPostCommonModel(summary);
    await mstSummary.save();

    const mstCollection = new MstPostCommonModel(collection);
    await mstCollection.save();

    paymentMethod.content[0].src = result.visaImgUrl;
    paymentMethod.content[1].src = result.amexImgUrl;
    paymentMethod.content[2].src = result.masterCardImgUrl;
    paymentMethod.content[3].src = result.jcbImgUrl;
    // Create data paymentMethod
    const paymentMethodData = {
        title: paymentMethod.title,
        id: paymentMethod.id,
        content: JSON.stringify(paymentMethod.content),
        contentType: paymentMethod.contentType,
        _name: paymentMethod._name,
    };
    const mstPaymentMethod = new MstPostCommonModel(paymentMethodData);
    await mstPaymentMethod.save();

    guide.content[2].data.file.url = result.lineGuideUrl;
    // Create data guide
    const guideData = {
        title: guide.title,
        id: guide.id,
        createDate: guide.createDate,
        content: JSON.stringify(guide.content),
        contentType: guide.contentType,
        _name: guide._name,
    };
    const mstGuide = new MstPostCommonModel(guideData);
    await mstGuide.save();

    lineTemplate.content[3].data.file.url = result.ImgQRCode;
    // Create data lineTemplate
    const lineTemplateData = {
        title: lineTemplate.title,
        id: lineTemplate.id,
        createDate: lineTemplate.createDate,
        content: JSON.stringify(lineTemplate.content),
        contentType: lineTemplate.contentType,
        _name: lineTemplate._name,
    };
    const mstLineTemplate = new MstPostCommonModel(lineTemplateData);
    await mstLineTemplate.save();

    const mstListQA = new MstPostCommonModel(listQA);
    await mstListQA.save();

    contactUs.content[0].data.file.url = result.ImgContactUsUrl;
    // Create data lineTemplate
    const contactUsData = {
        title: contactUs.title,
        createDate: contactUs.createDate,
        content: JSON.stringify(contactUs.content),
        contentType: contactUs.contentType,
    };
    const mstContactUs = new MstPostCommonModel(contactUsData);
    await mstContactUs.save();

    const mstBlogCommon = new MstPostCommonModel(blogCommon);
    await mstBlogCommon.save();

    await MstButtonModel.deleteMany({});
    const mstButton = new MstButtonModel(buttonQA);
    await mstButton.save();

    // Create data seoHelmet
    seoHelmet[0].content[0].content = result.imageSEOUrl;
    const seoHelmetData = seoHelmet.map((item) => ({
        nameSeo: item.nameSeo,
        content: JSON.stringify(item.content),
    }));
    await SeoHelmetModel.deleteMany({});
    await SeoHelmetModel.insertMany(seoHelmetData);

    await ServicePageModel.deleteMany();
    // Create data service
    servicePriceInfor.section[0].content[0].data.imageURL = result.image1Url;
    servicePriceInfor.section[0].content[1].data.imageURL = result.image1Url;
    servicePriceInfor.section[0].content[2].data.imageURL = result.image1Url;
    servicePriceInfor.section[0].content[3].data.imageURL = result.image1Url;
    servicePriceInfor.section[0].content[4].data.imageURL = result.image1Url;
    servicePriceInfor.section[0].content[5].data.imageURL = result.image1Url;
    const servicePriceInforData = {
        heading: servicePriceInfor.heading,
        section: JSON.stringify(servicePriceInfor.section),
        contentType: servicePriceInfor.contentType,
    };
    const servicePriceInforModel = new ServicePageModel(servicePriceInforData);
    await servicePriceInforModel.save();

    ratePlan.section[0].content[0].data.imageURL = result.image1Url;
    ratePlan.section[0].content[1].data.imageURL = result.image1Url;
    ratePlan.section[0].content[2].data.imageURL = result.image1Url;
    ratePlan.section[0].content[3].data.imageURL = result.image1Url;
    ratePlan.section[1].content[0].data.file.url = result.image2Url;
    ratePlan.section[2].content[0].data.imageURL = result.image2Url;
    const ratePlanData = {
        heading: ratePlan.heading,
        section: JSON.stringify(ratePlan.section),
        contentType: ratePlan.contentType,
    };
    const ratePlanModel = new ServicePageModel(ratePlanData);
    await ratePlanModel.save();

    await BlogModel.deleteMany();
    await BlogModel.insertMany(blog);
    // const blogModel = new BlogModel(blog);
    // await blogModel.save();

    console.log("End Insert");
};

const start = async () => {
    const result = await upload_cloud.upload();
    await seedDB(result);
};

start();
