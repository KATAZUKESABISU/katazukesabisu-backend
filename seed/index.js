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
    const communicationMethod = new MstPostCommonModel(
        await mstPostCommonSeed.communicationMethod()
    );
    await communicationMethod.save();
    const homePage = new MstPostCommonModel(mstPostCommonSeed.homePage);
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
    const paymentMethod = new MstPostCommonModel(
        mstPostCommonSeed.paymentMethod
    );
    await paymentMethod.save();
    const guide = new MstPostCommonModel(mstPostCommonSeed.guide);
    await guide.save();
    const lineTemplate = new MstPostCommonModel(mstPostCommonSeed.lineTemplate);
    await lineTemplate.save();
    const listQA = new MstPostCommonModel(mstPostCommonSeed.listQA);
    await listQA.save();
    const contactUs = new MstPostCommonModel(mstPostCommonSeed.contactUs);
    await contactUs.save();
    console.log("End Insert");
};

const start = async () => {
    const result = await upload_cloud.upload();
    await seedDB(result);
};

start();
