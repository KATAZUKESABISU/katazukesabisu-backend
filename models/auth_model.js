const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AuthSchema = new Schema({
    userId: {
        type: String,
        required: true,
    },
    token: {
        type: String,
    },
    refreshToken: {
        type: String,
    },
});

module.exports = mongoose.model("Auth", AuthSchema);