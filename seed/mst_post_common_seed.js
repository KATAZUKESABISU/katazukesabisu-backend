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
    isDisplay: true,
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
    isDisplay: true,
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
    isDisplay: true,
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
                withBackground: true,
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
    isDisplay: true,
    contentType: 3,
};

module.exports.introduction = {
    title: "不用品の回収は、全てお任せください！",
    createDate: "",
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
                text: "かたづけサービスは不用品・粗大ゴミ・引っ越しでのゴミなどの回収に困っているお客様は、ご軽気にご連絡ください",
            },
        },
        {
            type: "paragraph",
            data: {
                text: "<strong>お見積りは無料です！</strong>",
            },
        },
    ],
    isDisplay: true,
    contentType: 4,
    _name: "introduction",
};

module.exports.serviceIntro = {
    title: "追加料金は一切なし！",
    createDate: "",
    style: "with-background",
    isDisplay: true,
    button: [{ innerText: "料金プランはこちら", location: "/service#price" }],
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
            type: "header",
            data: {
                text: "出張費・お見積り・基本料金は全て無料！",
                withBackground: true,
                level: 4,
            },
        },
        {
            type: "paragraph",
            data: {
                text: "全てお任せください！お客様はお立ち合いだけです。",
            },
        },
        {
            type: "paragraph",
            data: {
                text: "お見積りでご提示した金額は搬出作業費や掃除作業費なども全て含まれておりますので、追加料金は一切ありません。",
            },
        },
    ],
    isDisplay: true,
    contentType: 4,
    _name: "serviceIntro",
};

module.exports.serviceList = {
    title: "おたすけクリーンのお約束",
    content: [
        {
            image: "",
            title: "最短30分以内に到着！",
            content: "お申し込みいただいてから最短で30分で作業を開始します。",
        },
        {
            image: "",
            title: "24時間年中無休で対応可能！",
            content:
                "思い立った時にお申し込みください。24時間体制で即日対応可能です。",
        },
        {
            image: "",
            title: "コロナ対策を徹底しています！",
            content:
                "手洗い・検温・消毒・マスクの着用など、感染拡大防止策を徹底しております。",
        },
    ],
    isDisplay: true,
    contentType: 4,
    _name: "serviceList",
};

module.exports.serviceGuide = {
    title: "サービス案内",
    style: "width-background",
    button: [{ innerText: "サービス・料金案内はこちら", location: "/service" }],
    content: [
        {
            src: "",
            subTitle: "粗大ゴミの回収",
            alt: "クレジットカード支払_VISA",
            caption: "山積みのゴミにお困りしませんか？",
        },
        {
            src: "",
            subTitle: "不用品の撤去",
            alt: "クレジットカード支払_VISA",
            caption: "山積みのゴミにお困りしませんか？",
        },
        {
            src: "",
            subTitle: "引っ越しのお掃除",
            alt: "クレジットカード支払_VISA",
            caption: "お引越しのお客様はご安心いただけます！",
        },
        {
            src: "",
            subTitle: "モノの買取",
            alt: "クレジットカード支払_VISA",
            caption: "捨てそうな家電製品は高額で販売できるかもしれません！",
        },
    ],
    isDisplay: true,
    contentType: 4,
    _name: "serviceGuide",
};

module.exports.availableArea = {
    title: "対応エリア",
    style: "flex justify-center [&>figure>img.img-map]:h-[500px]",
    content: [
        {
            src: "",
            alt: "大阪．兵庫．奈良エリア",
            caption: "",
        },
    ],
    isDisplay: true,
    contentType: 4,
    _name: "availableArea",
};

module.exports.coupons = {
    title: "キャンペーン実施中！",
    isDisplay: false,
    content: {
        heading: {
            text: "出張費・お見積り・基本料金無料！",
            level: 4,
        },
        coupons: [
            {
                title: "CAMPAIGN 01",
                description:
                    "見積り時に「<strong>ホームページを見た</strong>」と <br/> お伝えいただければ",
                saleAmount: "最大<strong>10,000</strong>円OFF",
            },
            {
                title: "CAMPAIGN 02",
                description:
                    "おたすけクリーンを <br/> ご利用いただいた人の紹介なら",
                saleAmount: "最大<strong>10,000</strong>円OFF",
            },
        ],
    },
    contentType: 4,
    _name: "coupons",
};

module.exports.aboutUs = {
    title: "事業所情報",
    createDate: "",
    content: JSON.stringify([
        {
            type: "contact-list",
            data: {
                label: "企業名",
                value: "MaiLinhGroup株式会社",
            },
        },
        {
            type: "contact-list",
            data: {
                label: "所在地",
                value: "愛知県春日井市中央通2-78",
            },
        },
        {
            type: "contact-list",
            data: {
                label: "事業所名",
                value: "かたづけサービス",
            },
        },
        {
            type: "contact-list",
            data: {
                label: "電話番号",
                value: "070-2213-4567",
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
                value: "不用品・粗大ゴミの回収、引っ越しの掃除、遺品整理など",
            },
        },
    ]),
    isDisplay: true,
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
                value: "070-2213-4567",
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
                value: "",
            },
        },
        {
            type: "contact-list",
            data: {
                label: "所在地",
                value: "",
            },
        },
    ]),
    isDisplay: true,
    contentType: 6,
};

module.exports.summary = {
    title: "ご利用の流れ",
    content: JSON.stringify([
        { innerText: "回収までの流れ", location: "#f01" },
        { innerText: "取り扱いクレジットカード", location: "#f02" },
        { innerText: "LINEでのご相談方法", location: "#f03" },
        { innerText: "よくあるご質問", location: "#f04" },
    ]),
    isDisplay: false,
    contentType: 7,
    _name: "summary",
};

module.exports.collection = {
    title: "回収までの流れ",
    id: "f01",
    content: JSON.stringify([
        {
            title: "1.お問い合わせ",
            content:
                'まずはお電話（<a class="tel-link" href="tel:07022134567">070-2213-4567</a>）、<a href="https://lin.ee/9rjqYdx" rel="noopener" target="_blank">LINE</a>などにてお問い合わせいただきます。',
            button: [
                { innerText: "お問い合わせフォーム", location: "/contact" },
                { innerText: "LINEでのご相談方法", location: "#f03" },
            ],
        },
        {
            title: "2.お見積り",
            content:
                " 現場までお伺いいたしますので、ご都合の良い日時を教えてください！",
        },
        {
            title: "3.作業開始",
            content:
                "お提示のお見積りで問題がなければ、ご都合の良い日時を取り決め、作業を開始いたします。<br> 即日も対応可能です！",
        },
        {
            title: "4.作業終了、お支払い",
            content: "現金もクレジットカードも振り込みも対応いたします！",
        },
    ]),
    isDisplay: true,
    contentType: 7,
    _name: "collection",
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
    isDisplay: true,
    contentType: 7,
    _name: "paymentMethod",
};

module.exports.guide = {
    title: "LINEでのご相談・お見積り方法",
    id: "f03",
    createDate: "",
    content: [
        {
            type: "paragraph",
            data: {
                text: "LINEでもご相談とお見積りのご依頼を簡単にできますので、このQRコードで「友だち追加」をして、ご連絡ください！",
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
    isDisplay: true,
    contentType: 7,
    _name: "guide",
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
    isDisplay: false,
    contentType: 7,
    _name: "lineTemplate",
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
    isDisplay: true,
    contentType: 7,
    _name: "listQA",
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
    isDisplay: true,
    contentType: 13,
};

module.exports.blogCommon = {
    title: "ブログ",
    createDate: "",
    content: "",
    contentType: 14,
};
