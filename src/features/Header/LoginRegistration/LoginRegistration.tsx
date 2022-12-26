import React, {FC, useState} from "react";
import {FormDialog} from "../../../common/components/FormDialog/FormDialog";
import {LoginForm} from "../../Forms/LoginForm/LoginForm";
import {ExitToApp} from "@material-ui/icons";
import s from "./LoginRegistration.module.css"
import {IconsButton} from "../../../common/components/Buttons/IconsButton/IconsButton";

export const LoginRegistration: FC = () => {
    const [isVisibleLogin, setIsVisibleLogin] = useState(false)
    return (
        <div className={s.loginContainer}>
            <IconsButton onClick={() => setIsVisibleLogin(true)} icon={<ExitToApp/>}/>
            <FormDialog form={<LoginForm/>}
                        isOpen={isVisibleLogin}
                        setIsOpen={setIsVisibleLogin}
                        title="Login"
                        buttonName="Login"/>
        </div>
    )
}