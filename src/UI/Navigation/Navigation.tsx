import React, {useState} from "react";
import s from './Navigation.module.css'
import {CategoriesType} from "../../BLL/types";
import {Button, IconButton} from "@material-ui/core";
import {SearchMenu} from "./SearchMenu/SearchMenu";
import {Menu} from "@material-ui/icons";
import {MenuSidebar} from "./MenuSidebar/MenuSidebar";

type NavigationPropsType = {
    categories: CategoriesType[]
    setFilterProductData: (filter: string) => void
}


export const Navigation = (props: NavigationPropsType) => {
    const [onOpen, setOnOpen] = useState<boolean>(false)
    return (
        <div className={s.NavigationContainer}>
            {/*mobile version*/}
            <div className={s.filterMenuContainerMobile}>
                <div className={s.filterMenuMobile}>
                    <div className={s.filterMenuMobile}>
                        <div className={s.navLinkMobile}>
                            <IconButton color='inherit' aria-label='menu' size='small'
                                        onClick={() => setOnOpen(true)}>
                                <Menu color='secondary'/>
                            </IconButton>
                        </div>
                    </div>
                </div>
                    {onOpen && <MenuSidebar onVisible={onOpen}
                                            setOnVisible={setOnOpen}
                                            categories={props.categories}
                                            setFilterProductData={props.setFilterProductData}/>}
            </div>
            {/*PC version*/}
            <div className={s.filterMenuContainer}>
                <div className={s.filterMenu}>
                    <div className={s.navLink}>
                        <Button
                            color='primary'
                            variant='contained'
                            onClick={() => props.setFilterProductData('all')}>
                            All</Button>
                    </div>
                    {props.categories.map((elem, index) => {
                        const onClickFilterButton = () => {
                            props.setFilterProductData(elem.type)
                        }
                        return (
                            <div className={s.navLink} key={index}>
                                <Button
                                    color='primary'
                                    variant='contained'
                                    onClick={onClickFilterButton}>
                                    {elem.type}</Button>
                            </div>)
                    })
                    }
                </div>
            </div>

            <div className={s.searchMenu}>
                <SearchMenu />
            </div>
        </div>
    )
}