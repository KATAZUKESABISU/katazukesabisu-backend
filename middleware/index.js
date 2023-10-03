const jwt = require("jsonwebtoken");
const _CONF = require("../config");
const { response } = require("../utils/commonUtil");

module.exports.isAuthentication = async (req, res, next) => {
    const { authorization } = req.headers;
    const token = authorization?.replace("Bearer ", "");
    // decode token
    if (token) {
        // verifies secret and checks exp
        jwt.verify(token, _CONF.SECRET, async function (err, decoded) {
            if (err) {
                delete _CONF.refreshTokens[decoded?.id];
                console.error(err.toString());
                const result = await response("Unauthorized access.", 401);
                return res.status(401).json(result);
            } else if (_CONF.refreshTokens[decoded?.id]?.token === token) {
                req.user = decoded;
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

module.exports.isAuth = async (req, res, next) => {
    const refreshToken = req.headers.refreshToken;
    if (refreshToken) {
        // verifies secret and checks exp
        jwt.verify(
            refreshToken,
            _CONF.SECRET_REFRESH,
            async function (err, decoded) {
                if (err) {
                    delete _CONF.refreshTokens[decoded.id];
                    console.error(err.toString());
                    const result = await response("Unauthorized access.", 401);
                    return res.status(401).json(result);
                } else if (
                    refreshToken == _CONF.refreshTokens[decoded.id].refreshToken
                ) {
                    next();
                }
                const result = await response("Unauthorized access.", 401);
                return res.status(401).json(result);
            }
        );
    } else {
        const result = await response("No refreshToken provided.", 403);
        return res.status(403).json(result);
    }
};
