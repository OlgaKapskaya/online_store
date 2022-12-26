import React, {FC, useState} from "react";
import {FormDialog} from "../../../common/components/FormDialog/FormDialog";
import {LoginForm} from "../../Forms/LoginForm/LoginForm";
import {ExitToApp, LockOpen} from "@material-ui/icons";
import s from "./LoginRegistration.module.css"
import {IconsButton} from "../../../common/components/Buttons/IconsButton/IconsButton";
import {RegistrationForm} from "../../Forms/RegistrationForm/RegistrationForm";
type MenuPropsType = {
    isVisible: boolean
    setIsVisible: (visible: boolean) => void
}
export const LoginRegistration: FC = () => {
    const [isVisibleLogin, setIsVisibleLogin] = useState(false)
    const [isVisibleRegister, setIsVisibleRegister] = useState(false)
    return (
        <div className={s.loginContainer}>
            <LoginMenu isVisible={isVisibleLogin} setIsVisible={setIsVisibleLogin}/>
            <RegisterMenu isVisible={isVisibleRegister} setIsVisible={setIsVisibleRegister}/>
        </div>
    )
}

const LoginMenu:FC<MenuPropsType> = ({isVisible, setIsVisible}) => {
    return (
        <>
            <IconsButton onClick={() => setIsVisible(true)} icon={<ExitToApp/>} hint="Login"/>
            <FormDialog form={<LoginForm/>}
                        isOpen={isVisible}
                        setIsOpen={setIsVisible}
                        title="Login"
            />
        </>
    )
}
const RegisterMenu:FC<MenuPropsType> = ({isVisible, setIsVisible}) => {
    return (
        <>
            <IconsButton onClick={() => setIsVisible(true)} icon={<LockOpen/>} hint="Register"/>
            <FormDialog form={<RegistrationForm setIsOpen={setIsVisible}/>}
                        isOpen={isVisible}
                        setIsOpen={setIsVisible}
                        title="Registration"
            />
        </>
    )
}