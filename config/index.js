const config = Object.freeze({
    // secret key API
    SECRET: "SECRET_TRUONGVANLAM",
    SECRET_REFRESH: "SECRET_REFRESH_TRUONGVANLAM",

    // expiresIn token
    tokenLife: 600,
    refreshTokenLife: 120,
    refreshTokens: {},

    // gmail
    HOST: "smtp.gmail.com",
    PORT: "587",
    GMAIL_EMAIL: "katazukesabisu@gmail.com",
    GMAIL_PASSWORD: "douw jgjc pkbh vmny",
    GENERATE: {
        code: "",
    },

    /***CONST***/
    NOT_FOUND: 0,
    FORM_NOTE: 1,
    PRIVACY_POLICY: 2,
    COMMUNICATION_METHOD: 3,
    HOME_PAGE: 4,
    ABOUT_US: 5,
    FOOTER_CONTACT: 6,
    SUMMERY_CONTENT: 7,
    COLLECTION: 8,
    PAYMENT_METHOD: 9,
    GUIDE: 10,
    LINE_TEMPLATE: 11,
    LIST_QA: 12,
    CONTACT_US: 13,

    PROJECT_NAME: "KATAZUKESABISU",
});

module.exports = config;
