module.exports.servicePriceInfor = {
    heading: "サービス・料金案内",
    section: [
        {
            style: "image-gallery",
            isDisplay: true,
            title: "サービス案内",
            content: [
                {
                    type: "list",
                    data: {
                        style: "ordered",
                        title: "",
                        imageURL: "",
                        description: "不用品・粗大ゴミ回収",
                    },
                },
                {
                    type: "list",
                    data: {
                        style: "ordered",
                        title: "残置物撤去",
                        imageURL: "",
                        description: "残置物撤去",
                    },
                },
                {
                    type: "list",
                    data: {
                        style: "ordered",
                        title: "ゴミ屋敷清掃",
                        imageURL: "",
                        description: "ゴミ屋敷清掃",
                    },
                },
                {
                    type: "list",
                    data: {
                        style: "ordered",
                        title: "遺品整理",
                        imageURL: "",
                        description: "遺品整理",
                    },
                },
                {
                    type: "list",
                    data: {
                        style: "ordered",
                        title: "引っ越し",
                        imageURL: "",
                        description: "引っ越し",
                    },
                },
                {
                    type: "list",
                    data: {
                        style: "ordered",
                        title: "ハウスクリーニング",
                        imageURL: "",
                        description: "ハウスクリーニング",
                    },
                },
            ],
        },
    ],
    contentType: 0,
};

module.exports.ratePlan = {
    heading: "料金プラン",
    id: "#price",
    button: [{ innerText: "カード払いOK!", location: "/flow#f02" }],
    section: [
        {
            style: "list-service-special",
            isDisplay: true,
            title: "",
            content: [
                {
                    type: "list",
                    data: {
                        style: "ordered",
                        title: "トラックパック",
                        imageURL: "",
                        fee: 9000,
                        size: 1,
                        description:
                            "一人暮らしの大掃除、家具の処分の場合は、こちらをご利用ください。",
                    },
                },
                {
                    type: "list",
                    data: {
                        style: "ordered",
                        title: "1tトラックパック",
                        imageURL: "",
                        fee: 9000,
                        size: 1,
                        description:
                            "一人暮らしの大掃除、大量のゴミの状態は、こちらをご利用ください。",
                    },
                },
                {
                    type: "list",
                    data: {
                        style: "ordered",
                        title: "2tトラックパック",
                        imageURL: "",
                        fee: 9000,
                        size: 1,
                        description:
                            "粗大家具や大量のゴミがある場合は、こちらをご利用ください。",
                    },
                },
                {
                    type: "list",
                    data: {
                        style: "ordered",
                        title: "アルミバントラックパック",
                        imageURL: "",
                        fee: 9000,
                        size: 1,
                        description: "ゴミ屋敷の場合はこちらをご利用ください。",
                    },
                },
                {
                    type: "button",
                    data: {
                        style: "red",
                        name: "カード払いOK!",
                    },
                },
            ],
        },
    ],
    contentType: 1,
};
