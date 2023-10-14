const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MstContactSchema = new Schema({
    title: {
        type: String,
    },
    createDate: {
        type: String,
    },
    list: {
        type: String,
    },
    block: {
        type: String,
    },
    isDisplay: {
        type: Boolean,
    }
});

module.exports = mongoose.model("MstContact", MstContactSchema);
