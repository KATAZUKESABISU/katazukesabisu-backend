const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const _CONF = require("../config");
const adminModel = require("../models/admin_model");
const authModel = require("../models/auth_model");
const randomString = require("randomstring");
const { sendMail, response } = require("../utils/commonUtil");
const {
    templateForgetPassword,
} = require("../templateMail/templateForgetPassword");

module.exports.login = async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await adminModel.findOne({ username });
        if (user) {
            const matchPassword = await bcrypt.compare(password, user.password);
            if (!matchPassword) {
                const result = await response("Invalid Credentials", 400);
                return res.status(400).json(result);
            }
            const userInfo = {
                id: user._id,
                username: user.username,
                displayName: user.displayName,
                email: user.email,
                phone: user.phone,
                photoUrl: user.photoUrl,
                role: user.role,
            };

            const hashInfo = {
                id: user._id,
                username: user.username,
                date: new Date().getTime(),
            };
            const token = jwt.sign(hashInfo, _CONF.SECRET, {
                expiresIn: _CONF.tokenLife,
            });
            const refreshToken = jwt.sign(hashInfo, _CONF.SECRET_REFRESH, {
                expiresIn: _CONF.refreshTokenLife,
            });

            const data = {
                user: userInfo,
                token: token,
                refreshToken: refreshToken,
            };
            await new authModel({
                userId: user._id,
                token: token,
                refreshToken: refreshToken,
            }).save();
            const result = await response("Logged in", 200, null, data);
            return res.status(200).json(result);
        } else {
            const result = await response("User not found", 404);
            return res.status(404).json(result);
        }
    } catch (error) {
        console.log(error);
        const result = await response("Something went wrong!", 500);
        res.status(500).json(result);
    }
};

module.exports.logout = async (req, res) => {
    const { userId } = req.body;
    const { authorization } = req.headers;
    const token = authorization?.replace("Bearer ", "");
    try {
        if (!userId) {
            const result = await response("userId is required!", 400);
            return res.status(400).json(result);
        }
        const auth = await authModel.findOneAndDelete({
            userId: userId,
            token: token,
        });
        if (!auth) {
            const result = await response("userId not exist!", 400);
            return res.status(400).json(result);
        }
        const result = {
            statusCode: 200,
            message: "Logout successful!",
            data: [],
        };
        return res.status(200).json(result);
    } catch (error) {
        console.log(error);
        const result = await response("Invalid token!", 401);
        return res.status(401).json(result);
    }
};

module.exports.forgetPassword = async (req, res) => {
    const { email } = req.body;
    try {
        const code = randomString.generate({
            length: 8,
        });
        _CONF.GENERATE[email].code = code;
        const user = await adminModel.findOne({ email });

        if (user) {
            const subject = `${_CONF.PROJECT_NAME} - confirmation code`;
            const content = templateForgetPassword(user.username, code);
            await sendMail(subject, content, email);
            const result = await response("Check mail!", 200);
            return res.status(200).json(result);
        } else {
            const result = await response("User not found", 404);
            return res.status(404).json(result);
        }
    } catch (error) {
        console.log(error);
        const result = await response("Something went wrong!", 500);
        return res.status(500).json(result);
    }
};

module.exports.resetPassword = async (req, res) => {
    const { email, passwordNew, code } = req.body;
    try {
        if (code === _CONF.GENERATE[email].code) {
            bcrypt.genSalt(10, async function (err, saltRounds) {
                if (err) {
                    console.error(err);
                    const result = await response("Something went wrong!", 500);
                    return res.status(500).json(result);
                }
                // Hash password with salt
                bcrypt.hash(
                    passwordNew,
                    saltRounds,
                    async function (err, hash) {
                        if (err) {
                            console.error(err);
                            const result = await response(
                                "Something went wrong!",
                                500
                            );
                            return res.status(500).json(result);
                        }
                        const user = await adminModel.findOneAndUpdate(
                            { email },
                            { password: hash }
                        );
                        if (!user) {
                            const result = await response(
                                "User not found",
                                404
                            );
                            return res.status(404).json(result);
                        }
                        const result = await response(
                            "Reset password successful",
                            200,
                            (data = { email })
                        );
                        return res.status(200).json(result);
                    }
                );
            });
        } else {
            const result = await response("Code not found", 404);
            return res.status(404).json(result);
        }
    } catch (error) {
        console.log(error);
        const result = await response("Something went wrong!", 500);
        return res.status(500).json(result);
    }
};

module.exports.refreshToken = async (req, res) => {
    const { refreshToken, userId } = req.body;
    const auth = await authModel.findOne({ userId, refreshToken });
    // if refresh token exists
    if (refreshToken && auth) {
        // verifies secret and checks exp
        jwt.verify(
            refreshToken,
            _CONF.SECRET_REFRESH,
            async function (err, decoded) {
                if (err) {
                    await authModel.findByIdAndDelete(auth._id);
                    console.error(err.toString());
                    const result = await response("Unauthorized access.", 401);
                    return res.status(401).json(result);
                }
                const token = jwt.sign(
                    { id: decoded.id, username: decoded.username, date: new Date().getTime() },
                    _CONF.SECRET,
                    {
                        expiresIn: _CONF.tokenLife,
                    }
                );
                await authModel.findByIdAndUpdate(auth._id, { token: token });
                const result = await response(
                    "Reset token successfully!",
                    200,
                    null,
                    (data = {
                        token: token,
                        // refreshToken: refreshToken,
                    })
                );
                // update the token in the list
                res.status(200).json(result);
            }
        );
    } else {
        const result = await response("Invalid request", 404);
        res.status(404).send(result);
    }
};
