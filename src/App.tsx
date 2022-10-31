import React from 'react';
import './App.css';
import {HeaderComponent} from "./UI/Header/HeaderComponent";
import {Navigation} from "./UI/Navigation/Navigation";
import {ShopContent} from "./UI/ShopContent/ShopContent";
import {state} from "./BLL/state";

function App() {
    return (
        <div className="App">

            <HeaderComponent/>
            <Navigation/>
            <div className={'content'}>
                <ShopContent data={state}/>
            </div>
        </div>
    );
}

export default App;
