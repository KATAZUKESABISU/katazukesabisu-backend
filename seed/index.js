if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
}
const upload_cloud = require("./upload_cloud");
const db = require("../utils/connectDatabase");

const AdminModel = require("../models/admin_model");
const MstInquiryModel = require("../models/mst_inquiry_model");
const MstContactModel = require("../models/mst_contact_model");
const MstPostCommonModel = require("../models/mst_post_common_model");

const adminSeed = require("./admin_seed");
const mstInquirySeed = require("./mst_inquiry_seed");
const mstContactSeed = require("./mst_contact_seed");
const mstPostCommonSeed = require("./mst_post_common_seed");

const seedDB = async (result) => {
    console.log("Start Insert");
    await AdminModel.deleteMany({});
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

    const notFound = new MstPostCommonModel(mstPostCommonSeed.notFound);
    await notFound.save();

    const mstFormNote = new MstPostCommonModel(mstPostCommonSeed.formNote);
    await mstFormNote.save();
    const privacyPolicy = new MstPostCommonModel(
        mstPostCommonSeed.privacyPolicy
    );
    await privacyPolicy.save();

    mstPostCommonSeed.communicationMethod.content[2].data.file.url = result.imgQRCodeUrl;
    // Create data communicationMethod
    const communicationMethodData = {
        title: mstPostCommonSeed.communicationMethod.title,
        createDate: mstPostCommonSeed.communicationMethod.createDate,
        content: JSON.stringify(mstPostCommonSeed.communicationMethod.content),
        contentType: mstPostCommonSeed.communicationMethod.contentType
    }
    const communicationMethod = new MstPostCommonModel(communicationMethodData);
    await communicationMethod.save();

    mstPostCommonSeed.homePage.content[0].content[0].data.file.url = result.image1Url;
    mstPostCommonSeed.homePage.content[1].content[0].data.file.url = result.image2Url;
    mstPostCommonSeed.homePage.content[2].content[0].data.imageURL = result.image3Url;
    mstPostCommonSeed.homePage.content[2].content[1].data.imageURL = result.image4Url;
    mstPostCommonSeed.homePage.content[2].content[2].data.imageURL = result.image5Url;
    mstPostCommonSeed.homePage.content[3].content[0].data.imageURL = result.image2Url;
    mstPostCommonSeed.homePage.content[3].content[1].data.imageURL = result.image2Url;
    mstPostCommonSeed.homePage.content[3].content[2].data.imageURL = result.image2Url;
    mstPostCommonSeed.homePage.content[3].content[3].data.imageURL = result.image2Url;
    mstPostCommonSeed.homePage.content[3].content[4].data.imageURL = result.image2Url;
    mstPostCommonSeed.homePage.content[3].content[5].data.imageURL = result.image2Url;
    mstPostCommonSeed.homePage.content[4].content[0].data.imageURL = result.image2Url;
    mstPostCommonSeed.homePage.content[4].content[1].data.imageURL = result.image2Url;
    mstPostCommonSeed.homePage.content[5].content[0].data.imageURL = result.image2Url;

    // Create data homePage
    const homePageData = {
        title: mstPostCommonSeed.homePage.title,
        content: JSON.stringify(mstPostCommonSeed.homePage.content),
        contentType: mstPostCommonSeed.homePage.contentType
    }
    const homePage = new MstPostCommonModel(homePageData);
    await homePage.save();

    const aboutUs = new MstPostCommonModel(mstPostCommonSeed.aboutUs);
    await aboutUs.save();

    const footerContact = new MstPostCommonModel(
        mstPostCommonSeed.footerContact
    );
    await footerContact.save();

    const summaryContent = new MstPostCommonModel(
        mstPostCommonSeed.summaryContent
    );
    await summaryContent.save();

    const collection = new MstPostCommonModel(mstPostCommonSeed.collection);
    await collection.save();

    mstPostCommonSeed.paymentMethod.content[0].src = result.visaImgUrl;
    mstPostCommonSeed.paymentMethod.content[1].src = result.amexImgUrl;
    mstPostCommonSeed.paymentMethod.content[2].src = result.masterCardImgUrl;
    mstPostCommonSeed.paymentMethod.content[3].src = result.jcbImgUrl;
    // Create data paymentMethod
    const paymentMethodData = {
        title: mstPostCommonSeed.paymentMethod.title,
        id: mstPostCommonSeed.paymentMethod.id,
        content: JSON.stringify(mstPostCommonSeed.paymentMethod.content),
        contentType: mstPostCommonSeed.paymentMethod.contentType
    }
    const paymentMethod = new MstPostCommonModel(
        paymentMethodData
    );
    await paymentMethod.save();

    mstPostCommonSeed.guide.content[2].data.file.url = result.lineGuideUrl;
    // Create data guide
    const guideData = {
        title: mstPostCommonSeed.guide.title,
        id: mstPostCommonSeed.guide.id,
        createDate: mstPostCommonSeed.guide.createDate,
        content: JSON.stringify(mstPostCommonSeed.guide.content),
        contentType: mstPostCommonSeed.guide.contentType
    };
    const guide = new MstPostCommonModel(guideData);
    await guide.save();

    mstPostCommonSeed.lineTemplate.content[3].data.file.url = result.ImgQRCode;
    // Create data lineTemplate
    const lineTemplateData = {
        title: mstPostCommonSeed.lineTemplate.title,
        id: mstPostCommonSeed.lineTemplate.id,
        createDate: mstPostCommonSeed.lineTemplate.createDate,
        content: JSON.stringify(mstPostCommonSeed.lineTemplate.content),
        contentType: mstPostCommonSeed.lineTemplate.contentType
    };
    const lineTemplate = new MstPostCommonModel(lineTemplateData);
    await lineTemplate.save();
    const listQA = new MstPostCommonModel(mstPostCommonSeed.listQA);
    await listQA.save();

    mstPostCommonSeed.contactUs.content[0].data.file.url = result.ImgContactUsUrl;
    // Create data lineTemplate
    const contactUsData = {
        title: mstPostCommonSeed.contactUs.title,
        createDate: mstPostCommonSeed.contactUs.createDate,
        content: JSON.stringify(mstPostCommonSeed.contactUs.content),
        contentType: mstPostCommonSeed.contactUs.contentType
    };
    const contactUs = new MstPostCommonModel(contactUsData);
    await contactUs.save();
    console.log("End Insert");
};

const start = async () => {
    const result = await upload_cloud.upload();
    await seedDB(result);
};

start();
