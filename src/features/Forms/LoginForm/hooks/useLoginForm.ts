import {useAppDispatch, useAppSelector} from "../../../../common/hooks/react-redux-hooks";
import {useFormik} from "formik";
import {loginValidationSchema} from "../../../../common/utils/validation/loginValidate";
import {getUserTC} from "../../../../bll/reducers/userReducer";

export const useLoginForm = () => {
    const dispatch = useAppDispatch()
    const isLoading = useAppSelector(state => state.users.isLoading)
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
    return {formik, isLoading}
}