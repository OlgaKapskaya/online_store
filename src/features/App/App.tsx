import React, {useCallback, useState} from "react";
import "./App.css";
import {state} from "../../bll/state";
import {HeaderComponent} from "../Header/HeaderComponent";
import {Navigation} from "../Navigation/Navigation";
import {Routing} from "./Routing/Routing";


function App() {
    const [filter, setFilter] = useState<string>("all")
    const setFilterProductData = useCallback((newFilter: string) => {
        setFilter(newFilter)
    }, [filter])


    return (
        <div className="App">
            <HeaderComponent/>
            <Navigation categories={state.categoriesData}
                        setFilterProductData={setFilterProductData}/>
            <div className="content">
                <Routing filter={filter}/>
            </div>
        </div>
    );
}

export default App;

