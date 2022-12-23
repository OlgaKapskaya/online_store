import {FC, memo} from "react";
import s from "../Basket.module.css";
import {CURRENCY} from "../../../../common/utils/constants/constants";

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
                        <div>общей стоимостью: <b>{totalPrice} {CURRENCY}</b></div>
                    </div>
                    : <span>Ваша корзина пуста</span>
            }
        </div>
    )
})