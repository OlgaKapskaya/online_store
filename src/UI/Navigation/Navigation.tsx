import React from "react";
import s from './Navigation.module.css'
import {CategoriesType} from "../../BLL/types";
import {Button} from "@material-ui/core";

type NavigationPropsType = {
    categories: CategoriesType[]
    setFilterProductData: (filter: string) => void
}
export const Navigation = (props: NavigationPropsType) => {
    return (
        <div className={s.NavigationContainer}>
            <div className={s.filterMenu}>
                <div className={s.navLink}>
                    <Button
                        color={'primary'}
                        variant={'contained'}
                        onClick={() => props.setFilterProductData('all')}>
                        All</Button>
                </div>
                {props.categories.map(elem => {
                    const onClickFilterButton = () => {
                        props.setFilterProductData(elem.type)
                    }
                    return (
                        <div className={s.navLink}>
                            <Button
                                color={'primary'}
                                variant={'contained'}
                                onClick={onClickFilterButton}>
                                {elem.type}</Button>
                        </div>)
                })
                }
            </div>

            <div className={s.searchMenu}>
                {/*<span>menu poisks</span>*/}
                {/*<span>menu poisks</span>*/}
                {/*<span>menu poisks</span>*/}
            </div>
        </div>
    )
}