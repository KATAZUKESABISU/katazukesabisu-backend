const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MstServicePageSchema = new Schema({
    heading: {
        type: String,
    },
    section: {
        type: String,
    },
    contentType: {
        type: String,
        // 0: SERVICE_PRICE_INFO
        // 1: RATE_PLAN
    }
});

module.exports = mongoose.model("MstServicePage", MstServicePageSchema);
