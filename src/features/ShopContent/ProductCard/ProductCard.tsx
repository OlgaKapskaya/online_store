import {FC, memo} from "react";
import s from "./ProductCard.module.css"
import {BasketProductType, ProductDataType} from "../../../bll/types";
import {Done, ShoppingCartOutlined} from "@material-ui/icons";
import {addIntoBasketAC} from "../../../bll/reducers/basketReducer";
import {useAppDispatch} from "../../../bll/store";
import {NavLink} from "react-router-dom";
import {ButtonUC} from "../../../common/components/Button/ButtonUC";
import {CURRENCY} from "../../../common/utils/constants/constants";

type ProductCardPropsType = {
    product: ProductDataType
    onBasket: boolean
}
export const ProductCard: FC<ProductCardPropsType> = memo(({
                                                               product, onBasket
                                                           }) => {

    const dispatch = useAppDispatch()
    const setInBasket = (buyProduct: BasketProductType) => {
        if (!onBasket) dispatch(addIntoBasketAC(buyProduct))
    }
    const onClickSetInBasketHandler = () => {
        const newProduct: BasketProductType = {
            ...product,
            productCountToBuy: 1
        }
        setInBasket(newProduct)
    }

    return (
        <div className={s.cardContainer}>
            <div className={s.formProductPhoto}>
                <NavLink to={`:${product.productID}`}>
                    <img src={product.productPhoto} alt="product" className={s.productPhoto}/>
                </NavLink>
            </div>
            <NavLink to={`:${product.productID}`}>
                <span className={s.productName}>{product.productName}</span>
            </NavLink>
            <div className={s.info}>Артикул: {product.productArticle}</div>
            <div className={s.info}>Описание: {product.productDescription}</div>
            <div className={s.price}>{product.productPrice} {CURRENCY}</div>

            <div className={s.buttonBuy}>
                {onBasket
                    ? <ButtonUC name="Товар в корзине"
                                onClick={onClickSetInBasketHandler}
                                icon={<Done/>}
                                color="secondary"
                                variant="text"
                    />
                    : <ButtonUC name="В корзину"
                                onClick={onClickSetInBasketHandler}
                                icon={<ShoppingCartOutlined/>}
                                color="secondary"
                    />
                }
            </div>

        </div>
    )
})