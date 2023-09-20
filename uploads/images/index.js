const path = require("path");

module.exports.getPathImg = (fileName) => {
    return path.join(__dirname, fileName);
};
