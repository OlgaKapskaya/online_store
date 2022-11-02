import iPhone from '../img/iPhone.jpeg'
import iMac from '../img/iMac.png'
import iPad from '../img/iPad.jpeg'
import Watch from '../img/Watch.jpeg'
import MacBook from '../img/MacBook.jpeg'
import Case from '../img/case.jpeg'
import TV from  '../img/TV.png'
import Band from '../img/WatchBand.png'

import {StateType} from "./types";
import {v1} from "uuid";

export const state: StateType = {
    productData: [
        { productID: v1(), productName: 'iPhone 13 Pro', productDescription: 'Apple iOS, экран 6.1" OLED (1170x2532), Apple A15 Bionic, ОЗУ 6 ГБ, флэш-память 128 ГБ, камера 12 Мп, аккумулятор 3095 мАч, 1 SIM, влагозащита IP68',productPhoto: iPhone, productPrice: 1300, productCount: 10, productCategories: {type: "iPhone"}, productArticle: 'MLW33RK/A'},
        { productID: v1(), productName: 'iMac', productDescription: 'Apple iMac 21.5", 1.6 ГГц Core i5, 8 ГБ ОЗУ, MK142RU/A. Диагональ экрана: 21,5 дюйма. Год выпуска: 2015.',productPhoto: iMac, productPrice: 4300, productCount: 10, productCategories: {type: 'Mac'}, productArticle:'2CMVVM2'},
        { productID: v1(), productName: 'iPad', productDescription: 'bla-bla-bla',productPhoto: iPad, productPrice: 1300, productCount: 10, productCategories: {type: "iPad"}, productArticle: 'MLW33RK/A'},
        { productID: v1(), productName: 'iWatch series 7', productDescription: 'bla-bla-bla',productArticle: '2QMG143' ,productPhoto: Watch, productPrice: 500, productCount: 10, productCategories: {type: "Watch"}},
        { productID: v1(), productName: 'MacBook', productDescription: 'bla-bla-bla',productPhoto:MacBook, productPrice: 1100, productCount: 10, productCategories: {type: "MacBook"}, productArticle: 'MK193RU/A'},
        { productID: v1(), productName: 'Case', productDescription: 'bla-bla-bla', productPhoto: Case, productPrice: 30, productCategories: {type: "Аксессуары"}, productCount:100, productArticle: 'MK193RU/CASE'},
        { productID: v1(), productName: 'Apple TV', productDescription: 'bla-bla-bla',productPhoto:TV, productPrice: 2100, productCount: 11, productCategories: {type: "TV"}, productArticle: 'MK193RU/TV'},
        { productID: v1(), productName: 'Apple Watch Band', productDescription: 'bla-bla-bla', productPhoto: Band, productPrice: 50, productCategories: {type: "Аксессуары"}, productCount:100, productArticle: 'MK193RU/BAND'}
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