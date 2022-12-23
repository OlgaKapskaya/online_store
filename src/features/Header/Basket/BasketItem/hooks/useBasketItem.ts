import {useAppDispatch} from "../../../../../bll/store";
import {changeCountItemToBuyAC, removeItemFromBasketAC} from "../../../../../bll/reducers/basketReducer";
import {ChangeEvent, useCallback} from "react";
import {BasketProductType} from "../../../../../bll/types";

export const useBasketItem = (item: BasketProductType) => {
    const dispatch = useAppDispatch()

    const onChangeCountItemToBuyHandler = (productID: string, newCount: number) => {
        dispatch(changeCountItemToBuyAC(productID, newCount))
    }
    const onRemoveItemFromBasketHandler = useCallback(() => {
        dispatch(removeItemFromBasketAC(item.productID))
    }, [item.productID, dispatch])
    const onChangeCountOfItem = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        if (+event.currentTarget.value) {
            onChangeCountItemToBuyHandler(item.productID, +event.currentTarget.value)
        }
    }
    return {onChangeCountOfItem, onRemoveItemFromBasketHandler}
}