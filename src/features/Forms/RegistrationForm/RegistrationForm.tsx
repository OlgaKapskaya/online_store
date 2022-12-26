import {FC} from "react";
import s from "../LoginForm/LoginForm.module.css";
import {Input} from "../../../common/components/Input/Input";
import {Button} from "@material-ui/core";
import {SnackBar} from "../../../common/components/SnackBar/SnackBar";
import {useRegistrationForm} from "./hooks/useRegistrationForm";

type RegistrationFormPropsType = {
    setIsOpen: (open: boolean) => void
}
export const RegistrationForm: FC<RegistrationFormPropsType> = ({setIsOpen}) => {
    const {formik, showHint, isLoading} = useRegistrationForm(setIsOpen)

    return (
        <form onSubmit={formik.handleSubmit} className={s.form}>
            <Input onChange={formik.handleChange}
                   type="email"
                   value={formik.values.email}
                   name="email"
                   helperText={formik.touched.email && formik.errors.email}
                   label="Enter your email"
            />
            <Input onChange={formik.handleChange}
                   type="password"
                   value={formik.values.password}
                   name="password"
                   helperText={formik.touched.password && formik.errors.password}
                   label="Enter your password"
            />
            <Input onChange={formik.handleChange}
                   type="password"
                   value={formik.values.passwordRepeat}
                   name="passwordRepeat"
                   helperText={formik.touched.passwordRepeat && formik.errors.passwordRepeat}
                   label="Repeat your password"
            />
            {
                isLoading
                    ? <Button variant="contained" color="primary"> Loading ... </Button>
                    : <Button type="submit" variant="contained" color="primary"> Register </Button>
            }
        <SnackBar type="error" message="The entered passwords do not match." show={showHint}/>
        </form>
    )
}