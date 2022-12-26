import * as yup from "yup";
import YupPassword from 'yup-password'
YupPassword(yup)

const MIN_MESSAGE_LENGTH = 8

export const registrationValidationSchema = yup.object({
    email: yup
        .string()
        .email('Enter a valid email')
        .required('Email is required'),
    password: yup
        .string().password()
        .min(MIN_MESSAGE_LENGTH, `Password must contain ${MIN_MESSAGE_LENGTH} or more characters with at least one of each: uppercase, lowercase, number and special`)
        .minLowercase(1, 'Password must contain at least 1 lower case letter')
        .minUppercase(1, 'Password must contain at least 1 upper case letter')
        .minNumbers(1, 'Password must contain at least 1 number')
        .minSymbols(1, 'Password must contain at least 1 special character')
        .required('Password is required'),
    passwordRepeat: yup
        .string().password()
        .min(MIN_MESSAGE_LENGTH, `Password must contain ${MIN_MESSAGE_LENGTH} or more characters with at least one of each: uppercase, lowercase, number and special`)
        .minLowercase(1, 'Password must contain at least 1 lower case letter')
        .minUppercase(1, 'Password must contain at least 1 upper case letter')
        .minNumbers(1, 'Password must contain at least 1 number')
        .minSymbols(1, 'Password must contain at least 1 special character')
        .required('Field is required'),
});