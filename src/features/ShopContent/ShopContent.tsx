import React, {memo} from "react";
import s from './ShopContent.module.css'
import {ProductCard} from "./ProductCard/ProductCard";
import {BasketProductType, ProductDataType} from "../../bll/types";
import { PaginationComponent } from "../../common/components/Pagination/Pagination";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../bll/store";

type ShopContentPropsType = {
    filter: string
}


export const ShopContent = memo((props: ShopContentPropsType) => {
    const basketItems = useSelector<AppRootStateType, BasketProductType[]>(state => state.basketData)
    const productData = useSelector<AppRootStateType, ProductDataType[]>(state => state.productData.data)

    //filter productData
    let filteredProductData: ProductDataType[]
    if (props.filter === 'all') filteredProductData = productData
    else filteredProductData = productData.filter(elem => elem.productCategories.type === props.filter)

    return (
            <div className={s.contentContainer}>
                <div className={s.productCardsContainer}>
                {filteredProductData.map(elem => {
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