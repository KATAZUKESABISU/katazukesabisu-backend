const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MstPostCommonSchema = new Schema({
    title: {
        type: String,
    },
    style: {
        type: String,
    },
    id: {
        type: String,
    },
    button: {
        type: String,
    },
    isDisplay: {
        type: Boolean,
    },
    createDate: {
        type: String,
    },
    content: {
        type: String,
    },
    contentType: {
        type: Number,
        // 0: notFound
        // 1: formNote
        // 2: privacyPolicy
        // 3: communicationMethod
        // 4: homePage
        // 5: aboutUs
        // 6: footerContact
        // 7: summaryContent
        // 8: collection
        // 9: paymentMethod
        // 10: guide
        // 11: lineTemplate
        // 12: listQA
        // 13: contactUs
        // 14: blogCommon
    },
    _name: {
        type: String,
    },
});

module.exports = mongoose.model("MstPostCommon", MstPostCommonSchema);
