import {FC} from "react";
import {MenuButtonsGroup} from "../MenuButtonsGroup/MenuButtonsGroup";
import s from "./HeaderTopMenu.module.css"
import {ListItem} from "@material-ui/core";

export const HeaderTopMenu:FC = () => {
    return (
        <nav className={s.topHeaderMenu}>
            <MenuButtonsGroup/>
            <ListItem style={{borderBottom:"1px solid rgba(0, 0, 0, .125)"}}>
                + 375 (29) XXX XX XX
            </ListItem>
        </nav>
    )
}