import React from "react";
import s from './Navigation.module.css'

export const Navigation = () => {
    return (
        <div className={s.NavigationContainer}>
            <div className={s.navLink}> Mac </div>
            <div className={s.navLink}> iPad </div>
            <div className={s.navLink}> iPhone </div>
            <div className={s.navLink}> Watch </div>
            <div className={s.navLink}> TV </div>
            <div className={s.navLink}> AirPods </div>
            <div className={s.navLink}> Аксессуары </div>
        </div>
    )
}