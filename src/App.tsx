import React, {useCallback, useEffect, useReducer, useState} from 'react';
import './App.css';
import {HeaderComponent} from "./UI/Header/HeaderComponent";
import {Navigation} from "./UI/Navigation/Navigation";
import {ShopContent} from "./UI/ShopContent/ShopContent";
import {state} from "./BLL/state";
import {BasketProductType, ProductDataPageType} from "./BLL/types";
import {
    AddIntoBasketActionCreator,
    AddIntoBasketAllAction,
    basketReducer, ChangeCountItemToBuyActionCreator,
    RemoveAllFromBasketActionCreator, RemoveItemFromBasketActionCreator
} from "./BLL/reducers/basketReducer";
import {getDataAC, setFetchingAC} from "./BLL/reducers/productDataReducer";
import {catalogAPI} from "./API/api";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./BLL/store";
import {Preloader} from "./UI/CustomComponents/Preloader/Preloader";

function App() {
    const [filter, setFilter] = useState('all')
    const [inBasket, basketDispatch] = useReducer(basketReducer, [])

    const productData = useSelector<AppRootStateType, ProductDataPageType>(state => state.productData)
    const productDispatch = useDispatch()
    // console.log(JSON.stringify(productData.data))


    useEffect(() => {
        productDispatch(setFetchingAC(true))
        catalogAPI.getCatalog().then(response => {
            productDispatch(getDataAC(response))
            productDispatch(setFetchingAC(false))
        })
    },[productDispatch])

    //basket
    useEffect(() => {
        let local_storage = localStorage.getItem('inBasket')
        if (local_storage) {
            let storage_get = JSON.parse(local_storage)
            basketDispatch(AddIntoBasketAllAction(storage_get))
        }

    }, [productDispatch])
    useEffect(() => {
        localStorage.setItem('inBasket', JSON.stringify(inBasket))
    }, [inBasket])

    const setInBasket = useCallback((buyProduct: BasketProductType) => {
        let onBasket = !!inBasket.find( item => item.productID === buyProduct.productID)
        if (!onBasket) basketDispatch(AddIntoBasketActionCreator(buyProduct))
    },[inBasket])
    const clearBasket = useCallback(() => {
        localStorage.removeItem('inBasket')
        basketDispatch(RemoveAllFromBasketActionCreator())
    },[basketDispatch])
    const onChangeCountItemToBuy = useCallback((productID: string, newCount: number) => {
        basketDispatch(ChangeCountItemToBuyActionCreator(productID, newCount))
    },[basketDispatch])
    const onRemoveItemFromBasket = useCallback((productID: string) => {
        basketDispatch(RemoveItemFromBasketActionCreator(productID))
    },[basketDispatch])

    //filter productData
    let filteredProductData
    if (filter === 'all') filteredProductData = productData.data
    else  filteredProductData = productData.data.filter(elem => elem.productCategories.type === filter)


    //productData
    const setFilterProductData = useCallback((newFilter: string) => {
        setFilter(newFilter)
    }, [filter])


    return (
        <div className='App'>
            <HeaderComponent basketProduct={inBasket}
                             clearBasket={clearBasket}
                             onChangeCountItemToBuy={onChangeCountItemToBuy}
                             onRemoveItemFromBasket={onRemoveItemFromBasket}/>
            <Navigation categories={state.categoriesData}
                        setFilterProductData={setFilterProductData}/>
            <div className='content'>
                {productData.isFetching
                    ? <Preloader/>
                    : <ShopContent data={filteredProductData}
                             basketItems={inBasket}
                             setInBasket={setInBasket}/>}
            </div>
        </div>
    );
}

export default App;