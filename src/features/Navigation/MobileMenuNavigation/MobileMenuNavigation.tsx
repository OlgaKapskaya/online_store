import s from "../Navigation.module.css";
import {IconButton} from "@material-ui/core";
import {Menu} from "@material-ui/icons";
import {MenuSidebar} from "../MenuSidebar/MenuSidebar";
import React, {FC, useState} from "react";
import {NavigationPropsType} from "../Navigation";

export interface MobileMenuNavigationPropsType extends NavigationPropsType {}

export const MobileMenuNavigation:FC<MobileMenuNavigationPropsType> = ({categories, setFilterProductData}) => {
    const [onOpen, setOnOpen] = useState<boolean>(false)

    return (
        <div className={s.filterMenuContainerMobile}>
            <div className={s.filterMenuMobile}>
                    <div className={s.navLinkMobile}>
                        <IconButton color="inherit" aria-label="menu" size="small"
                                    onClick={() => setOnOpen(true)}>
                            <Menu color="secondary"/>
                        </IconButton>
                    </div>
            </div>
            {onOpen && <MenuSidebar onVisible={onOpen}
                                          setOnVisible={setOnOpen}
                                          categories={categories}
                                          setFilterProductData={setFilterProductData}/>}
        </div>
    )

}
