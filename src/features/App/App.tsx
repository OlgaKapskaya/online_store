import React from "react";
import "./App.css";
import {state} from "../../bll/state";
import {useAppFetchLogic} from "./hooks/useAppLogic";
import {HeaderComponent} from "../Header/HeaderComponent";
import {Navigation} from "../Navigation/Navigation";
import {Routing} from "./Routing/Routing";


function App() {
    const {setFilterProductData} = useAppFetchLogic()
    return (
        <div className="App">
            <HeaderComponent/>
            <Navigation categories={state.categoriesData}
                        setFilterProductData={setFilterProductData}/>
            <div className="content">
                <Routing/>
            </div>
        </div>
    );
}

export default App;

