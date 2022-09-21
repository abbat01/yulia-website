const langArr = {
    date: {
        ru: 'сентября',
        ua: 'вересня',
    },
    start: {
        ru: 'старт',
        ua: 'старт',
    },
    duration: {
        ru: 'Длительность:',
        ua: 'Тривалість:',
    },
    days: {
        ru: '60 дней',
        ua: '60 днів',
    },
    format: {
        ru: 'Формат:',
        ua: 'Формат:',
    },
    online: {
        ru: 'online',
        ua: 'online',
    },
    heroTitle: {
        ru: 'Юлиана<br> Груноковская',
        ua: 'Юліана<br> Грунковська',
    },
    heroSubtitle: {
        ru: 'Практикующий мастер и инструктор',
        ua: 'Практикуючий майстер та інструктор',
    },
    students: {
        ru: 'Более 3000 учеников по всему миру',
        ua: 'Понад 3000 учнів по всьому світу ',
    },
    things: {
        ru: 'Объясняю сложные вещи простыми словами',
        ua: 'Пояснюю складні речі простими словами',
    },
    nails: {
        ru: 'Научу вас делать эксклюзивные ногти и<br> выделяться среди работ других мастеров',
        ua: 'Навчу вас робити ексклюзивні нігті та<br> виділятися серед робіт інших майстрів',
    },
    nailsBtn: {
        ru: 'Онлайн-курс',
        ua: 'Онлайн-курс',
    },
    salon: {
        ru: 'Современный<br> салонный миндаль',
        ua: 'Сучасний<br> салонний мигдаль',
    },
    salonSubtitle: {
        ru: 'Моделирование салонного миндаля в 2-х техниках: Выкладной френч и без опила',
        ua: 'Моделювання салонного мигдалю в 2-х техніках: Викладний френч і без опилу',
    },
    entry: {
        ru: 'Доступ к курсу:',
        ua: 'Доступ до курсу:',
    },
    salonBtn: {
        ru: 'ПРИНЯТЬ УЧАСТИЕ <img src="./assets/icons/finger-svg.svg" alt="" width="17px" height="17px">',
        ua: 'Прийняти участь <img src="./assets/icons/finger-svg.svg" alt="" width="17px" height="17px">',
    },
    courseTitle: {
        ru: 'КОМУ ПОДОЙДЁТ КУРС?',
        ua: 'КОМУ ПІДІЙДЕ КУРС?',
    },
    card1: {
        ru: 'Начинающим мастерам, не<br> владеющим знаниями и навыками в<br> моделировании',
        ua: 'Майстрам початківцям, які не<br> володіють знаннями та навичками в<br> моделюванні',
    },
    card2: {
        ru: 'Мастерам с опытом, у<br> которых есть пробелы в<br> знаниях',
        ua: 'майстрам з досвідом, які<br> мають прогалини у<br> знаннях',
    },
    card3: {
        ru: 'Мастерам, которых не устраивает<br> качество своих работ и которые<br> хотят перезагрузить или обновить<br> свои знания',
        ua: 'майстрам, яких не влаштовує<br> якість своїх робіт і які<br> хочуть перезавантажити чи оновити<br> свої знання',
    },
    studyTitle: {
        ru: 'Программа курса:',
        ua: 'Програма курсу:',
    },
    li1: {
        ru: 'Материалы и инструменты для моделирования',
        ua: 'Матеріали та інструменти для моделювання',
    },
    li2: {
        ru: 'Особенности и определение типов ногтевых пластин',
        ua: 'Особливості та визначення типів нігтьових пластин',
    },
    li3: {
        ru: 'Ориентиры при искривлении фаланг',
        ua: 'Орієнтири при викривленні фаланг',
    },
    li4: {
        ru: 'Архитектура современного салонного миндаля',
        ua: 'Архітектура сучасного салонного мигдалю',
    },
    li5: {
        ru: 'Всё о шаблонах. На что обращать внимание при выборе?',
        ua: 'Все про шаблони.  На що звертати увагу під час вибору?',
    },
    li6: {
        ru: 'Подрезание и подстановка шаблонов на разные виды роста ногтевых пластин',
        ua: 'Підрізання та підстановка шаблонів на різні види росту нігтьових пластин',
    },
    li7: {
        ru: 'Ошибки при подстановке шаблонов и выкладке материала',
        ua: 'Помилки при підстановці шаблонів та викладанні матеріалу',
    },
    li8: {
        ru: 'Определение пропорций при моделировании',
        ua: 'Визначення пропорцій при моделюванні',
    },
    li9: {
        ru: 'Секрет идеальных усов и линии улыбки',
        ua: 'Секрет ідеальних вусиків та лінії посмішки френча',
    },
    li10: {
        ru: 'Замесы для создания цветных материалов',
        ua: 'Заміси для створення кольорових матеріалів',
    },
    li11: {
        ru: 'Причины отслоек искусственного материала',
        ua: 'Причини відшарування штучного матеріалу',
    },
    li12: {
        ru: 'Техника аппаратного маникюра с подробными схемами',
        ua: 'Техніка апаратного манікюру зі схемами',
    },
    li13: {
        ru: 'Правильная подготовка ногтевой пластины',
        ua: 'Правильна підготовка нігтьової пластини',
    },
    li14: {
        ru: 'Чистая и быстрая выкладка материала в технике без опила и выкладной френч',
        ua: 'Чиста та швидка викладка матеріалу в техніці без опила та викладний френч',
    },
    li15: {
        ru: 'Работа с разными материалами, совмещение материалов',
        ua: 'Робота з різними матеріалами, суміщення матеріалів',
    },
    li16: {
        ru: 'Скоростная схема опила по форме салонный миндаль',
        ua: 'Швидкісна схема опилу форми салонний мигдаль',
    },
    howEdTitle: {
        ru: 'ПРЕИМУЩЕСТВА<br> ОБУЧЕНИЯ',
        ua: 'ПЕРЕВАГИ<br> НАВЧАННЯ',
    },
    howEdLi1: {
        ru: 'Обратная связь на протяжении обучения<br> в закрытом чате с учениками, проверка<br> работ и разбор ошибок',
        ua: "Зворотній зв'язок під час навчання<br> у закритому чаті з учнями, перевірка<br> робіт та розбір помилок.",
    },
    howEdLi2: {
        ru: 'Все уроки в записи в отличном<br> качестве, смонтированы без воды и<br> лишних движений',
        ua: 'Всі уроки в записі у відмінній<br> якості, змонтовані без води та<br> зайвих рухів👌🏻',
    },
    howEdLi3: {
        ru: 'Удобная обучающая платформа и<br> возможность смотреть курс с<br> любого устройства',
        ua: 'Зручна навчальна платформа та<br> можливість дивитися курс з<br> будь-якого пристрою.',
    },
    howEdLi4: {
        ru: 'Доступ к урокам и обратная связь на<br> протяжении 60 дней',
        ua: "Доступ до уроків та зворотний зв'язок<br> протягом 60 днів❗",
    },
    howEdLi5: {
        ru: 'Ваши работы будут выделяться среди<br> работ других мастеров',
        ua: 'Ваші роботи виділятимуться серед<br> робіт інших майстрів 🔥',
    },
    howEdLi6: {
        ru: 'За отработку без замечаний выдаётся<br> сертификат',
        ua: 'За відпрацювання без зауважень видається<br> сертифікат.',
    },
    mobile: {
        ru: 'Для просмотра уроков<br> вам подойдет телефон<br> или ноутбук',
        ua: 'Для перегляду уроків<br> вам підійде телефон<br> або ноутбук',
    },
    costTitle: {
        ru: 'стоимость ОБУЧЕНИЯ',
        ua: 'Вартість навчання',
    },
    costBtn: {
        ru: 'приобрести курс <img src="./assets/icons/finger-svg.svg" alt="" width="17px" height="17px">',
        ua: 'Придбати курс <img src="./assets/icons/finger-svg.svg" alt="" width="17px" height="17px">',
    },
    worksTitle: {
        ru: 'Примеры работ',
        ua: 'Приклади робіт',
    },
    footerTitle: {
        ru: 'контакты',
        ua: 'контакти',
    },
    mail: {
        ru: 'Почта:',
        ua: 'Пошта:',
    },
    policy1: {
        ru: 'Политика конфиденциальности',
        ua: 'Політика конфіденційності',
    },
    policy2: {
        ru: 'Условия оказания услуг',
        ua: 'Умови надання послуг',
    },
    
}