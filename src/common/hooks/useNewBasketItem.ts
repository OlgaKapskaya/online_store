import {useAppDispatch, useAppSelector} from "./react-redux-hooks";
import {BasketProductType, ProductDataType} from "../../bll/types";
import {addIntoBasketAC} from "../../bll/reducers/basketReducer";
import {useCallback} from "react";

/**
 * Returns onBasket = true if the item is in the basket;
 *
 * setInBasket puts the product in the basket
 * @param product
 */
export const useNewBasketItem = (product: ProductDataType): [boolean, () => void] => {
    const dispatch = useAppDispatch()
    const basketItems = useAppSelector<BasketProductType[]>(state => state.basketData)
    const onBasket = !!basketItems.find(item => item.productID === product.productID)

    const setInBasketHandler = useCallback((buyProduct: BasketProductType) => {
        if (!onBasket) dispatch(addIntoBasketAC(buyProduct))
    }, [onBasket])

    const setInBasket = useCallback(() => {
        const newProduct: BasketProductType = {
            ...product,
            productCountToBuy: 1
        }
        setInBasketHandler(newProduct)
    }, [product])

    return [onBasket, setInBasket]
}