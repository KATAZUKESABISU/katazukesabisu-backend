const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SeoHelmetSchema = new Schema({
    nameSeo: {
        type: String,
    },
    content: {
        type: String
    }
});

module.exports = mongoose.model("SeoHelmet", SeoHelmetSchema);