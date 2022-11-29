import React, {memo} from "react";
import s from './ShopContent.module.css'
import {ProductCard} from "./ProductCard/ProductCard";
import {BasketProductType, ProductDataType} from "../../BLL/types";
import { PaginationComponent } from "../CustomComponents/Pagination/Pagination";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../BLL/store";

type ShopContentPropsType = {
    data: ProductDataType[]
}


export const ShopContent = memo((props: ShopContentPropsType) => {
    const basketItems = useSelector<AppRootStateType, BasketProductType[]>(state => state.basketData)

    return (
            <div className={s.contentContainer}>
                <div className={s.productCardsContainer}>
                {props.data.map(elem => {
                    const onBasket = !!basketItems.find(item => item.productID === elem.productID)
                    return (
                        <ProductCard product={elem}
                                     key={elem.productID}
                                     onBasket={onBasket}/>
                    )
                })}
                </div>
                <PaginationComponent pagesCount={2}/>
            </div>
    )
})