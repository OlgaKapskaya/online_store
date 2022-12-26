import {FC} from "react";
import {SidebarMenuItem} from "../../../common/components/SidebarMenuItem/SidebarMenuItem";
import {NavLink} from "react-router-dom";
import s from "./MenuButtonsGroup.module.css"

export const MenuButtonsGroup: FC = () => {
    const menuButtons = [["Адреса магазинов"], ["Оплата и доставка"], ["Сервисный центр"], ["Связаться с нами"]]
    return (
        <>
            {
                menuButtons.map(elem => <NavLink to="/catalog" className={s.navLink}>
                    <SidebarMenuItem name={elem[0]} withBorder/>
                </NavLink>)
            }
        </>
    )
}