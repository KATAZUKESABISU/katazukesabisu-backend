const passportLocalMongoose = require("passport-local-mongoose");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AdminSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    displayName: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    phone: {
        type: String,
    },
    photoUrl: {
        type: String,
    },
    role: {
        type: String,
    },
    password: {
        type: String,
        required: true,
    },
    saltRounds: {
        type: String,
        // required: true,
    },
});

AdminSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model("Admin", AdminSchema);
