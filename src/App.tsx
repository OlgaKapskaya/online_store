import React, {useEffect, useReducer, useState} from 'react';
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
import {getDataAC, sortedDataAC} from "./BLL/reducers/productDataReducer";
import {catalogAPI} from "./API/api";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./BLL/store";

function App() {
    const [filter, setFilter] = useState('all')
    const [inBasket, basketDispatch] = useReducer(basketReducer, [])

    const productData = useSelector<AppRootStateType, ProductDataPageType>(state => state.productData)
    const productDispatch = useDispatch()


    useEffect(() => {
        catalogAPI.getCatalog().then(response => {
            productDispatch(getDataAC(response))
        })
    },[productDispatch])

    //basket
    useEffect(() => {
        let local_storage = localStorage.getItem('inBasket')
        if (local_storage) {
            let storage_get = JSON.parse(local_storage)
            basketDispatch(AddIntoBasketAllAction(storage_get))
        }

    }, [])
    useEffect(() => {
        localStorage.setItem('inBasket', JSON.stringify(inBasket))
    }, [inBasket])
    const setInBasket = (buyProduct: BasketProductType) => {
        let onBasket = !!inBasket.find( item => item.productID === buyProduct.productID)
        if (!onBasket) basketDispatch(AddIntoBasketActionCreator(buyProduct))

    }
    const clearBasket = () => {
        localStorage.removeItem('inBasket')
        basketDispatch(RemoveAllFromBasketActionCreator())
    }
    const onChangeCountItemToBuy = (productID: string, newCount: number) => {
        basketDispatch(ChangeCountItemToBuyActionCreator(productID, newCount))
    }
    const onRemoveItemFromBasket = (productID: string) => {
        basketDispatch(RemoveItemFromBasketActionCreator(productID))
    }

    //filter productData
    let filteredProductData = productData.data
    if (filter === 'all') filteredProductData = productData.data
    else  filteredProductData = productData.data.filter(elem => elem.productCategories.type === filter)


    //productData
    const setFilterProductData = (filter: string) => {
        setFilter(filter)
    }
    const onSortedProductData = (sortInfo: string) => {
        productDispatch(sortedDataAC(sortInfo))
    }


    return (
        <div className="App">
            <HeaderComponent basketProduct={inBasket}
                             clearBasket={clearBasket}
                             onChangeCountItemToBuy={onChangeCountItemToBuy}
                             onRemoveItemFromBasket={onRemoveItemFromBasket}/>
            <Navigation categories={state.categoriesData}
                        setFilterProductData={setFilterProductData}
                        onSortedProductData={onSortedProductData}/>
            <div className={'content'}>
                <ShopContent data={filteredProductData}
                             basketItems={inBasket}
                             setInBasket={setInBasket}/>
            </div>
        </div>
    );
}

export default App;
