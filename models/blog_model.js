const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BlogSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    createDate: {
        type: String,
        required: false,
    },
    content: {
        type: String,
        required: true,
    },
    image: {
        type: String,
    }
});

module.exports = mongoose.model("Blog", BlogSchema);
