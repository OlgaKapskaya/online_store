import React from "react";
import s from './ShopContent.module.css'
import {ProductCard} from "./ProductCard/ProductCard";
import {StateType} from "../../BLL/types";

type ShopContentPropsType = {
    data: StateType
}
export const ShopContent = (props: ShopContentPropsType) => {
    return (
        <div className={s.contentContainer}>
            {props.data.productData.map( elem => {
                return (
                    <ProductCard product={elem}/>
                )
            })}
        </div>
    )
}