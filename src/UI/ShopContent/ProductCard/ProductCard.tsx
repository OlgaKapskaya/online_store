import React, {memo} from "react";
import s from './ProductCard.module.css'
import {BasketProductType, ProductDataType} from "../../../BLL/types";
import {Button} from "@material-ui/core";
import {Done, ShoppingCartOutlined} from "@material-ui/icons";
import {addIntoBasketAC} from "../../../BLL/reducers/basketReducer";
import {useAppDispatch} from "../../../BLL/store";

type ProductCardPropsType = {
    product: ProductDataType
    onBasket: boolean
}
export const ProductCard = memo((props: ProductCardPropsType) => {

    const dispatch = useAppDispatch()
    const setInBasket = (buyProduct: BasketProductType) => {
        if (!props.onBasket) dispatch(addIntoBasketAC(buyProduct))
    }
    const onClickSetInBasketHandler = () => {
        let newProduct: BasketProductType = {
            productID: props.product.productID,
            productName: props.product.productName,
            productPhoto: props.product.productPhoto,
            productArticle: props.product.productArticle,
            productPrice: props.product.productPrice,
            productCountToBuy: 1
        }
        setInBasket(newProduct)
    }

    return (
        <div className={s.cardContainer}>
            <form className={s.formProductPhoto}>
                <img src={props.product.productPhoto} alt={'product'} className={s.productPhoto}/>
            </form>

            <div className={s.productName}>{props.product.productName}</div>
            <div className={s.info}>Артикул: {props.product.productArticle}</div>
            <div className={s.info}>Описание: {props.product.productDescription}</div>
            <div className={s.price}>{props.product.productPrice} BYN</div>

            <div className={s.buttonBuy}>
                {props.onBasket &&
                    <Button color={'secondary'}
                            variant={'text'}
                            onClick={onClickSetInBasketHandler}
                            startIcon={<Done/>}>
                        Товар в корзине
                    </Button>}
                {!props.onBasket &&
                    <Button color={'secondary'}
                            variant={'contained'}
                            onClick={onClickSetInBasketHandler}
                            startIcon={<ShoppingCartOutlined/>}>
                        В корзину
                    </Button>}

            </div>

        </div>
    )
})