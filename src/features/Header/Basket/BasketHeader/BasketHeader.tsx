import React, {FC, memo} from "react";
import s from "../Basket.module.css";

type BasketHeaderPropsType = {
    basketProductLength: number
    totalPrice: number
}
export const BasketHeader: FC<BasketHeaderPropsType> = memo(({basketProductLength, totalPrice}) => {
    return (
        <div className={s.totalPrice}>
            {
                basketProductLength
                    ? <div>
                        <div>Всего <b>{basketProductLength}</b> наименований</div>
                        <div>общей стоимостью: <b>{totalPrice} BYN</b></div>
                    </div>
                    : <span>Ваша корзина пуста</span>
            }
        </div>
    )
})