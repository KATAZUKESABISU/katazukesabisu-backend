const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BlogSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    createDate: {
        type: Date,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    image: {
        type: String,
    },
    published: {
        type: Number,
    },
});

module.exports = mongoose.model("Blog", BlogSchema);
