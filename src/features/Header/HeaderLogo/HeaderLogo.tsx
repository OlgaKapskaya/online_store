import s from "../HeaderComponent.module.css";
import {FC} from "react";

export const HeaderLogo: FC = () => {
    return (
        <div className={s.logoContainer}>
            <img src="https://pngimg.com/uploads/apple_logo/apple_logo_PNG19674.png"
                 alt="logo"
                 className={s.logo}/>
            <span>APPLE SHOP</span>
        </div>
    )
}