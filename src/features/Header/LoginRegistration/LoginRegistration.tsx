import React, {FC, useState} from "react";
import {FormDialog} from "../../../common/components/FormDialog/FormDialog";
import {LoginForm} from "../../Forms/LoginForm/LoginForm";
import {ExitToApp, LockOpen} from "@material-ui/icons";
import s from "./LoginRegistration.module.css"
import {IconsButton} from "../../../common/components/Buttons/IconsButton/IconsButton";
import {RegistrationForm} from "../../Forms/RegistrationForm/RegistrationForm";

export const LoginRegistration: FC = () => {
    const [isVisibleLogin, setIsVisibleLogin] = useState(false)
    const [isVisibleRegister, setIsVisibleRegister] = useState(false)
    return (
        <div className={s.loginContainer}>
            <IconsButton onClick={() => setIsVisibleLogin(true)} icon={<ExitToApp/>}/>
            <FormDialog form={<LoginForm/>}
                        isOpen={isVisibleLogin}
                        setIsOpen={setIsVisibleLogin}
                        title="Login"
             />
            <IconsButton onClick={() => setIsVisibleRegister(true)} icon={<LockOpen/>}/>
            <FormDialog form={<RegistrationForm/>}
                        isOpen={isVisibleRegister}
                        setIsOpen={setIsVisibleRegister}
                        title="Registration"
            />
        </div>
    )
}