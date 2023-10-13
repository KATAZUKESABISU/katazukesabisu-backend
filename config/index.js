const config = Object.freeze({
    // secret key API
    SECRET: "SECRET_TRUONGVANLAM",
    SECRET_REFRESH: "SECRET_REFRESH_TRUONGVANLAM",

    // expiresIn token
    tokenLife: 600, // 10 minutes
    refreshTokenLife: 86400, // 1 day
    // refreshTokens: {},

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
    FLOW_PAGE: 7,
    // COLLECTION: 8,
    // PAYMENT_METHOD: 9,
    // GUIDE: 10,
    // LINE_TEMPLATE: 11,
    LIST_QA: "listQA",
    CONTACT_US: 13,
    BLOG_COMMON: 14,

    BUTTON_QA: 0,
    SERVICE_PRICE_INFO: 0,
    RATE_PLAN: 1,

    PER_PAGE_DEFAULT: 5,
    SORT_ITEM_DEFAULT_DATE: "createDate",
    SORT_ITEM_PUBLISH: "publish",
    SORT_ORDER_DEFAULT_DESC: "DESC",
    SORT_ORDER_ASC: "ASC",
    SORT_ORDER_DESC: "DESC",

    PROJECT_NAME: "KATAZUKESABISU",
});

module.exports = config;
