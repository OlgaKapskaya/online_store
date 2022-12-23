import {FC, ReactNode} from "react";
import {Drawer} from "@material-ui/core";
import {CategoriesType} from "../../../bll/types";
import s from "./MenuSidebar.module.css";
import {Close} from "@material-ui/icons";
import {AccordionUC} from "../../../common/components/Accordion/AccordionUC";
import {SidebarMenuItem} from "../../../common/components/SidebarMenuItem/SidebarMenuItem";

type MenuSidebarPropsType = {
    categories: CategoriesType[]
    onVisible: boolean
    setOnVisible: (onVisible: boolean) => void
    setFilterProductData: (filter: string) => void
}
export const MenuSidebar: FC<MenuSidebarPropsType> = ({categories, setFilterProductData, onVisible, setOnVisible}) => {

    const handleClose = () => {
        setOnVisible(false);
    };
    const onClickAllButtonHandler = () => {
        setFilterProductData("all")
        handleClose()
    }
    const menuItems = (): ReactNode => {
        return (
            <>
                <SidebarMenuItem name="ALL" onClick={onClickAllButtonHandler} withBorder/>
                {categories.map((elem, index) => {
                    const onClickFilterButton = () => {
                        setFilterProductData(elem.type)
                        handleClose()
                    }
                    return <div className={s.navLink} key={index}>
                        <SidebarMenuItem name={elem.type} onClick={onClickFilterButton} withBorder/>
                    </div>
                })}
            </>
        )
    }

    return (
        <Drawer anchor="left"
                open={onVisible}
                onClose={() => setOnVisible(false)}
        >
            <div className={s.sidebarContainer}>
                <Close className={s.closeButton} onClick={() => setOnVisible(false)}/>

                <AccordionUC name="categories" label="Каталог" details={menuItems()}/>
                <SidebarMenuItem name="Адреса магазинов" withBorder/>
                <SidebarMenuItem name="Оплата и доставка" withBorder/>
                <SidebarMenuItem name="Сервисный центр" withBorder/>
            </div>
        </Drawer>
    )
}