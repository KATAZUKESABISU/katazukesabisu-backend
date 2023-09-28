const { getPathImg } = require("../uploads/images");
const { uploadImage } = require("../utils/commonUtil");

module.exports.upload = async () => {
    const ImgQRCode = getPathImg("167375512749501.png");
    const image1 = getPathImg("161037146399401.jpg");
    const image2 = getPathImg("161037164366101.jpg");
    const image3 = getPathImg("161060655013303.png");
    const image4 = getPathImg("161060655013301.png");
    const image5 = getPathImg("161060655013302.png");
    const image6 = getPathImg("167375866028701.png");
    const image7 = getPathImg("167375939494801.jpg");
    const visaImg = getPathImg("visa_payment_card.svg");
    const amexImg = getPathImg("amex_card_logo_svg_vector.svg");
    const masterCardImg = getPathImg("master_card_logo.svg");
    const jcbImg = getPathImg("JCB_logo.svg");
    const lineGuide = getPathImg("line_guide.png");
    const ImgContactUs = getPathImg("167418631395101.png");
    const ImgContact = getPathImg("167418631395102.png");

    const imgQRCodeUrl = await uploadImage(ImgQRCode);
    const image1Url = await uploadImage(image1);
    const image2Url = await uploadImage(image2);
    const image3Url = await uploadImage(image3);
    const image4Url = await uploadImage(image4);
    const image5Url = await uploadImage(image5);
    const image6Url = await uploadImage(image6);
    const image7Url = await uploadImage(image7);
    const visaImgUrl = await uploadImage(visaImg);
    const amexImgUrl = await uploadImage(amexImg);
    const masterCardImgUrl = await uploadImage(masterCardImg);
    const jcbImgUrl = await uploadImage(jcbImg);
    const lineGuideUrl = await uploadImage(lineGuide);
    const ImgContactUsUrl = await uploadImage(ImgContactUs);
    const ImgContactUrl = await uploadImage(ImgContact);

    return {
        imgQRCodeUrl,
        image1Url,
        image2Url,
        image3Url,
        image4Url,
        image5Url,
        image6Url,
        image7Url,
        visaImgUrl,
        amexImgUrl,
        masterCardImgUrl,
        jcbImgUrl,
        lineGuideUrl,
        ImgContactUsUrl,
        ImgContactUrl,
    };
};
