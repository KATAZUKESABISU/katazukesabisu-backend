if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
}
const mongoose = require("mongoose");

const AdminModel = require("../models/admin_model");
const MstInquiryModel = require("../models/mst_inquiry_model");
const MstContactModel = require("../models/mst_contact_model");
const MstPostCommonModel = require("../models/mst_post_common_model");

const adminSeed = require("./admin_seed");
const mstInquirySeed = require("./mst_inquiry_seed");
const mstContactSeed = require("./mst_contact_seed");
const mstPostCommonSeed = require("./mst_post_common_seed");

const user = process.env.DB_USR;
const pass = process.env.DB_PASS;

mongoose.set("strictQuery", false);
mongoose.connect(
    `mongodb+srv://${user}:${pass}@db-katazukesabisu.xr4io2a.mongodb.net/db-katazukesabisu`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", () => {
    console.log("Database Connected");
});

const seedDB = async () => {
    await AdminModel.deleteMany({});
    const admin = new AdminModel(adminSeed);
    await admin.save();

    await MstInquiryModel.deleteMany({});
    const mstInquiry = new MstInquiryModel(mstInquirySeed);
    await mstInquiry.save();

    await MstContactModel.deleteMany({});
    const mstContact = new MstContactModel(mstContactSeed);
    await mstContact.save();

    await MstPostCommonModel.deleteMany({});
    const mstFormNote = new MstPostCommonModel(mstPostCommonSeed.formNote);
    await mstFormNote.save();
    const privacyPolicy = new MstPostCommonModel(
        mstPostCommonSeed.privacyPolicy
    );
    await privacyPolicy.save();
    const communicationMethod = new MstPostCommonModel(
        mstPostCommonSeed.communicationMethod
    );
    await communicationMethod.save();
    const homePage = new MstPostCommonModel(mstPostCommonSeed.homePage);
    await homePage.save();
    const notFound = new MstPostCommonModel(mstPostCommonSeed.notFound);
    await notFound.save();
};

seedDB();
