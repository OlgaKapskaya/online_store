import React, {useCallback, useState} from "react";
import "./App.css";
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
            <Navigation />
            <div className="content">
                <Routing/>
            </div>
        </div>
    );
}

export default App;

