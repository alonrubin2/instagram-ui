import * as yup from 'yup';
const emailValidate = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
import environment from '../environments/index';


export const registerSchema = yup.object().shape({
    username: yup.string()
        .min(3, "The Username you have chosen is too short")
        .max(16, "Username exceeds maximum length")
        .required("Please choose a Username")
        .test('isUnique', 'This Username is already taken', (value) => isUnique('username', value)),

    email: yup.string()
        .max(160)
        .matches(emailValidate, "Invalid Email Adress")
        .required("Please submit a valid Email address")
        .test('isUnique', 'This Email is already registered', (value) => isUnique('email', value)),

    password: yup.string()
        .min(8, "The Password you have chosen is too short")
        .max(16, "Password exceeds maximum length")
        .required("Please submit a valid Password"),

    agreeToTerms: yup.mixed()
        .oneOf([true], "You must agree to Terms and Conditions")

});

const memo = {
    email: {},
    username: {}
};

async function isUnique(field, value) {
    if (memo[field].hasOwnProperty(value)) {
        return memo[field][value];
    }
    return await fetch(environment.apiUrl + `/user/check?${field}=${value}`)
        .then(res => res.json())
        .then(res => {
            memo[field][value] = !res;
            return memo[field][value];
        })
};