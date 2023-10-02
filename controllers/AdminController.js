const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const _CONF = require("../config");
const adminModel = require("../models/admin_model");
const randomString = require("randomstring");
const { sendMail } = require("../utils/commonUtil");
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
                return res.status(400).json({ message: "Invalid Credentials" });
            }
            const userInfo = {
                id: user._id,
                username: user.username,
                email: user.email,
                phone: user.phone,
                role: "admin",
            };

            const token = jwt.sign({id: user._id, username: user.username}, _CONF.SECRET, {
                expiresIn: _CONF.tokenLife,
            });
            const refreshToken = jwt.sign({id: user._id, username: user.username}, _CONF.SECRET_REFRESH, {
                expiresIn: _CONF.refreshTokenLife,
            });

            const response = {
                message: "Logged in",
                data:{
                    user: userInfo,
                    token: token,
                    refreshToken: refreshToken,
                }
            };
            _CONF.refreshTokens[userInfo.id] = {
                token,
                refreshToken,
            };
            res.status(200).json(response);
        } else {
            return res.status(404).json({ message: "User not found" });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Something went wrong!" });
    }
};

module.exports.logout = (req, res) => {
    const id = req.user.id;
    try {
        delete _CONF.refreshTokens[id];
        return res.status(200).json({ message: "Logout successful", data: {} });
    } catch (error) {
        console.log(error);
        return res.status(401).json({ message: "Invalid token!" });
    }
};

module.exports.forgetPassword = async (req, res) => {
    const { email } = req.body;
    try {
        const code = randomString.generate({
            length: 8,
        });
        _CONF.GENERATE.code = code;
        const user = await adminModel.findOne({ email });

        if (user) {
            const subject = `${_CONF.PROJECT_NAME} - confirmation code`;
            const content = templateForgetPassword(user.username, code);
            await sendMail(subject, content, email);
            return res.status(200).json({ message: "Check mail!", data: {} });
        } else {
            return res.status(404).json({ message: "User not found" });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Something went wrong!" });
    }
};

module.exports.resetPassword = (req, res) => {
    const { passwordNew, code } = req.body;
    try {
        if (code === _CONF.GENERATE.code) {
            bcrypt.genSalt(10, async function (err, saltRounds) {
                if (err) {
                    console.error(err);
                    return res
                        .status(500)
                        .json({ message: "Something went wrong!" });
                }
                // Hash password with salt
                bcrypt.hash(
                    passwordNew,
                    saltRounds,
                    async function (err, hash) {
                        if (err) {
                            console.error(err);
                            return res
                                .status(500)
                                .json({ message: "Something went wrong!" });
                        }
                        const user = await adminModel.findOneAndUpdate(
                            { email },
                            { password: hash, saltRounds: saltRounds }
                        );
                        if (!user) {
                            return res
                                .status(404)
                                .json({ message: "User not found" });
                        }
                        return res.status(200).json({
                            message: "Reset password successful",
                            data: {
                                email,
                            }
                        });
                    }
                );
            });
        } else {
            return res.status(404).json({ message: "Code not found" });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Something went wrong!" });
    }
};

module.exports.refreshToken = (req, res) => {
    const { refreshToken, user } = req.body;
    // if refresh token exists
    if (refreshToken && refreshToken in _CONF.refreshTokens[user.id]) {
        const userInfo = req.user;
        const token = jwt.sign({id: user.id, username: user.username}, _CONF.SECRET, {
            expiresIn: _CONF.tokenLife,
        });
        const response = {
            message: "Reset token successfully!",
            data: {
                user: userInfo,
                token: token,
                refreshToken: refreshToken,
            }
        };
        // update the token in the list
        _CONF.refreshTokens[req.user.id].token = token;
        res.status(200).json(response);
    } else {
        res.status(404).send("Invalid request");
    }
};
