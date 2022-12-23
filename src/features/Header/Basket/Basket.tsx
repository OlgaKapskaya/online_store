import s from "./Basket.module.css"
import {Drawer} from "@material-ui/core";
import {BasketItem} from "./BasketItem/BasketItem";
import React, {FC} from "react";
import {useAppDispatch, useAppSelector} from "../../../bll/store";
import {clearBasketTC} from "../../../bll/reducers/basketReducer";
import {BasketHeader} from "./BasketHeader/BasketHeader";
import {selectBasketData} from "../../../bll/selectors/backetSelectors";
import {ButtonUC} from "../../../common/components/Button/ButtonUC";


type BasketProsType = {
    totalPrice: number
    isVisible: boolean
    setIsVisible: (isVisible: boolean) => void
}
export const Basket: FC<BasketProsType> = ({
                                               totalPrice,
                                               isVisible,
                                               setIsVisible
                                           }) => {

    const dispatch = useAppDispatch()
    const basketProduct = useAppSelector(selectBasketData)

    const onClearBasketHandler = () => {
        dispatch(clearBasketTC())
    }

    return (
        <Drawer anchor="right"
                open={isVisible}
                onClose={() => setIsVisible(false)}>
            <BasketHeader basketProductLength={basketProduct.length} totalPrice={totalPrice}/>
            <div className={s.buttonGroup}>
                <ButtonUC name="Очистить корзину"
                          disabled={!basketProduct.length}
                          onClick={onClearBasketHandler}
                />
                <ButtonUC name="Оформить заказ"
                          color="secondary"
                          disabled={!basketProduct.length}
                          onClick={() => {}}
                />
            </div>
            {
                basketProduct.map(elem => <BasketItem key={elem.productID}
                                                      basketItem={elem}/>)
            }

        </Drawer>
    )
}