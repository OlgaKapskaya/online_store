import React from "react";
import s from './ProductCard.module.css'
import {BasketProductType, ProductDataType} from "../../../BLL/types";
import {IconButton} from "@material-ui/core";
import {ShoppingCartOutlined} from "@material-ui/icons";

type ProductCardPropsType = {
    product: ProductDataType
    setInBasket: (buyProduct: BasketProductType) => void
}
export const ProductCard = (props: ProductCardPropsType) => {
    const onClickSetInBasketHandler = () => {
        let newProduct: BasketProductType = {
            productID: props.product.productID,
            productName: props.product.productName,
            productPhoto: props.product.productPhoto,
            productArticle: props.product.productArticle,
            productPrice: props.product.productPrice,
            productCountToBuy: 1
        }
        props.setInBasket(newProduct)
    }
    return (
        <div className={s.cardContainer}>
            <form className={s.formProductPhoto}>
                <img src={props.product.productPhoto} alt={'product'} className={s.productPhoto}/>
            </form>

            <div className={s.productName}>{props.product.productName}</div>
            <div className={s.info}>Артикул: {props.product.productArticle}</div>
            <div className={s.info}>Описание: {props.product.productDescription}</div>
            <div className={s.price}>{props.product.productPrice} BYN</div>

            <div className={s.buttonBuy}>
                {/*<span className={s.aboutProductCount}> Доступно к заказу: {props.product.productCount} </span>*/}
                <IconButton color={'primary'} onClick={onClickSetInBasketHandler}>
                    <ShoppingCartOutlined/>
                </IconButton>
            </div>

        </div>
    )
}