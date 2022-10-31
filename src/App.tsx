import React, {useEffect, useState} from 'react';
import './App.css';
import {HeaderComponent} from "./UI/Header/HeaderComponent";
import {Navigation} from "./UI/Navigation/Navigation";
import {ShopContent} from "./UI/ShopContent/ShopContent";
import {state} from "./BLL/state";
import {BasketProductType} from "./BLL/types";

function App() {
    const [inBasket, setInBasket] = useState<BasketProductType[]>([])

    useEffect(() => {
        let local_storage = localStorage.getItem('inBasket')
        if (local_storage) {
            let storage_get = JSON.parse(local_storage)
            setInBasket(storage_get)
        }

    }, [])

    useEffect(() => {
        localStorage.setItem('inBasket', JSON.stringify(inBasket))
    }, [inBasket])


    const setInBasketHandler = (buyProduct: BasketProductType) => {
        setInBasket([...inBasket, buyProduct])
    }

    return (
        <div className="App">
            <HeaderComponent basketItemsCount={inBasket.length}/>
            <Navigation/>
            <div className={'content'}>
                <ShopContent data={state} setInBasket={setInBasketHandler}/>
            </div>
        </div>
    );
}

export default App;
