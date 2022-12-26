import {FC} from "react";
import s from "./HeaderComponent.module.css"
import {HeaderLogo} from "./HeaderLogo/HeaderLogo";
import {HeaderBasket} from "./HeaderBasket/HeaderBasket";
import {LoginRegistration} from "./LoginRegistration/LoginRegistration";
import {useAppSelector} from "../../common/hooks/react-redux-hooks";
import Divider from "@material-ui/core/Divider/Divider";

export const HeaderComponent: FC = () => {
    const userName = useAppSelector(state => state.users.email)
    return (
        <div>
            <section className={s.HeaderContainer}>
                <HeaderLogo/>
                <section className={s.loginAndBasket}>
                    <HeaderBasket/>
                    <Divider orientation="vertical" flexItem />
                    {
                        userName
                            ? <span className={s.userName}> {userName} </span>
                            : <LoginRegistration/>
                    }

                </section>

            </section>
        </div>
    )
}
