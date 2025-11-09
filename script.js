// Данные товаров
const products = [
    // СМАРТФОНЫ
    {
        id: 1,
        name: "iPhone 15 Pro Max",
        description: "Флагманский смартфон Apple с титановым корпусом и улучшенной камерой. Высочайший уровень производительности.",
        price: 129990,
        category: "Смартфоны",
        hasColors: true,
        colors: {
            "Черный": {
                image: "images/15 pro max/15 pro max black/top1.webp",
                images: [
                    "images/15 pro max/15 pro max black/top1.webp",
                    "images/15 pro max/15 pro max black/08fcd9b8265ee819547e65399faa3c2858ed767d03a126ce226fbd4dcdbc9b7f.jpg.webp",
                    "images/15 pro max/15 pro max black/6f878d28c47b7aafce03870c5e00781ba530051ba788c07a2acd1e47b5a0c49f.jpg.webp",
                    "images/15 pro max/15 pro max black/6f8fe505a22427c326d5e21e89fe319d8678d18117db92ee145b796bc5a3170c.jpg.webp",
                    "images/15 pro max/15 pro max black/90521544990b8b6141a0ceb95cb3c92b1c1f67aec43e5bf3c102e0bf1ed55066.jpg.webp",
                    "images/15 pro max/15 pro max black/9b5079c958ad321a3ee57aadebbde9830fc35b3cd0a6ea3eb31483a6b78a6597.jpg.webp",
                    "images/15 pro max/15 pro max black/e5dfaaf92fa0a6b31e9cccb4d88a5d1a58ce35c97b055efae6f1373ee6be0e5b.jpg.webp"
                ]
            },
            "Синий": {
                image: "images/15 pro max/15 pro max blue/1e3d6dc283feae1a340a1d1fbdb7a9411a9ba77beb798b5b19d40762feaa2944.jpg.webp",
                images: [
                    "images/15 pro max/15 pro max blue/1e3d6dc283feae1a340a1d1fbdb7a9411a9ba77beb798b5b19d40762feaa2944.jpg.webp",
                    "images/15 pro max/15 pro max blue/dfad8d15bb00ae2a0c4d249fa9011308a4167f2229e08d79f8f0a41cf90464b6.jpg.webp",
                    "images/15 pro max/15 pro max blue/0955d5df4a099b1ce81bf9fde22d2cb0bacd6174308a923d735003ade9494bd8.jpg.webp",
                    "images/15 pro max/15 pro max blue/1d1a9c3dbc648ff7ec6961c38ff6ae51918745870de15fb7221d2f01341f4ea9.jpg.webp",
                    "images/15 pro max/15 pro max blue/956219dff170e579b115fcaa3a416a76989b450a76e33f83de5d8a39f4dce1f1.jpg.webp",
                    "images/15 pro max/15 pro max blue/9d67c8001e32cb3a8e6f0afdae999057b97ab0cc0b3260025743f9fe218fa9df.jpg.webp",
                    "images/15 pro max/15 pro max blue/d05c0400f3ee7accd4b77399c39f16623d1a2230b09b46b4de437dad6dcef890.jpg.webp"
                ]
            },
            "Серый": {
                image: "images/15 pro max/15 pro max grey/top1.webp",
                images: [
                    "images/15 pro max/15 pro max grey/top1.webp",
                    "images/15 pro max/15 pro max grey/08de377a334a375eeea526e445142e522659d533e9f6c41955a6bcfc53f8beff.jpg.webp",
                    "images/15 pro max/15 pro max grey/5479bdbbf374834d02bfe18dd0ab0cd2c815c57c282245d55c4dec6c3c11a5b0.jpg.webp",
                    "images/15 pro max/15 pro max grey/7b24e33d2373b6589b15b3f27d1f39fb25667bbb235b0b620482cfc816e03687.jpg.webp",
                    "images/15 pro max/15 pro max grey/8421f22cdca8acfda0d58b7be17e3dae07e7673e80800f30c810680bdc34468f.jpg.webp",
                    "images/15 pro max/15 pro max grey/f87841f854f495d474080bd3981127993cbd2639ede8759be19655c0cddd585b.jpg.webp"
                ]
            },
            "Белый": {
                image: "images/15 pro max/15 pro max white/top1.webp",
                images: [
                    "images/15 pro max/15 pro max white/top1.webp",
                    "images/15 pro max/15 pro max white/1bb0489045b486cfd30181c16d25ebf73de0e0bf9a6f6cafee935a7f951f3129.jpg.webp",
                    "images/15 pro max/15 pro max white/49f57adcb9ac3dfdc74d84e32e64130db4039cf7d8a4ac3e6419192ed9a3cb4c.jpg.webp",
                    "images/15 pro max/15 pro max white/57897c2ef5f9cc2742949e7d5a60efb32d5aa3b08828375f64e677a1a1d87cdb.jpg.webp",
                    "images/15 pro max/15 pro max white/61c1447b4a493f5861ac48df0cbc1aac3c38e7701c9fa0abf6de612776f4a1f0.jpg.webp",
                    "images/15 pro max/15 pro max white/7882e8e6ffffcfef73224bc2f4720db1af68db4487a294465fb25d97bff4f622.jpg.webp",
                    "images/15 pro max/15 pro max white/c182e6f7e86b91e2cfc1cda35b279d67677eb5d2e51c740f9e349563728b6111.jpg.webp"
                ]
            }
        },
        image: "images/15 pro max/15 pro max black/top1.webp",
        images: [
            "images/15 pro max/15 pro max black/top1.webp",
            "images/15 pro max/15 pro max black/08fcd9b8265ee819547e65399faa3c2858ed767d03a126ce226fbd4dcdbc9b7f.jpg.webp",
            "images/15 pro max/15 pro max black/6f878d28c47b7aafce03870c5e00781ba530051ba788c07a2acd1e47b5a0c49f.jpg.webp",
            "images/15 pro max/15 pro max black/6f8fe505a22427c326d5e21e89fe319d8678d18117db92ee145b796bc5a3170c.jpg.webp",
            "images/15 pro max/15 pro max black/90521544990b8b6141a0ceb95cb3c92b1c1f67aec43e5bf3c102e0bf1ed55066.jpg.webp",
            "images/15 pro max/15 pro max black/9b5079c958ad321a3ee57aadebbde9830fc35b3cd0a6ea3eb31483a6b78a6597.jpg.webp",
            "images/15 pro max/15 pro max black/e5dfaaf92fa0a6b31e9cccb4d88a5d1a58ce35c97b055efae6f1373ee6be0e5b.jpg.webp"
        ],
        specs: [
            "Процессор: Apple A17 Pro",
            "Оперативная память: 8 GB",
            "Накопитель: 256 GB",
            "Экран: 6.7 дюйма Super Retina XDR",
            "Камера: 48 Мп основной + 12 Мп широкоугольная + 12 Мп телефото",
            "Корпус: Титан, защита IP68"
        ],
        has3D: true,
        model3D: "models/iphone 15 pro max black/apple_iphone_15_pro_max_black.glb",
        hasTradeIn: true
    },
    {
        id: 2,
        name: "Samsung Galaxy S24 Ultra",
        description: "Флагман Samsung с S Pen, 200 Мп камерой и AI-функциями. Максимальная производительность и творчество.",
        price: 109990,
        category: "Смартфоны",
        hasColors: true,
        colors: {
            "Черный": {
                image: "images/Samsung Galaxy S24 Ultra/Samsung Galaxy S24 Ultra black/top1.webp",
                images: [
                    "images/Samsung Galaxy S24 Ultra/Samsung Galaxy S24 Ultra black/top1.webp",
                    "images/Samsung Galaxy S24 Ultra/Samsung Galaxy S24 Ultra black/1af0087ca2964d0b1f5befccc57db0a68268e0e848a74ebbd57808cde8923ce0.jpg.webp",
                    "images/Samsung Galaxy S24 Ultra/Samsung Galaxy S24 Ultra black/54408be572f1ef1f554c98c89db8f486f897db036e03f0829a6c8ba7f8c3858a.jpg.webp",
                    "images/Samsung Galaxy S24 Ultra/Samsung Galaxy S24 Ultra black/59adff8cbfd3be6e2d1b2a6d741772dec7a3e4155e3878ad01f26e9a7bec5d6a.jpg.webp",
                    "images/Samsung Galaxy S24 Ultra/Samsung Galaxy S24 Ultra black/5e920095534d841c364c6c5f99e952051f973c345666d4cce875c294d4810783.jpg.webp",
                    "images/Samsung Galaxy S24 Ultra/Samsung Galaxy S24 Ultra black/9cb58590a922fab2e038568c13325771d7fa201e93312914a5bc249fb8cf8264.jpg.webp",
                    "images/Samsung Galaxy S24 Ultra/Samsung Galaxy S24 Ultra black/c517ef1b94b9605473f47cc54e1b5d580c2bff4d09a1deb36e475eb260ba5233.jpg.webp",
                    "images/Samsung Galaxy S24 Ultra/Samsung Galaxy S24 Ultra black/ee70c5559e3f4be3236e1348578af80a05c759733c8d4819b7b2fef2ec04d406.jpg.webp",
                    "images/Samsung Galaxy S24 Ultra/Samsung Galaxy S24 Ultra black/fcfae337e6632c685c5f9c9be5fd075cb5178de250731e2ebc365dc27c5e442a.jpg.webp"
                ]
            },
            "Золотой": {
                image: "images/Samsung Galaxy S24 Ultra/Samsung Galaxy S24 Ultra gold/top1.png",
                images: [
                    "images/Samsung Galaxy S24 Ultra/Samsung Galaxy S24 Ultra gold/top1.png",
                    "images/Samsung Galaxy S24 Ultra/Samsung Galaxy S24 Ultra gold/rfqb3q2iu64ok6rchal2yfmdwq7jn8ss.jpg",
                    "images/Samsung Galaxy S24 Ultra/Samsung Galaxy S24 Ultra gold/fg09lglpryatlo8fw70we1yafgdopk25.jpg",
                    "images/Samsung Galaxy S24 Ultra/Samsung Galaxy S24 Ultra gold/qv781u7c8kyqbupcs1bwbbxa2bz28a8f.png"
                ]
            }
        },
        image: "images/Samsung Galaxy S24 Ultra/Samsung Galaxy S24 Ultra black/top1.webp",
        images: [
            "images/Samsung Galaxy S24 Ultra/Samsung Galaxy S24 Ultra black/top1.webp",
            "images/Samsung Galaxy S24 Ultra/Samsung Galaxy S24 Ultra black/1af0087ca2964d0b1f5befccc57db0a68268e0e848a74ebbd57808cde8923ce0.jpg.webp",
            "images/Samsung Galaxy S24 Ultra/Samsung Galaxy S24 Ultra black/54408be572f1ef1f554c98c89db8f486f897db036e03f0829a6c8ba7f8c3858a.jpg.webp",
            "images/Samsung Galaxy S24 Ultra/Samsung Galaxy S24 Ultra black/59adff8cbfd3be6e2d1b2a6d741772dec7a3e4155e3878ad01f26e9a7bec5d6a.jpg.webp"
        ],
        specs: [
            "Процессор: Snapdragon 8 Gen 3",
            "Оперативная память: 12 GB",
            "Накопитель: 256 GB",
            "Экран: 6.8 дюйма Dynamic AMOLED 2X",
            "Камера: 200 Мп основной + 12 Мп широкоугольная + 50 Мп телефото",
            "Дополнительно: S Pen в комплекте"
        ],
        has3D: true,
        model3D: "models/samsung_s24_ultra.glb",
        hasTradeIn: true
    },
    {
        id: 3,
        name: "iPhone 14",
        description: "Отличный смартфон Apple с чипом A15 Bionic. Надежность, производительность и стиль.",
        price: 69990,
        category: "Смартфоны",
        hasColors: true,
        colors: {
            "Черный": {
                image: "images/Iphone 14/Iphone 14 black/top1.webp",
                images: [
                    "images/Iphone 14/Iphone 14 black/top1.webp",
                    "images/Iphone 14/Iphone 14 black/0a70d96349830182e4aaffdcc003f9f623b393b07df9849c2ff38526c09e1d95.jpg.webp",
                    "images/Iphone 14/Iphone 14 black/8dbc0f1c317b597f2edca902d1399ff6390715c53301034911803ac50c7ddad7.jpg.webp",
                    "images/Iphone 14/Iphone 14 black/952786efec8763d1231ade8feb27cc92a55db30934ad31085cc47cfd66542d54.jpg.webp",
                    "images/Iphone 14/Iphone 14 black/b00b66b231494783c787e909f5024af3569db7f94c64e3d06c916a888c61d0b2.jpg.webp",
                    "images/Iphone 14/Iphone 14 black/f4dc053587ce7dd6326ba898a16bb65c9edef060e8fb651c7ef28331f4a469a7.jpg.webp"
                ]
            },
            "Белый": {
                image: "images/Iphone 14/Iphone 14 white/top1.webp",
                images: [
                    "images/Iphone 14/Iphone 14 white/top1.webp",
                    "images/Iphone 14/Iphone 14 white/0ea9d0c25a0ce7c01343c89a5b6601ef0c0d5546b3c28b377540fbea90aa5f12.jpg.webp",
                    "images/Iphone 14/Iphone 14 white/310687a01978aea2e2911d0737fc6853443d1215f0ff1e74e8afde87827a78ec.jpg.webp",
                    "images/Iphone 14/Iphone 14 white/79e880b6e5abef4be29ad8d4f000acab82b65081386e4eacfb930cd5e7f31508.jpg.webp",
                    "images/Iphone 14/Iphone 14 white/d8aad887d960e65fc68840e1725d0c8e4f29d79373809076aa408c3e88b56ab4.jpg.webp",
                    "images/Iphone 14/Iphone 14 white/df20a46e920dcc78d67302d181c2a9940b8bde6b031cefc4efc3ab718e7e4777.jpg.webp"
                ]
            }
        },
        image: "images/Iphone 14/Iphone 14 black/top1.webp",
        images: [
            "images/Iphone 14/Iphone 14 black/top1.webp",
            "images/Iphone 14/Iphone 14 black/0a70d96349830182e4aaffdcc003f9f623b393b07df9849c2ff38526c09e1d95.jpg.webp",
            "images/Iphone 14/Iphone 14 black/8dbc0f1c317b597f2edca902d1399ff6390715c53301034911803ac50c7ddad7.jpg.webp"
        ],
        specs: [
            "Процессор: Apple A15 Bionic",
            "Оперативная память: 6 GB",
            "Накопитель: 128 GB",
            "Экран: 6.1 дюйма Super Retina XDR",
            "Камера: 12 Мп + 12 Мп широкоугольная",
            "Батарея: до 20 часов видео"
        ],
        has3D: true,
        model3D: "models/iphone 14/iphone_14.glb"
    },
    
    // НАУШНИКИ
    {
        id: 4,
        name: "AirPods Pro 2",
        description: "Беспроводные наушники с активным шумоподавлением и пространственным звуком. Кастомный чип H2.",
        price: 25990,
        category: "Наушники",
        image: "images/AirPods Pro 2/top1.webp",
        images: [
            "images/AirPods Pro 2/top1.webp",
            "images/AirPods Pro 2/1930777d7cc89fa47668ef6c1de8ebd9c72acb0fdb8be9da0005b6c9e0f1bb45.jpg.webp",
            "images/AirPods Pro 2/597e8ebaf3543bbf29c7a493f0f950e3ef37c968d91ba06c9d0ec0ebbbd2af82.jpg.webp",
            "images/AirPods Pro 2/6b763a717847bc998576762b76186be0e05a7eecc90839493630352e08b2a30d.jpg.webp",
            "images/AirPods Pro 2/774623d144281be3667c178ad7f1572b013471e7f0bde741442132bbd6605a78.jpg.webp",
            "images/AirPods Pro 2/f01073c7927b654a35eafaf6292c50c818433d7749dfcc822b76c09fded4ffba.jpg.webp",
            "images/AirPods Pro 2/fb4ce035f130b7812895d06d2db154b87347d28044c3b7615f89a139e7f82c0e.jpg.webp"
        ],
        specs: [
            "Чип: H2 от Apple",
            "Активное шумоподавление адаптивное",
            "Батарея: 6 часов, 30 часов в чехле",
            "Водозащита: IPX4",
            "Звук: Персонализированное пространственное аудио"
        ],
        has3D: true,
        model3D: "models/AirPods Pro 2/airpods_pro_with_magsafe_charging_case_ios15.glb"
    },
    {
        id: 5,
        name: "Sony WH-1000XM5",
        description: "Премиальные беспроводные наушники с лучшим в мире шумоподавлением. Обновленный дизайн и улучшенное звучание.",
        price: 39990,
        category: "Наушники",
        image: "images/Sony WH-1000XM5/top1.webp",
        images: [
            "images/Sony WH-1000XM5/top1.webp",
            "images/Sony WH-1000XM5/04937f6f234439401b88ee3d36fbb07c610c68690dafccda99b0d9523665f477.jpg.webp",
            "images/Sony WH-1000XM5/360059d5fc2d5c02b399546df60f2d30b763288952d9788df3e4d20a80bba9ac.jpg.webp",
            "images/Sony WH-1000XM5/6d3296f06d32ff1d0f5a8627359f5a47eb379c35c9314b7c3117d01922eee735.jpg.webp",
            "images/Sony WH-1000XM5/c6faee61c83b54e73d38a4bad8552d5d758d50b43c2d3f2f24bd2777bd387f3f.jpg.webp",
            "images/Sony WH-1000XM5/da9e742289e85bbff398e7b3fc1d6e7cfce693fd9644c8c15efdb6badd484644.jpg.webp",
            "images/Sony WH-1000XM5/f19ea817ea58bbd3e66cbe792c85b53bec71f4b88ae65975977b2c603e71994d.jpg.webp"
        ],
        specs: [
            "Bluetooth: 5.2",
            "Активное шумоподавление",
            "Батарея: 30 часов с ANC, 40 часов без",
            "Зарядка: USB-C, быстрая зарядка",
            "Вес: 250 г",
            "Звук: HD Noise Canceling Processor QN1"
        ],
        has3D: true,
        model3D: "models/Sony WH-1000XM5/sony_wh-1000xm5.glb"
    },
    {
        id: 6,
        name: "JBL Tune 510BT",
        description: "Надежные Bluetooth наушники с басовым звуком. Отличное соотношение цена-качество.",
        price: 3990,
        category: "Наушники",
        image: "images/JBL Tune 510BT/top1.webp",
        images: [
            "images/JBL Tune 510BT/top1.webp",
            "images/JBL Tune 510BT/24a54c6863a583df23ffbb471950dea3326bca61f62227251478ff9e82bdda2d.jpg.webp",
            "images/JBL Tune 510BT/2da7a38fda1f969a10e904d63792edfee9fcc890ab1492ddf6a7ef3f158acdcf.jpg.webp",
            "images/JBL Tune 510BT/3d1cca34800bd14d42430e1d9765b0e8bd7d92dc4e9da4a7a7bc696884706c05.jpg.webp",
            "images/JBL Tune 510BT/6ee93b14adc58124c82d5bcb8d1cd907cf5a78f03b74d121236dfb2fe235c08a.jpg.webp",
            "images/JBL Tune 510BT/c9f2797bbd91886904602fa2c815578062c07bd3b8667d85699137c7b04f07f2.jpg.webp"
        ],
        specs: [
            "Bluetooth: 5.0",
            "Батарея: до 40 часов работы",
            "Зарядка: USB-C",
            "Складывающиеся: да",
            "Вес: 160 г",
            "Звук: JBL Bass Boost"
        ],
        has3D: true,
        model3D: "models/JBL Tune 510BT/jbl_tune_720bt.glb"
    },
    
    // УМНЫЕ ЧАСЫ
    {
        id: 7,
        name: "Apple Watch Series 9",
        description: "Умные часы Apple с чипом S9, всегда включенным дисплеем Retina и точными показателями здоровья.",
        price: 39990,
        category: "Умные часы",
        image: "images/Apple Watch Series 9/top1.webp",
        images: [
            "images/Apple Watch Series 9/top1.webp",
            "images/Apple Watch Series 9/215ac8ef49bd53c85de85905cca5833ea2bea88da6a357eab62f515bee6d902f.jpg.webp",
            "images/Apple Watch Series 9/308ee9825c35be43894b02cbf38f4d0395d0285a71a137d601bf4f0d75c073a1.jpg.webp",
            "images/Apple Watch Series 9/9cc3623da82fdcf44824d6ca19885c71349a4f1e55bf9eb72ea343a05e103d8d.jpg.webp",
            "images/Apple Watch Series 9/a58dcb74717a4602f11f12c6a03a281c7849f06b0a24108da18ec2273ca95445.jpg.webp",
            "images/Apple Watch Series 9/afd0a5817cca8508a5653c6e9b66afa693651a2545c39673464baf448d585db6.jpg.webp",
            "images/Apple Watch Series 9/f9a0fc2fa6bd6105c5e7f038f6781526278de79d2ef8a08e4344d217ee04ba18.jpg.webp"
        ],
        specs: [
            "Чип: Apple S9",
            "Дисплей: 45 мм Always-On Retina",
            "Батарея: до 18 часов",
            "Давление: IP6X, водостойкость 50м",
            "Операционная система: watchOS 10",
            "Датчики: GPS, ЭКГ, пульс, SpO2"
        ],
        has3D: true,
        model3D: "models/Apple Watch Series 9/apple_watch_series_9.glb"
    },
    {
        id: 8,
        name: "Samsung Galaxy Watch 6",
        description: "Умные часы Samsung с AMOLED экраном и продвинутой системой здоровья. Автономность до 40 часов.",
        price: 24990,
        category: "Умные часы",
        image: "images/Samsung Galaxy Watch 6/top1.webp",
        images: [
            "images/Samsung Galaxy Watch 6/top1.webp",
            "images/Samsung Galaxy Watch 6/08a2ced8086a77ecc1997461856336b610f46dd2aa70d6dee1272d380c6982ed.jpg.webp",
            "images/Samsung Galaxy Watch 6/29e94d60e902cecb15035c65cadc69a29ed99bb3f6f30f14281690227117dd57.jpg.webp",
            "images/Samsung Galaxy Watch 6/569d377702f1bb84262e20428b50ef4ed92ecd8a40fd72f4397fa154c22c7a1b.jpg.webp",
            "images/Samsung Galaxy Watch 6/5e278f2c318bf9233cf06a6822f9cd46467e117d38ab1498685c52d1315d31e4.jpg.webp",
            "images/Samsung Galaxy Watch 6/c840ddbff827eb26f1077fb59298fa7dce10c71aa7b197e13d94341ce88e0d32.jpg.webp",
            "images/Samsung Galaxy Watch 6/e4649adeb5d562b38384024468def9bf764eec6ef7676b78fda3f118ab30c4f4.jpg.webp"
        ],
        specs: [
            "Процессор: Exynos W930",
            "Дисплей: 40 мм Super AMOLED",
            "Батарея: до 40 часов работы",
            "Защита: IP68",
            "Операционная система: WearOS 4",
            "Датчики: GPS, ЭКГ, пульс, температура тела"
        ],
        has3D: false
    },
    
    // КАБЕЛИ
    {
        id: 9,
        name: "Кабель USB-C на Lightning",
        description: "Оригинальный кабель Apple длиной 1 метр. Быстрая зарядка и синхронизация данных.",
        price: 1990,
        category: "Кабели",
        image: "images/Кабель USB-C на Lightning/top1.webp",
        images: [
            "images/Кабель USB-C на Lightning/top1.webp",
            "images/Кабель USB-C на Lightning/6013a219a9e43f143afeb847b4fa76241ec9cf704d7abecfbf483f2b50b5b4fd.jpg.webp",
            "images/Кабель USB-C на Lightning/73222236c5d1dd37f4a28f63f904110af7d7bbe4421b180fd5440d373f14cb9f.jpg.webp",
            "images/Кабель USB-C на Lightning/c962851c70f3c355975ccbc76316938226d7c5a240a1969fa6c203c368ff6df8.jpg.webp"
        ],
        specs: [
            "Длина: 1 метр",
            "Тип: USB-C на Lightning",
            "Скорость передачи: до 480 Мбит/с",
            "Зарядка: быстрая зарядка",
            "Гарантия: 1 год",
            "Материал: устойчивый к износу"
        ],
        has3D: false
    },
    {
        id: 10,
        name: "Кабель USB-C на USB-C",
        description: "Универсальный кабель Type-C длиной 2 метра. Подходит для всех современных устройств.",
        price: 1290,
        category: "Кабели",
        image: "images/Кабель USB-C на USB-C/top1.webp",
        images: [
            "images/Кабель USB-C на USB-C/top1.webp",
            "images/Кабель USB-C на USB-C/212c6f9c90caa7f6e1164dd5911c4e79b3902da7161cee2dbccf14ff7a8230d1.jpg.webp",
            "images/Кабель USB-C на USB-C/8bef763d7155ca4dbd400fe04ef665f8e83f45c60197dfa95bd9fbc70e1666f8.jpg.webp",
            "images/Кабель USB-C на USB-C/bc967f75de3c21d9be25ee532f7ffbba5a3fd07306fc09f963b403faf8727548.jpg.webp"
        ],
        specs: [
            "Длина: 2 метра",
            "Тип: USB-C на USB-C",
            "Скорость передачи: до 10 Гбит/с",
            "Зарядка: Power Delivery 100W",
            "Гарантия: 2 года",
            "Плетеный кабель: повышенная прочность"
        ],
        has3D: false
    },
    {
        id: 11,
        name: "Кабель Belkin Wireless Charger",
        description: "Беспроводная зарядка на 15W для iPhone и совместимых устройств. Быстрая и удобная.",
        price: 3490,
        category: "Кабели",
        image: "images/Кабель Belkin Wireless Charger/top.webp",
        images: [
            "images/Кабель Belkin Wireless Charger/top.webp",
            "images/Кабель Belkin Wireless Charger/optimize.webp",
            "images/Кабель Belkin Wireless Charger/optimize (1).webp",
            "images/Кабель Belkin Wireless Charger/optimize (2).webp"
        ],
        specs: [
            "Мощность: 15W",
            "Совместимость: iPhone, Samsung, AirPods",
            "Размеры: 95 x 95 x 12 мм",
            "Кабель: USB-C 1.5 м в комплекте",
            "Защита: от перегрева и короткого замыкания",
            "Материал: алюминиевый корпус"
        ],
        has3D: false
    },
    
    // ЧЕХЛЫ
    {
        id: 12,
        name: "Чехол Apple Silicone для iPhone 15 Pro Max",
        description: "Оригинальный силиконовый чехол Apple с бархатистой поверхностью. Идеальная защита.",
        price: 3990,
        category: "Чехлы",
        image: "images/Чехол Apple Silicone для iPhone 15 Pro Max/top1.webp",
        images: [
            "images/Чехол Apple Silicone для iPhone 15 Pro Max/top1.webp",
            "images/Чехол Apple Silicone для iPhone 15 Pro Max/5adc4b11981a250288a60b3adea867df49e1744272b5727424adbc2d4adf28fc.jpg.webp",
            "images/Чехол Apple Silicone для iPhone 15 Pro Max/958486246e939a8d3b3e511bdeb56956fc42f2f0d6305cb6b16a1604c0323280.jpg.webp",
            "images/Чехол Apple Silicone для iPhone 15 Pro Max/c7b5da212635473ce93743ee6c821cf266034a9616c34140fa103620f9026b71.jpg.webp"
        ],
        specs: [
            "Материал: силикон премиум качества",
            "Защита: ударопрочный и грязеотталкивающий",
            "Цвета: 8 вариантов",
            "Совместимость: iPhone 15 Pro Max",
            "Особенности: бархатистая поверхность",
            "Комплект: защитная пленка"
        ],
        has3D: false
    },
    {
        id: 13,
        name: "Чехол Samsung Clear View для Galaxy S24",
        description: "Прозрачный чехол с откидной крышкой для Galaxy S24. Комфортный просмотр и защита экрана.",
        price: 3490,
        category: "Чехлы",
        image: "images/Чехол Samsung Clear View для Galaxy S24/top1.webp",
        images: [
            "images/Чехол Samsung Clear View для Galaxy S24/top1.webp",
            "images/Чехол Samsung Clear View для Galaxy S24/28aeb4ae6e72ec29f7b91328656c2559d2aa6708f13d5221cc5966e1ead39c45.jpg.webp",
            "images/Чехол Samsung Clear View для Galaxy S24/e6f232a27569e891e01b05e86f3857642362078f4c4507dcc1c8d1161e059e2b.jpg.webp"
        ],
        specs: [
            "Материал: прозрачный ПВХ",
            "Защита: от ударов и царапин",
            "Откидная крышка: S-View дисплей",
            "Совместимость: Galaxy S24 Ultra",
            "Особенности: держатель для карт",
            "Дизайн: прозрачный, бесцветный"
        ],
        has3D: false
    },
    {
        id: 14,
        name: "Чехол Spigen Ultra Hybrid",
        description: "Защитный чехол с прозрачной спинкой и армированными углами. Показывает дизайн телефона.",
        price: 2490,
        category: "Чехлы",
        image: "images/Чехол Spigen Ultra Hybrid/top1.webp",
        images: [
            "images/Чехол Spigen Ultra Hybrid/top1.webp",
            "images/Чехол Spigen Ultra Hybrid/optimize.webp",
            "images/Чехол Spigen Ultra Hybrid/optimize (1).webp",
            "images/Чехол Spigen Ultra Hybrid/optimize (2).webp",
            "images/Чехол Spigen Ultra Hybrid/optimize (3).webp",
            "images/Чехол Spigen Ultra Hybrid/optimize (4).webp",
            "images/Чехол Spigen Ultra Hybrid/optimize (5).webp",
            "images/Чехол Spigen Ultra Hybrid/optimize (6).webp",
            "images/Чехол Spigen Ultra Hybrid/optimize (7).webp"
        ],
        specs: [
            "Материал: прозрачный TPU",
            "Защита: армированные углы Air Cushion",
            "Рамка: непрозрачная цветная",
            "Совместимость: все модели iPhone/Samsung",
            "Поверхность: анти-отпечатки",
            "Дизайн: показывает дизайн телефона"
        ],
        has3D: false
    },
    
    // ДОПОЛНИТЕЛЬНЫЕ АКСЕССУАРЫ
    {
        id: 15,
        name: "Защитное стекло для iPhone 15 Pro Max",
        description: "Оригинальное защитное стекло Apple с технологией Ceramic Shield. Максимальная защита экрана.",
        price: 2990,
        category: "Аксессуары",
        image: "images/Защитное стекло для iPhone 15 Pro Max/top1.webp",
        images: [
            "images/Защитное стекло для iPhone 15 Pro Max/top1.webp",
            "images/Защитное стекло для iPhone 15 Pro Max/3de7c1b85d1ec459d43ad1eccc7fbc739de4f5a650900564030f9252e89f4c79.jpg.webp",
            "images/Защитное стекло для iPhone 15 Pro Max/da1c69e87ec99fc0289d3c79cd0a9e078ecdf14994be12354af99a44c27cc1a5.jpg.webp",
            "images/Защитное стекло для iPhone 15 Pro Max/fbcc0581b4342ec22c87f8ad4545de52c7ee0fd4683e863545bce1d224b65bba.jpg.webp"
        ],
        specs: [
            "Материал: Ceramic Shield",
            "Защита: от царапин и ударов",
            "Прозрачность: 99.9%",
            "Толщина: 0.3 мм",
            "Цвет: полностью прозрачное",
            "Совместимость: все модели iPhone"
        ],
        has3D: false
    },
    {
        id: 16,
        name: "Портативное зарядное Belkin 10K",
        description: "Компактный powerbank на 10000 мАч с быстрой зарядкой. Заряжайте гаджеты в дороге.",
        price: 4990,
        category: "Аксессуары",
        image: "images/Портативное зарядное Belkin 10K/top1.webp",
        images: [
            "images/Портативное зарядное Belkin 10K/top1.webp",
            "images/Портативное зарядное Belkin 10K/62bc39e276febdbe8aa1272a03a259c10106f29957a3e66211294127b2aa5ec6.jpg.webp",
            "images/Портативное зарядное Belkin 10K/a4bd0e41db0f408ad9a0047c4e101886618f12b33496600a8132cde12b8ab685.jpg.webp",
            "images/Портативное зарядное Belkin 10K/c64b8a7184178b7391e2733fbcb021d14bb8f0fa5543dbb248237d75ab4882fe.jpg.webp",
            "images/Портативное зарядное Belkin 10K/c7dea9b8a79f8797d58150e8338d3437e2881bb55ba56e6d5411c0cc3a142f26.jpg.webp",
            "images/Портативное зарядное Belkin 10K/d3565a03de966a3d3992c7f4726fcd9ed49f50b0fec26199f0b1964cb19877d8.jpg.webp",
            "images/Портативное зарядное Belkin 10K/dd44181431179b39c6265f945b57efbb1c1d2b011a3dfb6db6a1d84dc79d521c.jpg.webp",
            "images/Портативное зарядное Belkin 10K/efcb3ab67ab8df96732d8f1a1a3bef0df04919b782550f1cd388ac8691ba61cd.jpg.webp"
        ],
        specs: [
            "Емкость: 10000 мАч",
            "Выход: USB-C 18W + USB-A 15W",
            "Вход: USB-C",
            "Размеры: 113 x 58 x 23 мм",
            "Вес: 200 г",
            "Особенности: быстрая зарядка Power Delivery"
        ],
        has3D: false
    }
];

// Корзина
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Админ режим
// Секретный пароль для доступа к админ-панели (можно изменить)
const ADMIN_PASSWORD = 'admin2024';
let isAdmin = localStorage.getItem('adminMode') === 'true';
let isAdminAuthorized = localStorage.getItem('adminAuthorized') === 'true';

// Текущая выбранная категория
let currentCategory = 'all';

// Фильтрация по цене
let minPrice = 0;
let maxPrice = 500000;

// Инициализация
window.addEventListener('DOMContentLoaded', async () => {
    // Вычисляем максимальную цену для слайдера
    const maxProductPrice = Math.max(...products.map(p => p.price));
    const calculatedMaxPrice = Math.ceil(maxProductPrice / 10000) * 10000; // Округляем до 10000
    maxPrice = calculatedMaxPrice;
    
    const priceSliderMin = document.getElementById('priceSliderMin');
    const priceSliderMax = document.getElementById('priceSliderMax');
    if (priceSliderMin && priceSliderMax) {
        priceSliderMin.max = calculatedMaxPrice;
        priceSliderMax.max = calculatedMaxPrice;
        priceSliderMin.value = minPrice;
        priceSliderMax.value = maxPrice;
        
        // Настраиваем обработчики для правильного взаимодействия ползунков
        setupDualSlider();
        
        // Обновляем визуальный индикатор после небольшой задержки
        setTimeout(() => {
            updateTrackRange();
        }, 100);
    }
    const priceDisplay = document.getElementById('priceRange');
    if (priceDisplay) {
        priceDisplay.textContent = `${minPrice.toLocaleString()} ₽ - ${maxPrice.toLocaleString()} ₽`;
    }
    
    renderProducts();
    renderCart();
    updateCartCount();
    
    // Инициализируем Google Pay при загрузке
    initGooglePay();
    
    // Проверяем параметр успешной оплаты
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('payment') === 'success') {
        // Очищаем данные о заказе
        const orderData = JSON.parse(localStorage.getItem('pendingOrder') || '{}');
        if (orderData.paid) {
            showNotification('✅ Заказ успешно оформлен! Мы свяжемся с вами в ближайшее время.', 'success');
            // Очищаем pendingOrder
            localStorage.removeItem('pendingOrder');
            // Обновляем корзину (она уже должна быть очищена на странице оплаты)
            cart = [];
            localStorage.setItem('cart', JSON.stringify(cart));
            renderCart();
            updateCartCount();
            // Убираем параметр из URL
            window.history.replaceState({}, document.title, window.location.pathname);
        }
    }
    
    // Проверяем авторизацию админа при загрузке страницы
    // Кнопка ADMIN будет скрыта по умолчанию в HTML
    initAdminMode();
    
    // Инициализируем IndexedDB
    try {
        db = await initDB();
        console.log('✅ IndexedDB инициализирована');
    } catch (err) {
        console.error('⚠️ Ошибка инициализации IndexedDB:', err);
    }
    
    // Инициализируем слайдеры
    initSliders();
});



// Секретная комбинация клавиш для входа в админ-панель: Ctrl+Shift+A
document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.shiftKey && e.key === 'A') {
        e.preventDefault();
        if (!isAdminAuthorized) {
            showAdminLogin();
        }
    }
});

// Инициализация админ режима
function initAdminMode() {
    const adminToggle = document.getElementById('adminToggle');
    const adminBtn = document.getElementById('adminUploadBtn');
    const clearBtn = document.getElementById('adminClearBtn');
    
    // Показываем кнопку ADMIN только если пользователь авторизован
    if (isAdminAuthorized && adminToggle) {
        adminToggle.style.display = 'flex';
    } else if (adminToggle) {
        adminToggle.style.display = 'none';
    }
    
    // Показываем функции админа только если режим включен
    if (isAdmin && isAdminAuthorized) {
        if (adminBtn) adminBtn.style.display = 'inline-block';
        if (clearBtn) clearBtn.style.display = 'inline-block';
    } else {
        if (adminBtn) adminBtn.style.display = 'none';
        if (clearBtn) clearBtn.style.display = 'none';
    }
}

// Показать модальное окно для ввода пароля
function showAdminLogin() {
    // Если уже авторизован, просто переключаем режим
    if (isAdminAuthorized) {
        toggleAdminMode();
        return;
    }
    
    const password = prompt('Введите пароль для доступа к админ-панели:');
    if (password === ADMIN_PASSWORD) {
        isAdminAuthorized = true;
        localStorage.setItem('adminAuthorized', 'true');
        showNotification('✅ Доступ к админ-панели получен');
        initAdminMode();
        // Автоматически включаем админ-режим после авторизации
        isAdmin = true;
        localStorage.setItem('adminMode', 'true');
        initAdminMode();
    } else if (password !== null) {
        showNotification('❌ Неверный пароль');
    }
}

// Переключение админ режима
function toggleAdminMode() {
    if (!isAdminAuthorized) {
        showAdminLogin();
        return;
    }
    
    isAdmin = !isAdmin;
    localStorage.setItem('adminMode', isAdmin.toString());
    initAdminMode();
    
    if (isAdmin) {
        showNotification('🔧 Админ режим включен');
    } else {
        showNotification('👤 Админ режим выключен');
    }
}

// Функция для выхода из админ-панели (можно вызвать через консоль)
function logoutAdmin() {
    isAdminAuthorized = false;
    isAdmin = false;
    localStorage.removeItem('adminAuthorized');
    localStorage.removeItem('adminMode');
    showNotification('👋 Выход из админ-панели');
    initAdminMode();
}

// Инициализация IndexedDB для больших файлов
let db = null;
// Хранилище для blob URLs (чтобы освобождать память)
const activeBlobUrls = new Set();

function initDB() {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open('3dModelsDB', 1);
        
        request.onerror = () => reject(request.error);
        request.onsuccess = () => {
            db = request.result;
            resolve(db);
        };
        
        request.onupgradeneeded = (event) => {
            const db = event.target.result;
            if (!db.objectStoreNames.contains('models')) {
                db.createObjectStore('models', { keyPath: 'productId' });
            }
        };
    });
}

// Загрузка 3D модели
function upload3DModel(event) {
    const file = event.target.files[0];
    if (!file) return;
    
    let currentProductId = getCurrentProductId();
    
    // Если productId не найден, пытаемся получить из последнего открытого модального окна
    if (!currentProductId) {
        currentProductId = window.currentProductId;
    }
    
    // Если всё ещё нет, показываем ошибку
    if (!currentProductId) {
        alert('❌ Не выбран товар. Откройте товар в модальном окне и затем откройте 3D просмотр перед загрузкой модели.');
        console.error('currentProductId не найден. Доступные значения:', {
            windowCurrentProductId: window.currentProductId,
            modalOpen: document.getElementById('productModal')?.style.display,
            viewerOpen: document.getElementById('viewer3DModal')?.style.display
        });
        return;
    }
    
    console.log('📦 Загружаем модель для товара ID:', currentProductId);
    
    // Проверяем размер (макс 50MB для IndexedDB)
    if (file.size > 50 * 1024 * 1024) {
        alert('⚠️ Файл слишком большой! Максимум 50MB');
        return;
    }
    
    // Определяем мобильное устройство для отладки
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || 
                     (window.innerWidth <= 768 && window.innerHeight <= 1024);
    
    console.log('📱 Загрузка модели на', isMobile ? 'мобильном устройстве' : 'десктопе');
    
    // Инициализируем DB если нужно
    const initPromise = db ? Promise.resolve(db) : initDB();
    
    initPromise.then(() => {
        if (!db) {
            console.error('❌ IndexedDB не инициализирована после промиса');
            alert('❌ Ошибка базы данных');
            return;
        }
        
        console.log('📂 Читаем файл для сохранения, размер:', file.size, 'байт');
        
        // Читаем файл как ArrayBuffer для эффективного хранения
        const reader = new FileReader();
        
        reader.onload = function(e) {
            const arrayBuffer = e.target.result;
            console.log('✅ Файл прочитан, размер ArrayBuffer:', arrayBuffer.byteLength, 'байт');
            
            // На мобильных устройствах добавляем небольшую задержку перед сохранением
            const saveDelay = isMobile ? 100 : 0;
            
            setTimeout(() => {
                try {
                    // Сохраняем в IndexedDB
                    const transaction = db.transaction(['models'], 'readwrite');
                    const store = transaction.objectStore('models');
                    
                    const record = {
                        productId: currentProductId,
                        model: arrayBuffer,
                        timestamp: Date.now()
                    };
                    
                    console.log('💾 Сохраняем модель в IndexedDB для товара ID:', currentProductId);
                    
                    const request = store.put(record);
                    
                    request.onsuccess = () => {
                        console.log('✅ Модель успешно сохранена в IndexedDB:', {
                            productId: currentProductId,
                            fileSize: file.size,
                            arrayBufferSize: arrayBuffer.byteLength,
                            timestamp: new Date(record.timestamp).toLocaleString('ru-RU'),
                            device: isMobile ? 'mobile' : 'desktop'
                        });
                        
                        // На мобильных устройствах добавляем задержку перед проверкой
                        const verifyDelay = isMobile ? 200 : 100;
                        
                        setTimeout(() => {
                            // Проверяем что запись действительно сохранена
                            const verifyTransaction = db.transaction(['models'], 'readonly');
                            const verifyStore = verifyTransaction.objectStore('models');
                            const verifyRequest = verifyStore.get(currentProductId);
                            
                            verifyRequest.onsuccess = () => {
                                if (verifyRequest.result && verifyRequest.result.model) {
                                    console.log('✅ Подтверждено: модель сохранена для товара ID', currentProductId, 'размер:', verifyRequest.result.model.byteLength, 'байт');
                                } else {
                                    console.error('❌ ОШИБКА: Модель не найдена в IndexedDB после сохранения!');
                                }
                            };
                            
                            verifyRequest.onerror = () => {
                                console.error('❌ Ошибка проверки сохранения:', verifyRequest.error);
                            };
                        }, verifyDelay);
                        
                        // Загружаем в viewer
                        const modelViewer = document.getElementById('model-viewer');
                        if (modelViewer) {
                            // Очищаем предыдущие blob URLs
                            clearBlobUrls();
                            
                            // На мобильных устройствах добавляем задержку перед созданием blob
                            const viewerDelay = isMobile ? 150 : 50;
                            
                            setTimeout(() => {
                                try {
                                    // Создаем blob URL из ArrayBuffer
                                    const blob = new Blob([arrayBuffer], { type: 'application/octet-stream' });
                                    const blobUrl = URL.createObjectURL(blob);
                                    activeBlobUrls.add(blobUrl);
                                    modelViewer.src = blobUrl;
                                    console.log('✅ Модель загружена в viewer, URL:', blobUrl.substring(0, 50) + '...');
                                    showNotification(`✅ 3D модель сохранена локально (только на этом устройстве). Для глобальной доступности добавьте модель в папку models/ на GitHub.`, 'success');
                                } catch (blobError) {
                                    console.error('❌ Ошибка создания blob для viewer:', blobError);
                                    showNotification('✅ Модель сохранена, но ошибка загрузки в просмотр', 'warning');
                                }
                            }, viewerDelay);
                        } else {
                            console.warn('⚠️ model-viewer не найден, модель сохранена но не загружена в просмотр');
                            showNotification(`✅ Модель сохранена локально (только на этом устройстве). Для глобальной доступности добавьте модель в папку models/ на GitHub.`, 'success');
                        }
                    };
                    
                    request.onerror = () => {
                        console.error('❌ Ошибка сохранения в IndexedDB:', request.error);
                        alert('❌ Ошибка сохранения: ' + (request.error?.message || 'Неизвестная ошибка'));
                    };
                } catch (saveError) {
                    console.error('❌ Ошибка при сохранении:', saveError);
                    alert('❌ Ошибка сохранения');
                }
            }, saveDelay);
        };
        
        reader.onerror = function(error) {
            console.error('❌ Ошибка чтения файла:', error);
            alert('❌ Ошибка чтения файла');
        };
        
        reader.readAsArrayBuffer(file);
    }).catch(err => {
        console.error('❌ Ошибка инициализации DB:', err);
        alert('❌ Ошибка базы данных: ' + (err?.message || 'Неизвестная ошибка'));
    });
}

// Получаем ID текущего открытого товара
function getCurrentProductId() {
    // Получаем последний открытый ID из временной переменной или cookie
    return window.currentProductId || null;
}

// Очистка сохраненных 3D моделей
function clearSaved3DModels() {
    if (!db) {
        showNotification('⚠️ База данных не инициализирована');
        return;
    }
    
    const transaction = db.transaction(['models'], 'readwrite');
    const store = transaction.objectStore('models');
    const request = store.clear();
    
    request.onsuccess = () => {
        showNotification('🗑️ Все сохраненные 3D модели удалены');
        console.log('IndexedDB очищена');
    };
    
    request.onerror = () => {
        showNotification('❌ Ошибка удаления');
        console.error('Ошибка очистки IndexedDB:', request.error);
    };
}

// Хранилище текущих индексов для каждого товара
const currentImageIndex = {};

// Хранилище выбранных цветов для каждого товара
const currentProductColor = {};

// Рендер товаров
function renderProducts() {
    // Фильтруем товары по категории
    let filteredProducts = products;
    if (currentCategory !== 'all') {
        filteredProducts = products.filter(p => p.category === currentCategory);
    }
    
    // Фильтруем товары по цене - используем реальный минимум и максимум
    const actualMin = Math.min(minPrice, maxPrice);
    const actualMax = Math.max(minPrice, maxPrice);
    filteredProducts = filteredProducts.filter(p => p.price >= actualMin && p.price <= actualMax);
    
    const grid = document.getElementById('productsGrid');
    grid.innerHTML = filteredProducts.map(product => {
        // Инициализируем индекс для каждого товара
        if (!currentImageIndex[product.id]) {
            currentImageIndex[product.id] = 0;
        }
        
        // Определяем изображения в зависимости от выбранного цвета
        let productImages = product.images;
        let productImage = product.image;
        if (product.hasColors && product.colors) {
            // Для iPhone 15 Pro Max по умолчанию выбираем "Черный"
            let defaultColor = product.id === 1 && product.colors["Черный"] ? "Черный" : Object.keys(product.colors)[0];
            
            const selectedColor = currentProductColor[product.id] || defaultColor;
            productImages = product.colors[selectedColor].images;
            productImage = product.colors[selectedColor].image;
            
            // Сохраняем выбранный цвет если его еще нет
            if (!currentProductColor[product.id]) {
                currentProductColor[product.id] = selectedColor;
            }
        }
        
        return `
            <div class="product-card">
                <div class="product-images-container">
                    ${productImages && productImages.length > 1 ? `
                        <div class="product-images" id="images-${product.id}" onwheel="handleProductScroll(event, ${product.id})" ontouchstart="handleTouchStart(event)" ontouchend="handleTouchEnd(event, ${product.id}, false)">
                            ${productImages.map((img, idx) => `
                                <img src="${img}" alt="${product.name}" class="product-image">
                            `).join('')}
                        </div>
                        <button class="product-arrow product-arrow-left" onclick="navigateProductImage(${product.id}, -1); event.stopPropagation();">❮</button>
                        <button class="product-arrow product-arrow-right" onclick="navigateProductImage(${product.id}, 1); event.stopPropagation();">❯</button>
                    ` : `
                        <img src="${productImage}" alt="${product.name}" class="product-image">
                    `}
                </div>
                <div class="product-info" onclick="openModal(${product.id})">
                    <h3>${product.name}</h3>
                    <p>${product.description.substring(0, 80)}...</p>
                    <div class="product-price">${product.price.toLocaleString()} ₽</div>
                </div>
            </div>
        `;
    }).join('');
    
    // Инициализируем позиции всех каруселей
    filteredProducts.forEach(product => {
        // Определяем изображения в зависимости от выбранного цвета
        let productImages = product.images;
        if (product.hasColors && product.colors) {
            // Для iPhone 15 Pro Max по умолчанию выбираем "Черный"
            let defaultColor = product.id === 1 && product.colors["Черный"] ? "Черный" : Object.keys(product.colors)[0];
            
            const selectedColor = currentProductColor[product.id] || defaultColor;
            productImages = product.colors[selectedColor].images;
            
            // Сохраняем выбранный цвет если его еще нет
            if (!currentProductColor[product.id]) {
                currentProductColor[product.id] = selectedColor;
            }
        }
        
        if (productImages && productImages.length > 1) {
            // Инициализируем позицию карусели после небольшой задержки
            setTimeout(() => {
                updateCarouselPosition(product.id);
            }, 100);
        }
    });
    
    // Инициализируем все карусели после рендера
    setTimeout(() => {
        filteredProducts.forEach(product => {
            if (document.getElementById(`images-${product.id}`)) {
                updateCarouselPosition(product.id);
            }
        });
    }, 200);
}

// Фильтрация товаров по категории
function filterProducts(category) {
    currentCategory = category;
    
    // Обновляем активную кнопку
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    if (event && event.target) {
        event.target.classList.add('active');
    }
    
    // Перерисовываем товары
    renderProducts();
}

// Debounce для плавной фильтрации
let priceFilterTimeout;
function debouncePriceFilter() {
    clearTimeout(priceFilterTimeout);
    priceFilterTimeout = setTimeout(() => {
        renderProducts();
    }, 150);
}

// Настройка двойного слайдера - обе точки работают полностью независимо
function setupDualSlider() {
    const sliderMin = document.getElementById('priceSliderMin');
    const sliderMax = document.getElementById('priceSliderMax');
    const container = document.getElementById('dualRangeSlider');
    
    if (!sliderMin || !sliderMax || !container) return;
    
    // Отключаем клики по контейнеру и треку
    container.style.pointerEvents = 'none';
    
    // Убеждаемся, что слайдеры могут получать события
    sliderMin.style.pointerEvents = 'auto';
    sliderMax.style.pointerEvents = 'auto';
    sliderMin.style.zIndex = '5';
    sliderMax.style.zIndex = '6'; // Правая точка выше по умолчанию
    
    // Функция для обработки взаимодействия с левым слайдером - только управляем z-index
    const handleMinInteraction = (e) => {
        sliderMin.style.zIndex = '10';
        sliderMax.style.zIndex = '6';
    };
    
    // Функция для обработки взаимодействия с правым слайдером - только управляем z-index
    const handleMaxInteraction = (e) => {
        sliderMax.style.zIndex = '10';
        sliderMin.style.zIndex = '5';
    };
    
    // Обработчики для левого слайдера - только для z-index
    sliderMin.addEventListener('mousedown', handleMinInteraction);
    sliderMin.addEventListener('touchstart', handleMinInteraction);
    
    // Обработчики для правого слайдера - только для z-index
    sliderMax.addEventListener('mousedown', handleMaxInteraction);
    sliderMax.addEventListener('touchstart', handleMaxInteraction);
    
    // Добавляем явные обработчики input и change для гарантированной работы
    sliderMin.addEventListener('input', function(e) {
        updatePriceFilter('min', this.value);
    });
    sliderMin.addEventListener('change', function(e) {
        updatePriceFilter('min', this.value);
    });
    
    sliderMax.addEventListener('input', function(e) {
        updatePriceFilter('max', this.value);
    });
    sliderMax.addEventListener('change', function(e) {
        updatePriceFilter('max', this.value);
    });
    
    // Возврат z-index после окончания перетаскивания
    const resetZIndex = () => {
        sliderMin.style.zIndex = '5';
        sliderMax.style.zIndex = '6';
    };
    
    document.addEventListener('mouseup', resetZIndex);
    document.addEventListener('touchend', resetZIndex);
    document.addEventListener('mouseleave', resetZIndex);
}

// Обновление визуального индикатора диапазона
function updateTrackRange() {
    const sliderMin = document.getElementById('priceSliderMin');
    const sliderMax = document.getElementById('priceSliderMax');
    const track = document.querySelector('.price-slider-track');
    
    if (!sliderMin || !sliderMax || !track) return;
    
    const minValue = parseInt(sliderMin.value);
    const maxValue = parseInt(sliderMax.value);
    const sliderMaxValue = parseInt(sliderMax.max);
    
    // Всегда используем меньшее значение для левого края, большее для правого
    const actualMin = Math.min(minValue, maxValue);
    const actualMax = Math.max(minValue, maxValue);
    
    const leftPercent = (actualMin / sliderMaxValue) * 100;
    const rightPercent = (actualMax / sliderMaxValue) * 100;
    
    track.style.setProperty('--track-left', `${leftPercent}%`);
    track.style.setProperty('--track-right', `${rightPercent}%`);
}

// Обновление фильтра по цене
// Точка А (min) и Точка Б (max) работают независимо друг от друга
function updatePriceFilter(type, value) {
    const sliderMin = document.getElementById('priceSliderMin');
    const sliderMax = document.getElementById('priceSliderMax');
    
    if (!sliderMin || !sliderMax) return;
    
    const newValue = parseInt(value);
    
    // Точки работают независимо - нет ограничений
    if (type === 'min') {
        minPrice = newValue;
    } else if (type === 'max') {
        maxPrice = newValue;
    }
    
    // Обновляем визуальный индикатор
    updateTrackRange();
    
    // Определяем реальный минимум и максимум для отображения
    const actualMin = Math.min(minPrice, maxPrice);
    const actualMax = Math.max(minPrice, maxPrice);
    
    const priceDisplay = document.getElementById('priceRange');
    if (priceDisplay) {
        // Показываем диапазон от меньшего к большему
        priceDisplay.textContent = `от ${actualMin.toLocaleString()} ₽ - до ${actualMax.toLocaleString()} ₽`;
    }
    
    // Используем debounce для плавной фильтрации
    debouncePriceFilter();
}

// Открытие окна Trade-in
function openTradeIn(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    // Минимальная стоимость устройства для Trade-in: 30% от цены товара
    const minTradeInValue = Math.round(product.price * 0.3);
    
    // Сохраняем минимальное значение для валидации
    window.minTradeInValue = minTradeInValue;
    
    // Заполняем информацию о продукте
    document.getElementById('tradeinProductName').textContent = product.name;
    document.getElementById('tradeinProductPrice').textContent = `${product.price.toLocaleString()} ₽`;
    
    // Обновляем информацию о минимальном значении
    const minValueElement = document.getElementById('tradeinMinValue');
    if (minValueElement) {
        minValueElement.textContent = `${minTradeInValue.toLocaleString()} ₽`;
    }
    
    // Сохраняем ID продукта для отправки формы
    window.currentTradeInProductId = productId;
    
    // Очищаем поле ввода стоимости устройства
    const devicePriceInput = document.getElementById('tradeinDevicePrice');
    if (devicePriceInput) {
        devicePriceInput.value = '';
        devicePriceInput.min = minTradeInValue;
    }
    
    // Открываем модальное окно
    const modal = document.getElementById('tradeInModal');
    if (modal) {
        modal.style.display = 'block';
    }
}

// Закрытие модального окна Trade-in
function closeTradeInModal() {
    const modal = document.getElementById('tradeInModal');
    if (modal) {
        modal.style.display = 'none';
    }
    // Очищаем форму
    const form = document.getElementById('tradeInForm');
    if (form) {
        form.reset();
    }
    // Очищаем сохранённый ID продукта и минимальное значение
    if (window.currentTradeInProductId) {
        delete window.currentTradeInProductId;
    }
    if (window.minTradeInValue) {
        delete window.minTradeInValue;
    }
}

// Отправка заявления на Trade-in
function submitTradeIn(event) {
    event.preventDefault();
    
    if (!window.currentTradeInProductId) {
        showNotification('Ошибка: информация о товаре не найдена. Пожалуйста, попробуйте ещё раз.', 'error');
        return;
    }
    
    const product = products.find(p => p.id === window.currentTradeInProductId);
    if (!product) {
        showNotification('Ошибка: товар не найден. Пожалуйста, попробуйте ещё раз.', 'error');
        return;
    }
    
    // Проверка минимальной стоимости устройства (30% от стоимости товара)
    const minTradeInValue = window.minTradeInValue || Math.round(product.price * 0.3);
    
    // Получаем данные из формы
    const name = document.getElementById('tradeinName').value;
    const phone = document.getElementById('tradeinPhone').value;
    const email = document.getElementById('tradeinEmail').value;
    const device = document.getElementById('tradeinDevice').value;
    const devicePriceInput = document.getElementById('tradeinDevicePrice');
    const tradeInValue = parseInt(devicePriceInput.value) || 0;
    const condition = document.getElementById('tradeinCondition').value;
    
    // Валидация: стоимость устройства должна быть не менее 30% от стоимости товара
    if (tradeInValue < minTradeInValue) {
        showNotification(`Ошибка: стоимость вашего устройства должна быть не менее ${minTradeInValue.toLocaleString()} ₽ (30% от стоимости товара).`, 'error');
        return;
    }
    
    // В реальном приложении здесь был бы запрос на сервер
    // Для демонстрации просто показываем уведомление
    console.log('Trade-in заявление:', {
        productId: window.currentTradeInProductId,
        productName: product.name,
        name,
        phone,
        email,
        device,
        devicePrice: tradeInValue,
        condition
    });
    
    // Закрываем модальное окно
    closeTradeInModal();
    
    // Показываем уведомление об успехе
    showNotification('✅ Заявление на Trade-in успешно отправлено! Мы свяжемся с вами в ближайшее время.', 'success');
}

// Выбор цвета товара
function selectColor(productId, color) {
    currentProductColor[productId] = color;
    
    // Сбрасываем индекс изображения при смене цвета
    currentImageIndex[productId] = 0;
    
    // Если модальное окно открыто, перерисовываем его
    const modal = document.getElementById('productModal');
    if (modal && modal.style.display === 'block' && window.currentProductId === productId) {
        openModal(productId);
    } else {
        // Иначе перерисовываем товары
        renderProducts();
    }
}

// Обновление позиции карусели
function updateCarouselPosition(productId, withBounce = false) {
    const container = document.getElementById(`images-${productId}`);
    if (!container) return;
    
    const index = currentImageIndex[productId] || 0;
    const product = products.find(p => p.id === productId);
    
    // Определяем количество изображений в зависимости от выбранного цвета
    let imagesArray = product.images;
    if (product.hasColors && product.colors) {
        // Для iPhone 15 Pro Max по умолчанию выбираем "Черный"
        const defaultColor = productId === 1 && product.colors["Черный"] ? "Черный" : Object.keys(product.colors)[0];
        const selectedColor = currentProductColor[productId] || defaultColor;
        imagesArray = product.colors[selectedColor].images;
        
        // Сохраняем выбранный цвет если его еще нет
        if (!currentProductColor[productId]) {
            currentProductColor[productId] = selectedColor;
        }
    }
    const maxIndex = imagesArray ? imagesArray.length - 1 : 0;
    
    let offset = -index * 100;
    
    // Эффект "буфера" на краях
    if (withBounce) {
        if (index < 0) {
            offset = -index * 10; // Пружинящий эффект влево
        } else if (index > maxIndex) {
            offset = -(maxIndex * 100 + (index - maxIndex) * 10); // Пружинящий эффект вправо
        }
    }
    
    container.style.transform = `translateX(${offset}%)`;
    
    // Возврат к границе если был эффект буфера
    if (withBounce) {
        setTimeout(() => {
            if (currentImageIndex[productId] < 0) currentImageIndex[productId] = 0;
            if (currentImageIndex[productId] > maxIndex) currentImageIndex[productId] = maxIndex;
            updateCarouselPosition(productId);
        }, 300);
    }
}

// Обработка скролла для фотографий товаров
function handleProductScroll(event, productId) {
    event.preventDefault();
    event.stopPropagation();
    
    const delta = event.deltaY > 0 ? 1 : -1;
    navigateProductImage(productId, delta);
}

// Навигация по изображениям стрелками
function navigateProductImage(productId, direction) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    // Определяем количество изображений в зависимости от выбранного цвета
    let imagesArray = product.images;
    if (product.hasColors && product.colors) {
        const selectedColor = currentProductColor[productId] || Object.keys(product.colors)[0];
        imagesArray = product.colors[selectedColor].images;
    }
    
    if (!imagesArray) return;
    
    const maxIndex = imagesArray.length - 1;
    let newIndex = currentImageIndex[productId] + direction;
    
    currentImageIndex[productId] = newIndex;
    
    // Даем сдвинуть но потом возвращаем если вышли за границы
    if (newIndex < 0 || newIndex > maxIndex) {
        updateCarouselPosition(productId, true); // С буфером
    } else {
        updateCarouselPosition(productId); // Без буфера
    }
}

// Touch жесты для мобильных устройств
let touchStartX = 0;
let touchStartY = 0;
let touchEndX = 0;
let touchEndY = 0;

function handleTouchStart(event) {
    touchStartX = event.changedTouches[0].screenX;
    touchStartY = event.changedTouches[0].screenY;
}

function handleTouchEnd(event, productId, isModal = false) {
    touchEndX = event.changedTouches[0].screenX;
    touchEndY = event.changedTouches[0].screenY;
    
    const deltaX = touchStartX - touchEndX;
    const deltaY = touchStartY - touchEndY;
    
    // Проверяем что это горизонтальный свайп (не вертикальный скролл)
    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
        if (deltaX > 0) {
            // Свайп влево - следующее изображение
            if (isModal) {
                navigateModalImage(productId, 1);
            } else {
                navigateProductImage(productId, 1);
            }
        } else {
            // Свайп вправо - предыдущее изображение
            if (isModal) {
                navigateModalImage(productId, -1);
            } else {
                navigateProductImage(productId, -1);
            }
        }
    }
}

// Открытие модального окна
function openModal(productId) {
    // Сохраняем ID текущего товара
    window.currentProductId = productId;
    
    const product = products.find(p => p.id === productId);
    const modal = document.getElementById('productModal');
    const content = document.getElementById('modalContent');
    
    // Сброс индекса карусели для модального окна
    window.modalImageIndex = 0;
    
    // Определяем изображения в зависимости от выбранного цвета
    let modalImages = product.images;
    if (product.hasColors && product.colors) {
        // Для iPhone 15 Pro Max по умолчанию выбираем "Черный"
        let defaultColor = productId === 1 && product.colors["Черный"] ? "Черный" : Object.keys(product.colors)[0];
        
        const selectedColor = currentProductColor[productId] || defaultColor;
        modalImages = product.colors[selectedColor].images;
        
        // Сохраняем выбранный цвет если его еще нет
        if (!currentProductColor[productId]) {
            currentProductColor[productId] = selectedColor;
        }
    }
    
    content.innerHTML = `
        <div class="modal-header">
            <div class="modal-image-container">
                ${modalImages && modalImages.length > 1 ? `
                    <div class="modal-images" id="modal-images-${productId}" onwheel="handleModalScroll(event, ${productId})" ontouchstart="handleTouchStart(event)" ontouchend="handleTouchEnd(event, ${productId}, true)">
                        ${modalImages.map((img, idx) => `
                            <img src="${img}" alt="${product.name}" class="modal-main-image">
                        `).join('')}
                    </div>
                    <button class="modal-arrow modal-arrow-left" onclick="navigateModalImage(${productId}, -1); event.stopPropagation();">❮</button>
                    <button class="modal-arrow modal-arrow-right" onclick="navigateModalImage(${productId}, 1); event.stopPropagation();">❯</button>
                ` : `
                    <img id="mainImage" src="${modalImages[0]}" alt="${product.name}">
                `}
            </div>
            <div class="modal-details">
                <h2>${product.name}</h2>
                <div class="price">${product.price.toLocaleString()} ₽</div>
                <p class="modal-description">${product.description}</p>
                ${product.hasColors && product.colors ? `
                    <div class="modal-colors">
                        ${Object.keys(product.colors).map(color => {
                            const defaultColor = productId === 1 && product.colors["Черный"] ? "Черный" : Object.keys(product.colors)[0];
                            const isActive = (currentProductColor[productId] || defaultColor) === color;
                            return `
                            <button class="color-btn ${isActive ? 'active' : ''}" 
                                    onclick="selectColor(${productId}, '${color}');"
                                    title="${color}"></button>
                        `}).join('')}
                    </div>
                ` : ''}
                ${product.has3D ? `<button class="btn-3d" onclick="view3D('${product.model3D}', ${productId})">👁️ Просмотр 3D модели</button>` : ''}
                ${product.hasTradeIn ? `<button class="btn-trade-in" onclick="openTradeIn(${productId})">Trade-in</button>` : ''}
                <div class="modal-actions">
                    <button class="btn-add-to-cart" onclick="addToCart(${product.id}); closeModal();">
                        Добавить в корзину
                    </button>
                </div>
            </div>
        </div>
        <div class="modal-specs">
            <h3>Характеристики</h3>
            <ul>
                ${product.specs.map(spec => `<li>${spec}</li>`).join('')}
            </ul>
        </div>
    `;
    
    modal.style.display = 'block';
    
    // Инициализируем позицию карусели модального окна
    if (modalImages && modalImages.length > 1) {
        setTimeout(() => updateModalCarouselPosition(productId), 10);
    }
}

// Инициализация индекса для модального окна
window.modalImageIndex = 0;

// Обновление позиции карусели в модальном окне
function updateModalCarouselPosition(productId, withBounce = false) {
    const container = document.getElementById(`modal-images-${productId}`);
    if (!container) return;
    
    const index = window.modalImageIndex || 0;
    const product = products.find(p => p.id === productId);
    
    // Определяем количество изображений в зависимости от выбранного цвета
    let imagesArray = product.images;
    if (product.hasColors && product.colors) {
        // Для iPhone 15 Pro Max по умолчанию выбираем "Черный"
        const defaultColor = productId === 1 && product.colors["Черный"] ? "Черный" : Object.keys(product.colors)[0];
        const selectedColor = currentProductColor[productId] || defaultColor;
        imagesArray = product.colors[selectedColor].images;
        
        // Сохраняем выбранный цвет если его еще нет
        if (!currentProductColor[productId]) {
            currentProductColor[productId] = selectedColor;
        }
    }
    const maxIndex = imagesArray ? imagesArray.length - 1 : 0;
    
    let offset = -index * 100;
    
    // Эффект "буфера" на краях
    if (withBounce) {
        if (index < 0) {
            offset = -index * 10;
        } else if (index > maxIndex) {
            offset = -(maxIndex * 100 + (index - maxIndex) * 10);
        }
    }
    
    container.style.transform = `translateX(${offset}%)`;
    
    // Возврат к границе если был эффект буфера
    if (withBounce) {
        setTimeout(() => {
            if (window.modalImageIndex < 0) window.modalImageIndex = 0;
            if (window.modalImageIndex > maxIndex) window.modalImageIndex = maxIndex;
            updateModalCarouselPosition(productId);
        }, 300);
    }
}

// Обработка скролла в модальном окне
function handleModalScroll(event, productId) {
    event.preventDefault();
    event.stopPropagation();
    
    const delta = event.deltaY > 0 ? 1 : -1;
    navigateModalImage(productId, delta);
}

// Навигация по изображениям в модальном окне
function navigateModalImage(productId, direction) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    // Определяем количество изображений в зависимости от выбранного цвета
    let imagesArray = product.images;
    if (product.hasColors && product.colors) {
        const selectedColor = currentProductColor[productId] || Object.keys(product.colors)[0];
        imagesArray = product.colors[selectedColor].images;
    }
    
    if (!imagesArray) return;
    
    const maxIndex = imagesArray.length - 1;
    let newIndex = window.modalImageIndex + direction;
    
    window.modalImageIndex = newIndex;
    
    // Даем сдвинуть но потом возвращаем если вышли за границы
    if (newIndex < 0 || newIndex > maxIndex) {
        updateModalCarouselPosition(productId, true);
    } else {
        updateModalCarouselPosition(productId);
    }
}

// Смена главного изображения (для обратной совместимости)
function changeMainImage(src) {
    const mainImg = document.getElementById('mainImage');
    if (mainImg) {
        mainImg.src = src;
    }
}

// Закрытие модального окна
function closeModal() {
    document.getElementById('productModal').style.display = 'none';
}

// Закрытие при клике вне окна
window.onclick = function(event) {
    const modal = document.getElementById('productModal');
    if (event.target === modal) {
        closeModal();
    }
    const checkoutModal = document.getElementById('checkoutModal');
    if (event.target === checkoutModal) {
        closeCheckoutModal();
    }
    const viewer3D = document.getElementById('viewer3DModal');
    if (event.target === viewer3D) {
        close3DViewer();
    }
    const sbpModal = document.getElementById('sbpPaymentModal');
    if (event.target === sbpModal) {
        closeSbpPaymentModal();
    }
    const tradeInModal = document.getElementById('tradeInModal');
    if (event.target === tradeInModal) {
        closeTradeInModal();
    }
}

// Добавление в корзину
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    renderCart();
    
    // Показываем уведомление
    showNotification(`${product.name} добавлен в корзину!`);
}

// Удаление товара из корзины
function removeFromCart(index) {
    const removedItem = cart[index];
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    renderCart();
    showNotification(`${removedItem.name} удален из корзины`);
}

// Показ уведомления
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    
    // Строгий стиль - разные цвета для разных типов (без градиентов)
    let bgColor = '#1a1a1a';
    let textColor = '#ffffff';
    let borderColor = '#000000';
    let borderWidth = '2px';
    
    if (type === 'warning') {
        bgColor = '#ff9800';
        textColor = '#000000';
        borderColor = '#e68900';
    } else if (type === 'info') {
        bgColor = '#2196f3';
        textColor = '#ffffff';
        borderColor = '#0b7dda';
    } else if (type === 'error') {
        bgColor = '#f44336';
        textColor = '#ffffff';
        borderColor = '#d32f2f';
    }
    
    // Устанавливаем начальное состояние - элемент за левым краем экрана
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        left: -500px;
        background: ${bgColor};
        color: ${textColor};
        padding: 16px 24px;
        border: ${borderWidth} solid ${borderColor};
        border-radius: 4px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 3000;
        opacity: 0;
        white-space: nowrap;
        font-weight: 500;
        font-size: 14px;
        letter-spacing: 0.3px;
    `;
    
    // Добавляем элемент в DOM сначала
    document.body.appendChild(notification);
    
    // Принудительный рефлоу для применения начального состояния
    notification.offsetHeight;
    
    // Запускаем анимацию появления слева
    notification.style.animation = 'slideInFromLeft 0.3s ease-out forwards';
    
    setTimeout(() => {
        // Анимация исчезновения влево
        notification.style.animation = 'slideOutToLeft 0.3s ease-in forwards';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Обновление счетчика корзины
function updateCartCount() {
    document.getElementById('cartCount').textContent = cart.length;
}

// Переключение корзины
function toggleCart() {
    document.getElementById('cart').classList.toggle('open');
    // Закрываем мобильное меню при открытии корзины
    closeMobileMenu();
}

// Мобильное меню
function toggleMobileMenu() {
    const mobileNav = document.getElementById('mobileNav');
    const toggle = document.getElementById('mobileMenuToggle');
    
    mobileNav.classList.toggle('active');
    toggle.classList.toggle('active');
    
    // Блокируем прокрутку body при открытом меню
    if (mobileNav.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
}

function closeMobileMenu() {
    const mobileNav = document.getElementById('mobileNav');
    const toggle = document.getElementById('mobileMenuToggle');
    
    mobileNav.classList.remove('active');
    toggle.classList.remove('active');
    document.body.style.overflow = '';
}

// Закрытие мобильного меню при клике вне его
document.addEventListener('click', function(event) {
    const mobileNav = document.getElementById('mobileNav');
    const toggle = document.getElementById('mobileMenuToggle');
    
    if (mobileNav && mobileNav.classList.contains('active')) {
        if (!mobileNav.contains(event.target) && !toggle.contains(event.target)) {
            closeMobileMenu();
        }
    }
});

// Закрытие мобильного меню при прокрутке
let lastScrollTop = 0;
window.addEventListener('scroll', function() {
    const mobileNav = document.getElementById('mobileNav');
    if (mobileNav && mobileNav.classList.contains('active')) {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (Math.abs(scrollTop - lastScrollTop) > 5) {
            closeMobileMenu();
        }
        lastScrollTop = scrollTop;
    }
});

// Рендер корзины
function renderCart() {
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p style="text-align: center; color: #999; padding: 2rem;">Корзина пуста</p>';
        cartTotal.textContent = '0';
        return;
    }
    
    cartItems.innerHTML = cart.map((item, index) => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}">
            <div class="cart-item-info">
                <h4>${item.name}</h4>
                <p>${item.price.toLocaleString()} ₽</p>
            </div>
            <button class="cart-item-remove" onclick="removeFromCart(${index})" title="Удалить">✕</button>
        </div>
    `).join('');
    
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    cartTotal.textContent = total.toLocaleString();
}

// Оформление заказа
function checkout() {
    if (cart.length === 0) {
        showNotification('Корзина пуста!');
        return;
    }
    document.getElementById('checkoutModal').style.display = 'block';
    document.getElementById('cart').classList.remove('open');
}

// Выбор способа оплаты
function selectPaymentMethod(method) {
    // Убираем активный класс со всех кнопок
    document.querySelectorAll('.payment-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Добавляем активный класс к выбранной кнопке
    const selectedBtn = document.querySelector(`.payment-btn[data-method="${method}"]`);
    if (selectedBtn) {
        selectedBtn.classList.add('active');
    }
    
    // Сохраняем выбранный метод в глобальную переменную
    window.selectedPaymentMethod = method;
}

// Закрытие модального окна заказа
function closeCheckoutModal() {
    document.getElementById('checkoutModal').style.display = 'none';
}

// Открытие модального окна "О нас"
function openAboutModal() {
    document.getElementById('aboutModal').style.display = 'block';
}

// Закрытие модального окна "О нас"
function closeAboutModal() {
    document.getElementById('aboutModal').style.display = 'none';
}

// Открытие модального окна "Контакты"
function openContactModal() {
    document.getElementById('contactModal').style.display = 'block';
}

// Закрытие модального окна "Контакты"
function closeContactModal() {
    document.getElementById('contactModal').style.display = 'none';
}

// Открытие модального окна СБП оплаты
function openSbpPaymentModal(amount) {
    const modal = document.getElementById('sbpPaymentModal');
    const amountElement = document.getElementById('sbpAmount');
    const qrCanvas = document.getElementById('sbpQrCode');
    
    if (!modal || !amountElement || !qrCanvas) {
        console.error('SBP Payment Modal elements not found');
        return;
    }
    
    // Устанавливаем сумму
    amountElement.textContent = `${amount.toLocaleString()} ₽`;
    
    // Генерируем QR-код
    // Создаем строку для QR-кода (в реальной системе это должен быть URL от платежного провайдера)
    const qrData = `ST00012|Name=Apple Favorite|PersonalAcc=12345678901234567890|BankName=Example Bank|BIC=044525225|CorrespAcc=30101810145250000001|Sum=${amount * 100}|Purpose=Оплата заказа`;
    
    // Генерируем QR-код
    if (typeof QRCode !== 'undefined') {
        QRCode.toCanvas(qrCanvas, qrData, {
            width: 300,
            margin: 2,
            color: {
                dark: '#000000',
                light: '#FFFFFF'
            }
        }, function (error) {
            if (error) {
                console.error('Ошибка генерации QR-кода:', error);
                showNotification('Ошибка генерации QR-кода. Пожалуйста, попробуйте позже.', 'error');
            }
        });
    } else {
        console.error('QRCode library not loaded');
        showNotification('Ошибка загрузки библиотеки QR-кода. Пожалуйста, обновите страницу.', 'error');
    }
    
    // Показываем модальное окно
    modal.style.display = 'block';
}

// Закрытие модального окна СБП оплаты
function closeSbpPaymentModal() {
    const modal = document.getElementById('sbpPaymentModal');
    if (modal) {
        modal.style.display = 'none';
    }
    
    // Очищаем данные о заказе при отмене
    if (window.pendingSbpOrder) {
        delete window.pendingSbpOrder;
    }
}

// Подтверждение оплаты через СБП
function confirmSbpPayment() {
    if (!window.pendingSbpOrder) {
        showNotification('Данные заказа не найдены. Пожалуйста, оформите заказ заново.', 'error');
        closeSbpPaymentModal();
        return;
    }
    
    const { name, phone, email, address } = window.pendingSbpOrder;
    
    // Закрываем модальное окно СБП
    closeSbpPaymentModal();
    
    // Показываем уведомление об успешной оплате
    showNotification('✅ Оплата принята! Заказ успешно оформлен.', 'success');
    
    // Завершаем оформление заказа
    processOrderCompletion(name, phone, email, address);
    
    // Очищаем данные о заказе
    delete window.pendingSbpOrder;
}


// Отправка заказа
function submitOrder(event) {
    event.preventDefault();
    
    // Получаем данные из формы
    const name = document.getElementById('customerName').value;
    const phone = document.getElementById('customerPhone').value;
    const email = document.getElementById('customerEmail').value;
    const address = document.getElementById('customerAddress').value;
    
                // Получаем выбранный способ оплаты
        const selectedBtn = document.querySelector('.payment-btn.active');
        const paymentMethod = selectedBtn?.dataset.method || 'card';
      
      // Вычисляем общую сумму заказа
      const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);
      
      // Проверяем, был ли уже использован Google Pay
      if (window.googlePayUsed) {
          // Платеж уже обработан через Google Pay
          processOrderCompletion(name, phone, email, address);
          return;
      }
      
      // Обрабатываем в зависимости от выбранного способа оплаты
           switch(paymentMethod) {
           case 'card':
               // Сохраняем данные заказа для страницы оплаты
              const orderData = {
                  name: name,
                  phone: phone,
                  email: email,
                  address: address,
                  items: cart.map(item => ({
                      id: item.id,
                      name: item.name,
                      price: item.price
                  })),
                  total: totalPrice,
                  paymentMethod: 'card'
              };
              localStorage.setItem('pendingOrder', JSON.stringify(orderData));
              
              // Перенаправляем на страницу оплаты картой
              try {
                  // Используем небольшой таймаут для гарантии сохранения в localStorage
                  setTimeout(() => {
                      window.location.href = 'payment.html';
                  }, 100);
              } catch (error) {
                  console.error('Ошибка при перенаправлении на страницу оплаты:', error);
                  alert('Ошибка при перенаправлении. Пожалуйста, обновите страницу и попробуйте снова.');
              }
              break;
                          
          case 'sbp':
              // Оплата через СБП - открываем модальное окно с QR-кодом
              // Сохраняем данные заказа для подтверждения оплаты
              window.pendingSbpOrder = {
                  name: name,
                  phone: phone,
                  email: email,
                  address: address,
                  total: totalPrice
              };
              
              // Закрываем модальное окно оформления заказа
              closeCheckoutModal();
              
              // Открываем модальное окно СБП
              openSbpPaymentModal(totalPrice);
              break;
            
        case 'googlepay':
            // Оплата через Google Pay
            if (!googlePayClient) {
                initGooglePay();
            }
            
            // Если Google Pay доступен, запускаем платеж
            if (googlePayClient) {
                // Проверяем готовность Google Pay
                googlePayClient.isReadyToPay({
                    apiVersion: 2,
                    apiVersionMinor: 0,
                    allowedPaymentMethods: [
                        {
                            type: 'CARD',
                            parameters: {
                                allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
                                allowedCardNetworks: ['MASTERCARD', 'VISA']
                            },
                            tokenizationSpecification: {
                                type: 'PAYMENT_GATEWAY',
                                parameters: {
                                    gateway: 'example',
                                    gatewayMerchantId: 'exampleGatewayMerchantId'
                                }
                            }
                        }
                    ]
                }).then((response) => {
                    if (response.result) {
                        // Google Pay доступен, запускаем платеж
                        const paymentDataRequest = getGooglePayPaymentDataRequest();
                        
                        googlePayClient.loadPaymentData(paymentDataRequest)
                            .then((paymentData) => {
                                // Платеж успешно авторизован
                                processGooglePayPayment(paymentData);
                            })
                            .catch((err) => {
                                console.error('Ошибка оплаты через Google Pay:', err);
                                // Если пользователь отменил платеж, показываем обычное завершение заказа
                                if (err.statusCode === 'CANCELED') {
                                    showNotification('Оплата через Google Pay отменена. Вы можете выбрать другой способ оплаты.', 'warning');
                                } else {
                                    showNotification('Ошибка оплаты через Google Pay. Попробуйте снова или выберите другой способ оплаты.', 'error');
                                }
                            });
                    } else {
                        // Google Pay недоступен
                        showNotification('Google Pay недоступен. Пожалуйста, выберите другой способ оплаты.', 'warning');
                    }
                }).catch((err) => {
                    console.error('Ошибка проверки Google Pay:', err);
                    showNotification('Ошибка проверки Google Pay. Пожалуйста, выберите другой способ оплаты.', 'warning');
                });
            } else {
                // Google Pay клиент не инициализирован
                showNotification('Google Pay недоступен. Пожалуйста, выберите другой способ оплаты.', 'warning');
            }
            break;
            
                                     default:
               // По умолчанию - оплата картой (перенаправление)
               const defaultOrderData = {
                   name: name,
                   phone: phone,
                   email: email,
                   address: address,
                   items: cart.map(item => ({
                       id: item.id,
                       name: item.name,
                       price: item.price
                   })),
                   total: totalPrice,
                   paymentMethod: 'card'
               };
              localStorage.setItem('pendingOrder', JSON.stringify(defaultOrderData));
              
              // Перенаправляем на страницу оплаты картой
              try {
                  // Используем небольшой таймаут для гарантии сохранения в localStorage
                  setTimeout(() => {
                      window.location.href = 'payment.html';
                  }, 100);
              } catch (error) {
                  console.error('Ошибка при перенаправлении на страницу оплаты:', error);
                  alert('Ошибка при перенаправлении. Пожалуйста, обновите страницу и попробуйте снова.');
              }
      }
}

// Функция для освобождения blob URLs
function clearBlobUrls() {
    activeBlobUrls.forEach(url => {
        try {
            URL.revokeObjectURL(url);
        } catch (e) {
            console.error('Ошибка при освобождении blob URL:', e);
        }
    });
    activeBlobUrls.clear();
}

// 3D просмотр с model-viewer
function view3D(modelPath, productId) {
    // Проверяем не открыт ли уже 3D viewer
    const currentModal = document.getElementById('viewer3DModal');
    if (currentModal && currentModal.style.display === 'block') {
        // Если открыт, сначала закрываем и ждем
        close3DViewer();
        setTimeout(() => {
            open3DViewer(modelPath, productId);
        }, 350);
        return;
    }
    
    open3DViewer(modelPath, productId);
}

// Отдельная функция для открытия 3D viewer
function open3DViewer(modelPath, productId) {
    closeModal();
    
    // ВАЖНО: Сохраняем productId для загрузки модели через админ-панель
    if (productId) {
        window.currentProductId = productId;
    }
    
    // Очищаем предыдущие blob URLs
    clearBlobUrls();
    
    const modal = document.getElementById('viewer3DModal');
    const container = document.getElementById('viewer3D');
    
    if (!container || !modal) {
        console.error('Контейнер или модальное окно не найдены');
        return;
    }
    
    // ВАЖНО: Полностью очищаем контейнер - пересоздаем элемент каждый раз
    // Это гарантирует чистое состояние без накопленных проблем
    container.innerHTML = '';
    
    // Создаем новый чистый элемент model-viewer
    const modelViewer = document.createElement('model-viewer');
    modelViewer.id = 'model-viewer';
    modelViewer.setAttribute('camera-controls', '');
    modelViewer.setAttribute('auto-rotate', '');
    modelViewer.setAttribute('auto-rotate-delay', '0');
    modelViewer.setAttribute('rotation-per-second', '30deg');
    modelViewer.setAttribute('shadow-intensity', '1');
    modelViewer.setAttribute('environment-image', 'neutral');
    modelViewer.setAttribute('interaction-policy', 'allow-when-focused');
    modelViewer.setAttribute('loading', 'auto'); // Важно для корректной загрузки
    modelViewer.setAttribute('reveal', 'auto'); // Автоматическое раскрытие
    modelViewer.style.width = '100%';
    modelViewer.style.height = '100%';
    modelViewer.style.display = 'block';
    modelViewer.style.background = 'transparent'; // Прозрачный фон до загрузки
    
    // AR кнопка
    const arButton = document.createElement('button');
    arButton.setAttribute('slot', 'ar-button');
    arButton.className = 'btn-control';
    arButton.style.cssText = 'position: absolute; bottom: 10px; left: 50%; transform: translateX(-50%); z-index: 10;';
    arButton.textContent = 'AR Просмотр';
    modelViewer.appendChild(arButton);
    
    container.appendChild(modelViewer);
    
    // Показываем модальное окно
    modal.style.display = 'block';
    
    // Вспомогательная функция для загрузки стандартной модели
    function loadStandardModel(pathToUse) {
        const currentViewer = document.getElementById('model-viewer');
        if (!currentViewer) {
            console.error('❌ model-viewer элемент не найден');
            return;
        }
        
        const path = pathToUse || modelPath;
        
        if (path && !path.startsWith('blob:') && !path.startsWith('data:')) {
            // Кодируем путь правильно для GitHub Pages (обрабатываем пробелы)
            const standardSrc = encodeURI(path).replace(/%20/g, '%20');
            
            console.log('📁 Загружаем стандартную модель:', {
                оригинальныйПуть: path,
                закодированныйПуть: standardSrc,
                устройство: isMobile ? 'mobile' : 'desktop'
            });
            
            // Устанавливаем src
            currentViewer.src = standardSrc;
            
            // Добавляем обработчики событий для отладки
            currentViewer.addEventListener('load', () => {
                console.log('✅ Модель успешно загружена:', standardSrc);
            });
            
            currentViewer.addEventListener('error', (event) => {
                console.error('❌ Ошибка загрузки модели:', {
                    путь: standardSrc,
                    ошибка: event.detail || 'Неизвестная ошибка',
                    устройство: isMobile ? 'mobile' : 'desktop'
                });
                
                // Показываем уведомление об ошибке
                showNotification('⚠️ Ошибка загрузки 3D модели. Проверьте консоль браузера.', 'error');
            });
            
            // На PC добавляем дополнительную проверку через таймаут
            if (!isMobile) {
                setTimeout(() => {
                    if (!currentViewer.loaded && !currentViewer.loading) {
                        console.error('❌ Модель не загружается на PC, проверяем путь:', standardSrc);
                        
                        // Пробуем альтернативный путь без encodeURI для некоторых случаев
                        const altPath = path.replace(/\s/g, '%20');
                        if (altPath !== standardSrc) {
                            console.log('🔄 Пробуем альтернативный путь:', altPath);
                            currentViewer.src = altPath;
                        }
                    }
                }, 2000);
            }
        } else if (path) {
            const fallbackSrc = path.startsWith('blob:') || path.startsWith('data:') ? path : encodeURI(path);
            currentViewer.src = fallbackSrc;
            console.log('✅ Загружаем модель (fallback):', fallbackSrc);
        } else {
            console.warn('⚠️ Путь к модели не указан');
        }
    }
    
    // Определяем мобильное устройство
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || 
                     (window.innerWidth <= 768 && window.innerHeight <= 1024);
    
    // На PC нужна большая задержка для инициализации model-viewer
    // На мобильных устройствах тоже увеличиваем для надежности
    const initDelay = isMobile ? 600 : 800;
    
    console.log('📱 Устройство:', isMobile ? 'мобильное' : 'десктоп', 'задержка:', initDelay, 'ms', 'productId:', productId, 'modelPath:', modelPath);
    
    // Увеличиваем задержку для полной инициализации кастомного элемента
    // Web Components требуют времени для регистрации
    setTimeout(() => {
        const readyViewer = document.getElementById('model-viewer');
        if (!readyViewer) {
            console.error('❌ model-viewer не создан после задержки');
            return;
        }
        
        console.log('✅ model-viewer найден, начинаем загрузку модели');
        
        // ПРИОРИТЕТ 1: Загружаем стандартную модель из папки models/ (если есть modelPath)
        // Стандартные модели доступны везде (PC и мобильные)
        if (modelPath && !modelPath.startsWith('blob:') && !modelPath.startsWith('data:')) {
            console.log('📁 Начинаем загрузку стандартной модели из папки models/:', modelPath);
            
            // На PC добавляем небольшую задержку перед загрузкой для полной инициализации viewer
            const loadDelay = isMobile ? 0 : 200;
            
            setTimeout(() => {
                loadStandardModel();
            }, loadDelay);
            
            return; // Завершаем - стандартная модель приоритетна
        }
        
        // ПРИОРИТЕТ 2: Если стандартной модели нет, пытаемся загрузить локальную из IndexedDB
        // Локальные модели доступны только на текущем устройстве
        if (productId) {
            // Убеждаемся что db инициализирована, если нет - инициализируем
            const dbCheck = db ? Promise.resolve(db) : initDB();
            
            dbCheck.then(() => {
                if (!db) {
                    console.warn('⚠️ IndexedDB недоступна. Стандартная модель не найдена.');
                    showNotification('⚠️ 3D модель не найдена. Добавьте модель в папку models/ на сервере.', 'warning');
                    return;
                }
                
                console.log('🔍 Стандартной модели нет, проверяем IndexedDB на наличие локальной модели для товара ID:', productId);
                
                // На мобильных устройствах добавляем небольшую задержку для IndexedDB
                const dbDelay = isMobile ? 100 : 0;
                
                setTimeout(() => {
                    try {
                        // Пытаемся загрузить из IndexedDB
                        const transaction = db.transaction(['models'], 'readonly');
                        const store = transaction.objectStore('models');
                        const request = store.get(productId);
                        
                        request.onsuccess = () => {
                            const currentViewer = document.getElementById('model-viewer');
                            if (!currentViewer) {
                                console.error('❌ model-viewer элемент не найден после задержки');
                                return;
                            }
                            
                            console.log('📦 Результат запроса IndexedDB:', request.result ? 'найдено' : 'не найдено');
                            
                            if (request.result && request.result.model) {
                                // Локальная модель найдена - используем её как fallback
                                const arrayBuffer = request.result.model;
                                console.log('✅ Локальная модель найдена (fallback), размер:', arrayBuffer.byteLength, 'байт');
                                
                                // На мобильных устройствах может потребоваться дополнительная задержка
                                const blobDelay = isMobile ? 50 : 0;
                                
                                setTimeout(() => {
                                    try {
                                        const blob = new Blob([arrayBuffer], { type: 'application/octet-stream' });
                                        const blobUrl = URL.createObjectURL(blob);
                                        activeBlobUrls.add(blobUrl);
                                        
                                        const finalViewer = document.getElementById('model-viewer');
                                        if (finalViewer) {
                                            finalViewer.src = blobUrl;
                                            console.log('✅ Локальная модель загружена из IndexedDB для товара ID:', productId, 'размер:', arrayBuffer.byteLength, 'байт');
                                            showNotification('ℹ️ Показана локальная модель (доступна только на этом устройстве)', 'info');
                                        } else {
                                            console.error('❌ model-viewer не найден при загрузке blob');
                                        }
                                    } catch (blobError) {
                                        console.error('❌ Ошибка создания Blob:', blobError);
                                    }
                                }, blobDelay);
                            } else {
                                // Локальной модели тоже нет
                                console.log('⚠️ Локальная модель не найдена');
                                showNotification('⚠️ 3D модель не найдена. Добавьте модель в папку models/ на сервере.', 'warning');
                            }
                        };
                        
                        request.onerror = () => {
                            console.error('❌ Ошибка загрузки из IndexedDB:', request.error);
                            showNotification('⚠️ 3D модель не найдена. Добавьте модель в папку models/ на сервере.', 'warning');
                        };
                    } catch (dbError) {
                        console.error('❌ Ошибка при работе с IndexedDB:', dbError);
                        showNotification('⚠️ 3D модель не найдена. Добавьте модель в папку models/ на сервере.', 'warning');
                    }
                }, dbDelay);
            }).catch(err => {
                console.error('❌ Ошибка инициализации IndexedDB:', err);
                showNotification('⚠️ 3D модель не найдена. Добавьте модель в папку models/ на сервере.', 'warning');
            });
            
            return; // Выходим, так как загрузка асинхронная
        }
        
        // Если нет ни стандартной модели, ни productId
        console.log('⚠️ Стандартная модель не указана и productId не найден');
        showNotification('⚠️ 3D модель не найдена. Добавьте модель в папку models/ на сервере.', 'warning');
    }, initDelay); // Увеличенная задержка для надежной инициализации
}

// Проверка наличия локальной модели (устаревшая функция, оставлена для совместимости)
function checkLocalModel(productId) {
    if (!db) return;
    
    const transaction = db.transaction(['models'], 'readonly');
    const store = transaction.objectStore('models');
    const request = store.get(productId);
    
    request.onsuccess = () => {
        if (request.result) {
            // Локальная модель найдена - она будет автоматически загружена при открытии 3D viewer
            console.log('ℹ️ Локальная модель найдена для товара ID:', productId);
        }
    };
}

// Загрузка модели из IndexedDB (только локально, не работает на GitHub Pages на других устройствах)
function loadModelFromDB(productId, modelViewer) {
    if (!db) {
        console.log('IndexedDB не доступна, используем стандартную модель');
        return;
    }
    
    const transaction = db.transaction(['models'], 'readonly');
    const store = transaction.objectStore('models');
    const request = store.get(productId);
    
    request.onsuccess = () => {
        if (request.result) {
            const arrayBuffer = request.result.model;
            const blob = new Blob([arrayBuffer]);
            const blobUrl = URL.createObjectURL(blob);
            activeBlobUrls.add(blobUrl);
            modelViewer.src = blobUrl;
            console.log('✅ Локальная модель загружена из IndexedDB для товара:', productId);
            showNotification('ℹ️ Показана локальная модель (доступна только на этом устройстве)', 'info');
        } else {
            console.log('Нет локальной модели, используем стандартную');
        }
    };
    
    request.onerror = () => {
        console.error('Ошибка загрузки из IndexedDB:', request.error);
    };
}

// Закрытие 3D просмотра
function close3DViewer() {
    const modal = document.getElementById('viewer3DModal');
    const container = document.getElementById('viewer3D');
    const modelViewer = document.getElementById('model-viewer');
    
    if (!modal) return;
    
    // Освобождаем blob URLs
    clearBlobUrls();
    
    // Останавливаем все операции model-viewer перед удалением
    if (modelViewer) {
        try {
            // Останавливаем автоповорот и анимации
            if (modelViewer.pause) {
                modelViewer.pause();
            }
            
            // Очищаем src перед удалением
            modelViewer.src = '';
        } catch (e) {
            // Игнорируем ошибки при очистке
        }
    }
    
    // Скрываем модальное окно
    modal.style.display = 'none';
    
    // Полностью удаляем элемент через задержку
    // Это гарантирует полную очистку всех ресурсов
    setTimeout(() => {
        if (container) {
            container.innerHTML = '';
        }
    }, 150);
}

// Добавляем стили для уведомлений
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Google Pay Integration
let googlePayClient;
window.googlePayUsed = false;

// Инициализация Google Pay
function initGooglePay() {
    if (typeof google === 'undefined' || !google.payments || !google.payments.api) {
        console.log('Google Pay API не загружен. Ожидаем загрузки...');
        // Повторная попытка через 500мс
        setTimeout(() => {
            if (typeof google !== 'undefined' && google.payments && google.payments.api) {
                googlePayClient = new google.payments.api.PaymentsClient({
                    environment: 'TEST' // Для продакшена измените на 'PRODUCTION'
                });
            }
        }, 500);
        return;
    }
    
    googlePayClient = new google.payments.api.PaymentsClient({
        environment: 'TEST' // Для продакшена измените на 'PRODUCTION'
    });
}

// Получение конфигурации платежного запроса
function getGooglePayPaymentDataRequest() {
    // Вычисляем общую сумму корзины
    const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);
    
    return {
        apiVersion: 2,
        apiVersionMinor: 0,
        merchantInfo: {
            merchantId: 'BCR2DN6TZ3Y4RZP2', // Замените на ваш Merchant ID
            merchantName: 'Apple Favorite'
        },
        allowedPaymentMethods: [
            {
                type: 'CARD',
                parameters: {
                    allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
                    allowedCardNetworks: ['MASTERCARD', 'VISA']
                },
                tokenizationSpecification: {
                    type: 'PAYMENT_GATEWAY',
                    parameters: {
                        gateway: 'example',
                        gatewayMerchantId: 'exampleGatewayMerchantId'
                    }
                }
            }
        ],
        transactionInfo: {
            totalPriceStatus: 'FINAL',
            totalPriceLabel: 'Итого',
            totalPrice: totalPrice.toString(),
            currencyCode: 'RUB',
            countryCode: 'RU'
        },
        callbackIntents: ['PAYMENT_AUTHORIZATION']
    };
}

// Обработка платежа через Google Pay
function processGooglePayPayment(paymentData) {
    // В реальном приложении здесь должен быть запрос к вашему серверу
    // для обработки платежа через платежный шлюз
    
    // Для демонстрации просто помечаем, что Google Pay был использован
    window.googlePayUsed = true;
    
    // Проверяем, заполнены ли поля формы
    const name = document.getElementById('customerName').value;
    const phone = document.getElementById('customerPhone').value;
    const email = document.getElementById('customerEmail').value;
    const address = document.getElementById('customerAddress').value;
    
    if (!name || !phone || !email || !address) {
        showNotification('Пожалуйста, заполните все поля формы перед оплатой', 'warning');
        window.googlePayUsed = false;
        return;
    }
    
    // Отправляем токен платежа на сервер (в реальном приложении)
    // Здесь просто имитируем успешную оплату
    showNotification('✅ Оплата через Google Pay успешно выполнена!', 'success');
    
    // Автоматически завершаем заказ
    setTimeout(() => {
        processOrderCompletion(name, phone, email, address);
    }, 1500);
}

// Завершение оформления заказа
function processOrderCompletion(name, phone, email, address) {
    showNotification('Заказ оформлен! Мы свяжемся с вами в ближайшее время.');
    
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart();
    updateCartCount();
    closeCheckoutModal();
    
    // Сброс флага Google Pay
    window.googlePayUsed = false;
    
    // Очистка формы
    document.getElementById('checkoutForm').reset();
}

// ==================== СЛАЙДЕРЫ ====================

// Главный слайдер контента (преимущества, услуги, работы)
let currentMainSlideIndex = 0;
const totalMainSlides = 3;

function slideMainContent(direction) {
    const track = document.getElementById('mainContentTrack');
    if (!track) return;
    
    currentMainSlideIndex += direction;
    
    if (currentMainSlideIndex < 0) {
        currentMainSlideIndex = totalMainSlides - 1;
    } else if (currentMainSlideIndex >= totalMainSlides) {
        currentMainSlideIndex = 0;
    }
    
    track.style.transform = `translateX(-${currentMainSlideIndex * 100}%)`;
    updateMainSliderDots();
}

function goToMainSlide(index) {
    currentMainSlideIndex = index;
    const track = document.getElementById('mainContentTrack');
    if (track) {
        track.style.transform = `translateX(-${currentMainSlideIndex * 100}%)`;
        updateMainSliderDots();
    }
}

function updateMainSliderDots() {
    const dotsContainer = document.getElementById('mainSliderDots');
    if (!dotsContainer) return;
    
    dotsContainer.innerHTML = '';
    for (let i = 0; i < totalMainSlides; i++) {
        const dot = document.createElement('button');
        dot.className = `main-slider-dot ${i === currentMainSlideIndex ? 'active' : ''}`;
        dot.onclick = () => goToMainSlide(i);
        dotsContainer.appendChild(dot);
    }
}

// Автопрокрутка главного слайдера
let mainSliderAutoSlideInterval;

function startMainSliderAutoSlide() {
    mainSliderAutoSlideInterval = setInterval(() => {
        slideMainContent(1);
    }, 8000); // Меняем каждые 8 секунд
}

function stopMainSliderAutoSlide() {
    if (mainSliderAutoSlideInterval) {
        clearInterval(mainSliderAutoSlideInterval);
    }
}

// Функции для работы с услугами ремонта
const repairServices = {
    'battery': {
        title: 'Замена аккумулятора',
        price: 'от 1500 ₽'
    },
    'glass': {
        title: 'Замена заднего стекла и корпуса',
        price: 'от 2500 ₽'
    },
    'polish': {
        title: 'Полировка стекла',
        price: 'iPhone, Apple Watch от 2000 ₽'
    },
    'screen': {
        title: 'Переклейка стекла',
        price: 'от 2500 ₽'
    },
    'protection': {
        title: 'Защитные стёкла и чехлы',
        price: 'от 300 ₽'
    },
    'other': {
        title: 'Другие виды услуг',
        price: 'от 500 ₽'
    }
};

function openRepairService(serviceId) {
    const service = repairServices[serviceId];
    if (!service) return;
    
    // Скрываем главный слайдер и показываем секцию оформления
    document.querySelector('.main-content-slider-section').style.display = 'none';
    document.querySelector('#products').style.display = 'none';
    document.querySelector('#repairServiceOrder').style.display = 'block';
    
    // Обновляем заголовок
    document.getElementById('repairServiceTitle').textContent = service.title;
    
    // Загружаем фотографии работ
    loadRepairWorksGallery();
    
    // Прокручиваем к секции
    document.getElementById('repairServiceOrder').scrollIntoView({ behavior: 'smooth' });
}

function closeRepairService() {
    document.querySelector('.main-content-slider-section').style.display = 'block';
    document.querySelector('#products').style.display = 'block';
    document.querySelector('#repairServiceOrder').style.display = 'none';
    
    // Прокручиваем к началу
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function loadRepairWorksGallery() {
    const gallery = document.getElementById('repairWorksGallery');
    if (!gallery) return;
    
    gallery.innerHTML = '';
    workImages.forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        img.alt = 'Пример работы';
        img.onclick = () => {
            // Можно добавить модальное окно для просмотра
            window.open(src, '_blank');
        };
        gallery.appendChild(img);
    });
}

function submitRepairService(event) {
    event.preventDefault();
    
    const formData = {
        service: document.getElementById('repairServiceTitle').textContent,
        name: document.getElementById('repairName').value,
        phone: document.getElementById('repairPhone').value,
        device: document.getElementById('repairDevice').value,
        description: document.getElementById('repairDescription').value,
        dateTime: document.getElementById('repairDateTime').value
    };
    
    // Сохраняем в localStorage (можно отправить на сервер)
    const repairs = JSON.parse(localStorage.getItem('repairOrders') || '[]');
    repairs.push({
        ...formData,
        date: new Date().toISOString()
    });
    localStorage.setItem('repairOrders', JSON.stringify(repairs));
    
    showNotification('✅ Заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.', 'success');
    
    // Очищаем форму
    document.getElementById('repairServiceForm').reset();
    
    // Закрываем секцию
    setTimeout(() => {
        closeRepairService();
    }, 2000);
}

// Карусели работ
const workImages = [
    'images/raboti/2trp21a25uyo0c44o0440g8kw048g4.png',
    'images/raboti/4v32kjykgyec4ok0oogc0g84s4gwks.png',
    'images/raboti/6m54sw4x78wswoog0wg4k4cgg08ggw.png',
    'images/raboti/6nth0bill4sgs4gg0wwos404ccwo00.png',
    'images/raboti/7e4e5907a4863633669a2714f7d67a234e25a3d7.png',
    'images/raboti/885x04qfnbswososc4s4sw88wws048.png',
    'images/raboti/9k6hggv0qcws04s00ckkk4ow8kg48g.png',
    'images/raboti/b6a3xyntz20ww0ow4kgoc88kkkwwc0.png',
    'images/raboti/ed34d69c8a1a40d3e84b89b8ff850868bd445144.png',
    'images/raboti/i2angvhnpmo0ow4wowwggkk0skgg8w.png',
    'images/raboti/k57pvp0plk0k4gws0wwg0kk84gco00.png',
    'images/raboti/q91uwlszpz4w0s0g0w4wocggoc40g0.png',
    'images/raboti/r7t34xni5lw4kwgsoog40g44kw4kck.png'
];

// Инициализация каруселей работ
function initWorksCarousels() {
    const carousel1 = document.getElementById('worksCarousel1');
    const carousel2 = document.getElementById('worksCarousel2');
    
    if (!carousel1 || !carousel2) return;
    
    // Перемешиваем изображения в случайном порядке
    const shuffledImages = [...workImages].sort(() => Math.random() - 0.5);
    
    // Разделяем изображения на две группы
    const half = Math.ceil(shuffledImages.length / 2);
    const images1 = shuffledImages.slice(0, half);
    const images2 = shuffledImages.slice(half);
    
    // Предзагрузка всех изображений
    function preloadImages(imageArray) {
        imageArray.forEach(src => {
            const img = new Image();
            img.src = src;
        });
    }
    
    // Предзагружаем все изображения
    preloadImages(workImages);
    
    // Функция для создания дублированных изображений (для бесконечной прокрутки)
    function createCarouselImages(images, container) {
        // Добавляем изображения 5 раз для гарантированной бесконечной прокрутки
        // Это нужно для того, чтобы переход был незаметным и всегда были изображения
        const copies = 5;
        for (let i = 0; i < copies; i++) {
            images.forEach(src => {
                const img = document.createElement('img');
                img.src = src;
                img.alt = 'Наша работа';
                img.className = 'work-image';
                // Предзагрузка изображений для предотвращения задержек
                img.loading = 'eager';
                img.decoding = 'async';
                // Обработка ошибок загрузки
                img.onerror = function() {
                    this.style.display = 'none';
                };
                container.appendChild(img);
            });
        }
    }
    
    createCarouselImages(images1, carousel1);
    createCarouselImages(images2, carousel2);
    
    // Сначала настраиваем плавную бесконечную прокрутку
    // Первая карусель движется влево, вторая - вправо
    setupInfiniteScroll(carousel1, images1.length, -1); // -1 = влево
    setupInfiniteScroll(carousel2, images2.length, 1);  // 1 = вправо
    
    // Затем добавляем drag функциональность (после инициализации анимации)
    setTimeout(() => {
        setupCarouselDrag(carousel1);
        setupCarouselDrag(carousel2);
    }, 100);
}

// Настройка плавной бесконечной прокрутки
// direction: -1 = влево, 1 = вправо
function setupInfiniteScroll(carousel, imageCount, direction = -1) {
    const container = carousel.parentElement;
    let animationFrame = null;
    let isPaused = false;
    let isDragging = false;
    const speed = 0.3; // пикселей за кадр (можно настроить скорость)
    const imageWidth = 300 + 24; // ширина изображения + gap (1.5rem = 24px)
    const setWidth = imageWidth * imageCount; // ширина одного набора изображений
    const moveSpeed = speed * direction; // скорость с учетом направления
    
    // Для движения вправо начинаем с отрицательной позиции, чтобы изображения были видны
    let currentPosition = direction === 1 ? -setWidth : 0;
    
    // Сохраняем ссылку на функцию анимации для управления из drag
    window.carouselAnimations = window.carouselAnimations || {};
    const carouselId = carousel.id;
    
    function animate() {
        if (isPaused || isDragging) {
            animationFrame = requestAnimationFrame(animate);
            return;
        }
        
        // Двигаем карусель в нужном направлении
        currentPosition += moveSpeed;
        
        // Когда прошли один полный набор, незаметно сбрасываем позицию
        // Так как у нас 5 копий изображений, переход будет незаметен
        if (direction === -1) {
            // Движение влево (отрицательное значение)
            if (currentPosition <= -setWidth) {
                currentPosition = currentPosition + setWidth; // Сбрасываем на начало следующего набора
            }
        } else {
            // Движение вправо (положительное значение)
            // Для движения вправо нужно проверять, когда позиция становится положительной
            if (currentPosition >= 0) {
                currentPosition = currentPosition - setWidth; // Сбрасываем на начало следующего набора
            }
        }
        
        carousel.style.transform = `translateX(${currentPosition}px)`;
        
        animationFrame = requestAnimationFrame(animate);
    }
    
    // Сохраняем функции управления
    window.carouselAnimations[carouselId] = {
        pause: () => { isPaused = true; },
        resume: () => { 
            isPaused = false; 
            if (!animationFrame) {
                animationFrame = requestAnimationFrame(animate);
            }
        },
        setDragging: (value) => { isDragging = value; },
        setPosition: (pos) => { currentPosition = pos; },
        getPosition: () => currentPosition
    };
    
    // Останавливаем при наведении
    container.addEventListener('mouseenter', () => {
        isPaused = true;
    });
    
    // Возобновляем при уходе мыши
    container.addEventListener('mouseleave', () => {
        if (!isDragging) {
            isPaused = false;
            if (!animationFrame) {
                animationFrame = requestAnimationFrame(animate);
            }
        }
    });
    
    // Запускаем анимацию
    animationFrame = requestAnimationFrame(animate);
}

// Настройка drag/swipe для каруселей
function setupCarouselDrag(carousel) {
    let isDown = false;
    let startX;
    let startTranslate = 0;
    let currentTranslate = 0;
    
    const container = carousel.parentElement;
    const carouselId = carousel.id;
    const carouselControl = window.carouselAnimations?.[carouselId];
    
    // Получаем текущее смещение из анимации
    function getAnimationOffset() {
        if (carouselControl) {
            return carouselControl.getPosition();
        }
        const computedStyle = window.getComputedStyle(carousel);
        const matrix = computedStyle.transform;
        if (matrix === 'none') return 0;
        const values = matrix.split('(')[1].split(')')[0].split(',');
        return parseFloat(values[4]) || 0;
    }
    
    // Mouse events
    container.addEventListener('mousedown', (e) => {
        isDown = true;
        startX = e.pageX;
        startTranslate = getAnimationOffset();
        currentTranslate = startTranslate;
        
        // Останавливаем автоматическую анимацию
        if (carouselControl) {
            carouselControl.setDragging(true);
            carouselControl.pause();
        }
        
        carousel.style.transition = 'none';
        container.style.cursor = 'grabbing';
        e.preventDefault();
    });
    
    container.addEventListener('mouseleave', () => {
        if (isDown) {
            isDown = false;
            if (carouselControl) {
                carouselControl.setPosition(currentTranslate);
                carouselControl.setDragging(false);
                carouselControl.resume();
            }
            carousel.style.transition = '';
            container.style.cursor = 'grab';
        }
    });
    
    container.addEventListener('mouseup', () => {
        if (isDown) {
            isDown = false;
            if (carouselControl) {
                carouselControl.setPosition(currentTranslate);
                carouselControl.setDragging(false);
                carouselControl.resume();
            }
            carousel.style.transition = '';
            container.style.cursor = 'grab';
        }
    });
    
    container.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const diff = e.pageX - startX;
        currentTranslate = startTranslate + diff * 1.5;
        carousel.style.transform = `translateX(${currentTranslate}px)`;
    });
    
    // Touch events
    let touchStartX = 0;
    let touchStartTranslate = 0;
    
    container.addEventListener('touchstart', (e) => {
        touchStartX = e.touches[0].clientX;
        touchStartTranslate = getAnimationOffset();
        currentTranslate = touchStartTranslate;
        
        // Останавливаем автоматическую анимацию
        if (carouselControl) {
            carouselControl.setDragging(true);
            carouselControl.pause();
        }
        
        carousel.style.transition = 'none';
        e.preventDefault();
    });
    
    container.addEventListener('touchmove', (e) => {
        const touchX = e.touches[0].clientX;
        const diff = touchX - touchStartX;
        currentTranslate = touchStartTranslate + diff * 1.5;
        carousel.style.transform = `translateX(${currentTranslate}px)`;
        e.preventDefault();
    });
    
    container.addEventListener('touchend', () => {
        if (carouselControl) {
            carouselControl.setPosition(currentTranslate);
            carouselControl.setDragging(false);
            carouselControl.resume();
        }
        carousel.style.transition = '';
    });
}

// Инициализация слайдеров
function initSliders() {
    // Инициализируем точки для главного слайдера
    updateMainSliderDots();
    
    // Инициализируем карусели работ
    initWorksCarousels();
    
    // Запускаем автопрокрутку главного слайдера
    startMainSliderAutoSlide();
    
    // Останавливаем автопрокрутку при наведении
    const mainSlider = document.querySelector('.main-content-slider');
    
    if (mainSlider) {
        mainSlider.addEventListener('mouseenter', stopMainSliderAutoSlide);
        mainSlider.addEventListener('mouseleave', startMainSliderAutoSlide);
    }
    
    // Добавляем поддержку свайпов для главного слайдера
    const mainContentTrack = document.getElementById('mainContentTrack');
    
    if (mainContentTrack) {
        let touchStartX = 0;
        let touchEndX = 0;
        
        mainContentTrack.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        });
        
        mainContentTrack.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            const swipeThreshold = 50;
            const diff = touchStartX - touchEndX;
            
            if (Math.abs(diff) > swipeThreshold) {
                if (diff > 0) {
                    slideMainContent(1); // Свайп влево - следующий
                } else {
                    slideMainContent(-1); // Свайп вправо - предыдущий
                }
            }
        });
    }
}

