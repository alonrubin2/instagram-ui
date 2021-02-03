import * as yup from 'yup';
const emailValidate = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const registerSchema = yup.object().shape({
    username: yup.string()
        .min(3)
        .max(16)
        .required(),
    email: yup.string()
        .max(160)
        .matches(emailValidate, "Invalid Email Adress")
        .required(),
    password: yup.string()
        .min(8)
        .max(16)
        .required(),
    agreeToTerms: yup.mixed()
        .oneOf([true], "You must agree to Terms and Conditions")
});