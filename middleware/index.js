const jwt = require("jsonwebtoken");
const _CONF = require("../config");
const { response } = require("../utils/commonUtil");
const adminModel = require("../models/admin_model");
const authModel = require("../models/auth_model");

module.exports.isAuthentication = async (req, res, next) => {
    const { authorization } = req.headers;
    const token = authorization?.replace("Bearer ", "");
    // decode token
    if (token) {
        // verifies secret and checks exp
        jwt.verify(token, _CONF.SECRET, async function (err, decoded) {
            if (err) {
                await authModel.findOneAndUpdate({ userId: decoded?.id, token }, {
                    token: null,
                });
                console.error(err.toString());
                const result = await response("Unauthorized access.", 401);
                return res.status(401).json(result);
            }
            const auth = await authModel.findOne({ userId: decoded?.id, token });
            if (auth) {
                next();
            } else {
                const result = await response("Unauthorized access.", 401);
                return res.status(401).json(result);
            }
        });
    } else {
        const result = await response("No token provided.", 403);
        return res.status(403).json(result);
    }
};

module.exports.getUrlImageUpload = async (req, res) => {
    const result = await response(
        "Upload image to cloudinary successfully!",
        200,
        null,
        req.file.path
    );
    return res.status(200).json(result);
}
