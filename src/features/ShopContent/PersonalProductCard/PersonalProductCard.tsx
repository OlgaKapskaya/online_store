import s from './PersonalProductCard.module.css'
import React, {FC, useEffect, useState} from "react";
import {NavLink, useParams} from "react-router-dom";
import {BasketProductType, ProductDataType} from "../../../bll/types";
import {Done, ImportExport, KeyboardBackspace, ShoppingCartOutlined} from "@material-ui/icons";
import {catalogAPI} from "../../../dal/api";
import {Button} from "@material-ui/core";
import {AppRootStateType, useAppDispatch} from "../../../bll/store";
import {setFetchingAC} from "../../../bll/reducers/productDataReducer";
import {useSelector} from "react-redux";
import {Preloader} from "../../../common/components/Preloader/Preloader";
import {addIntoBasketAC} from "../../../bll/reducers/basketReducer";


const createProduct = (product: ProductDataType | {}):ProductDataType => {
    const {
        productID = "",
        productName = "",
        productPhoto = "",
        productArticle = "",
        productDescription = "",
        productPrice = 0,
        productCount = 0,
        productCategories = {
            type:""
        },
    } = product as any
    return {
        productID,
        productName,
        productPhoto,
        productArticle,
        productDescription,
        productPrice,
        productCount,
        productCategories,
    }
}
export const PersonalProductCard: FC = () => {
    const params = useParams()
    const basketItems = useSelector<AppRootStateType, BasketProductType[]>(state => state.basketData)
    const isFetching = useSelector<AppRootStateType, boolean>(state => state.productData.isFetching)
    const [product, setProduct] = useState<ProductDataType>(createProduct({}))
    const dispatch = useAppDispatch()
    const onBasket = !!basketItems.find(item => item.productID === product.productID)

    useEffect(() => {
        dispatch(setFetchingAC(true))
        catalogAPI.getProduct(params.productID?.slice(1))
            .then(response => {
                setProduct(response)
                dispatch(setFetchingAC(false))
            })
    }, [params.productID])

    const setInBasket = (buyProduct: BasketProductType) => {
        if (!onBasket) dispatch(addIntoBasketAC(buyProduct))
    }
    const onClickSetInBasketHandler = () => {
        // TODO
        const newProduct = {
            productID: product.productID,
            productName: product.productName,
            productPhoto: product.productPhoto,
            productArticle: product.productArticle,
            productPrice: product.productPrice,
            productCountToBuy: 1
        }

        setInBasket(newProduct)
    }
    return (
        <div className={s.contentContainer}>
            <div className={s.backLink}>
                <NavLink to='/catalog'> <KeyboardBackspace/> В каталог </NavLink>
            </div>
            {isFetching
                ? <Preloader/>
                : <section className={s.productCardContainer}>
                    <div className={s.titleAndPhoto}>
                        <h2> {product.productName} </h2>
                        <span style={{fontSize: '12px', opacity: '0.5'}}>{product.productArticle}</span>
                        <img src={product.productPhoto} alt='productPhoto' className={s.productPhoto}/>
                    </div>
                    <div className={s.info}>
                        <div className={s.price}>
                            <span>Цена</span>
                            <span style={{fontWeight: 'bold', fontSize: '30px'}}> {product.productPrice} BYN </span>
                        </div>
                        <div className={s.buttonContainer}>
                            {onBasket ?
                                <Button color='secondary'
                                        variant='text'
                                        onClick={onClickSetInBasketHandler}
                                        startIcon={<Done/>}>
                                    Товар в корзине
                                </Button>
                                : <Button color='secondary'
                                          variant='contained'
                                          onClick={onClickSetInBasketHandler}
                                          startIcon={<ShoppingCartOutlined/>}>
                                    В корзину
                                </Button>}

                        </div>
                        <div className={s.description}>
                            <span className={s.infoTitle}> Описание </span>
                            <span style={{textAlign: 'start'}}>{product.productDescription} </span>
                        </div>
                        <div className={s.otherInfo}>
                            <span className={s.infoTitle}> Обмен с выгодой </span>
                            <span style={{textAlign: 'start'}}>
                                <ImportExport style={{fontSize: '35px'}}/>
                                Trade-in: сдайте свой старый девайс и получите дополнительную выгоду при покупке нового
                            </span>

                        </div>

                    </div>


                </section>
            }


        </div>
    )
}