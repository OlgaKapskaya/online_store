import * as yup from "yup";
import YupPassword from 'yup-password'
YupPassword(yup)

const MIN_MESSAGE_LENGTH = 8

export const loginValidationSchema = yup.object({
    email: yup
        .string()
        .email('Enter a valid email')
        .required('Email is required'),
    password: yup
        .string().password()
        .min(MIN_MESSAGE_LENGTH, `Password must contain ${MIN_MESSAGE_LENGTH} or more characters with at least one of each: uppercase, lowercase, number and special`)
        .required('Password is required'),
});