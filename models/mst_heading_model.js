const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MstHeadingSchema = new Schema({
    heading: {
        type: String,
    },
    contentType: {
        type: Number,
    },
    isDisplay: {
        type: Boolean,
    }
});

module.exports = mongoose.model("MstHeading", MstHeadingSchema);
