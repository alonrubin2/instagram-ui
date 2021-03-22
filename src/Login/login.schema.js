import * as yup from 'yup';


export const loginSchema = yup.object().shape({
    username: yup.string()
        .required("Please enter your Username"),
    password: yup.string()
        .required("Please enter your Password"),
});