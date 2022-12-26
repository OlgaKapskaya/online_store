import React from "react";
import "./App.css";
import {HeaderComponent} from "../Header/HeaderComponent";
import {Navigation} from "../Navigation/Navigation";
import {Routing} from "./Routing/Routing";


function App() {
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

