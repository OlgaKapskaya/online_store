import React, {useState} from "react";
import s from './HeaderComponent.module.css'
import {Badge, IconButton} from "@material-ui/core";
import {QueryBuilderOutlined, ShoppingBasket} from "@material-ui/icons";
import {BasketProductType} from "../../BLL/types";
import {Basket} from "./Basket/Basket";

type HeaderComponentProps = {
    basketProduct: BasketProductType[]
    clearBasket: () => void
    onChangeCountItemToBuy: (productID: string, newCount: number) => void
    onRemoveItemFromBasket: (productID: string) => void

}
export const HeaderComponent = (props: HeaderComponentProps) => {
    const [isVisible, setIsVisible] = useState(false)
    const onClickBasketHandler = () => setIsVisible(true)
    let totalPrice = props.basketProduct.reduce((sum, current) =>
        sum + current.productPrice * current.productCountToBuy, 0)

    return (
        <div className={s.HeaderContainer}>
            <div className={s.logoContainer}>
                <img src={'https://pngimg.com/uploads/apple_logo/apple_logo_PNG19674.png'}
                     alt={'logo'}
                     className={s.logo}/>
                <span>APPLE SHOP</span>
            </div>

            <div className={s.workTimeContainer}>
                <QueryBuilderOutlined/>
                <div className={s.workTime}>
                    <div>08:30 - 22:00 (пн - пт)</div>
                    <div>10:00 - 19:00 (сб - вс)</div>
                </div>

            </div>
            <div className={s.basketContainer}>
                <span><b>{totalPrice} BYN </b></span>
                <IconButton onClick={onClickBasketHandler}>
                    <Badge badgeContent={props.basketProduct.length} color="secondary"
                           overlap="rectangular"
                           invisible={props.basketProduct.length < 1} variant={'standard'}>
                        <ShoppingBasket color={'primary'}/>
                    </Badge>
                </IconButton>
                {isVisible && <Basket basketProduct={props.basketProduct}
                                      totalPrice={totalPrice}
                                      isVisible={isVisible}
                                      clearBasket={props.clearBasket}
                                      onChangeCountItemToBuy={props.onChangeCountItemToBuy}
                                      onRemoveItemFromBasket={props.onRemoveItemFromBasket}
                                      setIsVisible={setIsVisible}/>}
            </div>

        </div>
    )
}