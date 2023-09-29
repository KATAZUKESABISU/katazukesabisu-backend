const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const MstButtonSchema = new Schema({
    button: {
        type: String,
        required: true,
    },
    category: {
        // 0: QA
        type: Number,
        required: true,
    },
});

module.exports = mongoose.model("MstButton", MstButtonSchema);
