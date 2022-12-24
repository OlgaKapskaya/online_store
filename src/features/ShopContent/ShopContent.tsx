import {FC, memo} from "react";
import s from "./ShopContent.module.css"
import {ProductCardMiniature} from "./ProductCardMiniature/ProductCardMiniature";
import {ProductDataType} from "../../bll/types";
import {PaginationComponent} from "../../common/components/Pagination/PaginationComponent";
import {useAppSelector} from "../../common/hooks/react-redux-hooks";

type ShopContentPropsType = {
    filter: string
}


export const ShopContent: FC<ShopContentPropsType> = memo(({filter}) => {
    const productData = useAppSelector<ProductDataType[]>(state => state.productData.data)

    //filter productData
    let filteredProductData: ProductDataType[]
    if (filter === "all") filteredProductData = productData
    else filteredProductData = productData.filter(elem => elem.productCategories.type === filter)

    return (
        <div className={s.contentContainer}>
            <div className={s.productCardsContainer}>
                {
                    filteredProductData.map(elem => {
                        return (
                            <ProductCardMiniature product={elem}
                                                  key={elem.productID}
                            />
                        )
                    })
                }
            </div>
            <PaginationComponent pagesCount={1}/>
        </div>
    )
})