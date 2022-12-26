import {FC} from "react";
import {useFormik} from "formik";
import {Input} from "../../../common/components/Input/Input";
import {loginValidationSchema} from "../../../common/utils/validation/loginValidate";
import s from "./LoginForm.module.css"
import {Button} from "@material-ui/core";
import {useAppDispatch} from "../../../common/hooks/react-redux-hooks";
import {getUserTC} from "../../../bll/reducers/userReducer";

export const LoginForm: FC = () => {
    const dispatch = useAppDispatch()
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: loginValidationSchema,
        onSubmit: (values, actions) => {
            dispatch(getUserTC(values.email, values.password))
            actions.resetForm()
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
            <Button type="submit" variant="contained" color="primary"> Login </Button>
        </form>
    )
}