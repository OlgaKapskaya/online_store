import React from "react";
import s from './BasketItem.module.css'
import {BasketProductType} from "../../../BLL/types";
import {Button} from "@material-ui/core";


type BasketItemPropsType = {
    basketItem: BasketProductType

}
export const BasketItem = (props: BasketItemPropsType) => {

    return (
        <div className={s.cardContainer}>
            <form className={s.formProductPhoto}>
                <img src={props.basketItem.productPhoto} alt={'product'} className={s.productPhoto}/>
            </form>

            <div className={s.info}>
                <div className={s.productName}>{props.basketItem.productName}</div>
                <div className={s.article}>Артикул: {props.basketItem.productArticle}</div>
                <div className={s.price}>{props.basketItem.productPrice} BYN</div>
            </div>

            <div className={s.buttonGroup}>
                {/*<Button>Очистить корзину</Button>*/}
                {/*<Button>Оформить заказ</Button>*/}
            </div>

        </div>
    )
}