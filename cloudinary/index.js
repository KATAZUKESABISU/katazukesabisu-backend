if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
}
const cloudinary = require("cloudinary").v2;

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET,
});

const deleteAllImage = async () => {
    try {
        await cloudinary.api
            .delete_all_resources()
            .then((result) => console.log(result));
    } catch (error) {
        console.error(error);
    }
};

module.exports = { cloudinary, deleteAllImage };
