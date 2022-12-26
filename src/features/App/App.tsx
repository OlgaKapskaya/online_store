import React from "react";
import "./App.css";
import {HeaderComponent} from "../Header/HeaderComponent";
import {Navigation} from "../Navigation/Navigation";
import {Routing} from "./Routing/Routing";
import {SnackBar} from "../../common/components/SnackBar/SnackBar";
import {useAppSelector} from "../../common/hooks/react-redux-hooks";


function App() {
    const error = useAppSelector(state => state.app.error)

    return (
        <div className="App">
            <HeaderComponent/>
            <Navigation />
            <div className="content">
                <Routing/>
            </div>
            <SnackBar type="error" message={error ? error : ""} show={!!error}/>
        </div>
    );
}

export default App;

