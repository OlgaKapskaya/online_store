import {FC} from "react";
import {Input} from "../../../common/components/Input/Input";
import s from "./LoginForm.module.css"
import {Button} from "@material-ui/core";
import {useLoginForm} from "./hooks/useLoginForm";

export const LoginForm: FC = () => {
    const {formik, isLoading} = useLoginForm()
    return (
        <form onSubmit={formik.handleSubmit} className={s.form}>
            <Input onChange={formik.handleChange}
                   type="email"
                   value={formik.values.email}
                   name="email"
                   helperText={formik.touched.email && formik.errors.email}
                   label="Введите email"
            />
            <Input onChange={formik.handleChange}
                   type="password"
                   value={formik.values.password}
                   name="password"
                   helperText={formik.touched.password && formik.errors.password}
                   label="Введите пароль"
            />
            {
                isLoading
                    ? <Button variant="contained" color="primary"> Loading ... </Button>
                    : <Button type="submit" variant="contained" color="primary"> Войти </Button>
            }

        </form>
    )
}