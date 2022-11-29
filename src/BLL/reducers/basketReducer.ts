import {BasketProductType} from "../types";
import {Dispatch} from "redux";

const initState: BasketProductType[] = []

//full action type
export type BasketReducerAT = AddIntoBasketAT | RemoveAllFromBasketAT
    | ChangeCountItemToBuyAT | RemoveItemFromBasketAT | AddIntoBasketAllAT

//action types
type AddIntoBasketAT = ReturnType<typeof addIntoBasketAC>
type AddIntoBasketAllAT = ReturnType<typeof addIntoBasketAllAC>
type RemoveAllFromBasketAT = ReturnType<typeof removeAllFromBasketAC>
type ChangeCountItemToBuyAT = ReturnType<typeof changeCountItemToBuyAC>
type RemoveItemFromBasketAT = ReturnType<typeof removeItemFromBasketAC>

export const basketReducer = (basket = initState, action: BasketReducerAT): BasketProductType[] => {
    switch (action.type) {
        case 'ADD_INTO_BASKET_ALL_ITEMS':
            return action.buyProducts
        case 'ADD_INTO_BASKET':
            return [...basket, action.buyProduct]
        case 'REMOVE_ALL_FROM_BASKET':
            return []
        case 'CHANGE_COUNT_ITEM_TO_BUY':
            return basket.map( elem => elem.productID === action.productID ? {...elem, productCountToBuy: action.newCount} : elem)
        case 'REMOVE_ONE_ITEM_FROM_BASKET':
            return basket.filter( elem => elem.productID !== action.productID)
        default: return basket
    }
}

//action creators
export const addIntoBasketAC = (buyProduct: BasketProductType) => {
   return {type: 'ADD_INTO_BASKET', buyProduct: buyProduct} as const
}
export const removeAllFromBasketAC = () => {
    return {type: 'REMOVE_ALL_FROM_BASKET'} as const
}
export const changeCountItemToBuyAC = (productID: string, newCount: number) => {
    return {type: 'CHANGE_COUNT_ITEM_TO_BUY', productID: productID, newCount: newCount} as const
}
export const removeItemFromBasketAC = (productID: string) => {
    return {type: 'REMOVE_ONE_ITEM_FROM_BASKET', productID: productID} as const
}
export const addIntoBasketAllAC = (buyProducts: BasketProductType[]) => {
    return {type: 'ADD_INTO_BASKET_ALL_ITEMS', buyProducts: buyProducts} as const
}


//thunk creators
export const getBasketIntoLocalStorageTC = () => (dispatch: Dispatch<BasketReducerAT>) => {
    const local_storage = localStorage.getItem('inBasket')
    if (local_storage) {
        let storage_get = JSON.parse(local_storage)
        dispatch(addIntoBasketAllAC(storage_get))
    }
}
export const clearBasketTC = () => (dispatch: Dispatch<BasketReducerAT>) => {
    localStorage.removeItem('inBasket')
    dispatch(removeAllFromBasketAC())
}
