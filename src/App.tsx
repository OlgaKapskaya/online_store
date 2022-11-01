import React, {useEffect, useReducer} from 'react';
import './App.css';
import {HeaderComponent} from "./UI/Header/HeaderComponent";
import {Navigation} from "./UI/Navigation/Navigation";
import {ShopContent} from "./UI/ShopContent/ShopContent";
import {state} from "./BLL/state";
import {BasketProductType} from "./BLL/types";
import {
    AddIntoBasketActionCreator,
    AddIntoBasketAllAction,
    basketReducer, ChangeCountItemToBuyActionCreator,
    RemoveAllFromBasketActionCreator, RemoveItemFromBasketActionCreator
} from "./BLL/reducers/basketReducer";

function App() {
    const [inBasket, basketDispatch] = useReducer(basketReducer, [])

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


    const setInBasketHandler = (buyProduct: BasketProductType) => {
        basketDispatch(AddIntoBasketActionCreator(buyProduct))
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

    return (
        <div className="App">
            <HeaderComponent basketProduct={inBasket}
                             clearBasket={clearBasket}
                             onChangeCountItemToBuy={onChangeCountItemToBuy}
                             onRemoveItemFromBasket={onRemoveItemFromBasket}/>
            <Navigation/>
            <div className={'content'}>
                <ShopContent data={state} setInBasket={setInBasketHandler}/>
            </div>
        </div>
    );
}

export default App;
