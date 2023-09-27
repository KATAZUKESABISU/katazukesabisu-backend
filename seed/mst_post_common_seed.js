module.exports.notFound = {
    title: "お探しのページは見つかりませんでした",
    createDate: "",
    content: JSON.stringify([
        {
            type: "paragraph",
            data: {
                text: "お探しのページは見つかりませんでした。<br/>お探しのページは削除されたか、URLが変更された可能性がございます。",
            },
        },
    ]),
    contentType: 0,
};

module.exports.formNote = {
    title: "フォームの注意事項",
    createDate: "2023-08-15 00:53",
    content: JSON.stringify([
        {
            type: "list",
            data: {
                style: "unordered",
                items: [
                    "メールアドレスは半角英数字で入力し、送信前に誤りがないことをご確認ください。",
                    "半角カナ入力は文字化けの原因となりますのでご注意ください。",
                    "全角のダッシュ「―」波形「～」は文字化けの原因となりますのでご注意ください。",
                    "ご記入いただいたアドレス宛に記入内容が自動返信されます。もしこちらが届かなかった場合はメールアドレスが間違っている可能性があるため、お電話にてお問い合わせください。",
                ],
            },
        },
    ]),
    contentType: 1,
};

module.exports.privacyPolicy = {
    title: "フォームの注意事項",
    createDate: "2023-08-26 12:45",
    content: JSON.stringify([
        {
            type: "paragraph",
            data: {
                text: "当サイトは、保護方針を定め、その履行に努めてまいります。",
            },
        },
        {
            type: "list",
            data: {
                style: "ordered",
                items: [
                    "個人情報を集めるときには、お客様等に対し、利用する目的を明確にし、その目的以外にはその情報は使用いたしません。",
                    "個人情報は漏えいを防止するため、安全に管理いたします。",
                    "個人情報を利用する際は、利用目的の範囲内で適切に行い、法令で認められている場合を除いて、ご本人の同意を取らないで第三者に提供するようなことはいたしません。",
                    "個人情報に関して本人から情報の開示、訂正、削除、利用停止等を求められたとき、速やかに対応いたします。また、個人情報を正確かつ最新の状態に保つよう努めます。",
                    '当サイトは、Googleのアクセス解析ツール「Googleアナリティクス」を利用しています。Googleアナリティクスはトラフィックデータ収集のためCookieを使用し、データは匿名で収集されています。したがって個人を特定しておりません。その機能はCookieを無効にすると収集を拒否できます。お使いのブラウザの設定をご確認ください。この規約に関して、詳しくは<a href="https://www.google.com/analytics/terms/jp.html" rel="noopener" target="_blank">Google アナリティクス利用規約</a>からご覧ください。',
                ],
            },
        },
    ]),
    contentType: 2,
};

module.exports.communicationMethod = {
    title: "",
    createDate: "2023-08-26 12:45",
    content: [
        {
            type: "header",
            data: {
                text: "LINEでのご依頼・お見積り",
                withBacground: true,
                level: 4,
            },
        },
        {
            type: "paragraph",
            data: {
                text: "こちらのQRコードを読み取るか、お友達登録ボタンをクリックして弊社公式LINEよりご連絡ください。",
            },
        },
        {
            type: "image",
            data: {
                caption: "",
                alt: "",
                file: {
                    url: "",
                },
            },
        },
    ],
    contentType: 3,
};

module.exports.homePage = {
    title: "不用品・粗大ゴミの回収ならおたすけクリーン",
    content: [
        {
            style: "normal",
            title: "その不用品の回収、お任せください！",
            isDisplay: true,
            content: [
                {
                    type: "image",
                    data: {
                        file: {
                            url: "",
                        },
                        caption: "",
                    },
                },
                {
                    type: "paragraph",
                    data: {
                        text: "We have been working on this project more than three years. Several large media projects help us to test and debug the Editor, to make it's core more stable. At the same time we significantly improved the API. Now, it can be used to create any plugin for any task. Hope you enjoy. 😏",
                    },
                },
            ],
        },
        {
            style: "with-background",
            title: "追加料金一切なし！",
            isDisplay: true,
            content: [
                {
                    type: "image",
                    data: {
                        file: {
                            url: "",
                        },
                        caption: "",
                    },
                },
                {
                    type: "paragraph",
                    data: {
                        text: "We have been working on this project more than three years. Several large media projects help us to test and debug the Editor, to make it's core more stable. At the same time we significantly improved the API. Now, it can be used to create any plugin for any task. Hope you enjoy. 😏",
                    },
                },
            ],
        },
        {
            style: "list-service",
            title: "おたすけクリーンのお約束",
            isDisplay: true,
            content: [
                {
                    type: "list",
                    data: {
                        style: "ordered",
                        imageURL: "",
                        title: "最短30分以内に到着！",
                        description:
                            "We have been working on this project more than three years",
                    },
                },
                {
                    type: "list",
                    data: {
                        style: "ordered",
                        imageURL: "",
                        title: "24時間年中無休で対応可能！",
                        description:
                            "We have been working on this project more than three years.",
                    },
                },
                {
                    type: "list",
                    data: {
                        style: "ordered",
                        imageURL: "",
                        title: "コロナ対策を徹底しています！",
                        description:
                            "We have been working on this project more than three years. ",
                    },
                },
            ],
        },
        {
            style: "image-gallery-caption",
            title: "サービス案内",
            isDisplay: true,
            content: [
                {
                    type: "list",
                    data: {
                        style: "ordered",
                        imageURL: "",
                        title: "最短30分以内に到着！",
                        description:
                            "We have been working on this <strong>project</strong> more than three years",
                    },
                },
                {
                    type: "list",
                    data: {
                        style: "ordered",
                        imageURL: "",
                        title: "24時間年中無休で対応可能！",
                        description:
                            "We have been working on this project more than three years.",
                    },
                },
                {
                    type: "list",
                    data: {
                        style: "ordered",
                        imageURL: "",
                        title: "コロナ対策を徹底しています！",
                        description:
                            "We have been working on this project more than three years. ",
                    },
                },
                {
                    type: "list",
                    data: {
                        style: "ordered",
                        imageURL: "",
                        title: "コロナ対策を徹底しています！",
                        description:
                            "We have been working on this project more than three years. ",
                    },
                },
                {
                    type: "list",
                    data: {
                        style: "ordered",
                        imageURL: "",
                        title: "コロナ対策を徹底しています！",
                        description:
                            "We have been working on this project more than three years. ",
                    },
                },
                {
                    type: "list",
                    data: {
                        style: "ordered",
                        imageURL: "",
                        title: "コロナ対策を徹底しています！",
                        description:
                            "We have been working on this project more than three years. We have been working on this project more than three years. We have been working on this project more than three years. ",
                    },
                },
                {
                    type: "button",
                    data: {
                        style: "red",
                        name: "Button 1",
                    },
                },
            ],
        },
        {
            style: "image-gallery",
            title: "対応エリア",
            isDisplay: true,
            content: [
                {
                    type: "list",
                    data: {
                        style: "ordered",
                        imageURL: "",
                        title: "最短30分以内に到着！",
                        description:
                            "We have been working on this project more than three years",
                    },
                },
                {
                    type: "list",
                    data: {
                        style: "ordered",
                        imageURL: "",
                        title: "24時間年中無休で対応可能！",
                        description:
                            "We have been working on this project more than three years.",
                    },
                },
            ],
        },
        {
            style: "image-gallery",
            title: "対応エリア",
            isDisplay: true,
            content: [
                {
                    type: "list",
                    data: {
                        style: "ordered",
                        imageURL: "",
                        title: "最短30分以内に到着！",
                        description:
                            "We have been working on this project more than three years",
                    },
                },
            ],
        },
        {
            style: "list-sub",
            title: "Title1",
            isDisplay: true,
            content: [
                {
                    type: "list",
                    data: {
                        style: "ordered",
                        title: "キャンペーン実施中！",
                        subTitle: "お得に不用品回収・買取をしませんか？",
                        listContent: [
                            {
                                title: "CAMPAIGN 01",
                                description1:
                                    "見積り時に「ホームページを見た」と お伝えいただければ",
                                description2: "最大10,000円",
                            },
                            {
                                title: "CAMPAIGN 02",
                                description1:
                                    "おたすけクリーンをご利用いただいた人の紹介なら",
                                description2: "3,000円OFF",
                            },
                        ],
                    },
                },
            ],
        },
    ],
    contentType: 4,
};

module.exports.aboutUs = {
    title: "事業所概要",
    createDate: "",
    content: JSON.stringify([
        {
            type: "contact-list",
            data: {
                label: "事業所名",
                value: "おたすけクリーン",
            },
        },
        {
            type: "contact-list",
            data: {
                label: "所在地",
                value: "〒558-0011 大阪市住吉区苅田",
            },
        },
        {
            type: "contact-list",
            data: {
                label: "電話番号",
                value: "0120-993-829",
            },
        },
        {
            type: "contact-list",
            data: {
                label: "営業時間",
                value: "24時間",
            },
        },
        {
            type: "contact-list",
            data: {
                label: "定休日",
                value: "年中無休",
            },
        },
        {
            type: "contact-list",
            data: {
                label: "事業内容",
                value: "不用品買取・不用品回収、",
            },
        },
    ]),
    contentType: 5,
};

module.exports.footerContact = {
    title: "事業所概要",
    createDate: "",
    content: JSON.stringify([
        {
            type: "contact-list",
            data: {
                label: "電話番号",
                value: "0120-993-829",
            },
        },
        {
            type: "contact-list",
            data: {
                label: "受付時間",
                value: "24時間／年中無休",
            },
        },
        {
            type: "contact-list",
            data: {
                label: "対応エリア",
                value: "大阪・兵庫・奈良",
            },
        },
        {
            type: "contact-list",
            data: {
                label: "所在地",
                value: "〒558-0011<br />大阪市住吉区苅田",
            },
        },
    ]),
    contentType: 6,
};

module.exports.summaryContent = {
    title: "ご利用の流れ",
    content: JSON.stringify([
        { innerText: "回収までの流れ", location: "#f01" },
        { innerText: "取り扱いクレジットカード", location: "#f02" },
        { innerText: "LINEでのご相談方法", location: "#f03" },
        { innerText: "よくあるご質問", location: "#f04" },
    ]),
    contentType: 7,
};

module.exports.collection = {
    title: "回収までの流れ",
    id: "f01",
    content: JSON.stringify([
        {
            title: "1.お問い合わせ",
            content:
                'まずはお電話（<a class="tel-link" href="tel:0120569028">0120-569-028</a>）、<a href="https://lin.ee/9rjqYdx" rel="noopener" target="_blank">LINE</a>、<a href="/contact.html">メール</a>にてお問い合わせください。<br>初回のご相談・お見積りは無料ですので、お気軽にお申し付けください。',
            button: [
                { innerText: "お問い合わせフォーム", location: "/contact" },
                { innerText: "LINEでのご相談方法", location: "#f03" },
            ],
        },
        {
            title: "2.お見積り",
            content:
                "お問い合わせの際、ご都合の良い日時をお伝えください。<br> ご指定いただいた日時に、弊社スタッフが現場までお伺いいたします。",
        },
        {
            title: "3.片付け・回収作業",
            content:
                "お見積りに納得いただけたらご都合のよい日時を取り決め、作業にお伺いします。<br> もちろん即日対応も可能です。お見積りの際、スタッフにお申し付けください。",
        },
        {
            title: "4.作業終了、お支払い",
            content:
                "作業終了後、現金またはクレジットカード、または後日振り込みにてお支払ください。",
        },
    ]),
    contentType: 8,
};

module.exports.paymentMethod = {
    title: "取り扱いクレジットカード",
    id: "f02",
    content: [
        {
            src: "",
            alt: "クレジットカード支払_VISA",
            caption: "",
        },
        {
            src: "",
            alt: "クレジットカード支払_アメックス",
            caption: "",
        },
        {
            src: "",
            alt: "クレジットカード支払_マスター",
            caption: "",
        },
        {
            src: "",
            alt: "クレジットカード支払_JCB",
            caption: "",
        },
    ],
    contentType: 9,
};

module.exports.guide = {
    title: "LINEでのご相談・お見積り方法",
    id: "f03",
    createDate: "",
    content: [
        {
            type: "paragraph",
            data: {
                text: "トーク機能で簡単に写真や文章を送っていただくことで、24時間無料でお見積りやご依頼ができます。<br />下記の友達追加バナーをクリックorタップ、またはQR読み込みで弊社の公式アカウントが開きますので、お友達追加の上、ご連絡ください。",
            },
        },
        {
            type: "paragraph",
            data: {
                text: "もちろん、ご不明な点などをご相談していただいても構いません。弊社スタッフが丁寧に対応いたします。",
            },
        },
        {
            type: "image",
            data: {
                caption: "",
                alt: "LINEお見積り",
                file: {
                    url: "",
                },
            },
        },
    ],
    contentType: 10,
};

module.exports.lineTemplate = {
    title: "",
    id: "",
    createDate: "",
    content: [
        {
            type: "header",
            data: {
                text: "LINEにて下記内容をお伝えください",
                withBackground: true,
                level: 4,
            },
        },
        {
            type: "list",
            data: {
                style: "unordered",
                items: [
                    "ご相談内容（見積り依頼）、お名前、住所、ご連絡先電話番号",
                    "処分を希望する品物、またはそのお写真",
                ],
            },
        },
        {
            type: "list",
            data: {
                style: "asterisk",
                items: [
                    "内容を確認後、その他に関しましては後程スタッフより詳細を伺うこともございます。",
                    "写真添付は何枚でも可能です。",
                ],
            },
        },
        {
            type: "image",
            data: {
                caption: "",
                alt: "",
                file: {
                    url: "",
                },
            },
        },
    ],
    contentType: 11,
};

module.exports.listQA = {
    title: "よくあるご質問",
    id: "f04",
    content: JSON.stringify([
        {
            question: "見積りだけでも来てもらえますか？",
            answer: "お電話でもおおよその料金を出すこともできますし、詳しいご要望をお伺いし正確な料金をご提示することもできます。",
            button: [
                { innerText: "お問い合わせフォーム", location: "/contact" },
            ],
        },
        {
            question: "電話した当日に作業してもらえますか？",
            answer: "可能です！ご予約の状況にもよりますが、早急に近くの現場スタッフに確認をとり迅速に対応させていただきます！",
        },
        {
            question: "梱包、分別は必要ですか？",
            answer: "必要ありません！そのままの状態で問題ございませんので担当スタッフにお任せください！",
        },
        {
            question: "電話し回収出来ないものはありますか？",
            answer: "基本的にございませんので、何でもご相談ください！",
        },
    ]),
    contentType: 12,
};

module.exports.contactUs = {
    title: "お問い合わせはこちら",
    createDate: "",
    content: [
        {
            type: "image",
            data: {
                caption: "",
                alt: "",
                file: {
                    url: "",
                },
            },
        },
    ],
    contentType: 13,
};
