import React, {ChangeEvent} from "react";
import s from './BasketItem.module.css'
import {BasketProductType} from "../../../BLL/types";
import {IconButton, TextField, Tooltip} from "@material-ui/core";
import {DeleteOutlineOutlined} from "@material-ui/icons";


type BasketItemPropsType = {
    basketItem: BasketProductType
    onChangeCountItemToBuy: (productID: string, newCount: number) => void
    onRemoveItemFromBasket: (productID: string) => void
}
export const BasketItem = (props: BasketItemPropsType) => {
    const onChangeCountOfItem = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        if (+event.currentTarget.value > 0 ) {
            props.onChangeCountItemToBuy(props.basketItem.productID, +event.currentTarget.value)
        }
    }
    const onRemoveItemFromBasketHandler = () => {
        props.onRemoveItemFromBasket(props.basketItem.productID)
    }

    return (
        <div className={s.cardContainer}>

            <div className={s.productFullInfo}>
                <form className={s.formProductPhoto}>
                    <img src={props.basketItem.productPhoto} alt={'product'} className={s.productPhoto}/>
                </form>

                <div className={s.info}>
                    <div className={s.productName}>{props.basketItem.productName}</div>
                    <div className={s.article}>Артикул: {props.basketItem.productArticle}</div>
                    <div className={s.price}>{props.basketItem.productPrice} BYN</div>
                    <div className={s.count}>
                        <span>Укажите количество:</span>
                        <TextField type={'number'}
                                   color={'secondary'}
                                   style={{width: "100px"}}
                                   size={'small'}
                                   variant={'outlined'}
                                   value={props.basketItem.productCountToBuy}
                                   onChange={onChangeCountOfItem}/>
                    </div>
                </div>
                <div className={s.deleteButton}>
                    <Tooltip title={'Удалить из корзины'} arrow>
                        <IconButton onClick={onRemoveItemFromBasketHandler}>
                            <DeleteOutlineOutlined/>
                        </IconButton>
                    </Tooltip>
                </div>
            </div>
        </div>
    )
}