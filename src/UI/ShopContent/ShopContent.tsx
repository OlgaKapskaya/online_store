import React from "react";
import s from './ShopContent.module.css'
import {ProductCard} from "./ProductCard/ProductCard";
import {BasketProductType, ProductDataType} from "../../BLL/types";

type ShopContentPropsType = {
    data: ProductDataType[]
    basketItems: BasketProductType[]
    setInBasket: (buyProduct: BasketProductType) => void
}
export const ShopContent = (props: ShopContentPropsType) => {
    return (
        <div className={s.contentContainer}>
            {props.data.map(elem => {
                const onBasket = !!props.basketItems.find( item => item.productID === elem.productID)
                return (
                    <ProductCard product={elem}
                                 key={elem.productID}
                                 setInBasket={props.setInBasket}
                                 onBasket={onBasket}/>
                )
            })}
        </div>
    )
}