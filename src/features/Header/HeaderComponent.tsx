import {FC} from "react";
import s from "./HeaderComponent.module.css"
import {HeaderLogo} from "./HeaderLogo/HeaderLogo";
import {HeaderBasket} from "./HeaderBasket/HeaderBasket";
import {LoginRegistration} from "./LoginRegistration/LoginRegistration";

export const HeaderComponent: FC = () => {

    return (
        <div>
            <section className={s.HeaderContainer}>
                <HeaderLogo/>
                <section className={s.loginAndBasket}>
                    <HeaderBasket/>
                    <LoginRegistration/>
                </section>

            </section>
        </div>
    )
}
