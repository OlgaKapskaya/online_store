import {FC, memo} from "react";
import s from "./ProductCardMiniature.module.css"
import {ProductDataType} from "../../../bll/types";
import {NavLink} from "react-router-dom";
import {CURRENCY} from "../../../common/utils/constants/constants";
import {InBasketButton} from "../../../common/components/Buttons/InBasketButton/InBasketButton";
import {useNewBasketItem} from "../../../common/hooks/useNewBasketItem";

type ProductCardPropsType = {
    product: ProductDataType
}
export const ProductCardMiniature: FC<ProductCardPropsType> = memo(({product}) => {
    const [onBasket, setInBasket] = useNewBasketItem(product)

    const productLink = `:${product.productID}`
    return (
        <section className={s.cardContainer}>
            <div className={s.formProductPhoto}>
                <NavLink to={productLink}>
                    <img src={product.productPhoto} alt="product" className={s.productPhoto}/>
                </NavLink>
            </div>
            <NavLink to={productLink}>
                <span className={s.productName}>{product.productName}</span>
            </NavLink>
            <div className={s.info}>Артикул: {product.productArticle}</div>
            <div className={s.info}>Описание: {product.productDescription}</div>
            <div className={s.price}>{product.productPrice} {CURRENCY}</div>

            <div className={s.buttonBuy}>
                <InBasketButton onBasket={onBasket} onClick={setInBasket}/>
            </div>
        </section>
    )
})