import React from "react";
import s from './HeaderComponent.module.css'
import {HeaderLogo} from "./HeaderLogo/HeaderLogo";
import {HeaderWorkTime} from "./HeaderWorkTime/HeaderWorkTime";
import {HeaderBasket} from "./HeaderBasket/HeaderBasket";

export const HeaderComponent =() => {
    return (
        <div className={s.HeaderContainer}>
            <HeaderLogo/>
            <HeaderWorkTime/>
            <HeaderBasket/>
        </div>
    )
}
