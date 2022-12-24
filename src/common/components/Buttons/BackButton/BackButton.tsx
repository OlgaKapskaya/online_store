import {FC} from "react";
import s from "./BackButton.module.css";
import {NavLink} from "react-router-dom";
import {KeyboardBackspace} from "@material-ui/icons";

type BackButtonPropsType = {
    name: string
    linkTo: string
}
export const BackButton:FC<BackButtonPropsType> = ({name, linkTo}) => {
    return (
        <div className={s.backLink}>
            <NavLink to={linkTo}> <KeyboardBackspace/> {name} </NavLink>
        </div>
    )
}