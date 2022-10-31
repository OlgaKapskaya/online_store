import React from "react";
import s from './HeaderComponent.module.css'
import {Badge, Button, IconButton} from "@material-ui/core";
import {QueryBuilderOutlined, ShoppingBasket} from "@material-ui/icons";
type HeaderComponentProps = {
    basketItemsCount: number
}
export const HeaderComponent = (props: HeaderComponentProps) => {
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
            <div className={s.basketContainer}>
                <IconButton>
                    <Badge badgeContent={props.basketItemsCount} color="secondary" invisible={false} variant={'standard'}>
                        <ShoppingBasket color={'primary'}/>
                    </Badge>
                </IconButton>
            </div>

        </div>
    )
}