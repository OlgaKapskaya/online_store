import {useSelector} from "react-redux";
import {AppRootStateType} from "../../../bll/store";
import {BasketProductType} from "../../../bll/types";
import React, {useMemo, useState} from "react";
import s from "../HeaderComponent.module.css";
import {Basket} from "./Basket/Basket";
import {ShopButton} from "../../../common/components/Buttons/ShopButton/ShopButton";
import {CURRENCY} from "../../../common/utils/constants/constants";

export const HeaderBasket = () => {
    const basketProduct = useSelector<AppRootStateType, BasketProductType[]>(state => state.basketData)
    const [isVisible, setIsVisible] = useState(false)
    const onClickBasketHandler = () => setIsVisible(true)

    const totalPrice = useMemo(() => basketProduct.reduce((sum, current) =>
        sum + current.productPrice * current.productCountToBuy, 0), [basketProduct])

    return (
        <div className={s.basketContainer}>
            <span><b>{totalPrice} {CURRENCY} </b></span>
            <ShopButton content={basketProduct.length} onClick={onClickBasketHandler}/>
            {
                isVisible && <Basket totalPrice={totalPrice}
                                     isVisible={isVisible}
                                     setIsVisible={setIsVisible}/>
            }
        </div>
    )
}