import {FC, memo} from "react";
import s from "./ShopContent.module.css"
import {ProductCardMiniature} from "./ProductCardMiniature/ProductCardMiniature";
import {ProductDataType} from "../../bll/types";
import {PaginationComponent} from "../../common/components/Pagination/PaginationComponent";
import {useAppSelector} from "../../common/hooks/react-redux-hooks";




export const ShopContent: FC = memo(() => {
    const productData = useAppSelector<ProductDataType[]>(state => state.productData.data)

    return (
        <div className={s.contentContainer}>
            <div className={s.productCardsContainer}>
                {
                    productData.map(elem => {
                        return (
                            <ProductCardMiniature product={elem}
                                                  key={elem.productID}/>
                        )})
                }
            </div>
            <PaginationComponent/>
        </div>
    )
})