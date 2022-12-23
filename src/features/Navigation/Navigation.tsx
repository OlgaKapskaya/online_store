import React, {memo, useState} from "react";
import s from './Navigation.module.css'
import {CategoriesType} from "../../bll/types";
import {SearchMenu} from "./SearchMenu/SearchMenu";
import {MobileMenuNavigation} from "./MobileMenuNavigationPropsType/MobileMenuNavigationPropsType";
import {PcMenuNavigation} from "./PcMenuNavigation/PcMenuNavigation";

export type NavigationPropsType = {
    categories: CategoriesType[]
    setFilterProductData: (filter: string) => void
}


export const Navigation = memo((props: NavigationPropsType) => {

    const setFilterProductData = (value:string) => {
        props.setFilterProductData(value)
    }
    return (
        <div className={s.NavigationContainer}>
            <MobileMenuNavigation setFilterProductData={setFilterProductData} categories={props.categories}/>
            <PcMenuNavigation categories={props.categories} setFilterProductData={setFilterProductData}/>
            <div className={s.searchMenu}>
                <SearchMenu />
            </div>
        </div>
    )
})