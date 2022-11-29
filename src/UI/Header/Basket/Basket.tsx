import s from './Basket.module.css'
import {Button, Drawer} from "@material-ui/core";
import {BasketItem} from "../BasketItem/BasketItem";
import React from "react";
import {BasketProductType} from "../../../BLL/types";
import {useAppDispatch} from "../../../BLL/store";
import {clearBasketTC} from "../../../BLL/reducers/basketReducer";


type BasketProsType = {
    basketProduct: BasketProductType[]
    totalPrice: number
    isVisible: boolean
    setIsVisible: (isVisible: boolean) => void
}
export const Basket = (props: BasketProsType) => {
    const dispatch = useAppDispatch()
    const onClearBasketHandler = () => {
        dispatch(clearBasketTC())
    }

    return (
        <Drawer anchor={'right'}
                open={props.isVisible}
                onClose={() => props.setIsVisible(false)}>
            <div className={s.totalPrice}>
                {props.basketProduct.length > 0 &&
                    <div>
                        <div>Всего <b>{props.basketProduct.length}</b> наименований </div>
                        <div>общей стоимостью: <b>{props.totalPrice} BYN</b></div>
                    </div>}
                {(props.basketProduct.length <= 0) && <span>Ваша корзина пуста</span>}
            </div>
            <div className={s.buttonGroup}>
                <Button color={'primary'}
                        variant={'contained'}
                        disabled={props.basketProduct.length <= 0}
                        onClick={onClearBasketHandler}>Очистить корзину</Button>
                <Button color={'secondary'}
                        variant={'contained'}
                        disabled={props.basketProduct.length <= 0}>Оформить заказ</Button>
            </div>
            {props.basketProduct.map(elem => <BasketItem key={elem.productID}
                                                         basketItem={elem}/>)}

        </Drawer>
    )
}