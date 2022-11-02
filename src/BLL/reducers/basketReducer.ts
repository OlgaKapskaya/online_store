import {BasketProductType} from "../types";

const ADD_INTO_BASKET_ALL_ITEMS = 'ADD_INTO_BASKET_ALL_ITEMS'
const ADD_INTO_BASKET = 'ADD_INTO_BASKET'
const REMOVE_ALL_FROM_BASKET = 'REMOVE_ALL_FROM_BASKET'
const CHANGE_COUNT_ITEM_TO_BUY = 'CHANGE_COUNT_ITEM_TO_BUY'
const REMOVE_ONE_ITEM_FROM_BASKET = 'REMOVE_ONE_ITEM_FROM_BASKET'

//full action type
type BasketFullActionType = AddIntoBasketActionType | RemoveAllFromBasketActionType
    | ChangeCountItemToBuyActionType | RemoveItemFromBasketActionType | AddIntoBasketAllActionType

//action types
type AddIntoBasketActionType = {
    type: 'ADD_INTO_BASKET'
    buyProduct: BasketProductType
}
type AddIntoBasketAllActionType = {
    type: 'ADD_INTO_BASKET_ALL_ITEMS'
    buyProducts: BasketProductType[]
}
type RemoveAllFromBasketActionType = {
    type: 'REMOVE_ALL_FROM_BASKET'
}
type ChangeCountItemToBuyActionType = {
    type: 'CHANGE_COUNT_ITEM_TO_BUY'
    productID: string
    newCount: number
}
type RemoveItemFromBasketActionType = {
    type: 'REMOVE_ONE_ITEM_FROM_BASKET'
    productID: string
}

export const basketReducer = (basket: BasketProductType[], action: BasketFullActionType): BasketProductType[] => {
    switch (action.type) {
        case ADD_INTO_BASKET_ALL_ITEMS:
            return action.buyProducts
        case ADD_INTO_BASKET:
            return [...basket, action.buyProduct]
        case REMOVE_ALL_FROM_BASKET:
            return []
        case CHANGE_COUNT_ITEM_TO_BUY:
            return basket.map( elem => elem.productID === action.productID ? {...elem, productCountToBuy: action.newCount} : elem)
        case REMOVE_ONE_ITEM_FROM_BASKET:
            return basket.filter( elem => elem.productID !== action.productID)
        default: return basket
    }
}

export const AddIntoBasketActionCreator = (buyProduct: BasketProductType): AddIntoBasketActionType => {
   return {type:ADD_INTO_BASKET, buyProduct: buyProduct}
}
export const RemoveAllFromBasketActionCreator = (): RemoveAllFromBasketActionType => {
    return {type: REMOVE_ALL_FROM_BASKET}
}
export const ChangeCountItemToBuyActionCreator = (productID: string, newCount: number): ChangeCountItemToBuyActionType => {
    return {type: CHANGE_COUNT_ITEM_TO_BUY, productID: productID, newCount: newCount}
}
export const RemoveItemFromBasketActionCreator = (productID: string): RemoveItemFromBasketActionType => {
    return {type: REMOVE_ONE_ITEM_FROM_BASKET, productID: productID}
}
export const AddIntoBasketAllAction = (buyProducts: BasketProductType[]): AddIntoBasketAllActionType => {
    return {type: ADD_INTO_BASKET_ALL_ITEMS, buyProducts: buyProducts}
}
