import React, {useState} from "react";
import s from './HeaderComponent.module.css'
import {Badge, Button, Drawer, IconButton} from "@material-ui/core";
import {QueryBuilderOutlined, ShoppingBasket} from "@material-ui/icons";
import {BasketProductType} from "../../BLL/types";
import {BasketItem} from "./BasketItem/BasketItem";

type HeaderComponentProps = {
    basketProduct: BasketProductType[]
    clearBasket: () => void
}
export const HeaderComponent = (props: HeaderComponentProps) => {
    const [isVisible, setIsVisible] = useState(false)
    const onClickBasketHandler = () => {
        setIsVisible(true)
    }
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
                <IconButton onClick={onClickBasketHandler}>
                    <Badge badgeContent={props.basketProduct.length} color="secondary"
                           invisible={props.basketProduct.length < 1} variant={'standard'}>
                        <ShoppingBasket color={'primary'}/>
                    </Badge>
                </IconButton>
                {isVisible &&
                    <Drawer anchor={'right'} open={isVisible} onClose={() => setIsVisible(false)}>
                        <div className={s.totalPrice}>
                            {props.basketProduct.length>0 && <span>Всего <b>{props.basketProduct.length}</b> товаров общей стоимостью:</span>}
                            {(props.basketProduct.length <= 0) && <span>Ваша корзина пуста</span>}
                        </div>
                        <div className={s.buttonGroup}>
                            <Button color={'primary'}
                                    variant={'contained'}
                                    disabled={props.basketProduct.length <= 0}
                                    onClick={props.clearBasket}>Очистить корзину</Button>
                            <Button color={'secondary'}
                                    variant={'contained'}
                                    disabled={props.basketProduct.length <= 0}>Оформить заказ</Button>
                        </div>
                        {props.basketProduct.map(elem => <BasketItem basketItem={elem}/>)}

                    </Drawer>}
            </div>

        </div>
    )
}