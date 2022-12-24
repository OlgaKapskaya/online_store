import iPhone from '../assets/img/iPhone.jpeg'
import iMac from '../assets/img/iMac.png'
import iPad from '../assets/img/iPad.jpeg'
import Watch from '../assets/img/Watch.jpeg'
import MacBook from '../assets/img/MacBook.jpeg'
import Case from '../assets/img/case.jpeg'
import TV from '../assets/img/TV.png'
import Band from '../assets/img/WatchBand.png'
import pods from '../assets/img/airPods.webp'
import {StateType} from "./types";


export const state: StateType = {
    productData: [
        {
            productID: 'b120c5f1-5a97-11ed-90f4-532a5dca7d1c',
            productName: 'iPhone 13 Pro',
            productDescription: 'Apple iOS, экран 6.1" OLED (1170x2532), Apple A15 Bionic, ОЗУ 6 ГБ, флэш-память 128 ГБ, камера 12 Мп, аккумулятор 3095 мАч, 1 SIM, влагозащита IP68',
            productPhoto: iPhone,
            productPrice: 2600,
            productCount: 10,
            productCategories: "iPhone",
            productArticle: 'MLW33RK/A'
        },
        {
            productID: 'b120c5f2-5a97-11ed-90f4-532a5dca7d1c',
            productName: 'iMac',
            productDescription: 'Apple iMac 21.5", 1.6 ГГц Core i5, 8 ГБ ОЗУ, MK142RU/A. Диагональ экрана: 21,5 дюйма. Год выпуска: 2015.',
            productPhoto: iMac,
            productPrice: 4300,
            productCount: 10,
            productCategories: 'Mac',
            productArticle: '2CMVVM2'
        },
        {
            productID: 'b120c5f3-5a97-11ed-90f4-532a5dca7d1c',
            productName: 'iPad',
            productDescription: 'bla-bla-bla',
            productPhoto: iPad,
            productPrice: 2500,
            productCount: 10,
            productCategories: "iPad",
            productArticle: 'MLW33RK/A'
        },
        {
            productID: 'b120c5f4-5a97-11ed-90f4-532a5dca7d1c',
            productName: 'iWatch series 7',
            productDescription: 'bla-bla-bla',
            productArticle: '2QMG143',
            productPhoto: Watch,
            productPrice: 900,
            productCount: 10,
            productCategories: "Watch"
        },
        {
            productID: 'b120c5f5-5a97-11ed-90f4-532a5dca7d1c',
            productName: 'MacBook',
            productDescription: 'bla-bla-bla',
            productPhoto: MacBook,
            productPrice: 2700,
            productCount: 10,
            productCategories: "MacBook",
            productArticle: 'MK193RU/A'
        },
        {
            productID: 'b120c5f6-5a97-11ed-90f4-532a5dca7d1c',
            productName: 'Case',
            productDescription: 'bla-bla-bla',
            productPhoto: Case,
            productPrice: 30,
            productCategories: "Аксессуары",
            productCount: 100,
            productArticle: 'MK193RU/CASE'
        },
        {
            productID: 'b120c5f7-5a97-11ed-90f4-532a5dca7d1c',
            productName: 'Apple TV',
            productDescription: 'bla-bla-bla',
            productPhoto: TV,
            productPrice: 1500,
            productCount: 11,
            productCategories: "TV",
            productArticle: 'MK193RU/TV'
        },
        {
            productID: 'b120c5f8-5a97-11ed-90f4-532a5dca7d1c',
            productName: 'Apple Watch Band',
            productDescription: 'bla-bla-bla',
            productPhoto: Band,
            productPrice: 50,
            productCategories: "Аксессуары",
            productCount: 100,
            productArticle: 'MK193RU/BAND'
        },
        {
            productID: 'b120c5f9-5a97-11ed-90f4-532a5dca7d1c',
            productName: 'AirPods',
            productDescription: 'bla-bla-bla',
            productPhoto: pods,
            productPrice: 870,
            productCategories: 'AirPods',
            productCount: 45,
            productArticle: 'MK1HYRU/PODS'
        }
    ],
    categoriesData: [
        {id: "1", category: 'Mac'},
        {id: "2", category: 'MacBook'},
        {id: "3", category: 'iPad'},
        {id: "4", category: 'iPhone'},
        {id: "5", category: 'Watch'},
        {id: "6", category: 'AirPods'},
        {id: "7", category: 'Аксессуары'}
    ]
}
// export const info = [{
//     id: 'b120c5f1-5a97-11ed-90f4-532a5dca7d1c',
//     description: 'Apple iOS, экран 6.1" OLED (1170x2532), Apple A15 Bionic, ОЗУ 6 ГБ, флэш-память 128 ГБ, камера 12 Мп, аккумулятор 3095 мАч, 1 SIM, влагозащита IP68, Особенности\tПоддежка быстрой зарядки\n' +
//         'AirPlay\n' +
//         'Поддержка вывода видео через адаптеры (продаются отдельно)\n' +
//         'Беспроводная зарядка (поддерживаются зарядные устройства стандарта Qi)\n' +
//         'Apple Pay\n' +
//         'U1 чип для пространственной осведомленности\n' +
//         'Экспресс-карты с резервным питанием\n' +
//         'Аудиозвонки FaceTime\n' +
//         'Совместимость со слуховыми аппаратами M3, T4\n' +
//         'Поддержка аксессуаров MagSafe\n' +
//         '16‑ядерная система Neural Engine\n' +
//         '2 производительных ядра и 4 ядра эффективности\n' +
//         'Поддержка HDR в стандартах Dolby Vision, HDR10 и HLG\n' +
//         'Пространственное аудио\n' +
//         'Режимы «Изоляция голоса» и «Широкий спектр» для микрофона\n' +
//         'Общий экран\n' +
//         'Режим «Портрет» в видеовызовах FaceTime\n' +
//         '5‑ядерный графический процессор'
//
// },
//
//     {
//         id: 'b120c5f2-5a97-11ed-90f4-532a5dca7d1c',
//         description: 'Тип системы\tДесктоп\n' +
//             'Форм-фактор системы\tМоноблок\n' +
//             'Встроенные устройства\tМикрофон\n' +
//             'Картридер\n' +
//             'Камера FaceTime\n' +
//             'Поддерживаемые типы Flash\tSDXC'
//
//     }]