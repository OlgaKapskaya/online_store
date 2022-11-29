import React, {useCallback, useEffect, useState} from 'react';
import './App.css';
import {HeaderComponent} from "./UI/Header/HeaderComponent";
import {Navigation} from "./UI/Navigation/Navigation";
import {ShopContent} from "./UI/ShopContent/ShopContent";
import {state} from "./BLL/state";
import {BasketProductType, ProductDataPageType} from "./BLL/types";
import {
    getBasketIntoLocalStorageTC,
} from "./BLL/reducers/basketReducer";
import {getCatalogTC} from "./BLL/reducers/productDataReducer";
import {useSelector} from "react-redux";
import {AppRootStateType, useAppDispatch} from "./BLL/store";
import {Preloader} from "./UI/CustomComponents/Preloader/Preloader";
import {Navigate, Route, Routes} from "react-router-dom";

function App() {
    const [filter, setFilter] = useState('all')
    const basketData = useSelector<AppRootStateType, BasketProductType[]>(state => state.basketData)
    const productData = useSelector<AppRootStateType, ProductDataPageType>(state => state.productData)
    const {currentPage, sortData, sortType, searchTitle} = productData

    const dispatch = useAppDispatch()
    // console.log(JSON.stringify(state.productData))
    // console.log(JSON.stringify(info))


    useEffect(() => {
        dispatch(getCatalogTC(currentPage, sortData, sortType, searchTitle))
    }, [currentPage, dispatch, sortType, sortData, searchTitle])

    //basket
    useEffect(() => {
        dispatch(getBasketIntoLocalStorageTC())
    }, [dispatch])

    useEffect(() => {
        localStorage.setItem('inBasket', JSON.stringify(basketData))
    }, [basketData])

    //filter productData
    let filteredProductData
    if (filter === 'all') filteredProductData = productData.data
    else filteredProductData = productData.data.filter(elem => elem.productCategories.type === filter)


    //productData
    const setFilterProductData = useCallback((newFilter: string) => {
        setFilter(newFilter)
    }, [])

    return (
        <div className='App'>
            <HeaderComponent/>
            <Navigation categories={state.categoriesData}
                        setFilterProductData={setFilterProductData}/>
            <div className='content'>
                <Routes>
                    <Route path='/' element={<Navigate to='/catalog'/>}/>
                    <Route path='catalog' element={
                        productData.isFetching
                            ? <Preloader/>
                            : <ShopContent data={filteredProductData}/>
                    }/>

                </Routes>

            </div>
        </div>
    );
}

export default App;

