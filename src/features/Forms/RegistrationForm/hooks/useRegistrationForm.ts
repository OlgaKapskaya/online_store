import {useState} from "react";
import {useAppDispatch, useAppSelector} from "../../../../common/hooks/react-redux-hooks";
import {useFormik} from "formik";
import {registrationValidationSchema} from "../../../../common/utils/validation/registrationValidate";
import {registerUserTC} from "../../../../bll/reducers/userReducer";

export const useRegistrationForm = (setIsOpen: (open: boolean) => void) => {

    const [showHint, setShowHint] = useState<boolean>(false)
    const dispatch = useAppDispatch()
    const isLoading = useAppSelector(state => state.users.isLoading)
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
                setIsOpen(false)
                setShowHint(false)
            } else {
                setShowHint(true)
            }
        },
    });
    return {formik, showHint, isLoading}
}