import React from "react";
import s from './ShopContent.module.css'
import {ProductCard} from "./ProductCard/ProductCard";
import {BasketProductType, StateType} from "../../BLL/types";

type ShopContentPropsType = {
    data: StateType
    setInBasket: (buyProduct: BasketProductType) => void
}
export const ShopContent = (props: ShopContentPropsType) => {
    return (
        <div className={s.contentContainer}>
            {props.data.productData.map( elem => {
                return (
                    <ProductCard product={elem} key={elem.productID} setInBasket={props.setInBasket}/>
                )
            })}
        </div>
    )
}