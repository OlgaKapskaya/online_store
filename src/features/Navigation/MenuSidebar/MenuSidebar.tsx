import {FC, useState} from "react";
import {Button, Drawer, Menu, MenuItem} from "@material-ui/core";
import {CategoriesType} from "../../../bll/types";
import s from "./MenuSidebar.module.css";
import {Close} from "@material-ui/icons";

type MenuSidebarPropsType = {
    categories: CategoriesType[]
    onVisible: boolean
    setOnVisible: (onVisible: boolean) => void
    setFilterProductData: (filter: string) => void
}
export const MenuSidebar: FC<MenuSidebarPropsType> = ({categories, setFilterProductData, onVisible, setOnVisible}) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const onClickAllButtonHandler = () => {
        setFilterProductData('all')
        handleClose()
    }
    return (
        <Drawer anchor={'left'}
                open={onVisible}
                onClose={() => setOnVisible(false)}>
            <div className={s.sidebarContainer}>
                    <Close className={s.closeButton} onClick={() => setOnVisible(false)}/>
                <Button aria-controls="simple-menu"
                        aria-haspopup="true"
                        onClick={handleClick}
                        variant={'outlined'}>
                    Каталог
                </Button>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem color={'primary'}
                              onClick={onClickAllButtonHandler}>ALL</MenuItem>
                    {categories.map((elem, index) => {
                        const onClickFilterButton = () => {
                            setFilterProductData(elem.type)
                            handleClose()
                        }
                        return (
                            <div className={s.navLink} key={index}>
                                <MenuItem
                                    color={'primary'}
                                    onClick={onClickFilterButton}>
                                    {elem.type}</MenuItem>
                            </div>)
                    })
                    }
                </Menu>
                    <Button variant={'outlined'}> Адреса магазинов </Button>
                    <Button variant={'outlined'}> Оплата и доставка </Button>
                    <Button variant={'outlined'}> Сервисный центр </Button>
            </div>
        </Drawer>
    )
}