import {FC, ReactNode} from "react";
import {Drawer} from "@material-ui/core";
import {CategoriesType} from "../../../bll/types";
import s from "./MenuSidebar.module.css";
import {Close} from "@material-ui/icons";
import {AccordionUC} from "../../../common/components/Accordion/AccordionUC";
import {SidebarMenuItem} from "../../../common/components/SidebarMenuItem/SidebarMenuItem";
import {useAppDispatch, useAppSelector} from "../../../common/hooks/react-redux-hooks";
import {changeFilterAC} from "../../../bll/reducers/productDataReducer";

type MenuSidebarPropsType = {
    onVisible: boolean
    setOnVisible: (onVisible: boolean) => void
}
export const MenuSidebar: FC<MenuSidebarPropsType> = ({onVisible, setOnVisible}) => {
    const categories = useAppSelector<CategoriesType[]>(state => state.productData.categories)
    const dispatch = useAppDispatch()
    const handleClose = () => {
        setOnVisible(false);
    };
    const onClickAllButtonHandler = () => {
        dispatch(changeFilterAC("all"))
        handleClose()
    }
    const menuItems = (): ReactNode => {
        return (
            <>
                <SidebarMenuItem name="ALL" onClick={onClickAllButtonHandler} withBorder/>
                {categories.map((elem, index) => {
                    const onClickFilterButton = () => {
                        dispatch(changeFilterAC(elem.category))
                        // setFilterProductData(elem.category)
                        handleClose()
                    }
                    return <div className={s.navLink} key={index}>
                        <SidebarMenuItem name={elem.category} onClick={onClickFilterButton} withBorder/>
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