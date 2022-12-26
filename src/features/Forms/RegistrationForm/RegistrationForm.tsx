import {FC} from "react";
import {useAppDispatch} from "../../../common/hooks/react-redux-hooks";
import {useFormik} from "formik";
import {registerUserTC} from "../../../bll/reducers/userReducer";
import s from "../LoginForm/LoginForm.module.css";
import {Input} from "../../../common/components/Input/Input";
import {Button} from "@material-ui/core";
import {registrationValidationSchema} from "../../../common/utils/validation/registrationValidate";

export const RegistrationForm: FC = () => {

    const dispatch = useAppDispatch()
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            passwordRepeat: ''
        },
        validationSchema: registrationValidationSchema,
        onSubmit: (values, actions) => {
            if (values.password === values.passwordRepeat){
                dispatch(registerUserTC(values.email, values.password))
                actions.resetForm()
            }
        },
    });

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
            <Button type="submit" variant="contained" color="primary"> Register </Button>
        </form>
    )
}