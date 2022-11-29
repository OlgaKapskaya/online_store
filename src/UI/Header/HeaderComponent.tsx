import React, {memo, useMemo, useState} from "react";
import s from './HeaderComponent.module.css'
import {Badge, IconButton} from "@material-ui/core";
import {QueryBuilderOutlined, ShoppingBasket} from "@material-ui/icons";
import {BasketProductType} from "../../BLL/types";
import {Basket} from "./Basket/Basket";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../BLL/store";

type HeaderComponentProps = {
}
export const HeaderComponent = memo((props: HeaderComponentProps) => {
    const basketProduct = useSelector<AppRootStateType, BasketProductType[]>(state => state.basketData)
    const [isVisible, setIsVisible] = useState(false)
    const onClickBasketHandler = () => setIsVisible(true)
    const totalPrice = useMemo(() => basketProduct.reduce((sum, current) =>
        sum + current.productPrice * current.productCountToBuy, 0), [basketProduct])

    return (
        <div className={s.HeaderContainer}>
            <div className={s.logoContainer}>
                <img src={'https://pngimg.com/uploads/apple_logo/apple_logo_PNG19674.png'}
                     alt={'logo'}
                     className={s.logo}/>
                <span>APPLE SHOP</span>
            </div>
            {/*<div className={s.navigateButton}>*/}
            {/*    <Button size={'small'} variant={'text'} > Каталог </Button>*/}
            {/*    <Button size={'small'} variant={'text'}> Адреса магазинов </Button>*/}
            {/*    <Button size={'small'} variant={'text'}> Оплата и доставка </Button>*/}
            {/*    <Button size={'small'} variant={'text'}> Сервисный центр </Button>*/}
            {/*</div>*/}
            <div className={s.workTimeContainer_ALL}>
                <div className={s.workTimeContainer}>
                    <QueryBuilderOutlined/>
                    <div className={s.workTime}>
                        <div>08:30 - 22:00 (пн - пт)</div>
                        <div>10:00 - 19:00 (сб - вс)</div>
                    </div>
                </div>
            </div>
            <div className={s.basketContainer}>
                <span><b>{totalPrice} BYN </b></span>
                <IconButton onClick={onClickBasketHandler}>
                    <Badge badgeContent={basketProduct.length} color='secondary'
                           overlap='rectangular'
                           invisible={basketProduct.length < 1} variant='standard'>
                        <ShoppingBasket color='primary'/>
                    </Badge>
                </IconButton>
                {isVisible && <Basket basketProduct={basketProduct}
                                      totalPrice={totalPrice}
                                      isVisible={isVisible}
                                      setIsVisible={setIsVisible}/>}
            </div>

        </div>
    )
})