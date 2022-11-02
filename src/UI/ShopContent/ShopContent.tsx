import React from "react";
import s from './ShopContent.module.css'
import {ProductCard} from "./ProductCard/ProductCard";
import {BasketProductType, ProductDataType, StateType} from "../../BLL/types";

type ShopContentPropsType = {
    data: ProductDataType[]
    setInBasket: (buyProduct: BasketProductType) => void
}
export const ShopContent = (props: ShopContentPropsType) => {
    return (
        <div className={s.contentContainer}>
            {props.data.map( elem => {
                return (
                    <ProductCard product={elem} key={elem.productID} setInBasket={props.setInBasket}/>
                )
            })}
        </div>
    )
}