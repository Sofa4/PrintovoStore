const products = [
    {
        id: "round_tray_one",
        tags: ["home","декор","порядок"],
        name: "Round Tray",
        subtitle: "Органайзер для мелочей",
        description: "Круглая тарелочка для ключей и мелочи. Сочетая стильный дизайн, функциональность и экологичность, эта тарелочка станет незаменимым помощником в вашем доме.",
        images: [
        "photo/goods/ORGANISATION/rnd_tray/rnd_tray_cover.png",
        "photo/goods/ORGANISATION/rnd_tray/rnd_tray_01.png",
        "photo/goods/ORGANISATION/rnd_tray/rnd_tray_02.png",
        "photo/goods/ORGANISATION/rnd_tray/rnd_tray_03.png",
        "photo/goods/ORGANISATION/rnd_tray/rnd_tray_04.png",
        "photo/goods/ORGANISATION/rnd_tray/rnd_tray_05.png",
        "photo/goods/ORGANISATION/rnd_tray/rnd_tray_06.png",
        "photo/goods/ORGANISATION/rnd_tray/rnd_tray_mix_01_02.png",
        ],
        marketplaces: [
        { name: "ozon", icon: "photo/icons/ozon_icon.svg", url: "#" },
        { name: "wb", icon: "photo/icons/wb_icon.svg", url: "#" },
        { name: "yamarket", icon: "photo/icons/yamarket_icon.svg", url: "#" }
        ],
        specs: {
        Высота: "4 cм",
        Длина: "14 см",
        Ширина: "14 см",
        Вес: "50г",
        Материал: "PLA-пластик",
        Комплектация: "Один оргнайзер"
        },
        note: "Примечание: У нас также есть наборы органайзеров! Помните, что материал не любит температуры выше 60С, прямые солнечные лучи. Не стоит мыть с применением химии, спиртовых и других растворителей.",
        colors: ["Красный","Оранжевый","Бежевый","Голубой","Салатовый","Нежно-розовый"] 
    },
    {
        id: "round_tray_mix",
        tags: ["home","декор","порядок"],
        name: "Round Tray Mix",
        subtitle: "Набор органайзеров для мелочей",
        description: "Наши фирменные органазеры, но теперь в наборе!",
        images: [
        "photo/goods/ORGANISATION/rnd_tray_mix/rnd_tray_mix_cover.png",
        "photo/goods/ORGANISATION/rnd_tray_mix/rnd_tray_mix_01_01.png",
        "photo/goods/ORGANISATION/rnd_tray_mix/rnd_tray_mix_02_01.png",
        "photo/goods/ORGANISATION/rnd_tray_mix/rnd_tray_mix_01_02.png",
        ],
        marketplaces: [
        { name: "ozon", icon: "photo/icons/ozon_icon.svg", url: "#" },
        { name: "wb", icon: "photo/icons/wb_icon.svg", url: "#" },
        { name: "yamarket", icon: "photo/icons/yamarket_icon.svg", url: "#" }
        ],
        specs: {
        Высота: "4 cм",
        Длина: "14 см",
        Ширина: "14 см",
        Вес: "50г",
        Материал: "PLA-пластик",
        Комплектация: "Набор из трех оргнайзеров разных цветов"
        },
        note: "Примечание:  Помните, что материал не любит температуры выше 60С, прямые солнечные лучи. Не стоит мыть с применением химии, спиртовых и других растворителей.",
        colors: ["Красный-Бежевый","Розовый-Салатовый",]
    },
    {
        id: "square_tray_one",
        tags: ["home","декор","порядок"],
        name: "Square Tray",
        subtitle: "Органайзер для мелочей",
        description: "Тарелочка для ключей и мелочи. Лёгкиая и приятнпя на ощупь с рельефными рёбрами. Подходит для хранения украшений, мелочей, косметики.",
        images: [
        "photo/goods/ORGANISATION/sq_tray/sq_tray_cover.png",
        "photo/goods/ORGANISATION/sq_tray/sq_tray_01.png",
        "photo/goods/ORGANISATION/sq_tray/sq_tray_02.png",
        "photo/goods/ORGANISATION/sq_tray/sq_tray_03.png",
        "photo/goods/ORGANISATION/sq_tray/sq_tray_04.png",
        "photo/goods/ORGANISATION/sq_tray/sq_tray_05.png",
        "photo/goods/ORGANISATION/sq_tray/sq_tray_06.png",
        "photo/goods/ORGANISATION/sq_tray/sq_tray_07.png",
        "photo/goods/ORGANISATION/sq_tray/sq_tray_08.png",
        "photo/goods/ORGANISATION/sq_tray/sq_tray_08.png",
        "photo/goods/ORGANISATION/sq_tray/sq_tray_mix_01_02.png",
        ],
        marketplaces: [
        { name: "ozon", icon: "photo/icons/ozon_icon.svg", url: "#" },
        { name: "wb", icon: "photo/icons/wb_icon.svg", url: "#" },
        { name: "yamarket", icon: "photo/icons/yamarket_icon.svg", url: "#" }
        ],
        specs: {
        Высота: "4 cм",
        Длина: "14 см",
        Ширина: "14 см",
        Вес: "50г",
        Материал: "PLA-пластик",
        Комплектация: "Один оргнайзер"
        },
        note: "Примечание: У нас также есть наборы органайзеров! Помните, что материал не любит температуры выше 60С, прямые солнечные лучи. Не стоит мыть с применением химии, спиртовых и других растворителей.",
        colors: ["Ярко-розовый","Нежно-розовый","Зеленый","Салатовый","Голубой","Фиолетовый","Сиреневый","Коричневый","Бежевый"] // Если пусто — не отображаем
    },
    {
        id: "square_tray_mix",
        tags: ["home","декор","порядок"],
        name: "Square Tray Mix",
        subtitle: "Набор органайзеров для мелочей",
        description: "Наши фирменные органазеры, но теперь в наборе!",
        images: [
        "photo/goods/ORGANISATION/sq_tray_mix/sq_tray_mix_cover.png",
        "photo/goods/ORGANISATION/sq_tray_mix/sq_tray_mix_01_01.png",
        "photo/goods/ORGANISATION/sq_tray_mix/sq_tray_mix_01_02.png",
        "photo/goods/ORGANISATION/sq_tray_mix/sq_tray_mix_02_01.png",
        "photo/goods/ORGANISATION/sq_tray_mix/sq_tray_mix_03_01.png",
        "photo/goods/ORGANISATION/sq_tray_mix/sq_tray_mix_04_01.png",
        ],
        marketplaces: [
        { name: "ozon", icon: "photo/icons/ozon_icon.svg", url: "#" },
        { name: "wb", icon: "photo/icons/wb_icon.svg", url: "#" },
        { name: "yamarket", icon: "photo/icons/yamarket_icon.svg", url: "#" }
        ],
        specs: {
        Высота: "4 cм",
        Длина: "14 см",
        Ширина: "14 см",
        Вес: "50 г",
        Материал: "PLA-пластик",
        Комплектация: "Набор из трех оргнайзеров разных цветов"
        },
        note: "Примечание: Помните, что материал не любит температуры выше 60С, прямые солнечные лучи. Не стоит мыть с применением химии, спиртовых и других растворителей.",
        colors: ["Зеленый-Бежевый","Розовый-Фиолетовый","Коричневый-Бежевый","Розовый-Салатовый",] 
    },
    {
        id:"decor_line_vase_01",
        tags: ["home","декор"],
        name: "Line Vase 01",
        subtitle: "Ваза для цветов",
        description: "Элегантная ваза с тонким вертикальным рельефом в трех цветах. Цветовая палитра подчёркивает мягкие изгибы. Данную вазу можно использовать как для сухоцветов, так и для живых цветов!",
        images: [
        "photo/goods/VASES/line_vase_01/line_vases_cover.png",
        "photo/goods/VASES/line_vase_01/line_vase_01_cover.png",
        "photo/goods/VASES/line_vase_01/line_vase_02_cover.png",
        "photo/goods/VASES/line_vase_01/line_vase_03_cover.png",
        "photo/goods/VASES/line_vase_01/line_vase_01_01.png",
        "photo/goods/VASES/line_vase_01/line_vase_01_02.png"
        ],
        marketplaces: [
        { name: "ozon", icon: "photo/icons/ozon_icon.svg", url: "#" },
        { name: "wb", icon: "photo/icons/wb_icon.svg", url: "#" },
        { name: "yamarket", icon: "photo/icons/yamarket_icon.svg", url: "#" }
        ],
        specs: {
        Высота: "24 cм",
        Длина: "14 см",
        Ширина: "14 см",
        Вес: "130 г",
        Материал: "PLA-пластик",
        Комплектация: "Одна ваза"
        },
        note: "Примечание: Помните, что материал не любит температуры выше 60С, прямые солнечные лучи. Не стоит мыть с применением химии, спиртовых и других растворителей.",
        colors: ["Сиреневый","Оранжевый","Красный"], 
    },
    {
        id: "decor_line_vase_02",
        tags: ["home","декор"],
        name: "Line Vase 02",
        subtitle: "Ваза для цветов",
        description: "Минималистичная ваза с рёбристой фактурой. Чёткая цилиндрическая форма и насыщенный цвет делают её акцентным дополнением интерьера. Данную вазу можно использовать как для сухоцветов, так и для живых цветов!",
        images: [
        "photo/goods/VASES/line_vase_02/line_vase02_01_cover.png",
        "photo/goods/VASES/line_vase_02/line_vase02_02_cover.png",
        "photo/goods/VASES/line_vase_02/line_vase02_03_cover.png",
        "photo/goods/VASES/line_vase_02/line_vase02_01_01.png",
        "photo/goods/VASES/line_vase_02/line_vase02_01_02.png",
        ],
        marketplaces: [
        { name: "ozon", icon: "photo/icons/ozon_icon.svg", url: "#" },
        { name: "wb", icon: "photo/icons/wb_icon.svg", url: "#" },
        { name: "yamarket", icon: "photo/icons/yamarket_icon.svg", url: "#" }
        ],
        specs: {
        Высота: "20 см",
        Длина: "10 см",
        Ширина: "10 см",
        Вес: "130 г",
        Материал: "PLA-пластик",
        Комплектация: "Одна ваза"
        },
        note: "Примечание: Помните, что материал не любит температуры выше 60С, прямые солнечные лучи. Не стоит мыть с применением химии, спиртовых и других растворителей.",
        colors: ["Фиолетовый","Ярко-розовый","Голубой"] 
    },
    {
        id: "decor_line_candleholder",
        tags: ["home","декор"],
        name: "Line Candleholders",
        subtitle: "Набор подствечников для конических свечей",
        description: "Современные подсвечники, сочетающие в себе элегантную форму и яркий цвет.",
        images: [
        "photo/goods/CHANDLEHOLDERS/line_ch/line_ch_cover.png",
        "photo/goods/CHANDLEHOLDERS/line_ch/line_ch_123_02.png",
        ],
        marketplaces: [
        { name: "ozon", icon: "photo/icons/ozon_icon.svg", url: "#" },
        { name: "wb", icon: "photo/icons/wb_icon.svg", url: "#" },
        { name: "yamarket", icon: "photo/icons/yamarket_icon.svg", url: "#" }
        ],
        specs: {
        Высота: "18 см",
        Длина: "6 см",
        Ширина: "6 см",
        Вес: "80 г (вес 1 шт.)",
        Материал: "усиленный PLA-пластик",
        Комплектация: "Три подсвечника разных цветов"
        },
        note: "Примечание: Помните, что материал не любит прямые солнечные лучи. Не стоит мыть с применением химии, спиртовых и других растворителей.",
        colors: []
    },
    {
        id: "decor_line_candleholder_tea",
        tags: ["home","декор"],
        name: "Line Tea Candleholders",
        subtitle: "Набор подсвечников для чайных свечей",
        description: "Стильные яркие подсвечники с выразительным рельефом, благодаря которому создаютмягкое и уютное освещение в любом интерьере.",
        images: [
        "photo/goods/CHANDLEHOLDERS/line_tea_ch/linetea_ch_cover.png",
        "photo/goods/CHANDLEHOLDERS/line_tea_ch/linetea_ch_01.png",
        "photo/goods/CHANDLEHOLDERS/line_tea_ch/linetea_ch_02.png",
        "photo/goods/CHANDLEHOLDERS/line_tea_ch/linetea_ch_03.png",
        ],
        marketplaces: [
        { name: "ozon", icon: "photo/icons/ozon_icon.svg", url: "#" },
        { name: "wb", icon: "photo/icons/wb_icon.svg", url: "#" },
        { name: "yamarket", icon: "photo/icons/yamarket_icon.svg", url: "#" }
        ],
        specs: {
        Высота: "8 см",
        Длина: "6-9 см",
        Ширина: "6-9 см",
        Вес: "20 г (вес 1 шт.)",
        Материал: "усиленный PLA-пластик",
        Комплектация: "Пять подсвечников разных цветов"
        },
        note: "Примечание: Помните, что материал не любит прямые солнечные лучи. Не стоит мыть с применением химии, спиртовых и других растворителей.",
        colors: []
    },
    {
        id: "decor_line_lamp",
        tags: ["home","свет"],
        name: "Line Lamp",
        subtitle: "Настольный светильник",
        description: "Простая форма с фактурной поверхностью — выглядит как бумажный фонарь, но сделан из прочного PLA. Создаёт вокруг себя мягкое и уютное освещение.",
        images: [
        "photo/goods/LIGHTS/line_lamp/line_lamp_01_cover_01.png",
        "photo/goods/LIGHTS/line_lamp/line_lamp_01_cover_02.png",
        "photo/goods/LIGHTS/line_lamp/line_lamp_02_cover_01.png",
        "photo/goods/LIGHTS/line_lamp/line_lamp_02_cover_02.png",
        "photo/goods/LIGHTS/line_lamp/line_lamp_01_01.png",
        "photo/goods/LIGHTS/line_lamp/line_lamp_02_01.png",
        ],
        marketplaces: [
        { name: "ozon", icon: "photo/icons/ozon_icon.svg", url: "#" },
        { name: "wb", icon: "photo/icons/wb_icon.svg", url: "#" },
        { name: "yamarket", icon: "photo/icons/yamarket_icon.svg", url: "#" }
        ],
        specs: {
        Высота: "21 см",
        Длина: "12 см",
        Ширина: "12 см",
        Вес: "160 г",
        Материал: "PLA-пластик",
        Комплектация: "Один светильник. Лампа светодиодная Е14 в наборе!"
        },
        note: "Примечание: Помните, что материал не любит прямые солнечные лучи. Не стоит мыть с применением химии, спиртовых и других растворителей.Используйте в качестве источника света только светодиодные лампы, лампы накаливания могут вызвать перегрев и деформацию. Не накрывайте ночник во включенном состоянии",
        colors: ["Желтый","Нежно-розовый"]
    },
    {
        id: "decor_antique_lamp",
        tags: ["home","свет"],
        name: "Antique Lamp",
        subtitle: "Настольный светильник",
        description: "Бежевая лампа, отсылающая к формам античных ваз, добавит изысканности и уюта в ваш интерьер.",
        images: [
        "photo/goods/LIGHTS/antique_lamp/antique_lamp_cover_02.png",
        "photo/goods/LIGHTS/antique_lamp/antique_lamp_cover.png",
        "photo/goods/LIGHTS/antique_lamp/antique_lamp.png",
        ],
        marketplaces: [
        { name: "ozon", icon: "photo/icons/ozon_icon.svg", url: "#" },
        { name: "wb", icon: "photo/icons/wb_icon.svg", url: "#" },
        { name: "yamarket", icon: "photo/icons/yamarket_icon.svg", url: "#" }
        ],
        specs: {
        Высота: "26 см",
        Длина: "16 см",
        Ширина: "16 см",
        Вес: "240 г",
        Материал: "PLA-пластик",
        Комплектация: "Один светильник. Лампа светодиодная Е14 в наборе!"
        },
        note: "Примечание: Помните, что материал не любит прямые солнечные лучи. Не стоит мыть с применением химии, спиртовых и других растворителей.Используйте в качестве источника света только светодиодные лампы, лампы накаливания могут вызвать перегрев и деформацию. Не накрывайте ночник во включенном состоянии",
        colors: []
    },
    {
        id: "bthrm_soap_tray",
        tags: ["home","ванная", "порядок"],
        name: "Wave Soap Tray",
        subtitle: "Мыльница",
        description: "Геометричная мыльница с волнистым профилем, которая хорошо отводит воду. Удобна, устойчива и радует глаз.",
        images: [
        "photo/goods/BATHROOM/soap_tray/soap_tray_COVER.png",
        "photo/goods/BATHROOM/soap_tray/soap_tray_123_01.png",
        "photo/goods/BATHROOM/soap_tray/soap_tray_01_01.png",
        "photo/goods/BATHROOM/soap_tray/soap_tray_01_02.png",
        "photo/goods/BATHROOM/soap_tray/soap_tray_01_02.png",
        "photo/goods/BATHROOM/soap_tray/soap_tray_02_01.png",
        "photo/goods/BATHROOM/soap_tray/soap_tray_03_01.png",
        ],
        marketplaces: [
        { name: "ozon", icon: "photo/icons/ozon_icon.svg", url: "#" },
        { name: "wb", icon: "photo/icons/wb_icon.svg", url: "#" },
        { name: "yamarket", icon: "photo/icons/yamarket_icon.svg", url: "#" }
        ],
        specs: {
        Высота: "24 cм",
        Длина: "14 см",
        Ширина: "14 см",
        Вес: "130 г",
        Материал: "PLA-пластик",
        Комплектация: "Одна штука"
        },
        note: "Примечание: Помните, что материал не любит температуры выше 60С, прямые солнечные лучи. Не стоит мыть с применением химии, спиртовых и других растворителей.",
        colors: ["Коричневый","Салатовый","Ярко-розовый"] 
    },
    {
        id: "decor_zen_vase",
        tags: ["home","декор"],
        name: "Zen Vase",
        subtitle: "Ваза для цветов",
        description: "Ваза с плавными линиями и текстурой, отражающая гармонию природы, идеально подходит для создания спокойной атмосферы в интерьере. Подходит как для сухоцветов, так и для свежих цветов.",
        images: [
        "photo/goods/VASES/zen_vase/zen_01_cover.png",
        "photo/goods/VASES/zen_vase/zen_02_cover.png",
        "photo/goods/VASES/zen_vase/zen_02_01.png",
        "photo/goods/VASES/zen_vase/zen_02_02.png",
        ],
        marketplaces: [
        { name: "ozon", icon: "photo/icons/ozon_icon.svg", url: "#" },
        { name: "wb", icon: "photo/icons/wb_icon.svg", url: "#" },
        { name: "yamarket", icon: "photo/icons/yamarket_icon.svg", url: "#" }
        ],
        specs: {
        Высота: "20см",
        Длина: "10 см",
        Ширина: "14 см",
        Вес: "160г",
        Материал: "PLA-пластик",
        Комплектация: "Одна ваза"
        },
        note: "Примечание: Помните, что материал не любит температуры выше 60С, прямые солнечные лучи. Не стоит мыть с применением химии, спиртовых и других растворителей.",
        colors: ["Белый","Черный"]
    },
    {
        id: "decor_zen_lamp",
        tags: ["home","свет"],
        name: "Zen Lamp",
        subtitle: "Настольный светильник",
        description: "Лампа из коллекции ZEN, вдохновлённая природными мотивами и восточной эстетикой.",
        images: [
        "photo/goods/LIGHTS/zen_lamp/zen_lamp_cover.png",
        "photo/goods/LIGHTS/zen_lamp/zen_lamp_cover_02.png",
        "photo/goods/LIGHTS/zen_lamp/zen_lamp.png",
        ],
        marketplaces: [
        { name: "ozon", icon: "photo/icons/ozon_icon.svg", url: "#" },
        { name: "wb", icon: "photo/icons/wb_icon.svg", url: "#" },
        { name: "yamarket", icon: "photo/icons/yamarket_icon.svg", url: "#" }
        ],
        specs: {
        Высота: "18 см",
        Длина: "10 см",
        Ширина: "10 см",
        Вес: "180 г",
        Материал: "PLA-пластик",
        Комплектация: "Один светильник. Лампа светодиодная Е14 в наборе!"
        },
        note: "Примечание: Помните, что материал не любит прямые солнечные лучи. Не стоит мыть с применением химии, спиртовых и других растворителей.Используйте в качестве источника света только светодиодные лампы, лампы накаливания могут вызвать перегрев и деформацию. Не накрывайте ночник во включенном состоянии",
        colors: []
    },

    {
        id: "decor_organic_candleholder",
        tags: ["home","декор"],
        name: "Organic Candleholders",
        subtitle: "Набор подсвечников для конических свечей",
        description: "Набор уникальных подсвечников мягкой волнистой формы, создающие атмосферу спокойствия. Отлично сочетаются с вазой Zen vase.",
        images: [
        "photo/goods/CHANDLEHOLDERS/organic_ch/organic_ch_cover.png",
        "photo/goods/CHANDLEHOLDERS/organic_ch/organic_ch_123_02.png",
        "photo/goods/CHANDLEHOLDERS/organic_ch/organic_ch_03_01.png",
        ],
        marketplaces: [
        { name: "ozon", icon: "photo/icons/ozon_icon.svg", url: "#" },
        { name: "wb", icon: "photo/icons/wb_icon.svg", url: "#" },
        { name: "yamarket", icon: "photo/icons/yamarket_icon.svg", url: "#" }
        ],
        specs: {
        Высота: "16 см",
        Длина: "6 см",
        Ширина: "6 см",
        Вес: "120г (вес 1 шт.)",
        Материал: "усиленный PLA-пластик",
        Комплектация: "Три подсвечника разных цветов"
        },
        note: "Примечание: Помните, что материал не любит прямые солнечные лучи. Не стоит мыть с применением химии, спиртовых и других растворителей.",
        colors: []
    },
    {
        id: "decor_organic_lamp",
        tags: ["home","свет"],
        name: "Organic Lamp",
        subtitle: "Настольный светильник",
        description: "Небольшой ночник с выразительной живой текстурой.",
        images: [
        "photo/goods/LIGHTS/organic_lamp/organic_lamp_01_cover_01.png",
        "photo/goods/LIGHTS/organic_lamp/organic_lamp_01_cover_02.png",
        "photo/goods/LIGHTS/organic_lamp/organic_lamp_02_cover_01.png",
        "photo/goods/LIGHTS/organic_lamp/organic_lamp_02_cover_02.png",
        "photo/goods/LIGHTS/organic_lamp/organic_lamp_01_01.png",
        "photo/goods/LIGHTS/organic_lamp/organic_lamp_02_01.png",
        ],
        marketplaces: [
        { name: "ozon", icon: "photo/icons/ozon_icon.svg", url: "#" },
        { name: "wb", icon: "photo/icons/wb_icon.svg", url: "#" },
        { name: "yamarket", icon: "photo/icons/yamarket_icon.svg", url: "#" }
        ],
        specs: {
        Высота: "15 см",
        Длина: "10 см",
        Ширина: "10 см",
        Вес: "160 г",
        Материал: "PLA-пластик",
        Комплектация: "Один светильник. Лампа светодиодная Е14 в наборе!"
        },
        note: "Примечание: Помните, что материал не любит прямые солнечные лучи. Не стоит мыть с применением химии, спиртовых и других растворителей.Используйте в качестве источника света только светодиодные лампы, лампы накаливания могут вызвать перегрев и деформацию. Не накрывайте ночник во включенном состоянии",
        colors: ["Бежевый","Зеленый"]
    },
    {
        id: "bthrm_orgnsr",
        tags: ["home","ванная", "порядок"],
        name: "Organic Orginiser",
        subtitle: "Органайзер для ванной",
        description: "Мягкий, текучей формы органайзер с двумя отделениями для ватных палочек и дисков. Практичен и визуально необычен.",
        images: [
        "photo/goods/BATHROOM/bthrm_orgnsr/bthrm_orgnzr_cover.png",
        "photo/goods/BATHROOM/bthrm_orgnsr/bthrm_orgnzr_01_01.png",
        "photo/goods/BATHROOM/bthrm_orgnsr/bthrm_orgnzr_01_02.png",
        "photo/goods/BATHROOM/bthrm_orgnsr/bthrm_orgnzr_01_03.png",
        "photo/goods/BATHROOM/bthrm_orgnsr/bthrm_orgnzr_02_01.png",
        "photo/goods/BATHROOM/bthrm_orgnsr/bthrm_orgnzr_03_01.png",
        ],
        marketplaces: [
        { name: "ozon", icon: "photo/icons/ozon_icon.svg", url: "#" },
        { name: "wb", icon: "photo/icons/wb_icon.svg", url: "#" },
        { name: "yamarket", icon: "photo/icons/yamarket_icon.svg", url: "#" }
        ],
        specs: {
        Высота: "10 cм",
        Длина: "13 см",
        Ширина: "6 см",
        Вес: "60 г",
        Материал: "PLA-пластик",
        Комплектация: "Один органайзер с крышкой"
        },
        note: "Примечание: Помните, что материал не любит температуры выше 60С, прямые солнечные лучи. Не стоит мыть с применением химии, спиртовых и других растворителей.",
        colors: ["Коричневый","Салатовый","Ярко-розовый"] 
    },
    {
        id: "decor_bloom_vase",
        tags: ["home","декор"],
        name: "Bloom Vase",
        subtitle: "Ваза для цветов",
        description: "Нежная ваза, мягкие изгибы которой напоминают цветущий бутон. Данную вазу можно использовать как для сухоцветов, так и для живых цветов!",
        images: [
        "photo/goods/VASES/bloom_vase/bloom_vase_01_cover.png",
        "photo/goods/VASES/bloom_vase/bloom_vase_02_cover.png",
        "photo/goods/VASES/bloom_vase/bloom_vase_03_cover.png",
        "photo/goods/VASES/bloom_vase/bloom_vase_01_01.png",
        "photo/goods/VASES/bloom_vase/bloom_vase_01_02.png",

        ],
        marketplaces: [
        { name: "ozon", icon: "photo/icons/ozon_icon.svg", url: "#" },
        { name: "wb", icon: "photo/icons/wb_icon.svg", url: "#" },
        { name: "yamarket", icon: "photo/icons/yamarket_icon.svg", url: "#" }
        ],
        specs: {
        Высота: "23см",
        Длина: "13 см",
        Ширина: "10 см",
        Вес: "150г",
        Материал: "PLA-пластик",
        Комплектация: "Одна ваза"
        },
        note: "Примечание: Помните, что материал не любит температуры выше 60С, прямые солнечные лучи. Не стоит мыть с применением химии, спиртовых и других растворителей.",
        colors: ["Ярко-розовый","Салатовый","Нежно-розовый"]
    },
    {
        id: "decor_lowpoly_vase",
        tags: ["home","декор"],
        name: "Lowpoly Vase",
        subtitle: "Ваза для цветов",
        description: "Вазы с выраженным низкополигональным рельефом. Грани преломляют свет, создавая сложную геометрию даже в моноцвете. Данную вазу можно использовать как для сухоцветов, так и для живых цветов!",
        images: [
        "photo/goods/VASES/lowpoly_vase/lowpoly_vase_cover.png",
        "photo/goods/VASES/lowpoly_vase/lowpoly_vase_01_cover.png",
        "photo/goods/VASES/lowpoly_vase/lowpoly_vase_02_cover.png",
        "photo/goods/VASES/lowpoly_vase/lowpoly_vase_03_cover.png",
        "photo/goods/VASES/lowpoly_vase/lowpoly_vase_04_cover.png",
        "photo/goods/VASES/lowpoly_vase/lowpoly_vase_01_01.png",
        "photo/goods/VASES/lowpoly_vase/lowpoly_vase_01_02.png",

        ],
        marketplaces: [
        { name: "ozon", icon: "photo/icons/ozon_icon.svg", url: "#" },
        { name: "wb", icon: "photo/icons/wb_icon.svg", url: "#" },
        { name: "yamarket", icon: "photo/icons/yamarket_icon.svg", url: "#" }
        ],
        specs: {
        Высота: "24см",
        Длина: "11 см",
        Ширина: "11 см",
        Вес: "110г",
        Материал: "PLA-пластик",
        Комплектация: "Одна ваза"
        },
        note: "Примечание: Помните, что материал не любит температуры выше 60С, прямые солнечные лучи. Не стоит мыть с применением химии, спиртовых и других растворителей.",
        colors: ["Бежевый","Коричневый","Черный","Голубой"]
    },
    {
        id: "decor_minimalist_vase",
        tags: ["home","декор"],
        name: "Minimalist Vase",
        subtitle: "Ваза для цветов",
        description: "Эксцентричная ваза в минималистичном стиле, которая отлично подойдет для современного интерьера. Подходит как для сухоцветов, так и для свежих цветов.",
        images: [
        "photo/goods/VASES/minimalist_vase/minimalist_01_cover.png",
        "photo/goods/VASES/minimalist_vase/minimalist_02_cover.png",
        "photo/goods/VASES/minimalist_vase/minimalist_03_cover.png",
        "photo/goods/VASES/minimalist_vase/minimalist_01_01.png",
        "photo/goods/VASES/minimalist_vase/minimalist_01_02.png",

        ],
        marketplaces: [
        { name: "ozon", icon: "photo/icons/ozon_icon.svg", url: "#" },
        { name: "wb", icon: "photo/icons/wb_icon.svg", url: "#" },
        { name: "yamarket", icon: "photo/icons/yamarket_icon.svg", url: "#" }
        ],
        specs: {
        Высота: "24см",
        Длина: "9 см",
        Ширина: "11 см",
        Вес: "110г",
        Материал: "PLA-пластик",
        Комплектация: "Одна ваза"
        },
        note: "Примечание: Помните, что материал не любит температуры выше 60С, прямые солнечные лучи. Не стоит мыть с применением химии, спиртовых и других растворителей.",
        colors: ["Желтый","Синий","Розовый"]
    },
    {
        id: "decor_lowpoly_candleholder",
        tags: ["home","декор"],
        name: "Lowpoly  Candleholders",
        subtitle: "Подсвечник для четырех конических свечей",
        description: "Подсвечник с выраженной низкополигональной текстурой. Геометрические грани отражают свет, создавая интересный визуальный облик. Подсвечник предназначен для четырех конических или столовых свечей",
        images: [
        "photo/goods/CHANDLEHOLDERS/lowpoly_ch/lowpoly_ch_cover.png",
        "photo/goods/CHANDLEHOLDERS/lowpoly_ch/lowpoly_ch_12_02.png",
        "photo/goods/CHANDLEHOLDERS/lowpoly_ch/lowpoly_ch_12_03.png",
        "photo/goods/CHANDLEHOLDERS/lowpoly_ch/lowpoly_ch_01_01.png",
        ],
        marketplaces: [
        { name: "ozon", icon: "photo/icons/ozon_icon.svg", url: "#" },
        { name: "wb", icon: "photo/icons/wb_icon.svg", url: "#" },
        { name: "yamarket", icon: "photo/icons/yamarket_icon.svg", url: "#" }
        ],
        specs: {
        Высота: "15 см",
        Длина: "12 см",
        Ширина: "12 см",
        Вес: "120г",
        Материал: "усиленный PLA-пластик",
        Комплектация: "Один подсвечник для четырех свечей"
        },
        note: "Примечание: Помните, что материал не любит прямые солнечные лучи. Не стоит мыть с применением химии, спиртовых и других растворителей.",
        colors: ["Коричневый","Голубой",]
    },

    {
        id: "toy_legowreath",
        tags: ["home","декор", "toys", "сборка"],
        name: "Wreath Deco",
        subtitle: "Конструктор-декоративный венок",
        description: "Декоративный венок, в виде конструктора. Лёгкий, выразительный декор, а также интересный пазл.",
        images: [
        "photo/goods/TOYS/wreath/legowreath_cover.png",
        "photo/goods/TOYS/wreath/legowreath_01.png",
        "photo/goods/TOYS/wreath/legowreath_02.png"
        ],
        marketplaces: [
        { name: "ozon", icon: "photo/icons/ozon_icon.svg", url: "#" },
        { name: "wb", icon: "photo/icons/wb_icon.svg", url: "#" },
        { name: "yamarket", icon: "photo/icons/yamarket_icon.svg", url: "#" }
        ],
        specs: {
        Высота: "5 см",
        Ширина: "25 см",
        Вес: "300 г",
        Материал: "PLA-пластик",
        Комплектация: "1 штука в разобранном виде"
        },
        note: "Примечание: Помните, что материал не любит прямые солнечные лучи. Не стоит мыть с применением химии, спиртовых и других растворителей.",
        colors: ["Зеленый","Белый"] 
    },
    {
        id: "toy_fidgetpaw",
        tags: ["toys", "игрушки"],
        name: "Paw Fidget Toy",
        subtitle: "Игрушка-антистресс «Лапка»",
        description: "Нажимная игрушка с мягкими подушечками в форме кошачьей лапки. Идеальна для расслабления рук и просто милый предмет на столе.",
        images: [
        "photo/goods/TOYS/fidgetpaw/fidgetpaw_toy_cover.png",
        "photo/goods/TOYS/fidgetpaw/fidgetpaw_toy_01.png",
        "photo/goods/TOYS/fidgetpaw/fidgetpaw_toy_02.png"
        ],
        marketplaces: [
        { name: "ozon", icon: "photo/icons/ozon_icon.svg", url: "#" },
        { name: "wb", icon: "photo/icons/wb_icon.svg", url: "#" },
        { name: "yamarket", icon: "photo/icons/yamarket_icon.svg", url: "#" }
        ],
        specs: {
        Высота: "6 см",
        Ширина: "7 см",
        Вес: "50 г",
        Материал: "PLA-пластикx",
        Комплектация: "1 штука"
        },
        note: "Примечание: Помните, что материал не любит прямые солнечные лучи. Не стоит мыть с применением химии, спиртовых и других растворителей.",
        colors: ["Белый","Черный"] 
    },
    {
        id: "toy_flexcat",
        tags: ["toys", "игрушки"],
        name: "Flexy Cat Toy",
        subtitle: "Игрушка «Гибкий кот»",
        description: "Серия гибких кошек-игрушек. Тянутся, изгибаются и приятно щёлкают. Могут быть использованы как фиджет или просто декор.",
        images: [
        "photo/goods/TOYS/flexcat/flexcat_toy_cover.png",
        "photo/goods/TOYS/flexcat/flexcat_toy_01.png",
        "photo/goods/TOYS/flexcat/flexcat_toy_02.png",
        "photo/goods/TOYS/flexcat/flexcat_toy_03.png",
        "photo/goods/TOYS/flexcat/flexcat_toy_04.png",
        ],
        marketplaces: [
        { name: "ozon", icon: "photo/icons/ozon_icon.svg", url: "#" },
        { name: "wb", icon: "photo/icons/wb_icon.svg", url: "#" },
        { name: "yamarket", icon: "photo/icons/yamarket_icon.svg", url: "#" }
        ],
        specs: {
        Высота: "5 см",
        Длина: "10 см",
        Вес: "20 г",
        Материал: "PLA-пластикx",
        Комплектация: "1 штука"
        },
        note: "Примечание: Помните, что материал не любит прямые солнечные лучи. Не стоит мыть с применением химии, спиртовых и других растворителей.",
        colors: ["Рыжий","Белый","Черный","Розовый"] 
    },
  ];















