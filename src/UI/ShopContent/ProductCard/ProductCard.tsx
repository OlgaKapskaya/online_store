import React from "react";
import s from './ProductCard.module.css'
import {ProductDataType} from "../../../BLL/types";
import {IconButton} from "@material-ui/core";
import {ShoppingCartOutlined} from "@material-ui/icons";

type ProductCardPropsType = {
    product: ProductDataType
}
export const ProductCard = (props: ProductCardPropsType) => {
    return (
        <div className={s.cardContainer}>
            <form className={s.formProductPhoto}>
                <img src={props.product.productPhoto} alt={'product'} className={s.productPhoto}/>
            </form>

            <div className={s.productName}>{props.product.productName}</div>
            <div className={s.info}>Артикул: {props.product.productArticle}</div>
            <div className={s.info}>{props.product.productDescription}</div>
            <div className={s.price}>{props.product.productPrice} BYN</div>

            <div className={s.buttonBuy}>
                {/*<span className={s.aboutProductCount}> Доступно к заказу: {props.product.productCount} </span>*/}
                <IconButton color={'primary'}><ShoppingCartOutlined/></IconButton>
            </div>

        </div>
    )
}