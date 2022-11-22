import iPhone from '../img/iPhone.jpeg'
import iMac from '../img/iMac.png'
import iPad from '../img/iPad.jpeg'
import Watch from '../img/Watch.jpeg'
import MacBook from '../img/MacBook.jpeg'
import Case from '../img/case.jpeg'
import TV from '../img/TV.png'
import Band from '../img/WatchBand.png'
import pods from '../img/airPods.webp'
import {StateType} from "./types";


export const state: StateType = {
    productData: [
        { productID: 'b120c5f1-5a97-11ed-90f4-532a5dca7d1c', productName: 'iPhone 13 Pro', productDescription: 'Apple iOS, экран 6.1" OLED (1170x2532), Apple A15 Bionic, ОЗУ 6 ГБ, флэш-память 128 ГБ, камера 12 Мп, аккумулятор 3095 мАч, 1 SIM, влагозащита IP68',productPhoto: iPhone, productPrice: 2600, productCount: 10, productCategories: {type: "iPhone"}, productArticle: 'MLW33RK/A'},
        { productID: 'b120c5f2-5a97-11ed-90f4-532a5dca7d1c', productName: 'iMac', productDescription: 'Apple iMac 21.5", 1.6 ГГц Core i5, 8 ГБ ОЗУ, MK142RU/A. Диагональ экрана: 21,5 дюйма. Год выпуска: 2015.',productPhoto: iMac, productPrice: 4300, productCount: 10, productCategories: {type: 'Mac'}, productArticle:'2CMVVM2'},
        { productID: 'b120c5f3-5a97-11ed-90f4-532a5dca7d1c', productName: 'iPad', productDescription: 'bla-bla-bla',productPhoto: iPad, productPrice: 2500, productCount: 10, productCategories: {type: "iPad"}, productArticle: 'MLW33RK/A'},
        { productID: 'b120c5f4-5a97-11ed-90f4-532a5dca7d1c', productName: 'iWatch series 7', productDescription: 'bla-bla-bla',productArticle: '2QMG143' ,productPhoto: Watch, productPrice: 900, productCount: 10, productCategories: {type: "Watch"}},
        { productID: 'b120c5f5-5a97-11ed-90f4-532a5dca7d1c', productName: 'MacBook', productDescription: 'bla-bla-bla',productPhoto:MacBook, productPrice: 2700, productCount: 10, productCategories: {type: "MacBook"}, productArticle: 'MK193RU/A'},
        { productID: 'b120c5f6-5a97-11ed-90f4-532a5dca7d1c', productName: 'Case', productDescription: 'bla-bla-bla', productPhoto: Case, productPrice: 30, productCategories: {type: "Аксессуары"}, productCount:100, productArticle: 'MK193RU/CASE'},
        { productID: 'b120c5f7-5a97-11ed-90f4-532a5dca7d1c', productName: 'Apple TV', productDescription: 'bla-bla-bla',productPhoto:TV, productPrice: 1500, productCount: 11, productCategories: {type: "TV"}, productArticle: 'MK193RU/TV'},
        { productID: 'b120c5f8-5a97-11ed-90f4-532a5dca7d1c', productName: 'Apple Watch Band', productDescription: 'bla-bla-bla', productPhoto: Band, productPrice: 50, productCategories: {type: "Аксессуары"}, productCount:100, productArticle: 'MK193RU/BAND'},
        { productID: 'b120c5f9-5a97-11ed-90f4-532a5dca7d1c', productName: 'AirPods', productDescription: 'bla-bla-bla', productPhoto: pods, productPrice: 870, productCategories: {type: 'AirPods'}, productCount: 45, productArticle: 'MK1HYRU/PODS'}
    ],
    categoriesData: [
        { type: 'Mac'},
        { type: 'MacBook'},
        { type: 'iPad'},
        { type: 'iPhone'},
        { type: 'Watch'},
        { type: 'AirPods'},
        { type: 'Аксессуары'}
    ]
}