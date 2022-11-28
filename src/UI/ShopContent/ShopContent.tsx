import React, {memo} from "react";
import s from './ShopContent.module.css'
import {ProductCard} from "./ProductCard/ProductCard";
import {BasketProductType, ProductDataType} from "../../BLL/types";
import { PaginationComponent } from "../CustomComponents/Pagination/Pagination";

type ShopContentPropsType = {
    data: ProductDataType[]
    basketItems: BasketProductType[]
    setInBasket: (buyProduct: BasketProductType) => void
}


export const ShopContent = memo((props: ShopContentPropsType) => {

    return (
            <div className={s.contentContainer}>
                <div className={s.productCardsContainer}>
                {props.data.map(elem => {
                    const onBasket = !!props.basketItems.find(item => item.productID === elem.productID)
                    return (
                        <ProductCard product={elem}
                                     key={elem.productID}
                                     setInBasket={props.setInBasket}
                                     onBasket={onBasket}/>
                    )
                })}
                </div>
                <PaginationComponent pagesCount={2}/>
            </div>
    )
})