import React from "react";
import s from './HeaderComponent.module.css'
import {IconButton} from "@material-ui/core";
import {QueryBuilderOutlined, ShoppingBasket} from "@material-ui/icons";

export const HeaderComponent = () => {
    return (
        <div className={s.HeaderContainer}>
            <div className={s.logoContainer}>
                <img src={'https://pngimg.com/uploads/apple_logo/apple_logo_PNG19674.png'}
                       alt={'logo'}
                       className={s.logo}/>
                <span>APPLE SHOP</span>
            </div>

            <div className={s.workTimeContainer}>
                <QueryBuilderOutlined/>
                <div className={s.workTime}>
                    <div>08:30 - 22:00 (пн - пт)</div>
                    <div>10:00 - 19:00 (сб - вс)</div>
                </div>

            </div>
            <IconButton>
                <ShoppingBasket/>
            </IconButton>

        </div>
    )
}